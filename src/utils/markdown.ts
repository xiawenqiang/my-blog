import MarkdownIt from 'markdown-it'
import type { BlogPost } from '../types'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

interface FrontmatterData {
  title?: string
  date?: string
  tags?: string[]
  excerpt?: string
  cover?: string
}

function parseFrontmatter(raw: string): { data: FrontmatterData; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { data: {}, content: raw }
  }

  const yamlBlock = match[1]
  const content = match[2]
  const data: FrontmatterData = {}

  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const colonIdx = trimmed.indexOf(':')
    if (colonIdx === -1) continue

    const key = trimmed.slice(0, colonIdx).trim()
    const value = trimmed.slice(colonIdx + 1).trim()

    switch (key) {
      case 'title':
      case 'date':
      case 'excerpt':
      case 'cover':
        data[key] = value
        break
      case 'tags':
        data.tags = parseTags(value)
        break
    }
  }

  return { data, content }
}

function parseTags(value: string): string[] {
  const trimmed = value.trim()
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((t) => t.trim().replace(/['"]/g, ''))
      .filter(Boolean)
  }
  return trimmed.split(/\s+/).filter(Boolean)
}

export function parseMarkdown(raw: string, slug: string): BlogPost {
  const { data, content } = parseFrontmatter(raw)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    cover: data.cover || undefined,
    content: md.render(content),
    rawContent: content,
  }
}

export function renderMarkdown(content: string): string {
  return md.render(content)
}

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { parseMarkdown } from '../utils/markdown'
import type { BlogPost } from '../types'

const postModules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<BlogPost[]>([])

  function loadPosts() {
    const loaded: BlogPost[] = []

    for (const [path, raw] of Object.entries(postModules)) {
      const slug = (path.split('/').pop() || '').replace(/\.md$/, '')
      if (slug && typeof raw === 'string' && raw.length > 0) {
        loaded.push(parseMarkdown(raw, slug))
      }
    }

    loaded.sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    posts.value = loaded
  }

  const postCount = computed(() => posts.value.length)

  const tags = computed(() => {
    const tagSet = new Set<string>()
    for (const post of posts.value) {
      for (const tag of post.tags) {
        tagSet.add(tag)
      }
    }
    return [...tagSet].sort()
  })

  function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.value.find((p) => p.slug === slug)
  }

  function getPostsByTag(tag: string): BlogPost[] {
    return posts.value.filter((p) => p.tags.includes(tag))
  }

  loadPosts()

  return {
    posts,
    postCount,
    tags,
    loadPosts,
    getPostBySlug,
    getPostsByTag,
  }
})

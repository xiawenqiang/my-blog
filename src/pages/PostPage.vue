<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePostsStore } from '../stores/posts'

const route = useRoute()
const postsStore = usePostsStore()

const slug = computed(() => route.params.slug as string)
const post = computed(() => postsStore.getPostBySlug(slug.value))

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const tagColors = [
  'bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/20',
  'bg-[var(--color-gold-light)] text-[var(--color-gold)] border-[var(--color-gold)]/30',
  'bg-[var(--color-teal-light)] text-[var(--color-teal)] border-[var(--color-teal)]/30',
]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <!-- 未找到 -->
    <div v-if="!post" class="text-center py-16">
      <h1 class="text-2xl font-bold text-[var(--color-heading)] mb-4">
        文章未找到
      </h1>
      <p class="text-[var(--color-text-secondary)] mb-6">
        没有找到「{{ slug }}」这篇文章。
      </p>
      <RouterLink
        to="/"
        class="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline"
      >
        ← 返回首页
      </RouterLink>
    </div>

    <!-- 文章内容 -->
    <article v-else>
      <header class="mb-8">
        <RouterLink
          to="/"
          class="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors no-underline mb-4 inline-flex items-center gap-1"
        >
          <span>←</span> 返回首页
        </RouterLink>

        <h1 class="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4 leading-tight">
          {{ post.title }}
        </h1>

        <div class="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] flex-wrap">
          <time v-if="post.date" :datetime="post.date" class="flex items-center gap-1.5">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
            {{ formatDate(post.date) }}
          </time>
          <span
            v-for="(tag, ti) in post.tags"
            :key="tag"
            :class="tagColors[ti % tagColors.length]"
            class="px-2.5 py-0.5 text-xs rounded-full border"
          >
            #{{ tag }}
          </span>
        </div>

        <img
          v-if="post.cover"
          :src="post.cover"
          :alt="post.title"
          class="w-full rounded-xl mt-6 object-cover max-h-96 shadow-sm"
        />
      </header>

      <!-- 正文 -->
      <div class="prose" v-html="post.content"></div>

      <!-- 底部 -->
      <footer class="mt-16 pt-8 border-t border-[var(--color-border)]">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline text-sm"
          >
            ← 返回首页
          </RouterLink>

          <div v-if="post.tags?.length" class="flex items-center gap-2 flex-wrap">
            <span class="text-xs text-[var(--color-text-secondary)]">标签：</span>
            <span
              v-for="(tag, ti) in post.tags"
              :key="tag"
              :class="tagColors[ti % tagColors.length]"
              class="px-2.5 py-0.5 text-xs rounded-full border"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </footer>
    </article>
  </div>
</template>

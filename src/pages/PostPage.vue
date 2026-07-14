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
          class="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline mb-4 inline-block"
        >
          ← 返回首页
        </RouterLink>

        <h1 class="text-4xl font-bold text-[var(--color-heading)] mb-4">
          {{ post.title }}
        </h1>

        <div class="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
          <time v-if="post.date" :datetime="post.date">
            {{ formatDate(post.date) }}
          </time>
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-2 py-0.5 text-xs rounded-full bg-[var(--color-code-bg)] text-[var(--color-accent)]"
          >
            #{{ tag }}
          </span>
        </div>

        <img
          v-if="post.cover"
          :src="post.cover"
          :alt="post.title"
          class="w-full rounded-xl mt-6 object-cover max-h-96"
        />
      </header>

      <!-- 正文 -->
      <div class="prose" v-html="post.content"></div>

      <!-- 底部 -->
      <footer class="mt-12 pt-8 border-t border-[var(--color-border)]">
        <RouterLink
          to="/"
          class="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline"
        >
          ← 返回首页
        </RouterLink>
      </footer>
    </article>
  </div>
</template>

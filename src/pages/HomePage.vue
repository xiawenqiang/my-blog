<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { usePostsStore } from '../stores/posts'

const postsStore = usePostsStore()
const posts = computed(() => postsStore.posts)
const tags = computed(() => postsStore.tags)

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Header -->
    <section class="mb-16 text-center">
      <h1 class="text-4xl font-bold text-[var(--color-heading)] mb-4">
        Welcome to My Blog
      </h1>
      <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
        Thoughts, tutorials, and insights about web development, programming, and technology.
      </p>
    </section>

    <!-- Tags -->
    <section v-if="tags.length > 0" class="mb-12">
      <div class="flex flex-wrap justify-center gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 text-sm rounded-full bg-[var(--color-code-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
        >
          {{ tag }}
        </span>
      </div>
    </section>

    <!-- Post List -->
    <section v-if="posts.length > 0" class="space-y-8">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
      >
        <RouterLink
          :to="{ name: 'post', params: { slug: post.slug } }"
          class="no-underline"
        >
          <h2 class="text-2xl font-bold text-[var(--color-heading)] hover:text-[var(--color-accent)] transition-colors mb-2">
            {{ post.title }}
          </h2>
        </RouterLink>

        <div class="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] mb-3">
          <time v-if="post.date" :datetime="post.date">
            {{ formatDate(post.date) }}
          </time>
          <span v-if="post.tags.length > 0">
            ·
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="ml-1 text-[var(--color-accent)]"
            >
              #{{ tag }}
            </span>
          </span>
        </div>

        <p v-if="post.excerpt" class="text-[var(--color-text-secondary)] leading-relaxed">
          {{ post.excerpt }}
        </p>

        <RouterLink
          :to="{ name: 'post', params: { slug: post.slug } }"
          class="inline-block mt-4 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] no-underline"
        >
          Read more →
        </RouterLink>
      </article>
    </section>

    <!-- Empty State -->
    <section v-else class="text-center py-16">
      <p class="text-lg text-[var(--color-text-secondary)]">
        No posts yet. Add <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">.md</code> files to <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">src/posts/</code> to get started.
      </p>
    </section>
  </div>
</template>

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
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- ==================== 个人介绍卡片 ==================== -->
    <section class="mb-14">
      <div class="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl
                  bg-gradient-to-br from-white via-white to-blue-50/50
                  dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30
                  border border-[var(--color-border)] shadow-sm">
        <!-- 头像 -->
        <RouterLink to="/about" class="shrink-0 no-underline">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden
                      ring-3 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg)]
                      hover:scale-105 transition-transform duration-300
                      bg-gradient-to-br from-blue-500 to-indigo-600
                      flex items-center justify-center shadow-md">
            <span class="text-4xl sm:text-5xl text-white font-bold select-none">夏</span>
          </div>
        </RouterLink>

        <!-- 文字介绍 -->
        <div class="flex-1 text-center sm:text-left">
          <RouterLink to="/about" class="no-underline">
            <h1 class="text-2xl sm:text-3xl font-bold text-[var(--color-heading)]
                       hover:text-[var(--color-accent)] transition-colors">
              夏文强
            </h1>
          </RouterLink>
          <p class="text-[var(--color-accent)] text-sm font-medium mt-1">全栈开发工程师</p>
          <p class="text-[var(--color-text-secondary)] text-sm mt-2 leading-relaxed max-w-md">
            热爱技术，专注前端工程化与全栈开发。<br class="hidden sm:block" />
            这里记录我的学习、思考和项目经验。
          </p>

          <!-- 微数据 -->
          <div class="flex items-center gap-4 mt-3 justify-center sm:justify-start text-xs text-[var(--color-text-secondary)]">
            <span class="flex items-center gap-1">
              <span class="text-base">📍</span> 中国
            </span>
            <span class="flex items-center gap-1">
              <span class="text-base">📝</span> {{ posts.length }} 篇文章
            </span>
            <RouterLink
              to="/about"
              class="flex items-center gap-1 text-[var(--color-accent)] hover:underline no-underline font-medium"
            >
              了解更多 →
            </RouterLink>
          </div>
        </div>

        <!-- 简历下载 -->
        <a
          href="/夏文强-简历附件-2026.1.pdf"
          download
          class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                 bg-blue-500 text-white text-sm font-medium
                 hover:bg-blue-600 shadow-sm hover:shadow-md
                 transition-all duration-200 no-underline"
        >
          <span>📄</span><span>简历</span>
        </a>
      </div>
    </section>

    <!-- ==================== 文章标签 ==================== -->
    <section v-if="tags.length > 0" class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-sm font-medium text-[var(--color-text-secondary)]">文章标签</span>
        <div class="flex-1 h-px bg-[var(--color-border)]" />
      </div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 text-sm rounded-full bg-[var(--color-code-bg)]
                 text-[var(--color-text-secondary)] border border-[var(--color-border)]
                 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                 transition-colors cursor-default"
        >
          # {{ tag }}
        </span>
      </div>
    </section>

    <!-- ==================== 文章列表 ==================== -->
    <section>
      <div class="flex items-center gap-3 mb-5">
        <span class="text-sm font-medium text-[var(--color-text-secondary)]">最新文章</span>
        <div class="flex-1 h-px bg-[var(--color-border)]" />
      </div>

      <div v-if="posts.length > 0" class="space-y-5">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="group p-5 sm:p-6 rounded-xl border border-[var(--color-border)]
                 hover:border-[var(--color-accent)]/40 hover:shadow-sm
                 transition-all duration-300"
        >
          <RouterLink
            :to="{ name: 'post', params: { slug: post.slug } }"
            class="no-underline"
          >
            <h2 class="text-xl font-bold text-[var(--color-heading)]
                       group-hover:text-[var(--color-accent)] transition-colors mb-2">
              {{ post.title }}
            </h2>
          </RouterLink>

          <div class="flex items-center gap-3 text-xs text-[var(--color-text-secondary)] mb-3">
            <time v-if="post.date" :datetime="post.date">
              {{ formatDate(post.date) }}
            </time>
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-[var(--color-accent)]"
            >
              #{{ tag }}
            </span>
          </div>

          <p v-if="post.excerpt" class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {{ post.excerpt }}
          </p>

          <RouterLink
            :to="{ name: 'post', params: { slug: post.slug } }"
            class="inline-block mt-3 text-sm font-medium text-[var(--color-accent)]
                   hover:text-[var(--color-accent-hover)] no-underline"
          >
            阅读全文 →
          </RouterLink>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-16">
        <p class="text-[var(--color-text-secondary)]">
          还没有文章。在 <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">src/posts/</code> 目录添加 <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">.md</code> 文件即可开始写作。
        </p>
      </div>
    </section>
  </div>
</template>

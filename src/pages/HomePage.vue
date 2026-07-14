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
  <div class="max-w-4xl mx-auto px-4">
    <!-- ==================== 顶部装饰区域 ==================== -->
    <section class="relative py-14 sm:py-20 text-center overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- 大圆 -->
        <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full
                    bg-blue-500/5 dark:bg-blue-400/5" />
        <div class="absolute -bottom-10 -left-16 w-56 h-56 rounded-full
                    bg-purple-500/5 dark:bg-purple-400/5" />
        <!-- 小装饰圆 -->
        <div class="absolute top-10 left-10 w-3 h-3 rounded-full
                    bg-blue-400/30 dark:bg-blue-400/20" />
        <div class="absolute top-20 right-1/4 w-2 h-2 rounded-full
                    bg-purple-400/30 dark:bg-purple-400/20" />
        <div class="absolute bottom-16 right-20 w-2.5 h-2.5 rounded-full
                    bg-indigo-400/25 dark:bg-indigo-400/15" />
        <!-- 网格点阵 -->
        <div class="absolute top-0 right-0 w-24 h-24 opacity-[0.06] dark:opacity-[0.08]"
             style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 8px 8px;" />
      </div>

      <!-- 主标题 -->
      <div class="relative">
        <p class="text-xs sm:text-sm tracking-widest text-[var(--color-text-secondary)]/60
                  uppercase mb-3">
          Blog &amp; Journal
        </p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold
                   text-[var(--color-heading)] mb-4 tracking-tight">
          我的<span class="text-[var(--color-accent)]">博客</span>
        </h1>
        <p class="text-[var(--color-text-secondary)] max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          记录学习、思考与创造的过程
          <span class="inline-block mx-1.5 text-[var(--color-border)]">·</span>
          分享技术见解与项目经验
        </p>

        <!-- 快捷跳转 -->
        <div class="flex items-center justify-center gap-3 mt-6 flex-wrap">
          <a
            href="#posts"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                   bg-[var(--color-code-bg)] text-sm text-[var(--color-text-secondary)]
                   hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5
                   transition-colors no-underline"
          >
            <span>📝</span> 浏览文章
          </a>
          <RouterLink
            to="/about"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                   bg-[var(--color-code-bg)] text-sm text-[var(--color-text-secondary)]
                   hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5
                   transition-colors no-underline"
          >
            <span>👤</span> 关于我
          </RouterLink>
          <a
            href="/夏文强-简历附件-2026.1.pdf"
            download
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                   bg-blue-500 text-white text-sm font-medium
                   hover:bg-blue-600 transition-colors no-underline shadow-sm"
          >
            <span>📄</span> 下载简历
          </a>
        </div>
      </div>

      <!-- 底部渐变分割 -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px
                  bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
    </section>

    <!-- ==================== 文章列表 ==================== -->
    <section id="posts" class="py-6">
      <div class="flex items-center gap-3 mb-6">
        <span class="inline-flex items-center gap-1.5 text-sm font-semibold
                     text-[var(--color-heading)]">
          <span class="text-base">📝</span> 最新文章
        </span>
        <span class="text-xs text-[var(--color-text-secondary)]/60">
          {{ posts.length }} 篇
        </span>
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

      <div v-else class="text-center py-16">
        <p class="text-[var(--color-text-secondary)]">
          还没有文章。在 <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">src/posts/</code> 目录添加 <code class="px-1.5 py-0.5 rounded bg-[var(--color-code-bg)] text-sm">.md</code> 文件即可开始写作。
        </p>
      </div>
    </section>

    <!-- ==================== 文章标签 ==================== -->
    <section v-if="tags.length > 0" class="py-6">
      <div class="flex items-center gap-3 mb-4">
        <span class="inline-flex items-center gap-1.5 text-sm font-semibold
                     text-[var(--color-heading)]">
          <span class="text-base">🏷️</span> 文章标签
        </span>
        <div class="flex-1 h-px bg-[var(--color-border)]" />
      </div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1.5 text-sm rounded-full bg-[var(--color-code-bg)]
                 text-[var(--color-text-secondary)] border border-[var(--color-border)]
                 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                 hover:bg-[var(--color-accent)]/3 transition-all cursor-default"
        >
          # {{ tag }}
        </span>
      </div>
    </section>

    <!-- ==================== 个人介绍卡片 ==================== -->
    <section class="py-6 mb-12">
      <div class="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl
                  bg-gradient-to-br from-white via-white to-blue-50/50
                  dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30
                  border border-[var(--color-border)] shadow-sm
                  relative overflow-hidden">
        <!-- 装饰 -->
        <div class="absolute top-0 right-0 w-40 h-40 rounded-full
                    bg-blue-400/3 dark:bg-blue-400/3 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <RouterLink to="/about" class="shrink-0 no-underline relative z-10">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden
                      ring-3 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg)]
                      hover:scale-105 transition-transform duration-300
                      bg-gradient-to-br from-blue-500 to-indigo-600
                      flex items-center justify-center shadow-md">
            <span class="text-4xl sm:text-5xl text-white font-bold select-none">夏</span>
          </div>
        </RouterLink>

        <div class="flex-1 text-center sm:text-left relative z-10">
          <RouterLink to="/about" class="no-underline">
            <h2 class="text-xl font-bold text-[var(--color-heading)]
                       hover:text-[var(--color-accent)] transition-colors">
              夏文强
            </h2>
          </RouterLink>
          <p class="text-[var(--color-accent)] text-sm font-medium mt-1">全栈开发工程师</p>
          <p class="text-[var(--color-text-secondary)] text-sm mt-2 leading-relaxed max-w-md">
            热爱技术，专注前端工程化与全栈开发。这里记录我的学习、思考和项目经验。
          </p>

          <div class="flex items-center gap-4 mt-3 justify-center sm:justify-start text-xs">
            <RouterLink
              to="/about"
              class="flex items-center gap-1 text-[var(--color-accent)] hover:underline no-underline font-medium"
            >
              查看完整介绍 →
            </RouterLink>
          </div>
        </div>

        <a
          href="/夏文强-简历附件-2026.1.pdf"
          download
          class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                 bg-blue-500 text-white text-sm font-medium
                 hover:bg-blue-600 shadow-sm hover:shadow-md
                 transition-all duration-200 no-underline relative z-10"
        >
          <span>📄</span><span>简历</span>
        </a>
      </div>
    </section>
  </div>
</template>

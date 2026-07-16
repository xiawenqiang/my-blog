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

// 给标签分配颜色主题
const tagColors = [
  'bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/20',
  'bg-[var(--color-gold-light)] text-[var(--color-gold)] border-[var(--color-gold)]/30',
  'bg-[var(--color-teal-light)] text-[var(--color-teal)] border-[var(--color-teal)]/30',
  'bg-[#39bffe]/8 text-[#39bffe] border-[#39bffe]/25',
]
function tagColorClass(index: number) {
  return tagColors[index % tagColors.length]
}
</script>

<template>
  <div>
    <!-- ==================== 绿色 Hero Banner ==================== -->
    <section class="relative bg-[#559966] py-16 sm:py-24 overflow-hidden">
      <!-- 金色装饰元素 - 右侧 -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- 大金色圆 -->
        <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full
                    bg-[#c9a44a]/20" />
        <!-- 中等金色圆 -->
        <div class="absolute top-1/3 right-16 w-36 h-36 rounded-full
                    bg-[#c9a44a]/15" />
        <!-- 小金点 -->
        <div class="absolute top-8 right-1/4 w-3 h-3 rounded-full bg-[#c9a44a]/40" />
        <div class="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[#c9a44a]/30" />
        <div class="absolute bottom-12 right-10 w-2.5 h-2.5 rounded-full bg-[#c9a44a]/35" />
        <!-- 左侧装饰 -->
        <div class="absolute -bottom-8 -left-8 w-40 h-40 rounded-full
                    bg-[#468357]/20" />
        <div class="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-white/20" />
        <div class="absolute bottom-1/3 left-12 w-1.5 h-1.5 rounded-full bg-white/25" />
        <!-- 网格纹理 -->
        <div class="absolute inset-0 opacity-[0.04]"
             style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 10px 10px;" />
      </div>

      <!-- 主标题内容 -->
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <p class="text-xs sm:text-sm tracking-widest text-white/60 uppercase mb-3">
          Blog &amp; Journal
        </p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold
                   text-white mb-4 tracking-tight">
          我的<span class="text-[#c9a44a]">博客</span>
        </h1>
        <p class="text-white/75 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          记录学习、思考与创造的过程
          <span class="inline-block mx-1.5 text-white/30">·</span>
          分享技术见解与项目经验
        </p>

        <!-- 快捷跳转 -->
        <div class="flex items-center justify-center gap-3 mt-7 flex-wrap">
          <a
            href="#posts"
            class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
                   bg-white/15 text-white text-sm font-medium
                   hover:bg-white/25 transition-colors no-underline backdrop-blur-sm"
          >
            <span>📝</span> 浏览文章
          </a>
          <RouterLink
            to="/about"
            class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
                   bg-white/15 text-white text-sm font-medium
                   hover:bg-white/25 transition-colors no-underline backdrop-blur-sm"
          >
            <span>👤</span> 关于我
          </RouterLink>
          <a
            href="/resume.pdf"
            download
            class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full
                   bg-[#c9a44a] text-white text-sm font-medium
                   hover:bg-[#b8943a] transition-colors no-underline shadow-md"
          >
            <span>📄</span> 下载简历
          </a>
        </div>
      </div>

      <!-- 底部波浪过渡 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="w-full h-auto text-[var(--color-bg)]">
          <path d="M0 48V24C160 0 320 0 480 12C640 24 800 36 960 36C1120 36 1280 20 1440 12V48H0Z"
                fill="currentColor" />
        </svg>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4">
      <!-- ==================== 文章列表 ==================== -->
      <section id="posts" class="py-10">
        <div class="flex items-center gap-3 mb-6">
          <span class="inline-flex items-center gap-1.5 text-sm font-semibold
                       text-[var(--color-heading)]">
            <span class="w-1.5 h-5 rounded-full bg-[var(--color-accent)] inline-block"></span>
            最新文章
          </span>
          <span class="text-xs text-[var(--color-text-secondary)]/60">
            {{ posts.length }} 篇
          </span>
          <div class="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div v-if="posts.length > 0" class="space-y-4">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="group p-5 sm:p-6 rounded-xl border border-[var(--color-border)]
                   bg-[var(--color-card-bg)]
                   hover:border-[var(--color-accent)]/40 hover:shadow-md
                   transition-all duration-300"
          >
            <RouterLink
              :to="{ name: 'post', params: { slug: post.slug } }"
              class="no-underline"
            >
              <h2 class="text-lg sm:text-xl font-bold text-[var(--color-heading)]
                         group-hover:text-[var(--color-accent)] transition-colors mb-2">
                {{ post.title }}
              </h2>
            </RouterLink>

            <div class="flex items-center gap-3 text-xs text-[var(--color-text-secondary)] mb-3">
              <time v-if="post.date" :datetime="post.date" class="flex items-center gap-1">
                <span class="inline-block w-1 h-1 rounded-full bg-[var(--color-accent)]"></span>
                {{ formatDate(post.date) }}
              </time>
            </div>

            <p v-if="post.excerpt" class="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
              {{ post.excerpt }}
            </p>

            <!-- 文章标签 -->
            <div class="flex items-center gap-2 flex-wrap mb-3">
              <span
                v-for="(tag, ti) in post.tags"
                :key="tag"
                :class="tagColorClass(ti)"
                class="px-2 py-0.5 text-xs rounded-full border"
              >
                #{{ tag }}
              </span>
            </div>

            <RouterLink
              :to="{ name: 'post', params: { slug: post.slug } }"
              class="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]
                     hover:text-[var(--color-accent-hover)] no-underline transition-colors"
            >
              阅读全文
              <span class="transition-transform group-hover:translate-x-0.5">→</span>
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
            <span class="w-1.5 h-5 rounded-full bg-[var(--color-gold)] inline-block"></span>
            文章标签
          </span>
          <div class="flex-1 h-px bg-[var(--color-border)]" />
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tag, ti) in tags"
            :key="tag"
            :class="tagColorClass(ti)"
            class="px-3 py-1.5 text-sm rounded-full border cursor-default transition-all hover:scale-105"
          >
            # {{ tag }}
          </span>
        </div>
      </section>

      <!-- ==================== 个人介绍卡片 ==================== -->
      <section class="py-8 mb-12">
        <div class="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl
                    bg-[var(--color-card-bg)]
                    border border-[var(--color-border)] shadow-sm
                    relative overflow-hidden">
          <!-- 装饰 -->
          <div class="absolute top-0 right-0 w-40 h-40 rounded-full
                      bg-[var(--color-accent)]/4 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div class="absolute bottom-0 left-0 w-24 h-24 rounded-full
                      bg-[var(--color-gold)]/8 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <RouterLink to="/about" class="shrink-0 no-underline relative z-10">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden
                        ring-3 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-card-bg)]
                        hover:scale-105 transition-transform duration-300
                        bg-gradient-to-br from-[#559966] to-[#3ab9a8]
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
            href="/resume.pdf"
            download
            class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                   bg-[var(--color-accent)] text-white text-sm font-medium
                   hover:bg-[var(--color-accent-hover)] shadow-sm hover:shadow-md
                   transition-all duration-200 no-underline relative z-10"
          >
            <span>📄</span><span>简历</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

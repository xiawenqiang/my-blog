<script setup lang="ts">
import { ref } from 'vue'

const previewImage = ref<string | null>(null)

function openPreview(url: string) {
  previewImage.value = url
}

function closePreview() {
  previewImage.value = null
}

function handleImageError(e: Event) {
  const el = e.target as HTMLImageElement
  el.style.display = 'none'
  const parent = el.parentElement
  if (parent) {
    const ph = document.createElement('div')
    ph.className = 'w-full h-full flex items-center justify-center text-4xl'
    ph.textContent = '📜'
    parent.appendChild(ph)
  }
}

// ========== 以下信息请自行修改 ==========

const certificates = [
  {
    title: '资深前端开发工程师',
    org: '工业和信息化部',
    date: '2026 年',
    image: '/images/cert-1.jpg',
    desc: '具备高级工程师职称，专注于前端架构设计与工程化实践。',
  },
  {
    title: '全栈开发能力认证',
    org: '技术认证中心',
    date: '2025 年',
    image: '/images/cert-2.jpg',
    desc: '掌握前端到后端的完整技术栈，具备独立交付复杂项目的能力。',
  },
  {
    title: '开源社区贡献者',
    org: '开源技术社区',
    date: '2025 年',
    image: '/images/cert-3.jpg',
    desc: '积极参与开源项目，为多个技术社区贡献代码和文档。',
  },
  {
    title: '计算机相关专业',
    org: '高等院校',
    date: '毕业',
    image: '/images/cert-4.jpg',
    desc: '全日制本科学历，计算机相关专业背景，理论基础扎实。',
  },
]

const honors = [
  { year: '2026', title: '资深前端工程师', detail: '具备复杂业务场景下的架构设计与技术选型能力' },
  { year: '2025', title: '全栈开发实践', detail: '独立完成多个从零到一的全栈项目交付' },
  { year: '2024', title: '技术写作与分享', detail: '持续输出高质量技术文章，帮助更多开发者成长' },
  { year: '2023', title: '开源贡献', detail: '开始积极参与开源社区，提交代码与文档贡献' },
]

const skills = [
  'Vue.js', 'React', 'TypeScript', 'JavaScript',
  'Node.js', 'Python', 'HTML/CSS', 'Tailwind CSS',
  'Git', 'Docker', 'CI/CD', 'RESTful API',
]

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: '💻' },
  { name: '邮箱', url: 'mailto:xiawenqiang@example.com', icon: '📧' },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- ========== 头像 & 简介 ========== -->
    <section class="text-center mb-16">
      <div class="relative inline-block mb-6">
        <div
          class="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[var(--color-accent)] ring-offset-4 ring-offset-[var(--color-bg)] mx-auto
                    shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-400 to-purple-500
                    flex items-center justify-center"
        >
          <span class="text-5xl text-white font-bold">夏</span>
        </div>
        <div class="absolute -bottom-1 -right-1 w-7 h-7 bg-green-400 rounded-full border-4 border-[var(--color-bg)]" title="在线" />
      </div>

      <h1 class="text-3xl font-bold text-[var(--color-heading)] mb-2">夏文强</h1>
      <p class="text-[var(--color-accent)] font-medium mb-3">全栈开发工程师 · 技术写作者</p>
      <p class="text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
        热爱开源与技术分享，专注于前端工程化和全栈开发领域。
        工作之余喜欢写博客记录所学所思，希望能帮助更多开发者少走弯路。
      </p>

      <div class="flex justify-center gap-4 mt-5">
        <a
          v-for="s in socials" :key="s.name"
          :href="s.url" target="_blank" rel="noopener"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full
                 bg-[var(--color-code-bg)] text-[var(--color-text-secondary)]
                 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10
                 transition-colors no-underline"
        >
          <span>{{ s.icon }}</span>
          <span>{{ s.name }}</span>
        </a>

        <!-- 简历下载 -->
        <a
          href="/夏文强-简历附件-2026.1.pdf"
          download
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full
                 bg-blue-500 text-white hover:bg-blue-600
                 transition-colors no-underline shadow-sm"
        >
          <span>📄</span>
          <span>下载简历</span>
        </a>
      </div>
    </section>

    <!-- ========== 数据卡片 ========== -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      <div class="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100
                  dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800/30">
        <div class="text-2xl font-bold text-blue-600">5+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">年开发经验</div>
      </div>
      <div class="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100
                  dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800/30">
        <div class="text-2xl font-bold text-green-600">50+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">篇技术文章</div>
      </div>
      <div class="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100
                  dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800/30">
        <div class="text-2xl font-bold text-purple-600">10+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">开源项目</div>
      </div>
      <div class="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100
                  dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800/30">
        <div class="text-2xl font-bold text-orange-600">3+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">技术认证</div>
      </div>
    </section>

    <!-- ========== 个人介绍长图 ========== -->
    <section class="mb-16">
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-2 text-center">个人介绍</h2>
      <p class="text-sm text-[var(--color-text-secondary)] text-center mb-6">点击图片可放大查看</p>

      <div
        class="relative rounded-xl border border-[var(--color-border)] overflow-hidden
               bg-[var(--color-code-bg)] cursor-pointer group shadow-md
               hover:shadow-lg transition-shadow"
        @click="openPreview('/夏文强_01(1).png')"
      >
        <!-- 滚动容器 -->
        <div class="max-h-[500px] overflow-y-auto scroll-smooth">
          <img
            src="/夏文强_01(1).png"
            alt="夏文强个人介绍"
            class="w-full"
          />
        </div>

        <!-- 顶部渐变遮罩提示 -->
        <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-bg)]/80 to-transparent
                    flex items-start justify-center pt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span class="text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg)]/90 px-3 py-1 rounded-full">
            点击放大查看完整图片
          </span>
        </div>

        <!-- 底部渐变 -->
        <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent
                    flex items-end justify-center pb-3 pointer-events-none">
          <span class="text-xs text-[var(--color-text-secondary)]">↓ 滚动查看更多 ↓</span>
        </div>
      </div>
    </section>

    <!-- ========== 技能标签 ========== -->
    <section class="mb-16">
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-5 text-center">技术栈</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <span
          v-for="s in skills" :key="s"
          class="px-3.5 py-1.5 text-sm rounded-full border border-[var(--color-border)]
                 bg-[var(--color-bg)] text-[var(--color-text)]
                 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                 transition-colors cursor-default"
        >
          {{ s }}
        </span>
      </div>
    </section>

    <!-- ========== 证书资质 ========== -->
    <section class="mb-16">
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-2 text-center">证书 & 资质</h2>
      <p class="text-sm text-[var(--color-text-secondary)] text-center mb-6">点击图片可放大查看</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article
          v-for="cert in certificates" :key="cert.title"
          class="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]
                 overflow-hidden hover:shadow-lg hover:border-[var(--color-accent)]/30
                 transition-all duration-300"
        >
          <div
            class="relative h-48 bg-[var(--color-code-bg)] cursor-pointer overflow-hidden"
            @click="openPreview(cert.image)"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors
                        flex items-center justify-center">
              <span class="opacity-0 group-hover:opacity-100 transition-opacity
                           px-3 py-1.5 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                点击放大
              </span>
            </div>
          </div>

          <div class="p-4">
            <h3 class="font-semibold text-[var(--color-heading)]">{{ cert.title }}</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-[var(--color-text-secondary)]">
              <span class="text-[var(--color-accent)]">{{ cert.org }}</span>
              <span>·</span>
              <span>{{ cert.date }}</span>
            </div>
            <p class="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">{{ cert.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- ========== 荣誉成就（时间线） ========== -->
    <section class="mb-16">
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-6 text-center">成长历程</h2>

      <div class="relative pl-8 border-l-2 border-[var(--color-border)] ml-4 space-y-8">
        <div
          v-for="h in honors" :key="h.year + h.title"
          class="relative"
        >
          <div class="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full
                      bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

          <div class="p-4 rounded-lg bg-[var(--color-code-bg)]/50 border border-[var(--color-border)]
                      hover:border-[var(--color-accent)]/30 transition-colors">
            <span class="text-xs font-bold text-[var(--color-accent)] tracking-wide">{{ h.year }}</span>
            <h3 class="font-semibold text-[var(--color-heading)] mt-1">{{ h.title }}</h3>
            <p class="text-sm text-[var(--color-text-secondary)] mt-1">{{ h.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 联系我 ========== -->
    <section class="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50
                    dark:from-blue-900/10 dark:to-purple-900/10
                    border border-[var(--color-border)]">
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-2">联系我</h2>
      <p class="text-sm text-[var(--color-text-secondary)] mb-5">
        欢迎技术交流与合作探讨 👋
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <a
          v-for="s in socials" :key="s.name"
          :href="s.url" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl no-underline
                 bg-white dark:bg-gray-800 shadow-sm border border-[var(--color-border)]
                 hover:shadow-md hover:border-[var(--color-accent)]
                 transition-all duration-200"
        >
          <span class="text-lg">{{ s.icon }}</span>
          <span class="text-sm font-medium text-[var(--color-heading)]">{{ s.name }}</span>
        </a>
        <a
          href="/夏文强-简历附件-2026.1.pdf"
          download
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl no-underline
                 bg-blue-500 text-white shadow-sm
                 hover:bg-blue-600 hover:shadow-md
                 transition-all duration-200"
        >
          <span class="text-lg">📄</span>
          <span class="text-sm font-medium">下载简历 PDF</span>
        </a>
      </div>
    </section>

    <!-- ========== 图片预览弹窗 ========== -->
    <Teleport to="body">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
        @click.self="closePreview"
      >
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
          @click="closePreview"
        >
          ✕
        </button>
        <div class="max-w-full max-h-[90vh] overflow-auto rounded-xl">
          <img
            :src="previewImage"
            alt="预览"
            class="max-w-full object-contain shadow-2xl"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

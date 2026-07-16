<script setup lang="ts">
import { ref } from 'vue'

const previewImage = ref<string | null>(null)

function openPreview(url: string) {
  previewImage.value = url
}

function closePreview() {
  previewImage.value = null
}

const skills = [
  'Vue.js', 'React', 'TypeScript', 'JavaScript',
  'Node.js', 'Python', 'HTML/CSS', 'Tailwind CSS',
  'Git', 'Docker', 'CI/CD', 'API 设计',
]

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: '💻' },
  { name: '邮箱', url: 'mailto:xiawenqiang@example.com', icon: '📧' },
]

// 技能标签颜色
const skillColors = [
  'bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/20',
  'bg-[var(--color-gold-light)] text-[var(--color-gold)] border-[var(--color-gold)]/30',
  'bg-[var(--color-teal-light)] text-[var(--color-teal)] border-[var(--color-teal)]/30',
]
function skillColorClass(index: number) {
  return skillColors[index % skillColors.length]
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- ==================== 头像 & 简介 ==================== -->
    <section class="text-center mb-12">
      <div class="inline-block mb-5">
        <div
          class="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[var(--color-accent)]
                 ring-offset-4 ring-offset-[var(--color-bg)] mx-auto shadow-lg
                 bg-gradient-to-br from-[#559966] to-[#3ab9a8]
                 flex items-center justify-center"
        >
          <span class="text-5xl text-white font-bold select-none">夏</span>
        </div>
      </div>

      <h1 class="text-3xl font-bold text-[var(--color-heading)] mb-2">夏文强</h1>
      <p class="text-[var(--color-accent)] font-medium mb-3">全栈开发工程师</p>
      <p class="text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed text-sm">
        热爱技术，专注前端工程化与全栈开发，乐于分享与写作。
      </p>

      <div class="flex justify-center gap-3 mt-5 flex-wrap">
        <a
          v-for="s in socials" :key="s.name"
          :href="s.url" target="_blank" rel="noopener"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full
                 bg-[var(--color-code-bg)] text-[var(--color-text-secondary)]
                 hover:text-[var(--color-accent)] transition-colors no-underline
                 border border-transparent hover:border-[var(--color-accent)]/20"
        >
          <span>{{ s.icon }}</span><span>{{ s.name }}</span>
        </a>
        <a
          href="/resume.pdf"
          download
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-full
                 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]
                 transition-colors no-underline shadow-sm font-medium"
        >
          <span>📄</span><span>下载简历 PDF</span>
        </a>
      </div>
    </section>

    <!-- ==================== 技能标签 ==================== -->
    <section class="mb-12">
      <h2 class="text-lg font-bold text-[var(--color-heading)] mb-5 text-center flex items-center justify-center gap-2">
        <span class="w-1.5 h-5 rounded-full bg-[var(--color-accent)] inline-block"></span>
        技术栈
      </h2>
      <div class="flex flex-wrap justify-center gap-2">
        <span
          v-for="(s, i) in skills" :key="s"
          :class="skillColorClass(i)"
          class="px-3 py-1.5 text-sm rounded-full border cursor-default transition-all hover:scale-105"
        >
          {{ s }}
        </span>
      </div>
    </section>

    <!-- ==================== 个人介绍长图 ==================== -->
    <section class="mb-12">
      <h2 class="text-lg font-bold text-[var(--color-heading)] mb-2 text-center flex items-center justify-center gap-2">
        <span class="w-1.5 h-5 rounded-full bg-[var(--color-gold)] inline-block"></span>
        个人介绍
      </h2>
      <p class="text-xs text-[var(--color-text-secondary)] text-center mb-5">
        点击图片可放大查看完整内容
      </p>

      <div
        class="rounded-xl border border-[var(--color-border)] overflow-hidden
               bg-[var(--color-card-bg)] shadow-sm cursor-pointer
               hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
        @click="openPreview('/intro.png')"
      >
        <img
          src="/intro.png"
          alt="个人介绍"
          class="w-full"
        />
      </div>

      <p class="text-center mt-3">
        <button
          class="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]
                 underline underline-offset-2 transition-colors cursor-pointer bg-transparent border-0"
          @click="openPreview('/intro.png')"
        >
          点击放大查看完整长图 →
        </button>
      </p>
    </section>

    <!-- ==================== 联系我 ==================== -->
    <section class="text-center p-8 rounded-2xl
                    bg-gradient-to-br from-[var(--color-accent-light)] to-[var(--color-gold-light)]
                    border border-[var(--color-border)]">
      <h2 class="text-lg font-bold text-[var(--color-heading)] mb-2">联系我</h2>
      <p class="text-sm text-[var(--color-text-secondary)] mb-5">
        欢迎技术交流与合作探讨 👋
      </p>
      <div class="flex justify-center gap-3 flex-wrap">
        <a
          v-for="s in socials" :key="s.name"
          :href="s.url" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg no-underline
                 bg-[var(--color-card-bg)] shadow-sm border border-[var(--color-border)]
                 hover:shadow-md hover:border-[var(--color-accent)]/40
                 transition-all duration-200"
        >
          <span class="text-base">{{ s.icon }}</span>
          <span class="text-sm font-medium text-[var(--color-heading)]">{{ s.name }}</span>
        </a>
        <a
          href="/resume.pdf"
          download
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg no-underline
                 bg-[var(--color-accent)] text-white shadow-sm
                 hover:bg-[var(--color-accent-hover)] hover:shadow-md
                 transition-all duration-200"
        >
          <span class="text-base">📄</span>
          <span class="text-sm font-medium">下载简历 PDF</span>
        </a>
      </div>
    </section>

    <!-- ==================== 图片预览弹窗 ==================== -->
    <Teleport to="body">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-4"
        @click.self="closePreview"
      >
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
          @click="closePreview"
        >
          ✕
        </button>
        <div class="max-w-5xl max-h-[90vh] overflow-auto rounded-xl shadow-2xl">
          <img :src="previewImage" alt="预览" class="w-full object-contain" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

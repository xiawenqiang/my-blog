<script setup lang="ts">
import { ref } from 'vue'

// 当前预览的大图
const previewImage = ref<string | null>(null)

function openPreview(url: string) {
  previewImage.value = url
}

function closePreview() {
  previewImage.value = null
}

// ========== 以下数据可自行修改 ==========

// 证书 & 资质图片列表（图片放 public/images/ 目录下）
const certificates = [
  {
    title: '高级软件工程师',
    org: '工业和信息化部',
    date: '2023 年',
    image: '/images/cert-1.jpg',
    desc: '通过全国计算机技术与软件专业技术资格（水平）考试，获得高级工程师职称。',
  },
  {
    title: 'AWS 解决方案架构师',
    org: 'Amazon Web Services',
    date: '2023 年',
    image: '/images/cert-2.jpg',
    desc: '具备在 AWS 云平台上设计和部署可扩展、高可用系统的专业能力。',
  },
  {
    title: 'Vue 开源贡献者',
    org: 'Vue.js 社区',
    date: '2024 年',
    image: '/images/cert-3.jpg',
    desc: '为 Vue 生态提交多个 PR 被合并，参与官方文档翻译和维护工作。',
  },
  {
    title: '计算机科学与技术学士',
    org: '某某大学',
    date: '2020 年',
    image: '/images/cert-4.jpg',
    desc: '全日制本科，主修计算机科学与技术，GPA 3.8/4.0。',
  },
]

// 荣誉 & 成就
const honors = [
  { year: '2024', title: '公司年度最佳技术博客', detail: '内部技术分享平台年度阅读量第一' },
  { year: '2023', title: 'Hackathon 一等奖', detail: '48 小时极限编程大赛，作品获评委全票通过' },
  { year: '2022', title: '开源之星', detail: '个人 GitHub 项目累计获得 5K+ Star' },
  { year: '2021', title: '优秀毕业生', detail: '计算机学院前 5%' },
]

// 技能标签
const skills = [
  'Vue.js', 'React', 'TypeScript', 'Node.js',
  'Python', 'Docker', 'AWS', 'MySQL',
  'Redis', 'Git', 'CI/CD', 'Tailwind CSS',
]

// 社交链接
const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: '💻' },
  { name: '掘金', url: 'https://juejin.cn', icon: '📖' },
  { name: '知乎', url: 'https://zhihu.com', icon: '📝' },
  { name: '邮箱', url: 'mailto:hello@example.com', icon: '📧' },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- ========== 头像 & 简介 ========== -->
    <section class="text-center mb-16">
      <div class="relative inline-block mb-6">
        <div class="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[var(--color-accent)] ring-offset-4 ring-offset-[var(--color-bg)] mx-auto
                    shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/images/avatar.jpg"
            alt="作者头像"
            class="w-full h-full object-cover"
            @error="(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23e5e7eb%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2258%22 text-anchor=%22middle%22 font-size=%2240%22>👤</text></svg>' }"
          />
        </div>
        <!-- 装饰圆点 -->
        <div class="absolute -bottom-1 -right-1 w-7 h-7 bg-green-400 rounded-full border-4 border-[var(--color-bg)]" title="在线"></div>
      </div>

      <h1 class="text-3xl font-bold text-[var(--color-heading)] mb-2">张三</h1>
      <p class="text-[var(--color-accent)] font-medium mb-3">全栈开发工程师 · 技术写作者</p>
      <p class="text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
        热爱开源与技术分享，专注于前端工程化和云原生领域。
        工作之余喜欢写博客记录所学所思，希望能帮助更多开发者少走弯路。
      </p>

      <!-- 社交链接 -->
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
        <div class="text-2xl font-bold text-purple-600">5K+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">GitHub Star</div>
      </div>
      <div class="text-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100
                  dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800/30">
        <div class="text-2xl font-bold text-orange-600">10+</div>
        <div class="text-xs text-[var(--color-text-secondary)] mt-1">开源项目</div>
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
          <!-- 证书图片 -->
          <div
            class="relative h-48 bg-[var(--color-code-bg)] cursor-pointer overflow-hidden"
            @click="openPreview(cert.image)"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
                const parent = (e.target as HTMLElement).parentElement
                if (parent) {
                  const placeholder = document.createElement('div')
                  placeholder.className = 'w-full h-full flex items-center justify-center text-4xl'
                  placeholder.textContent = '📜'
                  parent.appendChild(placeholder)
                }
              }"
            />
            <!-- 悬浮遮罩 -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors
                        flex items-center justify-center">
              <span class="opacity-0 group-hover:opacity-100 transition-opacity
                           px-3 py-1.5 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                点击放大
              </span>
            </div>
          </div>

          <!-- 证书信息 -->
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
      <h2 class="text-xl font-bold text-[var(--color-heading)] mb-6 text-center">荣誉 & 成就</h2>

      <div class="relative pl-8 border-l-2 border-[var(--color-border)] ml-4 space-y-8">
        <div
          v-for="h in honors" :key="h.year + h.title"
          class="relative"
        >
          <!-- 时间线圆点 -->
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
        欢迎技术交流、合作探讨，或者只是来打个招呼 👋
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
      </div>
    </section>

    <!-- ========== 图片预览弹窗 ========== -->
    <Teleport to="body">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
        @click.self="closePreview"
      >
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl transition-colors"
          @click="closePreview"
        >
          ✕
        </button>
        <img
          :src="previewImage"
          alt="证书预览"
          class="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[var(--color-bg)]">
    <!-- ========== 绿色顶部导航 ========== -->
    <header class="bg-[#559966] sticky top-0 z-40 shadow-md">
      <nav class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <RouterLink
          to="/"
          class="text-xl font-bold text-white hover:text-white/85 transition-colors no-underline tracking-tight"
        >
          我的博客
        </RouterLink>
        <div class="flex items-center gap-6">
          <RouterLink
            to="/"
            class="text-white/80 hover:text-white transition-colors no-underline text-sm font-medium"
          >
            首页
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-white/80 hover:text-white transition-colors no-underline text-sm font-medium"
          >
            关于
          </RouterLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/80 hover:text-white transition-colors no-underline text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- ========== 底部 ========== -->
    <footer class="border-t border-[var(--color-border)] py-8 mt-12 bg-[var(--color-card-bg)]">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm text-[var(--color-text-secondary)]">
        <p>&copy; {{ new Date().getFullYear() }} 我的博客 · 基于 Vue + Vite 构建</p>
      </div>
    </footer>
  </div>
</template>

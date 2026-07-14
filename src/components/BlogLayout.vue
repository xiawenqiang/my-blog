<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-[var(--color-border)]">
      <nav class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <RouterLink
          to="/"
          class="text-xl font-bold text-[var(--color-heading)] hover:text-[var(--color-accent)] transition-colors no-underline"
        >
          My Blog
        </RouterLink>
        <div class="flex items-center gap-6">
          <RouterLink
            to="/"
            class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline"
          >
            Home
          </RouterLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-[var(--color-border)] py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm text-[var(--color-text-secondary)]">
        <p>&copy; {{ new Date().getFullYear() }} My Blog. Built with Vue + Vite.</p>
      </div>
    </footer>
  </div>
</template>

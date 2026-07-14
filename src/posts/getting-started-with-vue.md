---
title: Getting Started with Vue 3
date: 2024-01-15
tags: [vue, javascript, frontend]
excerpt: Learn the fundamentals of Vue 3, the progressive JavaScript framework for building modern web interfaces.
---

# Getting Started with Vue 3

Vue 3 is the latest major version of the Vue.js framework, bringing significant improvements in performance, TypeScript support, and developer experience.

## Why Vue 3?

Vue 3 introduces the **Composition API**, which provides a more flexible way to organize component logic. Here are some key benefits:

- **Better TypeScript Support**: Vue 3 is written in TypeScript, providing excellent type inference.
- **Smaller Bundle Size**: The core runtime is tree-shakeable, reducing the final bundle size.
- **Improved Performance**: Faster component initialization, updates, and memory usage.
- **Composition API**: Logic reuse and code organization are more intuitive.

## Setting Up Your First Project

You can create a Vue 3 project using the official scaffolding tool:

```bash
npm create vue@latest
```

This command sets up a project with Vite as the build tool, providing lightning-fast HMR and build times.

## Your First Component

Here's a simple Vue 3 component using the Composition API:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }}
  </button>
</template>
```

## Key Concepts

### Reactive State

Vue 3's reactivity system is built on `ref()` and `reactive()`. Use `ref()` for primitive values and `reactive()` for objects:

```ts
import { ref, reactive } from 'vue'

const message = ref('Hello, Vue!')
const state = reactive({
  user: { name: 'John' },
  items: [],
})
```

### Computed Properties

Computed properties cache their results and only re-evaluate when dependencies change:

```ts
import { ref, computed } from 'vue'

const items = ref([1, 2, 3])
const total = computed(() => items.value.reduce((a, b) => a + b, 0))
```

## What's Next?

Start building with Vue 3 and explore the ecosystem — Vue Router for routing, Pinia for state management, and the rich set of community libraries available.

Happy coding! 🚀

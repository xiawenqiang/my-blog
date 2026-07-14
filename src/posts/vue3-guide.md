---
title: Vue 3 入门指南
date: 2024-03-15
tags: [Vue, JavaScript, 前端]
excerpt: Vue 3 是目前最流行的前端框架之一。本文带你从零开始，快速掌握 Vue 3 的核心概念和实际用法。
---

# Vue 3 入门指南

Vue 3 是 Vue.js 的最新主版本，在性能、TypeScript 支持和开发体验方面都有了质的飞跃。

## 为什么选择 Vue 3

Vue 3 引入了**组合式 API（Composition API）**，让组件逻辑的组织更加灵活。核心优势如下：

- **更出色的 TypeScript 支持**：Vue 3 本身就是用 TypeScript 编写的，类型推断非常准确。
- **更小的打包体积**：核心运行时支持 Tree-shaking，按需打包，最终体积更小。
- **更快的渲染性能**：组件初始化、更新和内存占用都有显著优化。
- **逻辑复用更方便**：组合式 API 让代码组织和逻辑复用更加直观。

## 快速上手

使用官方脚手架工具创建一个 Vue 3 项目：

```bash
npm create vue@latest
```

这条命令会使用 Vite 作为构建工具，提供极快的热更新和构建速度。

## 你的第一个组件

下面是一个使用组合式 API 编写的简单计数器组件：

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
    点击次数：{{ count }}
  </button>
</template>
```

## 核心概念

### 响应式状态

Vue 3 的响应式系统建立在 `ref()` 和 `reactive()` 之上。基本类型用 `ref()`，对象用 `reactive()`：

```ts
import { ref, reactive } from 'vue'

const message = ref('你好，Vue！')
const state = reactive({
  user: { name: '小明' },
  items: [],
})
```

### 计算属性

计算属性会缓存结果，只有依赖变化时才会重新计算：

```ts
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])
const total = computed(() => items.value.reduce((a, b) => a + b, 0))
```

### 侦听器

当需要响应数据变化执行副作用时，使用 `watch`：

```ts
import { ref, watch } from 'vue'

const keyword = ref('')

watch(keyword, (newVal) => {
  console.log(`搜索关键词变为：${newVal}`)
})
```

## 下一步

掌握了这些基础之后，推荐继续学习 Vue Router 路由管理、Pinia 状态管理，以及组件通信的进阶技巧。开始动手写代码吧！

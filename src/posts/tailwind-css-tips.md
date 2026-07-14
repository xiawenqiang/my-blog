---
title: Tailwind CSS 实战心得
date: 2024-05-10
tags: [CSS, Tailwind, 前端, 设计]
excerpt: Tailwind CSS 改变了前端写样式的方式。分享一些实际项目中积累的使用技巧和最佳实践。
---

# Tailwind CSS 实战心得

Tailwind CSS 是一个「实用优先」的 CSS 框架，它彻底改变了传统写样式的方式——不用再写自定义 CSS，而是通过组合预定义的原子类来构建界面。

## 实用优先的理念

传统写法的痛点：CSS 文件越写越大，类名越来越多，改起来心累：

```css
/* 传统写法*/
.card {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.card__title {
  font-size: 20px;
  font-weight: bold;
  color: #111;
}
.card__body {
  color: #666;
  margin-top: 8px;
}
```

用 Tailwind，同样的效果直接写在 HTML 里，所见即所得：

```html
<div class="bg-white rounded-lg p-6 shadow-md">
  <h3 class="text-xl font-bold text-gray-900">卡片标题</h3>
  <p class="text-gray-500 mt-2">卡片内容放在这里。</p>
</div>
```

## 为什么推荐用 Tailwind

### 一、开发速度飞快

不用在 HTML 和 CSS 文件之间来回切换，所有样式就地完成。对组件化开发特别友好。

### 二、设计规范统一

Tailwind 内置了一套精心设计的设计标记——间距、颜色、字号都是标准化的，天然保证视觉一致性。

### 三、响应式轻而易举

在想适配的类名前面加断点前缀就行：

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 手机一列 → 平板两列 → 桌面三列，一行搞定！ -->
</div>
```

### 四、生产包体积极小

Tailwind 会自动删除未使用的样式，最终打包的 CSS 通常只有几 KB。

## 实际使用技巧

### 封装组件，避免滥用 @apply

当一段样式重复出现时，建议封装成 Vue / React 组件，而不是用 `@apply` 指令：

```vue
<template>
  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-blue-400">
    <slot />
  </button>
</template>
```

### 暗色模式

用 `dark:` 前缀轻松适配暗色模式：

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  自动跟随系统主题切换
</div>
```

### 善用配置文件的 content 路径

确保 `tailwind.config.ts` 中正确配置了扫描路径，这样 Tree-shaking 才能正常工作：

```ts
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // ...
}
```

## 总结

Tailwind CSS 初看可能觉得类名太多太乱，但真正用起来之后会发现它让写样式变成了一件轻松愉快的事。如果你还没用过，下一个项目不妨试试——可能会上瘾。

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 使用 hash 模式，兼容所有静态托管（Gitee Pages / GitCode / GitHub Pages 等）
  // URL 格式: /#/ 和 /#/post/slug
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: () => import('../pages/PostPage.vue'),
    },
  ],
})

export default router

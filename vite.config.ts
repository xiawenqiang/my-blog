import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署：如果仓库名不是 my-blog，请修改下面这个值
// 例如仓库名为 blog → base: '/blog/'
const BASE = '/my-blog/'

export default defineConfig(({ command }) => ({
  // 开发环境用 /，生产构建用仓库名作为 base path
  base: command === 'serve' ? '/' : BASE,
  plugins: [vue()],
}))

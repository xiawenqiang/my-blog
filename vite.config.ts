import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署：如果仓库名不是 my-blog，请修改下面这个值
// 例如仓库名为 blog → base: '/blog/'
export default defineConfig({
  base: '/my-blog/',
  plugins: [vue()],
})

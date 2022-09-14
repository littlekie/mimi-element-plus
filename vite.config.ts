import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true // 支持sfc 语法
    }),
    VueJsx()
  ],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      '@': path.join(__dirname, './src'),
      '@mini-element-plus': path.join(__dirname, './packages')
    }
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    // globals: true //  设置 global: true 这一项以后无需 import vitest包相关的函数  就能在文件中使用。
  }
})

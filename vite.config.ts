import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueJsx()],
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
    }
  }
})

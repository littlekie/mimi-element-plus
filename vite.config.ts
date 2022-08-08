import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueJsx()],
  test: {
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})

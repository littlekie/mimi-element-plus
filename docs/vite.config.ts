import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  plugins: [vueJsx()]
})

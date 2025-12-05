import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/cms',
  plugins: [vue()],
  server: {
    port: 8002
  }
})

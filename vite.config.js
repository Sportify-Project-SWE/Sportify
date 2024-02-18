import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        welcome: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/login/index.html'),
        product: resolve(__dirname, 'src/product/index.html')
      }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

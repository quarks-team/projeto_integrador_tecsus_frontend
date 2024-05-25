import { fileURLToPath, URL } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue(), VitePluginVueDevTools(), commonjs()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

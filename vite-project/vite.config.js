import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'
// https://vite.dev/config/
export default defineConfig( ({mode})=>{
  const completed = mode === 'production'
  return{
    base: completed ? '/vite-project/' : '/',
      plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  }
})

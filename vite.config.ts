import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test_BIOCAD/',
  plugins: [react()],
})


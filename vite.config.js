import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Custom domain: foundation.alkebuleum.org — serve from root
  base: '/',
})

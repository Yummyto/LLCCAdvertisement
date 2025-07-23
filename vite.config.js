import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('✅ Vite config loaded!')

export default defineConfig({
  base: '/LLCCAdvertisement/',
  plugins: [react()],
})

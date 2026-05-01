import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: [
      '@mui/material/Box',
      '@mui/material/Container',
      '@mui/material/Stack',
      '@mui/material/Typography',
      '@mui/icons-material'
    ],
  },
  server: {
    watch: {
      usePolling: true, // Linux (CachyOS) üçün daha stabil işləyir
    },
  },
})
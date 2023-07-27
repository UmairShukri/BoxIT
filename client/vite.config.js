import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './client',
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: './index.html', // Replace './src/index.js' with the correct path to your React app's entry point
  //     },
  //   },
  //   outDir: '../dist',
  //   emptyOutDir: true,
  // },
})





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import Checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react(), eslint()],
  plugins: [react(), 
    svgr({
      exportAsDefault: true 
    }),
    Checker({ typescript: true })
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts'
  }

})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jesperenglund92.github.io/OminoWebsite',
  plugins: [react()],
})

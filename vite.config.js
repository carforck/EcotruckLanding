import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ asegura que las rutas de assets sean relativas
  build: {
    outDir: 'dist', // ✅ carpeta que Vercel usará como salida
    assetsDir: 'assets', // (opcional) organiza los archivos estáticos
  },
  server: {
    port: 5173, // (opcional) útil si haces pruebas locales
    open: true, // abre automáticamente el navegador
  },
})

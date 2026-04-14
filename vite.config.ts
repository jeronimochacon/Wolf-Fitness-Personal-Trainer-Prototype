import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Wolf-Fitness-Personal-Trainer-Prototype/', // <--- Añade esta línea
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
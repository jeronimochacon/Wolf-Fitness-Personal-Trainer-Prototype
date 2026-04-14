import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // El nombre de tu repo es 'Wolf-Fitness-Personal-Trainer-Prototype'
  base: '/Wolf-Fitness-Personal-Trainer-Prototype/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Firebase changes far less often than page code — keeping it in its own
        // chunk means a copy edit doesn't invalidate the whole bundle for returning visitors.
        manualChunks: {
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/storage'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});

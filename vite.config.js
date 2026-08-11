import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Same port Create React App used
    port: 3000,
  },
  test: {
    globals: true,
  },
});

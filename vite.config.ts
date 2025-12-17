import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // important for GitHub Pages
  build: {
    rollupOptions: {
            output: {
                dir: 'dist/',
            }
        },
    sourcemap: true,
  }
});

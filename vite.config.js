import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        app: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
        deleteAccount: resolve(import.meta.dirname, 'delete-account.html'),
        safety: resolve(import.meta.dirname, 'safety.html'),
        support: resolve(import.meta.dirname, 'support.html')
      }
    }
  }
});

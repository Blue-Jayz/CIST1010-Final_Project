import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          myStory: path.resolve(__dirname, 'my-story.html'),
          timeManagement: path.resolve(__dirname, 'time-management.html'),
          studySmarter: path.resolve(__dirname, 'study-smarter.html'),
          unoResources: path.resolve(__dirname, 'uno-resources.html'),
          makingConnections: path.resolve(__dirname, 'making-connections.html'),
          rechargeSleep: path.resolve(__dirname, 'recharge-sleep.html'),
          top5Tips: path.resolve(__dirname, 'top-5-tips.html'),
          linksContact: path.resolve(__dirname, 'links-contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

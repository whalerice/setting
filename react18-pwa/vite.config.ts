import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'http://localhost:8080/',
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // '/socket.io': {
      //   target: 'ws://192.168.0.164:7000',
      //   ws: true,
      // },
    },
    open: true,
    port: 3100,
    host: '0.0.0.0',
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const appUrl = 'http://192.168.0.164:8080';
const chatUrl = 'http://192.168.0.164:9090';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    proxy: {
      '/api': {
        target: `${appUrl}/api/v1`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/uploaded': {
        target: 'http://192.168.0.164:8080/uploaded',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uploaded/, ''),
      },
      '/chat': {
        target: `${chatUrl}/chat/api/v1`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chat/, ''),
      },
      '/socket.io': {
        target: 'ws://192.168.0.164:7000',
        ws: true,
      },
    },
    open: true,
    port: 3200,
    host: '0.0.0.0',
  },
});

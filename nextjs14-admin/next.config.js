/** @type {import('next').NextConfig} */
const path = require('path');
// const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_URL: 'http://192.168.0.164:8080/api/v1',
    CHAT_URL: 'http://192.168.0.164:9090/chat/api/v1',
    WS_URL: 'ws://192.168.0.164:7000/ws',
  },
};

module.exports = nextConfig;

# Nuxt3 + Capacitor Web App

## Setup

```bash

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3100`:

```bash

# pnpm
pnpm dev
pnpm dev -o
```

## Production

Build the application for production:

```bash

# pnpm
pnpm build
```

## Capacitor Web App

```bash
# android, ios 추가
npx cap add android
npx cap add ios

# 빌드
pnpm generate

# 동기화
npx cap sync

# xcode open
npx cap open ios
# android studio open
npx cap open android
```

# GoogleAuth, SplashScreen 셋팅 필요

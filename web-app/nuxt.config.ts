import type { NuxtPage } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  devServer: {
    port: 3100,
  },
  modules: [
    "@vant/nuxt",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID, // 구글 클라이언트 아이디
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      "/api/**": {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/api/**`,
      },
    },
  },
  vite: {
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_colors.scss" as *; @use "@/assets/scss/_variables.scss" as *;`,
        },
      },
    },
  },
  css: ["@/assets/scss/styles.scss"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover",
    },
  },
  components: [
    { path: "@/components/ui", pathPrefix: false },
    { path: "@/stores", pathPrefix: false },
  ],
  pinia: {
    storesDirs: ["stores/**"],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "cookies",
  },
  vant: {
    importStyle: true,
    lazyload: { lazyComponent: true },
  },
  hooks: {
    "pages:extend"(pages) {
      function setMiddleware(pages: NuxtPage[]) {
        for (const page of pages) {
          if (true) {
            page.meta ||= {};
            page.meta.middleware = ["auth"];
          }
          if (page.children) {
            setMiddleware(page.children);
          }
        }
      }
      setMiddleware(pages);
    },
  },
});

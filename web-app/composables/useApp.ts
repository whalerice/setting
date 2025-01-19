export function useApp() {
  const nuxtApp = useNuxtApp();
  const appConfig = useAppConfig();

  return { nuxtApp, appConfig };
}

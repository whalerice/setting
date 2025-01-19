const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string | undefined>(undefined);
    const refreshToken = ref<string | undefined>(undefined);

    const setToken = (v: string) => {
      token.value = v;
    };

    const setRefreshToken = (v: string) => {
      refreshToken.value = v;
    };

    return { token, refreshToken, setToken, setRefreshToken };
  },
  {
    persist: true,
  }
);

export default useAuthStore;

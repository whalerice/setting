const load = defineStore(
  "load",
  () => {
    const theme = ref<Theme>("light");
    const isDark = ref(false);
    const changeTheme = (v: boolean) => {
      theme.value = v ? "dark" : "light";
      isDark.value = v;
    };

    return { theme, isDark, changeTheme };
  },
  {
    persist: {
      key: "theme",
      pick: ["theme", "isDark"],
    },
  }
);

export const useCommonStore = { load };

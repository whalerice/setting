// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/no-unused-vars": "off",
      "vue/no-multiple-template-root": "off",
      "vue/html-self-closing": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-constant-condition": "off",
    },
  }
);

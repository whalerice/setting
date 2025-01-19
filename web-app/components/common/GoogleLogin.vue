<script setup lang="ts">
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const onLogin = async () => {
  const response = await GoogleAuth.signIn();
  console.log(response);
  console.log("_credential", response.authentication.idToken);
};

onMounted(() => {
  GoogleAuth.initialize({
    clientId: useRuntimeConfig().public.GOOGLE_CLIENT_ID,
    scopes: ["profile", "email"],
    grantOfflineAccess: true,
  });
});
</script>
<template>
  <van-button @click="onLogin">Google Login</van-button>
</template>

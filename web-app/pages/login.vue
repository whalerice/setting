<script setup lang="ts">
import { GoogleLogin } from "@/components/common";
definePageMeta({
  title: "로그인",
  layout: false,
});
</script>

<template>
  <section class="login-layout">
    <h1>login</h1>
    <google-login />
  </section>
</template>

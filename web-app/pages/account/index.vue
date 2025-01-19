<script setup lang="ts">
definePageMeta({
  title: "나의 계정",
});
const route = useRoute();
</script>
<template>
  <page-layout>
    <h1>{{ route.meta.title }}</h1>
  </page-layout>
</template>

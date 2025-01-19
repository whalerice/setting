<script setup lang="ts">
const dot = ref(true);
</script>
<template>
  <header class="header">
    <van-nav-bar>
      <template #left>
        <NuxtLink to="/"> Logo </NuxtLink>
      </template>
      <template #right>
        <van-space>
          <NuxtLink to="/account">
            <van-icon name="friends-o" size="20" :dot="dot" color="#73787e" />
          </NuxtLink>
        </van-space>
      </template>
    </van-nav-bar>
  </header>
</template>

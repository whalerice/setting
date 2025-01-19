<script setup lang="ts">
const { theme } = storeToRefs(useCommonStore.load());

const badge = ref(10);
</script>

<template>
  <van-config-provider :theme="theme" theme-vars-scope="global">
    <header-layout />

    <slot />

    <van-tabbar
      :route="true"
      :fixed="true"
      :safe-area-inset-bottom="true"
      style="position: fixed; bottom: 0"
    >
      <van-tabbar-item replace to="/" icon="home-o" />
      <van-tabbar-item replace to="/search" icon="search" />
      <van-tabbar-item replace to="/blog" icon="add-o" />

      <van-tabbar-item
        replace
        to="/experience"
        icon="todo-list-o"
        :badge="badge"
      />

      <van-tabbar-item replace to="/settings" icon="setting-o" />
    </van-tabbar>
  </van-config-provider>
</template>

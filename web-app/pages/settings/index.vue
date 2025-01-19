<script setup lang="ts">
const { isDark } = storeToRefs(useCommonStore.load());
const { changeTheme } = useCommonStore.load();
</script>
<template>
  <page-layout>
    <van-cell-group title="테마설정">
      <van-cell title="다크모드">
        <template #right-icon>
          <van-switch v-model="isDark" @change="changeTheme" />
        </template>
      </van-cell>
    </van-cell-group>
  </page-layout>
</template>

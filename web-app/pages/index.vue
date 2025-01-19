<script setup lang="ts">
// import { useMouse } from "@vueuse/core";

definePageMeta({
  title: "메인",
});

// const time = ref(30 * 60 * 60 * 1000);
// const { x, y } = useMouse();
</script>

<template>
  <page-layout>
    <van-cell v-for="item in 50" :key="item" :title="item" />
    <!-- <van-badge :content="5">
      <van-image
        class="radius"
        :width="40"
        :height="40"
        fit="cover"
        lazy-load
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </van-badge>
    <br />
    <van-badge dot>
      <div class="profile-image">
        <img
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          alt="profile"
        />
      </div>
    </van-badge> -->
  </page-layout>
</template>

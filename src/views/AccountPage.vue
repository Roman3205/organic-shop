<template>
  <div class="w-full max-w-screen-lg py-8 flex gap-5 items-start">
    <TheAccountNavigation />
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheAccountNavigation from '@/components/TheAccountNavigation.vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped></style>

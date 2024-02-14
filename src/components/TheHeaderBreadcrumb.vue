<template>
  <div class="w-full flex flex-col items-center relative bg-red-200">
    <img class="w-full z-10 h-20 object-cover" src="@/assets/header-image.png" alt="" />
    <div class="max-w-screen-lg flex gap-2 items-center w-full top-7 z-10 absolute">
      <TheHouseIcon class="text-gray-4" />
      <div class="flex justify-center gap-2" v-for="index in 2" :key="index">
        <TheArrowIcon class="text-gray-3" />
        <p
          :class="{ 'text-hard-primary': index == 2 }"
          class="text-gray-4 font-semibold header-footer-hover"
        >
          Blog
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHouseIcon from '@/components/icons/TheHouseIcon.vue'
import TheArrowIcon from '@/components/icons/TheArrowIcon.vue'
</script>

<style lang="scss" scoped></style>

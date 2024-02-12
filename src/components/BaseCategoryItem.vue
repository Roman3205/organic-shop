<template>
  <div
    class="border-2 py-4 justify-center items-center flex flex-col gap-5 border-gray-1 rounded-lg"
  >
    <img :src="`../src/assets/${image}.png`" width="120" :alt="image" />
    <p class="font-semibold">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  image: String
})
</script>

<style lang="scss" scoped></style>

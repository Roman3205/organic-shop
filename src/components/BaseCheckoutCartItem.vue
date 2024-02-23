<template>
  <div class="flex justify-between items-center text-sm cursor-pointer">
    <div class="flex items-center gap-1">
      <img :src="`../src/assets/${image}.png`" width="65" :alt="image" />
      <div class="flex gap-2">
        <p class="line-clamp-1 text-gray-9 font-medium break-all w-4/5">
          {{ title }}
        </p>
        <span>x{{ quantity }}</span>
      </div>
    </div>
    <p class="font-semibold line-clamp-1 break-all">&#36;{{ price.toFixed(2) }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  quantity: Number,
  price: Number,
  image: String
})
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex justify-between items-center pb-2 cursor-pointer">
    <div class="flex items-center gap-1">
      <img :src="`../src/assets/${image}.png`" width="100" :alt="image" />
      <div class="flex flex-col gap-2">
        <p class="line-clamp-1 text-gray-9 font-medium">{{ title }}</p>
        <p class="flex items-center gap-1">
          <span class="text-gray-4 line-clamp-1">{{ quantity }} x</span
          ><span class="font-semibold line-clamp-1">{{ price.toFixed(2) }}</span>
        </p>
      </div>
    </div>
    <TheCrossIcon class="h-6 w-6 bg-gray-0 rounded-full text-gray-6 px-0.5 flex justify-center" />
  </div>
</template>

<script setup>
import TheCrossIcon from '@/components/icons/TheCrossIcon.vue'

defineProps({
  title: String,
  quantity: Number,
  price: Number,
  image: String
})
</script>

<style lang="scss" scoped></style>

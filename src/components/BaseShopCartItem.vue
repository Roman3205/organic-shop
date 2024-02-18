<template>
  <div class="w-full grid-cols-12 border-gray-0 grid py-3 px-5 items-center">
    <div class="flex items-center gap-4 col-span-5">
      <img :src="`../src/assets/${image}.png`" width="80" :alt="image" />
      <p class="line-clamp-1 text-gray-9 font-medium pr-6">{{ title }}</p>
    </div>
    <p class="line-clamp-1 text-gray-9 pr-6 col-span-2 font-semibold">
      &#36;{{ price.toFixed(2) }}
    </p>
    <div class="rounded-full w-fit gap-3 border border-gray-0 p-2 col-span-3 flex items-center">
      <TheMinusIcon class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center" />{{
        quantity
      }}<ThePlusIcon class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center" />
    </div>
    <div class="flex items-center col-span-2 justify-between">
      <p class="font-bold">&#36;{{ subtotalPrice }}</p>
      <TheCrossIcon class="h-7 w-7 bg-gray-0 text-gray-9 rounded-full px-0.5 flex justify-center" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TheCrossIcon from '@/components/icons/TheCrossIcon.vue'
import ThePlusIcon from '@/components/icons/ThePlusIcon.vue'
import TheMinusIcon from '@/components/icons/TheMinusIcon.vue'

const props = defineProps({
  title: String,
  quantity: Number,
  price: Number,
  image: String
})

const subtotalPrice = computed(() => (props.price * props.quantity).toFixed(2))
</script>

<style lang="scss" scoped></style>

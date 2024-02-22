<template>
  <div class="w-full grid-cols-12 border-gray-0 grid py-2 px-5 items-center">
    <div class="flex items-center gap-4 col-span-5">
      <img :src="`../src/assets/${image}.png`" width="100" :alt="image" />
      <p class="line-clamp-1 break-all text-gray-9 font-medium pr-6">{{ title }}</p>
    </div>
    <p class="line-clamp-1 break-all text-gray-9 pr-6 col-span-3 font-semibold">
      &#36;{{ price.toFixed(2) }}
    </p>
    <div class="flex items-center col-span-4 justify-between">
      <p
        class="py-1.5 w-fit px-2 font-medium rounded-md"
        :class="{
          'bg-light-red text-hard-red': inStock == false,
          'bg-light-green    text-hard-green': inStock == true
        }"
      >
        {{ stockCheck }}
      </p>
      <div class="flex items-center gap-5">
        <button
          type="submit"
          :disabled="inStock == false"
          :class="{
            'bg-gray-1 text-gray-5 pointer-events-none': inStock == false,
            'bg-primary text-gray-0': inStock == true
          }"
          class="text-center text-base font-medium hover:opacity-65 transition duration-500 rounded-3xl py-2.5 px-5"
        >
          Add to Cart
        </button>
        <TheCrossIcon
          class="h-7 w-7 bg-gray-0 text-gray-9 rounded-full px-0.5 flex justify-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TheCrossIcon from '@/components/icons/TheCrossIcon.vue'
import { useStock } from '../use/stockCheck'

const props = defineProps({
  title: String,
  inStock: Boolean,
  price: Number,
  image: String
})

const stockCheck = computed(() => useStock(props.inStock))
</script>

<style lang="scss" scoped></style>

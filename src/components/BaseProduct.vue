<template>
  <div
    class="bg-white hover:border-hard-primary trasition duration-500 cursor-pointer border-2 py-4 relative justify-between items-center flex flex-col gap-5 border-gray-1 rounded-lg"
  >
    <button
      v-if="sale"
      disabled
      class="bg-danger absolute left-2 text-xs top-2 text-gray-0 py-1 rounded-lg px-2"
    >
      Sale {{ sale }}%
    </button>
    <div class="absolute top-3 right-3">
      <TheHeartIcon
        :class="{
          'bg-primary text-gray-0': isInFavourites,
          'bg-gray-1 text-gray-8': !isInFavourites
        }"
        class="h-10 w-10 p-1 hover:bg-soft-primary transition duration-500 hover:text-gray-0 rounded-full flex justify-center text-center items-center"
      />
    </div>
    <img class="w-full h-3/4" :src="`../src/assets/${image}.png`" width="120" :alt="image" />
    <div class="h-1/4 w-full px-4 flex justify-between items-center">
      <div class="flex flex-col gap-1 justify-between">
        <p class="text-gray-7 text-md line-clamp-1">{{ title }}</p>
        <p class="text-lg font-semibold line-clamp-1">&#36;{{ price.toFixed(2) }}</p>
        <div class="flex items-center gap-1">
          <i
            :class="{ 'text-gray-400': stars < index }"
            class="text-warning fa fa-star"
            v-for="index in 5"
            :key="index"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div>
        <TheCartIcon
          :class="{ 'bg-hard-primary text-gray-0': isInCart, 'bg-gray-1 text-gray-8': !isInCart }"
          class="hover:bg-soft-primary h-10 w-10 p-1 flex justify-center items-center rounded-full transition duration-500 text-cente hover:text-gray-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCartIcon from '@/components/icons/TheCartIcon.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'

defineProps({
  title: String,
  image: String,
  price: Number,
  stars: Number,
  isInCart: Boolean,
  isInFavourites: Boolean,
  sale: Number
})
</script>

<style lang="scss" scoped></style>

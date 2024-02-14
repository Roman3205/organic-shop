<template>
  <div
    class="bg-white cursor-pointer hover:border-hard-primary transition duration-500 row-span-2 col-span-2 border-2 py-4 relative justify-between items-center flex flex-col gap-5 border-primary shadow-lg rounded-lg"
  >
    <button
      v-if="sale"
      disabled
      class="bg-danger absolute left-4 text-sm top-4 text-gray-0 py-1 rounded-lg px-2"
    >
      Sale {{ sale }}%
    </button>
    <button
      v-if="sale"
      disabled
      class="bg-blue-500 absolute left-24 text-sm top-4 text-gray-0 py-1 rounded-lg px-2"
    >
      Best Sale
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
    <img class="w-full h-3/5" :src="`../src/assets/${image}.png`" width="120" :alt="image" />
    <div class="h-2/5 gap-5 w-full px-4 flex flex-col justify-between items-center">
      <div class="w-full flex items-center justify-evenly">
        <TheHeartIcon
          :class="{
            'bg-hard-primary text-gray-0': isInFavourites,
            'bg-gray-1 text-gray-8': !isInFavourites
          }"
          class="h-12 w-12 p-1.5 hover:bg-soft-primary transition duration-500 hover:text-gray-0 rounded-full flex justify-center text-center items-center"
        />
        <button
          :class="{
            'bg-primary text-gray-0': isInCart,
            'bg-gray-1 text-gray-8': !isInCart
          }"
          class="hover:bg-soft-primary py-3 w-4/5 flex justify-center items-center gap-3 rounded-full transition duration-500 text-cente hover:text-gray-0"
        >
          Add to Cart <TheCartIcon class="h-6 w-6" />
        </button>
      </div>
      <div class="flex flex-col items-center gap-2">
        <p class="text-gray-7 text-xl line-clamp-1">{{ title }}</p>
        <div class="flex items-center gap-2">
          <p class="text-3xl font-semibold line-clamp-1">&#36;{{ price.toFixed(2) }}</p>
          <p class="text-2xl font-semibold line-clamp-1 text-gray-4 line-through">
            &#36;{{ lastPrice }}
          </p>
        </div>
        <div class="flex items-center gap-1">
          <i
            :class="{ 'text-gray-400': stars < index }"
            class="text-warning fa fa-star"
            v-for="index in 5"
            :key="index"
            aria-hidden="true"
          ></i>
          <p class="text-gray-5 pl-2">(524 Feedback)</p>
        </div>
        <div class="flex flex-col gap-1 items-center">
          <p class="text-sm text-gray-4">Hurry up! Offer ends In:</p>
          <div class="flex gap-3">
            <MyCounter :counters="counters" color1="text-gray-9" color2="text-gray-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCartIcon from '@/components/icons/TheCartIcon.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import MyCounter from '@/components/MyCounter.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  title: String,
  image: String,
  price: Number,
  stars: Number,
  isInCart: Boolean,
  isInFavourites: Boolean,
  sale: Number
})

const lastPrice = computed(() => ((props.price.toFixed(2) / (100 - props.sale)) * 100).toFixed(2))

const counters = ref([
  {
    id: 1,
    number: 0,
    time: 'days'
  },
  {
    id: 2,
    number: 2,
    time: 'hours'
  },
  {
    id: 3,
    number: 18,
    time: 'mins'
  },
  {
    id: 4,
    number: 46,
    time: 'secs'
  }
])
</script>

<style lang="scss" scoped></style>

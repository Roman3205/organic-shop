<template>
  <div class="flex bg-white py-5 px-2 rounded-lg relative w-2/3 gap-3">
    <TheCrossIcon class="h-6 w-6 text-white absolute -top-5 right-1" />
    <div class="w-1/2 flex items-center gap-2">
      <div class="flex w-1/6 h-full flex-1 flex-col gap-4 items-center">
        <TheArrowIcon class="text-gray-2 xl:scale-150 w-fit scale-90 -rotate-90" />
        <div class="flex flex-col w-full items-center h-full">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="`/src/assets/${image}.png`"
            alt="img"
            class="w-full h-full"
          />
        </div>
        <TheArrowIcon class="text-gray-2 w-fit xl:scale-150 scale-90 rotate-90" />
      </div>
      <img class="w-5/6" src="@/assets/img1.png" alt="" />
    </div>
    <div class="w-1/2 flex flex-col">
      <div class="flex flex-col gap-2 border-b border-gray-1 pb-4">
        <div class="flex items-center gap-2">
          <h1 class="text-2xl font-semibold text-gray-9 text-center">{{ title }}</h1>
          <p
            class="py-1.5 w-fit px-2 text-xs font-medium rounded-md"
            :class="{
              'bg-light-red text-hard-red': inStock == false,
              'bg-light-green    text-hard-green': inStock == true
            }"
          >
            {{ stockCheck }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1">
            <i
              :class="{ 'text-gray-200': averageStars < index }"
              class="text-warning fa fa-star"
              v-for="index in 5"
              :key="index"
              aria-hidden="true"
            ></i>
          </div>
          <p class="text-gray-4 text-xs font-medium">{{ reviews }} Reviews</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center gap-3">
            <p class="text-xl line-clamp-1 break-all text-gray-3 line-through">
              &#36;{{ lastPrice }}
            </p>
            <p class="text-2xl text-hard-primary break-all font-medium line-clamp-1">
              &#36;{{ price.toFixed(2) }}
            </p>
            <p
              v-if="sale"
              class="py-1 w-fit px-1 bg-light-red text-hard-red text-xs font-medium rounded-md"
            >
              {{ sale }}% Off
            </p>
          </div>
        </div>
      </div>
      <div class="py-4 border-b border-gray-1">
        <p class="text-sm break-words text-gray-4 line-clamp-4 break-all">
          {{ description }}
        </p>
      </div>
      <div class="flex items-center py-4 border-b border-gray-1 justify-between gap-3">
        <div class="rounded-full w-fit gap-3 border border-gray-0 p-2 col-span-3 flex items-center">
          <TheMinusIcon class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center" />{{
            quantity
          }}<ThePlusIcon class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center" />
        </div>
        <button
          type="submit"
          :disabled="!stockCheck"
          :class="{
            'bg-gray-1 text-gray-5 pointer-events-none': !stockCheck,
            'bg-primary text-gray-0': stockCheck
          }"
          class="text-center w-full flex items-center justify-center gap-3 font-medium hover:opacity-65 transition duration-500 rounded-full py-3 px-5"
        >
          Add to Cart
          <TheCartIcon class="w-6 h-6" />
        </button>
        <TheHeartIcon
          :class="{
            'bg-primary text-gray-0': isInFavourites,
            'bg-gray-1 text-gray-8': !isInFavourites
          }"
          class="h-12 w-12 p-1.5 hover:bg-soft-primary transition duration-500 hover:text-gray-0 rounded-full text-hard-primary flex justify-center text-center items-center"
        />
      </div>
      <div class="pt-3">
        <p class="text-gray-5"><b class="text-gray-7">Category: </b>{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeartIcon from './icons/TheHeartIcon.vue'
import TheArrowIcon from './icons/TheArrowIcon.vue'
import TheCartIcon from './icons/TheCartIcon.vue'
import TheMinusIcon from './icons/TheMinusIcon.vue'
import ThePlusIcon from './icons/ThePlusIcon.vue'
import TheCrossIcon from './icons/TheCrossIcon.vue'

defineProps({
  images: Array,
  title: String,
  inStock: Boolean,
  reviews: Number,
  averageStars: Number,
  sale: Number,
  price: Number,
  isInFavourites: Boolean,
  description: String,
  quantity: Number,
  category: String,
  stockCheck: String,
  lastPrice: String
})
</script>

<style lang="scss" scoped></style>

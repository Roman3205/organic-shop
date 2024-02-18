<template>
  <div>
    <div class="fixed bottom-0 top-0 left-0 right-0 bg-black opacity-70 z-30"></div>
    <div
      class="fixed flex justify-center items-center bottom-0 top-0 left-0 right-0 bg-transparent z-40"
    >
      <div class="flex bg-white py-5 px-3 rounded-lg relative w-2/3 my-4">
        <TheCrossIcon class="h-6 w-6 text-white absolute -top-5 right-1" />
        <div class="w-1/2 flex items-center gap-2">
          <div class="flex w-1/6 h-full flex-1 flex-col gap-4 items-center">
            <TheArrowIcon class="text-gray-2 xl:scale-150 w-fit scale-90 -rotate-90" />
            <div class="flex flex-col w-full items-center h-full">
              <img
                v-for="(image, index) in product.images"
                :key="index"
                :src="`../src/assets/${image}.png`"
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
              <h1 class="text-2xl font-semibold text-gray-9 text-center">My Wishlist</h1>
              <p
                class="py-1.5 w-fit px-2 text-xs font-medium rounded-md"
                :class="{
                  'bg-light-red text-hard-red': product.inStock == false,
                  'bg-light-green    text-hard-green': product.inStock == true
                }"
              >
                {{ stockCheck }}
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1">
                <i
                  :class="{ 'text-gray-200': product.averageStars < index }"
                  class="text-warning fa fa-star"
                  v-for="index in 5"
                  :key="index"
                  aria-hidden="true"
                ></i>
              </div>
              <p class="text-gray-4 text-xs font-medium">{{ product.reviews }} Reviews</p>
            </div>
            <div class="flex items-center">
              <div class="flex items-center gap-3">
                <p class="text-xl line-clamp-1 text-gray-3 line-through">&#36;{{ lastPrice }}</p>
                <p class="text-2xl text-hard-primary font-medium line-clamp-1">
                  &#36;{{ product.price.toFixed(2) }}
                </p>
                <p
                  v-if="product.sale"
                  class="py-1 w-fit px-1 bg-light-red text-hard-red text-xs font-medium rounded-md"
                >
                  {{ product.sale }}% Off
                </p>
              </div>
            </div>
          </div>
          <div class="py-4 border-b border-gray-1">
            <p class="text-sm break-words text-gray-4 line-clamp-4">
              {{ product.description }}
            </p>
          </div>
          <div class="flex items-center py-4 border-b border-gray-1 justify-between gap-3">
            <div
              class="rounded-full w-fit gap-3 border border-gray-0 p-2 col-span-3 flex items-center"
            >
              <TheMinusIcon
                class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center"
              />{{ product.quantity
              }}<ThePlusIcon
                class="bg-gray-0 rounded-full p-1.5 flex justify-center items-center"
              />
            </div>
            <button
              type="submit"
              :disabled="!stockCheck"
              :class="{
                'bg-gray-1 text-gray-5 pointer-events-none': !stockCheck,
                'bg-primary text-gray-0': stockCheck
              }"
              class="text-center w-full flex items-center justify-center gap-3 font-medium hover:opacity-65 transition duration-500 rounded-full py-4 px-5"
            >
              Add to Cart
              <TheCartIcon class="w-6 h-6" />
            </button>
            <TheHeartIcon
              :class="{
                'bg-primary text-gray-0': product.isInFavourites,
                'bg-gray-1 text-gray-8': !product.isInFavourites
              }"
              class="h-12 w-12 p-1.5 hover:bg-soft-primary transition duration-500 hover:text-gray-0 rounded-full text-hard-primary flex justify-center text-center items-center"
            />
          </div>
          <div class="pt-3">
            <p class="text-gray-5"><b class="text-gray-7">Category: </b>{{ product.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheArrowIcon from '@/components/icons/TheArrowIcon.vue'
import TheCartIcon from '@/components/icons/TheCartIcon.vue'
import TheMinusIcon from '@/components/icons/TheMinusIcon.vue'
import ThePlusIcon from '@/components/icons/ThePlusIcon.vue'
import TheCrossIcon from '@/components/icons/TheCrossIcon.vue'
import { useStock } from '../use/stockCheck'
import { useLastPrice } from '../use/lastPrice'

const product = ref({
  images: ['img1', 'img2', 'img3', 'img4'],
  title: 'Chinese Cabbage',
  inStock: true,
  reviews: 4,
  averageStars: 4,
  sale: 64,
  price: 17.28,
  isInFavourites: false,
  description:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
  quantity: 5,
  category: 'Vegetables'
})

const stockCheck = computed(() => useStock(product.value.inStock))
const lastPrice = computed(() => useLastPrice(product.value.price, product.value.sale))
</script>

<style lang="scss" scoped></style>

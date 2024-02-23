<template>
  <div>
    <div class="fixed w-full h-full bottom-0 top-0 left-0 right-0 bg-black opacity-70 z-20"></div>
    <div
      class="flex justify-end w-full h-full bottom-0 top-0 left-0 right-0 fixed z-20 bg-transparent opacity-100 items-center"
    >
      <div class="flex w-1/4 h-full gap-5 py-10 px-8 flex-col bg-white">
        <div class="flex items-center justify-between w-full">
          <h3 class="text-xl font-semibold">Shopping Card (2)</h3>
          <TheCrossIcon class="h-8 w-8" />
        </div>
        <div
          class="products-block flex flex-col gap-3 flex-1 border-y-2 border-soft-primary py-2 overflow-y-auto pr-2"
        >
          <BaseCartItem
            :class="{ 'border-b border-gray-2': index != cartProducts.length - 1 }"
            v-for="(cartItem, index) in cartProducts"
            :key="index"
            :title="cartItem.title"
            :price="cartItem.price"
            :quantity="cartItem.quantity"
            :image="cartItem.image"
          />
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <p>2 Product</p>
            <p class="font-bold">&#36;26.00</p>
          </div>
          <button
            type="button"
            class="font-semibold bg-primary text-white flex justify-center hover:opacity-65 transition duration-500 items-center py-3 text-center gap-3 w-full rounded-3xl"
          >
            Checkout
          </button>
          <button
            type="button"
            class="font-semibold bg-gray-0 text-primary w-full hover:opacity-65 transition duration-500 items-center py-3 text-center flex justify-center gap-3 rounded-3xl"
          >
            Go To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCrossIcon from './icons/TheCrossIcon.vue'
import BaseCartItem from './BaseCartItem.vue'
import { ref } from 'vue'

const cartProducts = ref([
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  },
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  },
  {
    title: 'Green Apple',
    quantity: 1,
    price: 14,
    image: 'cart1'
  },
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  }
])
</script>

<style lang="scss" scoped></style>

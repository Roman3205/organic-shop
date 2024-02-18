<template>
  <div class="max-w-screen-lg w-full h-full pt-6 pb-10 flex flex-col gap-10">
    <h1 class="text-3xl font-semibold text-gray-9 text-center">My Wishlist</h1>
    <div class="rounded-lg border-2 border-gray-0">
      <div
        class="grid grid-cols-12 border-b border-gray-0 px-6 py-3 text-gray-5 uppercase text-base font-medium"
      >
        <p class="col-span-5">product</p>
        <p class="col-span-3">price</p>
        <p class="col-span-4">stock status</p>
      </div>
      <div class="flex wish-list flex-col overflow-y-auto max-h-screen">
        <BaseWishListItem
          :class="{ 'border-t': index !== 0 }"
          v-for="(wishItem, index) in wishProducts"
          :key="index"
          :title="wishItem.title"
          :price="wishItem.price"
          :in-stock="wishItem.inStock"
          :image="wishItem.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseWishListItem from '@/components/BaseWishListItem.vue'
import { ref } from 'vue'

const wishProducts = ref([
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    inStock: true,
    price: 14.99,
    image: 'product1'
  },
  {
    title: 'Chinese Cabbage',
    inStock: true,
    price: 45,
    image: 'product2'
  },
  {
    title: 'Fresh Sujapuri Mango',
    inStock: false,
    price: 9,
    image: 'product3'
  },
  {
    title: 'Chinese Cabbage',
    inStock: true,
    price: 45,
    image: 'product2'
  },
  {
    title: 'Fresh Sujapuri Mango',
    inStock: false,
    price: 9,
    image: 'product3'
  },
  {
    title: 'Chinese Cabbage',
    inStock: true,
    price: 45,
    image: 'product2'
  },
  {
    title: 'Fresh Sujapuri Mango',
    inStock: false,
    price: 9,
    image: 'product3'
  }
])
</script>

<style lang="scss" scoped></style>

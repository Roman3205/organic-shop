<template>
  <div class="flex justify-center w-full my-8">
    <div class="max-w-screen-lg w-full flex flex-col gap-3 bg-white">
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-2xl">Popular Products</h2>
        <my-button class="text-primary bg-transparent">View All</my-button>
      </div>
      <div class="grid grid-rows-2 grid-cols-5 gap-1">
        <BaseProduct
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :stars="product.stars"
          :is-in-cart="product.isInCart"
          :is-sale="product.isSale"
          :is-in-favourites="product.isInFavourites"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseProduct from '@/components/BaseProduct.vue'
import MyButton from '@/components/MyButton.vue'

const products = [
  {
    id: 1,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    isSale: true
  },
  {
    id: 2,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: false,
    isSale: false
  },
  {
    id: 3,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    isSale: false
  },
  {
    id: 4,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: false,
    isSale: false
  },
  {
    id: 5,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: true,
    isSale: false
  },
  {
    id: 6,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    isSale: true
  },
  {
    id: 7,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: false,
    isSale: true
  },
  {
    id: 8,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: false,
    isSale: false
  },
  {
    id: 9,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: false,
    isSale: false
  }
]
</script>

<style lang="scss" scoped></style>

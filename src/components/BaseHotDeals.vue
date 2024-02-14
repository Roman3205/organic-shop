<template>
  <div class="flex bg-gray-0 pt-8 pb-12 justify-center w-full my-8">
    <div class="max-w-screen-lg w-full flex flex-col gap-3 bg-gray-0">
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-2xl">Hot Deals</h2>
        <my-button class="text-primary bg-transparent">View All</my-button>
      </div>
      <div class="grid grid-rows-2 grid-cols-5 gap-1">
        <TheHotestProduct
          v-if="hotestProduct"
          :image="hotestProduct.image"
          :title="hotestProduct.title"
          :price="hotestProduct.price"
          :stars="hotestProduct.stars"
          :is-in-cart="hotestProduct.isInCart"
          :sale="hotestProduct.sale"
          :is-in-favourites="hotestProduct.isInFavourites"
        />
        <BaseProduct
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :stars="product.stars"
          :is-in-cart="product.isInCart"
          :sale="product.sale"
          :is-in-favourites="product.isInFavourites"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseProduct from '@/components/BaseProduct.vue'
import MyButton from '@/components/MyButton.vue'
import { ref } from 'vue'
import TheHotestProduct from '@/components/TheHotestProduct.vue'

const products = [
  {
    id: 1,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    sale: 15
  },
  {
    id: 2,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: false,
    sale: 30
  },
  {
    id: 3,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    sale: 25
  },
  {
    id: 4,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: false,
    sale: 70
  },
  {
    id: 5,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: true,
    isInFavourites: true,
    sale: 20
  },
  {
    id: 6,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    sale: 50
  },
  {
    id: 7,
    title: 'Fresh Fruit',
    image: 'product',
    price: 20.1,
    stars: 4,
    isInCart: false,
    isInFavourites: false,
    sale: 30
  }
]

const getHotestProduct = () => {
  let product = products.reduce((a, i) => (a.sale > i.sale ? a : i))
  return product
}

const hotestProduct = ref(getHotestProduct())
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex w-full flex-col mt-3 mb-14 items-center">
    <MyProduct
      class="w-full max-w-screen-lg"
      :reviews="product.reviews"
      :averageStars="product.averageStars"
      :sale="product.sale"
      :description="product.description"
      :category="product.category"
      :quantity="product.quantity"
      :inStock="product.inStock"
      :images="product.images"
      :is-in-favourites="product.isInFavourites"
      :title="product.title"
      :price="product.price"
      :stockCheck="stockCheck"
      :lastPrice="lastPrice"
    />
    <div class="w-full flex justify-center">
      <TheProductInfoSlider />
    </div>
    <div class="flex flex-col gap-5 max-w-screen-lg">
      <h1 class="text-2xl font-semibold text-gray-9 text-center">Related Products</h1>
      <div class="grid grid-cols-4 gap-2">
        <BaseProduct
          v-for="product in relatedProducts"
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
import { ref, computed } from 'vue'
import { useStock } from '../use/stockCheck'
import { useLastPrice } from '../use/lastPrice'
import MyProduct from '@/components/MyProduct.vue'
import TheProductInfoSlider from '@/components/TheProductInfoSlider.vue'

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

const relatedProducts = [
  {
    id: 1,
    title: 'Fresh Fruit Fresh FruitFresh FruitFresh FruitFresh Fruit',
    image: 'product',
    price: 200.1,
    stars: 4,
    isInCart: false,
    isInFavourites: true,
    sale: 30
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
  }
]
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div class="fixed bottom-0 top-0 left-0 right-0 bg-black opacity-70 z-30"></div>
    <div
      class="fixed flex justify-center items-center bottom-0 top-0 left-0 right-0 bg-transparent z-40"
    >
      <MyProduct
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStock } from '../use/stockCheck'
import { useLastPrice } from '../use/lastPrice'
import MyProduct from '@/components/MyProduct.vue'

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

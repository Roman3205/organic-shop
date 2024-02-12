<template>
  <div class="my-6 px-3 py-6 bg-white w-full shadow-md shadow-gray-2 flex justify-around">
    <base-bar-item
      v-for="bar in bars"
      :svg="bar.svg"
      :header="bar.header"
      :text="bar.text"
      :key="bar.id"
    ></base-bar-item>
  </div>
</template>

<script setup>
import BaseBarItem from '@/components/BaseBarItem.vue'
const bars = [
  {
    id: 1,
    svg: 'truck',
    header: 'Free Shipping',
    text: 'Free shipping on all your order'
  },
  {
    id: 2,
    svg: 'support',
    header: 'Customer Support 24/7',
    text: 'Instant access to Support'
  },
  {
    id: 3,
    svg: 'secure',
    header: '100% Secure Payment',
    text: 'We ensure your money is save'
  },
  {
    id: 4,
    svg: 'box',
    header: 'Money-Back Guarantee',
    text: '30 Days Money-Back Guarantee'
  }
]
</script>

<style lang="scss" scoped></style>

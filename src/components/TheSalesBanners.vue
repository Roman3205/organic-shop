<template>
  <div class="flex justify-center w-full my-6">
    <div class="max-w-screen-lg w-full justify-between gap-4 flex">
      <div class="banner1 min-h-96 flex-col gap-3 w-full h-full flex items-center pt-5">
        <p class="uppercase font-light text-gray-0">best deal</p>
        <h2 class="text-gray-0 text-3xl font-semibold">Sale of the Month</h2>
        <div class="flex gap-3">
          <MyCounter :counters="counters" />
        </div>
        <my-button class="bg-gray-0 px-6 text-primary">Shop Now</my-button>
      </div>
      <div class="banner2 gap-3 min-h-96 w-full h-full flex flex-col items-center pt-5">
        <p class="uppercase font-light text-gray-0">85% fat free</p>
        <h2 class="text-gray-0 text-3xl font-semibold">Low-Fat Meat</h2>
        <p class="text-sm text-gray-0">Started at <b class="text-warning">&#36;79.99</b></p>
        <my-button class="bg-gray-0 px-6 text-primary">Shop Now</my-button>
      </div>
      <div
        class="banner3 min-h-96 rounded-lg flex-col gap-2.5 w-full h-full flex items-center pt-5"
      >
        <p class="uppercase font-light text-gray-0">summer sale</p>
        <h2 class="text-gray-0 text-3xl font-semibold">100% Fresh Fruit</h2>
        <div class="flex gap-2 items-center">
          <p class="text-gray-9 text-sm">Up to</p>
          <p class="text-yellow-400 text-sm rounded-md py-1 px-2 bg-gray-9">64% OFF</p>
        </div>
        <my-button class="bg-gray-0 px-6 text-primary">Shop Now</my-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
import MyCounter from './MyCounter.vue'
import { ref } from 'vue'

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

<style lang="scss" scoped>
.banner1 {
  background: url('@/assets/banner4.png') no-repeat center center;
  background-size: 100% 100%;
}

.banner2 {
  background: url('@/assets/banner5.png') no-repeat center center;
  background-size: 100% 100%;
}

.banner3 {
  background: url('@/assets/banner6.png') no-repeat center center;
  background-size: 100% 100%;
}
</style>

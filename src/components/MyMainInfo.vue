<template>
  <div class="grid grid-cols-3 grid-rows-2 gap-4">
    <div class="relative row-span-2 col-span-2">
      <img class="rounded-md h-full w-full" src="@/assets/banner1.png" alt="Banner1" />
      <div class="top-0 w-full h-full py-20 px-10 absolute flex flex-col gap-5">
        <h1 class="text-gray-0 text-4xl">
          Fresh & Healthy<br />
          Organic Food
        </h1>
        <div class="flex flex-col gap-2 pl-4 border-l-2 border-gray-500">
          <h3 class="text-gray-0 text-xl flex gap-2 items-center">
            Sale up to
            <p class="bg-warning rounded-md text-center px-2 py-1">30% OFF</p>
          </h3>
          <p class="text-gray-3 text-xs">Free shipping on all your order.</p>
        </div>
        <my-button class="bg-gray-0 px-8 text-primary">Shop now</my-button>
      </div>
    </div>
    <div class="order-1 relative">
      <img class="rounded-md h-full w-full" src="@/assets/banner2.png" alt="Banner2" />
      <div class="top-0 left-0 py-4 items-center absolute w-full h-full flex flex-col gap-5">
        <p class="uppercase font-light text-gray-0">best deal</p>
        <h1 class="text-gray-0 text-3xl">
          Special Products <br />
          Deal of the Month
        </h1>
        <my-button class="bg-transparent px-8 text-primary">Shop now</my-button>
      </div>
    </div>

    <div class="relative">
      <img class="rounded-md h-full fw-full" src="@/assets/banner3.png" alt="Banner3" />
      <div class="top-0 left-0 items-start h-full w-full p-4 absolute flex flex-col gap-1">
        <p class="uppercase font-light text-gray-9">summer sale</p>
        <h1 class="text-gray-9 font-bold text-4xl">75% OFF</h1>
        <p class="text-gray-3 text-xs">Only Fruit & Vegetable</p>
        <my-button class="bg-transparent text-primary">Shop now</my-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
</script>

<style lang="scss" scoped></style>

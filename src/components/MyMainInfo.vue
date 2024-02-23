<template>
  <div class="flex mt-6 w-full justify-center">
    <div class="max-w-screen-lg w-full grid grid-cols-3 grid-rows-2 gap-6">
      <div class="banner1 rounded-md row-span-2 col-span-2 py-20 px-10 flex flex-col gap-5">
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
      <div class="order-1 banner2 p-4 items-center flex flex-col gap-5">
        <p class="uppercase font-light text-gray-0">best deal</p>
        <h1 class="text-gray-0 text-3xl">
          Special Products <br />
          Deal of the Month
        </h1>
        <my-button class="bg-transparent px-8 text-primary">Shop now</my-button>
      </div>

      <div class="banner3 items-start p-4 flex flex-col gap-1">
        <p class="uppercase font-light text-gray-9">summer sale</p>
        <h1 class="text-gray-9 font-bold text-4xl">75% OFF</h1>
        <p class="text-gray-3 text-xs">Only Fruit & Vegetable</p>
        <my-button class="bg-transparent text-primary">Shop now</my-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
</script>

<style lang="scss" scoped>
.banner1 {
  background: url('@/assets/banner1.png') no-repeat center center;
  background-size: 100% 100%;
}

.banner2 {
  background: url('@/assets/banner2.png') no-repeat center center;
  background-size: 100% 100%;
}

.banner3 {
  background: url('@/assets/banner3.png') no-repeat center center;
  background-size: 100% 100%;
}
</style>

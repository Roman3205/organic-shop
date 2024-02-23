<template>
  <div class="flex mt-2 justify-center w-full">
    <div class="sales max-w-screen-lg w-full max-h-80 rounded-lg">
      <div class="flex-col gap-2.5 w-full h-full flex items-end py-10 pr-10">
        <div class="flex flex-col gap-4">
          <p class="text-sm uppercase font-light text-gray-0">summer sale</p>
          <h2 class="text-gray-0 text-3xl uppercase"><b class="text-warning">37%</b> off</h2>
          <p class="text-gray-4 text-sm">
            Free on all your order, Free Shipping and 30 days<br />
            money-back guarantee
          </p>
          <my-button class="bg-primary px-6 text-gray-0">Shop Now</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
</script>

<style lang="scss" scoped>
.sales {
  background: url('@/assets/sale-main.png') no-repeat center center;
  background-size: 100% 100%;
}
</style>

<template>
  <div class="flex flex-col gap-5 col-span-5">
    <img src="@/assets/description-img.png" class="w-full" alt="" />
    <div class="rounded-md p-3 flex justify-between text-sm border-2 border-gray-1">
      <div class="flex items-center gap-2">
        <img src="@/assets/discount.png" width="25" alt="discount" />
        <div v-if="sale">
          <h6 class="font-medium text">{{ sale }}% Discount</h6>
          <p class="text-gray-5 text-xs">Save your {{ sale }}% money with us</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <img src="@/assets/organic.png" width="25" alt="discount" />
        <div v-if="sale">
          <h6 class="font-medium text">100% Organic</h6>
          <p class="text-gray-5 text-xs">100% Organic Vegetables</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const sale = inject('product-sale')
</script>

<style lang="scss" scoped></style>

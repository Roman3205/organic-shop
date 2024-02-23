<template>
  <div class="grid grid-cols-9 0 gap-x-5 gap-y-5">
    <div class="flex flex-col items-center rounded-md border-2 border-gray-1 col-span-5 py-6 gap-2">
      <img src="@/assets/user-img.png" width="120" alt="" />
      <h3 class="font-medium text-xl">Navigation</h3>
      <p class="text-gray-5">Customer</p>
      <my-button class="text-primary bg-transparent py-0">Edit Profile</my-button>
    </div>
    <div class="col-span-4 flex flex-col p-6 rounded-md border-2 border-gray-1 gap-2.5">
      <p class="uppercase text-gray-4 font-medium">billing address</p>
      <h3 class="font-medium text-xl">Dainne Russell</h3>
      <p class="text-gray-5">4140 Parker Rd. Allentown, New Mexico 31134</p>
      <p class="text-gray-9 font-medium">dainne.ressell@gmail.com</p>
      <p class="text-gray-9 font-medium">(671) 555-0110</p>
      <my-button class="text-primary bg-transparent py-0">Edit Address</my-button>
    </div>
    <TheOrderHistory
      class="col-span-9"
      :compressed="true"
      :height-of-block="'h-64'"
      title="Recent Order History"
    />
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
import TheOrderHistory from './TheOrderHistory.vue'
</script>

<style lang="scss" scoped></style>

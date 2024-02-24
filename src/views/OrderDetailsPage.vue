<template>
  <div class="w-full rounded-md">
    <div
      class="flex items-center rounded-t-md border-2 border-b-0 border-gray-1 justify-between px-6 py-3"
    >
      <div class="flex items-center gap-3">
        <h3 class="font-medium text-xl">Haha</h3>
        <p>April 24, 2021</p>
        <p>3 Products</p>
      </div>

      <my-button class="text-primary bg-transparent py-0">Back to List</my-button>
    </div>
    <div class="w-full p-5 grid grid-cols-3 gap-x-5 rounded-b-md border-2 border-gray-1">
      <div class="col-span-2 flex text-sm">
        <div
          v-for="index in 2"
          :key="index"
          :class="{
            'rounded-r-none border-r-0': index === 1,
            ' rounded-l-none': index === 2
          }"
          class="flex flex-col rounded-md border-2 border-gray-1 gap-2.5"
        >
          <p
            v-text="index === 1 ? 'billing address' : 'shipping address'"
            class="uppercase text-gray-4 p-3 text-xs font-medium border-b-2 border-gray-1"
          ></p>
          <div class="p-3 pt-0 flex flex-col gap-3 text-sm">
            <h3 class="font-medium text-lg">Dainne Russell</h3>
            <p class="text-gray-5 w-4/5">4140 Parker Rd. Allentown, New Mexico 31134</p>
            <div class="flex flex-col gap-1">
              <p class="text-gray-4 font-medium uppercase">email</p>
              <p class="text-gray-9 font-medium">dainne.ressell@gmail.com</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-gray-4 font-medium uppercase">phone</p>
              <p class="text-gray-9 font-medium">(671) 555-0110</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex col-span-1 h-fit pb-1 text-sm flex-col rounded-md border-2 border-gray-1 gap-2.5"
      >
        <div class="flex items-start text-xs justify-between p-3 border-b-2 gray-1">
          <div class="flex flex-col gap-2 w-fit border-r-2 pr-2 border-gray-1">
            <p class="uppercase text-gray-4 font-medium">order id:</p>
            <p class="text-gray-9 font-medium">#4152</p>
          </div>
          <div class="flex w-fit flex-col gap-2">
            <p class="uppercase text-gray-4 font-medium">payment method:</p>
            <p class="text-gray-9 font-medium">Paypal</p>
          </div>
        </div>
        <div class="p-3 pt-0 flex flex-col gap-3 text-sm">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between border-b border-gray-1 pb-3 items-center">
              <p>Subtotal:</p>
              <p class="font-semibold">&#36;84.00</p>
            </div>
            <div class="flex border-b border-gray-1 pb-3 justify-between items-center">
              <p>Discount:</p>
              <p class="font-semibold">20%</p>
            </div>
            <div class="flex border-b border-gray-1 pb-3 justify-between items-center">
              <p>Shipping:</p>
              <p class="font-semibold">Free</p>
            </div>
            <div class="flex text-lg justify-between items-center">
              <p>Total:</p>
              <p class="font-bold text-lg text-primary">&#36;84.00</p>
            </div>
          </div>
        </div>
      </div>
      <TheStatusBoard :delivery-status="deliveryStatus" />
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import { ref } from 'vue'
import TheStatusBoard from '@/components/TheStatusBoard.vue'

const deliveryStatus = ref('2.5')
</script>

<style lang="scss" scoped></style>

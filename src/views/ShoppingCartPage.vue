<template>
  <div class="max-w-screen-lg w-full h-full pt-8 pb-10 flex flex-col gap-10">
    <h1 class="text-3xl font-semibold text-gray-9 text-center">My Shopping Cart</h1>
    <div class="flex justify-between items-start gap-5">
      <div class="flex flex-col gap-6 w-2/3">
        <div class="rounded-lg border-2 border-gray-0">
          <div
            class="grid grid-cols-12 border-b border-gray-0 px-6 py-3 text-gray-5 uppercase text-base font-medium"
          >
            <p class="col-span-5">product</p>
            <p class="col-span-2">price</p>
            <p class="col-span-3">quantity</p>
            <p class="col-span-2">subtotal</p>
          </div>
          <div class="flex wish-list flex-col overflow-y-auto max-h-screen">
            <BaseShopCartItem
              :class="{ 'border-t': index !== 0 }"
              v-for="(shopCartItem, index) in shopCartProducts"
              :key="index"
              :title="shopCartItem.title"
              :price="shopCartItem.price"
              :quantity="shopCartItem.quantity"
              :image="shopCartItem.image"
            />
          </div>
        </div>
        <div class="flex justify-around items-center py-5 border-2 border-gray-0">
          <h3 class="text-xl font-semibold">Coupon Code</h3>
          <form class="h-12 w-2/3 relative flex">
            <input
              type="text"
              class="h-full w-full placeholder:text-gray-4 text-base hover:border-primary block border-2 border-r-0 rounded-3xl border-gray-300 transition duration-500 pl-9 pr-40 outline-none focus:border-primary"
              placeholder="Enter code"
            />
            <button
              type="submit"
              class="text-center text-base hover:opacity-65 transition duration-500 h-full absolute right-0 top-0 rounded-3xl bg-gray-9 text-gray-0 py-3 px-8"
            >
              Apply Coupon
            </button>
          </form>
        </div>
      </div>
      <div class="p-5 rounded-md w-1/3 border-2 border-gray-0 flex flex-col gap-4">
        <h3 class="text-xl font-semibold">Cart Total</h3>
        <div class="flex justify-between border-b border-gray-0 pb-3 items-center">
          <p>Subtotal:</p>
          <p class="font-semibold">&#36;84.00</p>
        </div>
        <div class="flex border-b border-gray-0 pb-3 justify-between items-center">
          <p>Shipping:</p>
          <p class="font-semibold">Free</p>
        </div>
        <div class="flex text-lg justify-between items-center">
          <p>Total:</p>
          <p class="font-bold">&#36;84.00</p>
        </div>
        <button
          type="submit"
          :disabled="false"
          class="text-center mt-2 bg-primary text-gray-0 text-base font-medium hover:opacity-65 transition duration-500 rounded-3xl py-4 px-5"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseShopCartItem from '@/components/BaseShopCartItem.vue'
import { ref } from 'vue'

const shopCartProducts = ref([
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    price: 14.99,
    quantity: 4,
    image: 'product1'
  },
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    price: 14.99,
    quantity: 4,
    image: 'product1'
  },
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    price: 14.99,
    quantity: 4,
    image: 'product1'
  },
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    price: 14.99,
    quantity: 4,
    image: 'product1'
  },
  {
    title: 'Green Capsicum Green Capsicum Green Capsicum ',
    price: 14.99,
    quantity: 4,
    image: 'product1'
  },
  {
    title: 'Chinese Cabbage',
    price: 45,
    quantity: 5,
    image: 'product2'
  },
  {
    title: 'Fresh Sujapuri Mango',
    price: 9,
    quantity: 5,
    image: 'product3'
  }
])
</script>

<style lang="scss" scoped></style>

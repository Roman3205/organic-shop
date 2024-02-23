<template>
  <div class="max-w-screen-lg w-full pt-8 pb-10 gap-x-6 grid grid-cols-12">
    <div class="col-span-8">
      <div class="flex flex-col gap-4 border-b pb-5 border-gray-1">
        <h1 class="text-2xl font-semibold text-gray-9">Billing Information</h1>
        <div class="w-full grid grid-cols-3 gap-x-3">
          <div class="flex flex-col gap-2">
            <p class="font-medium">First name</p>
            <input
              type="text"
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Your first name"
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-medium">Last name</p>
            <input
              type="text"
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Your last name"
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-medium">
              Company Name <span class="text-gray-5 text-sm">(optional)</span>
            </p>
            <input
              type="text"
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Company name"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4 w-full">
          <p class="font-medium">Street Address</p>
          <input
            type="mail"
            class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
            placeholder="Email"
          />
        </div>
        <div class="grid-cols-3 grid gap-x-3">
          <div class="flex flex-col gap-2">
            <p class="font-medium">Country / Region</p>

            <select
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
            >
              <option selected disabled value="Select">Select</option>
              <option value="US">US</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-medium">States</p>

            <select
              class="px-3 py-2 w-7/12 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
            >
              <option selected disabled value="Selects">Selects</option>
              <option value="US">US</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-medium">Zip Code</p>

            <input
              type="text"
              class="px-3 w-7/12 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Zip Code"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-x-3">
          <div class="flex flex-col gap-2">
            <p class="font-medium">Email</p>
            <input
              type="text"
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Email Address"
            />
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-medium">Phone</p>
            <input
              type="text"
              class="px-3 py-2 rounded-md border-2 border-gray-1 outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div class="flex items-center my-2 gap-2">
          <input
            id="default-checkbox"
            type="checkbox"
            class="w-4 h-4 text-gray-5 bg-white border-gray-2 rounded focus:ring-gray-3"
          />
          <label
            for="default-checkbox"
            class="hover:opacity-70 transition duration-500 cursor-pointer font-medium text-gray-6"
            >Ship to a different address</label
          >
        </div>
      </div>
      <div class="flex flex-col gap-4 my-6">
        <h1 class="text-2xl font-semibold text-gray-9">Additional Info</h1>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Order Notes (Optional)</p>
          <textarea
            cols="30"
            rows="10"
            class="outline-none focus:border-primary duration-500 transition hover:border-primary text-gray-5 placeholder:text-gray-4 text-lg resize-none border-2 rounded-md border-gray-1 px-4 py-3 h-24"
            placeholder="Notes about your order, e.g. special notes for delivery"
          ></textarea>
        </div>
      </div>
    </div>
    <div
      class="col-span-4 h-fit rounded-md border-2 gap-3 flex-col flex pt-4 pb-6 px-3 border-gray-1"
    >
      <h3 class="font-semibold text-xl">Order Summery</h3>
      <div class="h-32 py-1 overflow-y-scroll checkout-cart border-y px-1">
        <BaseCheckoutCartItem
          v-for="(cartItem, index) in cartProducts"
          :key="index"
          :title="cartItem.title"
          :price="cartItem.price"
          :quantity="cartItem.quantity"
          :image="cartItem.image"
        />
      </div>
      <div class="flex flex-col gap-2 mt-3 mb-2">
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
      </div>
      <div class="flex flex-col gap-3 mb-3">
        <h3 class="font-semibold text-xl">Payment Method</h3>
        <div class="flex flex-col gap-1.5">
          <div
            class="flex items-center gap-2"
            v-for="(checkbox, index) in checkBoxes"
            :key="checkbox"
          >
            <input
              :id="checkbox"
              :checked="index == 0"
              :disabled="index == 2"
              type="radio"
              name="radio"
              class="w-4 h-4 disabled:border-gray-2 text-primary border-primary focus:ring-primary"
            />
            <label :for="checkbox" class="text-gray-7">{{ checkbox }}</label>
          </div>
        </div>
      </div>
      <button
        class="text-white bg-primary hover:opacity-65 transition duration-500 py-3 w-full rounded-full text-base font-medium"
      >
        Place Order
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCheckoutCartItem from '@/components/BaseCheckoutCartItem.vue'

const checkBoxes = ['Cash on Delivery', 'Paypal', 'Amazon Pay']

const cartProducts = ref([
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  },
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  },
  {
    title: 'Green Apple',
    quantity: 1,
    price: 14,
    image: 'cart1'
  },
  {
    title: 'Fresh Indian Orange',
    quantity: 1,
    price: 12,
    image: 'cart2'
  }
])
</script>

<style lang="scss" scoped></style>

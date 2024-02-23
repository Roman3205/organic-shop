<template>
  <div class="max-w-screen-lg w-full">
    <div class="flex my-5 gap-10 flex-col w-full text-sm">
      <div class="flex flex-row-reverse justify-between gap-12 items-center">
        <div class="flex w-1/2 flex-col gap-4">
          <h3 class="text-4xl font-semibold">100% Trusted Organic Food Store</h3>
          <p class="text-gray-5">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
            cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
            tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo
            ante, at commodo felis congue vitae.
          </p>
        </div>
        <img class="w-1/2" src="@/assets/about-img1.png" alt="" />
      </div>
      <div class="flex justify-between mt-5 gap-12">
        <div class="flex w-5/12 flex-col gap-4">
          <h3 class="text-4xl font-semibold">We Delivered, You Enjoy Your Order.</h3>
          <p class="text-gray-5">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit
            dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus.
            Curabitur auctor bibendum nunc eget elementum.
          </p>
          <div class="flex items-center" v-for="index in checkboxLables" :key="index">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              checked
              disabled
              class="w-4 h-4 text-primary bg-soft-primary border-none rounded focus:ring-none focus:border-none focus:outline-none"
            />
            <label
              for="default-checkbox"
              class="hover:opacity-70 transition duration-500 cursor-pointer ms-2 font-medium text-gray-4"
              >{{ index }}</label
            >
          </div>
          <my-button class="px-6 text-white bg-primary">Show Now</my-button>
        </div>
        <img class="w-7/12" src="@/assets/about-img2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
const checkboxLables = [
  'Sed in metus pellentesque.',
  'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.',
  'Maecenas ut nunc fringilla erat varius.'
]
</script>

<style lang="scss" scoped></style>

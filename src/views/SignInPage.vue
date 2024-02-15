<template>
  <div class="max-w-screen-lg w-full h-full flex justify-center items-center py-16">
    <form
      class="flex flex-col w-1/2 gap-3 rounded-md shadow-xl shadow-gray-2 border-2 border-gray-0 p-8 bg-gray-white"
    >
      <h3 class="text-4xl my-4 text-center font-semibold">Sign In</h3>
      <my-input type="email" placeholder="Email"></my-input>
      <div class="relative flex w-full">
        <my-input :type="input" class="w-full pr-14" placeholder="Password"></my-input>
        <component
          class="absolute top-4 right-4"
          @click.prevent="inputPasswordAction(1)"
          :is="input === 'text' ? TheEyeIcon : input === 'password' ? TheSlashEyeIcon : ''"
        ></component>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center my-2">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-gray-5 bg-white border-gray-2 rounded focus:ring-gray-3"
          />
          <label
            for="default-checkbox"
            class="hover:opacity-70 transition duration-500 cursor-pointer ms-2 text-lg font-medium text-gray-5"
            >Remember me</label
          >
        </div>
        <p
          class="hover:opacity-70 transition duration-500 text-lg font-medium text-gray-5 cursor-pointer"
        >
          Forget Password
        </p>
      </div>
      <my-button type="submit" class="w-full bg-primary flex justify-center text-center text-gray-0"
        >Login</my-button
      >
      <p class="text-center text-gray-8 mt-2">
        Don't have account?
        <b class="hover:opacity-70 transition duration-500 cursor-pointer">Register</b>
      </p>
    </form>
  </div>
</template>

<script setup>
import MyInput from '@/components/MyInput.vue'
import MyButton from '@/components/MyButton.vue'
import TheEyeIcon from '@/components/icons/TheEyeIcon.vue'
import { ref } from 'vue'
import TheSlashEyeIcon from '@/components/icons/TheSlashEyeIcon.vue'

const input = ref('text')

const inputPasswordAction = (index) => {
  if (index === 1) {
    input.value === 'text'
      ? (input.value = 'password')
      : input.value === 'password'
      ? (input.value = 'text')
      : ''
  } else return
}
</script>

<style lang="scss" scoped></style>

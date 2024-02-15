<template>
  <div class="max-w-screen-lg w-full h-full flex justify-center items-center py-16">
    <form
      class="flex flex-col w-1/2 gap-3 rounded-md shadow-xl shadow-gray-2 border-2 border-gray-0 p-8 bg-gray-white"
    >
      <h3 class="text-4xl my-4 text-center font-semibold">Create Account</h3>
      <my-input type="email" placeholder="Email"></my-input>
      <div class="relative flex w-full">
        <my-input :type="input1" class="w-full pr-14" placeholder="Password"></my-input>
        <component
          class="absolute top-4 right-4"
          @click.prevent="inputPasswordAction(1)"
          :is="input1 === 'text' ? TheEyeIcon : input1 === 'password' ? TheSlashEyeIcon : ''"
        ></component>
      </div>
      <div class="relative flex w-full">
        <my-input :type="input2" class="w-full pr-14" placeholder="Confirm Password"></my-input>
        <component
          class="absolute top-4 right-4"
          @click.prevent="inputPasswordAction(2)"
          :is="input2 === 'text' ? TheEyeIcon : input2 === 'password' ? TheSlashEyeIcon : ''"
        ></component>
      </div>

      <div class="flex items-center my-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-gray-5 bg-white border-gray-2 rounded focus:ring-gray-3"
        />
        <label
          for="default-checkbox"
          class="hover:opacity-70 transition duration-500 cursor-pointer ms-2 text-lg font-medium text-gray-4"
          >Accept all terms & Conditions</label
        >
      </div>
      <my-button type="submit" class="w-full bg-primary flex justify-center text-center text-gray-0"
        >Create Account</my-button
      >
      <p class="text-center text-gray-8 mt-2">
        Already have account
        <b class="hover:opacity-70 transition duration-500 cursor-pointer">Login</b>
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

const input1 = ref('text')
const input2 = ref('text')

const inputPasswordAction = (index) => {
  if (index === 1) {
    input1.value === 'text'
      ? (input1.value = 'password')
      : input1.value === 'password'
      ? (input1.value = 'text')
      : ''
  } else if (index === 2) {
    input2.value === 'text'
      ? (input2.value = 'password')
      : input2.value === 'password'
      ? (input2.value = 'text')
      : ''
  } else return
}
</script>

<style lang="scss" scoped></style>

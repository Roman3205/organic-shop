<template>
  <div>
    <div class="bg-black fixed z-40 opacity-70 top-0 bottom-0 left-0 right-0"></div>
    <div
      class="flex justify-center w-full h-full items-center fixed opacity-100 top-0 bottom-0 right-0 left-0 z-50 bg-transparent"
    >
      <div class="flex bg-white p-4 rounded-lg">
        <img class="rounded-md w-2/5" src="@/assets/popup-image.png" alt="" />
        <div class="flex w-3/5 flex-col gap-8 py-3 items-center">
          <div class="flex justify-end w-full px-3">
            <TheCrossIcon class="h-8 w-8" />
          </div>
          <h3 class="text-5xl w-3/5 text-center font-semibold">Subcribe to Our Newsletter</h3>
          <p class="text-gray-4 text-xl w-3/4 text-center">
            Subscribe to our newlletter and Save your
            <span class="text-warning font-semibold">20% money</span> with discount code today.
          </p>
          <form class="h-16 w-3/4 relative text-xl flex">
            <input
              type="text"
              class="h-full placeholder:text-gray-4 text-lg hover:border-primary w-full block border-2 border-r-0 rounded-3xl border-gray-300 transition duration-500 pl-9 pr-44 outline-none focus:border-primary"
              placeholder="Your email address"
            />
            <button
              type="submit"
              class="text-center hover:opacity-65 transition duration-500 h-full absolute right-0 top-0 rounded-3xl bg-primary text-gray-0 py-3 px-8"
            >
              Subscribe
            </button>
          </form>
          <div class="flex items-center">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-gray-5 bg-white border-gray-2 rounded focus:ring-gray-3"
              />
              <label for="default-checkbox" class="ms-2 text-lg font-medium text-gray-5"
                >Do not show this window</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCrossIcon from '@/components/icons/TheCrossIcon.vue'
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-full flex justify-center bg-gray-0">
    <div class="max-w-screen-lg py-5 flex justify-between items-center w-full">
      <div class="flex flex-col gap-1">
        <h3 class="text-2xl font-bold">Subcribe our Newsletter</h3>
        <p class="text-gray-3 text-xs">
          Pellentesque eu nibh eget mauris congue mattis mattis nec <br />
          tellus. Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <form class="h-12 min-w-80 relative flex">
        <input
          type="text"
          class="h-full placeholder:text-gray-4 text-base hover:border-primary block border-2 border-r-0 rounded-3xl border-gray-300 transition duration-500 pl-9 pr-40 outline-none focus:border-primary"
          placeholder="Your email address"
        />
        <button
          type="submit"
          class="text-center text-base hover:opacity-65 transition duration-500 h-full absolute right-0 top-0 rounded-3xl bg-primary text-gray-0 py-3 px-8"
        >
          Subscribe
        </button>
      </form>
      <div class="flex gap-4">
        <TheFacebookIcon class="sn-icons" />
        <TheTwitterIcon class="sn-icons" />
        <TheInstagramIcon class="sn-icons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheFacebookIcon from './icons/TheFacebookIcon.vue'
import TheInstagramIcon from './icons/TheInstagramIcon.vue'
import TheTwitterIcon from './icons/TheTwitterIcon.vue'
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box !important;
}
</style>

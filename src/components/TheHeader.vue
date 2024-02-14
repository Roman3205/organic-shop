<template>
  <div class="text-gray-5 w-full flex flex-col items-center self-center">
    <div class="text-sm border-b-2 w-full flex justify-center">
      <div class="flex flex-wrap w-full py-4 items-center justify-between max-w-screen-lg">
        <div class="flex gap-3 items-center">
          <TheMapIcon />
          <p class="pt-1">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div class="flex gap-5 items-center">
          <div class="border-r-2 border-r-slate-300 pr-6">
            <select class="bg-gray-200 header-footer-hover p-1 border-gray-300 text-sm rounded-lg">
              <option selected value="EN">Eng</option>
              <option value="RU">Ru</option>
            </select>
          </div>
          <div class="flex gap-3 items-center">
            <p class="header-footer-hover">Sign in</p>
            <p>/</p>
            <p class="header-footer-hover">Sign up</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-sm flex w-full justify-center border-b-2">
      <div class="flex flex-wrap w-full items-center justify-between py-5 max-w-screen-lg">
        <div class="flex items-center gap-3 cursor-pointer">
          <TheLogoIcon />
          <h1 class="text-3xl text-gray-9">Ecobazar</h1>
        </div>
        <div class="flex relative items-center">
          <TheSearchIcon class="absolute top-3 left-3" />
          <form class="flex h-11">
            <input
              type="text"
              class="h-full border-2 border-r-0 w-72 hover:border-hard-primary rounded-bl-md rounded-tl-md border-gray-300 transition duration-500 pl-9 pr-4 outline-none focus:border-primary"
              placeholder="Search"
            />
            <button
              type="submit"
              class="text-center h-full hover:opacity-65 transition duration-500 rounded-br-md rounded-tr-md bg-primary text-gray-0 py-3 px-5"
            >
              Search
            </button>
          </form>
        </div>
        <div class="flex gap-4 items-center">
          <div class="border-r-2 border-r-slate-300 pr-5">
            <TheHeartIcon class="text-gray-9 h-10 w-10" />
          </div>
          <div class="flex items-center gap-5 relative">
            <p
              class="rounded-full absolute bottom-6 left-5 h-7 w-7 p-1 text-gray-0 text-center bg-hard-primary"
            >
              2
            </p>
            <TheCartIcon class="text-gray-9 w-10 h-10" />
            <div class="cursor-pointer flex flex-col justify-between">
              <p class="text-gray-7">Shopping cart</p>
              <p class="font-semibold text-xl text-gray-9">&#36;57.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-8 w-full flex justify-center">
      <div class="w-full flex items-center justify-between py-4 max-w-screen-lg">
        <div class="flex items-center gap-8">
          <select
            class="appearance-none header-footer-hover sel bg-transparent p-1 border-gray-300 text-sm text-gray-0 rounded-lg"
          >
            <option class="bg-gray-8" selected value="EN">Home</option>
            <option class="bg-gray-8" value="RU">...</option>
          </select>
          <select
            class="appearance-none header-footer-hover sel bg-transparent p-1 border-gray-300 text-sm text-gray-0 rounded-lg"
          >
            <option class="bg-gray-8" selected value="EN">Pages</option>
            <option class="bg-gray-8" value="RU">...</option>
          </select>
          <select
            class="appearance-none header-footer-hover sel bg-transparent p-1 border-gray-300 text-sm text-gray-0 rounded-lg"
          >
            <option class="bg-gray-8" selected value="EN">Blog</option>
            <option class="bg-gray-8" value="RU">...</option>
          </select>
          <p class="pt-0.5 header-footer-hover">Abous Us</p>
          <p class="pt-0.5 header-footer-hover">Contact Us</p>
        </div>
        <div class="flex item-center gap-3 header-footer-hover">
          <ThePhoneIcon />
          <p class="text-gray-1">(219) 555-0114</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheLogoIcon from '@/components/icons/TheLogoIcon.vue'
import TheMapIcon from '@/components/icons/TheMapIcon.vue'
import TheSearchIcon from '@/components/icons/TheSearchIcon.vue'
import TheCartIcon from '@/components/icons/TheCartIcon.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import ThePhoneIcon from '@/components/icons/ThePhoneIcon.vue'
</script>

<style lang="scss" scoped></style>

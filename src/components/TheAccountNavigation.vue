<template>
  <div class="w-96 flex flex-col pb-2 border-2 rounded-md border-gray-1">
    <h3 class="px-3 py-5 font-semibold text-xl">Navigation</h3>
    <div class="flex flex-col">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ 'bg-gray-0 border-l-4 border-primary': index == 0 }"
        class="flex cursor-pointer hover:opacity-80 transition duration-300 px-4 py-4 gap-3 items-center"
      >
        <component
          :class="{ 'text-black  ': index == 0 }"
          class="w-8 h-8 text-gray-4"
          :is="item.icon"
        ></component>
        <p :class="{ 'text-black font-medium': index == 0 }" class="text-lg text-gray-7">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSquaresIcon from '@/components/icons/TheSquaresIcon.vue'
import TheArrowPath from '@/components/icons/TheArrowPath.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCartIcon from '@/components/icons/TheCartIcon.vue'
import TheSettingsIcon from '@/components/icons/TheSettingsIcon.vue'

import TheLogOutIcon from '@/components/icons/TheLogOutIcon.vue'

const navItems = [
  {
    title: 'Dashboard',
    icon: TheSquaresIcon
  },
  {
    title: 'Order History',
    icon: TheArrowPath
  },
  {
    title: 'Wishlist',
    icon: TheHeartIcon
  },
  {
    title: 'Shopping Cart',
    icon: TheCartIcon
  },
  {
    title: 'Settings',
    icon: TheSettingsIcon
  },
  {
    title: 'Log-out',
    icon: TheLogOutIcon
  }
]
</script>

<style lang="scss" scoped></style>

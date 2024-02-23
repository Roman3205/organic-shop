<template>
  <div class="flex flex-col gap-3 w-4/5 border-t py-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img :src="`/src/assets/${imageUser}.png`" width="40" alt="" />
        <div>
          <p class="font-semibold">{{ username }}</p>
          <i
            :class="{ 'text-gray-2': stars < index, 'text-warning': stars >= index }"
            class="fa fa-star"
            v-for="index in 5"
            :key="index"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <p class="text-gray-4">2 min ago</p>
    </div>
    <div class="w-full line-clamp-3 break-all">{{ text }}</div>
  </div>
</template>

<script setup>
defineProps({
  imageUser: String,
  username: String,
  stars: Number,
  text: String
})
</script>

<style lang="scss" scoped></style>

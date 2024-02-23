<template>
  <div
    class="flex cursor-pointer hover:opacity-85 transition duration-500 flex-col rounded-md h-full basis-1/2 shrink-0 bg-white p-5 justify-between max-h-64 gap-4"
  >
    <img src="@/assets/review-tag.svg" width="35" alt="" />
    <p class="text-gray-7 line-clamp-3 flex-1 break-all">
      {{ text }}
    </p>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img :src="`../src/assets/${imageUser}.png`" width="40" alt="" />
        <div>
          <p class="font-bold">{{ username }}</p>
          <p class="text-gray-4">Customer</p>
        </div>
      </div>
      <div>
        <i
          :class="{ 'text-gray-2': stars < index, 'text-warning': stars >= index }"
          class="fa fa-star"
          v-for="index in 5"
          :key="index"
          aria-hidden="true"
        ></i>
      </div>
    </div>
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

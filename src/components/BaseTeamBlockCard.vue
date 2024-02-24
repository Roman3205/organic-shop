<template>
  <div
    class="flex h-72 flex-col rounded-md cursor-pointer duration-300 hover:opacity-85 transition"
  >
    <img
      class="h-4/5 border-nne rounded-none w-full"
      :src="`../src/assets/${image}.png`"
      :alt="image"
    />
    <div
      class="flex h-2/5 rounded-b-md py-2 px-3 flex-col items-start border-b border-r border-l border-gray-1"
    >
      <h4 class="text-base font-semibold">{{ name }}</h4>
      <p class="text-gray-4 text-sm">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  position: String,
  image: String
})
</script>

<style lang="scss" scoped></style>

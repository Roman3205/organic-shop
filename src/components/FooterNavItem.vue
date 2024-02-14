<template>
  <div class="text-gray-5 flex flex-col text-sm gap-6">
    <h4 class="text-base text-gray-1">{{ header }}</h4>
    <div class="flex flex-col gap-2.5">
      <p class="header-footer-hover">{{ text1 }}</p>
      <p class="header-footer-hover">{{ text2 }}</p>
      <p class="header-footer-hover">{{ text3 }}</p>
      <p class="header-footer-hover">{{ text4 }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: String,
  text1: String,
  text2: String,
  text3: String,
  text4: String
})
</script>

<style lang="scss" scoped></style>

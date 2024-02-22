<template>
  <div class="w-full flex items-center flex-col">
    <div class="w-full border-gray-1 font-medium text-gray-5 flex justify-center gap-7 border-b">
      <p
        class="pb-3 after:w-28 after:bg-primary after:h-1 after:absolute after:bottom-0 after:left-0 after:right-0 after relative"
        v-for="title in sliderTitles"
        :key="title"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup>
const sliderTitles = ['Descriptions', 'Additional Information', 'Customer Feedback']
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-full flex pb-14 flex-col">
    <BaseSliderFeedback
      class="border-gray-1"
      :class="{ 'border-none': index == 0 }"
      v-for="(feedback, index) in reviews"
      :image-user="feedback.imageUser"
      :stars="feedback.stars"
      :text="feedback.text"
      :username="feedback.username"
      :key="index"
    />
    <button
      class="rounded-full py-4 px-7 mt-1 hover:opacity-65 duration-500 transition bg-gray-0 w-fit font-semibold text-primary"
    >
      Load More
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseSliderFeedback from './BaseSliderFeedback.vue'

const reviews = ref([
  {
    imageUser: 'user',
    username: 'Kristin Watson',
    stars: 5,
    text: 'Duis at ullamcorper nulla, eu dictum eros.'
  },
  {
    imageUser: 'user',
    username: 'Jane Cooper',
    stars: 4,
    text: 'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.'
  },
  {
    imageUser: 'user',
    username: 'Jacob Jones',
    stars: 5,
    text: ' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.'
  },
  {
    imageUser: 'user',
    username: 'Ralph Edwards',
    stars: 5,
    text: '200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton`s Choice, Bok Choi, from USA'
  }
])
</script>

<style lang="scss" scoped></style>

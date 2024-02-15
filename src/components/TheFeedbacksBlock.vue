<template>
  <div class="flex bg-gray-0 justify-center w-full mt-10 mb-2">
    <div class="max-w-screen-lg w-full flex flex-col pt-8 pb-12 gap-7 bg-gray-0">
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-2xl">Hot Deals</h2>
        <div class="flex gap-3">
          <my-button
            @click.prevent="scrollReviews('left')"
            class="text-gray-7 rotate-180 bg-white p-3 hover:bg-primary hover:text-gray-0 transition duration-300"
          ></my-button>
          <my-button
            @click.prevent="scrollReviews('right')"
            class="text-gray-7 bg-white p-3 hover:bg-primary hover:text-white transition duration-300"
          ></my-button>
        </div>
      </div>
      <div ref="reviewsBlock" class="flex overflow-hidden pr-5 items-start gap-5">
        <BaseFeedbackItem
          v-for="(feedback, index) in feedbacks"
          :image-user="feedback.imageUser"
          :stars="feedback.stars"
          :text="feedback.text"
          :username="feedback.username"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import BaseFeedbackItem from '@/components/BaseFeedbackItem.vue'
import { ref } from 'vue'

const feedbacks = [
  {
    imageUser: 'user',
    username: 'Dianne Russell',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  },
  {
    imageUser: 'user',
    username: 'Dianne Russell',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  },
  {
    imageUser: 'user',
    username: 'Dianne Russell',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  },
  {
    imageUser: 'user',
    username: 'Dianne Russell',
    stars: 5,
    text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget'
  }
]

let reviewsBlock = ref(null)

const scrollReviews = (dir) => {
  if (dir === 'right') {
    reviewsBlock.value.scrollBy({
      left: 360,
      behavior: 'smooth'
    })
  } else if (dir === 'left') {
    reviewsBlock.value.scrollBy({
      left: -360,
      behavior: 'smooth'
    })
  } else return
}
</script>

<style lang="scss" scoped></style>

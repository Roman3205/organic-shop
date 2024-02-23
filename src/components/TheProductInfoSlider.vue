<template>
  <div class="w-full flex items-center gap-6 flex-col">
    <div class="w-full gap-7 border-gray-1 font-medium text-gray-5 flex justify-center border-b">
      <p
        :class="{
          'after:w-28 after:bg-primary after:h-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2':
            index === 0
        }"
        class="pb-3 relative cursor-pointer duration-300 transition hover:opacity-75"
        v-for="(title, index) in sliderTitles"
        :key="title"
        @click.prevent="changeSliderComponent(title)"
      >
        {{ title }}
      </p>
    </div>
    <div class="w-full max-w-screen-lg">
      <keep-alive include="TheSliderFeedbacks">
        <transition name="sliderComp">
          <component :is="sliderComponent"></component>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import TheSliderAddInfo from './TheSliderAddInfo.vue'
import TheSliderDescriptions from './TheSliderDescriptions.vue.vue'
import TheSliderFeedbacks from './TheSliderFeedbacks.vue'
import { ref, shallowRef } from 'vue'

const sliderTitles = ['Descriptions', 'Additional Information', 'Customer Feedback']
const sliderComponent = shallowRef(TheSliderDescriptions)
const changeSliderComponent = (comp) => {
  comp === 'Descriptions'
    ? (sliderComponent.value = TheSliderDescriptions)
    : comp === 'Additional Information'
    ? (sliderComponent.value = TheSliderAddInfo)
    : comp === 'Customer Feedback'
    ? (sliderComponent.value = TheSliderFeedbacks)
    : ''
}
</script>

<style lang="scss" scoped>
.sliderComp-enter-from,
.sliderComp-enter-active {
  transition: 0.3s ease-out;
  opacity: 0;
}

.sliderComp-enter-to {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}
</style>

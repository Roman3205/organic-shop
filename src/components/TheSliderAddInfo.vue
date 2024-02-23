<template>
  <div class="w-full grid grid-cols-11 gap-14 gap-x-10">
    <div class="col-span-6">
      <div class="flex items-start gap-5">
        <div class="flex flex-col gap-2">
          <div class="font-medium" v-for="title in infoTitles" :key="title">{{ title }}:</div>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="text-gray-6"
            v-for="data in infoData"
            :key="data"
            :class="{ 'cursor-pointer': typeof data === 'object' }"
          >
            <p v-if="typeof data !== 'object'">{{ data }}</p>
            <div v-else class="flex flex-col">
              <p
                v-for="tag in tags"
                class="w-fit cursor-pointer after:transition-all duration-700 transition hover:after:w-full hover:opacity-70 after:absolute after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-6 after:left-0 relative"
                :key="tag"
              >
                {{ tag }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MySliderBanner />
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import MySliderBanner from './MySliderBanner.vue'

const infoTitles = ['Weight', 'Color', 'Type', 'Category', 'StockStatus', 'Tags']
const infoData = inject('infoData')
const tags = ref(infoData[infoData.length - 1])
</script>

<style lang="scss" scoped></style>

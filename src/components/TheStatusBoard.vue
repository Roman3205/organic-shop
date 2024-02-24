<template>
  <div class="w-full justify-items-center col-span-3 my-6 grid-cols-4 grid">
    <div
      v-for="(title, index) in titleStatus"
      :key="index"
      class="flex flex-col gap-1 items-center"
    >
      <div
        :class="{
          'after:absolute after:left-11  after:top-5  after:w-32     after:h-2': index !== 3,
          'm-0 after:left-12': index !== 0,
          'after:bg-primary': deliveryStatus > index + 1,
          'after:bg-gray-1': deliveryStatus <= index + 1,
          'bg-white after:bg-gray-1  text-primary border-dashed  border-2 border-primary':
            deliveryStatus - (index + 1) < 0,
          'text-white': deliveryStatus - (index + 1) > 0,
          'after:bg-gradient-to-r after:from-50% after:from-primary after:to-50% after:to-gray-1':
            deliveryStatus - (index + 1) < 1 && deliveryStatus - (index + 1) > 0
        }"
        class="bg-primary border-2 border-primary relative w-fit rounded-full px-2.5 py-2.5"
      >
        <component
          v-if="Math.floor(deliveryStatus) > index + 1"
          class="w-full p-0 h-full flex items-center justify-center"
          :is="TheCheckIcon"
        ></component>
        <div
          :class="deliveryStatus - (index + 1) < 0 ? 'text-primary' : 'text-white'"
          class="px-2 w-full h-full flex items-center justify-center"
          v-else
        >
          {{ index + 1 }}
        </div>
      </div>
      <div
        :class="{
          'text-hard-primary font-medium': deliveryStatus - (index + 1) >= 1,
          'text-primary font-bold': index + 1 == Math.floor(deliveryStatus),
          'text-black font-normal': deliveryStatus - (index + 1) < 0
        }"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCheckIcon from '@/components/icons/TheCheckIcon.vue'

const titleStatus = ['Order received', 'Processing', 'On the way', 'Delivered']
defineProps({
  deliveryStatus: String
})
</script>

<style lang="scss" scoped></style>

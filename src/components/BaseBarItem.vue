<template>
  <div class="flex gap-3 items-center">
    <component :is="svgConverter"></component>
    <div class="flex flex-col gap-2">
      <p class="text-sm font-bold">{{ header }}</p>
      <p class="text-gray-3 text-xs">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TheTruckIcon from '@/components/icons/TheTruckIcon.vue'
import TheSupportIcon from '@/components/icons/TheSupportIcon.vue'
import TheSecureIcon from '@/components/icons/TheSecureIcon.vue'
import TheBoxIcon from '@/components/icons/TheBoxIcon.vue'

const props = defineProps({
  svg: String,
  header: String,
  text: String
})

const svgConverter = computed(() =>
  props.svg == 'truck'
    ? TheTruckIcon
    : props.svg == 'support'
    ? TheSupportIcon
    : props.svg == 'secure'
    ? TheSecureIcon
    : props.svg == 'box'
    ? TheBoxIcon
    : ''
)
</script>

<style lang="scss" scoped></style>

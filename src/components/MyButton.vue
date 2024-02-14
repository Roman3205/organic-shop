<template>
  <button
    type="button"
    :="attrs"
    class="font-semibold hover:opacity-65 transition duration-500 items-center py-3 text-center flex gap-3 w-fit rounded-3xl"
  >
    <slot></slot><TheArrowIcon />
  </button>
</template>

<script setup>
import { useAttrs } from 'vue'
import TheArrowIcon from '@/components/icons/TheArrowIcon.vue'

const attrs = useAttrs()
</script>

<style lang="scss" scoped></style>

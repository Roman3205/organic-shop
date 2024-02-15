<template>
  <input
    type="text"
    class="h-14 text-lg placeholder:text-gray-4 hover:border-primary border-2 rounded-md border-gray-1 transition duration-500 px-4 outline-none focus:border-primary"
    :="attrs"
  />
</template>

<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<style lang="scss" scoped></style>

<template>
  <div class="max-w-screen-lg w-full h-full py-14 flex items-center justify-between gap-10">
    <div class="flex flex-col gap-8">
      <h3 class="text-4xl font-semibold w-full">Welcome, Let's Talk About Our Ecobazar</h3>
      <div class="flex flex-col gap-4">
        <div v-for="index in 5" :key="index" class="flex flex-col justify-between rounded-lg">
          <div
            ref="header"
            class="flex px-3 border-2 py-2 bg-gray-0 rounded-lg items-center justify-between"
          >
            <p class="font-semibold">In elementum est a ante sodales iaculis.</p>
            <ThePlusIcon
              @click.prevent="expandBlock(index)"
              class="p-2 plus hover:bg-primary hover:opacity-70 hover:text-white flex justify-center text-gray-9 rounded-full bg-white"
            />
          </div>
          <div ref="text" class="transition-all h-0 opacity-0 invisible duration-500">
            <p class="p-3 w-full h-full">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
              cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet
              vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare
              commodo ante, at commodo felis congue vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/faqs.png" class="self-start" width="530" alt="" />
  </div>
</template>

<script setup>
import ThePlusIcon from '@/components/icons/ThePlusIcon.vue'
import { ref } from 'vue'

const text = ref(null)
const header = ref(null)
const openBlock = ref(false)

const expandBlock = (index) => {
  let block = text.value[index - 1]
  let title = header.value[index - 1]
  if (openBlock.value == false) {
    title.classList = title.classList.value + ' rounded-none rounded-t-lg border-soft-primary'
    block.classList =
      'transition-all h-full border-b border-l border-r border-soft-primary bg-white rounded-b-lg visible duration-300 opacity-100'
    openBlock.value = true
  } else if (openBlock.value == true) {
    block.classList = 'transition-all h-0 opacity-0 invisible duration-300'
    title.classList = 'flex px-3 border-2 py-2 bg-gray-0 rounded-lg items-center justify-between'
    openBlock.value = false
  } else return
}
</script>

<style lang="scss" scoped></style>

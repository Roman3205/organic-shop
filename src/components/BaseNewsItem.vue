<template>
  <div
    class="flex cursor-pointer hover:opacity-85 transition duration-500 flex-col rounded-md shadow-md"
  >
    <img :src="`../src/assets/${image}.png`" alt="" />
    <div class="px-5 py-4 h-full flex flex-col justify-between gap-2">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <TheTagIcon class="text-gray-4" />
          <p class="text-xs text-gray-5">{{ category }}</p>
        </div>
        <div class="flex items-center gap-1">
          <TheAdminIcon class="text-gray-4" />
          <p class="text-xs text-gray-5">By Admin</p>
        </div>
        <div class="flex items-center gap-1">
          <TheCommentIcon class="text-gray-4" />
          <p class="text-xs text-gray-5">{{ comments }} comments</p>
        </div>
      </div>
      <p class="break-all line-clamp-3 flex-1">{{ text }}</p>
      <my-button class="bg-transparent text-primary">Read More</my-button>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import TheAdminIcon from '@/components/icons/TheAdminIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import TheTagIcon from '@/components/icons/TheTagIcon.vue'

defineProps({
  text: String,
  category: String,
  comments: Number,
  date: String,
  image: String
})
</script>

<style lang="scss" scoped></style>

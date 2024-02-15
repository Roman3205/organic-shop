<template>
  <div class="flex justify-center w-full py-8">
    <div class="max-w-screen-lg flex flex-col w-full">
      <h1 class="text-2xl text-gray-9 self-center font-bold">Latest News</h1>
      <div class="grid grid-rows-1 mt-5 grid-cols-3 gap-6">
        <BaseNewsItem
          v-for="news in newsBlocks"
          :key="news.id"
          :text="news.text"
          :comments="news.comments"
          :date="news.date"
          :image="news.image"
          :category="news.category"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseNewsItem from '@/components/BaseNewsItem.vue'

const newsBlocks = [
  {
    id: 1,
    text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum. Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum. Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    category: 'Food',
    comments: 31,
    date: '18',
    image: 'news1'
  },
  {
    id: 2,
    text: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
    category: 'Food',
    comments: 43,
    date: '29',
    image: 'news2'
  },
  {
    id: 3,
    text: 'Maecenas blandit risus elementum mauris malesuada.',
    category: 'Food',
    comments: 17,
    date: '21',
    image: 'news3'
  }
]
</script>

<style lang="scss" scoped></style>

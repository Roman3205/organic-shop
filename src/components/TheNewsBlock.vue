<template>
  <div class="flex justify-center w-full">
    <div class="max-w-screen-lg flex flex-col w-full py-12">
      <h1 class="text-2xl text-gray-9 self-center font-bold">Latest News</h1>
      <div class="grid grid-rows-1 mt-5 grid-cols-3 gap-6">
        <div class="flex flex-col rounded-md shadow-md" v-for="news in newsBlocks" :key="news.id">
          <img :src="`../src/assets/${news.image}.png`" alt="" />
          <div class="px-5 py-4 h-full flex flex-col justify-between gap-2">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1">
                <TheTagIcon class="text-gray-4" />
                <p class="text-xs text-gray-5">{{ news.category }}</p>
              </div>
              <div class="flex items-center gap-1">
                <TheAdminIcon class="text-gray-4" />
                <p class="text-xs text-gray-5">By Admin</p>
              </div>
              <div class="flex items-center gap-1">
                <TheCommentIcon class="text-gray-4" />
                <p class="text-xs text-gray-5">{{ news.comments }} comments</p>
              </div>
            </div>
            <p class="break-all">{{ news.text }}</p>
            <my-button class="bg-transparent text-primary">Read More</my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import TheAdminIcon from '@/components/icons/TheAdminIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import TheTagIcon from '@/components/icons/TheTagIcon.vue'

const newsBlocks = [
  {
    id: 1,
    text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    category: 'Food',
    comments: '31',
    date: '18',
    image: 'news1'
  },
  {
    id: 2,
    text: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
    category: 'Food',
    comments: '43',
    date: '29',
    image: 'news2'
  },
  {
    id: 2,
    text: 'Maecenas blandit risus elementum mauris malesuada.',
    category: 'Food',
    comments: '17',
    date: '21',
    image: 'news3'
  }
]
</script>

<style lang="scss" scoped></style>

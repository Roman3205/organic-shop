<template>
  <div class="app mx-auto flex flex-col items-center">
    <BasePopup v-if="!showPopup" />
    <TheCart v-if="showCart" />
    <TheHeader />
    <TheHeaderBreadcrumb />
    <router-view class="main"></router-view>
    <NewsLetterBlock />
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheHeaderBreadcrumb from '@/components/TheHeaderBreadcrumb.vue'
import NewsLetterBlock from '@/components/NewsLetterBlock.vue'
import TheFooter from '@/components/TheFooter.vue'
import BasePopup from '@/components/BasePopup.vue'
import TheCart from '@/components/TheCart.vue'
import { ref } from 'vue'

const showPopup = ref(false)
const showCart = ref(false)
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  font-family: 'Poppins';
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.main {
  min-height: calc(100vh - 332px - 108px - 210px - 81px);
}
</style>

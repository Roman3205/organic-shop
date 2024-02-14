<template>
  <div class="flex w-full flex-col items-center">
    <MyMainInfo />
    <BaseInfoBar />
    <BasePopularCategories />
    <BasePopularProducts />
    <TheSalesBanners />
    <BaseHotDeals />
    <TheSaleSuggestion />
    <TheFeedbacksBlock />
    <TheNewsBlock />
    <TheCompanyInfo />
  </div>
</template>

<script setup>
import MyMainInfo from '@/components/MyMainInfo.vue'
import BaseInfoBar from '@/components/BaseInfoBar.vue'
import BasePopularCategories from '@/components/BasePopularCategories.vue'
import BasePopularProducts from '@/components/BasePopularProducts.vue'
import TheSalesBanners from '@/components/TheSalesBanners.vue'
import TheSaleSuggestion from '@/components/TheSaleSuggestion.vue'
import TheCompanyInfo from '@/components/TheCompanyInfo.vue'
import TheNewsBlock from '@/components/TheNewsBlock.vue'
import BaseHotDeals from '@/components/BaseHotDeals.vue'
import TheFeedbacksBlock from '@/components/TheFeedbacksBlock.vue'
</script>

<style lang="scss" scoped></style>

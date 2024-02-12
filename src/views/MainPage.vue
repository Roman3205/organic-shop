<template>
  <div class="py-5 flex w-full flex-col items-center max-w-screen-lg">
    <MyMainInfo />
    <BaseInfoBar />
    <BasePopularCategories />
    <BasePopularProducts />
    <TheSalesBanners />
    <BaseHotDeals />
    <TheSaleSuggestion />
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
</script>

<style lang="scss" scoped></style>

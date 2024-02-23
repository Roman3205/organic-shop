<template>
  <div class="py-8 mb-12 flex flex-col items-center w-full">
    <BaseAboutInfo />
    <BaseTeamBlock />
    <TheFeedbacksBlock />
  </div>
</template>

<script setup>
import BaseTeamBlock from '@/components/BaseTeamBlock.vue'
import BaseAboutInfo from '@/components/BaseAboutInfo.vue'
import TheFeedbacksBlock from '@/components/TheFeedbacksBlock.vue'
</script>

<style lang="scss" scoped></style>

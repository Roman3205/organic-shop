<template>
  <div class="max-w-screen-lg gap-5 flex flex-col items-center">
    <h3 class="text-4xl font-semibold">Our Awesome Team</h3>
    <p class="text-gray-5 w-2/3 text-center">
      Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis
      non diam eget est luctus tincidunt a a mi.
    </p>
    <div class="w-full grid grid-cols-4 gap-x-6">
      <BaseTeamBlockCard
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :name="card.name"
        :position="card.position"
      />
    </div>
  </div>
</template>

<script setup>
import BaseTeamBlockCard from './BaseTeamBlockCard.vue'

const cards = [
  {
    name: 'Jenny Wilson',
    position: 'Ceo & Founder',
    image: 'worker1'
  },
  {
    name: 'Jane Cooper',
    position: 'Worker',
    image: 'worker2'
  },
  {
    name: 'Cody Fisher',
    position: 'Security Guard',
    image: 'worker3'
  },
  {
    name: 'Robert Fox',
    position: 'Senior Farmer Manager',
    image: 'worker4'
  }
]
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-full grid grid-cols-11 gap-14 gap-x-10">
    <div class="text-gray-6 flex flex-col gap-5 col-span-6">
      <p>
        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at
        mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus,
        nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris
        sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id
        molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum,
        placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id
        mi quam. Phasellus nec fringilla elit.
      </p>
      <p>
        Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus
        elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla.
        Proin luctus elementum neque et pharetra.
      </p>
      <div class="flex flex-col gap-3.5">
        <div class="flex items-center gap-3" v-for="passage in descriptionPassages" :key="passage">
          <TheCheckIcon class="text-white bg-primary rounded-full w-fit p-1" />
          {{ passage }}
        </div>
      </div>
    </div>
    <MySliderBanner />
  </div>
</template>

<script setup>
import TheCheckIcon from './icons/TheCheckIcon.vue'
import MySliderBanner from './MySliderBanner.vue'

const descriptionPassages = [
  '100 g of fresh leaves provides.',
  'Aliquam ac est at augue volutpat elementum.',
  'Quisque nec enim eget sapien molestie.',
  'Proin convallis odio volutpat finibus posuere.'
]
</script>

<style lang="scss" scoped></style>

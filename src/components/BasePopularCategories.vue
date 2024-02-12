<template>
  <div class="flex justify-center w-full my-8">
    <div class="max-w-screen-lg w-full flex flex-col gap-3 bg-white">
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-2xl">Popular Categories</h2>
        <my-button class="text-primary bg-transparent">View All</my-button>
      </div>
      <div class="grid grid-rows-2 grid-cols-6 gap-4">
        <BaseCategoryItem
          v-for="category in categories"
          :key="category.id"
          :image="category.image"
          :text="category.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCategoryItem from '@/components/BaseCategoryItem.vue'
import MyButton from '@/components/MyButton.vue'

const categories = [
  {
    id: 1,
    text: 'Fresh Fruit',
    image: 'category1'
  },
  {
    id: 2,
    text: 'Fresh Vegetables',
    image: 'category2'
  },
  {
    id: 3,
    text: 'Meat & Fish',
    image: 'category3'
  },
  {
    id: 4,
    text: 'Snacks',
    image: 'category4'
  },
  {
    id: 5,
    text: 'Beverages',
    image: 'category5'
  },
  {
    id: 6,
    text: 'Beauty & Health',
    image: 'category6'
  },
  {
    id: 7,
    text: 'Bread & Bakery',
    image: 'category7'
  },
  {
    id: 8,
    text: 'Baking Needs',
    image: 'category8'
  },
  {
    id: 9,
    text: 'Cooking',
    image: 'category9'
  },
  {
    id: 10,
    text: 'Diabetic Food',
    image: 'category10'
  },
  {
    id: 11,
    text: 'Dish Detergents',
    image: 'category11'
  },
  {
    id: 12,
    text: 'Oil',
    image: 'category12'
  }
]
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-full my-1 text-xs font-medium grid grid-cols-11 px-5 py-2 gap-y-2">
    <p class="col-span-2 line-clamp-1">#{{ id }}</p>
    <p class="col-span-2 line-clamp-1 break-all">{{ date }}</p>
    <p class="col-span-3 line-clamp-1 break-all">
      &#36;{{ total.toFixed(2) }} ({{ productsValue }} Products)
    </p>
    <p class="col-span-2">{{ status }}</p>
    <button
      class="px-0 col-span-2 py-0 text-primary font-semibold transition duration-300 hover:opacity-65"
    >
      View Details
    </button>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  date: String,
  total: Number,
  productsValue: Number,
  status: String
})
</script>

<style lang="scss" scoped></style>

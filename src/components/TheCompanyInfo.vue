<template>
  <div class="relative flex mt-4 justify-center w-full company">
    <img src="@/assets/company-info.png" class="w-full max-h-40 object-cover" alt="" />
    <div
      class="w-full absolute h-full gap-4 flex max-w-screen-lg items-center justify-center rounded-lg"
    >
      <div
        v-for="item in infoCompany"
        :key="item.id"
        class="after:bg-gray-8 cursor-pointer gap-1 max-h-32 after:rounded-md py-4 px-5 after:absolute relative after:opacity-40 hover:after:opacity-25 after:transition after:duration-500 after:top-0 after:left-0 after:right-0 after:bottom-0 flex flex-col items-center justify-center"
      >
        <h1 class="text-3xl text-primary">{{ item.title }}</h1>
        <p class="text-xs text-gray-0 text-center">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const infoCompany = [
  {
    id: 1,
    title: '37+',
    text: 'Years of Hard Work'
  },
  {
    id: 2,
    title: '500k+',
    text: 'Happy Customer'
  },
  {
    id: 3,
    title: '28',
    text: 'Qualified Team Member'
  },
  {
    id: 4,
    title: '750k+',
    text: 'Monthly Orders'
  }
]
</script>

<style lang="scss" scoped>
.company {
  background-color: #000a06;
}
</style>

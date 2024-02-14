<template>
  <div v-for="counter in counters" :key="counter.id" class="flex items-center gap-3">
    <div class="flex flex-col items-center">
      <h3 :class="color1" class="text-bold text-base text-gray-0">
        {{ numberConverter(counter.number) }}
      </h3>
      <p :class="color2" class="uppercase font-light text-gray-0 text-xs">{{ counter.time }}</p>
    </div>
    <span v-if="counter.id != 4" class="text-gray-0">:</span>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  counters: Array,
  color1: {
    type: String,
    default: null
  },
  color2: {
    type: String,
    default: null
  }
})

const timingOnCounter = () => {
  setInterval(() => {
    props.counters[0].number = new Date().getDate()
    props.counters[1].number = new Date().getHours()
    props.counters[2].number = new Date().getMinutes()
    props.counters[3].number = new Date().getSeconds()
  }, 1000)
}

onMounted(() => {
  timingOnCounter()
})

const numberConverter = (num) => {
  if (num.toString().length == 1) {
    return num.toFixed(1).split('.').reverse().join('').replace('.', '')
  } else {
    return num
  }
}
</script>

<style lang="scss" scoped></style>

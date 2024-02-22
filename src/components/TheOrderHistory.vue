<template>
  <div :="attrs" class="flex flex-col h-fit gap-3 rounded-md w-full border-2 border-gray-1">
    <div class="flex items-center justify-between px-6 pt-3">
      <h3 class="font-medium text-xl">{{ title }}</h3>
      <my-button v-if="compressed == true" class="text-primary bg-transparent py-0"
        >View All</my-button
      >
    </div>
    <div class="w-full h-fit">
      <div
        class="w-full grid grid-cols-11 px-5 py-2 bg-gray-0 text-sm uppercase text-gray-5 font-medium"
      >
        <p class="col-span-2">order id</p>
        <p class="col-span-2">date</p>
        <p class="col-span-3">total</p>
        <p class="col-span-4">status</p>
      </div>
      <div :class="heightOfBlock" class="flex flex-col pb-5 gap-1 overflow-y-auto order-history">
        <BaseOrderHistoryItem
          v-for="order in showOrders"
          :key="order.id"
          :id="order.orderId"
          :date="order.date"
          :total="order.total"
          :status="order.status"
          :products-value="order.productsValue"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseOrderHistoryItem from '@/components/BaseOrderHistoryItem.vue'
import { computed, ref, useAttrs } from 'vue'
import MyButton from '@/components/MyButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Order History'
  },
  heightOfBlock: {
    type: String,
    default: 'auto'
  },
  compressed: {
    type: Boolean,
    default: false
  }
})

const attrs = useAttrs()

const orders = ref([
  {
    id: 1,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 2,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 3,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 4,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 5,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 6,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 7,
    orderId: 738,
    date: '08.09.2020',
    total: 135,
    productsValue: 5,
    status: 'Proccessing'
  },
  {
    id: 8,
    orderId: 800,
    date: '14.09.2020',
    total: 125,
    productsValue: 3,
    status: 'on the way'
  },
  {
    id: 9,
    orderId: 796,
    date: '28.09.2020',
    total: 170,
    productsValue: 8,
    status: 'Completed'
  }
])

const compressOrders = computed(() => {
  orders.value.splice(5, orders.value.length - 5)
  return orders.value
})
const showOrders = computed(() => (props.compressed == true ? compressOrders.value : orders.value))
</script>

<style lang="scss" scoped></style>

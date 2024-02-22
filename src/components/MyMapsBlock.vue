<template>
  <div class="mt-12 w-full h-80 map-wrap relative">
    <div class="map absolute w-full h-full" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { Map, MapStyle, config } from '@maptiler/sdk'
import { ref, onMounted, onUnmounted, markRaw } from 'vue'
import '@maptiler/sdk/dist/maptiler-sdk.css'

const mapContainer = ref(null)
const map = ref(null)

onMounted(() => {
  config.apiKey = 'UcuBIeRTfwKiiJznJ1S3'

  const initialState = { lng: 37.6156, lat: 55.7522, zoom: 14 }

  map.value = markRaw(
    new Map({
      container: mapContainer.value,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    })
  )
}),
  onUnmounted(() => {
    map.value?.remove()
  })
</script>

<style lang="scss" scoped></style>

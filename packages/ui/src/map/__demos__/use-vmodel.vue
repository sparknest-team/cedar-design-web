<script setup lang="ts">
import { ref } from 'vue'
const location = ref({ longitude: 116.397, latitude: 39.908, address: '北京示例位置' })
</script>
<template>
  <c-space direction="column">
    <c-map v-model="location" map-type="amaps" style="height: 300px" />
    <p role="status">{{ location.address }}（{{ location.longitude }}, {{ location.latitude }}）</p>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const location = ref({ longitude: -0.1276, latitude: 51.5072, address: 'London sample location' })
</script>
<template>
  <c-space direction="column">
    <p>国际地图使用 is-international 和 map-type="google"。未配置 SDK 时保留降级展示，应用须自行接入适配器和地图服务；示例不保存密钥或 token。</p>
    <c-map v-model="location" map-type="google" is-international style="height: 300px" />
    <p role="status">{{ location.address }}</p>
  </c-space>
</template>

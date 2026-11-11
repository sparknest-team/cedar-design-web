<script setup lang="ts">
import { ref } from 'vue'
const location = ref({ longitude: 116.397, latitude: 39.908, address: '北京示例位置' })
function reset() { location.value = { longitude: 116.397, latitude: 39.908, address: '北京示例位置' } }
</script>
<template>
  <c-space direction="column">
    <p>未接入地图 SDK 时显示降级状态，不请求定位权限、不发送真实接口请求。按钮只演示本地位置模型。</p>
    <c-space wrap>
      <c-button @click="location = { longitude: 121.4737, latitude: 31.2304, address: '上海示例位置' }">使用上海示例位置</c-button>
      <c-button @click="reset">重置位置</c-button>
    </c-space>
    <p role="status">当前位置：{{ location.address }}（{{ location.longitude }}, {{ location.latitude }}）</p>
    <c-map v-model="location" map-type="amaps" style="height: 300px" />
  </c-space>
</template>

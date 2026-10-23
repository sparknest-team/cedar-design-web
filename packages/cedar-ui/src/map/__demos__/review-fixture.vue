<script setup lang="ts">
import { ref } from "vue";
const location = ref({
  longitude: 116.397,
  latitude: 39.908,
  address: "地图审查位置",
});
</script>
<template>
  <p>
    地图 SDK
    尚未接入时显示降级内容；此案例只验证组件属性与编辑外壳，真实地图交互需要 SDK
    环境。
  </p>
  <c-map v-model="location" map-type="amaps" style="height: 320px" />
</template>

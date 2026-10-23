<script setup lang="ts">
import { IconCheckCircleFill } from "@cedarjs/icons-vue";
</script>
<template>
  <div class="icon-demo-row">
    <div>
      <p>Resolver 自动按需导入</p>
      <c-icon size="40" color="red"><c-icon-check-circle-fill /></c-icon>
    </div>
    <div>
      <p>手动按需导入</p>
      <c-icon size="40" color="red"><IconCheckCircleFill /></c-icon>
    </div>
  </div>
</template>
<style scoped>
.icon-demo-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
}
p {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>

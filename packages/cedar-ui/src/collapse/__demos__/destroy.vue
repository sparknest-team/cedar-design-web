<template>
  <c-collapse :default-active-key="['1', 2]" destroy-on-hide>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :key="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3" :show-expand-icon="false">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>

<script lang="ts" setup>
</script>

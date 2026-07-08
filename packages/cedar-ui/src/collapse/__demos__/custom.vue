<template>
  <c-collapse :default-active-key="['1', 2]" :bordered="false">
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :style="customStyle" key="1">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :style="customStyle" :key="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :style="customStyle" key="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>

<script lang="ts" setup>
const customStyle = {
  borderRadius: '6px',
  marginBottom: '18px',
  border: 'none',
  overflow: 'hidden',
}
</script>

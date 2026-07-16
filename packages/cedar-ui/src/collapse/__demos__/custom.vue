<template>
  <c-collapse :default-active-names="['1', 2]" :bordered="false">
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :style="customStyle" name="1">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :style="customStyle" :name="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :style="customStyle" name="3">
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

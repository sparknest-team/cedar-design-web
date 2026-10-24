<template>
  <c-collapse :default-value="['1', 2]">
    <template #expand-icon="{ expanded }">
      <span>{{ expanded ? '▼' : '▶' }}</span>
    </template>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
      <template #expand-icon="{ expanded }">
        <span>{{ expanded ? '^^' : 'vv' }}</span>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>
<script lang="ts" setup>
</script>

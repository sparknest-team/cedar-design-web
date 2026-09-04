<script setup lang="ts">
const inheritedColorItems = [{ label: '文档', value: 20 }, { label: '测试', value: 35 }]
const trackOnlyItems = [{ value: 16 }, { value: 22, color: '#722ed1' }, { value: 28, color: '#0fc6c2' }]
</script>

<template>
  <div style="display: grid; gap: 24px; max-width: 520px">
    <c-progress-group :items="inheritedColorItems" color="#ff7d00" status />
    <c-progress-group :items="trackOnlyItems" size="lg" />
  </div>
</template>

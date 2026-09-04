<script setup lang="ts">
const items = [
  { label: '设计稿', value: 18, color: '#165dff', tip: '设计稿占用 18 GB' },
  { label: '组件', value: 36, color: '#722ed1' },
  { label: '测试', value: 20, color: '#0fc6c2' },
]
</script>

<template>
  <c-progress-group :items="items" status style="max-width: 520px">
    <template #status="{ value, max }">已使用 {{ value }} / {{ max }} GB</template>
    <template #item-trailing="{ item }">{{ item.value }} GB</template>
    <template #tooltip="{ item, percent }">{{ item.label }} · {{ item.value }} GB · {{ Math.round(percent) }}%</template>
  </c-progress-group>
</template>

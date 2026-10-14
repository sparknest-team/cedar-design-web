<script setup>
const items = [{ label: 'A', value: 70 }, { label: 'B', value: 50, color: '#722ed1' }, { label: 'C', value: 10, color: '#0fc6c2' }]
</script>
<template>
  <div style="display: grid; gap: 24px">
    <c-progress-group :items="items" show-text aria-label="Capacity" />
    <c-progress-group mode="circle" :items="items" show-text aria-label="Capacity" />
  </div>
</template>


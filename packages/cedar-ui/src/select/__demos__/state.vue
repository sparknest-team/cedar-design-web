<template>
  <c-space direction="column" :size="16">
    <c-select default-value="shanghai" :options="options" disabled />
    <c-select default-value="shanghai" :options="options" readonly />
  </c-space>
</template>

<script setup lang="ts">
const options = [
  { label: '上海', value: 'shanghai' },
  { label: '北京', value: 'beijing' },
]
</script>

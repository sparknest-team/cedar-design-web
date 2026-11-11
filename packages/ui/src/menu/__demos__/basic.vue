<template>
  <c-menu :options="options">
    <c-button variant="tonal" :elevation="false" aria-label="更多操作"><template #icon><c-icon-more /></template></c-button>
  </c-menu>
</template>

<script setup lang="ts">
const options = [
  { label: '编辑', value: 'edit' },
  { label: '复制', value: 'copy' },
  { type: 'divider' },
  { label: '删除', value: 'delete' },
]
</script>

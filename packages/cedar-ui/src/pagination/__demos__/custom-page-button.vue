<template>
  <c-pagination :total="200">
    <template #page-item="{ page }"> - {{ page }} - </template>
    <template #page-item-step="{ type }">
      <c-icon-send :style="type === 'previous' ? { transform: `rotate(180deg)` } : undefined" />
    </template>
    <template #page-item-ellipsis>
      <c-icon-sun-fill />
    </template>
  </c-pagination>
</template>
<script lang="ts">
</script>

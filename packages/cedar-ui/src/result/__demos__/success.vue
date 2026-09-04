<template>
  <c-result status="success" title="This is title content">
    <template #subtitle> This is subtitle content </template>
    <template #extra>
      <c-space>
        <c-button status="primary">Back</c-button>
      </c-space>
    </template>
  </c-result>
</template>

<script lang="ts" setup>
</script>

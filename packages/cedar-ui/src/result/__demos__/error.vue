<template>
  <c-result status="danger" title="This is title content">
    <template #subtitle> This is subtitle content </template>

    <template #extra>
      <c-space>
        <c-button type="primary">Back</c-button>
      </c-space>
    </template>
  </c-result>
</template>

<script lang="ts" setup>
</script>

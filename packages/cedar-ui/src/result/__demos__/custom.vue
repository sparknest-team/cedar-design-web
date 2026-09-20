<template>
  <c-result title="This is title content" subtitle="This is subtitle content">
    <template #icon>
      <c-icon-face-smile-fill />
    </template>
    <template #extra>
      <c-space>
        <c-button status="secondary">Again</c-button>
        <c-button status="primary">Back</c-button>
      </c-space>
    </template>
  </c-result>
</template>

<script lang="ts" setup>
</script>

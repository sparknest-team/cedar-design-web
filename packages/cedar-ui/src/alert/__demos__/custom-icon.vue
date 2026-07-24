<template>
  <c-space direction="column" size="lg" style="width: 100%">
    <c-alert>
      <template #icon>
        <c-icon-face-smile-fill />
      </template>
      This is an alert with a custom icon.
    </c-alert>
    <c-alert type="default">
      <template #icon>
        <c-icon-exclamation-circle-fill />
      </template>
      Default type can still show a custom icon via slot.
    </c-alert>
  </c-space>
</template>

<script lang="ts" setup>
</script>

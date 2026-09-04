<template>
  <c-space direction="column" size="lg" style="width: 100%">
    <c-alert closable>
      This is an info alert.
      <template #action>
        <c-button size="sm" status="primary">Detail</c-button>
      </template>
    </c-alert>
    <c-alert title="Example" closable>
      This is an info alert.
      <template #action>
        <c-button size="sm" status="primary">Detail</c-button>
      </template>
    </c-alert>
  </c-space>
</template>

<script lang="ts" setup>
</script>

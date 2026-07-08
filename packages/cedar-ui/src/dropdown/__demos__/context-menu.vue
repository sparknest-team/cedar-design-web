<template>
  <c-dropdown trigger="contextMenu" alignPoint :style="{ display: 'block' }">
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        backgroundColor: 'var(--color-fill-2)',
      }"
    >
      <div>Click Me</div>
    </div>
    <template #content>
      <c-doption>Option 1</c-doption>
      <c-doption>Option 2</c-doption>
      <c-doption>Option 3</c-doption>
    </template>
  </c-dropdown>
</template>

<script lang="ts" setup>
</script>

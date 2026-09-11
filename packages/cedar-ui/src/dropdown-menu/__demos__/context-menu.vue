<template>
  <c-dropdown-menu trigger="contextMenu" alignPoint :style="{ display: 'block' }">
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
      <c-menu-option>Option 1</c-menu-option>
      <c-menu-option>Option 2</c-menu-option>
      <c-menu-option>Option 3</c-menu-option>
    </template>
  </c-dropdown-menu>
</template>

<script lang="ts" setup>
</script>

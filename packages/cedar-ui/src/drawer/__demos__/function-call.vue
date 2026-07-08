<template>
  <c-button type="primary" @click="handleClick">Open Drawer</c-button>
</template>

<script lang="ts" setup>
const handleClick = () => {
  Drawer.open({
    title: 'Info Title',
    content: 'This is an info message',
    width: 340,
  })
}
</script>

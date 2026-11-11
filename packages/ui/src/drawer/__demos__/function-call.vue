<template>
  <c-button status="primary" @click="handleClick">Open Drawer</c-button>
</template>

<script lang="ts" setup>
import { Drawer } from '@cedar-design/ui-vue'

const handleClick = () => {
  Drawer.open({
    title: 'Info Title',
    content: 'This is an info message',
    width: 340,
  })
}
</script>

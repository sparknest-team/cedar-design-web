<template>
  <c-space direction="column">
    <c-rate color="red" />
    <c-rate :color="color" />
  </c-space>
</template>

<script lang="ts" setup>
const color = {
  2: 'red',
  4: 'green',
  5: 'blue',
}
</script>

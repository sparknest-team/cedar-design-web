<template>
  <c-count-to :to="123456" :timing-function="easeOutCubic" />
</template>

<script lang="ts" setup>
const easeOutCubic = (v: number) => 1 - Math.pow(1 - v, 3)
</script>

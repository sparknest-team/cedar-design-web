<template>
  <div :style="{ width: '50%' }">
    <c-progress :steps="3" :percent="30" />
    <c-progress :steps="5" status="warning" :percent="100" />
    <c-progress :steps="3" size="sm" :percent="30" />
  </div>
</template>
<script lang="ts" setup>
</script>

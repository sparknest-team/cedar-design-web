<template>
  <div :style="{ width: '50%' }">
    <c-progress :steps="3" :percent="0.3" />
    <c-progress :steps="5" type="warning" :percent="1" />
    <c-progress :steps="3" size="sm" :percent="0.3" />
  </div>
</template>
<script lang="ts" setup>
</script>

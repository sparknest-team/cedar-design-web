<template>
  <div class="container">
    <div class="flex justify-center align-center gap-4 shadow-large">
      <div class="demo-box"></div>
      <div class="demo-box"></div>
      <div class="demo-box"></div>
    </div>
    <div class="flex justify-center align-center gap-4 shadow-large">
      <div class="demo-box"></div>
      <div class="demo-box flex-1"></div>
      <div class="demo-box"></div>
    </div>
    <div class="flex justify-space-between align-center gap-4 shadow-large">
      <div class="demo-box"></div>
      <div class="demo-box"></div>
      <div class="demo-box"></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.demo-box {
  width: 150px;
  height: 150px;
  box-shadow: var(--shadow-medium);
}
</style>

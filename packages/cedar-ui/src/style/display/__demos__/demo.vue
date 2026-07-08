<template>
  <div class="container">
    <div>
      hidden
      <div class="hidden demo-box"></div>
    </div>
    <div>
      inline
      <div class="inline demo-box"></div>
    </div>
    <div>
      inline-block
      <div class="inline-block demo-box"></div>
    </div>
    <div>
      block
      <div class="block demo-box"></div>
    </div>
    <div>
      flex
      <div class="flex demo-box"></div>
    </div>
    <div>
      inline-flex
      <div class="inline-flex demo-box"></div>
    </div>
    <div>
      grid
      <div class="grid demo-box"></div>
    </div>
    <div>
      inline-grid
      <div class="inline-grid demo-box"></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container > div {
  padding: 24px;
}

.demo-box {
  width: 150px;
  height: 150px;
  box-shadow: var(--shadow-medium);
}
</style>

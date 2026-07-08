<template>
  <c-space size="lg" wrap>
    <div class="rounded-none demo-border-radius">rounded-none</div>
    <div class="rounded-xs demo-border-radius">rounded-xs</div>
    <div class="rounded-sm demo-border-radius">rounded-sm</div>
    <div class="rounded-md demo-border-radius">rounded-md</div>
    <div class="rounded-lg demo-border-radius">rounded-lg</div>
    <div class="rounded-pill demo-border-radius" style="width: 80px">rounded-pill</div>
    <div class="rounded-pill demo-border-radius" style="height: 80px">rounded-pill</div>
    <div class="circle demo-border-radius">circle</div>
  </c-space>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.demo-border-radius {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--brand-6));
  color: #fff;
}
</style>

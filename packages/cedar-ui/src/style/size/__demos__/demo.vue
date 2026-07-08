<template>
  <div class="container-h">
    <div :class="['demo-box', 'w-auto', 'h-auto', 'shadow-medium']">w-auto、h-auto</div>
  </div>
  <div class="container-h">
    <div :class="['demo-box', 'w-unset', 'h-unset', 'shadow-medium']">w-unset、h-unset</div>
  </div>
  <div v-for="item in [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]" :key="item" class="container-h">
    <div :class="['demo-box', 'w-' + item, 'h-' + item, 'shadow-medium']">{{ 'w-' + item }}、{{ 'h-' + item }}</div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.container-h {
  height: 100px;
}
</style>

<template>
  <div class="container relative shadow-large">
    <div class="demo-box sticky">sticky</div>
    <div class="demo-box static">static</div>
    <div class="demo-box relative">relative</div>
    <div class="demo-box absolute">absolute</div>
    <div class="demo-box absolute position-x-center">
      sticky <br />
      x-center
    </div>
    <div class="demo-box absolute position-y-center">
      sticky <br />
      y-center
    </div>
    <div class="demo-box absolute position-center">
      sticky <br />
      center
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container {
  height: 1200px;
}
.demo-box {
  width: 150px;
  height: 150px;
  box-shadow: var(--shadow-medium);
  top: 150px;
  left: 150px;
}
</style>

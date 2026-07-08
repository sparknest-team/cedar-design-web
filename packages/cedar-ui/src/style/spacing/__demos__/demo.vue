<template>
  <div class="container shadow-large relative">
    <c-divider margin="0"></c-divider>
    <div class="demo-box mx-16 bg-primary">
      <div class="content">mx-16</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box m-16 bg-primary">
      <div class="content">m-16</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box my-16 bg-primary">
      <div class="content">my-16</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box m-auto bg-primary">
      <div class="content">m-auto</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box p-16 bg-primary">
      <div class="content">p-16</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box px-16 my-24 bg-primary">
      <div class="content">px-16 my-24</div>
    </div>
    <c-divider margin="0"></c-divider>
    <div class="demo-box py-16 bg-primary">
      <div class="content">py-16</div>
    </div>
    <c-divider margin="0"></c-divider>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.container {
  width: 500px;
}

.demo-box {
  width: 100px;
  height: 80px;
  box-shadow: var(--shadow-medium);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .content {
    width: 100%;
    height: 100%;
    background-color: #d2ecf6; /* padding 区域的背景色 */
  }
}
</style>

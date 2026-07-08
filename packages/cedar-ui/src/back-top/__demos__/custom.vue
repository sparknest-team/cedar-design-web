<template>
  <div class="wrapper">
    <ul id="custom-demo">
      <li v-for="(_, index) of Array(40)" :key="index">This is the content</li>
    </ul>
    <c-back-top target-container="#custom-demo" :style="{ position: 'absolute' }">
      <c-button>UP</c-button>
    </c-back-top>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;

  ul {
    height: 200px;
    overflow-y: auto;

    li {
      line-height: 30px;
    }
  }
}
</style>

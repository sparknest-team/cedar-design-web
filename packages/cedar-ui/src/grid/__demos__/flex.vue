<template>
  <div>
    <c-row class="grid-demo" style="margin-bottom: 16px">
      <c-col flex="100px">
        <div>100px</div>
      </c-col>
      <c-col flex="auto">
        <div>auto</div>
      </c-col>
    </c-row>
    <c-row class="grid-demo" style="margin-bottom: 16px">
      <c-col flex="100px">
        <div>100px</div>
      </c-col>
      <c-col flex="auto">
        <div>auto</div>
      </c-col>
      <c-col flex="100px">
        <div>100px</div>
      </c-col>
    </c-row>
    <c-row class="grid-demo" style="margin-bottom: 16px">
      <c-col :flex="3">
        <div>3 / 12</div>
      </c-col>
      <c-col :flex="4">
        <div>4 / 12</div>
      </c-col>
      <c-col :flex="5">
        <div>5 / 12</div>
      </c-col>
    </c-row>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.grid-demo .c-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo .c-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}

.grid-demo .c-col:nth-child(2n) {
  background-color: rgba(var(--brand-6), 0.9);
}
</style>

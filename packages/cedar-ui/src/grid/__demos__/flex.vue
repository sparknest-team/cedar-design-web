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
:deep(.grid-demo .c-col) {
  height: 48px;
  line-height: 48px;
  color: var(--c-color-text-1);
  border: 1px solid var(--c-color-border-2);
  box-sizing: border-box;
  text-align: center;
}

:deep(.grid-demo .c-col:nth-child(2n + 1)) {
  background-color: var(--c-color-fill-2);
}

:deep(.grid-demo .c-col:nth-child(2n)) {
  background-color: var(--c-color-fill-3);
}
</style>

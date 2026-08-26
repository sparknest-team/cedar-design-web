<template>
  <div>
    <c-row class="grid-demo">
      <c-col :span="6" :order="4">
        <div>1 col-order-4</div>
      </c-col>
      <c-col :span="6" :order="3">
        <div>2 col-order-3</div>
      </c-col>
      <c-col :span="6" :order="2">
        <div>3 col-order-2</div>
      </c-col>
      <c-col :span="6" :order="1">
        <div>4 col-order-1</div>
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

:deep(.grid-demo .c-col:nth-child(2n)) {
  background-color: var(--c-color-fill-3);
}

:deep(.grid-demo .c-col:nth-child(2n + 1)) {
  background-color: var(--c-color-fill-2);
}
</style>

<template>
  <div>
    <c-row class="grid-demo">
      <c-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </c-col>
      <c-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </c-col>
      <c-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"> Col </c-col>
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

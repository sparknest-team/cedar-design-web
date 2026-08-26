<template>
  <c-row class="grid-demo">
    <c-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8"> Col </c-col>
    <c-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" :xxl="8"> Col </c-col>
    <c-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8"> Col </c-col>
  </c-row>
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

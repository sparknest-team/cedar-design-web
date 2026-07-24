<template>
  <div>
    <c-row class="grid-demo" style="marginbottom: 16px; backgroundcolor: var(--color-fill-2)">
      <c-col :span="8">col - 8</c-col>
      <c-col :span="8" :offset="8"> col - 8 | offset - 8 </c-col>
    </c-row>
    <c-row class="grid-demo" style="marginbottom: 16px; backgroundcolor: var(--color-fill-2)">
      <c-col :span="6" :offset="8"> col - 6 | offset - 8 </c-col>
      <c-col :span="6" :offset="4"> col - 6 | offset - 4 </c-col>
    </c-row>
    <c-row class="grid-demo" style="backgroundcolor: var(--color-fill-2)">
      <c-col :span="12" :offset="8"> col - 12 | offset - 8 </c-col>
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

.grid-demo .c-col:nth-child(2n) {
  background-color: rgba(var(--brand-6), 0.9);
}

.grid-demo .c-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>

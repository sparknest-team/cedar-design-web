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
.grid-demo .cedar-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo .cedar-col:nth-child(2n) {
  background-color: rgba(var(--brand-6), 0.9);
}

.grid-demo .cedar-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>

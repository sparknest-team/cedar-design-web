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

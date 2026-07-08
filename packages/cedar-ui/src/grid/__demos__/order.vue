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

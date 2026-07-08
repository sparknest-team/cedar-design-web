<template>
  <div>
    <p>Horizontal</p>
    <c-row class="grid-demo" :gutter="24">
      <c-col :span="12">
        <div>col - 12</div>
      </c-col>
      <c-col :span="12">
        <div>col - 12</div>
      </c-col>
    </c-row>
    <p>Responsive</p>
    <c-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
    </c-row>
    <p>Horizontal and Vertical</p>
    <c-row class="grid-demo" :gutter="[24, 12]">
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
      <c-col :span="6">
        <div>col - 6</div>
      </c-col>
    </c-row>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.grid-demo .cedar-col {
  height: 48px;
  color: var(--color-white);
}

.grid-demo .cedar-col > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.grid-demo .cedar-col:nth-child(2n) > div {
  background-color: rgba(var(--brand-6), 0.9);
}

.grid-demo .cedar-col:nth-child(2n + 1) > div {
  background-color: var(--color-primary-light-4);
}
</style>

<template>
  <div>
    <p>Arrange left</p>
    <c-row class="grid-demo" justify="start">
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
    </c-row>
    <p>Arrange center</p>
    <c-row class="grid-demo" justify="center">
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
    </c-row>
    <p>Arrange right</p>
    <c-row class="grid-demo" justify="end">
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
    </c-row>
    <p>Space around</p>
    <c-row class="grid-demo" justify="space-around">
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
    </c-row>
    <p>Space between</p>
    <c-row class="grid-demo" justify="space-between">
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
      <c-col :span="4">
        <div>col - 4</div>
      </c-col>
    </c-row>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.grid-demo {
  background-color: var(--fill-0);
  margin-bottom: 40px;
}

.grid-demo:last-child {
  margin-bottom: 0px;
}

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

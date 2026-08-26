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
  background-color: var(--c-color-bg-white);
  margin-bottom: 40px;
}

.grid-demo:last-child {
  margin-bottom: 0px;
}

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

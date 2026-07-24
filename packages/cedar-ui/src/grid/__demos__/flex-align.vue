<template>
  <div>
    <p>Arrange top</p>
    <c-row class="grid-demo" align="start">
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
    <p>Arrange center</p>
    <c-row class="grid-demo" align="center">
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
    <p>Arrange bottom</p>
    <c-row class="grid-demo" align="end">
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
.grid-demo {
  background-color: var(--fill-0);
  margin-bottom: 40px;
}

.grid-demo:last-child {
  margin-bottom: 0px;
}

.grid-demo .c-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo .c-col:nth-of-type(1) {
  height: 90px;
  line-height: 90px;
}

.grid-demo .c-col:nth-of-type(2) {
  height: 48px;
  line-height: 48px;
}

.grid-demo .c-col:nth-of-type(3) {
  height: 120px;
  line-height: 120px;
}

.grid-demo .c-col:nth-of-type(4) {
  height: 60px;
  line-height: 60px;
}

.grid-demo .c-col:nth-child(2n) {
  background-color: rgba(var(--brand-6), 0.9);
}

.grid-demo .c-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>

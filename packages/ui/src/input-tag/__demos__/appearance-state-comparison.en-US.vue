<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const size = ref("md");
    return { size };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size"
    >
      <h4>size</h4>
      <c-space direction="column" size="lg">
        <c-radio-group type="button" v-model="scene1.size">
          <c-radio value="xs">xs</c-radio>
          <c-radio value="sm">sm</c-radio>
          <c-radio value="md">md</c-radio>
          <c-radio value="lg">lg</c-radio>
          <c-radio value="xl">xl</c-radio>
        </c-radio-group>
        <c-input-tag
          :default-value="['one']"
          placeholder="Please enter something"
          :size="scene1.size"
          clearable
        />
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="status"
    >
      <h4>status</h4>
      <c-space direction="column" size="lg">
        <c-input-tag
          :default-value="['test']"
          placeholder="Please Enter"
          disabled
        />
        <c-input-tag
          :default-value="['test']"
          placeholder="Please Enter"
          readonly
        />
        <c-input-tag
          :default-value="['test']"
          placeholder="Please Enter"
          error
        />
      </c-space>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>

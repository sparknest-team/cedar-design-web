<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene2 = demoProxyRefs(
  (() => {
    const value1 = ref(["Plain 1"]);

    const plainOptions = ["Plain 1", "Plain 2", "Plain 3"];

    const value2 = ref(["1"]);

    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3", disabled: true },
    ];
    return { value1, plainOptions, value2, options };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="checkbox-group"
    >
      <h4>checkbox group</h4>
      <c-space direction="column" size="lg">
        <c-checkbox-group :default-value="['1']">
          <c-checkbox value="1">Option 1</c-checkbox>
          <c-checkbox value="2">Option 2</c-checkbox>
          <c-checkbox value="3">Option 3</c-checkbox>
        </c-checkbox-group>
        <c-checkbox-group orientation="vertical">
          <c-checkbox value="1">Option 1</c-checkbox>
          <c-checkbox value="2">Option 2</c-checkbox>
          <c-checkbox value="3">Option 3</c-checkbox>
        </c-checkbox-group>
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="checkbox-group-options"
    >
      <h4>checkbox group options</h4>
      <c-space direction="column" size="lg">
        <c-checkbox-group
          v-model="scene2.value1"
          :options="scene2.plainOptions"
        >
        </c-checkbox-group>
        <c-checkbox-group v-model="scene2.value2" :options="scene2.options">
        </c-checkbox-group>
        <c-checkbox-group v-model="scene2.value2" :options="scene2.options">
          <template #label="{ data }">
            <c-tag>{{ data.label }}</c-tag>
          </template>
        </c-checkbox-group>
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

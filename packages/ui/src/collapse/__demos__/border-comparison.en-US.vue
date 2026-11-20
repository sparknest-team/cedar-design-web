<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene2 = demoProxyRefs(
  (() => {
    const divider = ref(true);
    return { divider };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="border-less"
    >
      <h4>border less</h4>
      <c-collapse :default-value="['1']" :bordered="false">
        <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
        <c-collapse-item
          title="Beijing Toutiao Technology Co., Ltd."
          name="2"
          disabled
        >
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
        <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
      </c-collapse>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="divider"
    >
      <h4>divider</h4>
      <c-space
        direction="column"
        :style="{
          width: '100%',
        }"
      >
        <c-button @click="scene2.divider = !scene2.divider">
          {{ scene2.divider ? "Hide divider" : "Show divider" }}
        </c-button>
        <c-collapse :default-value="[]" :divider="scene2.divider">
          <c-collapse-item
            title="Beijing Toutiao Technology Co., Ltd."
            name="1"
          >
            <div>Beijing Toutiao Technology Co., Ltd.</div>
          </c-collapse-item>
          <c-collapse-item
            title="Beijing Toutiao Technology Co., Ltd."
            name="2"
          >
            <div>Beijing Toutiao Technology Co., Ltd.</div>
          </c-collapse-item>
          <c-collapse-item
            title="Beijing Toutiao Technology Co., Ltd."
            name="3"
          >
            <div>Beijing Toutiao Technology Co., Ltd.</div>
          </c-collapse-item>
        </c-collapse>
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

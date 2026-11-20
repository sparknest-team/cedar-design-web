<script setup lang="ts">
import { proxyRefs as demoProxyRefs } from "vue";

const scene3 = demoProxyRefs(
  (() => {
    const easeOutCubic = (v: number) => 1 - Math.pow(1 - v, 3);
    return { easeOutCubic };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="precision"
    >
      <h4>精度</h4>
      <c-count-to :to="123456" :precision="2" />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="duration"
    >
      <h4>自定义时长</h4>
      <c-count-to :to="123456" :duration="10000" />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="timing-function"
    >
      <h4>自定义动画曲线</h4>
      <c-count-to :to="123456" :timing-function="scene3.easeOutCubic" />
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

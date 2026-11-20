<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const value = ref("09:30");

    const valueSeconds = ref("09:30:20");

    const literalValue = ref("Time 09:30");
    return { value, valueSeconds, literalValue };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const value = ref("12:00:00 am");

    const noon = ref("12:00:00 pm");
    return { value, noon };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="format"
    >
      <h4>显示格式</h4>
      <c-space direction="column" fill>
        <c-time
          v-model="scene1.value"
          format="HH:mm"
          style="width: 100%; max-width: 320px"
        />
        <c-time
          v-model="scene1.valueSeconds"
          format="HH:mm:ss"
          style="width: 100%; max-width: 320px"
        />
        <c-time
          v-model="scene1.literalValue"
          format="[Time] HH:mm"
          style="width: 100%; max-width: 320px"
        />
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="ampm"
    >
      <h4>十二小时制</h4>
      <c-space direction="column" :size="12" style="width: 100%">
        <p>12 AM 是午夜，12 PM 是中午。字段与面板联动展示。</p>
        <c-time
          v-model="scene2.value"
          use12-hours
          style="width: 100%; max-width: 360px"
        />
        <c-time
          v-model="scene2.noon"
          use12-hours
          style="width: 100%; max-width: 360px"
        />
        <c-time-picker v-model="scene2.noon" use12-hours />
        <span>当前值: {{ scene2.value }}</span>
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

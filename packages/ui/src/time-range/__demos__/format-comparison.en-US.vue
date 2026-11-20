<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const range = ref(["09:30", "18:00"]);

    const literalRange = ref(["Time 09:30", "Time 18:00"]);

    const rangeSeconds = ref(["09:30:20", "18:00:00"]);
    return { range, literalRange, rangeSeconds };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const value = ref(["11:30:00 pm", "12:30:00 am"]);
    return { value };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="format"
    >
      <h4>format</h4>
      <c-space direction="column" fill>
        <c-time-range
          v-model="scene1.range"
          format="HH:mm"
          style="width: 100%; max-width: 360px"
          clearable
        />
        <c-time-range
          v-model="scene1.literalRange"
          format="[Time] HH:mm"
          style="width: 100%; max-width: 360px"
          clearable
        />
        <c-time-range
          v-model="scene1.rangeSeconds"
          format="HH:mm:ss"
          style="width: 100%; max-width: 360px"
          clearable
        />
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="ampm"
    >
      <h4>ampm</h4>
      <c-space direction="column" :size="12" style="width: 100%">
        <p>分别切换起止端的 AM/PM；12 AM 是午夜，12 PM 是中午。</p>
        <c-time-range
          v-model="scene2.value"
          use12-hours
          show-next-day
          style="width: 100%; max-width: 360px"
        />

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

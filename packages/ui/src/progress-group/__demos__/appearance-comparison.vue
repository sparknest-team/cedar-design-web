<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("progressGroupAppearanceComparison");
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const items = [
      { value: 24 },
      { value: 18, color: "#722ed1" },
      { value: 30, color: "#0fc6c2" },
    ];

    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    return { items, sizes };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const inheritedColorItems = [
      { label: "文档", value: 20 },
      { label: "测试", value: 35 },
    ];

    const trackOnlyItems = [
      { value: 16 },
      { value: 22, color: "#722ed1" },
      { value: 28, color: "#0fc6c2" },
    ];
    return { inheritedColorItems, trackOnlyItems };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="sizes"
    >
      <h4>{{ demoCopy.sizes }}</h4>
      <c-space direction="column" size="16px" style="max-width: 520px">
        <div
          v-for="size in scene1.sizes"
          :key="size"
          style="
            display: grid;
            grid-template-columns: 24px 1fr;
            align-items: center;
            gap: 12px;
          "
        >
          <span>{{ size }}</span>
          <c-progress-group :items="scene1.items" :size="size" />
        </div>
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="color"
    >
      <h4>{{ demoCopy.color }}</h4>
      <c-space direction="column" size="24px" style="max-width: 520px">
        <c-progress-group
          :items="scene2.inheritedColorItems"
          color="#ff7d00"
          show-text
        />
        <c-progress-group :items="scene2.trackOnlyItems" size="lg" />
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

<script setup lang="ts">
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const numericSizes = [24, 32, 40, 48, 64] as const;

    const labels = { 24: "A", 32: "B", 40: "C", 48: "D", 64: "E" } as const;

    const imageSizes = [28, 36, 48, 64, 78] as const;

    const cssSizes = ["3rem", "2.5em", "48px"] as const;
    return { numericSizes, labels, imageSizes, cssSizes };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size"
    >
      <h4>尺寸</h4>
      <c-space direction="column" :size="20">
        <c-space align="flex-end" :size="16" wrap>
          <c-space
            v-for="size in scene1.numericSizes"
            :key="size"
            direction="column"
            align="center"
            :size="8"
          >
            <c-avatar :size="size">{{ scene1.labels[size] }}</c-avatar>
            <span class="label">{{ size }}px</span>
          </c-space>
        </c-space>

        <c-space align="flex-end" :size="16" wrap>
          <c-space
            v-for="size in scene1.imageSizes"
            :key="size"
            direction="column"
            align="center"
            :size="8"
          >
            <c-avatar image-url="/cat.jpg" :alt="`${size}px`" :size="size" />
            <span class="label">{{ size }}px</span>
          </c-space>
        </c-space>

        <c-space align="flex-end" :size="16" wrap>
          <c-space
            v-for="size in scene1.cssSizes"
            :key="size"
            direction="column"
            align="center"
            :size="8"
          >
            <c-avatar :size="size">Aa</c-avatar>
            <span class="label">{{ size }}</span>
          </c-space>
        </c-space>
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="shape"
    >
      <h4>形状</h4>
      <c-space align="flex-end" :size="16" wrap>
        <c-space direction="column" align="center" :size="8">
          <c-avatar>圆</c-avatar>
          <span class="label">circle</span>
        </c-space>
        <c-space direction="column" align="center" :size="8">
          <c-avatar shape="square">方</c-avatar>
          <span class="label">square</span>
        </c-space>
        <c-space direction="column" align="center" :size="8">
          <c-avatar image-url="/cat.jpg" alt="圆形图片" />
          <span class="label">circle · 图片</span>
        </c-space>
        <c-space direction="column" align="center" :size="8">
          <c-avatar image-url="/cat.jpg" alt="方形图片" shape="square" />
          <span class="label">square · 图片</span>
        </c-space>
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

.demo-comparison-case--1 {
  .label {
    color: var(--c-color-text-3);
    font-size: var(--c-font-size-sm);
  }
}
.demo-comparison-case--2 {
  .label {
    color: var(--c-color-text-3);
    font-size: var(--c-font-size-sm);
  }
}
</style>

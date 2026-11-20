<script setup lang="ts">
import { ref, type ComponentPublicInstance } from "vue";
const asHTMLElement = (
  element: Element | ComponentPublicInstance | null,
): HTMLElement | undefined =>
  element instanceof HTMLElement ? element : undefined;
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const containerRef = ref<HTMLElement>();
    return { containerRef };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const containerRef = ref<HTMLElement>();
    return { containerRef };
  })(),
);

const scene3 = demoProxyRefs(
  (() => {
    const containerRef = ref<HTMLElement>();
    return { containerRef };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="top"
    >
      <h4>Top offset</h4>
      <p>Scroll inside the bordered area.</p>
      <div
        :ref="(element) => (scene1.containerRef = asHTMLElement(element))"
        class="scroller"
      >
        <div class="scroll-content">
          <c-affix :target="scene1.containerRef" :offset-top="80"
            ><c-button status="primary">Top offset</c-button></c-affix
          >
        </div>
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="bottom"
    >
      <h4>Bottom offset</h4>
      <p>Scroll inside the bordered area.</p>
      <div
        :ref="(element) => (scene2.containerRef = asHTMLElement(element))"
        class="scroller"
      >
        <div class="scroll-content">
          <div style="height: 240px"></div>
          <c-affix :target="scene2.containerRef" :offset-bottom="20"
            ><c-button status="primary">Bottom offset</c-button></c-affix
          >
        </div>
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="container"
    >
      <h4>Scroll container</h4>
      <p>Scroll inside the bordered area.</p>
      <div
        :ref="(element) => (scene3.containerRef = asHTMLElement(element))"
        class="scroller"
      >
        <div class="scroll-content">
          <div style="height: 40px"></div>
          <c-affix :target="scene3.containerRef" :offset-top="20"
            ><c-button status="primary">Scroll container</c-button></c-affix
          >
        </div>
      </div>
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
  .scroller {
    height: 200px;
    overflow: auto;
    border: 1px solid currentColor;
  }
  .scroll-content {
    min-height: 600px;
    padding: 16px;
  }
}
.demo-comparison-case--2 {
  .scroller {
    height: 200px;
    overflow: auto;
    border: 1px solid currentColor;
  }
  .scroll-content {
    min-height: 600px;
    padding: 16px;
  }
}
.demo-comparison-case--3 {
  .scroller {
    height: 200px;
    overflow: auto;
    border: 1px solid currentColor;
  }
  .scroll-content {
    min-height: 600px;
    padding: 16px;
  }
}
</style>

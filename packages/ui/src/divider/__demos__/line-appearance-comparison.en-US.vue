<script setup lang="ts">

import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const presets = ["xs", "sm", "md", "lg", "xl"];
    return { presets };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size-inset"
    >
      <h4>Spacing &amp;amp; Inset</h4>
      <div>
        <div v-for="size in scene1.presets" :key="size">
          <code>inset="{{ size }}" spacing="{{ size }}"</code>
          <c-divider :inset="size" :spacing="size" />
        </div>
        <p>Number · inset=24, spacing=16</p>
        <c-divider :inset="24" :spacing="16" />
        <p>CSS length · inset=2rem</p>
        <c-divider inset="2rem" />
        <p>Asymmetric · inset=[8, 32], spacing=[12, 24]</p>
        <c-divider :inset="[8, 32]" :spacing="[12, 24]" />
        <p>Vertical · inset=[8, 24], spacing=[12, 20]</p>
        <div class="vertical-preview">
          <span>Before</span>
          <c-divider
            orientation="vertical"
            :inset="[8, 24]"
            :spacing="[12, 20]"
          />
          <span>After</span>
        </div>
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="line-type"
    >
      <h4>Line Style</h4>
      <div>
        <p>solid</p>
        <c-divider />
        <p>dashed</p>
        <c-divider type="dashed" />
        <p>dotted</p>
        <c-divider type="dotted" />
        <p>double · 3px</p>
        <c-divider type="double" :thickness="3" />
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="opacity-color"
    >
      <h4>Color, Thickness &amp;amp; Opacity</h4>
      <div>
        <p>Theme color</p>
        <c-divider color="var(--c-sys-color-action-primary)" />
        <p>Thickness · 3px</p>
        <c-divider :thickness="3" />
        <p>Half opacity · 0.5</p>
        <c-divider :thickness="3" :opacity="0.5" />
        <p>Zero opacity preserves spacing</p>
        <c-divider :opacity="0" />
        <p>Hairline overrides thickness</p>
        <c-divider hairline :thickness="4" />
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
  .vertical-preview {
    display: flex;
    align-items: center;
    height: 96px;
  }
}
</style>

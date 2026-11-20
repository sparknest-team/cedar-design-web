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
      <h4>间距与缩进</h4>
      <div>
        <div v-for="size in scene1.presets" :key="size">
          <code>inset="{{ size }}" spacing="{{ size }}"</code>
          <c-divider :inset="size" :spacing="size" />
        </div>
        <p>数值</p>
        <c-divider :inset="24" :spacing="16" />
        <p>CSS 长度</p>
        <c-divider inset="2rem" />
        <p>非对称</p>
        <c-divider :inset="[8, 32]" :spacing="[12, 24]" />
        <p>竖直</p>
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
      <h4>线型</h4>
      <div>
        <p>实线</p>
        <c-divider />
        <p>虚线</p>
        <c-divider type="dashed" />
        <p>点线</p>
        <c-divider type="dotted" />
        <p>双线</p>
        <c-divider type="double" :thickness="3" />
      </div>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="opacity-color"
    >
      <h4>颜色、线宽与透明度</h4>
      <div>
        <p>主题色</p>
        <c-divider color="var(--c-sys-color-action-primary)" />
        <p>线宽</p>
        <c-divider :thickness="3" />
        <p>半透明</p>
        <c-divider :thickness="3" :opacity="0.5" />
        <p>隐藏线条，保留间距</p>
        <c-divider :opacity="0" />
        <p>细线优先</p>
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

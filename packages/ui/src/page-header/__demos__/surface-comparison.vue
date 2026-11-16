<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("pageHeaderSurfaceComparison");
import { Message } from "@cedar-design/ui-vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene2 = demoProxyRefs(
  (() => {
    const onFollow = () => Message.success("已关注项目");
    return { onFollow };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="breadcrumb"
    >
      <h4>{{ demoCopy.breadcrumb }}</h4>
      <c-card variant="outline" size="md">
        <c-page-header title="设计系统" subtitle="项目概览">
          <template #header>
            <c-breadcrumb>
              <c-breadcrumb-item>工作台</c-breadcrumb-item>
              <c-breadcrumb-item>项目</c-breadcrumb-item>
              <c-breadcrumb-item>设计系统</c-breadcrumb-item>
            </c-breadcrumb>
          </template>
        </c-page-header>
      </c-card>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="transparent"
    >
      <h4>{{ demoCopy.transparent }}</h4>
      <c-card variant="tonal" size="md">
        <c-page-header title="设计系统" subtitle="项目概览">
          <template #extra
            ><c-button @click="scene2.onFollow">关注</c-button></template
          >
          <span>页头默认透明，可以融入页面背景。</span>
        </c-page-header>
      </c-card>
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

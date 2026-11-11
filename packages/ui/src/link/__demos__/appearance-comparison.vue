<script setup lang="ts">
import { proxyRefs as demoProxyRefs } from 'vue'

const scene1 = demoProxyRefs((() => {

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
return { sizes }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="size">
    <h4><span lang="zh-CN">五种尺寸</span><span lang="en-US">size</span></h4>
    <c-space direction="column" size="md">
        <c-space v-for="size in scene1.sizes" :key="size" wrap size="md" align="center">
          <c-link :size="size" status="primary">{{ size }} 链接</c-link>
          <c-link :size="size" status="primary" icon>{{ size }} 图标</c-link>
          <c-link :size="size" loading>{{ size }} 加载中</c-link>
        </c-space>
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="link-status">
    <h4><span lang="zh-CN">链接状态</span><span lang="en-US">link status</span></h4>
    <c-space wrap size="sm">
        <c-link status="default">默认链接</c-link>
        <c-link status="primary">主要链接</c-link>
        <c-link status="secondary">次要链接</c-link>
        <c-link status="tertiary">三级链接</c-link>
        <c-link status="info">信息链接</c-link>
        <c-link status="success">成功链接</c-link>
        <c-link status="warning">警告链接</c-link>
        <c-link status="danger">危险链接</c-link>
      </c-space>
  </section>
</div>
</template>

<style scoped lang="less">
.demo-comparison { display: grid; gap: 24px; min-width: 0; max-width: 100%; }
.demo-comparison-case { min-width: 0; max-width: 100%; }
.demo-comparison-case > h4 { margin: 0 0 12px; font-size: 14px; }
html:not([lang='en-US']) .demo-comparison-case > h4 > [lang='en-US'],
html[lang='en-US'] .demo-comparison-case > h4 > [lang='zh-CN'] { display: none; }

</style>

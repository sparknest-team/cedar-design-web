<script setup lang="ts">


</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="size">
    <h4><span lang="zh-CN">大小</span><span lang="en-US">size</span></h4>
    <c-space align="center" justify="space-between">
        <c-loading size="sm" />
        <c-loading type="cube" size="sm" />
        <c-loading type="wave" size="sm" />
        <c-loading type="rect" size="sm" />
        <c-loading type="disappear" size="sm" />
        <c-loading :size="32" />
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="color">
    <h4><span lang="zh-CN">颜色</span><span lang="en-US">color</span></h4>
    <c-space align="center" justify="space-between">
        <c-loading color="var(--c-color-info)" />
        <c-loading type="cube" color="var(--c-color-success)" />
        <c-loading type="wave" color="var(--c-color-warning)" />
        <c-loading type="rect" color="var(--c-color-danger)" />
        <c-loading type="disappear" color="var(--c-color-text-disabled)" />
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--3" data-comparison-scene="type">
    <h4><span lang="zh-CN">类型</span><span lang="en-US">type</span></h4>
    <c-space align="center" justify="space-between">
        <c-loading />
        <c-loading type="cube" />
        <c-loading type="wave" />
        <c-loading type="rect" />
        <c-loading type="disappear" />
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

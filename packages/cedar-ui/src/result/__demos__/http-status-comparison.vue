<script setup lang="ts">


</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="403">
    <h4><span lang="zh-CN">HTTP状态码 403</span><span lang="en-US">403</span></h4>
    <c-result status="403" subtitle="Access to this resource on the server is denied.">
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="404">
    <h4><span lang="zh-CN">HTTP状态码 404</span><span lang="en-US">404</span></h4>
    <c-result status="404" subtitle="Whoops, that page is gone.">
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
  </section>

  <section class="demo-comparison-case demo-comparison-case--3" data-comparison-scene="500">
    <h4><span lang="zh-CN">HTTP状态码 500</span><span lang="en-US">500</span></h4>
    <c-result status="500" subtitle="This page isn’t working.">
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
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

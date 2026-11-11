<script setup lang="ts">


</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="success">
    <h4><span lang="zh-CN">成功状态</span><span lang="en-US">success</span></h4>
    <c-result status="success" title="This is title content">
        <template #subtitle> This is subtitle content </template>
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="warning">
    <h4><span lang="zh-CN">警告状态</span><span lang="en-US">warning</span></h4>
    <c-result status="warning" title="This is title content">
        <template #subtitle> This is subtitle content </template>
    
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
  </section>

  <section class="demo-comparison-case demo-comparison-case--3" data-comparison-scene="error">
    <h4><span lang="zh-CN">错误状态</span><span lang="en-US">error</span></h4>
    <c-result status="danger" title="This is title content">
        <template #subtitle> This is subtitle content </template>
    
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

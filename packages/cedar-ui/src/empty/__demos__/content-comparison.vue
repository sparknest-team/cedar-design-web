<script setup lang="ts">
import { ref } from "vue"
import { proxyRefs as demoProxyRefs } from 'vue'

const scene1 = demoProxyRefs((() => {

const attempts = ref(0)
return { attempts }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="extra">
    <h4><span lang="zh-CN">操作按钮</span><span lang="en-US">extra</span></h4>
    <c-empty :description="scene1.attempts ? 'No data. Local refresh completed.' : 'No data, please reload'">
        <template #extra>
          <c-button status="primary" @click="scene1.attempts++">Reload</c-button>
          <p aria-live="polite">Local refresh attempts: {{ scene1.attempts }}</p>
        </template>
      </c-empty>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="user-define">
    <h4><span lang="zh-CN">自定义图片和文案</span><span lang="en-US">user define</span></h4>
    <c-space direction="column">
        <c-empty>
          <template #image>
            <c-icon-exclamation-circle-fill />
          </template>
          No data, please reload!!
        </c-empty>
        <c-empty image-url="/cat.jpg" alt="空状态图片" description="自定义图片和文案" />
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

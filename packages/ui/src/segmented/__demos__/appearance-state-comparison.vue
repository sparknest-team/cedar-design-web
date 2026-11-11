<script setup lang="ts">
import { ref } from "vue"
import { proxyRefs as demoProxyRefs } from 'vue'

const scene1 = demoProxyRefs((() => {


const value = ref('md')

const options = ['xs', 'sm', 'md', 'lg', 'xl']
return { value, options }
})())

const scene2 = demoProxyRefs((() => {


const value = ref('on')
return { value }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="size">
    <h4><span lang="zh-CN">尺寸</span><span lang="en-US">size</span></h4>
    <c-space direction="column">
        <c-segmented v-model="scene1.value" size="xs" :options="scene1.options" />
        <c-segmented v-model="scene1.value" size="sm" :options="scene1.options" />
        <c-segmented v-model="scene1.value" size="md" :options="scene1.options" />
        <c-segmented v-model="scene1.value" size="lg" :options="scene1.options" />
        <c-segmented v-model="scene1.value" size="xl" :options="scene1.options" />
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="disabled">
    <h4><span lang="zh-CN">禁用</span><span lang="en-US">disabled</span></h4>
    <c-space wrap>
        <c-segmented disabled :options="['A', 'B', 'C']" default-value="A" />
        <c-segmented
          v-model="scene2.value"
          :options="[{
      label: '可用',
      value: 'on'
    }, {
      label: '禁用',
      value: 'off',
      disabled: true
    }]"
        />
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

<script setup lang="ts">
import { ref } from "vue"
import { proxyRefs as demoProxyRefs } from 'vue'

const scene2 = demoProxyRefs((() => {


    const value1 = ref('plain 1')


    const plainOptions = ['plain 1', 'plain 2', 'plain 3']



    const value2 = ref('1')


    const options = [
      { label: 'option 1', value: '1' },
      { label: 'option 2', value: '2' },
      { label: 'option 3', value: '3', disabled: true },
    ]
return { value1, plainOptions, value2, options }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="group">
    <h4><span lang="zh-CN">单选框组</span><span lang="en-US">group</span></h4>
    <c-space direction="column" size="lg">
        <c-radio-group>
          <c-radio value="A">A</c-radio>
          <c-radio value="B">B</c-radio>
          <c-radio value="C">C</c-radio>
          <c-radio value="D">D</c-radio>
        </c-radio-group>
        <c-radio-group>
          <c-radio value="A">A</c-radio>
          <c-radio value="B">B</c-radio>
          <c-radio value="C">C</c-radio>
          <c-radio value="D" disabled>D</c-radio>
        </c-radio-group>
      </c-space>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="group-options">
    <h4><span lang="zh-CN">单选框组选项</span><span lang="en-US">group options</span></h4>
    <c-space direction="column" size="lg">
        <c-radio-group v-model="scene2.value1" :options="scene2.plainOptions" />
        <c-radio-group v-model="scene2.value2" :options="scene2.options" />
        <c-radio-group v-model="scene2.value2" :options="scene2.options">
          <template #label="{ data }">
            <c-tag>{{ data.label }}</c-tag>
          </template>
        </c-radio-group>
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

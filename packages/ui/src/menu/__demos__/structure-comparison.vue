<script setup lang="ts">
import { h } from "vue"
import { proxyRefs as demoProxyRefs } from 'vue'

const scene1 = demoProxyRefs((() => {

const options = [
  { type: 'group', label: '文件操作', children: [{ label: '新建', value: 'new' }, { label: '打开', value: 'open' }] },
  { type: 'group', label: '编辑操作', children: [{ label: '复制', value: 'copy' }, { label: '粘贴', value: 'paste' }] },
]
return { options }
})())

const scene2 = demoProxyRefs((() => {

const options = [
  { label: '首页', value: 'home' },
  { label: '产品', children: [
    { label: '产品概览', value: 'overview' },
    { label: '解决方案', children: [{ label: '企业版', value: 'enterprise' }, { label: '团队版', value: 'team' }] },
  ] },
  { label: '关于我们', value: 'about' },
]
return { options }
})())

const scene3 = demoProxyRefs((() => {


const icon = (text: string) => h('span', { 'aria-hidden': 'true' }, text)

const options = [
  { label: '编辑', value: 'edit', icon: icon('✎'), extra: '⌘ E' },
  { label: ({ active }: { active: boolean }) => h('strong', active ? '已选中复制' : '复制'), value: 'copy', icon: icon('⧉'), extra: '⌘ C' },
  { label: '删除', value: 'delete', icon: icon('⌫'), extra: '⌫', disabled: true },
]
return { icon, options }
})())
</script>

<template>
<div class="demo-comparison">
  <section class="demo-comparison-case demo-comparison-case--1" data-comparison-scene="group">
    <h4><span lang="zh-CN">选项分组</span><span lang="en-US">group</span></h4>
    <c-menu :options="scene1.options">
        <c-button>选项分组</c-button>
      </c-menu>
  </section>

  <section class="demo-comparison-case demo-comparison-case--2" data-comparison-scene="submenu">
    <h4><span lang="zh-CN">多级菜单</span><span lang="en-US">submenu</span></h4>
    <c-menu :options="scene2.options">
        <c-button>多级菜单</c-button>
      </c-menu>
  </section>

  <section class="demo-comparison-case demo-comparison-case--3" data-comparison-scene="option-content">
    <h4><span lang="zh-CN">自定义选项内容</span><span lang="en-US">option content</span></h4>
    <c-menu :options="scene3.options">
        <c-button>自定义选项内容</c-button>
      </c-menu>
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

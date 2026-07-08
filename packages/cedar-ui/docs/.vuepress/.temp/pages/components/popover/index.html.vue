<template><div><h1 id="popover" tabindex="-1"><a class="header-anchor" href="#popover"><span>Popover</span></a></h1>
<p>鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2>
<p>基础用法。</p>
<VmiPreviewer><VmiExample id="3b91e7e4" iframeSrc="/-iframe.html#/3b91e7e4"><VmiV3b91e7e4></VmiV3b91e7e4></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="3b91e7e4" iframeSrc="/-iframe.html#/3b91e7e4" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/popover/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-popover%20title%3D%22Title%22%3E%0A%20%20%20%20%3Cc-button%3EHover%3C%2Fc-button%3E%0A%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%3Cp%3EHere%20is%20the%20text%20content%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cp%3EHere%20is%20the%20text%20content%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fc-popover%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-popover%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3ETitle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EHover%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Econtent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EHere%20is%20the%20text%20content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EHere%20is%20the%20text%20content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-popover%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="组件配置" tabindex="-1"><a class="header-anchor" href="#组件配置"><span>组件配置</span></a></h2>
<h3 id="popover-props" tabindex="-1"><a class="header-anchor" href="#popover-props"><span>Popover Props</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>参数类型</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="popover-events" tabindex="-1"><a class="header-anchor" href="#popover-events"><span>Popover Events</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>点击触发的事件</td>
<td><code v-pre>(event: MouseEvent) =&gt; void</code></td>
</tr>
</tbody>
</table>
<h3 id="popover-slots" tabindex="-1"><a class="header-anchor" href="#popover-slots"><span>Popover Slots</span></a></h3>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义默认内容</td>
</tr>
</tbody>
</table>
<h2 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h2>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> PopoverProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiV3b91e7e4 from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/popover/__demos__/basic.vue'

  

</script>

<template><div><h1 id="statistic" tabindex="-1"><a class="header-anchor" href="#statistic"><span>Statistic</span></a></h1>
<p>突出展示某个或某组数字、带描述的统计类数据。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h3>
<p>当需要突出某个或某组数字或展示带描述的统计类数据时使用。</p>
<VmiPreviewer><VmiExample id="2eaeba0e" iframeSrc="/-iframe.html#/2eaeba0e"><VmiV2eaeba0e></VmiV2eaeba0e></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="2eaeba0e" iframeSrc="/-iframe.html#/2eaeba0e" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/statistic/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-statistic%20title%3D%22Downloads%22%20%3Avalue%3D%22125670%22%20show-group-separator%3E%3C%2Fc-statistic%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-statistic%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EDownloads%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F76D47%3B--shiki-dark%3A%23FAB387%22%3E125670%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20show-group-separator%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-statistic%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="statistic-props" tabindex="-1"><a class="header-anchor" href="#statistic-props"><span><code v-pre>&lt;Statistic&gt;</code> Props</span></a></h3>
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
<td><code v-pre>title</code></td>
<td>数值展示的标题</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>value</code></td>
<td>数值展示的值</td>
<td><code v-pre>number | Date</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>format</code></td>
<td>数值展示的格式（日期模式使用）</td>
<td><code v-pre>string</code></td>
<td><code v-pre>'HH:mm:ss'</code></td>
</tr>
<tr>
<td><code v-pre>extra</code></td>
<td>额外的显示内容</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>start</code></td>
<td>是否开始动画</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>precision</code></td>
<td>小数保留位数（数字模式使用）</td>
<td><code v-pre>number</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>separator</code></td>
<td>进位分隔符（数字模式使用）</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>show-group-separator</code></td>
<td>是否展示进位分隔符（数字模式使用）</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>animation</code></td>
<td>是否开启动画</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>animation-duration</code></td>
<td>动画的过渡时间</td>
<td><code v-pre>number</code></td>
<td><code v-pre>2000</code></td>
</tr>
<tr>
<td><code v-pre>value-from</code></td>
<td>动画的起始值</td>
<td><code v-pre>number</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>placeholder</code></td>
<td>提示文字（当 <code v-pre>value</code> 为 <code v-pre>undefined</code> 时显示）</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>value-style</code></td>
<td>自定义显示值的样式</td>
<td><code v-pre>CSSProperties</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="statistic-slots" tabindex="-1"><a class="header-anchor" href="#statistic-slots"><span><code v-pre>&lt;Statistic&gt;</code> Slots</span></a></h3>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>title</code></td>
<td>标题</td>
<td><code v-pre>string</code></td>
</tr>
<tr>
<td><code v-pre>prefix</code></td>
<td>前缀</td>
<td><code v-pre>string</code></td>
</tr>
<tr>
<td><code v-pre>suffix</code></td>
<td>后缀</td>
<td><code v-pre>string</code></td>
</tr>
<tr>
<td><code v-pre>extra</code></td>
<td>额外内容</td>
<td><code v-pre>string</code></td>
</tr>
</tbody>
</table>
<h3 id="countdown-props" tabindex="-1"><a class="header-anchor" href="#countdown-props"><span><code v-pre>&lt;Countdown&gt;</code> Props</span></a></h3>
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
<td><code v-pre>title</code></td>
<td>倒计时的标题</td>
<td><code v-pre>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>value</code></td>
<td>倒计时的值</td>
<td><code v-pre>number</code></td>
<td><code v-pre>() =&gt; Date.now() + 300000</code></td>
</tr>
<tr>
<td><code v-pre>now</code></td>
<td>用于修正初始化时间显示不正确</td>
<td><code v-pre>number</code></td>
<td><code v-pre>() =&gt; Date.now()</code></td>
</tr>
<tr>
<td><code v-pre>format</code></td>
<td>倒计时的展示格式（使用 <code v-pre>dayjs</code>）</td>
<td><code v-pre>string</code></td>
<td><code v-pre>'HH:mm:ss'</code></td>
</tr>
<tr>
<td><code v-pre>start</code></td>
<td>是否开始倒计时</td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>value-style</code></td>
<td>自定义显示值的样式</td>
<td><code v-pre>CSSProperties</code></td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="countdown-events" tabindex="-1"><a class="header-anchor" href="#countdown-events"><span><code v-pre>&lt;Countdown&gt;</code> Events</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>finish</code></td>
<td>倒计时完成后触发的回调</td>
<td><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="countdown-slots" tabindex="-1"><a class="header-anchor" href="#countdown-slots"><span><code v-pre>&lt;Countdown&gt;</code> Slots</span></a></h3>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>title</code></td>
<td>标题</td>
<td><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h3>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> StatisticProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiV2eaeba0e from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/statistic/__demos__/basic.vue'

  

</script>

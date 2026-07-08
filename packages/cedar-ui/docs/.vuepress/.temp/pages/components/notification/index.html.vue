<template><div><h1 id="notification-通知提醒框" tabindex="-1"><a class="header-anchor" href="#notification-通知提醒框"><span>Notification 通知提醒框</span></a></h1>
<p>全局展示通知提醒，将信息及时有效的传达给用户。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3>
<p>基本用法。</p>
<VmiPreviewer><VmiExample id="e5c3285c" iframeSrc="/-iframe.html#/e5c3285c"><VmiVe5c3285c></VmiVe5c3285c></VmiExample><div class="vmi-previewer-content"><VmiSourceCode id="e5c3285c" iframeSrc="/-iframe.html#/e5c3285c" filePath="/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/notification/__demos__/basic.vue"><VmiSourceCodeItem name="basic.vue" rawCode="%3Ctemplate%3E%0A%20%20%3Cc-space%3E%0A%20%20%20%20%3Cc-button%20%40click%3D%22handleNotification%22%3E%20Open%20Notification%20%3C%2Fc-button%3E%0A%20%20%3C%2Fc-space%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aconst%20handleNotification%20%3D%20()%20%3D%3E%20%7B%0A%20%20Notification.info(%7B%0A%20%20%20%20title%3A%20'Notification'%2C%0A%20%20%20%20content%3A%20'This%20is%20a%20notification!'%2C%0A%20%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A" highlightCode="%3Cpre%20class%3D%22shiki%20shiki-themes%20material-theme-lighter%20catppuccin-mocha%22%20style%3D%22background-color%3A%23FAFAFA%3B--shiki-dark-bg%3A%231e1e2e%3Bcolor%3A%2390A4AE%3B--shiki-dark%3A%23cdd6f4%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3EhandleNotification%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20Open%20Notification%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Ec-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23F9E2AF%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%23CBA6F7%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3E%20handleNotification%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239C3EDA%3B--shiki-dark%3A%2394E2D5%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2390A4AE%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20Notification%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%236182B8%3Bfont-style%3Ainherit%3B--shiki-dark%3A%2389B4FA%3B--shiki-dark-font-style%3Aitalic%22%3Einfo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20%20%20title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3ENotification%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E%20%20%20%20content%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2391B859%3B--shiki-dark%3A%23A6E3A1%22%3EThis%20is%20a%20notification!%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%23A6E3A1%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%20%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%23CDD6F4%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%239399B2%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E53935%3B--shiki-dark%3A%2389B4FA%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2339ADB5%3B--shiki-dark%3A%2394E2D5%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"></VmiSourceCodeItem></VmiSourceCode></div></VmiPreviewer><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="notification-全局方法" tabindex="-1"><a class="header-anchor" href="#notification-全局方法"><span><code v-pre>Notification</code> 全局方法</span></a></h3>
<p><code v-pre>Notification</code> 提供的全局方法，可以通过以下三种方法使用：</p>
<ol>
<li>通过 <code v-pre>this.$notification</code> 调用</li>
<li>在 Composition API 中，通过 <code v-pre>getCurrentInstance().appContext.config.globalProperties.$notification</code> 调用</li>
<li>导入 <code v-pre>Notification</code>，通过 <code v-pre>Notification</code> 本身调用</li>
</ol>
<p>当通过 <code v-pre>import</code> 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext
上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> createApp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> Notification</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@arco-design/web-vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> app</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createApp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">App</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">Notification</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">_context</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> app</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">_context</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notificationmethod" tabindex="-1"><a class="header-anchor" href="#notificationmethod"><span>NotificationMethod</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>描述</th>
<th>类型</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>info</td>
<td>显示信息提醒框</td>
<td><code v-pre>(    config: string | NotificationConfig,    appContext?: AppContext  ) =&gt; NotificationReturn</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>success</td>
<td>显示成功提醒框</td>
<td><code v-pre>(    config: string | NotificationConfig,    appContext?: AppContext  ) =&gt; NotificationReturn</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>warning</td>
<td>显示警告提醒框</td>
<td><code v-pre>(    config: string | NotificationConfig,    appContext?: AppContext  ) =&gt; NotificationReturn</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>error</td>
<td>显示错误提醒框</td>
<td><code v-pre>(    config: string | NotificationConfig,    appContext?: AppContext  ) =&gt; NotificationReturn</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>remove</td>
<td>清除对应 <code v-pre>id</code> 的提醒框</td>
<td><code v-pre>(id: string) =&gt; void</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
<tr>
<td>clear</td>
<td>清除全部提醒框</td>
<td><code v-pre>(position?: NotificationPosition) =&gt; void</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="notificationconfig" tabindex="-1"><a class="header-anchor" href="#notificationconfig"><span>NotificationConfig</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>描述</th>
<th>类型</th>
<th style="text-align:center">默认值</th>
<th style="text-align:left">版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>内容</td>
<td><code v-pre>RenderContent</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td><code v-pre>RenderContent</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td><code v-pre>RenderFunction</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>id</td>
<td>唯一id</td>
<td><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>style</td>
<td>样式</td>
<td><code v-pre>CSSProperties</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>class</td>
<td>样式类名</td>
<td><code v-pre>ClassName</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>position</td>
<td>位置</td>
<td><code v-pre>'topLeft'|'topRight'|'bottomLeft'|'bottomRight'</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>showIcon</td>
<td>是否显示图标</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>true</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>closable</td>
<td>是否可关闭</td>
<td><code v-pre>boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>duration</td>
<td>显示的持续时间，单位为 <code v-pre>ms</code></td>
<td><code v-pre>number</code></td>
<td style="text-align:center"><code v-pre>3000</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>footer</td>
<td>底部内容</td>
<td><code v-pre>RenderFunction</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left">2.25.0</td>
</tr>
<tr>
<td>closeIcon</td>
<td>关闭按钮图标</td>
<td><code v-pre>RenderFunction</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>closeIconElement</td>
<td>关闭按钮元素</td>
<td><code v-pre>RenderFunction</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数</td>
<td><code v-pre>(id: number | string) =&gt; void</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h3 id="notificationreturn" tabindex="-1"><a class="header-anchor" href="#notificationreturn"><span>NotificationReturn</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>描述</th>
<th>类型</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>关闭当前通知提醒框</td>
<td><code v-pre>() =&gt; void</code></td>
<td style="text-align:center"><code v-pre>-</code></td>
</tr>
</tbody>
</table>
<h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h3>
<p>组件导出以下类型定义</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> BadgeInstance</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@cedar/ui</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>




<script lang="ts" setup>
  import VmiVe5c3285c from '/Users/mengshuai/github-ui/cedar/packages/cedar-ui/src/notification/__demos__/basic.vue'

  

</script>

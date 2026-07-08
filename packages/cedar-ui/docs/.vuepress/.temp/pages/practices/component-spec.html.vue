<template><div><h1 id="cedar-design-web-组件开发规范" tabindex="-1"><a class="header-anchor" href="#cedar-design-web-组件开发规范"><span>Cedar Design Web 组件开发规范</span></a></h1>
<blockquote>
<p>适用范围：<code v-pre>src/&lt;component&gt;/</code> 下所有新增 / 重构组件。<br>
本规范由 <code v-pre>button</code> 与 <code v-pre>divider</code> 两个组件提炼而来，作为后续组件实现的统一参考。<br>
<strong>凡是新组件 PR，必须按本规范落实；若有偏离，需在 PR 描述中说明原因。</strong></p>
</blockquote>
<hr>
<h2 id="_1-目录结构" tabindex="-1"><a class="header-anchor" href="#_1-目录结构"><span>1. 目录结构</span></a></h2>
<p>每个组件遵循同一骨架（不需要的文件可省略，但<strong>已列出的文件名不得改名</strong>）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span>src/&#x3C;component>/</span></span>
<span class="line"><span>  &#x3C;component>.vue            # 主组件（必备）</span></span>
<span class="line"><span>  &#x3C;component>-group.vue      # 可选：组合组件（如有）</span></span>
<span class="line"><span>  index.ts                   # 入口：聚合 install + 类型 + 默认导出</span></span>
<span class="line"><span>  props.ts                   # 集中放 props 与类型定义</span></span>
<span class="line"><span>  provide.ts                 # 可选：父子上下文 (useChildren / useParent)</span></span>
<span class="line"><span>  README.md                  # 文档，含 frontmatter `permalink`</span></span>
<span class="line"><span>  __demos__/*.vue            # 文档用 demo（kebab-case 文件名）</span></span>
<span class="line"><span>  __tests__/&#x3C;component>.test.tsx</span></span>
<span class="line"><span>  __tests__/__snapshots__/   # vitest 快照</span></span>
<span class="line"><span>  style/</span></span>
<span class="line"><span>    index.ts                 # 仅做样式入口聚合</span></span>
<span class="line"><span>    index.less               # 主样式（BEM）</span></span>
<span class="line"><span>    token.less               # CSS 变量声明</span></span>
<span class="line"><span>    &#x3C;subcomp>.less           # 可选：子组件样式</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-命名规范" tabindex="-1"><a class="header-anchor" href="#_2-命名规范"><span>2. 命名规范</span></a></h2>
<h3 id="_2-1-组件命名-关键" tabindex="-1"><a class="header-anchor" href="#_2-1-组件命名-关键"><span>2.1 组件命名（关键）</span></a></h3>
<p><strong>统一</strong>使用 <code v-pre>createNamespace('&lt;kebab-name&gt;')</code> 返回的 <code v-pre>name</code> 作为 <code v-pre>defineOptions</code> / <code v-pre>defineComponent</code> 的 name，与仓库现有 50+ 个组件保持一致。</p>
<p>背景：rattail 的 <code v-pre>createNamespaceFn</code> 内部把 <code v-pre>'&lt;prefix&gt;-&lt;kebab&gt;'</code> 转成 PascalCase 作为 <code v-pre>name</code>，所以 <code v-pre>createNamespace('button').name === 'CButton'</code>。这个值带 <code v-pre>C</code> 前缀，<strong>天然避开了与 HTML 标签同名时 Vue <code v-pre>&lt;component :is&gt;</code> 触发的自递归解析</strong>（如果 <code v-pre>name === 'Button'</code>，Vue 在解析 <code v-pre>&lt;component :is=&quot;'button'&quot;&gt;</code> 时会把 <code v-pre>'button'</code> normalize 成 <code v-pre>'Button'</code> 命中自身组件，导致无限递归）。</p>
<h4 id="tsx-普通-script-组件" tabindex="-1"><a class="header-anchor" href="#tsx-普通-script-组件"><span>TSX / 普通 <code v-pre>&lt;script&gt;</code> 组件</span></a></h4>
<div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/global-config</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> n</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> classes</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">breadcrumb</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> defineComponent</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">{</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88"> // => 'CBreadcrumb'</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">  setup</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">()</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> ...</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="script-setup-sfc" tabindex="-1"><a class="header-anchor" href="#script-setup-sfc"><span><code v-pre>&lt;script setup&gt;</code> SFC</span></a></h4>
<p><code v-pre>&lt;script setup&gt;</code> 中 <code v-pre>defineOptions(...)</code> 的参数会被编译时提升到 setup 之外，<strong>不能引用 <code v-pre>&lt;script setup&gt;</code> 里 <code v-pre>const</code> 出来的局部变量</strong>。要么内联调用 <code v-pre>createNamespace(...).name</code>，要么单独再 destructure 一次：</p>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> lang</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">=</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">ts</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> setup</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/global-config</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">defineOptions</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">{</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  name</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">button</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88"> // 内联调用，避免引用局部变量</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> n</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> classes</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">button</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">script</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不要</strong>：</p>
<ul>
<li>❌ <code v-pre>defineOptions({ name: 'CButton' })</code>：写死字符串会随重命名漂移；且若有人误写成 <code v-pre>'Button'</code>（无 <code v-pre>C</code> 前缀）会触发上述 <code v-pre>&lt;component :is&gt;</code> 自递归。</li>
<li>❌ <code v-pre>defineOptions({ name: 'Button' })</code> / 任何与 HTML 标签同名（裸 PascalCase）的写法。</li>
<li>❌ 在 <code v-pre>&lt;script setup&gt;</code> 顶部 <code v-pre>const { name } = createNamespace(...); defineOptions({ name })</code> —— 编译报 <code v-pre>defineOptions() cannot reference locally declared variables</code>。</li>
</ul>
<p>install 时统一拼前缀（<code v-pre>getComponentPrefix(options)</code> 默认 <code v-pre>'C'</code>）：</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">app</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">componentPrefix</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> +</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> _Button</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _Button</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-命名空间与样式前缀" tabindex="-1"><a class="header-anchor" href="#_2-2-命名空间与样式前缀"><span>2.2 命名空间与样式前缀</span></a></h3>
<table>
<thead>
<tr>
<th>项目</th>
<th>规则</th>
</tr>
</thead>
<tbody>
<tr>
<td>组件注册名</td>
<td><code v-pre>C&lt;PascalName&gt;</code>，由 install 时 <code v-pre>prefix + name</code> 拼接</td>
</tr>
<tr>
<td>CSS 类前缀</td>
<td><code v-pre>c-</code> （default <code v-pre>CLASS_PREFIX = 'c'</code>）</td>
</tr>
<tr>
<td>Block</td>
<td><code v-pre>.c-&lt;component&gt;</code></td>
</tr>
<tr>
<td>Element</td>
<td><code v-pre>.c-&lt;component&gt;__&lt;el&gt;</code>，由 <code v-pre>n('xxx')</code> 生成</td>
</tr>
<tr>
<td>Modifier</td>
<td><code v-pre>.c-&lt;component&gt;--&lt;mod&gt;</code>，由 <code v-pre>n('--xxx')</code> 生成</td>
</tr>
<tr>
<td>全局共享类</td>
<td><code v-pre>n('$--box')</code> → <code v-pre>.c--box</code>（<code v-pre>$</code> 表示去掉组件段，挂全局）</td>
</tr>
<tr>
<td>CSS 变量前缀</td>
<td><code v-pre>--c-&lt;component&gt;-...</code></td>
</tr>
</tbody>
</table>
<h3 id="_2-3-类型-文件命名" tabindex="-1"><a class="header-anchor" href="#_2-3-类型-文件命名"><span>2.3 类型 / 文件命名</span></a></h3>
<ul>
<li><strong>类型名</strong>：标准 PascalCase，缩写也大写。<code v-pre>ButtonVariant</code>（<strong>不是</strong> <code v-pre>Buttonvariant</code>）。</li>
<li><strong>props 文件</strong>：<code v-pre>props.ts</code>，导出 <code v-pre>xxxProps</code>（运行时定义）与 <code v-pre>XxxProps</code>（<code v-pre>ExtractPropTypes</code>）。</li>
<li><strong>demo 文件</strong>：<code v-pre>__demos__/&lt;kebab-case&gt;.vue</code>，例如 <code v-pre>auto-loading.vue</code>、<code v-pre>button-group.vue</code>、<code v-pre>size-inset.vue</code>。<strong>不允许 camelCase</strong>。</li>
</ul>
<hr>
<h2 id="_3-sfc-写法" tabindex="-1"><a class="header-anchor" href="#_3-sfc-写法"><span>3. SFC 写法</span></a></h2>
<p><strong>统一使用 <code v-pre>&lt;script setup lang=&quot;ts&quot;&gt;</code></strong>，禁止使用 <code v-pre>defineComponent({ setup() {...} })</code> 的 Options-style 写法。</p>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">template</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">  &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> :class</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">=</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">classes(n(), n('$--box'), [variant, n(`--variant-${variant}`)])</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">slot</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> /</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">  &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">div</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">template</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> lang</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">=</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">ts</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> setup</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> computed</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/global-config</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> componentProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./props</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">defineOptions</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">{</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  name</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">component-name</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> n</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> classes</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> createNamespace</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">component-name</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> props</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> defineProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">componentProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">script</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板根元素 class 一律通过 <code v-pre>classes(n(), n('$--box'), [cond, n('--xxx')], …)</code> 组装，<strong>禁止</strong>手写字符串拼接 class。</p>
<hr>
<h2 id="_4-props-规范" tabindex="-1"><a class="header-anchor" href="#_4-props-规范"><span>4. Props 规范</span></a></h2>
<h3 id="_4-1-文件结构" tabindex="-1"><a class="header-anchor" href="#_4-1-文件结构"><span>4.1 文件结构</span></a></h3>
<p><code v-pre>props.ts</code>：</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> ExtractPropTypes</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> PropType</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> Status</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> Size</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/constant</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> defineListenerProp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/components</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ButtonVariant</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">default</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> |</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">text</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> |</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">outline</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> |</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">link</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> |</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">tonal</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> buttonProps</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">  /**</span></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">   * 按钮主题色</span></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">   */</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  status</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">    type</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> String</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> PropType</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB">Status</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">  }</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  onClick</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> defineListenerProp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">e</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> Event</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">)</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =></span><span style="--shiki-light:#1976D2;--shiki-dark:#8FBCBB"> void</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> Promise</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#1976D2;--shiki-dark:#8FBCBB">any</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">>></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">()</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ButtonProps</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ExtractPropTypes</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">typeof</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> buttonProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-通用约定" tabindex="-1"><a class="header-anchor" href="#_4-2-通用约定"><span>4.2 通用约定</span></a></h3>
<table>
<thead>
<tr>
<th>项目</th>
<th>规则</th>
</tr>
</thead>
<tbody>
<tr>
<td>注释</td>
<td>每个 prop 上方写中文 JSDoc，说明用途</td>
</tr>
<tr>
<td>复用枚举</td>
<td><code v-pre>Status</code> / <code v-pre>Size</code> / <code v-pre>Direction</code> 等优先从 <code v-pre>_utils/constant.ts</code> 导入，<strong>不要</strong>在组件里再写一遍字面量</td>
</tr>
<tr>
<td>事件回调 prop</td>
<td>用 <code v-pre>defineListenerProp&lt;...&gt;()</code> 暴露 <code v-pre>onClick</code> / <code v-pre>onChange</code> 形式，便于异步 autoLoading 等机制</td>
</tr>
<tr>
<td>父子继承的布尔 prop</td>
<td><code v-pre>default: undefined</code>（如 <code v-pre>disabled</code> / <code v-pre>stacked</code>），让子组件能识别&quot;未显式传入&quot;再回退到 group 配置</td>
</tr>
<tr>
<td>普通布尔 prop</td>
<td><code v-pre>default: false</code></td>
</tr>
<tr>
<td>颜色 / 文案类</td>
<td><code v-pre>String</code> 类型，默认值 <code v-pre>''</code> 或不写（保持 <code v-pre>undefined</code>，便于 <code v-pre>??</code> 回退）</td>
</tr>
</tbody>
</table>
<h3 id="_4-3-通用-prop-语义-必须遵守" tabindex="-1"><a class="header-anchor" href="#_4-3-通用-prop-语义-必须遵守"><span>4.3 通用 prop 语义（必须遵守）</span></a></h3>
<p>某些 prop 在多个组件中反复出现，<strong>必须保持一致语义</strong>，组件不得自行赋予不同含义：</p>
<table>
<thead>
<tr>
<th>Prop</th>
<th>类型</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>status</code></td>
<td><code v-pre>Status</code></td>
<td>主题色（primary / secondary / info / success / warning / danger / tertiary）</td>
</tr>
<tr>
<td><code v-pre>variant</code></td>
<td>组件自有联合类型</td>
<td>视觉变体（default / outline / text / link / tonal …）</td>
</tr>
<tr>
<td><code v-pre>size</code></td>
<td><code v-pre>Size</code> (<code v-pre>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code>)</td>
<td>尺寸，默认 <code v-pre>'md'</code></td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td>禁用，子组件 <code v-pre>default: undefined</code> 用于继承父级</td>
</tr>
<tr>
<td><code v-pre>block</code></td>
<td><code v-pre>boolean</code></td>
<td>是否撑满父容器宽度</td>
</tr>
<tr>
<td><code v-pre>loading</code></td>
<td><code v-pre>boolean</code></td>
<td>加载中态，禁止触发 click</td>
</tr>
<tr>
<td><code v-pre>autoLoading</code></td>
<td><code v-pre>boolean</code></td>
<td>onClick 返回 Promise 时自动接管 loading 态</td>
</tr>
<tr>
<td><code v-pre>round</code></td>
<td><code v-pre>boolean</code></td>
<td>圆形</td>
</tr>
<tr>
<td><code v-pre>color</code></td>
<td><code v-pre>string</code></td>
<td>自定义背景色（透传到 CSS 变量或 inline style）</td>
</tr>
<tr>
<td><code v-pre>textColor</code></td>
<td><code v-pre>string</code></td>
<td>自定义文字色</td>
</tr>
<tr>
<td><code v-pre>elevation</code></td>
<td><code v-pre>boolean | number</code></td>
<td>阴影/海拔等级，<code v-pre>true</code> = 默认等级，<code v-pre>false</code> = 无阴影，<code v-pre>0~24</code> = 显式等级</td>
</tr>
<tr>
<td><code v-pre>vertical</code></td>
<td><code v-pre>boolean</code></td>
<td>是否垂直排列</td>
</tr>
<tr>
<td><code v-pre>orientation</code></td>
<td><code v-pre>'horizontal' | 'vertical'</code></td>
<td>方向，默认 <code v-pre>'horizontal'</code></td>
</tr>
</tbody>
</table>
<h3 id="_4-4-特殊-prop-语义说明" tabindex="-1"><a class="header-anchor" href="#_4-4-特殊-prop-语义说明"><span>4.4 特殊 prop 语义说明</span></a></h3>
<ul>
<li><strong><code v-pre>sizeX</code> / <code v-pre>sizeY</code>（divider）</strong>：命名锚定<strong>几何方向</strong>而非视觉方向 ——
<ul>
<li><code v-pre>sizeX</code> 始终代表&quot;沿 x 轴方向上的间距&quot;（即左右间距），<code v-pre>sizeY</code> 始终代表&quot;沿 y 轴方向上的间距&quot;（即上下间距）。</li>
<li>当 <code v-pre>orientation='horizontal'</code> 时，分割线视觉上呈水平延伸，&quot;沿 x 轴的间距&quot;对应<strong>两端 inset</strong>，&quot;沿 y 轴的间距&quot;对应<strong>上下 margin</strong>。</li>
<li>当 <code v-pre>orientation='vertical'</code> 时，分割线视觉上呈竖直延伸，二者视觉上&quot;互换&quot;。</li>
<li><strong>这是有意行为</strong>，规范要求：当组件存在&quot;方向 + 双轴间距&quot;两类 prop 时，<strong>间距 prop 按几何轴命名</strong>（<code v-pre>sizeX</code> / <code v-pre>sizeY</code>），并在 README 显式说明 <code v-pre>orientation</code> 切换后视觉表现如何变化。</li>
<li>反例：<code v-pre>marginTop</code> / <code v-pre>marginBottom</code> / <code v-pre>marginLeft</code> / <code v-pre>marginRight</code> 这种按&quot;视觉方位&quot;命名的 prop 在带 <code v-pre>orientation</code> 切换时会语义错乱，<strong>禁止</strong>使用。</li>
</ul>
</li>
<li><strong><code v-pre>hairline</code> 与 <code v-pre>thickness</code> 互斥</strong>：同时出现时以 <code v-pre>hairline</code> 优先，组件内必须显式判断（参考 <a href="src/divider/divider.vue">src/divider/divider.vue</a>）。</li>
</ul>
<hr>
<h2 id="_5-index-入口规范" tabindex="-1"><a class="header-anchor" href="#_5-index-入口规范"><span>5. Index 入口规范</span></a></h2>
<p><code v-pre>index.ts</code> 必须按以下模板编写，所有列出的导出都需保留：</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> App</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> ArcoOptions</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/types</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> setGlobalConfig</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> getComponentPrefix</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../_utils/global-config</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _Comp</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./comp.vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./comp-sub.vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88"> // 可选</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> compProps</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> compSubProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./props</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> Comp</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">assign</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">_Comp</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">  Sub</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88"> // 可选：把子组件挂为静态成员</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">  install</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> (</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">app</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> App</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> options</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ArcoOptions</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">)</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =></span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">    setGlobalConfig</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">app</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> options</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">    const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> componentPrefix</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> getComponentPrefix</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">options</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">    app</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">componentPrefix</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> +</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> _Comp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _Comp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">    app</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">componentPrefix</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> +</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">.</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9">name</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">  }</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">// 实例类型</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> CompInstance</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> InstanceType</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">typeof</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _Comp</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> CompSubInstance</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> InstanceType</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">typeof</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">// props 类型与公共类型</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> CompProps</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> CompSubProps</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> CompVariant</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./props</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">// 运行时 props 与子组件命名导出</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> compProps</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> compSubProps</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> _CompSub</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> as</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> CompSub</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">// 内部组件别名（resolver / 内部引用使用）</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> _CompComponent</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> Comp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> default</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> Comp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>_CompComponent</code> 与 <code v-pre>compProps</code> 等命名导出是 resolver / 内部组件互相引用时的入口，<strong>必须导出</strong>。</p>
</blockquote>
<hr>
<h2 id="_6-父子组件通信" tabindex="-1"><a class="header-anchor" href="#_6-父子组件通信"><span>6. 父子组件通信</span></a></h2>
<p>需要父子配置继承时（如 <code v-pre>ButtonGroup</code> ↔ <code v-pre>Button</code>），统一使用 <code v-pre>@nio-pow/maple-use</code> 的 <code v-pre>useChildren</code> / <code v-pre>useParent</code>：</p>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">// provide.ts</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> type</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> ComputedRef</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">vue</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> useChildren</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> useParent</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> from</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">@nio-pow/maple-use</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> XxxGroupProvider</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">  status</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ComputedRef</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB">Status</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">  variant</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> ComputedRef</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB">XxxVariant</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span></span>
<span class="line"><span style="--shiki-light:#C2C3C5;--shiki-dark:#616E88">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> const</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> XXX_GROUP_BIND_KEY</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> Symbol</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">XXX_GROUP_BIND_KEY</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> useXxxs</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">()</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">  const</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> bindChildren</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> childProviders</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> length</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">    useChildren</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB">XxxGroupProvider</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#8FBCBB"> null</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">XXX_GROUP_BIND_KEY</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">  return</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> length</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> items</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> childProviders</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> bindItems</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> bindChildren</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">export</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0"> useXxxGroup</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">()</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">  const</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> bindParent</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> parentProvider</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9"> index</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1"> =</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#88C0D0">    useParent</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">&#x3C;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB">XxxGroupProvider</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#1976D2;--shiki-dark:#8FBCBB"> null</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">(</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">XXX_GROUP_BIND_KEY</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">)</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">  return</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> {</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> index</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> group</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> parentProvider</span><span style="--shiki-light:#212121;--shiki-dark:#ECEFF4">,</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> bindGroup</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9"> bindParent</span><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4"> }</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件读取 group 配置时必须用 <code v-pre>??</code> 兜底：<code v-pre>props.size ?? group.size.value</code>。</p>
<hr>
<h2 id="_7-样式规范" tabindex="-1"><a class="header-anchor" href="#_7-样式规范"><span>7. 样式规范</span></a></h2>
<h3 id="_7-1-文件组织" tabindex="-1"><a class="header-anchor" href="#_7-1-文件组织"><span>7.1 文件组织</span></a></h3>
<ul>
<li><code v-pre>style/index.ts</code> <strong>只做引入</strong>，不要写逻辑：<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">../../style/index.less</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">import</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4"> '</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./index.less</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><code v-pre>style/index.less</code> 顺序：<code v-pre>@import './token.less'</code> → 主体样式 → 末尾可 <code v-pre>@import './子模块.less'</code>。</li>
<li><code v-pre>style/token.less</code> 顶部 <code v-pre>@import '../../style/theme/index.less'</code>，在 <code v-pre>:root</code> 下声明所有 <code v-pre>--c-&lt;component&gt;-*</code> 变量。</li>
</ul>
<h3 id="_7-2-写法约定" tabindex="-1"><a class="header-anchor" href="#_7-2-写法约定"><span>7.2 写法约定</span></a></h3>
<ul>
<li>主体样式<strong>只读 CSS 变量，不写常量值</strong>；颜色 / 间距常量必须落到 <code v-pre>token.less</code> 的 CSS 变量上。</li>
<li>主题色 / 暗色用 <code v-pre>@color-primary-6</code> 等 less 变量 + CSS 变量双层落地，方便主题切换。</li>
<li>重复的 status / size / variant 组合用 Less mixin 批量生成（参考 button 的 <code v-pre>.status() / .size()</code>、divider 的 <code v-pre>.generate-size-styles()</code>）。</li>
<li>交互态选择器抽出可读 alias，例如：<div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#1976D2;--shiki-dark:#81A1C1">@</span><span style="--shiki-light:#1976D2;--shiki-dark:#D8DEE9">interactive-selector</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#22863A;--shiki-dark:#EBCB8B"> ~</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">:not(.c-button--disabled):not(.c-button--loading)</span><span style="--shiki-light:#22863A;--shiki-dark:#ECEFF4">'</span><span style="--shiki-light:#1976D2;--shiki-dark:#81A1C1">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>BEM 写法严格按 <code v-pre>&amp;--modifier</code> / <code v-pre>&amp;__element</code>，不要写 <code v-pre>.c-button.c-button--xxx</code> 之类的全名嵌套。</li>
</ul>
<hr>
<h2 id="_8-文档规范-readme-md" tabindex="-1"><a class="header-anchor" href="#_8-文档规范-readme-md"><span>8. 文档规范（README.md）</span></a></h2>
<p>固定段落顺序：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">---</span></span>
<span class="line"><span style="--shiki-light:#D32F2F;--shiki-dark:#81A1C1">permalink</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">:</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C"> /components/&#x3C;component>/</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#ECEFF4">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#81A1C1;--shiki-dark-font-weight:inherit">#</span><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#88C0D0;--shiki-dark-font-weight:inherit"> ComponentName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">一句话简介。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#81A1C1;--shiki-dark-font-weight:inherit">##</span><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#88C0D0;--shiki-dark-font-weight:inherit"> 案例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#81A1C1;--shiki-dark-font-weight:inherit">###</span><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#88C0D0;--shiki-dark-font-weight:inherit"> 基础用法</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#8FBCBB"> src</span><span style="--shiki-light:#D32F2F;--shiki-dark:#ECEFF4">=</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">"</span><span style="--shiki-light:#22863A;--shiki-dark:#A3BE8C">./__demos__/basic.vue</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">"</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">>&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">demo</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">... 其他案例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">## API</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">### `</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">Component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">` Props</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">| 属性 | 说明 | 类型 | 默认值 |</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">### `</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">Component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">` Events</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">### `</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">Component</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">` Slots</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">### `</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#81A1C1">ComponentGroup</span><span style="--shiki-light:#24292EFF;--shiki-dark:#81A1C1">></span><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">` Props  // 如有</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">## 类型定义</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">组件导出以下类型定义</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">```ts</span></span>
<span class="line"><span style="--shiki-light:#24292EFF;--shiki-dark:#D8DEE9FF">import type { ComponentProps } from '@cedar/ui'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式变量" tabindex="-1"><a class="header-anchor" href="#样式变量"><span>样式变量</span></a></h3>
<p>| 变量名 | 默认值 |</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 所有 `&#x3C;demo src="...">` 路径必须是 `kebab-case`。</span></span>
<span class="line"><span>- 当组件存在"父级配置 + 子级覆盖"机制时，必须在表格下方加 **注意** 段说明继承关系（参考 button README）。</span></span>
<span class="line"><span>- `orientation` / `sizeX` / `sizeY` 这类有方向语义的 prop，必须显式说明切换 orientation 后的视觉表现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 9. 测试规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每个组件至少包含：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>```tsx</span></span>
<span class="line"><span>// __tests__/&#x3C;component>.test.tsx</span></span>
<span class="line"><span>import { nextTick } from 'vue'</span></span>
<span class="line"><span>import { mount } from '@vue/test-utils'</span></span>
<span class="line"><span>import { describe, test, expect } from 'vitest'</span></span>
<span class="line"><span>import { Component } from '../index'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>describe('Component', () => {</span></span>
<span class="line"><span>  test('render', async () => {</span></span>
<span class="line"><span>    const wrapper = mount(Component)</span></span>
<span class="line"><span>    await nextTick()</span></span>
<span class="line"><span>    expect(wrapper.html()).toMatchSnapshot()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>文件后缀统一 <code v-pre>.test.tsx</code>。</li>
<li>基础渲染快照必须有；后续可以追加交互 / props 切换测试。</li>
</ul>
<hr>
<h2 id="_10-反模式清单-请勿出现" tabindex="-1"><a class="header-anchor" href="#_10-反模式清单-请勿出现"><span>10. 反模式清单（请勿出现）</span></a></h2>
<ul>
<li>❌ <code v-pre>defineOptions({ name: 'CButton' })</code> 写死前缀，install 时会重复拼成 <code v-pre>CCButton</code>。</li>
<li>❌ <code v-pre>defineComponent({ name, ... })</code> 中 <code v-pre>name</code> 取自 <code v-pre>createNamespace().name</code>（值是 BEM 类名而非组件名）。</li>
<li>❌ 在 <code v-pre>defineOptions</code> / 模块顶层调用 <code v-pre>createNamespace()</code> 后取 <code v-pre>name</code> 用作组件 name —— 见第 2.1 节解释。</li>
<li>❌ Options-style <code v-pre>defineComponent({ setup() {...} })</code>（统一用 <code v-pre>&lt;script setup lang=&quot;ts&quot;&gt;</code>）。</li>
<li>❌ camelCase demo 文件名（如 <code v-pre>autoLoading.vue</code>）。</li>
<li>❌ 类型名小写缩写（如 <code v-pre>Buttonvariant</code>）。</li>
<li>❌ 直接在主样式里写颜色 / 间距常量，绕过 <code v-pre>token.less</code> 的 CSS 变量。</li>
<li>❌ 在 props 中直接写联合字面量而不复用 <code v-pre>Status</code> / <code v-pre>Size</code> 等公共枚举。</li>
<li>❌ 提交残留的 <code v-pre>console.log</code>。</li>
<li>❌ <code v-pre>index.ts</code> 漏导出 <code v-pre>xxxProps</code> / <code v-pre>_XxxComponent</code>。</li>
<li>❌ 组件内部用 <code v-pre>marginTop</code> / <code v-pre>marginLeft</code> 等&quot;视觉方位&quot;命名间距 prop 配合 <code v-pre>orientation</code> 切换 —— 必须用几何轴命名（<code v-pre>sizeX</code> / <code v-pre>sizeY</code>）。</li>
</ul>
<h2 id="附录-a-跨端对齐案例-—-alert" tabindex="-1"><a class="header-anchor" href="#附录-a-跨端对齐案例-—-alert"><span>附录 A：跨端对齐案例 — Alert</span></a></h2>
<p>Alert 是首个走完 OpenSpec 流程完成 PC ↔ Mobile API 对齐的组件，可作为后续组件双端对齐的参考样本。</p>
<p><strong>核心约定</strong>：</p>
<ul>
<li>类型枚举与 <code v-pre>Status</code> 对齐：<code v-pre>info | success | warning | danger | default</code>（不再用 <code v-pre>error</code>，状态色统一使用 <code v-pre>danger</code>；<code v-pre>Message</code> 的 <code v-pre>type</code> 才使用 <code v-pre>error</code>）。</li>
<li>视觉变体三档：<code v-pre>standard</code>（浅色填充 + 描边）、<code v-pre>tonal</code>（浅色填充无描边）、<code v-pre>outlined</code>（透明 + 描边）。</li>
<li>通用属性：<code v-pre>color</code> / <code v-pre>elevation</code> / <code v-pre>closable</code>（注意拼写）/ <code v-pre>showIcon</code> / <code v-pre>banner</code> / <code v-pre>center</code> / <code v-pre>title</code> / <code v-pre>message</code>。</li>
<li>通用插槽：<code v-pre>default</code> / <code v-pre>icon</code> / <code v-pre>title</code> / <code v-pre>action</code> / <code v-pre>close-icon</code>（统一命名，废弃 <code v-pre>close-element</code>）。</li>
<li>通用事件：<code v-pre>close(e)</code> / <code v-pre>after-close()</code>。</li>
<li>样式实现：5 类型 × 3 变体颜色矩阵全部走 <code v-pre>--c-alert-*</code> / <code v-pre>--mp-alert-*</code> token，主样式不写常量。</li>
<li>类型导出齐备：<code v-pre>AlertProps</code> / <code v-pre>AlertType</code> / <code v-pre>AlertVariant</code> / <code v-pre>AlertInstance</code> 与 <code v-pre>alertProps</code> / <code v-pre>_AlertComponent</code>。</li>
</ul>
<p>OpenSpec change：<code v-pre>openspec/changes/align-alert-spec/</code>。</p>
</div></template>



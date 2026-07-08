<template><div><h1 id="agents-md-—-cedar-design-web" tabindex="-1"><a class="header-anchor" href="#agents-md-—-cedar-design-web"><span>AGENTS.md — Cedar Design Web</span></a></h1>
<blockquote>
<p>此文件是 AI 编码代理（GitHub Copilot / Claude / Cursor 等）在本仓库工作的统一入口。
仓库定位：基于 Vue 3 + TypeScript + Less 的桌面端组件库，注册前缀 <code v-pre>C</code>，CSS 前缀 <code v-pre>c-</code>。</p>
</blockquote>
<h2 id="必读文档-按优先级" tabindex="-1"><a class="header-anchor" href="#必读文档-按优先级"><span>必读文档（按优先级）</span></a></h2>
<ol>
<li><strong><RouteLink to="/docs/practices/component-spec.html">docs/practices/component-spec.md</RouteLink></strong> —— 组件开发规范，所有 <code v-pre>src/&lt;component&gt;/</code> 下的修改必须先读。</li>
<li><strong><RouteLink to="/.github/copilot-instructions.html">.github/copilot-instructions.md</RouteLink></strong> —— Copilot 自动加载的精简版规范。</li>
<li><strong><RouteLink to="/docs/practices/ai-collaboration.html">docs/practices/ai-collaboration.md</RouteLink></strong> —— AI 协作 / 入口文件机制说明（什么时候该更新哪个文件）。</li>
<li><strong><RouteLink to="/openspec/">openspec/</RouteLink></strong> —— OpenSpec 规范变更工作流；新增 / 修改组件 API 需要走 spec 流程。</li>
</ol>
<h2 id="项目结构速览" tabindex="-1"><a class="header-anchor" href="#项目结构速览"><span>项目结构速览</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span>src/&#x3C;component>/</span></span>
<span class="line"><span>  &#x3C;component>.vue            # 主组件</span></span>
<span class="line"><span>  index.ts                   # 入口聚合</span></span>
<span class="line"><span>  props.ts                   # props + 类型</span></span>
<span class="line"><span>  style/</span></span>
<span class="line"><span>    index.less               # 主样式</span></span>
<span class="line"><span>    token.less               # CSS 变量</span></span>
<span class="line"><span>  __demos__/*.vue            # 文档 demo（kebab-case）</span></span>
<span class="line"><span>  __tests__/*.test.tsx       # 单测</span></span>
<span class="line"><span>  README.md                  # 文档（带 frontmatter permalink）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键约束-高频踩坑" tabindex="-1"><a class="header-anchor" href="#关键约束-高频踩坑"><span>关键约束（高频踩坑）</span></a></h2>
<ul>
<li>组件注册名统一用 <code v-pre>createNamespace('&lt;kebab&gt;').name</code>，不要写死 <code v-pre>'CXxx'</code>，更不要裸 <code v-pre>'Xxx'</code>（会与 <code v-pre>&lt;component :is&gt;</code> 触发自递归 → <code v-pre>RangeError: Invalid string length</code>）。</li>
<li>BEM 修饰符必须显式带 <code v-pre>--</code>：<code v-pre>n('--ghost')</code> → <code v-pre>c-button--ghost</code>。</li>
<li><code v-pre>classes([cond, truthy, falsy])</code> <strong>不会自动 unwrap Vue Ref</strong>，写 <code v-pre>block.value</code> 不要写 <code v-pre>block</code>。</li>
<li>CSS 变量必须以 <code v-pre>--c-&lt;component&gt;-</code> 开头，集中放 <code v-pre>style/token.less</code>。</li>
<li>主样式只读 CSS 变量，颜色/间距常量必须落到 <code v-pre>token.less</code>。</li>
<li><code v-pre>index.ts</code> 必须导出：<code v-pre>default</code>、<code v-pre>CompInstance</code>、<code v-pre>CompProps</code>、<code v-pre>compProps</code>、<code v-pre>_CompComponent</code>。</li>
</ul>
<h2 id="开发命令" tabindex="-1"><a class="header-anchor" href="#开发命令"><span>开发命令</span></a></h2>
<table>
<thead>
<tr>
<th>用途</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>安装依赖</td>
<td><code v-pre>yarn</code></td>
</tr>
<tr>
<td>跑单测</td>
<td><code v-pre>yarn vitest run</code></td>
</tr>
<tr>
<td>跑指定组件</td>
<td><code v-pre>yarn vitest run src/&lt;component&gt;</code></td>
</tr>
<tr>
<td>启动文档</td>
<td><code v-pre>yarn dev</code></td>
</tr>
<tr>
<td>构建</td>
<td><code v-pre>yarn build</code></td>
</tr>
</tbody>
</table>
<h2 id="与移动端-maple-design-mobile-的关系" tabindex="-1"><a class="header-anchor" href="#与移动端-maple-design-mobile-的关系"><span>与移动端（Maple Design Mobile）的关系</span></a></h2>
<p>公共 API（如 <code v-pre>Space</code> 的 <code v-pre>size</code> 枚举、<code v-pre>Button</code> 的 <code v-pre>variant</code> 等）应<strong>两端同步</strong>，以本仓库（PC）为准。
移动端见 <code v-pre>/Users/shuaimeng/Workspace/maple-design-mobile/AGENTS.md</code>。</p>
<h2 id="反模式速查" tabindex="-1"><a class="header-anchor" href="#反模式速查"><span>反模式速查</span></a></h2>
<ul>
<li>❌ Options-style <code v-pre>defineComponent({ setup() {...} })</code></li>
<li>❌ 写死 <code v-pre>defineOptions({ name: 'CXxx' })</code></li>
<li>❌ camelCase demo 文件名</li>
<li>❌ 主样式直接写颜色 / 间距常量</li>
<li>❌ <code v-pre>props</code> 内重写联合字面量代替 <code v-pre>_utils/constant.ts</code> 的 <code v-pre>Status</code> / <code v-pre>Size</code> / <code v-pre>Direction</code></li>
<li>❌ 残留 <code v-pre>console.log</code></li>
</ul>
<h2 id="历史教训-不要重蹈" tabindex="-1"><a class="header-anchor" href="#历史教训-不要重蹈"><span>历史教训（不要重蹈）</span></a></h2>
<h3 id="demo-样例" tabindex="-1"><a class="header-anchor" href="#demo-样例"><span>Demo / 样例</span></a></h3>
<ul>
<li>demo 里的 icon 必须用 kebab + <code v-pre>c-</code> 前缀，如 <code v-pre>&lt;c-icon-more /&gt;</code>，<strong>禁止</strong>裸 PascalCase <code v-pre>&lt;IconMore /&gt;</code>——<code v-pre>CedarResolver</code> 只匹配 <code v-pre>^C[A-Z]</code>，不会解析裸 <code v-pre>Icon</code>。</li>
<li>demo 文件名 kebab-case；<code v-pre>&lt;demo src=&quot;./__demos__/xxx.vue&quot;&gt;</code> 路径同名。</li>
</ul>
<h3 id="组件内部" tabindex="-1"><a class="header-anchor" href="#组件内部"><span>组件内部</span></a></h3>
<ul>
<li><strong>Provider 字段忘 <code v-pre>.value</code></strong> 会渲染 <code v-pre>[object Object]</code>（参考 <code v-pre>breadcrumb-item separator</code> bug）。</li>
<li><strong>父子 group 通信不要用 <code v-pre>toRefs(props)</code></strong>，类型对不上 <code v-pre>ComputedRef</code>；用 <code v-pre>computed(() =&gt; props.x)</code>（参考 button-group）。</li>
<li><strong><code v-pre>classes</code> 不 unwrap Vue Ref</strong>：条件位要写 <code v-pre>block.value</code>。</li>
<li><strong>裸 PascalCase 名与 HTML tag 同名</strong> 会触发 Vue 自递归 → <code v-pre>RangeError: Invalid string length</code>；统一用 <code v-pre>createNamespace('xxx').name</code>。</li>
</ul>
<h3 id="批量重命名-替换" tabindex="-1"><a class="header-anchor" href="#批量重命名-替换"><span>批量重命名 / 替换</span></a></h3>
<ul>
<li>大批量 sed/perl 替换 CSS 变量名、class 名、import 路径时，<strong>正则必须排除</strong>已加前缀、BEM modifier 子串、模板字符串里的 BEM 片段、固定字面量功能类（如 icon 字体激活类）。</li>
<li>只匹配 <code v-pre>:root { ... }</code> 块内、<code v-pre>var(--xxx)</code> 内、inline <code v-pre>style=&quot;--xxx: ...&quot;</code> 内。</li>
</ul>
<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3>
<ul>
<li>跑单组件：<code v-pre>yarn vitest run src/&lt;component&gt;</code>。</li>
</ul>
<p>更多细节见 <RouteLink to="/docs/practices/component-spec.html">docs/practices/component-spec.md</RouteLink>。</p>
</div></template>



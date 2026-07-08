<template><div><h1 id="ai-协作约定-入口文件说明" tabindex="-1"><a class="header-anchor" href="#ai-协作约定-入口文件说明"><span>AI 协作约定 / 入口文件说明</span></a></h1>
<blockquote>
<p>这是一篇<strong>元文档</strong>：解释本仓库为 AI 编码代理（GitHub Copilot Chat / Claude Code / Cursor / Codex CLI 等）准备了哪些入口文件、它们如何被加载、什么时候应该更新。</p>
</blockquote>
<h2 id="_1-入口文件一览" tabindex="-1"><a class="header-anchor" href="#_1-入口文件一览"><span>1. 入口文件一览</span></a></h2>
<table>
<thead>
<tr>
<th>文件</th>
<th>自动加载者</th>
<th>定位</th>
</tr>
</thead>
<tbody>
<tr>
<td><RouteLink to="/AGENTS.html"><code v-pre>AGENTS.md</code></RouteLink>（仓库根）</td>
<td>Claude Code / Cursor / Codex / 新版 Copilot Chat 等通用约定</td>
<td><strong>统一入口</strong>，简短，列必读清单 + 高频踩坑 + 历史教训</td>
</tr>
<tr>
<td><RouteLink to="/.github/copilot-instructions.html"><code v-pre>.github/copilot-instructions.md</code></RouteLink></td>
<td>VS Code GitHub Copilot Chat（每次对话强制加载）</td>
<td>Copilot 专用版，含完整规范摘要</td>
</tr>
<tr>
<td><RouteLink to="/practices/component-spec.html"><code v-pre>docs/practices/component-spec.md</code></RouteLink></td>
<td>人类 + 被 AI 按需 <code v-pre>read_file</code></td>
<td>详细组件规范（<strong>真实的 source of truth</strong>）</td>
</tr>
<tr>
<td><RouteLink to="/openspec/"><code v-pre>openspec/</code></RouteLink></td>
<td>人类 + AI 走 OpenSpec skill 流程</td>
<td>规范变更工作流（新增 / 修改组件 API）</td>
</tr>
<tr>
<td><RouteLink to="/practices/ai-collaboration.html"><code v-pre>docs/practices/ai-collaboration.md</code></RouteLink></td>
<td>人类阅读，AI 按需查</td>
<td>本文，解释入口机制本身</td>
</tr>
<tr>
<td><code v-pre>~/.config/.../user memory</code></td>
<td>仅 AI 工具自身的用户级记忆</td>
<td>跨仓库的个人偏好/经验，<strong>不在仓库内</strong></td>
</tr>
</tbody>
</table>
<h2 id="_2-加载机制差异" tabindex="-1"><a class="header-anchor" href="#_2-加载机制差异"><span>2. 加载机制差异</span></a></h2>
<ul>
<li><strong><code v-pre>AGENTS.md</code></strong> —— 多数 AI 工具会在打开仓库时自动检测 <code v-pre>AGENTS.md</code> / <code v-pre>agents.md</code>（大小写视工具而定，建议固定 <code v-pre>AGENTS.md</code>）。是事实上的跨工具标准。</li>
<li><strong><code v-pre>.github/copilot-instructions.md</code></strong> —— GitHub Copilot Chat 专属约定，每次新对话都会注入到系统消息。</li>
<li><strong><code v-pre>docs/practices/*.md</code></strong> —— 不会自动加载，AI 需要主动 <code v-pre>read_file</code>，所以入口文件要<strong>明确指引</strong>它们去读。</li>
</ul>
<h2 id="_3-信息分层原则" tabindex="-1"><a class="header-anchor" href="#_3-信息分层原则"><span>3. 信息分层原则</span></a></h2>
<p>为避免内容漂移、重复维护，按&quot;入口越靠前越精简&quot;分层：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292eff;--shiki-dark:#d8dee9ff;--shiki-light-bg:#ffffff;--shiki-dark-bg:#2e3440ff"><pre v-pre class="shiki shiki-themes min-light nord vp-code"><code><span class="line"><span>AGENTS.md            ← 必读清单 + Top 反模式 + 历史血泪 (≤ 100 行)</span></span>
<span class="line"><span>copilot-instructions ← 完整规范摘要 (~200 行)</span></span>
<span class="line"><span>component-spec.md    ← 唯一权威详细规范 (可以很长)</span></span>
<span class="line"><span>openspec/            ← API 变更走 spec change 流程</span></span>
<span class="line"><span>user memory          ← 跨仓库的"我个人怎么用"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>规则</strong>：</p>
<ul>
<li>任何 API / 命名 / 样式约定的<strong>最终定义</strong>只允许出现在 <code v-pre>component-spec.md</code> 或 <code v-pre>openspec/specs/</code>，其他入口文件<strong>只摘要 + 链回去</strong>。</li>
<li>历史教训（&quot;曾经踩过的坑&quot;）放 <code v-pre>AGENTS.md</code> 顶部，因为它最容易被遗忘且最贵。</li>
<li>个人偏好（路径、命令快捷写法、跨仓库的对齐关系）放 user memory，不要污染仓库文档。</li>
</ul>
<h2 id="_4-何时更新哪个文件" tabindex="-1"><a class="header-anchor" href="#_4-何时更新哪个文件"><span>4. 何时更新哪个文件</span></a></h2>
<table>
<thead>
<tr>
<th>场景</th>
<th>更新文件</th>
</tr>
</thead>
<tbody>
<tr>
<td>新 API / 新组件规范</td>
<td>走 OpenSpec change 流程 → 归档时同步 <code v-pre>component-spec.md</code></td>
</tr>
<tr>
<td>新 lint 规则 / 命名约定</td>
<td><code v-pre>component-spec.md</code> →（顺手）摘要进 <code v-pre>copilot-instructions.md</code></td>
</tr>
<tr>
<td>又踩了一次老坑</td>
<td><code v-pre>AGENTS.md</code> 的「历史教训」段</td>
</tr>
<tr>
<td>某个反模式频繁出现在 PR</td>
<td><code v-pre>copilot-instructions.md</code> 的「反模式速查」</td>
</tr>
<tr>
<td>改了构建/测试命令</td>
<td><code v-pre>AGENTS.md</code> 命令表 + <code v-pre>copilot-instructions.md</code> 第 5 节</td>
</tr>
<tr>
<td>仅自己机器上的路径偏好</td>
<td>user memory（不要进仓库）</td>
</tr>
</tbody>
</table>
<h2 id="_5-与移动端-maple-design-mobile-的对齐" tabindex="-1"><a class="header-anchor" href="#_5-与移动端-maple-design-mobile-的对齐"><span>5. 与移动端（Maple Design Mobile）的对齐</span></a></h2>
<p>公共 API（如 <code v-pre>Space</code> 的 <code v-pre>size</code> 枚举、<code v-pre>Button</code> 的 <code v-pre>variant</code> 等）<strong>以本仓库（PC）为准</strong>，两端同步。<br>
移动端入口：<code v-pre>/Users/shuaimeng/Workspace/maple-design-mobile/AGENTS.md</code>。</p>
<p>修改公共 API 时：</p>
<ol>
<li>在本仓库走 OpenSpec 流程定下来。</li>
<li>移动端实现时引用 cedar 的 spec 链接，不要自己重新发明字面量。</li>
<li>两端文档的 prop 表保持顺序、命名、JSDoc 一致。</li>
</ol>
<h2 id="_6-ai-工具不应做的事" tabindex="-1"><a class="header-anchor" href="#_6-ai-工具不应做的事"><span>6. AI 工具不应做的事</span></a></h2>
<ul>
<li>❌ 在仓库内创建 <code v-pre>claude.md</code> / <code v-pre>cursor.md</code> / <code v-pre>.cursorrules</code> 等工具特定文件 —— 用 <code v-pre>AGENTS.md</code> 即可，避免碎片化。</li>
<li>❌ 把&quot;个人偏好&quot;写进 <code v-pre>AGENTS.md</code>（应放 user memory）。</li>
<li>❌ 在 <code v-pre>AGENTS.md</code> 重复 <code v-pre>component-spec.md</code> 的全部内容 —— 只摘要 + 链接。</li>
<li>❌ 删掉「历史教训」段，即使代码已修复 —— 它是给未来 AI 的免疫接种。</li>
<li>❌ 跳过 OpenSpec 流程直接改组件公开 API。</li>
</ul>
</div></template>



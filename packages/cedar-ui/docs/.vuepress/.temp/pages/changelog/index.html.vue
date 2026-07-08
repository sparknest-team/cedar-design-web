<template><div><h2 id="unreleased" tabindex="-1"><a class="header-anchor" href="#unreleased"><span>Unreleased</span></a></h2>
<h4 id="breaking-change" tabindex="-1"><a class="header-anchor" href="#breaking-change"><span>Breaking Change</span></a></h4>
<ul>
<li><strong>Alert</strong> 与移动端 (<code v-pre>maple-design-mobile</code>) 完成 API 对齐：
<ul>
<li><code v-pre>type=&quot;error&quot;</code> → <code v-pre>type=&quot;danger&quot;</code>（与 <code v-pre>Status</code> 枚举统一）</li>
<li><code v-pre>type=&quot;normal&quot;</code> → <code v-pre>type=&quot;default&quot;</code></li>
<li><code v-pre>closeable</code> → <code v-pre>closable</code>（拼写修正）</li>
<li><code v-pre>#close-element</code> slot → <code v-pre>#close-icon</code> slot</li>
</ul>
</li>
</ul>
<h4 id="feature" tabindex="-1"><a class="header-anchor" href="#feature"><span>Feature</span></a></h4>
<ul>
<li><strong>Alert</strong> 新增 <code v-pre>variant</code>（<code v-pre>standard</code> / <code v-pre>tonal</code> / <code v-pre>outlined</code>）、<code v-pre>color</code>、<code v-pre>elevation</code> 属性；新增 <code v-pre>default</code> 类型；新增 <code v-pre>after-close</code> 事件。</li>
<li><strong>Alert</strong> 样式重构为完全 CSS 变量驱动（<code v-pre>style/token.less</code>），覆盖 5 类型 × 3 变体颜色矩阵。</li>
</ul>
<h2 id="_1-2-82" tabindex="-1"><a class="header-anchor" href="#_1-2-82"><span>1.2.82</span></a></h2>
<h4 id="feature-1" tabindex="-1"><a class="header-anchor" href="#feature-1"><span>Feature</span></a></h4>
<p><strong>Tabs 组件</strong></p>
<ul>
<li><code v-pre>Tabs</code>组件样式优化</li>
</ul>
<p><strong>Upload 组件</strong></p>
<ul>
<li><code v-pre>Upload</code>组件样式优化</li>
</ul>
<h2 id="_1-2-76" tabindex="-1"><a class="header-anchor" href="#_1-2-76"><span>1.2.76</span></a></h2>
<h4 id="feature-2" tabindex="-1"><a class="header-anchor" href="#feature-2"><span>Feature</span></a></h4>
<p><strong>FilterForm 组件</strong></p>
<ul>
<li><code v-pre>FilterForm</code>组件Input类型输入框防抖优化、多选框动画优化。</li>
</ul>
<p><strong>Modal 组件</strong></p>
<ul>
<li><code v-pre>Modal</code>组件空内容样式优化</li>
</ul>
<h2 id="_1-2-75" tabindex="-1"><a class="header-anchor" href="#_1-2-75"><span>1.2.75</span></a></h2>
<h4 id="feature-3" tabindex="-1"><a class="header-anchor" href="#feature-3"><span>Feature</span></a></h4>
<p><strong>Table 组件</strong></p>
<ul>
<li>新增<code v-pre>Table</code>组件分页条底部吸底支持数字传入。</li>
<li>优化<code v-pre>InputNumber</code>、<code v-pre>Button</code>组件的边框，<code v-pre>Card</code>、<code v-pre>Tabs</code>组件的圆角。</li>
</ul>
<h4 id="bug-fix" tabindex="-1"><a class="header-anchor" href="#bug-fix"><span>Bug Fix</span></a></h4>
<p><strong>Upload 组件</strong></p>
<ul>
<li>修复<code v-pre>Upload</code>组件超出限制后，上传按钮仍显示的问题。</li>
</ul>
<h2 id="_1-2-74" tabindex="-1"><a class="header-anchor" href="#_1-2-74"><span>1.2.74</span></a></h2>
<h4 id="feature-4" tabindex="-1"><a class="header-anchor" href="#feature-4"><span>Feature</span></a></h4>
<p><strong>Button 组件</strong></p>
<ul>
<li>修改<code v-pre>Button</code>组件默认按钮的颜色为白色。</li>
</ul>
<p><strong>SassPage 组件</strong></p>
<ul>
<li>新增<code v-pre>SassPage</code>组件。</li>
</ul>
<h2 id="_1-2-72" tabindex="-1"><a class="header-anchor" href="#_1-2-72"><span>1.2.72</span></a></h2>
<h4 id="feature-5" tabindex="-1"><a class="header-anchor" href="#feature-5"><span>Feature</span></a></h4>
<p><strong>Class UI 库</strong></p>
<ul>
<li><code v-pre>border-radius</code> 补充demo。</li>
</ul>
<h4 id="fix" tabindex="-1"><a class="header-anchor" href="#fix"><span>Fix</span></a></h4>
<p><strong>People 组件</strong></p>
<ul>
<li>修复<code v-pre>People</code>组件fetch组件引用类型问题。</li>
</ul>
<h2 id="_1-2-71" tabindex="-1"><a class="header-anchor" href="#_1-2-71"><span>1.2.71</span></a></h2>
<h4 id="fix-1" tabindex="-1"><a class="header-anchor" href="#fix-1"><span>Fix</span></a></h4>
<p><strong>Drawer 组件</strong></p>
<ul>
<li>修复<code v-pre>drawer</code>组件背景滚动锁定失效问题。</li>
</ul>
<p><strong>Table 组件</strong></p>
<ul>
<li>修复<code v-pre>table</code>组件在滚动状态时，border阴影显示异常的问题。</li>
</ul>
<p><strong>Class UI 库</strong></p>
<ul>
<li>调整 <code v-pre>.text-number-1-bold</code>、<code v-pre>.text-number-2-bold</code>、<code v-pre>.text-number-3-bold</code>、<code v-pre>.text-number-4-bold</code> 的 <code v-pre>line-height</code>为<code v-pre>24px</code>、<code v-pre>29px</code>、<code v-pre>38px</code>、<code v-pre>48px</code>。</li>
</ul>
<h2 id="_1-2-70" tabindex="-1"><a class="header-anchor" href="#_1-2-70"><span>1.2.70</span></a></h2>
<h4 id="feature-6" tabindex="-1"><a class="header-anchor" href="#feature-6"><span>Feature</span></a></h4>
<p><strong>Typography 组件</strong></p>
<ul>
<li>新增 <code v-pre>line-height</code> 变量， 新增 <code v-pre>line-height-default</code> 变量默认行高、新增 <code v-pre>line-height-1</code> 变量一倍行高。同时调整 <code v-pre>text-number-4-bold</code>、<code v-pre>text-number-3-bold</code>、<code v-pre>text-number-2-bold</code>、<code v-pre>text-number-1-bold</code> 行高为 <code v-pre>line-height-1</code>。</li>
<li>调整 <code v-pre>saas-header-nav</code>的<code v-pre>left-prefix</code>插槽的布局。</li>
<li>修复 <code v-pre>table</code> 在通过 <code v-pre>title</code> 函数自定义表头搜索时，无法搜索到 <code v-pre>title</code> 的问题。</li>
</ul>
<h2 id="_1-2-67" tabindex="-1"><a class="header-anchor" href="#_1-2-67"><span>1.2.67</span></a></h2>
<h4 id="feature-7" tabindex="-1"><a class="header-anchor" href="#feature-7"><span>Feature</span></a></h4>
<p><strong>MapSelect 组件</strong></p>
<ul>
<li>新增 <code v-pre>popupContainer</code> 属性，支持自定义弹窗容器。</li>
</ul>
<h4 id="fix-2" tabindex="-1"><a class="header-anchor" href="#fix-2"><span>Fix</span></a></h4>
<p><strong>Map 组件</strong></p>
<ul>
<li>修复 <code v-pre>geocoderHandler</code> 在 <code v-pre>google</code> 地图中无法正常使用的问题。</li>
<li>修复 <code v-pre>google</code> 地图根据ID获取地址详情失败的问题。</li>
</ul>
<h2 id="_1-2-65" tabindex="-1"><a class="header-anchor" href="#_1-2-65"><span>1.2.65</span></a></h2>
<h4 id="feature-8" tabindex="-1"><a class="header-anchor" href="#feature-8"><span>Feature</span></a></h4>
<p><strong>样式</strong></p>
<ul>
<li>新增 完善数字类型的字体样式，增加regular字体。</li>
</ul>
<h4 id="fix-3" tabindex="-1"><a class="header-anchor" href="#fix-3"><span>Fix</span></a></h4>
<p><strong>Table 组件</strong></p>
<ul>
<li>修改 TableColumn <code v-pre>v-if</code>无效的问题。</li>
<li>修改 Dropdown 按钮的样式问题。</li>
<li>调整 Button 次要按钮的禁用样式的清晰度。</li>
</ul>
<p><strong>Collapse 组件</strong></p>
<ul>
<li>修复 Collapse 组件 <code v-pre>key</code> 无法传入的问题。</li>
</ul>
<h2 id="_1-2-64" tabindex="-1"><a class="header-anchor" href="#_1-2-64"><span>1.2.64</span></a></h2>
<h4 id="feature-9" tabindex="-1"><a class="header-anchor" href="#feature-9"><span>Feature</span></a></h4>
<p><strong>主题</strong></p>
<ul>
<li>新增 全面适配所有组件的暗黑模式。</li>
<li>修改 将<code v-pre>成功色</code>映射关系统一调整为 green。green的色板调整为冷色调。</li>
</ul>
<p><strong>Table 组件</strong></p>
<ul>
<li>优化 针对 Table 组件自定义表头弹窗，进行文字溢出优化。当表头内容较长时，会出现tooltip进行提示。</li>
</ul>
<h4 id="fix-4" tabindex="-1"><a class="header-anchor" href="#fix-4"><span>Fix</span></a></h4>
<p><strong>Map 组件</strong></p>
<ul>
<li>修改 地图组件初始化无法打开弹窗的问题。</li>
</ul>
<h2 id="_1-2-61" tabindex="-1"><a class="header-anchor" href="#_1-2-61"><span>1.2.61</span></a></h2>
<h4 id="feature-10" tabindex="-1"><a class="header-anchor" href="#feature-10"><span>Feature</span></a></h4>
<p><strong>Card 组件</strong></p>
<ul>
<li>新增 <code v-pre>title-ellipsis</code> 属性，实现标题文本溢出时自动省略。</li>
<li>新增 <code v-pre>title-tooltip</code> 属性，实现标题文本溢出时，鼠标悬停时是否显示完整标题内容的提示。</li>
<li>新增 <code v-pre>description-ellipsis</code> 属性，实现描述文本溢出时自动省略。</li>
<li>新增 <code v-pre>description-tooltip</code> 实现描述文本溢出时，鼠标悬停时是否显示完整描述内容的提示。</li>
</ul>
<p><strong>Modal 组件</strong></p>
<ul>
<li>新增 <code v-pre>size</code> 属性，支持自定义弹窗尺寸 (small, medium, large)，提供更多布局选择。</li>
<li>新增最大高度限制，当弹窗内容高度超过视窗高度时，弹窗内容区域可滚动。</li>
</ul>
<p><strong>Drawer 组件</strong></p>
<ul>
<li>新增 <code v-pre>size</code> 属性，支持自定义弹窗尺寸 (small, medium, large)，提供更多布局选择。</li>
</ul>
<p><strong>Tree 组件</strong></p>
<ul>
<li>优化 <code v-pre>block-node</code> 样式，提升节点展示的视觉效果和用户体验。</li>
</ul>
<p><strong>Breadcrumb 面包屑组件</strong></p>
<ul>
<li>新增固定（sticky）功能，启用后背景色由透明自动切换为白色，确保导航栏在滚动时保持清晰可见。</li>
</ul>
<p><strong>Class UI 库</strong></p>
<ul>
<li>新增样式库示例（Demo），帮助开发者更直观地了解和使用各类样式。</li>
</ul>
<p><strong>指令</strong></p>
<ul>
<li>新增 <code v-pre>v-loading</code> 指令，方便在组件中集成加载状态显示。</li>
<li>新增 <code v-pre>v-tooltip</code> 指令，简化悬浮提示信息的添加与管理。</li>
</ul>
<h4 id="fix-5" tabindex="-1"><a class="header-anchor" href="#fix-5"><span>Fix</span></a></h4>
<p><strong>MapSelect 组件</strong></p>
<ul>
<li>修复初始化时 <code v-pre>modelValue</code> 仅包含经纬度导致回显失败的问题。</li>
<li>修复 <code v-pre>v-model</code> 绑定值为 <code v-pre>undefined</code> 时，偶尔不触发更新的问题。</li>
</ul>
<p><strong>Breadcrumb 组件</strong></p>
<ul>
<li>修复面包屑在特定情况下文本换行的问题。</li>
</ul>
<h4 id="breaking-change-1" tabindex="-1"><a class="header-anchor" href="#breaking-change-1"><span>Breaking Change</span></a></h4>
<p><strong>CardHeader 组件</strong></p>
<ul>
<li>插槽和属性 <code v-pre>subtitle</code> 重命名为 <code v-pre>description</code>。</li>
</ul>
<hr>
<h2 id="_1-2-54" tabindex="-1"><a class="header-anchor" href="#_1-2-54"><span>1.2.54</span></a></h2>
<h4 id="feature-11" tabindex="-1"><a class="header-anchor" href="#feature-11"><span>Feature</span></a></h4>
<ul>
<li>新增 <code v-pre>Spacing</code> --- 增加 1~64 所有尺寸的边距。</li>
</ul>
<hr>
<h2 id="_1-2-50" tabindex="-1"><a class="header-anchor" href="#_1-2-50"><span>1.2.50</span></a></h2>
<h4 id="feature-12" tabindex="-1"><a class="header-anchor" href="#feature-12"><span>Feature</span></a></h4>
<ul>
<li><strong>Empty 组件</strong>
<ul>
<li>新增默认图标尺寸属性。</li>
<li>修复图标尺寸不可调整的问题。</li>
<li>调整默认 SVG 样式以移除边框。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="_1-2-47" tabindex="-1"><a class="header-anchor" href="#_1-2-47"><span>1.2.47</span></a></h2>
<h4 id="feature-13" tabindex="-1"><a class="header-anchor" href="#feature-13"><span>Feature</span></a></h4>
<p><strong>Card 组件</strong></p>
<ul>
<li>新增 <code v-pre>bodyPadding</code> 属性，增加标准化适配。</li>
<li>新增 <code v-pre>header</code> 和 <code v-pre>actions</code> 属性。</li>
<li>新增 <code v-pre>loading</code> 属性。</li>
<li><code v-pre>header</code> 新增 <code v-pre>subtitle</code> 属性。</li>
</ul>
<p><strong>Tabs 组件</strong></p>
<ul>
<li>新增 <code v-pre>bodyPadding</code> 属性。</li>
</ul>
<p><strong>Modal 组件</strong></p>
<ul>
<li>新增 <code v-pre>bodyPadding</code> 属性。</li>
<li>修复组件弹出后页面出现双层滚动条的问题。</li>
</ul>
<p><strong>Descriptions 组件</strong></p>
<ul>
<li>自动减少底部边距。</li>
</ul>
<hr>
<h2 id="_1-2-41" tabindex="-1"><a class="header-anchor" href="#_1-2-41"><span>1.2.41</span></a></h2>
<h4 id="feature-14" tabindex="-1"><a class="header-anchor" href="#feature-14"><span>Feature</span></a></h4>
<p><strong>FilterForm 组件</strong></p>
<ul>
<li>表单的默认背景色设置为白色。</li>
</ul>
<p><strong>Table 组件</strong></p>
<ul>
<li>优化表格自带分页条底部多余间距问题。</li>
</ul>
<p><strong>Card 组件</strong></p>
<ul>
<li>自动减少未包含头部或顶部分割线情况下的间距。</li>
</ul>
<p><strong>Descriptions 组件</strong></p>
<ul>
<li>优化不同尺寸下的间距问题。</li>
</ul>
<p><strong>Breadcrumb 面包屑组件</strong></p>
<ul>
<li>优化默认样式。</li>
</ul>
<p><strong>样式库</strong></p>
<ul>
<li>新增工具类样式，包括边距设置等。</li>
</ul>
<h4 id="fix-6" tabindex="-1"><a class="header-anchor" href="#fix-6"><span>Fix</span></a></h4>
<p><strong>FilterForm 组件</strong></p>
<ul>
<li>修复记忆选项导致表单底部间距异常的问题。</li>
</ul>
<p><strong>Search 组件</strong></p>
<ul>
<li>修复搜索组件重置后无法重置搜索类型的问题。</li>
</ul>
<hr>
<h2 id="_1-2-3" tabindex="-1"><a class="header-anchor" href="#_1-2-3"><span>1.2.3</span></a></h2>
<h4 id="breaking-change-2" tabindex="-1"><a class="header-anchor" href="#breaking-change-2"><span>Breaking Change</span></a></h4>
<p><strong>Search 和 FilterForm 组件</strong></p>
<ul>
<li><code v-pre>model</code> 属性需通过 <code v-pre>v-model:model</code> 设置，才能同步 <code v-pre>model</code> 属性。</li>
</ul>
<p><strong>FilterForm 组件</strong></p>
<ul>
<li>重构，需参考 <code v-pre>demo</code> 和 <code v-pre>API</code> 进行调整。</li>
</ul>
<hr>
<h2 id="_1-1-3" tabindex="-1"><a class="header-anchor" href="#_1-1-3"><span>1.1.3</span></a></h2>
<h4 id="breaking-change-3" tabindex="-1"><a class="header-anchor" href="#breaking-change-3"><span>Breaking Change</span></a></h4>
<p><strong>Map 和 MapSelect 组件</strong></p>
<ul>
<li>事件 <code v-pre>init</code> 参数由 <code v-pre>{value: object, fixedValue: object}</code> 调整为 <code v-pre>scopeValue</code>，其中 <code v-pre>scopeValue</code> 为全量数据。</li>
<li>属性 <code v-pre>value</code> 调整为 <code v-pre>modelValue</code>，支持 <code v-pre>v-model</code> 双向绑定且类型不丢失。</li>
<li>移除属性 <code v-pre>style</code>，调整为 <code v-pre>mapStyle</code>。</li>
<li>事件 <code v-pre>init</code> 和 <code v-pre>change</code> 的参数限制在 <code v-pre>scopeValue</code> 范围内。</li>
</ul>
<h4 id="feature-15" tabindex="-1"><a class="header-anchor" href="#feature-15"><span>Feature</span></a></h4>
<ul>
<li>新增 <code v-pre>valueKeyAlias</code> 和 <code v-pre>valueKeyScope</code> 属性。</li>
<li>新增 <code v-pre>enableGisSearch</code> 属性。</li>
</ul>
</div></template>



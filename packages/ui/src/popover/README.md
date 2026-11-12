---
permalink: /components/popover/
---

# Popover 气泡卡片

SSR 限制：触发插槽内的同一节点同时使用 `v-for` 和 `v-memo` 时，服务端渲染可能报错。服务端渲染时请移除该插槽节点上的 `v-memo`；普通 `v-for` 仍可使用。 `content` 插槽也可能出现同样问题；服务端渲染时请移除该插槽节点上的 `v-memo`。

点击触发元素后展示结构化内容。Popover 可以包含按钮、表单和其他交互元素；纯文字说明使用 Tooltip。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 交互与控制

### 交互内容与状态保留

Popover 默认 `unmount-on-close="false"`，关闭后保留表单草稿。

<demo src="./__demos__/interactive.vue"></demo>

## 空内容

开启 `hide-empty` 时，无标题且正文仅包含注释或空白文本则隐藏面板，不修改 open 状态；标题或正文出现后自动显示。组件节点视为有内容。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容默认对齐阅读起点，弹层继承来源方向；逻辑 start/end 对齐随方向变化，显式 left/right 方位保持物理语义。

## API

### Popover Props

Popover 继承 Trigger 的定位、容器、受控状态和关闭策略。默认 `auto-fit-transform-origin=true`；未传 `animation-name` 时使用 Popover 自身动画。`content-class` 和 `content-style` 作用于内容面板，`popup-class` 和 `popup-style` 作用于外层定位节点。实例提供 `open`、`close`、`resize`、`allowClose`、`getReference`、`focusReference` 和 `setReference` 七个方法。打开时焦点保留在触发元素；面板是非模态内容，Tab 顺序取决于实际 DOM 挂载位置，包含交互控件时需安排可达的键盘路径。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| content | 正文 | `string` | — |
| trigger | 触发方式 | `TriggerEvent \| TriggerEvent[]`<br>`TriggerEvent: 'manual' \| 'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `click` |
| placement | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `TriggerPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom` |
| show-arrow | 是否显示箭头 | `boolean` | `true` |
| popup-offset | 沿方位主轴的距离 | `number` | `10` |
| unmount-on-close | 关闭后卸载内容；默认保留交互草稿 | `boolean` | `false` |
| close-on-click-reference | 再次点击触发元素时关闭 | `boolean` | `true` |

事件为 `update:open`、`open-change`、`open`、`opened`、`close`、`closed`、`click-outside`。插槽为 `default`、`title` 和 `content`。属性内容与插槽同时存在时插槽优先。

实际面板包含统一的 content/title/body 三层。触发元素通过 `aria-controls`、`aria-expanded` 与面板关联；外部 reference 和 SVG 同样支持。面板为普通 group，默认不声明 aria-haspopup；如果通过 reference-attrs 显式设置弹出类型，调用方需要确保与实际内容语义一致。

## 使用说明

无样式定位场景使用 Trigger。Popover 不提供 `defaultStyle`、`popoverClass` 或 `elevation`；通过 CSS 变量、`content-class` 或 `content-style` 定制外观。

### 配置说明

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

使用 Teleport 时，变量需放在实际 popup 的作用域中（例如通过 `popup-style`）；触发按钮上的变量不会自动继承到浮层。

## CSS Variables

Maple 暗色保留圆角 2px，阴影保留平台差异。内容与箭头共用背景和边框变量。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-popover-animation-duration` | `var(--c-sys-motion-duration-standard)` | `transition` |
| `--c-popover-arrow-z-index` | `1` | `z-index` |
| `--c-popover-background` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-popover-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-popover-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-popover-border-width` | `1px` | `border` |
| `--c-popover-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-popover-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-popover-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-popover-padding-horizontal` | `var(--c-sys-space-7)` | `padding` |
| `--c-popover-padding-vertical` | `var(--c-sys-space-6)` | `padding` |
| `--c-popover-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-popover-title-content-gap` | `var(--c-sys-space-2)` | `margin-top` |
| `--c-popover-title-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-popover-title-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-popover-title-text-color` | `var(--c-sys-color-content-primary)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-popover-background: var(--c-sys-color-surface-overlay);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

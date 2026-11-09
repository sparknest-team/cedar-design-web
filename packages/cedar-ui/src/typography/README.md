---
permalink: /components/typography/
---

# 排版 Typography

用于展示标题、段落、文本内容。

## 基础示例

### 基础用法

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 标题

展示不同级别的标题。

<demo src="./__demos__/title.vue"></demo>

### 文本

不同样式的文本。

<demo src="./__demos__/text.vue"></demo>

### 段落

文本段落样式。长文本推荐默认行高，短文本推荐 `spacing="close"`。

<demo src="./__demos__/paragraph.vue"></demo>

### 省略

在空间不足时省略多行文本内容。支持 JS 测量省略、CSS 省略、Tooltip / Popover 以及展开折叠。

<demo src="./__demos__/ellipsis.vue"></demo>

## 交互与控制

### 可交互

提供复制、编辑文本等功能。

<demo src="./__demos__/operations.vue"></demo>

## 生命周期与边界

### 测量与复制反馈生命周期

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

复制反馈使用现有 `copy-delay`（默认 3000ms），是交互反馈等待，不是 CSS 动效完成时间。重复复制替换旧等待；关闭复制、禁用或修改等待时长会清除当前反馈。停用／卸载取消反馈计时与省略测量 RAF，保留操作和旧回调不能继续写入；激活重新测量，不恢复旧任务。禁用态文字仍可测量省略，不允许复制／编辑／展开交互。省略关闭、展开或进入编辑会取消旧测量；完成后重放和测量重入不能覆盖新结果。

## API

### Typography Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 排版内容 | `-` |

### TypographyText Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| status | 文本语义状态 | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | 粗体 | `boolean` | `false` |
| mark | 添加标记样式 | `boolean \| { color: string }` | `false` |
| underline | 下划线样式 | `boolean` | `false` |
| delete | 删除线样式 | `boolean` | `false` |
| code | 代码块样式 | `boolean` | `false` |
| disabled | 禁用复制、编辑和展开按钮，保留文本及省略测量 | `boolean` | `false` |
| editable | 开启可编辑功能 | `boolean` | `false` |
| editing **(v-model)** | 是否在编辑状态 | `boolean` | `-` |
| default-editing | 默认的编辑状态 | `boolean` | `false` |
| edit-text **(v-model)** | 编辑的文字 | `string` | `-` |
| copyable | 开启复制功能 | `boolean` | `false` |
| copy-text | 复制的文字 | `string` | `-` |
| copy-delay | 复制成功反馈的显示时长（毫秒）；期间仍可再次复制 | `number` | `3000` |
| ellipsis | 自动溢出省略，具体参数配置看 [EllipsisConfig](#ellipsisconfig) | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | 编辑按钮 Tooltip 配置 | `object` | `-` |
| copy-tooltip-props | 拷贝按钮 Tooltip 配置 | `object` | `-` |

### TypographyText Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| edit-start | 开始编辑 | `-` |
| update:editing | 请求更新编辑状态 | `editing: boolean` |
| update:editText | 请求更新编辑文本 | `text: string` |
| change | 编辑内容变化 | `text: string` |
| edit-end | 编辑结束 | `-` |
| copy | 剪贴板写入成功后通知 | `text: string` |
| ellipsis | 省略变化事件 | `isEllipsis: boolean` |
| expand | 展开收起事件 | `expanded: boolean` |

### TypographyText Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 文本或富内容 | `-` |
| expand-node | 自定义展开和折叠按钮 | `expanded: boolean` |
| copy-icon | 自定义复制按钮图标 | `copied: boolean` |
| copy-tooltip | 自定义复制按钮的 tooltip 内容 | `copied: boolean` |

### TypographyTitle Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| status | 文本语义状态 | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | 粗体 | `boolean` | `false` |
| mark | 添加标记样式 | `boolean \| { color: string }` | `false` |
| underline | 下划线样式 | `boolean` | `false` |
| delete | 删除线样式 | `boolean` | `false` |
| code | 代码块样式 | `boolean` | `false` |
| disabled | 禁用复制、编辑和展开按钮，保留文本及省略测量 | `boolean` | `false` |
| editable | 开启可编辑功能 | `boolean` | `false` |
| editing **(v-model)** | 是否在编辑状态 | `boolean` | `-` |
| default-editing | 默认的编辑状态 | `boolean` | `false` |
| edit-text **(v-model)** | 编辑的文字 | `string` | `-` |
| copyable | 开启复制功能 | `boolean` | `false` |
| copy-text | 复制的文字 | `string` | `-` |
| copy-delay | 复制成功反馈的显示时长（毫秒）；期间仍可再次复制 | `number` | `3000` |
| ellipsis | 自动溢出省略，具体参数配置看 [EllipsisConfig](#ellipsisconfig) | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | 编辑按钮 Tooltip 配置 | `object` | `-` |
| copy-tooltip-props | 拷贝按钮 Tooltip 配置 | `object` | `-` |
| heading | 标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

### TypographyTitle Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| edit-start | 开始编辑 | `-` |
| update:editing | 请求更新编辑状态 | `editing: boolean` |
| update:editText | 请求更新编辑文本 | `text: string` |
| change | 编辑内容变化 | `text: string` |
| edit-end | 编辑结束 | `-` |
| copy | 剪贴板写入成功后通知 | `text: string` |
| ellipsis | 省略变化事件 | `isEllipsis: boolean` |
| expand | 展开收起事件 | `expanded: boolean` |

### TypographyTitle Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 文本或富内容 | `-` |
| expand-node | 自定义展开和折叠按钮 | `expanded: boolean` |
| copy-icon | 自定义复制按钮图标 | `copied: boolean` |
| copy-tooltip | 自定义复制按钮的 tooltip 内容 | `copied: boolean` |

### TypographyParagraph Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| status | 文本语义状态 | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | 粗体 | `boolean` | `false` |
| mark | 添加标记样式 | `boolean \| { color: string }` | `false` |
| underline | 下划线样式 | `boolean` | `false` |
| delete | 删除线样式 | `boolean` | `false` |
| code | 代码块样式 | `boolean` | `false` |
| disabled | 禁用复制、编辑和展开按钮，保留文本及省略测量 | `boolean` | `false` |
| editable | 开启可编辑功能 | `boolean` | `false` |
| editing **(v-model)** | 是否在编辑状态 | `boolean` | `-` |
| default-editing | 默认的编辑状态 | `boolean` | `false` |
| edit-text **(v-model)** | 编辑的文字 | `string` | `-` |
| copyable | 开启复制功能 | `boolean` | `false` |
| copy-text | 复制的文字 | `string` | `-` |
| copy-delay | 复制成功反馈的显示时长（毫秒）；期间仍可再次复制 | `number` | `3000` |
| ellipsis | 自动溢出省略，具体参数配置看 [EllipsisConfig](#ellipsisconfig) | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | 编辑按钮 Tooltip 配置 | `object` | `-` |
| copy-tooltip-props | 拷贝按钮 Tooltip 配置 | `object` | `-` |
| blockquote | 长引用 | `boolean` | `false` |
| spacing | 段落行高；长文本推荐默认行高，短文本推荐 `close` | `'default' \| 'close'` | `'default'` |

### TypographyParagraph Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| edit-start | 开始编辑 | `-` |
| update:editing | 请求更新编辑状态 | `editing: boolean` |
| update:editText | 请求更新编辑文本 | `text: string` |
| change | 编辑内容变化 | `text: string` |
| edit-end | 编辑结束 | `-` |
| copy | 剪贴板写入成功后通知 | `text: string` |
| ellipsis | 省略变化事件 | `isEllipsis: boolean` |
| expand | 展开收起事件 | `expanded: boolean` |

### TypographyParagraph Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 文本或富内容 | `-` |
| expand-node | 自定义展开和折叠按钮 | `expanded: boolean` |
| copy-icon | 自定义复制按钮图标 | `copied: boolean` |
| copy-tooltip | 自定义复制按钮的 tooltip 内容 | `copied: boolean` |

## Types

组件导出以下类型定义：

```ts
import type {
  TypographyInstance,
  TypographyParagraphInstance,
  TypographyTitleInstance,
  TypographyTextInstance,
  EllipsisConfig,
} from '@cedar-design/ui'
```
### EllipsisConfig

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| rows | 显示行数；非安全正整数或非有限值回退为 1 | `number` | `1` |
| expandable | 是否支持展开/折叠 | `boolean` | `false` |
| ellipsisStr | 省略号 | `string` | `'...'` |
| suffix | 后缀 | `string` | `-` |
| showTooltip | 配置省略时的弹出框 | `boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }` | `false` |
| css | 是否使用 CSS 省略（此模式暂不支持展开、自定义省略号和后缀） | `boolean` | `false` |

编辑时，输入法候选确认不会结束编辑；非组合输入的 Enter 或失焦结束编辑。

复制成功后才显示反馈并触发 `copy`；原生剪贴板失败时尝试浏览器回退，回退也失败则不显示成功反馈。重复点击可重试，迟到的旧结果不会覆盖新状态。

CSS 省略只裁剪文本内容；复制和编辑按钮仍显示在裁剪区域外。CSS 模式不支持展开、自定义省略号和后缀。

默认复制和省略测量读取已渲染插槽的可读文本，组件内部更新也会同步；不会为了提取文字另外挂载插槽组件。富内容按浏览器文本规则提取，不包含 HTML 或输入控件的当前值；需要精确内容时请提供 `copy-text`。

编辑时保留原组件的标签、`id`、类名和布局样式；输入框使用提供的 `aria-label` / `aria-labelledby`，未提供时使用本地化编辑名称。回车结束后在按键释放时将焦点返回编辑按钮；失焦或业务已转移焦点时不会抢回焦点。`v-model:editing` 与 `v-model:edit-text` 的更新事件由各排版组件转发。

根 Typography 提供 `default` 插槽。`TypographyEmits` 和 `TypographyContentSlots` 可从根入口或组件入口导入；`TypographySlots` 是根组件插槽类型。`edit-text` 只控制编辑框的值，展示文本仍由 `default` 插槽提供，通常将同一业务值绑定到两处。编辑器为单行输入。

`heading` 支持 1–6，非法值渲染为 h1；`copy-delay` 支持 0 至 2147483647 毫秒的有限数，非法值回退为 3000。`info` 和 `tertiary` 使用对应语义文字色；`default` 或未设置沿用普通文字色。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-typography-blockquote-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-typography-blockquote-border-left-color` | `var(--c-color-neutral-6)` | `border-inline-start` |
| `--c-typography-blockquote-border-width` | `var(--c-border-width-2)` | `border-inline-start` |
| `--c-typography-blockquote-padding-left` | `var(--c-spacing-4)` | `padding-inline-start` |
| `--c-typography-code-bg` | `var(--c-color-neutral-2)` | `background-color` |
| `--c-typography-code-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-typography-code-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-typography-code-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-edit-border-width` | `var(--c-border-width-1)` | `inset-inline-start`, `margin-bottom`, `margin-inline-end`, `margin-top` |
| `--c-typography-edit-padding-x` | `var(--c-spacing-6)` | `inset-inline-start`, `margin-inline-end` |
| `--c-typography-edit-padding-y` | `var(--c-spacing-2)` | `margin-bottom`, `margin-top` |
| `--c-typography-expand-margin-x` | `var(--c-spacing-2)` | `margin` |
| `--c-typography-expand-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-typography-expand-text-color-hover` | `rgb(var(--c-primary-5))` | `color` |
| `--c-typography-font-size-h1` | `var(--c-font-size-display-1)` | `font-size` |
| `--c-typography-font-size-h2` | `var(--c-size-8)` | `font-size` |
| `--c-typography-font-size-h3` | `var(--c-size-7)` | `font-size` |
| `--c-typography-font-size-h4` | `var(--c-font-size-title-3)` | `font-size` |
| `--c-typography-font-size-h5` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-typography-font-size-h6` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-typography-heading-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-typography-heading-margin-bottom` | `0` | `margin-bottom` |
| `--c-typography-heading-margin-top` | `0` | `margin-top` |
| `--c-typography-icon-copy-bg` | `transparent` | `background-color` |
| `--c-typography-icon-copy-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-typography-icon-copy-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-copy-color-copied` | `var(--c-sys-color-content-success)` | `color` |
| `--c-typography-icon-copy-color-hover` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-edit-bg` | `transparent` | `background-color` |
| `--c-typography-icon-edit-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-typography-icon-edit-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-edit-color-hover` | `var(--c-color-text-2)` | `color` |
| `--c-typography-list-item-margin-left` | `var(--c-spacing-8)` | `margin-inline-start` |
| `--c-typography-operation-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-typography-operation-margin-left` | `var(--c-spacing-1)` | `margin-inline-start` |
| `--c-typography-operation-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-typography-paragraph-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-typography-paragraph-line-height-close` | `1.3` | `line-height` |
| `--c-typography-text-bg-mark` | `rgb(var(--c-yellow-4))` | `background-color` |
| `--c-typography-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-typography-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-typography-text-color-error` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-typography-text-color-info` | `var(--c-sys-color-content-info)` | `color` |
| `--c-typography-text-color-primary` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-typography-text-color-secondary` | `var(--c-color-text-2)` | `color` |
| `--c-typography-text-color-success` | `var(--c-sys-color-content-success)` | `color` |
| `--c-typography-text-color-tertiary` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-typography-text-color-warning` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-typography-text-font-weight-bold` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-typography-text-margin-code-horizontal` | `var(--c-spacing-1)` | `margin` |
| `--c-typography-text-padding-code-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-typography-text-padding-code-vertical` | `var(--c-spacing-1)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-typography-blockquote-border-left-color: var(--c-color-neutral-6);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

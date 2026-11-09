---
permalink: /components/alert/
---

# Alert

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基础示例

### 基础用法

展现需要关注的信息，适用于简短的警告提示。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观配置对比

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 视觉变体

`variant` 支持 `standard`（默认，浅色填充 + 描边）、`tonal`（浅色填充无描边）、`outline`（透明背景 + 描边）。

#### 外观组合

适用于提示信息的强调程度。调整变体、状态，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

#### 提示类型

警告提示有 `info`、`success`、`warning`、`danger`、`default` 五种类型。`default` 类型下默认不展示图标，可通过 `#icon` 插槽自定义。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

## 内容与展示

### 标题、对齐与通栏

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 警告提示的标题 | 标题、对齐与通栏、操作项 |
| `status` | 警告提示的类型 | 标题、对齐与通栏、隐藏图标 |
| `center` | 内容是否居中显示 | 标题、对齐与通栏 |
| `banner` | 是否作为顶部公告使用（去除边框和圆角） | 标题、对齐与通栏 |
| `show-icon` | 是否展示图标 | 隐藏图标 |
| `closable` | 是否展示关闭按钮 | 操作项 |
<!-- demo-config-notes:end -->

比较标题层级、内容居中与通栏布局。通栏用于页面级提示；操作和关闭能力另见后续示例。

<details>
<summary>配置说明与使用限制</summary>

#### 提示标题

通过设置 `title` 可以给警告提示添加标题。

#### 居中

通过设置 `center`，内容居中显示。

#### 顶部公告

通过设置 `banner`，可将警告提示作为顶部公告使用（去除边框和圆角）。

</details>

<demo src="./__demos__/content-comparison.vue"></demo>

### 隐藏图标

通过设置 `:show-icon="false"` 来隐藏图标。

<demo src="./__demos__/show-icon.vue"></demo>

### 操作项

通过 `#action` 插槽自定义操作按钮。

<demo src="./__demos__/action.vue"></demo>

## 自定义与插槽

### 自定义图标

通过 `#icon` 插槽自定义前置图标。

<demo src="./__demos__/custom-icon.vue"></demo>

## 交互与控制

### 关闭入口与自定义图标

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `closable` | 是否展示关闭按钮 | 关闭入口与自定义图标 |
| `status` | 警告提示的类型 | 关闭入口与自定义图标 |
<!-- demo-config-notes:end -->

分别操作默认与自定义关闭入口，比较相同关闭能力的呈现方式。

<details>
<summary>配置说明与使用限制</summary>

#### 可关闭

关闭按钮支持点击、Space 与 Enter。close 表示开始关闭，closed 在退出动画结束后触发；若业务在 close 中直接卸载组件，就不能继续观察该实例的动画结束。每个 Alert 独立关闭；需要重开时由业务以新实例重建，不代表旧实例的内部可见状态自动恢复。

通过设置 `closable`，可开启关闭按钮。

#### 自定义关闭图标

指定 `close-icon` slot，自定义关闭元素。

</details>

<demo src="./__demos__/dismiss-comparison.vue"></demo>

## API

### Alert Props

| 属性      | 说明                                                                  | 类型                                                | 默认值       |
| --------- | --------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| status | 警告提示的类型                                                        | `'info' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `'info'`     |
| variant   | 视觉变体                                                              | `'standard' \| 'tonal' \| 'outline'`               | `'standard'` |
| color     | 自定义背景色（覆盖 type 派生背景）                                    | `string`                                            | -            |
| title     | 警告提示的标题                                                        | `string`                                            | -            |
| message   | 内容文本（亦可使用默认插槽）                                          | `string`                                            | -            |
| show-icon | 是否展示图标                                                          | `boolean`                                           | `true`       |
| closable  | 是否展示关闭按钮                                                      | `boolean`                                           | `false`      |
| banner    | 是否作为顶部公告使用（去除边框和圆角）                                | `boolean`                                           | `false`      |
| center    | 内容是否居中显示                                                      | `boolean`                                           | `false`      |
| elevation | 阴影层级，可选 `true` / `false` 或 `0-24`                             | `boolean \| number`                       | `false`      |

### Alert Events

| 事件名      | 说明               | 参数                          |
| ----------- | ------------------ | ----------------------------- |
| close       | 点击关闭按钮时触发 | `(event: MouseEvent) => void` |
| closed | 关闭动画结束后触发 | -                             |

### Alert Slots

| 插槽名     | 说明     | 参数 |
| ---------- | -------- | ---- |
| default    | 内容     | -    |
| icon       | 图标     | -    |
| title      | 标题     | -    |
| action     | 操作项   | -    |
| close-icon | 关闭图标 | -    |

## Types

组件导出以下类型定义：

```ts
import type {
  AlertInstance,
  AlertProps,
  AlertStatus,
  AlertVariant,
} from '@cedar-design/ui'
```

## 使用说明

`type="default"` 不渲染内置图标；需要图标时用 `#icon`。



关闭按钮支持键盘操作；close 只触发一次，closed 在离场动画完成后触发。

### 关闭名称与投影类型

关闭入口的可访问名称使用通用语言词条 `common.close`，随当前语言作用域响应式更新；`close-icon` 仅替换图形。Cedar 通过 ConfigProvider 的 `locale.common.close` 定制，Maple 通过 LocaleProvider 语言包的 `'common.close'` 词条定制。

`elevation` 只接受布尔值或数字；数字层级请使用 `:elevation="4"`，字符串 `elevation="4"` 不属于公开类型。键盘关闭与点击统一发出 MouseEvent，`closed` 仍在退出动画结束后通知。

## CSS Variables

参见 `style/token.less`，所有变量以 `--c-alert-` 为前缀。覆盖示例：

```css
:root {
  --c-alert-padding-vertical: 12px;
  --c-alert-padding-horizontal: 20px;
}
```

彩色标题、正文、图标及 outline 描边使用可读 system content。standard 与 tonal 使用同一第 1 阶浅底，前者额外带弱装饰描边；默认标题为 content-primary，正文、图标为 content-secondary。content 变量同时控制根容器继承色，关闭图标及未显式设色的操作内容跟随它。Maple 暗色继承同一套颜色，但保留原有几何覆盖（内边距 16px、图标 22px、图标/关闭间距 12px、正文行高 1.5）。color 仅改背景，调用方须同时验证前景对比度。下表为 :root 默认值，不是主题覆盖值。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-alert-action-margin-left` | `var(--c-sys-space-5)` | `margin-inline-start` |
| `--c-alert-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-alert-border-width` | `1px` | `border` |
| `--c-alert-close-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-alert-close-margin-left` | `var(--c-sys-space-4)` | `margin-inline-start` |
| `--c-alert-font-size-content` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-alert-font-size-title` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-alert-font-weight-title` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-alert-icon-margin-right` | `var(--c-sys-space-4)` | `margin-inline-end` |
| `--c-alert-icon-size` | `16px` | `font-size` |
| `--c-alert-line-height` | `1.5715` | `line-height` |
| `--c-alert-line-height-title` | `1.5` | `line-height` |
| `--c-alert-outline-danger-border` | `var(--c-sys-color-content-danger)` | `border-color` |
| `--c-alert-outline-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-default-border` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-alert-outline-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-outline-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-outline-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-outline-info-border` | `var(--c-sys-color-content-info)` | `border-color` |
| `--c-alert-outline-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-success-border` | `var(--c-sys-color-content-success)` | `border-color` |
| `--c-alert-outline-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-warning-border` | `var(--c-sys-color-content-warning)` | `border-color` |
| `--c-alert-outline-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-outline-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-outline-warning-title` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-padding-horizontal` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-padding-horizontal-with-title` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-padding-vertical` | `var(--c-sys-space-4)` | `padding` |
| `--c-alert-padding-vertical-with-title` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-standard-danger-bg` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-alert-standard-danger-border` | `rgb(var(--c-danger-3))` | `border-color` |
| `--c-alert-standard-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-default-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-alert-standard-default-border` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-alert-standard-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-standard-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-standard-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-standard-info-bg` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-alert-standard-info-border` | `rgb(var(--c-blue-3))` | `border-color` |
| `--c-alert-standard-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-success-bg` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-alert-standard-success-border` | `rgb(var(--c-success-3))` | `border-color` |
| `--c-alert-standard-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-warning-bg` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-alert-standard-warning-border` | `rgb(var(--c-warning-3))` | `border-color` |
| `--c-alert-standard-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-standard-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-standard-warning-title` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-title-margin-bottom` | `var(--c-sys-space-2)` | `margin-bottom` |
| `--c-alert-tonal-danger-bg` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-alert-tonal-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-default-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-alert-tonal-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-tonal-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-tonal-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-tonal-info-bg` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-alert-tonal-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-success-bg` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-alert-tonal-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-warning-bg` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-alert-tonal-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-tonal-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-tonal-warning-title` | `var(--c-sys-color-content-warning)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-alert-border-radius: var(--c-sys-radius-md);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 动效

内置动效遵循 `prefers-reduced-motion: reduce`；减少动效不会阻止加载状态或关闭事件更新。

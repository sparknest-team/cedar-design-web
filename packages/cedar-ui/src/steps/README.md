---
permalink: /components/steps/
---

# Steps

明示任务流程和当前完成程度，引导用户按照步骤完成任务。

## 基础示例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观组合

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `type` | 步骤条的类型 | 类型与状态对比 |
| `status` | 当前步骤状态 | 类型与状态对比 |
| `changeable` | 是否可以点击切换步骤 | 类型与状态对比 |
<!-- demo-config-notes:end -->

适用于多步骤流程的当前状态。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 类型与状态对比

四种类型共享当前步骤和状态。先点击步骤或选择 1–3，再切换 wait、process、finish、error，观察 default、arrow、dot、navigation 同步更新；status 改变当前节点的语义状态，不改变步骤序号。标题与描述按页面语言显示，方便在手机宽度内对比。

<details>
<summary>配置说明与使用限制</summary>

#### 四种外观类型

`type` 当前有 `default`（编号）、`arrow`（箭头）、`dot`（圆点）、`navigation`（导航）四种外观；`status` 独立表示流程状态。箭头和导航类型仅支持水平方向。切换当前步骤或点击步骤，对比相同进度下的外观。现有 `type` 保持兼容。

#### 步骤错误

通过设置`status="error"`来展示错误状态。

#### 箭头步骤条

通过设置`type="arrow"`，可以使用箭头类型的步骤条，**注意**，仅支持水平步骤条。

#### 点状步骤条

通过设置`type="dot"`，可以使用点状类型的步骤条。此模式没有small尺寸

#### 导航步骤条

通过设置`type="navigation"`，可以使用导航类型的步骤条。

</details>

<demo src="./__demos__/types.vue"></demo>

## 布局与排列

### 内容放置位置

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 当前步骤状态 | 内容放置位置、竖直步骤条 |
| `content-placement` | 正文相对步骤节点的方位，可选 right 或 bottom，默认 right；dot 类型按横纵轴推导，navigation 固定 right | 内容放置位置 |
| `orientation` | 步骤流程的横纵轴向，默认 horizontal；arrow 和 navigation 类型固定横向 | 竖直步骤条 |
<!-- demo-config-notes:end -->

通过设置 `content-placement` 可以改变内容相对节点的位置，可选 `right`（默认）和 `bottom`。

<demo src="./__demos__/content-placement.vue"></demo>

### 竖直步骤条

竖直方向的步骤条。

<demo src="./__demos__/vertical.vue"></demo>

## 内容与展示

### 描述信息

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 当前步骤状态 | 描述信息、隐藏连接线 |
| `show-line` | 是否显示连接线 | 隐藏连接线 |
<!-- demo-config-notes:end -->

通过设置 `description` 属性，可以在每个步骤下方添加描述信息。

<demo src="./__demos__/description.vue"></demo>

### 隐藏连接线

通过设置`show-line="false"`可以使用无连接线模式。

<demo src="./__demos__/line-less.vue"></demo>

## 自定义与插槽

### 自定义图标

通过`#icon`插槽可以自定义节点图标

<demo src="./__demos__/custom-icon.vue"></demo>

## 交互与控制

### 可切换步骤条

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `changeable` | 是否可以点击切换步骤 | 可切换步骤条 |
| `status` | 当前步骤状态 | 可切换步骤条 |
<!-- demo-config-notes:end -->

设置`changeable`开启点击切换步骤。

<demo src="./__demos__/changeable.vue"></demo>

## 触发与定位

### 弹层定位

content-placement 统一的是方位词汇和拼写，不要求所有组件开放相同集合。Steps 仅实现 right/bottom；dot 和 navigation 类型有各自推导规则，不为统一添加尚未实现的方位。

## API

主值使用普通 `v-model`：`modelValue` 表示当前步骤序号，从 1 开始。`defaultValue` 仅在创建时初始化非受控状态，之后修改不会重置当前值；初始化不触发 `update:modelValue`。提供 `modelValue` 时由父级控制，以受控值为准。

### Steps Props

| 属性                 | 说明                     | 类型                                                  | 默认值         |
| -------------------- | ------------------------ | ----------------------------------------------------- | -------------- |
| type                 | 步骤条的类型             | `'default'` \| `'arrow'` \| `'dot'` \| `'navigation'` | `'default'`    |
| orientation            | 步骤流程的横纵轴向，默认 horizontal；arrow 和 navigation 类型固定横向 | `'horizontal'` \| `'vertical'`                        | `'horizontal'` |
| content-placement    | 正文相对步骤节点的方位，可选 right 或 bottom，默认 right；dot 类型按横纵轴推导，navigation 固定 right | `'right'` \| `'bottom'`                               | `'right'`      |
| model-value(**v-model**) | 当前步骤数               | `number`                                              | `-`            |
| default-value      | 默认的步骤数(非受控状态) | `number`                                              | `1`            |
| status               | 当前步骤状态             | `'wait'` \| `'process'` \| `'finish'` \| `'error'`    | `'process'`    |
| show-line            | 是否显示连接线           | `boolean`                                             | `true`         |
| size                 | 步骤条尺寸               | `'sm'` \| `'md'`                                     | `'md'`         |
| changeable           | 是否可以点击切换步骤     | `boolean`                                             | `false`        |

步骤值采用非负安全整数：0 时自动状态均为等待，大于步骤数时自动状态均为完成，单项 status 仍可覆盖；无效数值在开发环境提示并按 1 展示。arrow 类型不渲染 node 插槽，dot 类型不渲染 icon 插槽；默认槽中的文本和原生装饰节点不占步骤编号。

### Steps Events

| 事件名              | 说明                           | 参数                         |
| ------------------- | ------------------------------ | ---------------------------- |
| change              | 步骤数发生改变时触发（需开启 `changeable`） | current:`number`<br/>previous:`number`<br/>ev:`Event` |
| update:modelValue      | `v-model` 同步         | step:`number`                |

### Steps Slots

| 插槽名      | 说明         |
| ----------- | ------------ |
| default     | 步骤内容     |
| finish-icon | 完成状态图标 |
| error-icon  | 错误状态图标 |

### Step Props

| 属性        | 说明         | 类型                                               | 默认值  |
| ----------- | ------------ | -------------------------------------------------- | ------- |
| title       | 步骤的标题   | `string`                                           | `-`     |
| description | 步骤的描述   | `string`                                           | `-`     |
| status      | 步骤的状态   | `'wait'` \| `'process'` \| `'finish'` \| `'error'` | `-`     |
| disabled    | 是否禁用步骤 | `boolean`                                          | `false` |

### Step Slots

| 插槽名      | 说明 | 参数                              |
| ----------- | ---- | --------------------------------- |
| default     | 标题 | `index`、`status`、`active`、`disabled` |
| title       | 标题 | `index`、`status`、`active`、`disabled` |
| node        | 节点 | `index`、`status`、`active`、`disabled` |
| icon        | 图标 | `index`、`status`、`active`、`disabled` |
| description | 描述 | `index`、`status`、`active`、`disabled` |

## Types

组件导出以下类型定义

```ts
import type {
  StepsProps,
  StepProps,
  StepsType,
  StepStatus,
  StepsSize,
  StepsContentPlacement,
  StepsInstance,
  StepsStepInstance,
} from '@cedar-design/ui'
```

## 使用说明





`active` 只表示当前步骤序号（从 1 开始）是否对应 modelValue；与 status（wait/process/finish/error）分开。当前步骤即使为 error，active 仍为 true；焦点、悬停不会改变 active。

## 阅读方向与键盘交互

Steps 继承最近的 `dir="ltr"` 或 `dir="rtl"`，支持运行时切换。横向步骤、连接线和方向箭头随阅读方向排列，纵向步骤仍从上到下；序号、进度值和自定义图标内容保持原意。

`changeable` 开启时，左右键按当前阅读方向移动焦点，纵向使用上下键；Home/End 聚焦首尾可用步骤，禁用项会被跳过。Enter/Space 确认步骤；移动焦点和切换方向不会触发进度更新。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-steps-arrow-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-finish` | `var(--c-sys-color-state-selected)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-process` | `var(--c-sys-color-content-brand)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-wait` | `var(--c-sys-color-surface-muted)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-description-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-description-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-description-margin-top` | `0` | `margin-top` |
| `--c-steps-arrow-item-gap` | `var(--c-spacing-2)` | `margin-inline-end` |
| `--c-steps-arrow-item-title-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-arrow-item-title-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-arrow-size-md-title-padding-left` | `var(--c-spacing-7)` | `padding-inline-start` |
| `--c-steps-arrow-size-sm-title-padding-left` | `var(--c-spacing-8)` | `padding-inline-start` |
| `--c-steps-changeable-hover-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-steps-circle-horizontal-item-description-margin-top` | `var(--c-spacing-1)` | `margin-top` |
| `--c-steps-circle-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-circle-item-bg-finish` | `var(--c-sys-color-state-selected)` | `background-color` |
| `--c-steps-circle-item-bg-process` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-circle-item-bg-wait` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-steps-circle-item-border-color-error` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-finish` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-process` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-wait` | `transparent` | `border` |
| `--c-steps-circle-item-description-color-error` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-process` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-steps-circle-item-icon-gap` | `var(--c-spacing-6)` | `inset-inline-start`, `margin-inline-end`, `padding-inline-end` |
| `--c-steps-circle-item-icon-text-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-circle-item-icon-text-color-finish` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-steps-circle-item-icon-text-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-circle-item-icon-text-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-tail-color-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-circle-item-tail-color-process` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-circle-item-tail-color-wait` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-steps-circle-item-tail-size` | `var(--c-border-width-1)` | `height`, `inset-inline-start`, `top`, `width` |
| `--c-steps-circle-item-title-color-error` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-process` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-circle-tail-hack-width` | `5000px` | `width` |
| `--c-steps-circle-vertical-item-description-margin-top` | `var(--c-spacing-1)` | `margin-top` |
| `--c-steps-circle-vertical-tail-padding-extra` | `var(--c-spacing-3)` | `padding` |
| `--c-steps-direction-horizontal-description-width` | `var(--c-size-35)` | `max-width` |
| `--c-steps-dot-horizontal-item-description-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-horizontal-item-title-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-dot-item-bg-finish` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-dot-item-bg-process` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-dot-item-bg-wait` | `var(--c-sys-color-content-secondary)` | `background-color` |
| `--c-steps-dot-item-border-color-error` | `var(--c-sys-color-content-danger)` | `border-color` |
| `--c-steps-dot-item-border-color-finish` | `var(--c-sys-color-content-brand)` | `border-color` |
| `--c-steps-dot-item-border-color-process` | `var(--c-sys-color-content-brand)` | `border-color` |
| `--c-steps-dot-item-border-color-wait` | `var(--c-sys-color-content-secondary)` | `border-color` |
| `--c-steps-dot-item-description-color-error` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-process` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-steps-dot-item-icon-gap` | `var(--c-spacing-2)` | `inset-inline-start`, `margin-inline-end`, `padding-top` |
| `--c-steps-dot-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-dot-item-icon-size)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-dot-item-icon-size` | `var(--c-size-2)` | `height`, `inset-inline-start`, `margin-inline-end`, `margin-inline-start`, `margin-top`, `padding-top`, `top`, `width` |
| `--c-steps-dot-item-icon-size-active` | `var(--c-spacing-5)` | `height`, `margin-inline-start`, `margin-top`, `width` |
| `--c-steps-dot-item-tail-color-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-dot-item-tail-color-process` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-dot-item-tail-color-wait` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-steps-dot-item-tail-size` | `var(--c-border-width-1)` | `height`, `top` |
| `--c-steps-dot-item-title-color-error` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-process` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-dot-vertical-item-description-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top-active` | `calc(var(--c-steps-dot-vertical-item-dot-margin-top) - (var(--c-steps-dot-item-icon-size-active) - var(--c-steps-dot-item-icon-size)))` | `margin-top` |
| `--c-steps-dot-vertical-item-icon-margin-right` | `var(--c-spacing-7)` | `margin-inline-end` |
| `--c-steps-dot-vertical-tail-padding-bottom` | `var(--c-spacing-1)` | `padding-bottom` |
| `--c-steps-dot-vertical-tail-padding-top-extra` | `var(--c-spacing-2)` | `padding-top` |
| `--c-steps-label-vertical-content-width` | `100%` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-navigation-arrow-color` | `var(--c-sys-color-content-secondary)` | `border` |
| `--c-steps-navigation-arrow-line-width` | `var(--c-border-width-2)` | `border` |
| `--c-steps-navigation-arrow-right` | `30px` | `inset-inline-end` |
| `--c-steps-navigation-arrow-size` | `var(--c-spacing-3)` | `height`, `width` |
| `--c-steps-navigation-arrow-spacing-right` | `var(--c-spacing-5)` | `padding-inline-end` |
| `--c-steps-navigation-arrow-top` | `var(--c-spacing-5)` | `top` |
| `--c-steps-navigation-content-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-steps-navigation-description-padding-right` | `var(--c-spacing-8)` | `padding-inline-end` |
| `--c-steps-navigation-ink-bg` | `var(--c-sys-color-content-brand)` | `background-color` |
| `--c-steps-navigation-ink-height` | `var(--c-border-width-2)` | `height` |
| `--c-steps-navigation-ink-spacing-left` | `var(--c-spacing-none)` | `inset-inline-start` |
| `--c-steps-navigation-ink-spacing-right` | `30px` | `inset-inline-end` |
| `--c-steps-navigation-margin-right` | `var(--c-spacing-10)` | `margin-inline-end` |
| `--c-steps-navigation-padding-left` | `var(--c-spacing-8)` | `padding-inline-start` |
| `--c-steps-node-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-size-md` | `var(--c-size-7)` | `height`, `inset-inline-start`, `line-height`, `margin-inline-start`, `margin-top`, `padding`, `padding-inline-end`, `top`, `width` |
| `--c-steps-size-md-arrow` | `var(--c-size-18)` | `border-bottom`, `border-inline-start`, `border-top`, `height`, `inset-inline-end`, `padding-inline-start` |
| `--c-steps-size-md-description-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-steps-size-md-icon-font-size` | `var(--c-size-4)` | `font-size` |
| `--c-steps-size-md-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-md)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-size-md-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-steps-size-sm` | `var(--c-size-6)` | `height`, `inset-inline-start`, `line-height`, `margin-inline-start`, `padding`, `padding-inline-end`, `top`, `width` |
| `--c-steps-size-sm-arrow` | `var(--c-size-10)` | `border-bottom`, `border-inline-start`, `border-top`, `height`, `inset-inline-end`, `padding-inline-start` |
| `--c-steps-size-sm-description-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-steps-size-sm-icon-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-steps-size-sm-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-sm)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-size-sm-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-steps-transition-duration-1` | `var(--c-transition-duration-1)` | `transition` |
| `--c-steps-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-steps-vertical-item-min-height` | `90px` | `min-height` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-steps-arrow-item-description-color-error: var(--c-sys-color-surface-default);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

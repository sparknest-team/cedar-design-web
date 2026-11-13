---
permalink: /components/calendar/
---

# Calendar

用于展示月历或年历，并支持单日期选择、自定义日期内容和受控状态。表单中的日期输入请使用 Date，带选择面板的复杂选择请使用 DatePicker，日程编排请使用 Scheduler。

`allow-select=false` 禁止选择日期并禁用“今天”按钮；前后翻页仍可使用，且不会因此更新选中值。

`day-start-of-week`、`is-week` 和 `modes` 可动态更新。使用受控 `mode` 时，内置切换发出 `update:mode`，父级决定是否接受；`default-mode` 仅设置非受控初始模式。

`panel` 使用紧凑视图：年视图显示月份选项，月视图显示紧凑日期。`panel-width` 以像素设置宽度并支持动态更新；`panel-today-btn` 显示底部“今天”，选择仍受 `allow-select` 控制。

键盘可通过 Tab 进入日期区域，方向键移动焦点，Enter 或空格选择；移动焦点不会改变选中值。紧凑年面板按月份移动，禁用选择时仍可浏览。

默认插槽用于月视图和完整年视图中的日期，接收 `year`、`month`、`date`；紧凑年面板显示月份选项，不渲染日期插槽。选择日期或“今天”会发出 `change`、`update:modelValue` 和 `panel-change`；翻页和切换年月会发出 `panel-change`。受控模式切换发出 `update:mode`。

受控 `model-value` 的时间值变化时，视图定位到新日期；仅翻页浏览或重新传入相同时间值不会重置视图。外部更新不额外发出 `panel-change`。

## 基础示例

### 基础用法

展示并选择日期。

<demo src="./__demos__/basic.vue"></demo>

## 视图与日期展示

### 月视图与年视图

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `mode` | 模式 | 月视图与年视图 |
| `modes` | 显示的模式 | 月视图与年视图 |
| `day-start-of-week` | 一周开始日 | 一周起始与周序号 |
| `is-week` | 是否显示周序号 | 一周起始与周序号 |
<!-- demo-config-notes:end -->

使用 `mode` 控制视图。未传入 `mode` 时，也可以通过头部的模式切换器改变内部视图。

<demo src="./__demos__/modes.vue"></demo>

### 一周起始与周序号

`day-start-of-week` 控制星期排列，`is-week` 在日期前显示周序号。

<demo src="./__demos__/week-options.vue"></demo>

## 交互与内容定制

### 受控状态与事件

通过 `v-model` 从外部设置日期，并通过 `change`、`panel-change` 区分日期选择和面板翻页。

<demo src="./__demos__/controlled.vue"></demo>

### 自定义日期单元格

默认插槽可在日期数字下方展示标记、摘要等轻量内容。点击自定义内容所在单元格仍会选择日期。

<demo src="./__demos__/custom-cell.vue"></demo>

### 自定义头部标题

`header` 插槽替换中间标题，上一页、下一页、今天和模式切换仍由 Calendar 管理。

<demo src="./__demos__/custom-header.vue"></demo>

## API

### Calendar Props

| 参数名                    | 描述                 | 类型                    |       默认值        |
| ------------------------- | -------------------- | ----------------------- | :-----------------: |
| model-value **(v-model)** | 绑定值               | `date`                  |         `-`         |
| default-value             | 默认值（非受控状态） | `date`                  |         `-`         |
| allow-select | 是否允许选择日期 | `boolean` | `true` |
| panel | 是否使用紧凑面板 | `boolean` | `false` |
| panel-width | 紧凑面板宽度，单位为像素 | `number` | `undefined` |
| panel-today-btn | 是否显示面板底部今天按钮 | `boolean` | `false` |
| mode                      | 模式                 | `'month' \| 'year'`     |         `-`         |
| default-mode              | 默认模式             | `'month' \| 'year'`     |      `'month'`      |
| modes                     | 显示的模式           | `('month' \| 'year')[]` | `['month', 'year']` |
| day-start-of-week         | 一周开始日           | `0 \| 1`                |         `0`         |
| is-week                   | 是否显示周序号       | `boolean`                |       `false`       |

### Calendar Events

| 事件名       | 描述                 | 参数         |
| ------------ | -------------------- | ------------ |
| change       | 选择的日期改变时触发 | date: `Date` |
| update:mode | 请求切换显示模式 | mode: `'month' \| 'year'` |
| panel-change | 日期面板改变时触发   | date: `Date` |

### Calendar Slots

| 插槽名  |       描述       | 参数                                                | 版本   |
| ------- | :--------------: | --------------------------------------------------- | :----- |
| header  |  自定义头部内容  | year: `number`<br>month: `number`                   | 2.53.0 |
| default | 自定义单元格内容 | year: `number`<br>month: `number`<br>date: `number` | 2.53.0 |

## Types

组件导出以下类型定义

```ts
import type { CalendarInstance } from "@cedar-design/ui-vue";
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-calendar-bg-cell-disabled` | `var(--c-color-fill-1)` | `background-color` |
| `--c-calendar-bg-cell-hover-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-bg-cell-hover-range-boundary` | `var(--c-color-primary-light-2)` | `background-color` |
| `--c-calendar-bg-cell-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-bg-cell-range-boundary` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-bg-circle-selected` | `rgb(var(--c-primary-6))` | `background-color`, `border` |
| `--c-calendar-bg-switch-icon` | `var(--c-color-bg-5)` | `background-color` |
| `--c-calendar-bg-switch-icon-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-calendar-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-calendar-box-shadow` | `var(--c-color-primary-light-3)` | `box-shadow` |
| `--c-calendar-cell-text-in-view` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-cell-text-not-in-view` | `var(--c-color-text-4)` | `color` |
| `--c-calendar-cell-text-selected` | `var(--c-color-white)` | `color` |
| `--c-calendar-cell-today-border-color` | `var(--c-sys-color-action-primary)` | `border` |
| `--c-calendar-date-circle-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-date-circle-size` | `var(--c-size-7)` | `height`, `width` |
| `--c-calendar-date-content-height` | `70px` | `height` |
| `--c-calendar-date-padding` | `var(--c-spacing-5)` | `padding` |
| `--c-calendar-date-value-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-calendar-date-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-header-height` | `var(--c-size-7)` | `height`, `line-height` |
| `--c-calendar-header-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-header-icon-box-shadow` | `0 0 0 var(--c-spacing-1) var(--c-calendar-box-shadow)` | `box-shadow` |
| `--c-calendar-header-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-calendar-header-icon-margin` | `var(--c-spacing-6)` | `margin`, `margin-left`, `margin-right` |
| `--c-calendar-header-icon-size` | `var(--c-size-7)` | `height`, `line-height`, `width` |
| `--c-calendar-header-padding-horizontal` | `var(--c-spacing-9)` | `padding` |
| `--c-calendar-header-padding-vertical` | `var(--c-spacing-9)` | `padding` |
| `--c-calendar-header-value-font-size` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-calendar-header-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-header-value-month-margin` | `var(--c-spacing-10)` | `margin-left`, `margin-right` |
| `--c-calendar-header-value-month-width` | `var(--c-size-19)` | `width` |
| `--c-calendar-header-value-year-margin` | `var(--c-spacing-4)` | `margin-left`, `margin-right` |
| `--c-calendar-header-value-year-width` | `var(--c-size-25)` | `width` |
| `--c-calendar-mode-year-body-padding` | `var(--c-spacing-6)` | `padding` |
| `--c-calendar-mode-year-min-width` | `820px` | `min-width` |
| `--c-calendar-month-cell-date-circle-size` | `22px` | `height`, `width` |
| `--c-calendar-month-cell-date-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-calendar-month-cell-date-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-month-cell-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-calendar-month-cell-week-list-item-padding` | `var(--c-spacing-3)` | `padding` |
| `--c-calendar-month-row-height` | `var(--c-size-25)` | `height` |
| `--c-calendar-month-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-calendar-month-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-month-title-padding-horizontal` | `var(--c-spacing-3)` | `padding` |
| `--c-calendar-month-title-padding-vertical` | `var(--c-spacing-5)` | `padding` |
| `--c-calendar-month-with-days-row-height` | `26px` | `height` |
| `--c-calendar-panel-bg-cell-hover` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-panel-bg-cell-selected` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-panel-body-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-panel-body-padding-vertical` | `14px` | `padding` |
| `--c-calendar-panel-cell-boundary-border-radius` | `(   (var(~'--c-calendar-panel-date-cell-circle-height') + var(~'--c-calendar-panel-date-cell-padding-vertical') * 2) / 2 )` | `border-radius` |
| `--c-calendar-panel-cell-padding-vertical` | `var(--c-spacing-1)` | `padding` |
| `--c-calendar-panel-cell-selected-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-panel-color-current-time-dot` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-panel-date-cell-circle-height` | `var(--c-size-6)` | `height`, `line-height`, `min-width` |
| `--c-calendar-panel-date-cell-padding-vertical` | `var(--c-spacing-2)` | `padding` |
| `--c-calendar-panel-date-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-panel-footer-height` | `38px` | `height`, `line-height` |
| `--c-calendar-panel-header-icon-margin` | `var(--c-spacing-1)` | `margin-left`, `margin-right` |
| `--c-calendar-panel-header-icon-size` | `var(--c-size-6)` | `height`, `line-height`, `width` |
| `--c-calendar-panel-header-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-panel-header-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-calendar-panel-header-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-panel-header-value-line-height` | `var(--c-size-6)` | `line-height` |
| `--c-calendar-panel-text-color-cell-hover` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-calendar-panel-text-color-cell-selected` | `var(--c-color-white)` | `color` |
| `--c-calendar-panel-today-dot-offset` | `var(--c-spacing-1)` | `margin-left` |
| `--c-calendar-panel-today-dot-size` | `var(--c-spacing-2)` | `height`, `width` |
| `--c-calendar-panel-week-list-item-font-weight` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-calendar-panel-week-list-item-height` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-calendar-panel-year-cell-circle-height` | `var(--c-size-6)` | `border-radius` |
| `--c-calendar-panel-year-cell-padding-vertical` | `var(--c-spacing-2)` | `padding` |
| `--c-calendar-panel-year-date-value-border-radius` | `var(--c-spacing-6)` | `border-radius` |
| `--c-calendar-panel-year-mode-cell-padding-vertical` | `var(--c-spacing-2)` | `padding` |
| `--c-calendar-switch-icon` | `var(--c-color-text-2)` | `color` |
| `--c-calendar-text-color-cell-hover-range-boundary` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-text-color-cell-range-boundary` | `var(--c-color-white)` | `color` |
| `--c-calendar-text-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-week-list-item-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-week-list-item-padding-vertical` | `var(--c-spacing-8)` | `padding` |
| `--c-calendar-week-list-text-color` | `#7d7d7f` | `color` |
| `--c-calendar-year-cell-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-calendar-year-cell-padding-vertical` | `var(--c-spacing-8)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-calendar-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

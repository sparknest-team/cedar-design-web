---
permalink: /components/time-picker/
---

# TimePicker

时间选择**面板**（默认无触发器）。

### 选择与滚动

选择时间列会滚动到对应选项。启用减少动态效果时直接定位，不执行滚动动画；仅滚动定位不会提交选择。

表单字段请使用 [`Time`](/components/time/)；时间范围字段请使用 [`TimeRange`](/components/time-range/)；范围面板请使用 [`TimeRangePicker`](/components/time-range-picker/)。

## 基础示例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

## 格式与展示

### 定制格式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `format` | 展示格式 | 定制格式、十二小时制 |
| `use12-hours` | 12 小时制 | 十二小时制 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/format.vue"></demo>

### 十二小时制

<demo src="./__demos__/use12Hours.vue"></demo>

## 选择规则与交互

### 禁用部分时间选项

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `format` | 展示格式 | 禁用部分时间选项、时间上下限、纯面板确认与禁用选项 |
| `disable-confirm` | 跳过确认 | 跳过确认、纯面板确认与禁用选项 |
| `use12-hours` | 12 小时制 | 禁用部分时间选项 |
| `step` | 时分秒步长 | 定制步长 |
| `hide-disabled-options` | 隐藏禁用时间选项 | 纯面板确认与禁用选项 |
<!-- demo-config-notes:end -->

禁用回调中的小时始终为 0–23，与面板是否使用十二小时制无关：午夜为 0，中午为 12，下午 1 点为 13。切换 AM/PM 后会重新计算禁用选项。

<demo src="./__demos__/disabled-parts.vue"></demo>

### 定制步长

<demo src="./__demos__/step.vue"></demo>

### 时间上下限

`min` / `max` 的类型为 `string`，默认不限制；格式固定为 24 小时制 `HH:mm` 或 `HH:mm:ss`，不受 `format` 或 `use12Hours` 影响，包含端点。`HH:mm` 的秒视为 00。范围的两个端点分别校验；`showNextDay` 不把边界变成跨午夜区间。`min > max` 时没有可提交时间。无法解析的边界按未设置处理。

动态修改边界不会改写外部模型。提交须同时满足边界、步长和禁用回调；不显示秒时按秒为 00 校验。列表粗粒度列在整个小时/分钟都越界时禁用，最终确认仍校验完整时间。隐藏禁用项使用 `hide-disabled-options`。

<demo src="../__demos__/bounds.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

### 纯面板确认与禁用选项

纯面板默认确认后提交：选择时仅发 select，确认后才更新模型并发 change；disable-confirm 开启后有效选择立即提交。hide-disabled-options 默认 false，开启后隐藏禁用项；时钟保留原刻度角度。字段和日期组件内部显式跳过子面板确认，由外层负责提交。外部模型替换会重置草稿，不主动派发事件。

在未确认的草稿中启用只读、隐藏禁用小时或切换立即提交，不会提交旧草稿；解除只读也不提交，下一次有效选择才提交。切换移动端滚轮或时钟展示会保留草稿，不改变父级模型。

<demo src="./__demos__/panel-behavior.vue"></demo>

独立面板直接管理自己的草稿与提交状态。外部替换模型会重置草稿，不触发选择或变更事件；只读、禁用均阻止选择和确认。Cedar 使用列表，Maple 使用滚轮或时钟，展示层不另建一份草稿。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，方向切换不修改时间或提交草稿。小时、分钟、秒等列按阅读顺序排列；左右键沿视觉方向跨列移动焦点。Cedar 的上下键与 Home/End 在当前时间列移动焦点，Enter/Space 选择，禁用项跳过；Maple 滚轮保留上下键和 Home/End 的选值行为。是否即时提交仍由原有确认配置决定。弹层继承字段来源方向。

## API

面板主体统一管理草稿和确认，展示内容只渲染这一份状态。上方示例展示 extra 插槽及有效确认次数；重复确认相同值会触发 confirm，不会重复触发 change。

### 纯面板事件与插槽边界

`TimePicker` / `TimeRangePicker` 不管理字段或弹层；`open`、`size`、`variant`、清除和浮层配置应传给 `Time` / `TimeRange`。

- `select(value, date)`：修改草稿。
- `change(value, date)`：有效确认且值变化时触发，并更新模型。
- `confirm(value, date)`：每次有效确认均触发，包括值未变化；`disableConfirm` 模式在有效选择提交时也触发。禁用、只读或无效草稿不会触发。
- `extra`：附加说明内容。
- `actions({ confirm, canConfirm, value })`：替换默认操作栏；`value` 是草稿，调用 `confirm()` 提交，并根据 `canConfirm` 禁用按钮。

单时间事件值为格式化字符串及 Date；范围事件值为对应数组。纯面板不再派发 `open-change`、`update:open` 或 `clear`。

### TimePicker Props

| 参数 | 说明 | 类型 | 缺省说明 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅创建时读取 | `TimeValue \| TimeValue[]` | `undefined` |
| `disable-confirm` | 有效选择后立即提交；字段还请求关闭 | `boolean` | `false` |
| `disabled` | 禁用面板选择和确认 | `boolean` | `false` |
| `disabled-hours` | 返回禁用小时，小时始终为 0–23 | `() => number[]` | `undefined` |
| `disabled-minutes` | 按已选小时返回禁用分钟 | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | 按已选小时和分钟返回禁用秒 | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `format` | 字符串解析、显示及输出格式；十二小时缺省带 a | `string` | 按 use12Hours |
| `hide-disabled-options` | 隐藏禁用时间选项；时钟保留刻度位置 | `boolean` | `false` |
| `max` | 最大可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `min` | 最小可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `model-value` | 面板外部值，初始化草稿并响应后续变化 | `TimeValue \| TimeValue[]` | `undefined` |
| `readonly` | 只读面板，不改草稿或确认 | `boolean` | `false` |
| `show-next-day` | 仅范围：允许结束早于开始并显示次日，不交换起止 | `boolean` | `false` |
| `step` | 以 0 点为起点的时分秒步长，无效步长回退为 1 | `TimeStep` | 有效步长均 1 |
| `type` | 桌面通用面板的单选/范围模式 | `time \| time-range` | `time` |
| `use12-hours` | 十二小时面板；小时禁用回调仍用 0–23 | `boolean` | `false` |

### 完整独立面板合同

完整属性、事件、插槽及实例边界与主字段文档的独立面板章节一致。

[完整 API](/components/time/)

### TimePicker Events

| 事件 | 参数 |
| --- | --- |
| `update:modelValue` | `TimePickerEmits['update:modelValue']` |
| `select` | `TimePickerEmits['select']` |
| `change` | `TimePickerEmits['change']` |
| `confirm` | `TimePickerEmits['confirm']` |

### TimePicker Slots

| 插槽 | 参数 |
| --- | --- |
| `extra` | `()` |
| `actions` | `{ confirm: () => boolean; canConfirm: boolean; value: TimeValue \| Array<TimeValue \| undefined> \| undefined }` |

公开面板业务事件类型不包含 draft-initialize；它仅用于 Maple 内部拥有者桥接。面板不接收字段的 beforeCommit 或 loading 属性。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-time-picker-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-top` |
| `--c-time-picker-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-time-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-time-picker-cell-bg-active` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-time-picker-cell-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-height` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-time-picker-cell-padding-left` | `var(--c-spacing-9)` | `padding-inline-start` |
| `--c-time-picker-cell-spacing` | `var(--c-spacing-2)` | `height`, `padding` |
| `--c-time-picker-cell-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-time-picker-cell-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-time-picker-column-height` | `224px` | `height` |
| `--c-time-picker-column-width` | `var(--c-size-16)` | `width` |
| `--c-time-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-footer-padding` | `var(--c-spacing-4)` | `padding` |
| `--c-time-picker-popover-body-reserve` | `128px` | `height` |
| `--c-time-picker-popover-column-max-height` | `224px` | `height` |
| `--c-time-picker-popover-gap` | `32px` | `max-width` |
| `--c-time-picker-range-gap` | `var(--c-spacing-6)` | `gap` |
| `--c-time-picker-range-next-day-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-range-panel-title-gap` | `var(--c-spacing-3)` | `gap` |
| `--c-time-picker-range-panel-title-line-height` | `22px` | `line-height` |
| `--c-time-picker-range-panel-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-time-picker-range-panel-title-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-time-picker-range-wrapper-padding` | `var(--c-spacing-4)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-time-picker-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

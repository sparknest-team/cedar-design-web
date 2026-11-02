---
permalink: /components/slider/
---

# Slider 滑块

在有限数值范围内选择单值或区间。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 垂直方向

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置           | 作用                                                      | 相关示例 |
| -------------- | --------------------------------------------------------- | -------- |
| `orientation`  | 滑块轨道与操作的横纵轴向，默认 horizontal；不表示增减方向 | 垂直方向 |
| `aria-label`   | 可访问名称；范围可分别传入两个名称                        | 垂直方向 |
| `range`        | 两个固定低/高端，不可交叉；初始倒序自动排序               | 垂直方向 |
| `show-tooltip` | true悬浮/聚焦/拖动显示；false隐藏；always常驻             | 垂直方向 |

<!-- demo-config-notes:end -->

父容器提供 300px 高度，单值与范围分别回写。上移增大、下移减小；范围两端仍不能交叉。没有独立 reverse 属性。

<demo src="./__demos__/vertical.vue"></demo>

## 内容与展示

### 触控提示与定制

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置           | 作用                                          | 相关示例       |
| -------------- | --------------------------------------------- | -------------- |
| `show-tooltip` | true悬浮/聚焦/拖动显示；false隐藏；always常驻 | 触控提示与定制 |
| `aria-label`   | 可访问名称；范围可分别传入两个名称            | 触控提示与定制 |

<!-- demo-config-notes:end -->

<demo src="./__demos__/touch-and-labels.vue"></demo>

## 交互与控制

### 交互状态切换

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置         | 作用                                                 | 相关示例                               |
| ------------ | ---------------------------------------------------- | -------------------------------------- |
| `aria-label` | 可访问名称；范围可分别传入两个名称                   | 刻度、标记和数字输入、受控与非交叉范围 |
| `range`      | 两个固定低/高端，不可交叉；初始倒序自动排序          | 刻度、标记和数字输入、受控与非交叉范围 |
| `step`       | 正有限步长，非法值回退1，按min对齐；max端点可达      | 刻度、标记和数字输入                   |
| `marks`      | 有限范围内位置到文本的映射                           | 刻度、标记和数字输入                   |
| `show-ticks` | 按step显示刻度，过密时省略，最多1000个               | 刻度、标记和数字输入                   |
| `show-input` | 显示InputNumber；Enter或失焦提交，使用同一归一化规则 | 刻度、标记和数字输入                   |

<!-- demo-config-notes:end -->

适用于连续区间内的数值调整。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 刻度、标记和数字输入

<demo src="./__demos__/keyboard-input.vue"></demo>

### 受控与非交叉范围

<demo src="./__demos__/controlled-range.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Props

| 属性                                     | 说明                                                          | 类型                             | 默认值       |
| ---------------------------------------- | ------------------------------------------------------------- | -------------------------------- | ------------ |
| model-value                              | 受控值；range 使用二元组                                      | `SliderValue`                    | —            |
| default-value                            | 非受控初始值                                                  | `SliderValue`                    | `0`          |
| min / max                                | 有限边界，数字字符串可用；非法值回退 0/100；max<=min 不可交互 | `number \| string`               | `0 / 100`    |
| step                                     | 正有限步长，非法值回退1，按min对齐；max端点可达               | `number \| string`               | `1`          |
| range                                    | 两个固定低/高端，不可交叉；初始倒序自动排序                   | `boolean`                        | `false`      |
| orientation                              | 滑块轨道与操作的横纵轴向，默认 horizontal；不表示增减方向     | `horizontal \| vertical`         | `horizontal` |
| disabled / readonly / error              | 未传时继承FormItem/Form适用状态；只读可聚焦但不可改值         | `boolean`                        | 继承         |
| show-ticks                               | 按step显示刻度，过密时省略，最多1000个                        | `boolean`                        | `false`      |
| marks                                    | 有限范围内位置到文本的映射                                    | `Record<number,string>`          | —            |
| show-input                               | 显示InputNumber；Enter或失焦提交，使用同一归一化规则          | `boolean`                        | `false`      |
| show-tooltip                             | true悬浮/聚焦/拖动显示；false隐藏；always常驻                 | `boolean \| 'always'`            | `true`       |
| format-tooltip                           | 提示与aria-valuetext格式化                                    | `(value:number)=>string\|number` | 原值         |
| aria-label                               | 可访问名称；范围可分别传入两个名称                            | `string \| [string,string]`      | —            |
| active-color / track-color / thumb-color | 轨道激活色/背景色/拇指底色                                    | `string`                         | CSS变量      |
| label-color / label-text-color           | 提示背景/文字色                                               | `string`                         | CSS变量      |
| track-height / thumb-size                | 轨道厚度/拇指直径，数字px或CSS长度；非法值保留主题默认        | `number \| string`               | CSS变量      |

### 行为与键盘

方向键按step增加/减少，PageUp/PageDown为10步，Home/End到可用端点。范围的ARIA min/max随另一个拇指变化；重合时向左/下点击可分开低端，向右/上可分开高端。拇指内业务交互元素的键盘事件不被接管。只读保留焦点与提示，禁用不进入Tab顺序。

Pointer Events统一鼠标、触控、笔；pointerup提交最后坐标，pointercancel/丢失capture结束最近提议。禁用、卸载、KeepAlive失活会清理监听与capture且不继续发值事件。横向允许页面纵向滚动，纵向允许横向滚动。

受控模式只有父级回写才能改变显示；模型归一化不自动emit。change/update:model-value只报告不同提议，end携带最终提议，不保证父级接受。键盘及数字输入每次操作各有start/end；拖动是一组start/end。InputNumber内部不重复触发Form验证。已移除旧label-visible，直接使用show-tooltip，无兼容别名。

### Events

| 事件               | 参数          | 含义                         |
| ------------------ | ------------- | ---------------------------- |
| update:model-value | `SliderValue` | 请求更新                     |
| change             | `SliderValue` | 不同数值提议，与模型事件配对 |
| start              | —             | 交互开始                     |
| end                | `SliderValue` | 交互结束的最终提议           |

### Slots / Methods

button插槽收到`{ currentValue:number,index:number }`；自定义内容不移除键盘、ARIA与提示。focus(index=0)按显示顺序聚焦拇指，blur()移出焦点。

导出SliderProps、SliderValue、SliderOrientation、SliderTooltipFormatter、SliderTooltipVisibility、SliderEmits、SliderSlots、SliderExpose、SliderInstance和运行时sliderProps。两端主体/样式独立复制；仅安装和Form接线使用各库独立实现。

### 样式变量

| 变量                             | 默认值                                 |
| -------------------------------- | -------------------------------------- |
| `--c-slider-active-color`        | `var(--c-sys-color-content-brand)`     |
| `--c-slider-track-color`         | `var(--c-sys-color-state-hover)`       |
| `--c-slider-thumb-color`         | `var(--c-sys-color-surface-default)`   |
| `--c-slider-thumb-border-color`  | `var(--c-sys-color-content-brand)`     |
| `--c-slider-text-color`          | `var(--c-sys-color-content-secondary)` |
| `--c-slider-tooltip-background`  | `var(--c-sys-color-surface-tooltip)`   |
| `--c-slider-tooltip-color`       | `var(--c-sys-color-content-on-dark)`   |
| `--c-slider-error-color`         | `var(--c-sys-color-content-danger)`    |
| `--c-slider-disabled-color`      | `var(--c-sys-color-content-disabled)`  |
| `--c-slider-track-height`        | `4px`                                  |
| `--c-slider-thumb-size`          | `16px`                                 |
| `--c-slider-control-height`      | `var(--c-sys-control-height-md)`       |
| `--c-slider-font-size`           | `var(--c-sys-font-size-sm)`            |
| `--c-slider-gap`                 | `var(--c-sys-space-4)`                 |
| `--c-slider-radius`              | `var(--c-sys-radius-md)`               |
| `--c-slider-transition-duration` | `var(--c-sys-motion-duration-fast)`    |
| `--c-slider-input-width`         | `80px`                                 |

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

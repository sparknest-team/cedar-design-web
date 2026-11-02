---
permalink: /components/rate/
---

# Rate

用于评分或打星的组件。

## 基础示例

### 基础用法

评分组件基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 只读模式

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                     | 相关示例   |
| --------------- | ---------------------------------------- | ---------- |
| `default-value` | 非受控初值，只初始化一次                 | 只读模式   |
| `readonly`      | 只读且可聚焦；缺省继承表单               | 只读模式   |
| `color`         | 选中颜色，或按每个图标分值的递增阈值映射 | 自定义颜色 |

<!-- demo-config-notes:end -->

通过设置 `readonly` 属性让评分组件为只读状态。

<demo src="./__demos__/readonly.vue"></demo>

### 自定义颜色

通过 color 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。

<demo src="./__demos__/color.vue"></demo>

## 内容与展示

### 尺寸与符号

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                              | 相关示例                         |
| --------------- | ------------------------------------------------- | -------------------------------- |
| `default-value` | 非受控初值，只初始化一次                          | 尺寸与符号、半选、评分总数与清除 |
| `allow-half`    | 半分步长                                          | 尺寸与符号、半选                 |
| `grading`       | 固定五级表情评分，优先于插槽和图标                | 尺寸与符号、笑脸分级             |
| `size`          | 图标尺寸；数字/数字字符串为 px，带单位为 CSS 长度 | 尺寸与符号                       |
| `aria-label`    | 评分的业务无障碍名称                              | 尺寸与符号                       |
| `gap`           | 图标间距；数字/数字字符串为 px，带单位为 CSS 长度 | 尺寸与符号                       |

<!-- demo-config-notes:end -->

<demo src="./__demos__/sizes-and-symbols.vue"></demo>

### 半选

指定 `allow-half` 来开启半选。

<demo src="./__demos__/half.vue"></demo>

### 评分总数与清除

比较评分上限和重复选择时的清除行为；半星精度、键盘输入与受控值保持独立。

<details>
<summary>配置说明与使用限制</summary>

#### 支持清除

通过设置 `clearable` 来允许清除评分。

#### 任意长度的评分

通过指定 `count` 来指定任意长度的评分组件。

</details>

<demo src="./__demos__/value-rules-comparison.vue"></demo>

### 笑脸分级

通过 `grading` 使用笑脸分级。

<demo src="./__demos__/grading.vue"></demo>

## 自定义与插槽

### 自定义评分字符

可以将星星替换为其他字符，比如表情、字母，数字，字体图标甚至中文。

<demo src="./__demos__/character.vue"></demo>

## 交互与控制

### 交互状态切换

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                   | 相关示例                 |
| --------------- | -------------------------------------- | ------------------------ |
| `disabled`      | 禁用；缺省继承表单，显式 false 覆盖    | 交互状态切换、键盘与状态 |
| `readonly`      | 只读且可聚焦；缺省继承表单             | 交互状态切换、键盘与状态 |
| `allow-half`    | 半分步长                               | 键盘与状态               |
| `clearable`     | 重复点击当前分数清空；键盘边界不会清空 | 键盘与状态               |
| `aria-label`    | 评分的业务无障碍名称                   | 键盘与状态               |
| `default-value` | 非受控初值，只初始化一次               | 键盘与状态               |

<!-- demo-config-notes:end -->

适用于评分反馈。调整禁用、只读，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 键盘与状态

<demo src="./__demos__/keyboard.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Props

| 属性           | 说明                                              | 类型                             | 默认值     |
| -------------- | ------------------------------------------------- | -------------------------------- | ---------- |
| model-value    | 受控评分，配合 v-model；外部更新不发事件          | number                           | undefined  |
| default-value  | 非受控初值，只初始化一次                          | number                           | 0          |
| count          | 正有限数向下取整；非法值回退 5                    | number \| string                 | 5          |
| allow-half     | 半分步长                                          | boolean                          | false      |
| clearable      | 重复点击当前分数清空；键盘边界不会清空            | boolean                          | false      |
| grading        | 固定五级表情评分，优先于插槽和图标                | boolean                          | false      |
| disabled       | 禁用；缺省继承表单，显式 false 覆盖               | boolean                          | undefined  |
| readonly       | 只读且可聚焦；缺省继承表单                        | boolean                          | undefined  |
| aria-label     | 评分的业务无障碍名称                              | string                           | undefined  |
| size           | 图标尺寸；数字/数字字符串为 px，带单位为 CSS 长度 | number \| string                 | 样式默认值 |
| gap            | 图标间距；数字/数字字符串为 px，带单位为 CSS 长度 | number \| string                 | 样式默认值 |
| color          | 选中颜色，或按每个图标分值的递增阈值映射          | string \| Record<string, string> | undefined  |
| empty-color    | 未选中颜色                                        | string                           | undefined  |
| disabled-color | 禁用时覆盖选中/未选中颜色                         | string                           | undefined  |
| icon           | 选中图标                                          | string \| Component              | 星形       |
| half-icon      | 半选图标                                          | string \| Component              | 半星       |
| empty-icon     | 未选中图标                                        | string \| Component              | 空星       |
| ripple         | 点击水波纹                                        | boolean                          | true       |

size/gap 不接受 xs/sm/md/lg/xl 档位；省略、非法或非正数保留样式默认值。CSS var/calc/min/max/clamp 长度可用。评分按 1 或 0.5 步长归一至 0～count；非有限评分显示 0，不反向改写外部值。

### Events

| 事件               | 参数          | 说明                                      |
| ------------------ | ------------- | ----------------------------------------- |
| update:model-value | value: number | 用户产生新值                              |
| change             | value: number | 新值确认；相同值不重复通知                |
| hover-change       | value: number | 鼠标预览改变；离开/失焦/禁用/只读重置为 0 |

### Slots

| 插槽      | 参数                     | 说明                                           |
| --------- | ------------------------ | ---------------------------------------------- |
| character | { index, value, active } | index 从 0 开始，value 从 1 开始；替换评分符号 |

优先级：grading > character > icon/half-icon/empty-icon > 默认图标。字符串图标需要全局注册；组件值无需注册。

### Methods

focus() 聚焦评分，blur() 移除焦点。只读仍可聚焦，禁用移出 Tab 序列。方向键增减、Home 清零、End 满分；子控件键盘事件和 Alt/Ctrl/Meta 组合键不被接管。触屏点击与鼠标点击遵循相同半选、清空规则。

### 类型定义

导出 RateProps、RateColor、RateIcon、RateInstance、RateExpose、RateEmits、RateCharacterSlotProps。

### 样式变量

| Token                                 | Default                                        |
| ------------------------------------- | ---------------------------------------------- |
| `--c-rate-disabled-color`             | `var(--c-sys-color-content-disabled)`          |
| `--c-rate-error-color`                | `var(--c-sys-color-content-danger)`            |
| `--c-rate-active-scale`               | `1.2`                                          |
| `--c-rate-focus-color`                | `var(--c-sys-color-content-brand)`             |
| `--c-rate-focus-width`                | `2px`                                          |
| `--c-rate-focus-offset`               | `2px`                                          |
| `--c-rate-size`                       | `var(--c-font-size-title-3)`                   |
| `--c-rate-gap`                        | `var(--c-spacing-4)`                           |
| `--c-rate-min-height`                 | `var(--c-size-md)`                             |
| `--c-rate-action-padding`             | `0px`                                          |
| `--c-rate-empty-color`                | `var(--c-color-fill-3)`                        |
| `--c-rate-active-color`               | `rgb(var(--c-gold-6))`                         |
| `--c-rate-transition-duration`        | `var(--c-transition-duration-2)`               |
| `--c-rate-scale-duration`             | `var(--c-transition-duration-4)`               |
| `--c-rate-transition-timing-function` | `var(--c-transition-timing-function-standard)` |

两端公开 Token 后缀及含义一致；Cedar 保留金色星形和紧凑间距，Maple 保留主色星形与触控内边距，默认值差异已登记主题契约。源码各自维护，不共享运行时。

`transition-duration` 控制 hover/颜色过渡，`scale-duration` 控制选中动画，`transition-timing-function` 控制缓动。低动态偏好下关闭非必要动画；`size` / `gap` Prop 会覆盖当前实例的对应 Token。

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

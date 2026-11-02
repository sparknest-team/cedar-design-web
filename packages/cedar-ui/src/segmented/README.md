---
permalink: /components/segmented/
---

# Segmented 分段控制器

用于在少数互斥选项之间快速切换。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 分段尺寸与禁用状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | 尺寸 | 分段尺寸与禁用状态 |
| `options` | 选项列表 | 分段尺寸与禁用状态 |
| `disabled` | 禁用 | 分段尺寸与禁用状态 |
| `default-value` | 非受控默认值 | 分段尺寸与禁用状态 |
<!-- demo-config-notes:end -->

比较不同尺寸的密度与禁用选项的行为；受控值和块级布局保持独立。

<demo src="./__demos__/appearance-state-comparison.vue"></demo>

## 布局与排列

### 块级撑满

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `block` | 撑满父宽度 | 块级撑满 |
| `options` | 选项列表 | 块级撑满 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/block.vue"></demo>

## 交互与控制

### 受控

<demo src="./__demos__/controlled.vue"></demo>

## 可访问性

- 根节点使用 `role="radiogroup"`，选项为原生 `radio`，支持键盘切换。
- 可通过 `name` 绑定表单字段名。
- 整体禁用时设置 `aria-disabled`。

## API

### Segmented Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 当前值 | `string \| number` | — |
| default-value | 非受控默认值 | `string \| number` | — |
| options | 选项列表 | `(string \| number \| SegmentedOption)[]` | `[]` |
| size | 尺寸 | `xs \| sm \| md \| lg \| xl` | `md` |
| disabled | 禁用 | `boolean` | `false` |
| block | 撑满父宽度 | `boolean` | `false` |
| orientation | 分段选项的横纵排列，默认 horizontal；不表示文字阅读方向 | `horizontal \| vertical` | `horizontal` |
| name | 原生 name | `string` | — |

### SegmentedOption

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| label | 文案 | `string \| () => VNodeChild` |
| value | 值 | `string \| number` |
| disabled | 禁用该项 | `boolean` |

### Segmented Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 值变化 | `(value, event)` |
| update:model-value | v-model | `(value)` |

### Segmented Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义选项内容 | `{ data: SegmentedOption }` |

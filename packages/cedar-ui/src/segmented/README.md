---
permalink: /components/segmented/
---

# Segmented 分段控制器

用于在少数互斥选项之间快速切换。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 受控

<demo src="./__demos__/controlled.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

### 块级撑满

<demo src="./__demos__/block.vue"></demo>

### 禁用

<demo src="./__demos__/disabled.vue"></demo>

## 可访问性

- 根节点使用 `role="radiogroup"`，选项为原生 `radio`，支持键盘切换。
- 可通过 `name` 绑定表单字段名。
- 整体禁用时设置 `aria-disabled`。

## API

### Segmented Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 当前值 | `string \| number` | — |
| defaultValue | 非受控默认值 | `string \| number` | — |
| options | 选项列表 | `(string \| number \| SegmentedOption)[]` | `[]` |
| size | 尺寸 | `xs \| sm \| md \| lg \| xl` | `md` |
| disabled | 禁用 | `boolean` | `false` |
| block | 撑满父宽度 | `boolean` | `false` |
| direction | 方向 | `horizontal \| vertical` | `horizontal` |
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
| update:modelValue | v-model | `(value)` |

### Segmented Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义选项内容 | `{ data: SegmentedOption }` |

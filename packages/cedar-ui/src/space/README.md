---
permalink: /components/space/
---

# Space

对flex布局的子元素进行间距设置，是对flex布局的扩展，并不会破坏子元素的原有dom结构。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 垂直间距

可以设置垂直方向排列的间距。

<demo src="./__demos__/vertical.vue"></demo>

### 尺寸

内置 4 个尺寸，xs - 4px sm - 8px (默认) md - 16px lg - 24px，也支持传数字来自定义尺寸。

<demo src="./__demos__/size.vue"></demo>

### 对齐

内置 4 种对齐方式，分别为 start center end baseline，在水平模式下默认为 start。

<demo src="./__demos__/align.vue"></demo>

### 环绕

环绕类型的间距，四周都有间距，一般用于换行的场景。

<demo src="./__demos__/wrap.vue"></demo>

### 分隔符

为相邻子元素设置分隔符。

<demo src="./__demos__/split.vue"></demo>

## API

### Space Props

### 属性

| 参数      | 说明                                                                                                 | 类型                                                       | 默认值                 |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| direction | 布局方向 可选值为 `row` `column`                                                                     | _string_                                                   | `row`                  |
| justify   | 主轴排列方式 可选值为 `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` | _string_                                                   | `flex-start`           |
| align     | 交叉轴排列方式 可选值为 `flex-start` `flex-end` `center` `stretch` `baseline`                        | _string_                                                   | `center`或`flex-start` |
| size      | 间距，可选值为 `xs` `sm` `md` `lg` `xl` 或 `[rowGap, columnGap]` (支持长度单位和简写方式)            | _string \| number \| [string \| number, string \| number]_ | `md`                   |
| wrap      | 是否超出换行                                                                                         | _boolean_                                                  | `false`                |
| block     | 是否为flex元素                                                                                       | _boolean_                                                  | `true`                 |

### 插槽

| 插槽名    | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | Space 内容 | `-`  |
| `split`   | 分隔符     | `-`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                       | 默认值 |
| ---------------------------- | ------ |
| `--space-size-xs-row-gap`    | `4px`  |
| `--space-size-xs-column-gap` | `4px`  |
| `--space-size-sm-row-gap`    | `6px`  |
| `--space-size-sm-column-gap` | `8px`  |
| `--space-size-md-row-gap`    | `8px`  |
| `--space-size-md-column-gap` | `12px` |
| `--space-size-lg-row-gap`    | `12px` |
| `--space-size-lg-column-gap` | `16px` |
| `--space-size-xl-row-gap`    | `16px` |
| `--space-size-xl-column-gap` | `24px` |

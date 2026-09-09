---
permalink: /components/space/
---

# Space

通过 flex gap 设置子元素间距，每个有效子节点外包裹一个 item 容器，支持 Fragment 展开与分隔符。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 垂直间距

可以设置垂直方向排列的间距。

<demo src="./__demos__/vertical.vue"></demo>

### 尺寸

内置 xs / sm / md / lg / xl 五档，默认 md；支持数字、CSS 长度和 [行间距, 列间距]，具体值见下方同源约定。

<demo src="./__demos__/size.vue"></demo>

### 对齐

内置多种对齐方式，分别为 `flex-start` `center` `flex-end` `stretch` `baseline`。未传入时：`row` 默认为 `center`，`column` 默认为 `stretch`。

<demo src="./__demos__/align.vue"></demo>

### 环绕

默认不换行；显式设置 wrap 后允许超出换行。gap 只作用于子项之间，不增加容器外围间距。

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
| align     | 交叉轴排列方式 可选值为 `flex-start` `flex-end` `center` `stretch` `baseline`，未传时根据 `direction` 推断（`row` → `center`，`column` → `stretch`） | _string_                                                   | `-`                    |
| size      | 间距，可选值为 `xs` `sm` `md` `lg` `xl` 或 `[rowGap, columnGap]` (支持长度单位和简写方式)            | _string \| number \| [string \| number, string \| number]_ | `md`                   |
| wrap      | 是否超出换行                                                                                         | _boolean_                                                  | `false`                |
| block     | 是否为flex元素                                                                                       | _boolean_                                                  | `true`                 |

### 插槽

| 插槽名    | 说明       | 参数 |
| --------- | ---------- | ---- |
| `default` | Space 内容 | `-`  |
| `split`   | 分隔符     | `-`  |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--c-space-size-xs-row-gap` | `4px` |
| `--c-space-size-xs-column-gap` | `4px` |
| `--c-space-size-sm-row-gap` | `8px` |
| `--c-space-size-sm-column-gap` | `6px` |
| `--c-space-size-md-row-gap` | `12px` |
| `--c-space-size-md-column-gap` | `8px` |
| `--c-space-size-lg-row-gap` | `16px` |
| `--c-space-size-lg-column-gap` | `12px` |
| `--c-space-size-xl-row-gap` | `24px` |
| `--c-space-size-xl-column-gap` | `16px` |

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、子节点展开、主样式、尺寸 token 和配对测试纳入只读一致性检查。仅安装入口与命名空间各自适配。

两端默认均为 `size="md"`、`wrap=false`、`block=true`、`direction="row"`。未传 align 时，row 为 center、column 为 stretch。Maple 原来依赖默认换行的用法请显式添加 `wrap`。

`size` 支持全部五档预设、number（px）、数字字符串（px）、CSS 长度或表达式（例如 1rem、var(--gap)）以及二元组 `[rowGap, columnGap]`。数组始终先行后列，direction 切换不会交换它们；数组项为长度，不支持预设名。预设 [行, 列]：xs=[4,4]、sm=[8,6]、md=[12,8]、lg=[16,12]、xl=[24,16] px，两端一致，仍可通过 CSS 变量覆盖。

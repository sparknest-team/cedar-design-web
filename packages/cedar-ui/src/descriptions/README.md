---
permalink: /components/descriptions/
---

# Descriptions

一般用于详情页的信息展示。

## 基础示例

### 基础用法

简单地成组展示多个只读字段，一般用于详情页的信息。

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 标签文本对齐

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 描述列表的数据 | 标签文本对齐、布局模式 |
| `title` | 描述列表的标题 | 标签文本对齐、布局模式 |
| `layout` | 描述列表的排列方式 | 标签文本对齐、布局模式 |
| `align` | 文字的对齐位置 | 标签文本对齐 |
| `size` | 描述列表的大小 | 布局模式 |
| `bordered` | 是否显示边框 | 布局模式 |
<!-- demo-config-notes:end -->

标签文本可以设置左对齐右对齐，也可以设置垂直的排列方式。

<demo src="./__demos__/label-text-alignment.vue"></demo>

### 布局模式

有水平排列、垂直排列、行内水平排列、行内垂直、行内自适应分隔排列五种布局模式。

<demo src="./__demos__/layout-pattern.vue"></demo>

## 内容与展示

### 常用案例

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 描述列表的数据 | 常用案例、带边框样式 |
| `title` | 描述列表的标题 | 常用案例、带边框样式 |
| `column` | 每行放置的数据个数。2.20.0 版本支持响应式配置，配置可参考 Grid | 常用案例 |
| `size` | 描述列表的大小 | 常用案例 |
| `bordered` | 是否显示边框 | 带边框样式 |
<!-- demo-config-notes:end -->

单列的描述列表样式。

<demo src="./__demos__/singel-column-style.vue"></demo>

### 带边框样式

带边框和背景颜色的列表。

<demo src="./__demos__/border-background-list.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。标签和值按阅读顺序排列，边界和默认文本对齐使用逻辑起止位置；切换方向不反转记录、列定义或 span 的含义。

## API

### `<Descriptions>` Props

| 属性         | 说明                                                               |                                           类型                                            | 默认值         |
| ------------ | ------------------------------------------------------------------ | :---------------------------------------------------------------------------------------: | :------------- |
| data         | 描述列表的数据                                                     |                                       `DescData[]`                                        | `[]`           |
| column       | 每行放置的数据个数。2.20.0 版本支持响应式配置，配置可参考 Grid     |                                `number \| ResponsiveValue`                                | `3`            |
| title        | 描述列表的标题                                                     |                                         `string`                                          | `-`            |
| layout       | 描述列表的排列方式                                                 | `'horizontal' \| 'vertical' \| 'inline-horizontal' \| 'inline-vertical' \| 'inline-auto'` | `'horizontal'` |
| align        | 文字的对齐位置                                                     |                  `TextAlign \| { label?: TextAlign; value?: TextAlign }`                  | `'left'`       |
| size         | 描述列表的大小                                                     |                          `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                           | `-`            |
| bordered     | 是否显示边框                                                       |                                         `boolean`                                         | `false`        |
| label-style  | 数据标签的样式                                                     |                                      `CSSProperties`                                      | `-`            |
| value-style  | 数据内容的样式                                                     |                                      `CSSProperties`                                      | `-`            |
| table-layout | 描述中表格样式的 `layout-fixed`，当设置成 `fixed` 时，宽度会均分。 |                                    `'auto' \| 'fixed'`                                    | `'auto'`       |
| aria-label   | 描述列表的无障碍标签                                               |                                         `string`                                          | `-`            |

### `<Descriptions>` Slots

| 插槽名 |   说明   | 参数                                                   |
| ------ | :------: | ------------------------------------------------------ |
| value  | 数据内容 | value: `string`<br>index: `number`<br>data: `DescData` |
| label  | 数据标签 | label: `string`<br>index: `number`<br>data: `DescData` |
| title  |   标题   | -                                                      |

### `<DescriptionsItem>` Props

| 属性  | 说明     |   类型   | 默认值 |
| ----- | -------- | :------: | :----- |
| span  | 所占列数 | `number` | `1`    |
| label | 标签     | `string` | `-`    |

### `<DescriptionsItem>` Slots

| 插槽名  | 说明 | 参数 |
| ------- | :--: | ---- |
| default | 内容 | -    |
| label   | 标签 | -    |

### DescData

| 参数名 | 描述     | 类型                       | 默认值 |
| ------ | -------- | -------------------------- | :----: |
| label  | 标签     | `string \| RenderFunction` |  `-`   |
| value  | 数据     | `string \| RenderFunction` |  `-`   |
| span   | 所占列数 | `number`                   |  `-`   |

## 类型定义

组件导出以下类型定义

```ts
import type { DescriptionsProps } from "@cedar-design/ui";
```

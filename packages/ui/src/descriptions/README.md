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

### Descriptions Props

| 属性         | 说明                                                               |                                           类型                                            | 默认值         |
| ------------ | ------------------------------------------------------------------ | :---------------------------------------------------------------------------------------: | :------------- |
| data         | 描述列表的数据                                                     |                                       `DescData[]`                                        | `[]`           |
| column       | 每行放置的数据个数。2.20.0 版本支持响应式配置，配置可参考 Grid     |                                `number \| ResponsiveValue`                                | `3`            |
| title        | 描述列表的标题                                                     |                                         `string`                                          | `-`            |
| layout       | 描述列表的排列方式                                                 | `'horizontal' \| 'vertical' \| 'inline-horizontal' \| 'inline-vertical' \| 'inline-auto'` | `'horizontal'` |
| align        | 文字的对齐位置                                                     |                  `TextAlign \| { label?: TextAlign; value?: TextAlign }`<br>`TextAlign: 'center' \| 'left' \| 'right'` | `'left'`       |
| size         | 描述列表的大小                                                     |                          `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                           | `-`            |
| bordered     | 是否显示边框                                                       |                                         `boolean`                                         | `false`        |
| label-style  | 数据标签的样式                                                     |                                      `CSSProperties`                                      | `-`            |
| value-style  | 数据内容的样式                                                     |                                      `CSSProperties`                                      | `-`            |
| table-layout | 描述中表格样式的 `layout-fixed`，当设置成 `fixed` 时，宽度会均分。 |                                    `'auto' \| 'fixed'`                                    | `'auto'`       |
| aria-label   | 描述列表的无障碍标签                                               |                                         `string`                                          | `-`            |

数据模式的 `label` 和 `value` 插槽中，`index` 是原始 `data` 数组的零起始索引，不随列数或布局变化。

列数及每项 span 必须是有限正整数，响应式配置的各分支遵循同一规则；无效列数回退 3，无效 span 回退 1。标题插槽自动关联表格名称，显式 `aria-label` 优先；默认插槽优先于 data，即使插槽为空。

### Descriptions Slots

| 插槽名 |   说明   | 参数                                                   |
| ------ | :------: | ------------------------------------------------------ |
| default | 条目列表，优先于 data | - |
| value  | 数据内容 | value: `string \| RenderFunction`<br>index: `number`<br>data: `DescData` |
| label  | 数据标签 | label: `string \| RenderFunction`<br>index: `number`<br>data: `DescData` |
| title  |   标题   | -                                                      |

### DescriptionsItem Props

| 属性  | 说明     |   类型   | 默认值 |
| ----- | -------- | :------: | :----- |
| span  | 所占列数 | `number` | `1`    |
| label | 标签     | `string` | `-`    |

### DescriptionsItem Slots

| 插槽名  | 说明 | 参数 |
| ------- | :--: | ---- |
| default | 内容 | -    |
| label   | 标签 | -    |

## Types

公开类型包括 `DescData`、`DescLayout`、`DescriptionsSlotScope`、`DescriptionsSlots` 和 `DescriptionsItemSlots`。

### DescData

| 参数名 | 描述     | 类型                       | 默认值 |
| ------ | -------- | -------------------------- | :----: |
| label  | 标签     | `string \| RenderFunction` |  `-`   |
| value  | 数据     | `string \| RenderFunction` |  `-`   |
| span   | 所占列数 | `number`                   |  `-`   |

组件导出以下类型定义

```ts
import type { DescriptionsProps } from "@cedar-design/ui-vue";
```

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-descriptions-border-bg-label` | `var(--c-color-fill-1)` | `background-color` |
| `--c-descriptions-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-border-item-size-lg-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-lg-padding-vertical` | `9px` | `padding` |
| `--c-descriptions-border-item-size-md-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-md-padding-vertical` | `5px` | `padding` |
| `--c-descriptions-border-item-size-sm-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-sm-padding-vertical` | `3px` | `padding` |
| `--c-descriptions-border-item-size-xl-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-xl-padding-vertical` | `var(--c-spacing-6)` | `padding` |
| `--c-descriptions-border-item-size-xs-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-xs-padding-vertical` | `3px` | `padding` |
| `--c-descriptions-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-descriptions-border-style` | `solid` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-border-width` | `1px` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-font-size-title` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-descriptions-font-weight-text-label` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-descriptions-font-weight-text-value` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-descriptions-font-weight-title` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-descriptions-inline-vertical-padding-extra` | `5px` | `padding` |
| `--c-descriptions-item-label-inline-margin-bottom` | `var(--c-spacing-1)` | `margin-bottom` |
| `--c-descriptions-item-label-inline-margin-right` | `var(--c-spacing-2)` | `margin-inline-end` |
| `--c-descriptions-item-label-padding-x` | `var(--c-spacing-2)` | `padding` |
| `--c-descriptions-item-size-lg-spacing-bottom` | `var(--c-spacing-6)` | `padding-bottom` |
| `--c-descriptions-item-size-md-spacing-bottom` | `var(--c-spacing-4)` | `padding`, `padding-bottom` |
| `--c-descriptions-item-size-sm-spacing-bottom` | `var(--c-spacing-2)` | `padding-bottom` |
| `--c-descriptions-item-size-xl-spacing-bottom` | `var(--c-spacing-7)` | `padding-bottom` |
| `--c-descriptions-item-size-xs-spacing-bottom` | `var(--c-spacing-1)` | `padding-bottom` |
| `--c-descriptions-size-lg-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-lg-title-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-descriptions-size-md-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-md-title-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-descriptions-size-sm-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-sm-title-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom` |
| `--c-descriptions-size-xl-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-xl-title-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-descriptions-size-xs-font-size-text` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-descriptions-size-xs-title-margin-bottom` | `var(--c-spacing-3)` | `margin-bottom` |
| `--c-descriptions-text-color-label` | `var(--c-color-text-3)` | `color` |
| `--c-descriptions-text-color-value` | `var(--c-color-text-1)` | `color` |
| `--c-descriptions-title-color` | `var(--c-color-text-1)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-descriptions-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

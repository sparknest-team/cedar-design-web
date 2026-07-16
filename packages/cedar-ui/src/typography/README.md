---
permalink: /components/typography/
---

# 排版 Typography

用于展示标题、段落、文本内容。

## 案例

### 基础用法

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

<demo src="./__demos__/basic.vue"></demo>

### 标题

展示不同级别的标题。

<demo src="./__demos__/title.vue"></demo>

### 文本

不同样式的文本。

<demo src="./__demos__/text.vue"></demo>

### 段落

文本段落样式。长文本推荐默认行高，短文本推荐 `spacing="close"`。

<demo src="./__demos__/paragraph.vue"></demo>

### 可交互

提供复制、编辑文本等功能。

<demo src="./__demos__/operations.vue"></demo>

### 省略

在空间不足时省略多行文本内容。支持 JS 测量省略、CSS 省略、Tooltip / Popover 以及展开折叠。

<demo src="./__demos__/ellipsis.vue"></demo>

## API

### Common Props

`Typography.Title`、`Typography.Paragraph`、`Typography.Text` 共享以下属性。

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| type | 文本类型 | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning'` | `-` |
| bold | 粗体 | `boolean` | `false` |
| mark | 添加标记样式 | `boolean \| { color: string }` | `false` |
| underline | 下划线样式 | `boolean` | `false` |
| delete | 删除线样式 | `boolean` | `false` |
| code | 代码块样式 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| editable | 开启可编辑功能 | `boolean` | `false` |
| editing **(v-model)** | 是否在编辑状态 | `boolean` | `-` |
| default-editing | 默认的编辑状态 | `boolean` | `false` |
| edit-text **(v-model)** | 编辑的文字 | `string` | `-` |
| copyable | 开启复制功能 | `boolean` | `false` |
| copy-text | 复制的文字 | `string` | `-` |
| copy-delay | 复制成功后，复制按钮恢复到可点击状态的延迟时间，单位是毫秒 | `number` | `3000` |
| ellipsis | 自动溢出省略，具体参数配置看 [EllipsisConfig](#ellipsisconfig) | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | 编辑按钮 Tooltip 配置 | `object` | `-` |
| copy-tooltip-props | 拷贝按钮 Tooltip 配置 | `object` | `-` |

### Common Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| edit-start | 开始编辑 | `-` |
| change | 编辑内容变化 | `text: string` |
| edit-end | 编辑结束 | `-` |
| copy | 复制 | `text: string` |
| ellipsis | 省略变化事件 | `isEllipsis: boolean` |
| expand | 展开收起事件 | `expanded: boolean` |

### Common Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| expand-node | 自定义展开和折叠按钮 | `expanded: boolean` |
| copy-icon | 自定义复制按钮图标 | `copied: boolean` |
| copy-tooltip | 自定义复制按钮的 tooltip 内容 | `copied: boolean` |

### `<TypographyTitle>` Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| heading | 标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

### `<TypographyParagraph>` Props

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| blockquote | 长引用 | `boolean` | `false` |
| spacing | 段落行高；长文本推荐默认行高，短文本推荐 `close` | `'default' \| 'close'` | `'default'` |

### EllipsisConfig

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | :---: |
| rows | 显示省略的行数 | `number` | `1` |
| expandable | 是否支持展开/折叠 | `boolean` | `false` |
| ellipsisStr | 省略号 | `string` | `'...'` |
| suffix | 后缀 | `string` | `-` |
| showTooltip | 配置省略时的弹出框 | `boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }` | `false` |
| css | 是否使用 CSS 省略（此模式暂不支持展开、自定义省略号和后缀） | `boolean` | `false` |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  TypographyInstance,
  TypographyParagraphInstance,
  TypographyTitleInstance,
  TypographyTextInstance,
  EllipsisConfig,
} from '@cedar/ui'
```

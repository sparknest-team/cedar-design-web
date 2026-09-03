---
permalink: /components/tag/
---

# Tag

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 案例

### 基础用法

标签的基本用法、常用颜色。

<demo src="./__demos__/basic.vue"></demo>

### 可关闭标签

通过 `closable` 属性控制标签是否可关闭。可关闭标签可通过 `close` 事件执行一些关闭后操作，也可通过 `show` 属性控制标签的显示或隐藏。

<demo src="./__demos__/closable.vue"></demo>

### 动态编辑标签

可动态添加和删除标签。

<demo src="./__demos__/dynamic-tag.vue"></demo>

### 可选中

通过设置 `checkable` ，可以实现点击选中的效果。

<demo src="./__demos__/checkable.vue"></demo>

### 标签的颜色

我们提供多种预设色彩的标签样式，通过 `color` 设置不同颜色。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。

<demo src="./__demos__/color.vue"></demo>

### 标签的尺寸

标签的大小分为：`sm`、`md`、`lg` 三种，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为 `md`。

<demo src="./__demos__/size.vue"></demo>

### 加载中状态

标签的加载中状态。

<demo src="./__demos__/loading.vue"></demo>

### 带图标的标签

可通过 `icon` 插槽在标签中加入图标。

<demo src="./__demos__/icon.vue"></demo>

### 状态与变体

通过 `status` 与 `variant` 切换不同语义颜色和呈现风格（与 Button 对齐）。`color` 与 `status` 同时设置时 `color` 优先。

<demo src="./__demos__/status.vue"></demo>

## API

### `<Tag>` Props

| 属性                  | 说明                                 | 类型                                                                                                                                                   | 默认值  |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| color                 | 自定义背景色（outline 时为边框色）   | `string`                                                                                                                                               | -       |
| text-color            | 自定义文字色                         | `string`                                                                                                                                               | -       |
| status                | 标签状态色（与 `color` 互斥，`color` 优先） | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| variant               | 标签变体（与 Button 对齐）           | `'default' \| 'outline'`                                                                                                                               | `'default'` |
| size                  | 标签的大小                           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                                                 | `'md'`  |
| show **(v-model)**    | 标签是否可见                         | `boolean`                                                                                                                                              | -       |
| default-show          | 标签默认是否可见                     | `boolean`                                                                                                                                              | `true`  |
| loading               | 标签是否为加载中状态                 | `boolean`                                                                                                                                              | `false` |
| closable              | 标签是否可关闭                       | `boolean`                                                                                                                                              | `false` |
| checkable             | 标签是否可选中                       | `boolean`                                                                                                                                              | `false` |
| checked **(v-model)** | 标签是否选中（标签可选中时可用）     | `boolean`                                                                                                                                              | -       |
| default-checked       | 标签默认选中状态（标签可选中时可用） | `boolean`                                                                                                                                              | `true`  |
| nowrap                | 内容是否不换行（超出省略）           | `boolean`                                                                                                                                              | `false` |
| round                 | 是否为圆角胶囊形                     | `boolean`                                                                                                                                              | `false` |

### `<Tag>` Events

| 事件名 | 说明                                   | 参数                                          |
| ------ | -------------------------------------- | --------------------------------------------- |
| close  | 点击关闭按钮时触发                     | `(event: MouseEvent) => void`                 |
| check  | 用户选中时触发（仅在可选中模式下触发） | `(check: boolean, event: MouseEvent) => void` |
| update:show | 可见状态变化                       | `(show: boolean) => void`                     |
| update:checked | 选中状态变化                     | `(checked: boolean) => void`                  |

### `<Tag>` Slots

| 插槽名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| default    | 标签内容       | -    |
| icon       | 图标           | -    |
| close-icon | 关闭按钮的图标 | -    |

### 类型定义

组件导出以下类型定义

```ts
import type { TagProps } from '@cedarjs/ui'
```

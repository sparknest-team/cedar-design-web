---
permalink: /components/anchor/
---

# Anchor

通过锚点可快速找到信息内容在当前页面的位置。

## 案例

### 基础用法

锚点的基本用法

<demo src="./__demos__/basic.vue"></demo>

### 无轴线模式

当页面滚动或浏览器窗口改变时，元素向下滚动到距底部一定距离时固定。

<demo src="./__demos__/show-line.vue"></demo>

### 固钉位置

使用 `affix` 组件可以让锚点固定在页面之内。

<demo src="./__demos__/affix.vue"></demo>

### 锚点滚动偏移量

可以设置 `boundary` 来定制锚点滚动偏移量。

<demo src="./__demos__/boundary.vue"></demo>

### 是否改变hash

可以设置点击锚点而不改变浏览器历史。

<demo src="./__demos__/hash.vue"></demo>

## API

### `<anchor>` Props

| 参数名           | 描述                                                                         | 类型                                                  |  默认值   |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- | :-------: |
| boundary         | 滚动边界值，设置该值为数字后，将会在距离滚动容器 `boundary` 距离时停止滚动。 | `'start' \| 'end' \| 'center' \| 'nearest' \| number` | `'start'` |
| show-line        | 是否显示左侧轴线                                                             | `boolean`                                             |  `true`   |
| show-background  | 是否显示背景                                                                 | `boolean`                                             |  `true`   |
| scroll-container | 滚动容器                                                                     | `string \| HTMLElement \| Window`                     |    `-`    |
| change-hash      | 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash                   | `boolean`                                             |  `true`   |

### `<anchor>` Events

| 事件名 | 描述               | 参数                                             |
| ------ | ------------------ | ------------------------------------------------ |
| select | 用户点击链接时触发 | hash: `string \| undefined`<br>preHash: `string` |
| change | 链接发生改变时触发 | hash: `string`                                   |

### `<anchor-link>` Props

| 参数名 | 描述               | 类型     | 默认值 |
| ------ | ------------------ | -------- | :----: |
| title  | 锚点链接的文本内容 | `string` |  `-`   |
| href   | 锚点链接的地址     | `string` |  `-`   |

### 类型定义

组件导出以下类型定义

```ts
import type { AnchorInstance } from '@cedarjs/ui'
```

---
permalink: /components/affix/
---

# Affix

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 案例

### 基础用法

基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。

<demo src="./__demos__/basic.vue"></demo>

### 底部固定

当页面滚动或浏览器窗口改变时，元素向下滚动到距底部一定距离时固定。

<demo src="./__demos__/bottom.vue"></demo>

### 滚动容器

用 `target` 设置需要监听其滚动事件的元素，默认为 window。

`target` 指定为非 window 容器时，可能会出现 `target`
外层元素滚动，固钉元素跑出滚动容器的问题。这个时候可以通过传入`targetContainer`传入`target`外层的滚动元素。`Affix`
会监听该元素的滚动事件来实时更新滚钉元素的位置。 当然您也可以在业务代码中自己监听target外层滚动元素的 `scroll`
事件，并调用 `updatePosition` 去更新固钉的位置。

<demo src="./__demos__/container.vue"></demo>

### 固定状态改变回调

当固定状态发生改变时，会触发事件。

<demo src="./__demos__/fix-change.vue"></demo>

### 顶部固定

当页面滚动或浏览器窗口改变时，元素向上滚动到距顶部一定距离时固定。

<demo src="./__demos__/top.vue"></demo>

## API

### `<affix>` Props

| 参数名           | 描述                                                                                                                                                                                                | 类型                              | 默认值 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | :----: |
| offset-top       | 距离窗口顶部达到指定偏移量后触发                                                                                                                                                                    | `number`                          |  `0`   |
| offset-bottom    | 距离窗口底部达到指定偏移量后触发                                                                                                                                                                    | `number`                          |  `-`   |
| target           | 滚动容器，默认是 `window`                                                                                                                                                                           | `string \| HTMLElement \| Window` |  `-`   |
| target-container | `target`的外层滚动元素，默认是 `window`。`Affix `将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题 | `string \| HTMLElement \| Window` |  `-`   |
| z-index          | 固钉时的层级                                                                                                                                                                                        | `number`                          | `10`   |
| disabled         | 是否禁用固钉                                                                                                                                                                                        | `boolean`                         | `false` |
| css-mode         | 是否使用原生 `position: sticky`                                                                                                                                                                     | `boolean`                         | `false` |

### `<affix>` Events

| 事件名 | 描述                   | 参数             |
| ------ | ---------------------- | ---------------- |
| change | 固定状态发生改变时触发 | fixed: `boolean` |

### `<affix>` Methods

| 方法名         | 描述     | 参数 | 返回值 |
| -------------- | -------- | ---- | ------ |
| updatePosition | 更新位置 | -    | -      |

### 类型定义

组件导出以下类型定义

```ts
import type { AffixInstance } from '@cedarjs/ui'
```

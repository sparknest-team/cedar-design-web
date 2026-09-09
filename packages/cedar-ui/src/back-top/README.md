---
permalink: /components/back-top/
---

# BackTop

可一键返回顶部的按钮。

## 案例

### 基础用法

当容器滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。

<demo src="./__demos__/basic.vue"></demo>

### 自定义按钮

可以自定义返回按钮。

<demo src="./__demos__/custom.vue"></demo>

## API

### `<back-top>` Props

| 参数名           | 描述                                                                           | 类型                    |    默认值    |
| ---------------- | ------------------------------------------------------------------------------ | ----------------------- | :----------: |
| visible-height   | 显示回到顶部按钮的触发滚动高度                                                 | `number`                |    `200`     |
| target-container | 滚动事件的监听容器                                                             | `string \| HTMLElement` |     `-`      |
| easing           | 滚动动画的缓动方式，可选值参考 [BTween](https://github.com/PengJiyuan/b-tween) | `string`                | `'quartOut'` |
| duration         | 滚动动画的持续时间                                                             | `number`                |    `200`     |

`popup-container` 支持 string / HTMLElement / false，省略挂载到 body；false 原地渲染。

### 类型定义

组件导出以下类型定义

```ts
import type { BackTopInstance } from '@cedarjs/ui'
```

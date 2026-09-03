---
permalink: /components/infinite-scroll/
---

# InfiniteScroll

InfiniteScroll 负责检测接近滚动底部并驱动分页状态，不负责请求、数据拼接或列表布局。通常与 `List` 组合使用。

## 案例

### 与列表组合

`status` 是唯一分页状态。组件触底时先同步更新为 `loading`，再触发 `load`；请求结束后由业务更新为 `idle`、`error` 或 `finished`。

<demo src="./__demos__/list.vue"></demo>

### 加载失败

请求失败时将 `status` 设置为 `error`。默认错误区域和 `error` 插槽都可以触发 `retry`，重试事件不会额外触发 `load`。

<demo src="./__demos__/error.vue"></demo>

### 自定义状态

通过 `loading`、`finished` 插槽自定义底部状态，同时可使用 CSS 长度设置 `bottom-offset`。

<demo src="./__demos__/custom-status.vue"></demo>

虚拟列表场景应将 `target` 指向实际虚拟滚动容器，并在追加数据后把 `status` 改回 `idle`；必要时调用 `check()`。

## API

### `<infinite-scroll>` Props

| 参数名        | 描述                                               | 类型                                           | 默认值   |
| ------------- | -------------------------------------------------- | ---------------------------------------------- | -------- |
| status        | 分页状态，支持 `v-model:status`                    | `'idle' \| 'loading' \| 'error' \| 'finished'` | `'idle'` |
| bottom-offset | 距离底部的触发阈值，数字按 px，字符串按 CSS length | `string \| number`                             | `0`      |
| immediate     | 挂载并解析滚动容器后是否立即检查                   | `boolean`                                      | `true`   |
| disabled      | 是否暂停加载和重试                                 | `boolean`                                      | `false`  |
| target        | 滚动容器；未传时使用最近滚动父级                   | `string \| HTMLElement`                        | `-`      |

### `<infinite-scroll>` Events

| 事件名        | 描述                       | 参数      |
| ------------- | -------------------------- | --------- |
| update:status | 请求分页状态改为 `loading` | `loading` |
| load          | 空闲状态下到达阈值时触发   | -         |
| retry         | 错误状态下调用重试时触发   | -         |

`retry` 不会同时触发 `load`。业务可让两个事件调用同一个请求函数。

### `<infinite-scroll>` Methods

| 方法名 | 描述                         |
| ------ | ---------------------------- |
| check  | 立即检查当前是否到达加载阈值 |
| retry  | 在 `error` 状态下发起重试    |

### `<infinite-scroll>` Slots

| 插槽名   | 描述             | 参数                |
| -------- | ---------------- | ------------------- |
| default  | 被监听的内容     | -                   |
| loading  | 分页加载状态     | -                   |
| error    | 分页失败状态     | `retry: () => void` |
| finished | 全部加载完成状态 | -                   |

默认错误区域可点击重试。`finished` 是终态，只有外部将 `status` 重置为 `idle` 后才会恢复检测。

### 类型定义

```ts
import type {
  InfiniteScrollInstance,
  InfiniteScrollMethods,
  InfiniteScrollProps,
  InfiniteScrollStatus,
} from "@cedarjs/ui";
```

---
permalink: /components/infinite-scroll/
---

# InfiniteScroll

InfiniteScroll 负责检测接近滚动底部并驱动分页状态，不负责请求、数据拼接或列表布局。通常与 `List` 组合使用。

## 基础示例

### 与列表组合

`status` 是唯一分页状态。组件触底时先同步更新为 `loading`，再触发 `load`；请求结束后由业务更新为 `idle`、`error` 或 `finished`。

<demo src="./__demos__/list.vue"></demo>

## 内容与展示

### 加载失败

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 分页状态，支持 `v-model:status` | 加载失败 |
| `target` | 滚动容器；未传时使用最近滚动父级 | 加载失败 |
<!-- demo-config-notes:end -->

请求失败时将 `status` 设置为 `error`。默认错误区域和 `error` 插槽都可以触发 `retry`，重试事件不会额外触发 `load`。

<demo src="./__demos__/error.vue"></demo>

自定义重试操作请使用按钮，支持键盘 Enter/Space。示例中的模拟请求会在卸载或停用时清理计时器，避免离开页面后继续回写。

基础、自定义状态和错误重试示例均清理模拟请求；KeepAlive 恢复后可从 idle 状态重新加载，不复用取消前的计时器。

## 自定义与插槽

### 自定义状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 分页状态，支持 `v-model:status` | 自定义状态 |
| `target` | 滚动容器；未传时使用最近滚动父级 | 自定义状态 |
| `bottom-offset` | 距离底部的触发阈值，数字按 px，字符串按 CSS length | 自定义状态 |
<!-- demo-config-notes:end -->

通过 `loading`、`finished` 插槽自定义底部状态，同时可使用 CSS 长度设置 `bottom-offset`。

<demo src="./__demos__/custom-status.vue"></demo>

虚拟列表场景应将 `target` 指向实际虚拟滚动容器，并在追加数据后把 `status` 改回 `idle`；必要时调用 `check()`。

## 生命周期与边界

### 测量绑定生命周期

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 分页状态，支持 `v-model:status` | 测量绑定生命周期 |
| `target` | 滚动容器；未传时使用最近滚动父级 | 测量绑定生命周期 |
| `immediate` | 挂载并解析滚动容器后是否立即检查 | 测量绑定生命周期 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

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
} from "@cedar-design/ui";
```

### 样式变量

| 变量名                                          | 默认值                  |
| ----------------------------------------------- | ----------------------- |
| `--c-infinite-scroll-status-min-height`         | `50px`                  |
| `--c-infinite-scroll-status-padding`            | `12px 0`                |
| `--c-infinite-scroll-status-color`              | `var(--c-color-text-3)` |
| `--c-infinite-scroll-status-font-size`          | `var(--c-font-size-md)` |
| `--c-infinite-scroll-loading-gap`               | `8px`                   |
| `--c-infinite-scroll-error-color`               | `var(--c-color-danger)` |

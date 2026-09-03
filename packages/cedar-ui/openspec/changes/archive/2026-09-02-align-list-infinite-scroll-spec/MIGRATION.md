# List / InfiniteScroll 迁移指南

BREAKING。无 alias、无旧路径 re-export、无 shim。两端统一拆为展示型 `List` 与行为型 `InfiniteScroll`。

## 组件职责

| 需求 | 新组件 |
| --- | --- |
| 展示数组、列表项、头尾、空态、整表首次加载或刷新 | `List` / `ListItem` |
| 监听滚动、触底加载下一页、分页失败重试、分页完成 | `InfiniteScroll` |

`List.loading` 与 `InfiniteScroll.status="loading"` 不能互相替代：

- `List.loading`：整张列表首次加载或刷新。
- `InfiniteScroll.status='loading'`：正在请求下一页。

## Cedar：从 List 移出无限加载

| 旧 `List` API | 新 API |
| --- | --- |
| `bottomOffset` | `InfiniteScroll.bottomOffset` |
| `@reachBottom` | `InfiniteScroll @load` |
| `#scroll-loading` | `InfiniteScroll #loading` |

旧：

```vue
<c-list :data="items" :bottom-offset="40" @reach-bottom="loadMore">
  <template #item="{ item }">
    <c-list-item>{{ item.name }}</c-list-item>
  </template>
  <template #scroll-loading>加载中</template>
</c-list>
```

新：

```vue
<c-infinite-scroll
  v-model:status="status"
  :bottom-offset="40"
  @load="loadMore"
  @retry="loadMore"
>
  <c-list :data="items">
    <template #item="{ item }">
      <c-list-item>{{ item.name }}</c-list-item>
    </template>
  </c-list>
  <template #loading>加载中</template>
</c-infinite-scroll>
```

迁移注意：

- `List` 不再发出任何分页事件。
- `List.size` 只保留 `sm | md | lg`；旧 `xs` / `xl` 必须改为最近的设计尺寸，不提供别名值。
- Cedar 的 `maxHeight`、`virtualListProps`、`scrollbar`、`scroll`、`scrollIntoView` 仍属于 `List`。
- 虚拟列表组合时，将 `InfiniteScroll.target` 指向实际虚拟滚动容器；不要自行恢复 `reachBottom`。

## Maple：旧 List 无限加载器改为 InfiniteScroll

| 旧 `List` | 新 `InfiniteScroll` |
| --- | --- |
| `v-model:loading` | `v-model:status`，值使用 `'idle' | 'loading' | 'error' | 'finished'` |
| `v-model:error` | `status='error'` |
| `:finished="true"` | `status='finished'` |
| `offset` | `bottomOffset` |
| `immediateCheck` | `immediate` |
| `@update:loading` | `@update:status` |
| `@update:error` | `@update:status` |
| `@load` | `@load` |
| 暴露 `load()` | 暴露 `retry()`；主动位置检测使用 `check()` |
| `#loading` / `#error` / `#finished` | 同名 slots；`#error="{ retry }"` 可主动重试 |

旧：

```vue
<mp-list
  v-model:loading="loading"
  v-model:error="error"
  :finished="finished"
  :offset="'10vh'"
  :immediate-check="true"
  @load="loadMore"
>
  <mp-cell v-for="item in items" :key="item.id">
    {{ item.name }}
  </mp-cell>
</mp-list>
```

新：

```vue
<mp-infinite-scroll
  v-model:status="status"
  bottom-offset="10vh"
  :immediate="true"
  @load="loadMore"
  @retry="loadMore"
>
  <mp-cell v-for="item in items" :key="item.id">
    {{ item.name }}
  </mp-cell>
</mp-infinite-scroll>
```

请求处理从多个布尔值改为单一状态：

```ts
type InfiniteScrollStatus = 'idle' | 'loading' | 'error' | 'finished'

const status = ref<InfiniteScrollStatus>('idle')

async function loadMore() {
  try {
    const next = await fetchNextPage()
    items.value.push(...next.items)
    status.value = next.hasMore ? 'idle' : 'finished'
  } catch {
    status.value = 'error'
  }
}
```

组件在 `load` 前已同步请求把 status 更新为 `loading`。调用方不要在 `loadMore` 开头重复制造另一套 loading 状态，只需在请求完成后设置 `idle`、`error` 或 `finished`。

默认 error 区可点击重试。自定义错误区：

```vue
<template #error="{ retry }">
  <button type="button" @click="retry">重试</button>
</template>
```

调用 `retry()` 会先请求 `status='loading'`，再发出一次 `retry`，不会同时发出 `load`。请求入口应分别绑定 `@load` 与 `@retry`，或让两者调用同一个业务函数。

## Maple：使用新的展示型 List

Maple 的 `List` 名称现在属于展示型组件。需要结构化展示数据时使用：

```vue
<mp-list :data="items" size="md">
  <template #header>联系人</template>
  <template #item="{ item, index }">
    <mp-list-item>
      <template #prefix>{{ index + 1 }}</template>
      {{ item.name }}
      <template #suffix>{{ item.phone }}</template>
    </mp-list-item>
  </template>
  <template #empty>暂无数据</template>
</mp-list>
```

同时提供 `default` slot 和 `data` 时，`default` 优先，`item` 不会被调用：

```vue
<mp-list :data="items">
  <mp-list-item>这段 default 内容优先</mp-list-item>
  <template #item="{ item }">{{ item }}</template>
</mp-list>
```

## bottomOffset

- 数字按 px：`:bottom-offset="24"` 表示 `24px`。
- 字符串按 CSS length：`bottom-offset="2rem"`、`bottom-offset="10vh"`、`bottom-offset="calc(1rem + 8px)"`。
- 不要依赖旧实现对字符串执行 `parseFloat` 的结果；单位现在参与实际换算。

## target 与滚动容器

默认情况下，`InfiniteScroll` 自动寻找最近滚动父级。需要明确目标时可传 selector 或 HTMLElement：

```vue
<div id="feed-scroller" class="scroller">
  <c-infinite-scroll
    v-model:status="status"
    target="#feed-scroller"
    @load="loadMore"
  >
    <!-- content -->
  </c-infinite-scroll>
</div>
```

```vue
<c-infinite-scroll
  v-model:status="status"
  :target="scrollerElement"
  @load="loadMore"
/>
```

`target` 只在客户端挂载后解析；SSR 不需要提供 DOM 兜底分支。target 变化时组件会清理旧监听并绑定新容器。

## Tab / PullRefresh / 虚拟列表

### Tab

隐藏 Tab 不触发加载，重新激活后组件会检查一次。若业务 Tab 实现无法被组件自动感知，在激活回调中调用实例的 `check()`。

### PullRefresh

刷新期间暂停分页，刷新完成后重置：

```ts
async function refresh() {
  infiniteDisabled.value = true
  const firstPage = await fetchFirstPage()
  items.value = firstPage.items
  status.value = firstPage.hasMore ? 'idle' : 'finished'
  infiniteDisabled.value = false
  await nextTick()
  infiniteScrollRef.value?.check()
}
```

### Cedar 虚拟列表

保留 `List.virtualListProps`，并让 `InfiniteScroll.target` 指向虚拟列表的实际滚动元素。追加数据并把 status 设回 `idle` 后，调用 `check()` 可处理内容仍不足一屏的情况。

## 删除清单

### Cedar

- 删除 `List.bottomOffset`
- 删除 `List` 的 `reachBottom`
- 删除 `List` 的 `scroll-loading`
- 删除相关 demo、类型、样式和测试残留

### Maple

- 删除无限加载器语义的旧 `List`
- 删除 `loading`、`error`、`finished`、`offset`、`immediateCheck`
- 删除 `update:loading`、`update:error`
- 删除旧 `list` 路径到 `InfiniteScroll` 的转发
- 新建并使用展示型 `List` / `ListItem`

所有调用方必须一次性迁移到新名称与状态模型，不要在业务侧封装旧 API 兼容层。

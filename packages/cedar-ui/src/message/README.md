---
permalink: /components/message/
---

# Message

由用户的操作触发的轻量级全局反馈（纯函数式，无声明式组件）。

与 Maple 共享的函数式案例顺序：基本使用 → 消息类型 → 自定义图标 → 位置 → 显示时长 → 可关闭 → 更新内容 → Loading 常驻 → 多实例。末尾为 Web 扩展。

## 案例

### 基本使用

全局提示的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 消息类型

`info` / `success` / `warning` / `error` / `loading` / `normal`。`normal` 默认无图标。`loading` 默认 `duration: 0`（常驻，需手动 `close`）。

<demo src="./__demos__/type.vue"></demo>

### 自定义图标

设置 `icon` 来自定义图标。

<demo src="./__demos__/custom-icon.vue"></demo>

### 位置

`top` / `bottom`（Maple 另有 `center`）。

<demo src="./__demos__/location.vue"></demo>

### 显示时长

设置 `duration`（ms），`0` 表示不自动关闭。

<demo src="./__demos__/time.vue"></demo>

### 可关闭

设置 `closable` 显示关闭按钮。

<demo src="./__demos__/closable.vue"></demo>

### 更新内容

相同 `id` 会更新已有消息；传入 `duration` 可重置定时器。

<demo src="./__demos__/update.vue"></demo>

### Loading 常驻

`Message.loading` 默认不自动关闭，调用返回句柄的 `close`。

<demo src="./__demos__/loading.vue"></demo>

### 多实例

默认支持同屏堆叠多个消息。`Message.clear()` 清空全部；也可 `Message.clear('top')` 按位置清空。

<demo src="./__demos__/multiple.vue"></demo>

### 悬停暂停关闭（Web）

设置 `resetOnHover`，鼠标悬停时暂停自动关闭（Maple 不支持）。

<demo src="./__demos__/reset-on-hover.vue"></demo>

## API

### `Message` 全局方法

#### MessageMethod

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| info | 显示信息提示 | `(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn` | - |
| success | 显示成功提示 | 同上 | - |
| warning | 显示警告提示 | 同上 | - |
| error | 显示错误提示 | 同上 | - |
| loading | 显示加载中提示（默认 `duration: 0`） | 同上 | - |
| normal | 显示普通提示（默认无图标） | 同上 | - |
| clear | 清空全部提示 | `(position?: MessagePosition) => void` | - |

#### MessageConfig（与 Maple 共享核心字段）

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 内容 | `RenderContent` | - |
| id | 唯一 id，相同则更新 | `string` | 自动生成 |
| icon | 自定义图标 | `RenderFunction` | - |
| position | 位置 | `'top' \| 'bottom'` | `top` |
| showIcon | 是否显示图标 | `boolean` | `true` |
| closable | 是否显示关闭按钮 | `boolean` | `false` |
| duration | 显示时长（ms），`0` 不自动关闭 | `number` | `3000`（`loading` 为 `0`） |
| onClose | 关闭回调 | `(id: number \| string) => void` | - |
| resetOnHover | 鼠标悬停暂停自动关闭（Web 扩展） | `boolean` | `false` |

> Web 不含 Maple 的 `center` / `action` / `forbidClick` / `lockScroll` / `vertical`，以及声明式组件。

#### MessageReturn

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| close | 关闭当前消息 | `() => void` |

### 类型定义

```ts
import type { MessageMethod, MessageConfig, MessageReturn, MessagePosition } from '@cedar/ui'
```

---
permalink: /components/message/
---

# Message

由用户的操作触发的轻量级全局反馈。

## 案例

### 基础用法

全局提示的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 消息类型

全局提示有 6 种不同的类型，分别为：`info`, `success`, `warning`, `error`, `loading`。增加 `normal` 类型，此类型下默认没有图标。

<demo src="./__demos__/type.vue"></demo>

### 自定义图标

设置 `icon` 来自定义图标。

<demo src="./__demos__/custom-icon.vue"></demo>

### 全局提示的位置

全局提示有 2 种不同的弹出位置，分别为顶部和底部。

<demo src="./__demos__/location.vue"></demo>

### 可关闭

设置 `closable` 来显示关闭按钮。

<demo src="./__demos__/closable.vue"></demo>

### 更新内容

更新消息内容，通过设置 `duration` 属性可以重置定时器。

<demo src="./__demos__/duration.vue"></demo>

## API

### `Message` 全局方法

#### MessageMethod

| 属性    | 说明           | 类型                                                                            | 默认值 |
| ------- | -------------- | ------------------------------------------------------------------------------- | ------ |
| info    | 显示信息提示   | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| success | 显示成功提示   | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| warning | 显示警告提示   | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| error   | 显示错误提示   | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| loading | 显示加载中提示 | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| normal  | 显示提示       | `( config: string \| MessageConfig, appContext?: AppContext ) => MessageReturn` | -      |
| clear   | 清空全部提示   | `(position?: MessagePosition) => void`                                          | -      |

#### MessageConfig

| 属性         | 说明                       | 类型                             | 默认值  |
| ------------ | -------------------------- | -------------------------------- | ------- |
| content      | 内容                       | `RenderContent`                  | -       |
| id           | 唯一id                     | `string`                         | -       |
| icon         | 消息的图标                 | `RenderFunction`                 | -       |
| position     | 消息的位置                 | `'top'\|'bottom'`                | -       |
| showIcon     | 是否显示图标               | `boolean`                        | `false` |
| closable     | 是否显示关闭按钮           | `boolean`                        | `false` |
| duration     | 消息显示的持续时间         | `number`                         | -       |
| onClose      | 关闭时的回调函数           | `(id: number \| string) => void` | -       |
| resetOnHover | 设置鼠标移入后不会自动关闭 | `boolean`                        | `false` |

#### MessageReturn

| 属性  | 说明         | 类型         | 默认值 |
| ----- | ------------ | ------------ | ------ |
| close | 关闭当前消息 | `() => void` | -      |

### 类型定义

组件导出以下类型定义

```ts
import type { MessageProps } from '@cedar/ui'
```

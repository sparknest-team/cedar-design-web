---
permalink: /components/config-provider/
---

# ConfigProvider

在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。

## 基础示例

### 基础用法

通过 Provider 为子组件设置统一尺寸，点击按钮在 sm / lg 之间切换；内部 Input 和 Button 无需重复声明 size。

<demo src="./__demos__/basic.vue"></demo>

## API

### ConfigProvider Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| dir | 阅读方向；省略时继承来源作用域。物理 left/right 方位保持原意。 | `ReadingDirection` (`ltr` / `rtl`) | — |
| type | 参数类型 | string | -      |

### ConfigProvider Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### ConfigProvider Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { ConfigProviderProps } from '@cedar-design/ui'
```


## 阅读方向

使用 `<c-config-provider dir="rtl">` 设置局部 RTL；省略 dir 时继承父级，可嵌套 `dir="ltr"` 切回 LTR。普通原生 DOM dir 容器同样有效。Provider 使用 display: contents 的 div 承载方向，不增加布局盒子；请放在允许 div 的 HTML 上下文中。它不会修改整个 document。发布前将原 rtl 布尔配置统一收敛为 dir；明确表示物理左右的方位 API 保持原意。

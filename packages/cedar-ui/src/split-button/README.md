---
permalink: /components/split-button/
---

# SplitButton 分裂按钮

将一个主操作与一组相关菜单操作组合在同一个按钮组中。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## API

### `<split-button>` Props

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| open **(v-model)** | 菜单是否打开 | `boolean` | `-` |
| default-open | 菜单默认是否打开（非受控模式） | `boolean` | `false` |
| disabled | 是否禁用整个分裂按钮 | `boolean` | `false` |
| status | 按钮组主题色 | `SemanticStatus` | `default` |
| variant | 按钮组变体 | `ButtonVariant` | `default` |
| size | 按钮组尺寸 | `ComponentSize` | `md` |
| color | 自定义背景色 | `string` | `''` |
| text-color | 自定义文字色 | `string` | `''` |
| elevation | 按钮组海拔阴影 | `boolean \| number` | `true` |
| button-props | 主按钮属性 | `Partial<ButtonProps>` | `-` |
| trigger-button-props | 菜单触发按钮属性 | `Partial<ButtonProps>` | `-` |
| auto-loading | 主按钮异步点击时是否自动加载 | `boolean` | `false` |
| trigger | 菜单触发方式 | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `click` |
| placement | 菜单弹出位置 | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | `bottom` |
| popup-container | 菜单挂载容器 | `string \| HTMLElement` | `-` |
| popup-max-height | 菜单最大高度 | `boolean \| number` | `true` |
| hide-on-select | 选择菜单项后是否关闭菜单 | `boolean` | `true` |

### `<split-button>` Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| update:open | 菜单打开状态请求更新时触发 | open: `boolean` |
| open-change | 菜单打开状态变化时触发 | open: `boolean` |
| click | 点击主按钮时触发 | event: `MouseEvent` |
| select | 选择菜单项时触发 | value, option, event |

### `<split-button>` Slots

| 插槽名 | 描述 | 参数 |
| ------ | ---- | ---- |
| default | 主按钮内容 | - |
| icon | 菜单触发按钮图标 | open: `boolean` |
| content | 菜单内容 | - |

## 类型定义

```ts
import type { SplitButtonInstance, SplitButtonProps } from '@cedarjs/ui'
```

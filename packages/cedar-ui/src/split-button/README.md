---
permalink: /components/split-button/
---

禁用的分段复用 Button 禁用配色并关闭交互反馈；整体禁用同时移除组阴影，仅禁用菜单按钮会阻止菜单打开并关闭非受控的已打开菜单。

# SplitButton 分裂按钮

将一个主操作与一组相关菜单操作组合在同一个按钮组中。

示例统一使用两端都支持的 `Message.info(...)`。默认选择菜单项后关闭；仅“浮层与连续选择”设置 `hide-on-select=false`，保留菜单并显示选择反馈。箭头通过 icon 插槽显示，两段默认继承相同的 variant、status 和自定义颜色，图标布局不改变配色。

## 案例

两端示例场景及交互逻辑保持一致，分别维护代码副本；仅组件前缀、包名和文档语言接入不同。

### 基础用法

主按钮执行发布，右侧按钮展开菜单；菜单项提供稳定的 value，并展示无权限的禁用项。

<demo src="./__demos__/basic.vue"></demo>

### 视觉变体

统一展示 default、outline、tonal、text 四种变体。

<demo src="./__demos__/variants.vue"></demo>

### 禁用状态

对比整体禁用、仅主按钮禁用、仅菜单按钮禁用。整体 disabled 优先，子按钮的 disabled: false 不能解除整体禁用。

<demo src="./__demos__/disabled.vue"></demo>

### 五档尺寸

支持 xs、sm、md、lg、xl 五档尺寸，默认 md；窄屏自动换行。

<demo src="./__demos__/sizes.vue"></demo>

### 自定义图标

使用 icon 插槽中的 open 状态旋转箭头，两端使用相同图标。

<demo src="./__demos__/custom-icon.vue"></demo>

### 受控展开

外部控制按钮使用 `@click.stop`，避免同一次点击冒泡到 document 后被判定为菜单外部点击。菜单触发器及正常的点击外部关闭逻辑不受影响。

使用 v-model:open 双向控制菜单；外部按钮、菜单触发器和选中关闭会同步更新状态。

<demo src="./__demos__/controlled.vue"></demo>

### 浮层与连续选择

演示 bottom-start、8px 纵向偏移和 160px 最大高度。hide-on-select=false 支持连续选择，页面显示最近选中的 value。

<demo src="./__demos__/popup.vue"></demo>

### 外观组合

适用于主操作和附加菜单。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 异步操作

@click 直接返回 Promise，auto-loading 等待完成并阻止重复点击；完成次数用于观察是否重复执行。

<demo src="./__demos__/async-action.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<split-button>` Props

| 参数名               | 描述                                      | 类型                                             |  默认值   |
| -------------------- | ----------------------------------------- | ------------------------------------------------ | :-------: |
| open **(v-model)**   | 菜单是否打开                              | `boolean`                                        |    `-`    |
| default-open         | 菜单默认是否打开（非受控模式）            | `boolean`                                        |  `false`  |
| disabled             | 是否禁用整个分裂按钮                      | `boolean`                                        |  `false`  |
| status               | 按钮组主题色                              | `SemanticStatus`                                 | `default` |
| variant              | 按钮组变体                                | `ButtonVariant`                                  | `default` |
| size                 | 按钮组尺寸                                | `ComponentSize`                                  |   `md`    |
| color                | 自定义背景色                              | `string`                                         |   `''`    |
| text-color           | 自定义文字色                              | `string`                                         |   `''`    |
| elevation            | 按钮组海拔阴影                            | `boolean \| number`                              |  `true`   |
| button-props         | 主按钮属性                                | `Partial<ButtonProps>`                           |    `-`    |
| trigger-button-props | 菜单触发按钮属性                          | `Partial<ButtonProps>`                           |    `-`    |
| auto-loading         | 主按钮异步点击时是否自动加载              | `boolean`                                        |  `false`  |
| trigger              | 菜单触发方式                              | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` |  `click`  |
| placement            | 菜单弹出位置                              | `MenuPosition`（标准十二方位）           | `bottom`  |
| popup-container      | 菜单挂载容器                              | `PopupContainer`                                 |    `-`    |
| popup-max-height     | 菜单最大高度                              | `boolean \| number`                              |  `true`   |
| popup-class          | 菜单浮层类名                              | `string \| array \| object`                      |    `-`    |
| offset-x             | 屏幕水平偏移，数字为 px，字符串按长度转换 | `string \| number`                               |    `0`    |
| offset-y             | 屏幕垂直偏移，数字为 px，字符串按长度转换 | `string \| number`                               |    `0`    |
| hide-on-select       | 选择菜单项后是否关闭菜单                  | `boolean`                                        |  `true`   |

### `<split-button>` Events

| 事件名      | 描述                       | 参数                 |
| ----------- | -------------------------- | -------------------- |
| update:open | 菜单打开状态请求更新时触发 | open: `boolean`      |
| open-change | 菜单打开状态变化时触发     | open: `boolean`      |
| click       | 点击主按钮时触发           | event: `MouseEvent`  |
| select      | 选择菜单项时触发           | value, option, event |

### `<split-button>` Slots

| 插槽名  | 描述             | 参数            |
| ------- | ---------------- | --------------- |
| default | 主按钮内容       | -               |
| icon    | 菜单触发按钮图标 | open: `boolean` |
| content | 菜单内容         | -               |

### 实例方法

| 方法     | 说明                       |
| -------- | -------------------------- |
| open()   | 请求展开菜单；禁用时不展开 |
| close()  | 请求关闭菜单               |
| resize() | 重新计算菜单位置           |

受控 `open` 只发出更新请求，需由调用方更新。主按钮点击正常冒泡，不打开菜单。

`click` 与 Button 一样是消费 Promise 返回值的 `onClick` 控制回调 Prop，支持 `@click`，不再通过 `emit` 重复分发。与 `button-props.onClick` 同时设置时，各执行一次。

两端主体、Props、样式依赖入口及契约测试独立同源复制；Cedar 菜单定位由 Menu 适配，不共享实例或运行时。

## 类型定义

```ts
import type { SplitButtonInstance, SplitButtonProps } from '@cedar-design/ui'
```

---
permalink: /components/split-button/
---

禁用的分段复用 Button 禁用配色并关闭交互反馈；整体禁用同时移除组阴影，仅禁用菜单按钮会阻止菜单打开并关闭非受控的已打开菜单。

# SplitButton 分裂按钮

将一个主操作与一组相关菜单操作组合在同一个按钮组中。

示例统一使用两端都支持的 `Message.info(...)`。默认选择菜单项后关闭；仅“浮层与连续选择”设置 `hide-on-select=false`，保留菜单并显示选择反馈。箭头通过 icon 插槽显示，两段默认继承相同的 variant、status 和自定义颜色，图标布局不改变配色。

## 基础示例

### 基础用法

主按钮执行发布，右侧按钮展开菜单；菜单项提供稳定的 value，并展示无权限的禁用项。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 视觉变体

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `variant` | 按钮组变体 | 视觉变体 |
| `disabled` | 是否禁用整个分裂按钮 | 禁用状态 |
| `button-props` | 主按钮属性 | 禁用状态 |
| `trigger-button-props` | 菜单触发按钮属性 | 禁用状态 |
| `placement` | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 外观配置对比 |
<!-- demo-config-notes:end -->

统一展示 default、outline、tonal、text 四种变体。

<demo src="./__demos__/variants.vue"></demo>

### 禁用状态

对比整体禁用、仅主按钮禁用、仅菜单按钮禁用。整体 disabled 优先，子按钮的 disabled: false 不能解除整体禁用。

<demo src="./__demos__/disabled.vue"></demo>

### 外观配置对比

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 五档尺寸

支持 xs、sm、md、lg、xl 五档尺寸，默认 md；窄屏自动换行。

#### 外观组合

适用于主操作和附加菜单。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

## 内容与展示

### 浮层与连续选择

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `placement` | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | 浮层与连续选择 |
| `offset-y` | 屏幕垂直偏移，数字为 px，字符串按长度转换 | 浮层与连续选择 |
| `popup-max-height` | 菜单最大高度 | 浮层与连续选择 |
| `hide-on-select` | 选择菜单项后是否关闭菜单 | 浮层与连续选择 |
<!-- demo-config-notes:end -->

演示 bottom-start、8px 纵向偏移和 160px 最大高度。hide-on-select=false 支持连续选择，页面显示最近选中的 value。

<demo src="./__demos__/popup.vue"></demo>

## 自定义与插槽

### 自定义图标

使用 icon 插槽中的 open 状态旋转箭头，两端使用相同图标。

<demo src="./__demos__/custom-icon.vue"></demo>

## 交互与控制

### 受控展开

外部控制按钮使用 `@click.stop`，避免同一次点击冒泡到 document 后被判定为菜单外部点击。菜单触发器及正常的点击外部关闭逻辑不受影响。

使用 v-model:open 双向控制菜单；外部按钮、菜单触发器和选中关闭会同步更新状态。

<demo src="./__demos__/controlled.vue"></demo>

## 异步与动态数据

### 异步操作

`click` 为普通通知事件，组件不处理监听器返回值，也不会自动切换加载状态。`button-props.loading` 由业务控制，异步操作建议在 `finally` 中恢复。禁用或加载中的链接会移除有效 `href`。

<demo src="./__demos__/async-action.vue"></demo>

## 阅读方向

主按钮位于阅读起点，菜单按钮位于阅读终点；LTR/RTL 切换不交换业务动作或额外触发选择。Enter/Space 保留原生按钮行为，菜单按钮支持上下键打开菜单并跳过禁用项，Home/End 定位首尾，Enter 选择，Escape 关闭并归还焦点。弹层继承触发按钮来源方向，start/end 对齐随方向变化，显式 left/right 保持物理侧。自定义向下图形不额外镜像。

## 菜单按钮名称

菜单触发按钮默认使用本地化的“更多操作”名称；可通过 `trigger-button-props` 提供 `aria-label` 或 `aria-labelledby` 覆盖。

## 触发与定位

### 弹层定位

通过 `placement` 设置附加菜单的弹出方向，可选值见 `MenuPlacement`。

## API

### SplitButton Props

| 参数名               | 描述                                      | 类型                                             |  默认值   |
| -------------------- | ----------------------------------------- | ------------------------------------------------ | :-------: |
| open **(v-model)**   | 菜单是否打开                              | `boolean`                                        |    `-`    |
| default-open         | 菜单默认是否打开（非受控模式）            | `boolean`                                        |  `false`  |
| disabled             | 是否禁用整个分裂按钮                      | `boolean`                                        |  `false`  |
| status               | 按钮组主题色                              | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `default` |
| variant              | 按钮组变体                                | `ButtonVariant`<br>`'text' \| 'default' \| 'outline' \| 'tonal'` | `default` |
| size                 | 按钮组尺寸，不影响菜单项尺寸              | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |   `md`    |
| color                | 自定义背景色                              | `string`                                         |   `undefined`    |
| text-color           | 自定义文字色                              | `string`                                         |   `''`    |
| elevation            | 按钮组海拔阴影                            | `boolean \| number`                              |  `true`   |
| button-props         | 主按钮属性，支持原生属性及事件            | `SplitButtonButtonProps`                           |    `-`    |
| trigger-button-props | 菜单触发按钮属性，支持原生属性及事件      | `SplitButtonButtonProps`                           |    `-`    |
| trigger              | 菜单触发方式                              | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` |  `click`  |
| placement            | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `MenuPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom`  |
| popup-container      | 菜单挂载容器                              | `PopupContainer`                                 |    `-`    |
| popup-max-height     | 菜单最大高度                              | `boolean \| number`                              |  `true`   |
| popup-class          | 菜单浮层类名                              | `string \| array \| object`                      |    `-`    |
| offset-x             | 屏幕水平偏移，数字为 px，字符串按长度转换 | `string \| number`                               |    `0`    |
| offset-y             | 屏幕垂直偏移，数字为 px，字符串按长度转换 | `string \| number`                               |    `0`    |
| hide-on-select       | 选择菜单项后是否关闭菜单                  | `boolean`                                        |  `true`   |

### SplitButton Events

| 事件名      | 描述                       | 参数                 |
| ----------- | -------------------------- | -------------------- |
| update:open | 菜单打开状态请求更新时触发 | open: `boolean`      |
| open-change | 菜单打开状态请求更新时触发     | open: `boolean`      |
| click       | 点击主按钮时触发           | event: `MouseEvent`  |
| select      | 选择菜单项时触发           | value, option, event |

### SplitButton Slots

| 插槽名  | 描述             | 参数            |
| ------- | ---------------- | --------------- |
| default | 主按钮内容       | -               |
| icon    | 菜单触发按钮图标 | open: `boolean` |
| content | 菜单内容         | -               |

### SplitButton Methods

| 方法     | 说明                       |
| -------- | -------------------------- |
| open()   | 请求展开菜单；禁用时不展开 |
| close()  | 请求关闭菜单               |
| resize() | 重新计算菜单位置           |

受控 `open` 只发出更新请求，需由调用方更新。主按钮点击正常冒泡，不打开菜单。

`click` 与 Button 一样是普通事件通知；不会等待监听器的返回值。异步操作由业务通过 `button-props.loading` 控制主按钮加载。

## Types

```ts
import type { SplitButtonInstance, SplitButtonProps } from '@cedar-design/ui-vue'
```

## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `button`、`menu` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->

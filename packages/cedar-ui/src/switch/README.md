---
permalink: /components/switch/
---

# Switch

互斥性的操作控件，用户可打开或关闭某个功能。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 开关类型

开关分为`circle`-**圆形(默认)**、`round`-**圆角**、`line`-**线性**三种类型。

<demo src="./__demos__/type.vue"></demo>

### 开关尺寸

开关分为 `small`、`medium`两种尺寸

<demo src="./__demos__/size.vue"></demo>

### 禁用状态

禁用开关。

<demo src="./__demos__/disabled.vue"></demo>

### 自定义开关的颜色

通过`checked-color`和`unchecked-color`可以自定义开关的颜色。

<demo src="./__demos__/custom-color.vue"></demo>

### 自定义开关的值

通过 checked-value 和 unchecked-value 可以自定义开关的值。

<demo src="./__demos__/custom.vue"></demo>

### 切换拦截

设置 `beforeChange`函数，函数的返回值将用于判断是否阻止切换。

<demo src="./__demos__/switch-interception.vue"></demo>

### 加载中状态

通过设置`loading`使开关处于加载中状态，此时开关不可点击。

<demo src="./__demos__/loading.vue"></demo>

### 自定义文案

自定义开关的打开/关闭状态的文字

<demo src="./__demos__/custom-text.vue"></demo>

### 自定义图标

自定义开关按钮上显示的图标。

<demo src="./__demos__/custom-icon.vue"></demo>

## API

### Switch Props

| 属性                     | 说明                                                                   | 类型                                                                                      | 默认值     |
| ------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------- |
| model-value(**v-model**) | 绑定值                                                                 | `string\|number\|boolean`                                                                 | `-`        |
| default-checked          | 默认选中状态(非受控状态)                                               | `boolean`                                                                                 | `false`    |
| disabled                 | 是否禁用                                                               | `boolean`                                                                                 | `false`    |
| loading                  | 是否为加载中状态                                                       | `boolean`                                                                                 | `false`    |
| type                     | 开关的类型                                                             | `'circle'\|'round'\|'line'`                                                               | `'circle'` |
| size                     | 开关的大小                                                             | `'sm'\|'md'\|'lg'`                                                                        | `'md'`     |
| checked-value            | 选中时的值                                                             | `string\|number\|boolean`                                                                 | `true`     |
| unchecked-value          | 为选中时的值                                                           | `string\|number\|boolean`                                                                 | `false`    |
| checked-color            | 选中时的开关颜色                                                       | `string`                                                                                  | `-`        |
| unchecked-color          | 未选中时的开关颜色                                                     | `string`                                                                                  | `-`        |
| before-change            | switch状态改变前的钩子，返回false或者返回Promise且被reject则停止切换。 | `( newValue: string \| number \| boolean) => Promise<boolean \| void> \| boolean \| void` | `-`        |
| checked-text             | 打开状态时的文案(`type='line'`和`size='sm'`时不生效)                   | `string`                                                                                  | `-`        |
| unchecked-text           | 关闭状态时的文案(`type='line'`和`size='sm'`时不生效)                   | `string`                                                                                  | `-`        |

### Switch Events

| 事件名 | 说明               | 参数                                      |
| ------ | ------------------ | ----------------------------------------- |
| change | 值改变时触发       | `value:boolean\|string\|number\|ev:Event` |
| focus  | 组件获得焦点时触发 | `ev:FocusEvent`                           |
| blur   | 组件失去焦点时触发 | `ev:FocusEvent`                           |

### Switch Slots

| 插槽名         | 说明                                                 |
| -------------- | ---------------------------------------------------- |
| checked-icon   | 打开状态时，按钮上的图标                             |
| unchecked-icon | 关闭状态时，按钮上的图标                             |
| checked        | 打开状态时的文案(`type='line'`和`size='sm'`时不生效) |
| unchecked      | 关闭状态时的文案(`type='line'`和`size='sm'`时不生效) |

## 类型定义

组件导出以下类型定义

```ts
import type { SwitchProps } from '@cedar/ui'
```

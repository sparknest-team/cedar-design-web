---
permalink: /components/menu/
---

# Menu

收纳、排列并展示一系列选项的列表。

## 案例

### 顶部导航菜单

设置`mode`为 `horizontal`，使用水平菜单。

<demo src="./__demos__/basic.vue"></demo>

### 深色模式导航

通过`theme`指定主题，分为`light`和`dark`两种。

<demo src="./__demos__/theme.vue"></demo>

### 缩起内嵌菜单

通过`collapsed`属性控制菜单的展开和收起。

<demo src="./__demos__/collapsed.vue"></demo>

### 响应式收缩

设置`breakpoint`属性，可触发响应式收缩。

<demo src="./__demos__/breakpoint.vue"></demo>

### 内嵌菜单

菜单内可以嵌入多个子项，通过`openKeys`可以设置默认打开的子项，

<demo src="./__demos__/sub-menu.vue"></demo>

### 不同大小菜单

通过`style`自由指定菜单的宽度和菜单项的高度。

<demo src="./__demos__/size.vue"></demo>

### 悬浮菜单

指定`mode`为`pop`可以使用悬浮菜单。

<demo src="./__demos__/hover.vue"></demo>

### 悬浮按钮菜单

指定`mode`为`popButton`可以使用悬浮按钮菜单。

<demo src="./__demos__/hover-button.vue"></demo>

## API

### Menu Props

| 属性                       | 说明                                                               | 类型                                           | 默认值       |
| -------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- | ------------ |
| theme                      | 菜单的主题                                                         | `'light'\|'dark'`                              | `'light'`    |
| mode                       | 菜单的模式                                                         | `'vertical'\|'horizontal'\|'pop'\|'popButton'` | `'vertical'` |
| level-indent               | 层级之间的缩进                                                     | `number`                                       | `-`          |
| auto-open                  | 默认展开所有多级菜单                                               | `boolean`                                      | `false`      |
| collapsed(**v-model**)     | 是否折叠菜单                                                       | `boolean`                                      | `-`          |
| default-collapsed          | 默认是否折叠菜单                                                   | `boolean`                                      | `false`      |
| collapsed-width            | 折叠菜单宽度                                                       | `number`                                       | `-`          |
| accordion                  | 开启手风琴模式                                                     | `boolean`                                      | `false`      |
| auto-scroll-into-view      | 是否自动滚动选中项目到可视区域                                     | `boolean`                                      | `false`      |
| show-collapse-button       | 是否显示折叠按钮                                                   | `boolean`                                      | `false`      |
| selected-keys(**v-model**) | 展开的菜单项key数组                                                | `string[]`                                     | `-`          |
| default-selected-keys      | 默认选中的菜单项key数组                                            | `string[]`                                     | `[]`         |
| open-keys(**v-model**)     | 展开的子菜单项key数组                                              | `string[]`                                     | `-`          |
| default-open-keys          | 默认展开的子菜单项key数组                                          | `string[]`                                     | `[]`         |
| scroll-config              | 滚动到可见区域的配置项，接收所有`scroll-into-view-if-needed`的参数 | `{[key :string]: any}`                         | `-`          |
| trigger-props              | 弹出模式下可接受所有`Trigger`的`props`                             | `TriggerProps`                                 | `-`          |
| tooltip-props              | 弹出模式下可接受所有`Tooltip`的`props`                             | `object`                                       | `-`          |
| auto-open-selected         | 默认选中的菜单                                                     | `boolean`                                      | `false`      |
| breakpoint                 | 响应式收缩的断点                                                   | `'xxl'\|'xl'\|'lg'\|'md'\|'sm'\|'x'\|'s'`      | `-`          |
| popup-max-height           | 弹出模式下的最大高度                                               | `boolean\| number`                             | `true`       |

### Menu Events

| 事件名          | 说明                   | 参数                                                         |
| --------------- | ---------------------- | ------------------------------------------------------------ | --- |
| collapse        | 菜单折叠状态改变时触发 | `collapsed: boolean`<br/>`type:'clickTrigger'\|'responsive'` |
| menu-item-click | 菜单项点击时触发       | `key: string`                                                |
| sub-menu-click  | 子菜单点击时触发       | `key: string`<br/>`openKeys:string[]`                        |     |

### Menu Slots

| 插槽名            | 说明           | 参数                 |
| ----------------- | -------------- | -------------------- |
| collapse-icon     | 自定义折叠按钮 | `collapsed: boolean` |
| expand-icon-right | 向右展开的图标 | `-`                  |
| expand-icon-down  | 向下展开的图标 | `-`                  |

### SubMenu Props

| 参数名           | 说明                                                             | 类型                                   | 默认值  |
| ---------------- | ---------------------------------------------------------------- | -------------------------------------- | ------- |
| title            | 子菜单标题                                                       | `string`                               | `-`     |
| selectable       | 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态 | `boolean`                              | `false` |
| popup            | 是否强制使用弹出模式，`level`表示当前子菜单的层级                | `boolean\|((level:number) => boolean)` | `false` |
| popup-max-height | 弹出模式下的最大高度                                             | `boolean\| number`                     | `true`  |

### SubMenu Slots

| 插槽名            | 说明           | 参数 |
| ----------------- | -------------- | ---- |
| title             | 标题           | `-`  |
| expand-icon-right | 向右展开的图标 | `-`  |
| expand-icon-down  | 向下展开的图标 | `-`  |
| icon              | 菜单的图标     | `-`  |

### MenuItemGroup Props

| 参数名 | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| title  | 菜单组的标题 | `string` | `-`    |

### MenuItemGroup Slots

| 插槽名 | 说明 | 参数 |
| ------ | ---- | ---- |
| title  | 标题 | `-`  |

### MenuItem Props

| 参数名   | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| disabled | 是否禁用 | `boolean` | `false` |

### MenuItem Slots

| 插槽名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| icon   | 菜单的图标 | `-`  |

## 类型定义

组件导出以下类型定义

```ts
import type { MenuProps } from '@cedar/ui'
```

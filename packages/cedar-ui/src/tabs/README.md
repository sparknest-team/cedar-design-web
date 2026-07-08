---
permalink: /components/tabs/
---

# Tabs

将内容组织同一视图中，一次可查看一个视图内容，查看其他内容可切换选项卡查看。

## 案例

### 基础用法

标签页的基本使用方法。

<demo src="./__demos__/basic.vue"></demo>

### 带图标的页签

带有图标的标签页。

<demo src="./__demos__/icon-tabs.vue"></demo>

### 位置

通过 `indicator-position` 属性可以自定义指示器位置，通过 `vertical` 可以切换为纵向布局。

<demo src="./__demos__/position.vue"></demo>

### 不同类型

通过 `type` 可以设置标签的类型。

<demo src="./__demos__/type.vue"></demo>

### 懒加载

通过设置 lazy-load 属性，可以让面板在首次激活时渲染。

<demo src="./__demos__/lazy-load.vue"></demo>

### 附加内容

通过 `suffix` 插槽可以自定义额外显示内容。

<demo src="./__demos__/suffix.vue"></demo>

### 动态增减标签页

通过设置 `:editable="true"` 可以开启动态增减标签页。仅在 `line` | `card` | `card-gutter` 生效

<demo src="./__demos__/editable.vue"></demo>

### 触发方式

通过 `trigger` 指定触发方式。

<demo src="./__demos__/trigger.vue"></demo>

### 去除content上边距

通过`header-padding`和`body-padding`属性可以去除header最左侧边距以及body的所有边距。

<demo src="./__demos__/no-padding.vue"></demo>

## API

### `<Tabs>` Props

| 属性                      | 说明                                                                      | 类型                                                                    | 默认值         |
| ------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------- |
| active-key **(v-model)**  | 当前选中的标签的 `key`                                                    | `string \| number`                                                      | -              |
| default-active-key        | 默认选中的标签的`key`（非受控状态，为空时选中第一个标签页）               | `string \| number`                                                      | -              |
| indicator-position        | 指示器位置                                                                | `'normal' \| 'reverse'`                                                 | `'normal'`     |
| size                      | 选项卡的大小                                                              | `'xs' \| 'sm' \| 'md' \| 'lg'`                                          | `'md'`         |
| type                      | 选项卡的类型                                                              | `'line' \| 'card' \| 'outline' \| 'plain' \| 'capsule' \| 'enclosed'`   | `'line'`       |
| vertical                  | 是否垂直展示（选项卡在左侧）                                              | `boolean`                                                               | `false`        |
| editable                  | 是否开启可编辑模式                                                        | `boolean`                                                               | `false`        |
| show-add-button           | 是否显示增加按钮（仅在可编辑模式可用）                                    | `boolean`                                                               | `false`        |
| destroy-on-hide           | 是否在不显示标签时销毁内容                                                | `boolean`                                                               | `false`        |
| lazy-load                 | 是否在首次展示标签时挂载内容                                              | `boolean`                                                               | `false`        |
| justify                   | 高度撑满容器，只在水平模式下生效。                                        | `boolean`                                                               | `false`        |
| animation                 | 是否开启选项内容过渡动画                                                  | `boolean`                                                               | `false`        |
| header-padding            | 选项卡头部是否存在水平边距。仅对`type` 等于`line`、`text`类型的选项卡生效 | `boolean`                                                               | `true`         |
| body-padding              | content的边距                                                             | `boolean`                                                               | `true`         |
| auto-switch               | 创建标签后是否切换到新标签（最后一个）                                    | `boolean`                                                               | `false`        |
| hide-content             | 是否隐藏内容                                                              | `boolean`                                                               | `false`        |
| trigger                  | 触发方式                                                                  | `'hover' \| 'click'`                                                    | `'click'`      |

### `<Tabs>` Events

| 事件名    | 说明                   | 参数                    |
| --------- | ---------------------- | ----------------------- |
| change    | 当前标签值改变时触发   | key: `string \| number` |
| tab-click | 用户点击标签时触发     | key: `string \| number` |
| add       | 用户点击增加按钮时触发 | -                       |
| delete    | 用户点击删除按钮时触发 | key: `string \| number` |

### `<Tabs>` Slots

| 插槽名   | 说明           | 参数 |
| -------- | -------------- | ---- |
| prefix   | 选项卡前缀内容 | -    |
| suffix   | 选项卡后缀内容 | -    |
| default  | 默认插槽，包含 `c-tabs-navs` 和 `c-tabs-items` | -    |

### `<TabsNavs>` Props

无。用于包裹 `c-tab-nav` 组件，控制其在布局中的位置。

### `<TabsItems>` Props

无。用于包裹 `c-tab-item` 组件，控制其在布局中的位置。

### `<TabNav>` Props

| 属性     | 说明                                       | 类型      | 默认值  |
| -------- | ------------------------------------------ | --------- | ------- |
| title    | 选项卡的标题                               | `string`  | -       |
| disabled | 是否禁用                                   | `boolean` | `false` |
| closable | 是否允许关闭此选项卡（仅在可编辑模式生效） | `boolean` | `true`  |

### `<TabNav>` Slots

| 插槽名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| title  | 选项卡标题 | -    |

### `<TabItem>` Props

| 属性            | 说明                                       | 类型      | 默认值  |
| --------------- | ------------------------------------------ | --------- | ------- |
| destroy-on-hide | 是否在不显示标签时销毁内容                 | `boolean` | `false` |
| lazy-load       | 是否在首次展示标签时挂载内容               | `boolean` | `false` |

### 类型定义

组件导出以下类型定义

```ts
import type { TabsProps } from '@cedar/ui'
```

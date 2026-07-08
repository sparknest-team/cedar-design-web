---
permalink: /components/steps/
---

# Steps

明示任务流程和当前完成程度，引导用户按照步骤完成任务。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 描述信息

通过设置 `description` 属性，可以在每个步骤下方添加描述信息。

<demo src="./__demos__/description.vue"></demo>

### 标签放置位置

通过设置`label-placement`可以改变标签描述文字放置的位置。放置位置分为`horizontal`-**放置在图标右侧**(**默认
**)、`vertical`-**放置在图标下方**两种。

<demo src="./__demos__/label-placement.vue"></demo>

### 步骤错误

通过设置`status="error"`来展示错误状态。

<demo src="./__demos__/error.vue"></demo>

### 自定义图标

通过`#icon`插槽可以自定义节点图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 隐藏连接线

通过设置`show-line="false"`可以使用无连接线模式。

<demo src="./__demos__/line-less.vue"></demo>

### 竖直步骤条

竖直方向的步骤条。

<demo src="./__demos__/vertical.vue"></demo>

### 箭头步骤条

通过设置`type="arrow"`，可以使用箭头类型的步骤条，**注意**，仅支持水平步骤条。

<demo src="./__demos__/arrow.vue"></demo>

### 点状步骤条

通过设置`type="dot"`，可以使用点状类型的步骤条。此模式没有small尺寸

<demo src="./__demos__/dot.vue"></demo>

### 导航步骤条

通过设置`type="navigation"`，可以使用导航类型的步骤条。

<demo src="./__demos__/navigation.vue"></demo>

### 可切换步骤条

设置`changeable`开启点击切换步骤。

<demo src="./__demos__/changeable.vue"></demo>

## API

### Steps Props

| 属性                 | 说明                     | 类型                                                  | 默认值         |
| -------------------- | ------------------------ | ----------------------------------------------------- | -------------- |
| type                 | 步骤条的类型             | `'default'` \| `'arrow'` \| `'dot'` \| `'navigation'` | `'default'`    |
| direction            | 步骤条的方向             | `'horizontal'` \| `'vertical'`                        | `'horizontal'` |
| label-placement      | 描述标签放置位置         | `'horizontal'` \| `'vertical'`                        | `'horizontal'` |
| current(**v-model**) | 当前步骤数               | `number`                                              | `-`            |
| default-current      | 默认的步骤数(非受控状态) | `number`                                              | `1`            |
| status               | 当前步骤状态             | `'wait'` \| `'process'` \| `'finish'` \| `'error'`    | `'process'`    |
| show-line            | 是否显示连接线           | `boolean`                                             | `true`         |
| small                | 是否使用小型连接线       | `boolean`                                             | `false`        |
| changeable           | 是否可以点击切换步骤     | `boolean`                                             | `false`        |

### Steps Events

| 事件名 | 说明                 | 参数                         |
| ------ | -------------------- | ---------------------------- |
| change | 步骤数发生改变时触发 | step:`number`<br/>ev:`Event` |

### Step Props

| 属性        | 说明         | 类型                                               | 默认值  |
| ----------- | ------------ | -------------------------------------------------- | ------- |
| title       | 步骤的标题   | `string`                                           | `-`     |
| description | 步骤的描述   | `string`                                           | `-`     |
| status      | 步骤的状态   | `'wait'` \| `'process'` \| `'finish'` \| `'error'` | `-`     |
| disabled    | 是否禁用步骤 | `boolean`                                          | `false` |

### Step Slots

| 插槽名      | 说明 | 参数                              |
| ----------- | ---- | --------------------------------- |
| node        | 节点 | step:`number`<br/>status:`string` |
| icon        | 图标 | step:`number`<br/>status:`string` |
| description | 描述 | `-`                               |

## 类型定义

组件导出以下类型定义

```ts
import type { StepsProps } from '@cedar/ui'
```

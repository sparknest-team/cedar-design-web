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

### 内容放置位置

通过设置 `content-placement` 可以改变内容相对节点的位置，可选 `right`（默认）和 `bottom`。

<demo src="./__demos__/content-placement.vue"></demo>

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

### 外观组合

适用于多步骤流程的当前状态。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

主值使用普通 `v-model`：`modelValue` 表示当前步骤序号，从 1 开始。`defaultValue` 仅在创建时初始化非受控状态，之后修改不会重置当前值；初始化不触发 `update:modelValue`。提供 `modelValue` 时由父级控制，以受控值为准。

### Steps Props

| 属性                 | 说明                     | 类型                                                  | 默认值         |
| -------------------- | ------------------------ | ----------------------------------------------------- | -------------- |
| type                 | 步骤条的类型             | `'default'` \| `'arrow'` \| `'dot'` \| `'navigation'` | `'default'`    |
| orientation            | 步骤条的方向             | `'horizontal'` \| `'vertical'`                        | `'horizontal'` |
| content-placement    | 内容相对节点的位置       | `'right'` \| `'bottom'`                               | `'right'`      |
| model-value(**v-model**) | 当前步骤数               | `number`                                              | `-`            |
| default-value      | 默认的步骤数(非受控状态) | `number`                                              | `1`            |
| status               | 当前步骤状态             | `'wait'` \| `'process'` \| `'finish'` \| `'error'`    | `'process'`    |
| show-line            | 是否显示连接线           | `boolean`                                             | `true`         |
| size                 | 步骤条尺寸               | `'sm'` \| `'md'`                                     | `'md'`         |
| changeable           | 是否可以点击切换步骤     | `boolean`                                             | `false`        |

### Steps Events

| 事件名              | 说明                           | 参数                         |
| ------------------- | ------------------------------ | ---------------------------- |
| change              | 步骤数发生改变时触发（需开启 `changeable`） | current:`number`<br/>previous:`number`<br/>ev:`Event` |
| update:modelValue      | `v-model` 同步         | step:`number`                |

### Steps Slots

| 插槽名      | 说明         |
| ----------- | ------------ |
| default     | 步骤内容     |
| finish-icon | 完成状态图标 |
| error-icon  | 错误状态图标 |

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
| default     | 标题 | `index`、`status`、`active`、`disabled` |
| title       | 标题 | `index`、`status`、`active`、`disabled` |
| node        | 节点 | `index`、`status`、`active`、`disabled` |
| icon        | 图标 | `index`、`status`、`active`、`disabled` |
| description | 描述 | `index`、`status`、`active`、`disabled` |

## 类型定义

组件导出以下类型定义

```ts
import type {
  StepsProps,
  StepProps,
  StepsType,
  StepStatus,
  StepsSize,
  StepsContentPlacement,
  StepsInstance,
  StepsStepInstance,
} from '@cedar-design/ui'
```

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

Steps 和 Step 的主体、Props、上下文协议与样式同源复制；注入 Symbol 分别定义在各库，不跨库共享。保留四种 type 和原有状态/事件契约。

`active` 只表示当前步骤序号（从 1 开始）是否对应 modelValue；与 status（wait/process/finish/error）分开。当前步骤即使为 error，active 仍为 true；焦点、悬停不会改变 active。

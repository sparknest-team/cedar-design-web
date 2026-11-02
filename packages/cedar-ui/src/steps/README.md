---
permalink: /components/steps/
---

# Steps

明示任务流程和当前完成程度，引导用户按照步骤完成任务。

## 基础示例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观组合

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `type` | 步骤条的类型 | 类型与状态对比 |
| `status` | 当前步骤状态 | 类型与状态对比 |
| `changeable` | 是否可以点击切换步骤 | 类型与状态对比 |
<!-- demo-config-notes:end -->

适用于多步骤流程的当前状态。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 类型与状态对比

四种类型共享当前步骤和状态。先点击步骤或选择 1–3，再切换 wait、process、finish、error，观察 default、arrow、dot、navigation 同步更新；status 改变当前节点的语义状态，不改变步骤序号。标题与描述按页面语言显示，方便在手机宽度内对比。

<details>
<summary>配置说明与使用限制</summary>

#### 四种外观类型

`type` 当前有 `default`（编号）、`arrow`（箭头）、`dot`（圆点）、`navigation`（导航）四种外观；`status` 独立表示流程状态。箭头和导航类型仅支持水平方向。切换当前步骤或点击步骤，对比相同进度下的外观。现有 `type` 保持兼容。

#### 步骤错误

通过设置`status="error"`来展示错误状态。

#### 箭头步骤条

通过设置`type="arrow"`，可以使用箭头类型的步骤条，**注意**，仅支持水平步骤条。

#### 点状步骤条

通过设置`type="dot"`，可以使用点状类型的步骤条。此模式没有small尺寸

#### 导航步骤条

通过设置`type="navigation"`，可以使用导航类型的步骤条。

</details>

<demo src="./__demos__/types.vue"></demo>

## 布局与排列

### 内容放置位置

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 当前步骤状态 | 内容放置位置、竖直步骤条 |
| `content-placement` | 正文相对步骤节点的方位，可选 right 或 bottom，默认 right；dot 类型按横纵轴推导，navigation 固定 right | 内容放置位置 |
| `orientation` | 步骤流程的横纵轴向，默认 horizontal；arrow 和 navigation 类型固定横向 | 竖直步骤条 |
<!-- demo-config-notes:end -->

通过设置 `content-placement` 可以改变内容相对节点的位置，可选 `right`（默认）和 `bottom`。

<demo src="./__demos__/content-placement.vue"></demo>

### 竖直步骤条

竖直方向的步骤条。

<demo src="./__demos__/vertical.vue"></demo>

## 内容与展示

### 描述信息

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `status` | 当前步骤状态 | 描述信息、隐藏连接线 |
| `show-line` | 是否显示连接线 | 隐藏连接线 |
<!-- demo-config-notes:end -->

通过设置 `description` 属性，可以在每个步骤下方添加描述信息。

<demo src="./__demos__/description.vue"></demo>

### 隐藏连接线

通过设置`show-line="false"`可以使用无连接线模式。

<demo src="./__demos__/line-less.vue"></demo>

## 自定义与插槽

### 自定义图标

通过`#icon`插槽可以自定义节点图标

<demo src="./__demos__/custom-icon.vue"></demo>

## 交互与控制

### 可切换步骤条

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `changeable` | 是否可以点击切换步骤 | 可切换步骤条 |
| `status` | 当前步骤状态 | 可切换步骤条 |
<!-- demo-config-notes:end -->

设置`changeable`开启点击切换步骤。

<demo src="./__demos__/changeable.vue"></demo>

## API

主值使用普通 `v-model`：`modelValue` 表示当前步骤序号，从 1 开始。`defaultValue` 仅在创建时初始化非受控状态，之后修改不会重置当前值；初始化不触发 `update:modelValue`。提供 `modelValue` 时由父级控制，以受控值为准。

### Steps Props

| 属性                 | 说明                     | 类型                                                  | 默认值         |
| -------------------- | ------------------------ | ----------------------------------------------------- | -------------- |
| type                 | 步骤条的类型             | `'default'` \| `'arrow'` \| `'dot'` \| `'navigation'` | `'default'`    |
| orientation            | 步骤流程的横纵轴向，默认 horizontal；arrow 和 navigation 类型固定横向 | `'horizontal'` \| `'vertical'`                        | `'horizontal'` |
| content-placement    | 正文相对步骤节点的方位，可选 right 或 bottom，默认 right；dot 类型按横纵轴推导，navigation 固定 right | `'right'` \| `'bottom'`                               | `'right'`      |
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


### 方位语义与配置入口

content-placement 统一的是方位词汇和拼写，不要求所有组件开放相同集合。Steps 仅实现 right/bottom；dot 和 navigation 类型有各自推导规则，不为统一添加尚未实现的方位。


## 阅读方向与键盘交互

Steps 继承最近的 `dir="ltr"` 或 `dir="rtl"`，支持运行时切换。横向步骤、连接线和方向箭头随阅读方向排列，纵向步骤仍从上到下；序号、进度值和自定义图标内容保持原意。

`changeable` 开启时，左右键按当前阅读方向移动焦点，纵向使用上下键；Home/End 聚焦首尾可用步骤，禁用项会被跳过。Enter/Space 确认步骤；移动焦点和切换方向不会触发进度更新。

---
permalink: /components/radio/
---

# Radio

在一组相关且互斥数据中，用户仅能选择一个选项。

分组示例覆盖父级接受/拒绝更新、只读和异步选项回显；移除选项不会清空业务值。示例外层 Space 的纵向布局使用 `direction="column"`，与选择组自身的 `orientation="vertical"` 分开理解。

## 阅读方向

单选组继承来源 dir。RTL 的左右方向键按可见方向移动，跳过禁用项；上下键、Home/End 保持逻辑顺序。普通与按钮式单选组均保留单一 Tab 入口，方向切换不修改已选业务值。

## 基础示例

### 基本使用

单选框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 分组与布局

### 单选组声明方式

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置       | 作用                            | 相关示例                                         |
| ---------- | ------------------------------- | ------------------------------------------------ |
| `value`    | 选项的`value`                   | 单选组声明方式、单选框组方向、按钮类型的单选框组 |
| `disabled` | 是否禁用；未设置时继承表单/分组 | 单选组声明方式、布局                             |

<!-- demo-config-notes:end -->

比较子项与 options 声明，选择不同项观察组值；自定义字段与异步数据仍单独展示。

<details>
<summary>配置说明与使用限制</summary>

#### 单选框组

通过`RadioGroup`组件展示单选框组

#### 单选框组选项

`RadioGroup`通过`options`属性设置子元素

</details>

<demo src="./__demos__/group-declaration-comparison.vue"></demo>

### 单选框组方向

通过设置`orientation="vertical"`可以展示竖直的单选框组。

<demo src="./__demos__/group-direction.vue"></demo>

### 按钮类型的单选框组

通过指定`variant="button"`，可以显示按钮类型的单选框组。

<demo src="./__demos__/button-type.vue"></demo>

### 布局

使用`RadioGroup`传入`Radio`配合`Grid`组件实现灵活布局。

<demo src="./__demos__/grid-layout.vue"></demo>

### 分组状态与只读

`model-value !== undefined` 表示受控，父级不回写时保留原值；`default-value` 只初始化非受控值。分组内只由 Group 发出 `update:model-value → change(value, event?)`，并通知 FormItem 一次，子项不重复发值变化事件。
原生输入的选中值、ARIA 状态和选中样式与模型保持一致。受控分组拒绝选择时，同时恢复原选中项和被点击项；标签、Enter 和空格激活各只提出一次更新。
Group 的 `disabled`、`readonly`、`error` 未设置时继承表单，显式 `false` 可以覆盖表单；子项不能绕过 Group 的禁用或只读限制。

<demo src="./__demos__/group-state.vue"></demo>

### 按钮尺寸

两端均支持 `variant="button"`。RadioGroup 的 `size` 支持 `xs / sm / md / lg / xl`，只调整按钮高度；普通圆形 Radio 不随 size 缩放。未设置时继承表单/全局尺寸，最终默认为 md。Group 的 variant 优先于子项。

<demo src="./__demos__/button-sizes.vue"></demo>

## 选项与值模型

### 独立值模型与方法

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                            | 相关示例               |
| --------------- | ------------------------------- | ---------------------- |
| `default-value` | 非受控初始值                    | 独立值模型与方法、受控 |
| `value`         | 选项的`value`                   | 独立值模型与方法       |
| `readonly`      | 是否只读；未设置时继承表单/分组 | 独立值模型与方法       |
| `disabled`      | 是否禁用；未设置时继承表单/分组 | 独立值模型与方法       |

<!-- demo-config-notes:end -->

Radio 的值为 string / number / boolean 或 null，null 表示未选中；重复点击已选项不会取消，父级可写 null 清空。
两端统一使用 `default-value` 初始化非受控值；受控提议被拒绝时保持原值。用户选择按 `update:model-value → change(value, event?)` 通知，命令式调用的 event 为 undefined。
提供 `select()`、`focus(options?)`、`blur()`。禁用禁止选择和聚焦，只读允许聚焦、禁止改值。Enter 按下与空格释放激活当前控件，长按不重复激活，失焦/停用会取消待处理的空格操作。

<demo src="./__demos__/control-value.vue"></demo>

### 选项数据与标签

两端均支持原始值或对象选项。`field-names` 映射 `label/value/disabled/readonly/indeterminate`；只读选项允许聚焦但不能改值，Checkbox 的半选仅用于展示。
`label` 插槽接收 `{ data, checked }`，优先于标签渲染函数 `(data, checked) => VNodeChild`。data 为保留业务字段的归一化副本，不修改输入对象；未提供标签时显示值的文字。
显式传入 `options` 时替代默认插槽，包括 `[]`；不传时使用默认插槽。选项值限字符串、有限数字或布尔值；缺失/非法值及同类型重复值被忽略（保留第一项）。`false`、`0`、`''` 和 `'0'` 是不同选项。异步选项变更不反向修改模型。
RadioGroup 默认 `null`，表示未选中；外部写入 `null` 清空。`''` 是有效选项，不再作为空状态标记。

<demo src="./__demos__/option-data.vue"></demo>

### 受控

通过`v-model`(`model-value`)属性控制是否选中

<demo src="./__demos__/controlled.vue"></demo>

## 交互与键盘

### 交互状态切换

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置       | 作用                            | 相关示例     |
| ---------- | ------------------------------- | ------------ |
| `value`    | 选项的`value`                   | 交互状态切换 |
| `disabled` | 是否禁用；未设置时继承表单/分组 | 交互状态切换 |
| `readonly` | 是否只读；未设置时继承表单/分组 | 交互状态切换 |
| `error`    | 错误态；未设置时继承表单/分组   | 交互状态切换 |

<!-- demo-config-notes:end -->

适用于互斥选项。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 键盘导航

Tab 进入已选项（没有已选项时进入第一个可用项）；方向键循环，Home / End 跳到首尾，跳过禁用项。只读项可聚焦但不改变值。导航仅作用于当前分组，不拦截面板内其他按钮的键盘事件。

<demo src="./__demos__/keyboard-navigation.vue"></demo>

## 控件与内容定制

### 原生控件与自定义图标

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置       | 作用                            | 相关示例                           |
| ---------- | ------------------------------- | ---------------------------------- |
| `value`    | 选项的`value`                   | 原生控件与自定义图标、自定义单选框 |
| `readonly` | 是否只读；未设置时继承表单/分组 | 原生控件与自定义图标               |

<!-- demo-config-notes:end -->

两端均使用原生 radio input。Group 的 name 供原生表单提交，子项可覆盖。aria-label/input-attrs 作用于 input；组件管理的 type、checked、disabled、tabindex 不允许覆盖。图标插槽仅替换图标；#radio 替换全部可见内容，使用时须提供可访问名称。

<demo src="./__demos__/native-control.vue"></demo>

### 自定义单选框

使用 #radio 插槽自定义单选框的展示。

<demo src="./__demos__/custom-radio.vue"></demo>

## 异步选项

### 异步选项

开启“手动返回”后使用真实本地Promise，不走默认定时器。连续加载两次，分别按新旧或旧新顺序返回：只有当前请求版本可替换选项、结束加载。移除选项使在途版本失效但保留业务选值；旧任务仍可手动返回。Applied/Ignored/Pending显示应用、忽略及等待数，加载/返回不增加用户变更次数。版本保护和等待清理由示例业务加载器负责，不代表Radio自动解决网络竞争，也不访问外部服务。

选项载入、移除和外部值更新均不会反向触发值变化；未载入的已选值不会自动清理。重复选择当前值不再触发 change，false、0、空字符串按实际值比较。

示例以 800ms 本地延迟模拟加载。等待期间可设为设备 A 或清空选择，选项到达后按最新模型反显；这些外部操作不会增加用户变更次数。加载中移除选项会取消待完成任务，避免旧选项重新显示。

等待期间仍可用方向键选择已加载的选项；同值选项重新加载后保留当前焦点。加载提示保持稳定节点，避免提示显隐导致分组重新挂载；重复激活当前值不会增加 change 次数。

<demo src="./__demos__/async-options.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[]`；`RadioModel = ChoiceValue | null`。

### Radio Props

| 属性                  | 说明                            | 类型                      | 默认值    |
| --------------------- | ------------------------------- | ------------------------- | --------- |
| model-value (v-model) | 受控值                          | ChoiceValue \| null       | undefined |
| default-value         | 非受控初始值                    | ChoiceValue \| null       | null      |
| value                 | 选项的`value`                   | `string\|number\|boolean` | `true`    |
| variant               | 单选的类型                      | `'radio'\|'button'`       | `'radio'` |
| disabled              | 是否禁用；未设置时继承表单/分组 | boolean                   | undefined |
| readonly              | 是否只读；未设置时继承表单/分组 | boolean                   | undefined |
| error                 | 错误态；未设置时继承表单/分组   | boolean                   | undefined |

### Radio Events

| 事件名             | 说明     | 参数                              |
| ------------------ | -------- | --------------------------------- |
| update:model-value | 提议新值 | value: ChoiceValue                |
| change             | 值变化   | value: ChoiceValue, event?: Event |
| focus              | 聚焦     | event: FocusEvent                 |
| blur               | 失焦     | event: FocusEvent                 |

### Radio Methods

| 方法   | 参数                   | 返回值 |
| ------ | ---------------------- | ------ |
| select | -                      | void   |
| focus  | options?: FocusOptions | void   |
| blur   | -                      | void   |

### Radio Slots

| 插槽名 | 说明         | 参数                                     |
| ------ | ------------ | ---------------------------------------- |
| radio  | 自定义单选框 | `checked:boolean`<br/>`disabled:boolean` |

### RadioGroup Props

| 属性                  | 说明                                                        | 类型                                                                                                    | 默认值         |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------- |
| model-value (v-model) | 受控值                                                      | RadioModel                                                                                              | undefined      |
| default-value         | 非受控初始值                                                | RadioModel                                                                                              | null           |
| variant               | 单选框组的类型                                              | `'radio'\|'button'`                                                                                     | `'radio'`      |
| size                  | 单选框组的尺寸                                              | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`                                                                          | `-`            |
| options               | 选项；传入时替代默认插槽                                    | Array<ChoiceValue \| RadioOption \| Record<string, unknown>> / `(query, { signal }) => Array / Promise` | `undefined`    |
| orientation           | 单选组内选项的横纵排列，默认 horizontal；不表示文字阅读方向 | `'horizontal'\|'vertical'`                                                                              | `'horizontal'` |
| disabled              | 是否禁用；未设置时继承表单/分组                             | boolean                                                                                                 | undefined      |
| readonly              | 是否只读；未设置时继承表单/分组                             | boolean                                                                                                 | undefined      |
| error                 | 错误态；未设置时继承表单/分组                               | boolean                                                                                                 | undefined      |
| field-names           | 选项字段映射                                                | ChoiceFieldNames                                                                                        | undefined      |
| aria-label            | 分组的无障碍名称                                            | string                                                                                                  | ''             |

### RadioGroup Events

| 事件名             | 说明                        | 参数                                           |
| ------------------ | --------------------------- | ---------------------------------------------- |
| update:model-value | 提议新值                    | value: string \| number \| boolean             |
| change             | 值变化，只由 Group 通知一次 | value: string \| number \| boolean, ev?: Event |

### RadioGroup Slots

| 插槽名 | 说明          | 参数                                     |
| ------ | ------------- | ---------------------------------------- |
| radio  | 自定义单选框  | `checked:boolean`<br/>`disabled:boolean` |
| label  | radio文案内容 | `data: RadioOption, checked: boolean`    |

### RadioOption

| 字段     | 说明           | 类型                                                              |
| -------- | -------------- | ----------------------------------------------------------------- |
| value    | 选项标识       | ChoiceValue                                                       |
| label    | 标签或渲染函数 | VNodeChild \| (data: RadioOption, checked: boolean) => VNodeChild |
| disabled | 禁用           | boolean                                                           |
| readonly | 只读           | boolean                                                           |

## 类型定义

组件导出以下类型定义

```ts
import type { RadioProps } from "@cedar-design/ui";
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

公开导出类型：`RadioOption`、`ChoiceFieldNames`。

### 原生属性与外观补齐

| 组件               | 属性                            | 说明                                       | 类型                | 默认值    |
| ------------------ | ------------------------------- | ------------------------------------------ | ------------------- | --------- |
| Radio / RadioGroup | name                            | 原生字段名，子项覆盖分组                   | string              | undefined |
| Radio              | aria-label                      | 原生控件的无障碍名称                       | string              | undefined |
| Radio              | input-attrs                     | 原生 input 属性                            | InputHTMLAttributes | undefined |
| Radio              | checked-color / unchecked-color | 实例选中/未选中色；错误/禁用状态优先       | string              | undefined |
| Radio              | icon-size                       | 图标长度，number 为 px；string 为 CSS 长度 | number \| string    | undefined |
| Radio              | ripple                          | 触控水波纹                                 | boolean             | true      |

### 图标与默认插槽

checked-icon、unchecked-icon 在两端都可用。default 接收 { checked, disabled }；radio 接收 { checked, disabled }。click 只发出一次原始 MouseEvent；disabled 不发 click，只读可发 click，但不改变值。

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

候选属性 `options` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

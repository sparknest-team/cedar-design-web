---
permalink: /components/mention/
---

# Mention

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 基础示例

### 基础用法

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

<demo src="./__demos__/basic.vue"></demo>

## 自定义与插槽

### 自定义触发字符

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置     | 作用                 | 相关示例       |
| -------- | -------------------- | -------------- |
| `data`   | 用于自动补全的数据   | 自定义触发字符 |
| `prefix` | 触发自动补全的关键字 | 自定义触发字符 |

<!-- demo-config-notes:end -->

指定 `prefix` 来自定义触发字符。默认为 `@`，可以自定义为任意字符。

<demo src="./__demos__/prefix.vue"></demo>

## 生命周期与边界

### 镜像重定位生命周期

<demo src="./__demos__/mirror-lifecycle.vue"></demo>

停用或卸载 Mention 后，保留的输入、弹层事件及 focus / blur 调用不再生效；重新激活后会重新测量输入位置。禁用时不接受输入或 focus，活动实例仍允许调用 blur。

## 加载与等待

### 受控加载

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 业务显式控制的加载状态 | `boolean` | `false` |


通过 loading 显式展示等待；普通事件返回值不参与加载。before-* 守卫按其契约管理内部等待状态。

<demo src="./__demos__/loading.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Mention Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value (v-model) | 受控文本；null 显示为空 | string \| null | undefined |
| default-value | 非受控初始文本 | string | '' |
| data | 候选数组或显式加载函数，支持嵌套分组 | readonly (string \| number \| SelectOptionData \| SelectOptionGroup)[] \| ((query: string, context: { signal: AbortSignal }) => Array \| `Promise<Array>`) | undefined |
| prefix | 触发前缀；支持多字符和多个前缀 | string \| string[] | '@' |
| split | 提及前后的分隔符 | string | ' ' |
| type | 输入形态 | input \| textarea | input |
| disabled | 未设置时继承 Form，显式 false 覆盖 | boolean | undefined |
| readonly | 未设置时继承 Form，显式 false 覆盖 | boolean | undefined |
| clearable | 允许清空文本或编辑草稿 | boolean | false |
| loading | 手动等待反馈，不隐式禁用文本编辑 | boolean | false |
| edit-mode | 编辑模式，继承 FormItem 和 Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | 独立阅读状态，显式 false 覆盖父级 | `boolean` | `false` |
| empty-value | 清空输出；显式 null 原样提交 | `string \| null \| (() => string \| null)` | `''` |
| empty-values | 空值识别策略，字段优先于 FormItem 和 Form | `readonly unknown[]` | `-` |
| empty-text | 阅读空文案，显式空字符串有效 | `string` | `'-'` |
| before-commit | 延迟编辑保存前守卫；返回布尔值、Promise 或通过 done 完成 | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | 受控编辑层开关，不是内部原生输入焦点 | `boolean` | `-` |
| default-open | 非受控编辑层初始开关 | `boolean` | `false` |
| popup-container | 编辑层挂载容器 | `string \| HTMLElement \| false` | `-` |

### Mention Events

| 事件 | 说明与参数 |
| --- | --- |
| update:modelValue | value: string \| null |
| change | value: string \| null；不附带原生 Event |
| search | query: string, prefix: string |
| select | value: SelectOptionValue \| undefined；来自实际叶子候选 |
| clear | event: Event |
| focus / blur | event: FocusEvent |
| load-error | error: unknown；保留加载源原始错误 |
| update:open / open-change | open: boolean；仅字段编辑层 |

data 是显式数据加载入口；search、change、select 和 load-error 都是通知，不采集监听器返回的 Promise。直接输入按 update:modelValue / change 通知，选择按 select / update:modelValue / change 通知；延迟编辑中先修改草稿，确认后才提交最终模型。

### Mention Methods

| 方法 | 说明 | 返回值 |
| --- | --- | --- |
| focus | 聚焦当前目标；延迟模式按字段编辑协议打开 | void |
| blur | 失焦当前目标，不打开编辑器 | void |
| refresh | 重试当前 data 查询，沿用取消与失败协议，不打开编辑器；静态数组不发请求 | `Promise<void>` |

### Mention Slots

| 插槽 | 说明与参数 |
| --- | --- |
| option | 两种输入形态的候选内容；data: SelectOptionInfo，含 key、raw、value、label |
| read | 两种输入形态的阅读内容；value: string \| null, text: string |
| prefix / suffix | 仅 type=input 的输入框前后缀 |
| clear-icon | 两种输入形态的清空节点；clear(event?: Event): void |

clear-icon 替换整个清空节点，自定义节点需要调用 clear，并自行提供可访问的按钮。没有 default 输入替换、empty 或加载错误专用插槽；option 不替换字段输入本体。

## Types

组件导出以下类型定义

```ts
import type { MentionProps, MentionInstance, MentionEmits, MentionSlots, MentionExpose } from "@cedar-design/ui";
```

Mention 复用 Input／Textarea 的排版和间距，测量镜像复制原生输入框计算样式。自定义请覆盖对应输入组件变量；不再提供无效的 mention-font-size、mention-line-height 或 mention-padding-*。

### 编辑与确认

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

候选属性 `data` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

input 与 textarea 都显示手动 loading 和当前显式 data 加载函数的等待。等待显示不会隐式禁用编辑；search 通知返回 Promise 不启动任务。旧数据请求不会清理新请求的指示器，load-error 保留原始错误。

公共 focus/blur 从首次挂载即可调用。focus 会打开可编辑的延迟编辑器，等待其就绪后定位；禁用、只读或纯阅读时不因此打开。blur 只失焦当前目标，不重新打开。保存的方法不会绑定旧编辑器，关闭、切换模式、停用或卸载会取消排队调用。

### 提及范围与分组选项

prefix 支持单字符、多字符及字符串数组。选择时只替换光标前已匹配的前缀和查询文本，保留光标后内容；textarea 镜像使用实际命中的前缀。data 中的嵌套分组只展示标题，只有叶子选项可选；禁用叶子不提交。option 插槽接收规范化候选，数值 0 和空字符串也是有效身份，不跳过定制。

### 候选反馈与实例边界

显式 data 加载的等待统一显示在当前 Input/Textarea 字段，原生输入声明 aria-busy；手动 loading 与数据请求的等待合并，文本仍可编辑。没有可用候选时不打开提及菜单。失败结束当前等待并通知原始 load-error，业务决定错误展示；不会把异常字符串自动插进候选或文本。refresh 等待一次读取结束，失败通过 load-error 通知，不等待错误监听器的 Promise。

disabled/readonly 会暂停数据请求，停用、卸载和过期响应不能继续更新；refresh 在关闭的编辑层也可读取数据而不自动打开。候选菜单仍属于内部输入，公开 open/default-open 只控制延迟字段编辑层。MentionProps、MentionEmits、MentionSlots、MentionExpose 在根入口和 mention 子入口一致导出；MeasureInfo 为内部测量状态。

Mention 仅在 Cedar 提供。

### 输入与候选关联

input 使用 combobox，textarea 保留支持多行的 textbox；两者都以 aria-autocomplete、aria-controls 和 aria-activedescendant 关联实际 listbox 与活动候选。候选关闭或字段只读后撤下活动关联；方向键移动候选时原生输入保留 DOM 焦点。这里验证的是 DOM 关系和键盘行为，不代表已完成所有读屏软件和真机组合的认证。

## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `input`、`select`、`textarea` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->

---
permalink: /components/auto-complete/
---

# AutoComplete 自动补全

允许自由输入的单行文本框，候选只是快捷填写方式。两端独立维护同源主体、Props、Menu 和样式；触控与 hover 差异由本地 Input 处理，没有跨库运行时或 platform 配置。

shouldOpen 控制是否允许展开，filterOption 控制逐项过滤；它们不是同一个设置。没有候选、禁用或只读时不会打开。自动补全不提供 list/picker 展示。

## 阅读方向

输入框与候选弹层继承来源 dir，自定义挂载容器不覆盖来源方向。左右光标键保持原生编辑行为，上下键选择候选、Enter 提交、Escape 关闭。候选更新期间保留正在组合的原生文本；组合结束后提交，不因重绘覆盖为旧模型值。

## 基础示例

### 基础输入与选择

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观配置对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置        | 作用                                         | 相关示例     |
| ----------- | -------------------------------------------- | ------------ |
| `options`   | 候选；支持分组，value 唯一，选择后转为字符串 | 外观配置对比 |
| `clearable` | 允许清除可编辑的非空值                       | 外观配置对比 |

<!-- demo-config-notes:end -->

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 外观组合

适用于允许自由输入的候选提示。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

## 匹配与候选列表

### 展开条件与过滤

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置             | 作用                                                | 相关示例                             |
| ---------------- | --------------------------------------------------- | ------------------------------------ |
| `options`        | 候选；支持分组，value 唯一，选择后转为字符串        | 展开条件与过滤、大小写匹配、分组间距 |
| `placeholder`    | 占位文字或浮动提示内容                              | 展开条件与过滤、大小写匹配、分组间距 |
| `should-open`    | 允许展开的条件，不负责过滤候选                      | 展开条件与过滤、分组间距、虚拟列表   |
| `filter-option`  | 按标签过滤；false 用于远程筛选                      | 展开条件与过滤                       |
| `case-sensitive` | 内置过滤是否区分大小写                              | 大小写匹配                           |
| `trigger-props`  | 弹层配置；不能覆盖内部 open / disabled / 容器优先级 | 分组间距                             |

<!-- demo-config-notes:end -->

<demo src="./__demos__/opening-policy.vue"></demo>

### 大小写匹配

<demo src="./__demos__/case-sensitive.vue"></demo>

### 分组间距

<demo src="./__demos__/group-spacing.vue"></demo>

### 虚拟列表

<demo src="./__demos__/virtual-list.vue"></demo>

## 内容与字段定制

### 自定义字段与内容

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用                                         | 相关示例                         |
| ------------- | -------------------------------------------- | -------------------------------- |
| `options`     | 候选；支持分组，value 唯一，选择后转为字符串 | 自定义字段与内容、外观与浮动提示 |
| `placeholder` | 占位文字或浮动提示内容                       | 自定义字段与内容、外观与浮动提示 |
| `field-names` | 映射 value、label、disabled 等字段           | 自定义字段与内容                 |
| `variant`     | 输入外观；未设置时继承 Group                 | 外观与浮动提示                   |
| `hint`        | 启用 Input 的浮动提示                        | 外观与浮动提示                   |
| `clearable`   | 允许清除可编辑的非空值                       | 外观与浮动提示                   |

<!-- demo-config-notes:end -->

<demo src="./__demos__/footer.vue"></demo>

### 外观与浮动提示

<demo src="./__demos__/decorator.vue"></demo>

## 交互与键盘

### 交互状态对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用                                         | 相关示例                   |
| ------------- | -------------------------------------------- | -------------------------- |
| `options`     | 候选；支持分组，value 唯一，选择后转为字符串 | 交互状态对比、键盘与无障碍 |
| `clearable`   | 允许清除可编辑的非空值                       | 交互状态对比               |
| `disabled`    | 禁用；未设置时继承，显式 false 覆盖          | 交互状态对比               |
| `readonly`    | 只读，可聚焦复制，不展开候选                 | 交互状态对比               |
| `error`       | 错误状态；未设置时继承 FormItem              | 交互状态对比               |
| `input-attrs` | 原生 input 属性，combobox 状态由组件维护     | 键盘与无障碍               |

<!-- demo-config-notes:end -->

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 交互状态切换

适用于允许自由输入的候选提示。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### 键盘与无障碍

<demo src="./__demos__/accessibility.vue"></demo>

选项分组与 Menu 使用一致的间距逻辑：标题行高 20px，上下各 4px 留白（总高 28px）；后续分组前额外留 8px，首组不添加组间距。标题与选项文字左对齐；AutoComplete 的标题缩进跟随其选项水平 padding 配置。

## 异步与配置

### 异步建议

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                                | 相关示例                       |
| --------------- | --------------------------------------------------- | ------------------------------ |
| `options`       | 候选；支持分组，value 唯一，选择后转为字符串        | 异步建议、透传配置边界与优先级 |
| `filter-option` | 按标签过滤；false 用于远程筛选                      | 异步建议                       |
| `placeholder`   | 占位文字或浮动提示内容                              | 异步建议                       |
| `disabled`      | 禁用；未设置时继承，显式 false 覆盖                 | 透传配置边界与优先级           |
| `should-open`   | 允许展开的条件，不负责过滤候选                      | 透传配置边界与优先级           |
| `trigger-props` | 弹层配置；不能覆盖内部 open / disabled / 容器优先级 | 透传配置边界与优先级           |

<!-- demo-config-notes:end -->

<demo src="./__demos__/remote.vue"></demo>

### 透传配置边界与优先级

建议使用 `AutoCompleteTriggerOptions` 声明 trigger-props。展开由内部输入/焦点与 shouldOpen 管理；AutoComplete 不公开顶层 open/defaultOpen/update:open。disabled 归顶层管理；不能用嵌套配置绕过只读/禁用。placement、popupOffset、样式等普通 Trigger 属性延续原透传。popup-container 顶层明确传入时优先（包括 false），否则回退 triggerProps.popupContainer。内部 Trigger 展开监听继续执行；不要通过嵌套监听替代内部展开协议。

本次仅新增可主动选用的专用类型，不收窄已发布的宽属性类型，不增加运行时过滤、不改变覆盖顺序；旧业务写法继续可编译。若直接使用旧宽属性，内部托管字段仍可能通过类型检查，但不代表能控制内部状态。

```ts
import type { AutoCompleteTriggerOptions } from "@cedar-design/ui";
```

<demo src="./__demos__/passthrough-options.vue"></demo>

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Props

| 属性                 | 说明                                                | 类型                                                                                     | 默认值                       |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------- |
| `model-value`        | 受控文本值                                          | `string`                                                                                 | `—`                          |
| `default-value`      | 非受控初始文本                                      | `string`                                                                                 | `''`                         |
| `options`            | 候选；支持分组，value 唯一，选择后转为字符串        | `(AutoCompleteOption \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined`                  |
| `field-names`        | 映射 value、label、disabled 等字段                  | `AutoCompleteFieldNames`                                                                 | `—`                          |
| `should-open`        | 允许展开的条件，不负责过滤候选                      | `(value: string) => boolean`                                                             | `value.length > 0`           |
| `filter-option`      | 按标签过滤；false 用于远程筛选                      | `AutoCompleteFilterOption`                                                               | 自动：数组开启，加载函数关闭 |
| `case-sensitive`     | 内置过滤是否区分大小写                              | `boolean`                                                                                | `false`                      |
| `popup-container`    | 弹层挂载容器，与 Trigger 一致                       | `PopupContainer`                                                                         | `—`                          |
| `trigger-props`      | 弹层配置；不能覆盖内部 open / disabled / 容器优先级 | `TriggerProps`                                                                           | `—`                          |
| `virtual-list-props` | 传入后启用虚拟列表                                  | `VirtualListProps`                                                                       | `—`                          |
| `size`               | 五档尺寸；未设置时继承 Group / Form / 全局配置      | `xs \| sm \| md \| lg \| xl`                                                             | `md`                         |
| `variant`            | 输入外观；未设置时继承 Group                        | `filled \| outline \| standard`                                                          | `outline`                    |
| `disabled`           | 禁用；未设置时继承，显式 false 覆盖                 | `boolean`                                                                                | `undefined`                  |
| `readonly`           | 只读，可聚焦复制，不展开候选                        | `boolean`                                                                                | `undefined`                  |
| `error`              | 错误状态；未设置时继承 FormItem                     | `boolean`                                                                                | `undefined`                  |
| `clearable`          | 允许清除可编辑的非空值                              | `boolean`                                                                                | `false`                      |
| `placeholder`        | 占位文字或浮动提示内容                              | `string`                                                                                 | `—`                          |
| `hint`               | 启用 Input 的浮动提示                               | `boolean`                                                                                | `undefined`                  |
| `line`               | 显示边框或底线                                      | `boolean`                                                                                | `true`                       |
| `text-color`         | 实例文字颜色                                        | `string`                                                                                 | `—`                          |
| `focus-color`        | 实例聚焦颜色                                        | `string`                                                                                 | `—`                          |
| `blur-color`         | 实例失焦提示颜色                                    | `string`                                                                                 | `—`                          |
| `enterkeyhint`       | 移动虚拟键盘回车提示                                | `InputHTMLAttributes['enterKeyHint']`                                                    | `—`                          |
| `aria-label`         | 输入框可访问名称                                    | `string`                                                                                 | `—`                          |
| `max-length`         | 输入与候选选择使用相同的截断规则                    | `number \| { length: number; errorOnly?: boolean }`                                      | `0`                          |
| `show-word-limit`    | 显示字数统计                                        | `boolean`                                                                                | `false`                      |
| `word-length`        | 自定义长度计算                                      | `(value: string) => number`                                                              | `—`                          |
| `word-slice`         | 自定义截断                                          | `(value: string, maxLength: number) => string`                                           | `—`                          |
| `input-attrs`        | 原生 input 属性，combobox 状态由组件维护            | `Record<string, unknown>`                                                                | `—`                          |

### Events

| 事件                                      | 参数                                                          |
| ----------------------------------------- | ------------------------------------------------------------- |
| `update:model-value`                      | `value: string`                                               |
| `input / search / change`                 | `value: string, event: Event`                                 |
| `select`                                  | `value: string, option: AutoCompleteOptionInfo, event: Event` |
| `clear`                                   | `event: Event`                                                |
| `focus / blur`                            | `event: FocusEvent`                                           |
| `dropdown-scroll / dropdown-reach-bottom` | `event: Event`                                                |

输入顺序：`input → update:modelValue → search`；选择：`update:modelValue → select → change`；清除：`clear → input → update:modelValue → change`。同值选择只发 select。change 表示失焦、Enter 或候选选择产生的提交。Input 负责输入、焦点与清除的 Form 通知，AutoComplete 仅对候选提交通知一次。选择也遵守 maxLength；select 的 value 是最终提交字符串，option.value 保留原始候选。clear 参数为事件，不再是字符串。

### Slots

| 插槽              | 说明                               |
| ----------------- | ---------------------------------- |
| `option`          | `{ data: AutoCompleteOptionInfo }` |
| `footer`          | 菜单底部                           |
| `prefix / suffix` | 输入框前后缀                       |
| `clear-icon`      | `{ clear }`                        |

### Methods

`focus()` / `blur()`

label 使用文本；复杂候选通过 option 插槽或选项 render 实现，不保留旧的函数/VNode label 写法。方向键浏览、Enter 选择、Escape 关闭，Tab 保留原生焦点导航。使用 Vue useId 保证 SSR 标识稳定。

## 类型定义

```ts
import type {
  AutoCompleteProps,
  AutoCompleteInstance,
  AutoCompleteOption,
  AutoCompleteOptionData,
  AutoCompleteOptionInfo,
  AutoCompleteFieldNames,
  AutoCompleteFilterOption,
} from "@cedar-design/ui";
```

## 样式变量

| Token                                           | 默认值                                              |
| ----------------------------------------------- | --------------------------------------------------- |
| `--c-auto-complete-popup-max-height`            | `var(--c-select-popup-max-height)`                  |
| `--c-auto-complete-popup-bg`                    | `var(--c-select-popup-bg)`                          |
| `--c-auto-complete-popup-border-radius`         | `var(--c-select-popup-border-radius)`               |
| `--c-auto-complete-popup-padding-vertical`      | `var(--c-select-popup-padding-vertical)`            |
| `--c-auto-complete-popup-font-size`             | `var(--c-select-popup-font-size)`                   |
| `--c-auto-complete-popup-border-color`          | `var(--c-select-popup-border-color)`                |
| `--c-auto-complete-popup-box-shadow`            | `var(--c-select-popup-box-shadow)`                  |
| `--c-auto-complete-option-height`               | `var(--c-select-popup-option-height)`               |
| `--c-auto-complete-option-font-weight-selected` | `var(--c-select-popup-option-font-weight-selected)` |
| `--c-auto-complete-option-padding-horizontal`   | `var(--c-select-popup-option-padding-horizontal)`   |
| `--c-auto-complete-option-bg-default`           | `var(--c-select-popup-option-bg)`                   |
| `--c-auto-complete-option-bg-hover`             | `var(--c-select-popup-option-bg-hover)`             |
| `--c-auto-complete-option-bg-selected`          | `var(--c-select-popup-option-bg-selected)`          |
| `--c-auto-complete-option-bg-disabled`          | `var(--c-select-popup-option-bg-disabled)`          |
| `--c-auto-complete-option-text-color-default`   | `var(--c-select-popup-option-text-color)`           |
| `--c-auto-complete-option-text-color-hover`     | `var(--c-select-popup-option-text-color-hover)`     |
| `--c-auto-complete-option-text-color-selected`  | `var(--c-select-popup-option-text-color-selected)`  |
| `--c-auto-complete-option-text-color-disabled`  | `var(--c-select-popup-option-text-color-disabled)`  |

清空不发 search，也不重新展开候选面板，包括从键盘聚焦的清空按钮回到输入框。受控值由父级决定：连续被拒绝的清空或选择仍各自发出 change 提议；已接受的候选选择只通知 Form 一次。

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

候选列表与 Select 统一使用分组、选中、禁用样式，AutoComplete 样式变量默认跟随对应的 Select 变量。`inline` 列表默认在输入框下方展开，随滚动更新位置；可通过 `trigger-props` 显式调整方向或开启自动翻转。`popup` 候选列表使用与 Select 相同的完整编辑面板样式。

### 公开类型入口

根入口和组件入口均导出 `AutoCompleteEmits`、`AutoCompleteSlots`、`AutoCompleteExpose`，与 Props、Instance 配套。Emits 为从运行时事件声明推导的参数元组映射；Expose 包含 focus/blur。

`case-sensitive` 只使内置本地过滤区分大小写：默认 false 时输入 `ap` 可以匹配 `Apple`，true 时不能。它不限制必须选择候选，不校验输入值。自定义 `filterOption` 优先；`filterOption=false` 关闭本地过滤，此时 case-sensitive 不起作用。

### strict 迁移 / Migration

旧 `strict` 已移除，直接改为 `case-sensitive`（TS 属性为 `caseSensitive`）。true/false 语义和默认 false 保持不变；该删除标记为下个 major，不保留兼容别名。

### 内置搜索字段配置

`searchFields` / `search-fields` 是只读 `('label' | 'value')[]`，默认 `['label']`；多字段为 OR 匹配，大小写默认不敏感。配置 `['value', 'label']` 可同时搜索编码和名称，fieldNames 将语义字段映射到业务字段；空数组对非空查询不匹配任何项。value 采用字符串比较，不做对象深层搜索，对象值或拼音等复杂规则仍用自定义回调。自定义回调优先并自行决定大小写；远程结果使用原有关闭本地过滤协议。Cascader 保留路径语义，会检查路径各节点的配置字段。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

## 函数属性加载候选

直接传 options(query, { signal })，无需调用 useAsyncData。options 继续接收数组，显式数组（包括 []）优先。组件内部管理 loading、旧结果隔离与请求取消；load-error 通知失败，实例 refresh() 重试。业务函数可只接收 query，忽略第二参数。

filterable 表示允许输入搜索词。filterOption 只控制本地候选匹配，从不发请求。使用 options 加载函数时默认不再二次过滤远程结果；仅传数组时默认启用本地匹配。业务通常无需设置 filter-option。

```vue
<c-auto-complete v-model="text" :options="loadSuggestions" />
```

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

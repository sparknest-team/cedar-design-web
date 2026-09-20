---
permalink: /components/auto-complete/
---

# AutoComplete

AutoComplete 在单行文本输入上提供候选建议。它始终允许自由输入，选择候选只是更快地填写字符串，不会把输入限制为选项值。

## 设计要点

- 值模型始终为 `string`；字符串、数字和对象选项被选择后都会归一化为字符串。
- `input` 与 `search` 表示实时编辑，`change` 表示失焦、Enter 或选项选择形成的一次提交。
- 默认过滤忽略大小写；开启 `strict` 后使用区分大小写的包含匹配。
- 获得焦点且存在可用候选时打开弹层；选择或清除后关闭弹层，但保留输入焦点。
- 第一版与 Maple 对齐公开契约和 TypeScript 职责，不抽取共享包；后续允许按平台需求演进。

## 基础用法

使用 `v-model` 绑定输入文本，通过 `options` 提供候选。对象选项可携带额外业务字段。

<demo src="./__demos__/basic.vue"></demo>

## 过滤与远程建议

默认过滤按候选标签做不区分大小写的包含匹配。`strict` 适合大小写敏感的标识符；`filter-option` 也可以传入自定义函数，或设为 `false` 关闭内置过滤。

<demo src="./__demos__/strict.vue"></demo>

远程搜索时监听 `search` 更新候选，并关闭本地过滤，避免对服务端结果再次筛选。

<demo src="./__demos__/remote.vue"></demo>

## 自定义字段与内容

对象字段名不一致时通过 `field-names` 映射 `value`、`label` 和 `disabled`。`option` 插槽收到归一化后的 `data`，原始对象保存在 `data.raw` 中。

<demo src="./__demos__/footer.vue"></demo>

## 尺寸与状态

尺寸与 Input 保持一致，支持 `xs`、`sm`、`md`、`lg` 和 `xl`。

<demo src="./__demos__/size.vue"></demo>

`readonly` 允许复制但不允许编辑或打开候选；`disabled` 表示控件不参与当前流程。开启 `clearable` 后，仅在可编辑且有值时显示清除按钮。

<demo src="./__demos__/state.vue"></demo>

## 事件语义

键盘输入的固定顺序为 `update:modelValue → input → search`；选项选择的固定顺序为 `update:modelValue → select → change`；清除只触发 `update:modelValue → clear`。如果选择值与当前值相同，仍触发 `select`，但不会重复触发更新或 `change`。

| 交互 | 事件 |
| --- | --- |
| 键盘编辑 | `update:modelValue`, `input(value, ev)`, `search(value, ev)` |
| 选择候选 | `update:modelValue`, `select(value, option, ev)`, `change(value, ev)` |
| 失焦或 Enter 提交 | 值有变化时触发 `change(value, ev)` |
| 清除 | `update:modelValue`, `clear(ev)` |

## 键盘与无障碍

输入元素使用 combobox 语义并关联 listbox。方向键移动活动候选，Enter 选择，Escape 关闭；Tab 保留浏览器原生焦点导航，不会被组件拦截。没有可见标签时，通过 `input-attrs` 提供 `aria-label`。

<demo src="./__demos__/accessibility.vue"></demo>

## API

### AutoComplete Props

| 参数名                    | 描述                                       | 类型                                                            | 默认值  |
| ------------------------- | ------------------------------------------ | --------------------------------------------------------------- | :-----: |
| model-value **(v-model)** | 绑定值                                     | `string`                                                        |   `-`   |
| default-value             | 默认值（非受控模式）                       | `string`                                                        |  `''`   |
| disabled                  | 是否禁用                                   | `boolean`                                                       | `false` |
| options                   | 用于自动提示的数据                         | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]` |  `[]`   |
| field-names               | 自定义对象字段名                           | `AutoCompleteFieldNames`                                        |   `-`   |
| popup-container           | 弹出框的挂载容器                           | `string \| HTMLElement \| false`                                |   `-`   |
| strict                    | 是否为严格校验模式                         | `boolean`                                                       | `false` |
| filter-option             | 自定义选项过滤方法                         | `FilterOption`                                                  | `true`  |
| should-open               | 是否允许展开；不负责逐项过滤               | `(inputValue: string) => boolean`                                | 输入非空 |
| trigger-props             | trigger 组件属性                           | `TriggerProps`                                                  |   `-`   |
| variant                   | 输入框外观                                 | `'filled' \| 'outline' \| 'standard'`                           | `'filled'` |
| size                      | 输入框尺寸                                 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                          |  `'md'`  |
| clearable                 | 是否允许清空输入框                         | `boolean`                                                       | `false` |
| readonly                  | 是否只读                                   | `boolean`                                                       | `false` |
| error                     | 是否展示错误状态                           | `boolean`                                                       | `false` |
| placeholder               | 占位提示文字                               | `string`                                                        |   `-`   |
| max-length                | 最大长度；规则与 Input 一致                | `number \| object`                                              |   `0`   |
| show-word-limit           | 是否显示字数统计                           | `boolean`                                                       | `false` |
| word-length               | 自定义长度计算                             | `(value: string) => number`                                     |   `-`   |
| word-slice                | 自定义截取方法                             | `(value: string, maxLength: number) => string`                  |   `-`   |
| input-attrs               | 内部 input 的原生属性                      | `Record<string, unknown>`                                       |   `-`   |
| virtual-list-props        | 传递虚拟列表属性，传入此参数以开启虚拟滚动 | `VirtualListProps`                                              |  `'-'`  |

展开条件与过滤条件相互独立：`filter-option=true` 按标签（缺省时按 value）忽略大小写匹配，`strict=true` 时区分大小写；传入函数可自定义过滤，输入为空时保留全部候选。`filter-option=false` 适合服务端筛选。没有候选或禁用时不会展开，`triggerProps.open` 不得绕过这些条件。若需要输入为空时也展示候选，设置 `:should-open="() => true"`。

### `<AutoComplete>` Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| input | 用户实时输入时触发 | `value: string, ev: Event` |
| search | 用户实时输入、需要刷新建议时触发 | `value: string, ev: Event` |
| change | 编辑提交或选择新值时触发，同值去重 | `value: string, ev: Event` |
| select | 选择候选时触发 | `value: string, option: AutoCompleteOptionInfo, ev: Event` |
| clear | 清除时触发 | `ev: Event` |
| focus / blur | 输入框获得或失去焦点时触发 | `ev: FocusEvent` |
| dropdown-scroll | 候选弹层滚动时触发 | `ev: Event` |
| dropdown-reach-bottom | 候选弹层滚动到底部时触发 | `ev: Event` |

### AutoComplete Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| option | 自定义候选内容 | `data: AutoCompleteOptionInfo` |
| footer | 候选弹层底部内容 | `-` |
| prefix | 输入框前缀 | `-` |
| suffix | 输入框后缀 | `-` |
| clear-icon | 自定义清除图标 | 与 Input 一致 |

### AutoComplete Methods

| 方法名 | 描述 |
| --- | --- |
| focus | 使输入框获取焦点 |
| blur | 使输入框失去焦点 |

## 类型定义

```ts
import type {
  AutoCompleteFieldNames,
  AutoCompleteFilterOption,
  AutoCompleteOption,
  AutoCompleteOptionData,
  AutoCompleteOptionInfo,
  AutoCompleteProps,
} from '@cedarjs/ui'
```

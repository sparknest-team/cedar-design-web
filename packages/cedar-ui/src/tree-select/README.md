---
permalink: /components/tree-select/
---

# TreeSelect

多选时，`inline` 下拉只显示选项；已选内容、单项移除和清空由输入框承担。确认式编辑面板保留“已选／清空”，选择为草稿，确认后提交。

可以对树形结构数据进行选择。

## 阅读方向

继承来源 dir；左右键按阅读方向展开、进入子级、返回或折叠，上下键及 Home/End 保持逻辑顺序。搜索使用实际匹配活动项，业务值和多选数组不随 RTL 反转。弹层在自定义挂载容器内也保留来源方向。

## 基础示例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 数据与选项

### 搜索大小写与匹配字段

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                 | 作用                   | 相关示例                                         |
| -------------------- | ---------------------- | ------------------------------------------------ |
| `data`               | 树节点数据             | 搜索大小写与匹配字段、选择后保留搜索词是什么意思 |
| `filterable`         | 是否启用搜索           | 搜索大小写与匹配字段、选择后保留搜索词是什么意思 |
| `case-sensitive`     | 内置搜索是否区分大小写 | 搜索大小写与匹配字段                             |
| `multiple`           | 多选                   | 选择后保留搜索词是什么意思                       |
| `retain-input-value` | 选中后保留搜索文本     | 选择后保留搜索词是什么意思                       |

<!-- demo-config-notes:end -->

现在统一默认为 label、不区分大小写。` :search-fields="['value', 'label']"` 同时匹配两字段；字段通过 fieldNames 映射。自定义 filterTreeNode 优先，disableFilter=true 跳过本地筛选。匹配祖先时保留父子树路径，可见节点和键盘候选使用同一规则。

<demo src="./__demos__/search-matching.vue"></demo>

迁移：旧 TreeSelect 的 value + 大小写敏感默认行为，显式设置 `:search-fields="['value']" case-sensitive` 即可恢复。本次默认值变化标记为 major。

### 选择后保留搜索词是什么意思

输入 Al，再点 Alice：两种情况都已经选中 Alice。不开 retain-input-value 时搜索输入清成空字符串；开启后输入框里还保留 Al，方便接着选同样匹配 Al 的 Alan。它不控制选中人员的显示名称，也不负责开启搜索；filterable 才是允许输入搜索词。

<demo src="./__demos__/retain-input-value.vue"></demo>

候选属性 `data` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

## 生命周期与边界

### 透传配置边界与优先级

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                  | 作用                                                                                   | 相关示例             |
| --------------------- | -------------------------------------------------------------------------------------- | -------------------- |
| `data`                | 树节点数据                                                                             | 透传配置边界与优先级 |
| `tree-props`          | 传给内部树的配置，选中状态仍由 TreeSelect 管理                                         | 透传配置边界与优先级 |
| `open-trigger-target` | 打开面板的点击区域；field 为整个字段，icon 仅右侧选择按钮。不影响键盘展开及受控 open。 | 复制与编辑           |
| `filterable`          | 是否启用搜索                                                                           | 复制与编辑           |

<!-- demo-config-notes:end -->

建议使用 `TreeSelectTriggerOptions`、`TreeSelectTreeOptions`。Trigger 的 open/defaultOpen、disabled、popupContainer、closeOnClickReference、autoFitTransformOrigin 由 TreeSelect 提供；这里 popup-container 只使用顶层值，没有嵌套容器回退。树的 data、选择/勾选集合、选择模式、fieldNames、加载、搜索、size、checkable/selectable 归顶层管理。Tree 普通配置覆盖默认展示配置，但随后会被顶层的托管字段覆盖；Panel 最后注入 selectedValues/checkedValues 和 disableSelectActionOnly。showLine、展开配置等未托管能力继续有效。通知监听不应代替 TreeSelect 的选择协议，使用顶层组件事件。

本次仅新增可主动选用的专用类型，不收窄已发布的宽属性类型，不增加运行时过滤、不改变覆盖顺序；旧业务写法继续可编译。若直接使用旧宽属性，内部托管字段仍可能通过类型检查，但不代表能控制内部状态。

```ts
import type {
  TreeSelectTreeOptions,
  TreeSelectTriggerOptions,
} from "@cedar-design/ui";
```

<demo src="./__demos__/passthrough-options.vue"></demo>

### 复制与编辑

open-trigger-target="icon" 时，输入区可以编辑或复制，只有右侧选择按钮响应点击打开。关闭手输或搜索后，已有文本仍可复制。

<demo src="./__demos__/open-trigger-target.vue"></demo>

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

### TreeSelect Props

| 属性                  | 说明                                                                                   | 类型                                                      | 默认值                |
| --------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| `open-trigger-target` | 打开面板的点击区域；field 为整个字段，icon 仅右侧选择按钮。不影响键盘展开及受控 open。 | `'field' \| 'icon'`                                       | `'field'`             |
| model-value           | 选中业务值                                                                             | string / number / array                                   | undefined             |
| data                  | 树节点数据                                                                             | TreeNodeData[] / `(query, { signal }) => Array / Promise` | `undefined`           |
| multiple              | 多选                                                                                   | boolean                                                   | false                 |
| filterable            | 是否启用搜索                                                                           | boolean                                                   | 单选 false，多选 true |
| retain-input-value    | 选中后保留搜索文本                                                                     | boolean                                                   | false                 |
| case-sensitive        | 内置搜索是否区分大小写                                                                 | boolean                                                   | false                 |
| filter-tree-node      | 自定义节点过滤函数                                                                     | Function                                                  | undefined             |
| tree-props            | 传给内部树的配置，选中状态仍由 TreeSelect 管理                                         | TreeProps                                                 | undefined             |

`disabled`、`readonly` 支持字段显式设置及 Form / FormItem 继承。弹层确认期间不可编辑；校验失败保留草稿，表单重置关闭弹层并丢弃未完成提交。

### TreeSelect Events

| 事件名                                 | 说明             | 参数          |
| -------------------------------------- | ---------------- | ------------- |
| update:modelValue                      | 更新选中业务值   | value         |
| change                                 | 已提交选中值变化 | value         |
| search                                 | 搜索文本变化     | text: string  |
| update:inputValue / input-value-change | 更新输入文本     | text: string  |
| update:open / open-change              | 面板开关变化     | open: boolean |
| clear                                  | 清除选择         | 无            |

### TreeSelect Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { TreeSelectProps } from "@cedar-design/ui";
```

### Form 字段展示与确认

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

### 原位编辑与键盘优先级

`click` / `dblclick` 与 Form 继承同一编辑规则。悬浮或聚焦显示编辑图标，点击图标直接编辑；disabled、readonly、readPretty 不显示编辑入口。面板内点击仅修改草稿。

面板打开时，方向键导航可见且未禁用的节点，左右键展开/收起或移动到子/父节点，Home/End 定位首末节点；Enter 选择/勾选当前节点，不能选择的分支则展开或收起。搜索优先激活匹配节点，多选复用树的勾选规则。Esc 先关闭面板并保留草稿、恢复输入焦点；面板关闭后 Enter 保存字段，Esc 取消编辑。与 AutoComplete、PeopleSelect 的对比示例见 Form 的“各类字段统一展示”。

异步加载同一节点时合并重复展开操作；节点被替换、编辑器关闭或表单重置后，旧请求不再触发展开或勾选。加载完成后，方向键可立即进入新子节点。搜索词或候选变化时先清除旧过滤结果，避免 Enter 选中旧候选；字段确认仍先校验，再执行异步提交。

### 节点字段与业务值

节点默认使用 `{ value, label, children }`，`value` 是全树唯一的字符串或数字（支持 `0`），`label` 是展示内容。后端使用其他字段时可配置 `fieldNames: { value: 'id', label: 'text', children: 'items' }`，无需修改后端数据。声明式组件子项的 `name`、Vue 的 `:key` 和 Table 的 `rowKey` 保持各自含义。

Tree 的独立状态采用 `selectedValues/defaultSelectedValues`、`checkedValues/defaultCheckedValues`、`halfCheckedValues`、`expandedValues/defaultExpandedValues`，分别通过同名具名 v-model 更新；`check` 事件数据中的半选集合为 `halfCheckedValues`。节点内容插槽为 `label`，TreeSelect 对应透传插槽为 `tree-slot-label`。`scrollIntoView({ value })` 按业务值定位；显式 `index` 仍表示虚拟列表从 0 开始的数组下标。

### 搜索开关

统一使用 `filterable` 启用搜索，默认单选 false、多选 true。`retain-input-value` 独立控制选中后是否保留搜索文本，默认 false。

迁移：`allow-search` 改为 `filterable`；原 `{ retainInputValue: true }` 写法改为 `filterable` 加 `retain-input-value`。本次按要求移除旧入口，不保留兼容别名，须以 major 发布。

### 内置搜索字段配置

`searchFields` / `search-fields` 是只读 `('label' | 'value')[]`，默认 `['label']`；多字段为 OR 匹配，大小写默认不敏感。配置 `['value', 'label']` 可同时搜索编码和名称，fieldNames 将语义字段映射到业务字段；空数组对非空查询不匹配任何项。value 采用字符串比较，不做对象深层搜索，对象值或拼音等复杂规则仍用自定义回调。自定义回调优先并自行决定大小写；远程结果使用原有关闭本地过滤协议。Cascader 保留路径语义，会检查路径各节点的配置字段。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

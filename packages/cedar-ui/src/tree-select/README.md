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

如需按 value 区分大小写搜索，显式设置 `:search-fields="['value']" case-sensitive`。

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

建议使用本页列出的专用配置类型；展开状态、模型和事件由组件管理，不能通过嵌套配置接管。

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

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| model-value | TreeSelectValue | undefined | 受控业务值；支持节点标识、标签值、同类数组及 null。 |
| default-value | TreeSelectValue | undefined | 仅创建时读取的非受控初始值。 |
| data | readonly TreeNodeData[] / `OptionsLoader<TreeNodeData>` | undefined | 根候选数组或 (query, { signal }) 加载函数。 |
| multiple | boolean | false | 启用多选，同时决定未显式指定 filterable 时的默认搜索。 |
| label-in-value | boolean | false | 提交标签值对象；显式标签优先于候选名称。 |
| tree-checkable | boolean | false | 使用树勾选并产生多值模型；单独开启不自动启用搜索。 |
| tree-check-strictly | boolean | false | 父子节点独立勾选。 |
| tree-checked-strategy | 'all' / 'parent' / 'child' | 'all' | 关联勾选时的回显策略，沿用 Tree 规则。 |
| filterable | boolean | undefined | 显式值优先；缺省只跟随 multiple，不跟随 tree-checkable。 |
| retain-input-value | boolean | false | 选择后保留搜索文本。 |
| input-value | string | undefined | 受控搜索文本，独立于业务选中值。 |
| default-input-value | string | '' | 非受控搜索文本初始值。 |
| case-sensitive | boolean | false | 内置节点搜索区分大小写；自定义回调优先。 |
| search-fields | readonly OptionSearchField[]<br>`OptionSearchField: 'label' \| 'value'` | ['label'] | 内置搜索字段，经 field-names 映射。 |
| filter-tree-node | (searchKey, nodeData) => boolean | undefined | 自定义节点过滤回调。 |
| disable-filter | boolean | false | 关闭内部节点过滤；可用于已由业务筛选的数据。 |
| field-names | TreeFieldNames | undefined | 业务节点字段映射，节点标识要求全树唯一。 |
| load-more | (nodeData) => `Promise<void>` | undefined | 节点懒加载，沿用 Tree 的加载协议。 |
| fallback-option | boolean / function | true | 候选缺失时的同步节点回退；false 隐藏未匹配值。 |
| selectable | boolean / leaf / function | true | 可选择节点规则；leaf 只允许叶节点。 |
| tree-props | `Partial<TreeProps>` | undefined | 内部树配置，顶层托管字段优先；建议用 TreeSelectTreeOptions 检查边界。 |
| trigger-props | `Partial<TriggerProps>` | undefined | 候选浮层配置，顶层展开和挂载策略优先。 |
| dropdown-style | CSSProperties | undefined | 候选内容样式。 |
| dropdown-class-name | string / string[] | undefined | 候选内容附加类名。 |
| scrollbar | boolean / ScrollbarProps | true | 候选区域滚动条配置。 |
| show-header-on-empty | boolean | false | 候选为空时保留 header 内容。 |
| show-footer-on-empty | boolean | false | 候选为空时保留 footer 内容。 |
| placeholder | string | undefined | 默认选择字段占位内容。 |
| size | ComponentSize<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | undefined | 选择字段尺寸，省略时继承分组和表单。 |
| border | boolean | true | 默认字段为 filled，false 改为 standard。 |
| max-tag-count | number | undefined | 已选标签展示数量上限；省略或 0 不限制。 |
| disabled | boolean | undefined | 禁用编辑，省略时继承表单。 |
| readonly | boolean | undefined | 只读，省略时继承表单；不等同于纯阅读。 |
| error | boolean | undefined | 错误状态，省略时继承表单。 |
| loading | boolean | false | 字段和候选等待反馈；暂停选择、清空、移除和确认，保留搜索及关闭。 |
| loading-mode | 'default' / 'line' | 'default' | 字段指示器或底部加载线，不改变 popup loader 的范围。 |
| clearable | boolean | false | 允许清空；延迟模式先修改草稿。 |
| empty-value | TreeSelectProps['emptyValue'] | undefined | 清空结果覆盖；支持节点值、数组、null 及工厂，省略保留既有规则。 |
| empty-values | readonly unknown[] | undefined | 空值识别，按字段、FormItem、Form 继承。 |
| empty-text | string | undefined | 默认纯阅读空文案，继承后缺省为短横线；自定义 read 优先。 |
| read-pretty | boolean | undefined | 统一纯阅读状态，省略时继承表单。 |
| edit-mode | direct / click / dblclick | undefined | 编辑入口，省略时继承表单，否则 direct。 |
| before-commit | BeforeFieldCommit | undefined | 确认前调用 ({ value, previousValue }, done, { signal })；布尔、Promise 或 done 完成，同步 undefined 等待 done。 |
| open | boolean | undefined | 受控候选层或延迟编辑层状态。 |
| default-open | boolean | false | 非受控展开初始值。 |
| popup-container | PopupContainer | undefined | 顶层挂载目标：选择器、HTMLElement 或 false。 |
| open-trigger-target | 'field' / 'icon' | 'field' | 点击字段或只点击展开图标进入编辑；保留键盘入口。 |

### TreeSelect Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue / change | TreeSelectValue / undefined | 业务选中提交；延迟编辑的草稿不触发。 |
| update:inputValue / input-value-change / search | string | 输入文本与搜索通知。 |
| update:open / open-change | boolean | 候选层或编辑层展开通知。 |
| clear | — | 清空动作通知，延迟模式仍需确认。 |
| load-error | error: unknown, node?: TreeNodeData | 当前 data 根候选源或节点 loadMore 失败；节点加载失败时提供原始节点，不等待监听器 Promise。 |

### TreeSelect Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| trigger | — | 替换默认字段触发内容。 |
| read | TreeSelectReadScope | 统一阅读 { value, text }；text 是格式化值，空值为空串，empty-text 只影响默认阅读。 |
| label | { data: SelectionFieldItem } | 默认字段的已选项内容。 |
| selected / prefix / suffix | — | 默认字段的选中区域、前缀和后缀，与 Select 一致。 |
| clear-icon | { clear(event?) } | 自定义清空节点，调用 clear 执行标准清空。 |
| arrow-icon | { focus, menuOpen } | 默认字段箭头及真实聚焦、展开状态。 |
| loading-icon / search-icon | — | 默认字段加载指示图标或搜索图标；line 模式不显示加载图标。 |
| header / footer | — | 候选内容头部与尾部，空状态显示由对应属性控制。 |
| loader / empty | — | 候选面板等待与空内容；loader 与字段 loading-icon 分开。 |
| tree-slot-label / tree-slot-extra | node: TreeNodeData, status: TreeSelectNodeStatus | 透传 Tree 的节点标签与额外内容；节点数据为第一参数，状态为第二参数。 |
| tree-slot-* | Tree 对应插槽参数 | 其他 Tree 插槽按同名协议透传。 |

### TreeSelect Methods

| 方法 | 返回值 | 说明 |
| --- | --- | --- |
| refresh() | `Promise<void>` | 重读当前 data 候选源，不自动打开编辑器。 |
| focus() / blur() | void | 操作当前默认字段输入；延迟模式按统一入口打开编辑。 |

### 公开类型

TreeSelectProps 来自实际属性推导；TreeSelectValue、TreeSelectLabelValue、TreeSelectReadScope、TreeSelectNodeStatus、TreeSelectEmits、TreeSelectSlots、TreeSelectExpose 可从根入口和 tree-select 子入口导入。没有用于替换编辑器的 default 插槽，节点内容使用 tree-slot-label。

### 编辑与确认

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

### 原位编辑与键盘优先级

`click` / `dblclick` 与 Form 继承同一编辑规则。悬浮或聚焦显示编辑图标，点击图标直接编辑；disabled、readonly、readPretty 不显示编辑入口。面板内点击仅修改草稿。

面板打开时，方向键导航可见且未禁用的节点，左右键展开/收起或移动到子/父节点，Home/End 定位首末节点；Enter 选择/勾选当前节点，不能选择的分支则展开或收起。搜索优先激活匹配节点，多选复用树的勾选规则。Esc 先关闭面板并保留草稿、恢复输入焦点；面板关闭后 Enter 保存字段，Esc 取消编辑。与 AutoComplete、PeopleSelect 的对比示例见 Form 的“各类字段统一展示”。

多选树的复选框不单独进入 Tab 顺序；指针勾选时保留输入焦点，节点通过 `aria-checked` 暴露选中和半选状态。

异步加载同一节点时合并重复展开操作；节点被替换、编辑器关闭或表单重置后，旧请求不再触发展开或勾选。加载完成后，方向键可立即进入新子节点。搜索词或候选变化时先清除旧过滤结果，避免 Enter 选中旧候选；字段确认仍先校验，再执行异步提交。

### 节点字段与业务值

节点默认使用 `{ value, label, children }`，`value` 是全树唯一的字符串或数字（支持 `0`），`label` 是展示内容。后端使用其他字段时可配置 `fieldNames: { value: 'id', label: 'text', children: 'items' }`，无需修改后端数据。声明式组件子项的 `name`、Vue 的 `:key` 和 Table 的 `rowKey` 保持各自含义。

Tree 的独立状态采用 `selectedValues/defaultSelectedValues`、`checkedValues/defaultCheckedValues`、`halfCheckedValues`、`expandedValues/defaultExpandedValues`，分别通过同名具名 v-model 更新；`check` 事件数据中的半选集合为 `halfCheckedValues`。节点内容插槽为 `label`，TreeSelect 对应透传插槽为 `tree-slot-label`。`scrollIntoView({ value })` 按业务值定位；显式 `index` 仍表示虚拟列表从 0 开始的数组下标。

### 搜索开关

统一使用 `filterable` 启用搜索；未指定时只跟随 `multiple`。单独开启 `tree-checkable` 会产生多值模型，但不自动启用搜索，可显式设置 `filterable`。`retain-input-value` 独立控制选中后是否保留搜索文本，默认 false。

旧 `allow-search` 改为 `filterable`；原 `{ retainInputValue: true }` 写法改为 `filterable` 加 `retain-input-value`。

### 搜索字段

`searchFields` / `search-fields` 是只读 `('label' | 'value')[]`，默认 `['label']`；多字段为 OR 匹配，大小写默认不敏感。配置 `['value', 'label']` 可同时搜索编码和名称，fieldNames 将语义字段映射到业务字段；空数组对非空查询不匹配任何项。value 采用字符串比较，不做对象深层搜索，对象值或拼音等复杂规则仍用自定义回调。自定义回调优先并自行决定大小写；远程结果使用原有关闭本地过滤协议。Cascader 保留路径语义，会检查路径各节点的配置字段。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

refresh 可在编辑器未打开时重试组件自有的异步选项读取，沿用既有 AbortSignal、loading 和 load-error 协议，不自动打开编辑器；静态数组不产生额外请求。

### 输入与展开按钮

原生 combobox 与独立展开按钮都声明 aria-haspopup=tree；面板可见时，两者通过同一 aria-controls 指向实际树。展开状态同步，按钮仍遵守禁用/只读和 open-trigger-target 规则。

### 加载期间的选择动作

手动 loading 或当前候选请求处于加载状态时，纯选择字段保留已有值，暂停新选择、清空与标签移除。被阻止的动作不发送业务通知，也不提交模型。字段搜索仍可输入，disabled/readonly 不因此改写；需要禁止搜索时单独设置。

延迟编辑层的清空和确认在此期间不可用，仍可取消或关闭。手动标记和当前请求都结束后，操作按正常规则恢复，并继续尊重禁用选项。Input、AutoComplete 等自由文本字段的 loading 继续允许文本编辑与清空，不套用选择值的暂停规则。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-tree-select-highlight-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-tree-select-option-active-background` | `var(--c-color-fill-2)` | `background` |
| `--c-tree-select-option-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-tree-select-popup-padding-left` | `var(--c-spacing-5)` | `padding-inline-start` |
| `--c-tree-select-popup-padding-right` | `var(--c-spacing-2)` | `padding-inline-end` |
| `--c-tree-select-popup-padding-vertical` | `var(--c-spacing-2)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-tree-select-option-active-background: var(--c-color-fill-2);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

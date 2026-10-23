---
permalink: /components/select/
---

# Select

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 案例

### 基础用法

点击展开选项，选中后回填并收起；清除后可重新选择。本例只演示单选。

<demo src="./__demos__/basic.vue"></demo>

### 禁用与只读

<demo src="./__demos__/state.vue"></demo>

### 变体

设置`variant="outline"`开启变体模式，常用于沉浸式使用。

<demo src="./__demos__/variant.vue"></demo>

### 选择框大小

支持 xs、sm、md、lg、xl 五档尺寸。未设置时依次继承 InputGroup、FormItem、ConfigProvider，最终默认 md。

<demo src="./__demos__/size.vue"></demo>

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### 同名选项

标签展示允许同名，但每个选项的值必须唯一。删除第二个“设备”只移除 ID 2，不会误删 ID 1；搜索文字与已选值分别管理。

<demo src="./__demos__/same-label.vue"></demo>

### 多选选择器

通过设置 multiple ，可以让选择器支持多选。此外通过 max-tag-count 可以设置最多显示的标签个数。

<demo src="./__demos__/multiple.vue"></demo>

### 已选 Tag 样式

多选时，已选项在选择框中以 Tag 展示。通过选项上的 `tagProps`（或 `<c-option>` 的 `tag-props`）可以把属性透传给 [Tag](/components/tag/)，用来改颜色、状态、变体等。Tag 没有单独的最大宽度属性，需要截断长文本时传入 `nowrap: true`，并用 `style.maxWidth` 限制宽度。

<demo src="./__demos__/tag-props.vue"></demo>

### 加载中

选择框和下拉菜单显示加载中状态。

<demo src="./__demos__/loading.vue"></demo>

### 下拉菜单的页头

自定义下拉菜单的页头

<demo src="./__demos__/custom-header.vue"></demo>

### 下拉菜单的页脚

自定义下拉菜单的页脚

<demo src="./__demos__/custom-footer.vue"></demo>

### 允许创建

通过设置 creatable ，让选择器可以创建选项中不存在的条目。

<demo src="./__demos__/allow-create.vue"></demo>

### 允许搜索

通过设置 filterable ，可以让选择器支持对选项的搜索，配合 filter-option 可以自定义搜索。

<demo src="./__demos__/filterable.vue"></demo>

### 下拉菜单滚动

可以通过`dropdown-scroll`监听下拉菜单的滚动事件，或者通过`dropdown-reach-bottom`监听下拉菜单滚动到底部的事件

<demo src="./__demos__/dropdown-scroll.vue"></demo>

### 回退选项

使用 fallback-option 自定义选项中不存在的值，默认会在输入框中展示不存在的选项值。可能用于选项还没有获取完，或者远程搜索时选项改变了。

<demo src="./__demos__/fallback-option.vue"></demo>

### 远程搜索

使用 search 事件进行远程搜索，并改变选项。

<demo src="./__demos__/search.vue"></demo>

### 分组

使用 optgroup 组件添加分组选项。

<demo src="./__demos__/optgroup.vue"></demo>

### 自定义选择框展示内容

通过`#label`插槽可以自定义选择框展示内容。

<demo src="./__demos__/custom-label.vue"></demo>

### 联动选择框

展示联动选择框的实现方法

<demo src="./__demos__/linkage.vue"></demo>

### 自定义字段名

可以通过`field-names`属性定义`options`中数据的格式

### 虚拟列表

虚拟列表的使用方法

<demo src="./__demos__/virtual-list.vue"></demo>

选项分组与 Menu 使用一致的间距逻辑：标题行高 20px，上下各 4px 留白（总高 28px）；后续分组前额外留 8px，首组不添加组间距。标题与选项文字左对齐；AutoComplete 的标题缩进跟随其选项水平 padding 配置。

### 分组间距

<demo src="./__demos__/group-spacing.vue"></demo>

### 管理已选项

多选面板顶部提供已选数量与清空。Cedar 在列表上方显示可删除标签；Maple 点击数量查看已选明细，支持逐项移除并返回可选项。popup/popover 与 dialog 共用该内容。移除和清空先修改草稿，关闭取消会恢复原值，确认后才提交；禁用项保留，异步确认期间禁用操作。面板的清空入口独立于字段清空图标。

### 外观组合

适用于选项数据明确的单选输入。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 交互状态切换

适用于选项数据明确的单选输入。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 异步设备与 ID 回显

<demo src="./__demos__/async-devices.vue"></demo>

主体、控制器、选项算法与样式在两端独立维护；展示方式继承 Form/Item。完整对比示例集中在 Form 文档。

未设置 disabled / error 时继承表单状态；显式 false 可以覆盖继承值。FieldDecorator 和 SelectionField 不重复注入表单上下文，focus / blur 由 Select 向表单分发一次。

### 复杂插槽组合

<demo src="./__demos__/slots-review.vue"></demo>

### 子组件选项组合

<demo src="./__demos__/options-review.vue"></demo>

### 交互调度生命周期

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Select 属性

分别使用 `v-model`、`v-model:open` 和 `v-model:input-value` 控制选中值、展开状态和搜索词。单选清空为 `''`，多选为 `[]`；Select 存在真实空字符串选项时，清空值为 `undefined`。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value / default-value` | 受控值 / 非受控初始值 | `Value` | `单选 ''，多选 []` |
| `open / default-open` | 受控展开 / 默认展开 | `boolean` | `undefined / false` |
| `input-value / default-input-value` | 搜索文本，独立于选中值 | `string` | `undefined / ''` |
| `multiple` | 多选；默认启用搜索 | `boolean` | `false` |
| `size` | 完整支持 xs、sm、md、lg、xl，未设置时继承分组与表单 | `ComponentSize` | `md` |
| `variant` | filled、outline、standard；未设置时继承 InputGroup | `FormControlVariant` | `filled` |
| `disabled / readonly / error` | 未设置时继承表单；显式 false 可覆盖 | `boolean` | `undefined` |
| `placeholder` | 占位文本 | `string` | `—` |
| `hint / line` | 浮动提示 / standard 变体下划线 | `boolean` | `true` |
| `text-color / focus-color / blur-color` | 字段颜色 | `string` | `—` |
| `loading` | 加载状态；禁止选择和确认 | `boolean` | `false` |
| `show-tags` | 多选值以标签展示；false 改用分隔文本 | `boolean` | `true` |
| `separator` | show-tags=false 时的多选分隔符 | `string` | `,` |
| `text-align` | left、center、right | `string` | `left` |
| `max-tag-count` | 标签数量上限，0 不限制 | `number` | `0` |
| `tag-nowrap` | 标签单行显示；长文字省略、删除图标保留，标签行可横向滚动；悬停、聚焦或点按省略正文查看全文 | `boolean` | `false` |
| `popup-container` | 选择器、元素、返回元素的函数或 false（原地渲染） | `PopupContainer` | `—` |
| `trigger-props` | Menu 的 Trigger 属性；展开状态由字段控制 | `TriggerProps` | `—` |
| `virtual-list-props` | Menu / List 的虚拟列表参数 | `VirtualListProps` | `—` |
| `search-delay` | search 事件防抖时长（毫秒） | `number` | `500` |
| `format-label` | 格式化已选标签；VNode 使用 label 插槽 | `function` | `—` |
| `clearable` | 允许清除，保留禁用的已选项 | `boolean` | `true` |
| `options` | 原始值、对象、分组均支持；三种展示使用同一数据源 | `SelectOption[]` | `[]` |
| `field-names` | value、label、disabled、tagProps、render 字段映射；对象值须有唯一标识字段 | `SelectFieldNames` | `—` |
| `filterable` | 开启搜索，可设置 retainInputValue | `boolean 或 { retainInputValue?: boolean }` | `单选 false / 多选 true` |
| `filter-option` | false 关闭本地过滤；函数接收搜索词和原始选项 | `boolean 或 (input, option) => boolean` | `true` |
| `creatable` | 允许创建不存在的选项 | `boolean` | `false` |
| `fallback-option` | 异步选项未到达时反显值，或返回完整回退选项 | `boolean 或 (value) => SelectOptionData` | `true` |
| `show-extra-options` | 菜单中展示回退/创建选项 | `boolean` | `true` |
| `limit` | 多选数量上限，0 不限制 | `number` | `0` |
| `auto-fit-popup-width` | Menu 与字段等宽 | `boolean` | `true` |
| `default-active-first-option` | 默认激活首个可用选项（不会自动提交） | `boolean` | `true` |
| `unmount-on-close` | 关闭 Menu 后销毁内容 | `boolean` | `false` |
| `scrollbar` | Menu / List 滚动条配置 | `boolean 或 ScrollbarProps` | `true` |
| `show-header-on-empty / show-footer-on-empty` | 空状态仍展示 header / footer | `boolean` | `false` |
| `presentation` | 字段展示；未指定时继承 FormItem/Form | `inline / click / dblclick` | `inline` |
| `before-commit` | 确认校验后可等待的保存拦截钩子 | `(value, context) => void / false / Promise` | — |

### 事件与方法

- `update:modelValue`、`change(value)`：提交时触发，编辑草稿不触发。
- `update:open`、`open-change(open)`：请求改变展开状态。
- `update:inputValue`、`input-value-change(text)`、`search(text)`：搜索状态。
- `focus(event)`、`blur(event)`、`clear(event)`：原生字段事件；只有字段所有者通知 Form。
- 方法：`focus()`、`blur()`。

Select 还提供 `remove(value)`、`exceed-limit(value, event)`、`dropdown-scroll(event)`、`dropdown-reach-bottom(event)`。

### 插槽与选项数据

使用 `label({ data })` 自定义已选标签，`selected` 替换整个已选区域。还支持 `prefix`、`suffix`、`clear-icon({ clear })`、`arrow-icon`、`loading-icon`、`search-icon`、`empty`、`option({ data })`。

选项 `label` 是用于搜索的纯文本；自定义选项内容使用 `render` 或 `option` 插槽，自定义反显使用 `format-label` 或 `label` 插槽。以 value 而非 label 识别选项。选项的 `disabled` 禁止选择和删除，`tagProps` 可定制已选标签。

Select 还支持 `header`、`footer`、`trigger` 和默认插槽中的 `Option / Optgroup`。Option 属性为 `value`、`label`、`disabled`、`tagProps`、`index`；默认插槽提供 `selected`。分组数据为 `{ isGroup: true, label, options }`。所有编辑展示共用相同选项模型；read 插槽可自定义阅读内容。

单选和多选选项统一使用 popup-option-padding-horizontal。组件没有隐式搜索高亮 DOM；自定义选项插槽负责其高亮片段样式。已删除无效的 multi-popup-option-padding-horizontal 与 popup-option-highlight-* 变量。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### Option Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值，未传时取 label 或默认插槽文本 | string \| number \| boolean \| Record<string, unknown> | undefined |
| label | 搜索与已选标签使用的文本 | string | undefined |
| disabled | 禁止选择与移除 | boolean | false |
| tag-props | 已选标签属性 | TagProps | undefined |
| index | 手动指定选项顺序 | number | undefined |

### Option Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义选项内容 | { selected: boolean } |
| icon | 选项图标 | - |
| suffix | 选项后缀 | - |

### Optgroup Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 分组标题 | string | undefined |

### Optgroup Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| label | 自定义分组标题 | - |
| default | 分组下的 Option 子组件 | - |

### Select Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| default | Option / Optgroup 子组件 | - |
| option | 自定义选项内容 | { data } |
| label | 自定义已选标签 | { data } |
| selected | 替换整个已选区域 | - |
| header | 菜单页头 | - |
| footer | 菜单页脚 | - |
| trigger | 自定义选择器触发器 | - |
| prefix | 字段前缀 | - |
| suffix | 字段后缀 | - |
| clear-icon | 自定义清空操作 | { clear } |
| arrow-icon | 下拉箭头 | - |
| search-icon | 搜索图标 | - |
| loading-icon | 加载图标 | - |
| empty | 无选项内容 | - |
| read | 阅读展示 | { value, text } |

### Select Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:model-value | 更新绑定值 | value |
| change | 提交选择 | value |
| update:open | 请求展开状态 | open |
| open-change | 展开状态改变 | open |
| update:input-value | 更新搜索文本 | text |
| input-value-change | 搜索文本改变 | text |
| search | 搜索通知 | text |
| focus | 字段获得焦点 | event |
| blur | 字段失去焦点 | event |
| clear | 清空选择 | event |
| remove | 移除已选项 | value |
| exceed-limit | 超过多选上限 | value, event |
| dropdown-scroll | 菜单滚动 | event |
| dropdown-reach-bottom | 菜单滚到底部 | event |

### Select Methods

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| focus | 聚焦实际字段 | - |
| blur | 移出实际字段焦点 | - |

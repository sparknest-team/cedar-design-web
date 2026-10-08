---
permalink: /components/select/
---

# Select

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 案例

### 异步设备与 ID 回显

<demo src="./__demos__/async-devices.vue"></demo>

主体、控制器、选项算法、Menu 与样式已独立复制到 Maple；Cedar 仅提供 menu，Maple 在独立文件中扩展 list / picker，不共享运行时代码或实例。

未设置 disabled / error 时继承表单状态；显式 false 可以覆盖继承值。FieldDecorator 和 SelectionField 不重复注入表单上下文，focus / blur 由 Select 向表单分发一次。

### 同名选项

标签展示允许同名，但每个选项的值必须唯一。删除第二个“设备”只移除 ID 2，不会误删 ID 1；搜索文字与已选值分别管理。

<demo src="./__demos__/same-label.vue"></demo>

### 基础用法

选择器的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 变体

设置`variant="outline"`开启变体模式，常用于沉浸式使用。

<demo src="./__demos__/variant.vue"></demo>

### 多选选择器

通过设置 multiple ，可以让选择器支持多选。此外通过 max-tag-count 可以设置最多显示的标签个数。

<demo src="./__demos__/multiple.vue"></demo>

### 已选 Tag 样式

多选时，已选项在选择框中以 Tag 展示。通过选项上的 `tagProps`（或 `<c-option>` 的 `tag-props`）可以把属性透传给 [Tag](/components/tag/)，用来改颜色、状态、变体等。Tag 没有单独的最大宽度属性，需要截断长文本时传入 `nowrap: true`，并用 `style.maxWidth` 限制宽度。

<demo src="./__demos__/tag-props.vue"></demo>

### 选择框大小

支持 xs、sm、md、lg、xl 五档尺寸。未设置时依次继承 InputGroup、FormItem、ConfigProvider，最终默认 md。

<demo src="./__demos__/size.vue"></demo>

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
| `tag-nowrap` | 标签内容不换行 | `boolean` | `false` |
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
| `presentation` | 展示方式 | `menu` | `menu` |

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

Select 还支持 `header`、`footer`、`trigger` 和默认插槽中的 `Option / Optgroup`。Option 属性为 `value`、`label`、`disabled`、`tagProps`、`index`；默认插槽提供 `selected`。分组数据为 `{ isGroup: true, label, options }`。Maple 的 List、Picker 同样支持插槽选项；Picker 展示选项的纯文本标签。

单选和多选选项统一使用 popup-option-padding-horizontal。组件没有隐式搜索高亮 DOM；自定义选项插槽负责其高亮片段样式。已删除无效的 multi-popup-option-padding-horizontal 与 popup-option-highlight-* 变量。

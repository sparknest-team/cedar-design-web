---
permalink: /components/select/
---

# Select

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 案例

### 基础用法

选择器的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 变体

设置`variant="outline"`开启变体模式，常用于沉浸式使用。

<demo src="./__demos__/variant.vue"></demo>

### 多选选择器

通过设置 multiple ，可以让选择器支持多选。此外通过 max-tag-count 可以设置最多显示的标签个数。

<demo src="./__demos__/multiple.vue"></demo>

### 选择框大小

选择框分为 mini、small、medium、large 四种尺寸。

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

### Select Props

| 属性                        | 说明                                                                             | 类型                                                                                          |               默认值                |
| --------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | :---------------------------------: |
| multiple                    | 是否开启多选模式（多选模式默认开启搜索）                                         | `boolean`                                                                                     |               `false`               |
| model-value **(v-model)**   | 绑定值                                                                           | `string\| number\| Record<string, any>\| (string \| number \| Record<string, any>)[]`         |                 `-`                 |
| default-value               | 默认值（非受控模式）                                                             | `string\| number\| Record<string, unknown>\| (string \| number \| Record<string, unknown>)[]` |             `'' \| []`              |
| input-value **(v-model)**   | 输入框的值                                                                       | `string`                                                                                      |                 `-`                 |
| default-input-value         | 输入框的默认值（非受控模式）                                                     | `string`                                                                                      |                `''`                 |
| size                        | 选择框的大小                                                                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                        |               `'md'`                |
| placeholder                 | 占位符                                                                           | `string`                                                                                      |                 `-`                 |
| loading                     | 是否为加载中状态                                                                 | `boolean`                                                                                     |               `false`               |
| disabled                    | 是否禁用                                                                         | `boolean`                                                                                     |               `false`               |
| error                       | 是否为错误状态                                                                   | `boolean`                                                                                     |               `false`               |
| variant                     | 选择框的变体                                                                     | `'outline' \| 'default'`                                                                      |             `'default'`             |
| clearable                   | 是否允许清空                                                                     | `boolean`                                                                                     |               `false`               |
| filterable                | 是否允许搜索                                                                     | `boolean \| { retainInputValue?: boolean }`                                                   | `false (single) \| true (multiple)` |
| creatable                   | 是否允许创建                                                                     | `boolean`                                                                                     |               `false`               |
| max-tag-count               | 多选模式下，最多显示的标签数量。0 表示不限制                                     | `number`                                                                                      |                 `0`                 |
| popup-container             | 弹出框的挂载容器                                                                 | `string \| HTMLElement`                                                                       |                 `-`                 |
| bordered                    | 是否显示输入框的边框                                                             | `boolean`                                                                                     |               `true`                |
| default-active-first-option | 是否在无值时默认选择第一个选项                                                   | `boolean`                                                                                     |               `true`                |
| popup-visible **(v-model)** | 是否显示下拉菜单                                                                 | `boolean`                                                                                     |                 `-`                 |
| default-popup-visible       | 弹出框默认是否可见（非受控模式）                                                 | `boolean`                                                                                     |               `false`               |
| unmount-on-close            | 是否在下拉菜单关闭时销毁元素                                                     | `boolean`                                                                                     |               `false`               |
| filter-option               | 是否过滤选项                                                                     | `boolean \| ((inputValue: string, option: SelectOptionData) => boolean)`                      |               `true`                |
| options                     | 选项数据                                                                         | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]`                               |                `[]`                 |
| virtual-list-props          | 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps) | `VirtualListProps`                                                                            |                 `-`                 |
| trigger-props               | 下拉菜单的触发器属性                                                             | `TriggerProps`                                                                                |                 `-`                 |
| format-label                | 格式化显示内容                                                                   | `(data: SelectOptionData) => string`                                                          |                 `-`                 |
| fallback-option             | 自定义值中不存在的选项                                                           | `boolean\| ((    value: string \| number \| Record<string, unknown>  ) => SelectOptionData)`  |               `true`                |
| show-extra-options          | 是否在下拉菜单中显示额外选项                                                     | `boolean`                                                                                     |               `true`                |
| value-key                   | 用于确定选项键值的属性名                                                         | `string`                                                                                      |              `'value'`              |
| search-delay                | 触发搜索事件的延迟时间                                                           | `number`                                                                                      |                `500`                |
| limit                       | 多选时最多的选择个数                                                             | `number`                                                                                      |                 `0`                 |
| field-names                 | 自定义 `SelectOptionData` 中的字段                                               | `SelectFieldNames`                                                                            |                 `-`                 |
| scrollbar                   | 是否开启虚拟滚动条                                                               | `boolean \| ScrollbarProps`                                                                   |               `true`                |
| show-header-on-empty        | 空状态时是否显示header                                                           | `boolean`                                                                                     |               `false`               |
| show-footer-on-empty        | 空状态时是否显示footer｜`boolean`                                                | `false`                                                                                       |

### Select Events

| 事件名                | 说明                       | 参数                                                                                            |
| --------------------- | -------------------------- | ----------------------------------------------------------------------------------------------- | --- |
| change                | 值发生改变时触发           | value: `string \| number \| Record<string, any> \| (string \| number \| Record<string, any>)[]` |     |
| input-value-change    | 输入框的值发生改变时触发   | inputValue: `string`                                                                            |     |
| popup-visible-change  | 下拉框的显示状态改变时触发 | visible: `boolean`                                                                              |     |
| clear                 | 点击清除按钮时触发         | -                                                                                               |     |
| remove                | 点击标签的删除按钮时触发   | removed: `string \| number \| Record<string, any> \| undefined`                                 |     |
| search                | 用户搜索时触发             | inputValue: `string`                                                                            |     |
| dropdown-scroll       | 下拉菜单发生滚动时触发     | -                                                                                               |     |
| dropdown-reach-bottom | 下拉菜单滚动到底部时触发   | -                                                                                               |     |
| exceed-limit          | 多选超出限制时触发         | value: `string \| number \| Record<string, any> \| undefined`<br>ev: `Event`                    |

### Select Slots

| 插槽名       |         描述         | 参数                     |
| ------------ | :------------------: | ------------------------ | --- |
| trigger      |    自定义触发元素    | -                        |
| prefix       |       前缀元素       | -                        |
| search-icon  |   选择框的搜索图标   | -                        |
| loading-icon |  选择框的加载中图标  | -                        |
| arrow-icon   |   选择框的箭头图标   | -                        |
| footer       |     下拉框的页脚     | -                        |     |
| header       |     下拉框的页头     | -                        |
| label        |   选择框的显示内容   | data: `SelectOptionData` |     |
| option       |       选项内容       | data: `SelectOptionData` |     |
| empty        | 选项为空时的显示内容 | -                        |     |

### `<option>` Props

| 参数名    | 描述                                            | 类型                     | 默认值  |
| --------- | ----------------------------------------------- | ------------------------ | :-----: | --- |
| value     | 选项值（如不填，会从内容中获取）                | `string\|number\|object` |   `-`   |     |
| label     | 选项标签（如不填，会从内容中获取）              | `string`                 |   `-`   |     |
| disabled  | 是否禁用                                        | `boolean`                | `false` |     |
| tag-props | 展示的标签属性                                  | `TagProps`               |   `-`   |
| extra     | 额外数据。废弃，可使用对象形式的 value 扩展数据 | `object`                 |   `-`   |
| index     | 用于手动指定选项的 index                        | `number`                 |   `-`   |

### `<optgroup>` Props

| 参数名 | 描述         | 类型     | 默认值 |
| ------ | ------------ | -------- | :----: |
| label  | 选项组的标题 | `string` |  `-`   |

### `<optgroup>` Slots

| 插槽名 |     描述     | 参数 | 版本 |
| ------ | :----------: | ---- | :--- |
| label  | 选项组的标题 | -    |

## 类型定义

```ts
/**
 * @zh 选项
 * @en Option
 */
type Option = string | number | SelectOptionData | SelectOptionGroup

/**
 * @zh 筛选
 * @en Filter
 */
type FilterOption = boolean | ((inputValue: string, option: SelectOptionData) => boolean)
```

### SelectOptionData

| 参数名   | 描述                     | 类型                                          | 默认值  |
| -------- | ------------------------ | --------------------------------------------- | :-----: |
| value    | 选项值                   | `string \| number \| Record<string, unknown>` |   `-`   |
| label    | 选项内容                 | `string`                                      |   `-`   |
| disabled | 是否禁用                 | `boolean`                                     | `false` |
| tagProps | 选项对应的多选标签的属性 | `any`                                         |   `-`   |
| render   | 自定义渲染               | `RenderFunction`                              |   `-`   |

### SelectOptionGroup

| 参数名  | 描述           | 类型             | 默认值 |
| ------- | -------------- | ---------------- | :----: |
| isGroup | 是否为选项组   | `true`           |  `-`   |
| label   | 选项组标题     | `string`         |  `-`   |
| options | 选项组中的选项 | `SelectOption[]` |  `-`   |

### VirtualListProps

| 参数名             | 描述                                                               | 类型               | 默认值  |
| ------------------ | ------------------------------------------------------------------ | ------------------ | :-----: | --- |
| height             | 可视区域高度                                                       | `number \| string` |   `-`   |     |
| threshold          | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。 | `number`           |   `-`   |     |
| isStaticItemHeight | （已废除）元素高度是否是固定的。废除，请使用 `fixedSize`           | `boolean`          | `false` |     |
| fixedSize          | 元素高度是否是固定的。                                             | `boolean`          | `false` |
| estimatedSize      | 元素高度不固定时的预估高度。                                       | `number`           |   `-`   |
| buffer             | 视口边界外提前挂载的元素数量。                                     | `number`           |  `10`   |

---
permalink: /components/cascader/
---

# Cascader

指在选择器选项数量较多时，采用多级分类的方式将选项进行分隔。

## 案例

### 基本使用

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 尺寸

四种尺寸大小：xs，sm，md，lg

<demo src="./__demos__/size.vue"></demo>

### 允许清除

设置属性 `clearable` 允许清除输入框的内容。

<demo src="./__demos__/clearable.vue"></demo>

### 禁用选项

设置属性 `disabled` 禁用选项。

<demo src="./__demos__/disabled.vue"></demo>

### 多选模式

设置属性`multiple` 开启多选模式。

<demo src="./__demos__/multiple.vue"></demo>

### 严格选择模式

设置属性 `check-strictly`，开启严格选择模式，点击任何结点都可以选择。多选时将会解除父子节点的关联。

<demo src="./__demos__/check-strictly.vue"></demo>

### 自定义输入框的展示值

利用 formatLabel 对显示的内容进行自定义处理。

<demo src="./__demos__/format-label.vue"></demo>

### 加载中

选择框和下拉菜单显示加载状态

<demo src="./__demos__/loading.vue"></demo>

### 子选项懒加载

通过 load-more 属性可以开启数据懒加载功能。
开启数据懒加载功能后，需要在叶子节点标注 isLeaf: true，没有标注且没有 children 属性的节点会认为需要懒加载处理。
load-more 属性有提供 done 函数进行回调，可以在回调中传入懒加载的子数据。如果 done 函数没有传入数据会认为懒加载失败，此节点可以再次触发懒加载。

<demo src="./__demos__/load-more.vue"></demo>

### 允许搜索

通过设置 filterable 让输入框支持搜索功能。

<demo src="./__demos__/filterable.vue"></demo>

### 路径模式

modelValue 使用路径作为值。

<demo src="./__demos__/path-mode.vue"></demo>

## API

### `<Cascader>` Props

| 参数名                      | 描述                                         | 类型                                                                                                                                                               |               默认值                |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------: |
| path-mode                   | 绑定值是否为路径                             | `boolean`                                                                                                                                                          |               `false`               |
| multiple                    | 是否为多选状态（多选模式默认开启搜索）       | `boolean`                                                                                                                                                          |               `false`               |
| model-value **(v-model)**   | 绑定值                                       | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` |                 `-`                 |
| default-value               | 默认值（非受控状态）                         | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` |       `'' \| undefined \| []`       |
| options                     | 级联选择器的选项                             | `CascaderOption[]`                                                                                                                                                 |                `[]`                 |
| disabled                    | 是否禁用                                     | `boolean`                                                                                                                                                          |               `false`               |
| error                       | 是否为错误状态                               | `boolean`                                                                                                                                                          |               `false`               |
| size                        | 选择框的大小                                 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                                                             |               `'md'`                |
| filterable                | 是否允许搜索                                 | `boolean`                                                                                                                                                          | `false (single) \| true (multiple)` |
| clearable                   | 是否允许清除                                 | `boolean`                                                                                                                                                          |               `false`               |
| input-value **(v-model)**   | 输入框的值                                   | `string`                                                                                                                                                           |                 `-`                 |
| default-input-value         | 输入框的默认值（非受控状态）                 | `string`                                                                                                                                                           |                `''`                 |
| open **(v-model)** | 是否显示下拉框                               | `boolean`                                                                                                                                                          |                 `-`                 |
| expand-trigger              | 展开下一级的触发方式                         | `'click' \| 'hover'`                                                                                                                                               |              `'click'`              |
| default-open       | 是否默认显示下拉框（非受控状态）             | `boolean`                                                                                                                                                          |               `false`               |
| placeholder                 | 占位符                                       | `string`                                                                                                                                                           |                 `-`                 |
| filter-option               | 自定义选项过滤方法                           | `(inputValue: string, option: CascaderOption) => boolean`                                                                                                          |                 `-`                 |
| popup-container             | 弹出框的挂载容器                             | `string \| HTMLElement \| false`                                                                                                                       |                 `-`                 |
| max-tag-count               | 多选模式下，最多显示的标签数量。0 表示不限制 | `number`                                                                                                                                                           |                 `0`                 |
| format-label                | 格式化展示内容                               | `(options: CascaderOption[]) => string`                                                                                                                            |                 `-`                 |
| trigger-props               | 下拉菜单的触发器属性                         | `TriggerProps`                                                                                                                                                     |                 `-`                 |
| check-strictly              | 是否开启严格选择模式                         | `boolean`                                                                                                                                                          |               `false`               |
| load-more                   | 数据懒加载函数，传入时开启懒加载功能         | `(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`                                                                                 |                 `-`                 |
| loading                     | 是否为加载中状态                             | `boolean`                                                                                                                                                          |               `false`               |
| search-option-only-label    | 搜索下拉菜单中的选项是否仅展示标签           | `boolean`                                                                                                                                                          |               `false`               |
| search-delay                | 触发搜索事件的延迟时间                       | `number`                                                                                                                                                           |                `500`                |
| field-names                 | 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性 | `CascaderFieldNames`                                                                                                                                               |                 `-`                 |
| fallback                    | 自定义不存在选项的值的展示                   | `boolean\| ((    value:      \| string      \| number      \| Record<string, unknown>      \| (string \| number \| Record<string, unknown>)[]  ) => string)`       |               `true`                |
| expand-child                | 是否展开子菜单                               | `boolean`                                                                                                                                                          |               `false`               |
| virtual-list-props          | 传递虚拟列表属性，传入此参数以开启虚拟滚动   | `VirtualListProps`                                                                                                                                                 |                `'-'`                |

### `<Cascader>` Events

| 事件名               | 描述                       | 参数                                                                                   |
| -------------------- | -------------------------- | -------------------------------------------------------------------------------------- |
| change               | 选中值改变时触发           | value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined` |
| input-value-change   | 输入值改变时触发           | value: `string`                                                                        |
| clear                | 点击清除按钮时触发         | -                                                                                      |
| search               | 用户搜索时触发             | value: `string`                                                                        |
| open-change | 下拉框的显示状态改变时触发 | open: `boolean`                                                                     |
| focus                | 获得焦点时触发             | ev: `FocusEvent`                                                                       |
| blur                 | 失去焦点时触发             | ev: `FocusEvent`                                                                       |

### `<Cascader>` Slots

| 插槽名       |         描述         | 参数                   |
| ------------ | :------------------: | ---------------------- |
| label        |   选择框的显示内容   | data: `CascaderOption` |
| prefix       |       前缀元素       | -                      |
| arrow-icon   |   选择框的箭头图标   | -                      |
| loading-icon |  选择框的加载中图标  | -                      |
| search-icon  |   选择框的搜索图标   | -                      |
| empty        | 选项为空时的显示内容 | -                      |
| option       |       选项内容       | data: `CascaderOption` |

### `<CascaderPanel>` Props

| 参数名                    | 描述                                   | 类型                                                                                                                                                               |         默认值          |
| ------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: |
| path-mode                 | 绑定值是否为路径                       | `boolean`                                                                                                                                                          |         `false`         |
| multiple                  | 是否为多选状态（多选模式默认开启搜索） | `boolean`                                                                                                                                                          |         `false`         |
| model-value **(v-model)** | 绑定值                                 | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` |           `-`           |
| default-value             | 默认值（非受控状态）                   | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` | `'' \| undefined \| []` |
| options                   | 级联选择器的选项                       | `CascaderOption[]`                                                                                                                                                 |          `[]`           |
| expand-trigger            | 展开下一级的触发方式                   | `string`                                                                                                                                                           |        `'click'`        |
| check-strictly            | 是否开启严格选择模式                   | `boolean`                                                                                                                                                          |         `false`         |
| load-more                 | 数据懒加载函数，传入时开启懒加载功能   | `(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`                                                                                 |           `-`           |
| field-names               | 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性 | `CascaderFieldNames`                                                                                                                                               |           `-`           |
| expand-child              | 是否展开子菜单                         | `boolean`                                                                                                                                                          |         `false`         |

### `<CascaderPanel>` Events

| 事件名 | 描述             | 参数                                                                                   |
| ------ | ---------------- | -------------------------------------------------------------------------------------- |
| change | 选中值改变时触发 | value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined` |

### `<CascaderPanel>` Slots

| 插槽名 |         描述         | 参数 |
| ------ | :------------------: | ---- |
| empty  | 选项为空时的显示内容 | -    |

### CascaderOption

| 参数名   | 描述           | 类型                                      | 默认值  |
| -------- | -------------- | ----------------------------------------- | :-----: |
| value    | 选项值         | `string \| number \| Record<string, any>` |   `-`   |
| label    | 选项文本       | `string`                                  |   `-`   |
| render   | 自定义渲染     | `RenderFunction`                          |   `-`   |
| disabled | 是否禁用       | `boolean`                                 | `false` |
| tagProps | 展示的标签属性 | `TagProps`                                |   `-`   |
| children | 下一级选项     | `CascaderOption[]`                        |   `-`   |
| isLeaf   | 是否是叶子节点 | `boolean`                                 | `false` |

## 类型定义

组件导出以下类型定义

```ts
import type { CascaderProps } from '@cedarjs/ui'
```

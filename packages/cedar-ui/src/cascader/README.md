---
permalink: /components/cascader/
---

# Cascader

多选时，`inline` 下拉只显示选项；已选内容、单项移除和清空由输入框承担。确认式编辑面板保留“已选／清空”，选择为草稿，确认后提交。

指在选择器选项数量较多时，采用多级分类的方式将选项进行分隔。

## 阅读方向

继承来源 dir；子列沿阅读方向展开，展开图标及列分隔线随方向变化。左右键按可见方向进入已加载子级或返回父级，并跳过禁用子项；上下键保持逻辑顺序。搜索状态保留原生左右光标编辑，不反转路径或多选数组。关闭状态清空最后值后，重开从根级恢复导航。

## 基础示例

### 基本使用

逐级选择地区，选择叶子节点后收起并回填完整路径。下方显示当前绑定值；禁用状态放在独立案例中。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观配置对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用                                                   | 相关示例                       |
| ------------- | ------------------------------------------------------ | ------------------------------ |
| `options`     | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支 | 外观配置对比、表单控件尺寸对照 |
| `clearable`   | 允许清除，保留禁用的已选项                             | 外观配置对比、表单控件尺寸对照 |
| `size`        | 完整支持 xs、sm、md、lg、xl，未设置时继承分组与表单    | 表单控件尺寸对照               |
| `variant`     | filled、outline、standard；未设置时继承 InputGroup     | 表单控件尺寸对照               |
| `placeholder` | 占位文本                                               | 表单控件尺寸对照               |
| `multiple`    | 多选；默认启用搜索                                     | 表单控件尺寸对照               |

<!-- demo-config-notes:end -->

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 尺寸

完整支持 xs、sm、md、lg、xl 五档尺寸

#### 外观组合

适用于地区等层级选项。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

### 表单控件尺寸对照

切换 size 和字段变体，对比有值、可清空、多选不换行的 Cascader、Select、Input 与 Button。长标签文字省略，删除图标保留，标签行可横向滚动；清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

## 选择模式与路径

### 多选模式

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置             | 作用                                                   | 相关示例                         |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| `options`        | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支 | 多选模式、严格选择模式、路径模式 |
| `placeholder`    | 占位文本                                               | 多选模式、严格选择模式、路径模式 |
| `multiple`       | 多选；默认启用搜索                                     | 多选模式、严格选择模式           |
| `default-value`  | 默认值（非受控状态）                                   | 严格选择模式、路径模式           |
| `expand-trigger` | Menu / List 的展开交互：click 或 hover                 | 严格选择模式、路径模式           |
| `check-strictly` | 允许选中父节点；多选不关联父子节点                     | 严格选择模式                     |

<!-- demo-config-notes:end -->

设置属性`multiple` 开启多选模式。

<demo src="./__demos__/multiple.vue"></demo>

### 严格选择模式

设置属性 `check-strictly`，开启严格选择模式，点击任何结点都可以选择。多选时将会解除父子节点的关联。

<demo src="./__demos__/check-strictly.vue"></demo>

### 路径模式

modelValue 使用路径作为值。

<demo src="./__demos__/path-mode.vue"></demo>

### 管理已选项

确认式多选编辑面板顶部提供已选数量与清空。Cedar 在列表上方显示可删除标签；Maple 点击数量查看已选明细，支持逐项移除并返回可选项。popup/popover 与 dialog 共用该内容。移除和清空先修改草稿，关闭取消会恢复原值，确认后才提交；禁用项保留，异步确认期间禁用操作。面板的清空入口独立于字段清空图标。

### 允许清除

设置属性 `clearable` 允许清除输入框的内容。

<demo src="./__demos__/clearable.vue"></demo>

## 搜索与展示

### 允许搜索

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置             | 作用                                                   | 相关示例                                     |
| ---------------- | ------------------------------------------------------ | -------------------------------------------- |
| `options`        | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支 | 允许搜索、搜索匹配规则、自定义输入框的展示值 |
| `placeholder`    | 占位文本                                               | 允许搜索、搜索匹配规则、自定义输入框的展示值 |
| `filterable`     | 开启搜索                                               | 允许搜索、搜索匹配规则                       |
| `case-sensitive` | 内置本地过滤是否区分大小写，自定义过滤函数优先         | 搜索匹配规则                                 |
| `format-label`   | 格式化已选标签；VNode 使用 label 插槽                  | 自定义输入框的展示值                         |

<!-- demo-config-notes:end -->

通过设置 filterable 让输入框支持搜索功能。

<demo src="./__demos__/filterable.vue"></demo>

### 搜索匹配规则

`case-sensitive` 默认 false，只控制内置本地匹配是否区分大小写；自定义过滤函数优先。保留原有路径标签和 checkStrictly 行为；远程结果不需本地筛选时可使用 `:filter-option="() => true"`，该属性仍是原有函数协议。

<demo src="./__demos__/case-sensitive.vue"></demo>

### 自定义输入框的展示值

利用 formatLabel 对显示的内容进行自定义处理。

<demo src="./__demos__/format-label.vue"></demo>

## 交互与控制

### 交互状态对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置        | 作用                                                   | 相关示例     |
| ----------- | ------------------------------------------------------ | ------------ |
| `options`   | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支 | 交互状态对比 |
| `clearable` | 允许清除，保留禁用的已选项                             | 交互状态对比 |
| `disabled`  | 是否禁用                                               | 交互状态对比 |

<!-- demo-config-notes:end -->

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 禁用选项

设置属性 `disabled` 禁用选项。

#### 交互状态切换

适用于地区等层级选项。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

## 配置与组合

### 透传配置边界与优先级

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                  | 作用                                                                                   | 相关示例                         |
| --------------------- | -------------------------------------------------------------------------------------- | -------------------------------- |
| `edit-mode`           | 展示方式                                                                               | 透传配置边界与优先级、复制与编辑 |
| `options`             | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支                                 | 透传配置边界与优先级、复制与编辑 |
| `trigger-props`       | Menu 的 Trigger 属性；展开状态由字段控制                                               | 透传配置边界与优先级             |
| `open-trigger-target` | 打开面板的点击区域；field 为整个字段，icon 仅右侧选择按钮。不影响键盘展开及受控 open。 | 复制与编辑                       |
| `filterable`          | 开启搜索                                                                               | 复制与编辑                       |

<!-- demo-config-notes:end -->

建议使用 `CascaderTriggerOptions` 声明 trigger-props。open/defaultOpen、disabled 和展开更新归 Cascader 管理。popup-container 顶层明确传入时优先（包括 false），否则回退 triggerProps.popupContainer。Trigger 的普通配置保留原顺序，嵌套 unmountOnClose 仍可覆盖顶层 unmount-on-close；默认的定位/交互配置也仍可被有效嵌套字段覆盖。内部展开监听继续执行，通知使用 Cascader 事件。

本次仅新增可主动选用的专用类型，不收窄已发布的宽属性类型，不增加运行时过滤、不改变覆盖顺序；旧业务写法继续可编译。若直接使用旧宽属性，内部托管字段仍可能通过类型检查，但不代表能控制内部状态。

```ts
import type { CascaderTriggerOptions } from "@cedar-design/ui";
```

<demo src="./__demos__/passthrough-options.vue"></demo>

### 复制与编辑

open-trigger-target="icon" 时，输入区可以编辑或复制，只有右侧选择按钮响应点击打开。关闭手输或搜索后，已有文本仍可复制。

<demo src="./__demos__/open-trigger-target.vue"></demo>

## 异步加载与回显

### 加载中

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用                                                                  | 相关示例                                 |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| `options`     | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支                | 加载中、子选项懒加载、异步设备与 ID 回显 |
| `placeholder` | 占位文本                                                              | 加载中、子选项懒加载、异步设备与 ID 回显 |
| `loading`     | 加载状态；禁止选择和确认                                              | 加载中、异步设备与 ID 回显               |
| `load-more`   | 异步加载子节点；完成后调用 done(children)，失败调用 done() 以允许重试 | 子选项懒加载                             |
| `path-mode`   | true 返回完整路径；false 返回选中节点的值                             | 异步设备与 ID 回显                       |
| `filterable`  | 开启搜索                                                              | 异步设备与 ID 回显                       |

<!-- demo-config-notes:end -->

选择框和下拉菜单显示加载状态

<demo src="./__demos__/loading.vue"></demo>

### 子选项懒加载

通过 load-more 属性可以开启数据懒加载功能。
开启数据懒加载功能后，需要在叶子节点标注 isLeaf: true，没有标注且没有 children 属性的节点会认为需要懒加载处理。
load-more 属性有提供 done 函数进行回调，可以在回调中传入懒加载的子数据。如果 done 函数没有传入数据会认为懒加载失败，此节点可以再次触发懒加载。

<demo src="./__demos__/load-more.vue"></demo>

### 异步设备与 ID 回显

<demo src="./__demos__/async-devices.vue"></demo>

单选已选项在右侧显示内置主色对勾。多选使用 Checkbox：可选后代全部未选为未选，部分选中为半选，全部可选叶子选中为全选；禁用叶子不参与全选计算。checkStrictly 开启时父子独立选择，不汇总半选。确认式编辑面板中的选择先作为草稿，确认后才提交。

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

### Cascader 属性

分别使用 `v-model`、`v-model:open` 和 `v-model:input-value` 控制选中值、展开状态和搜索词。单选清空为 `''`，多选为 `[]`；Select 存在真实空字符串选项时，清空值为 `undefined`。

| 属性                                    | 说明                                                                                       | 类型                                                          | 默认值                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------ |
| `open-trigger-target`                   | 打开面板的点击区域；field 为整个字段，icon 仅右侧选择按钮。不影响键盘展开及受控 open。     | `'field' \| 'icon'`                                           | `'field'`                |
| `model-value / default-value`           | 受控值 / 非受控初始值                                                                      | `Value`                                                       | `单选 ''，多选 []`       |
| `open / default-open`                   | 受控展开 / 默认展开                                                                        | `boolean`                                                     | `undefined / false`      |
| `input-value / default-input-value`     | 搜索文本，独立于选中值                                                                     | `string`                                                      | `undefined / ''`         |
| `multiple`                              | 多选；默认启用搜索                                                                         | `boolean`                                                     | `false`                  |
| `size`                                  | 完整支持 xs、sm、md、lg、xl，未设置时继承分组与表单                                        | `ComponentSize`                                               | `md`                     |
| `variant`                               | filled、outline、standard；未设置时继承 InputGroup                                         | `FormControlVariant`                                          | `filled`                 |
| `disabled / readonly / error`           | 未设置时继承表单；显式 false 可覆盖                                                        | `boolean`                                                     | `undefined`              |
| `placeholder`                           | 占位文本                                                                                   | `string`                                                      | `—`                      |
| `hint / line`                           | 浮动提示 / standard 变体下划线                                                             | `boolean`                                                     | `true`                   |
| `text-color / focus-color / blur-color` | 字段颜色                                                                                   | `string`                                                      | `—`                      |
| `loading`                               | 加载状态；禁止选择和确认                                                                   | `boolean`                                                     | `false`                  |
| `show-tags`                             | 多选值以标签展示；false 改用分隔文本                                                       | `boolean`                                                     | `true`                   |
| `separator`                             | show-tags=false 时的多选分隔符                                                             | `string`                                                      | `,`                      |
| `text-align`                            | 文字对齐 left / center / right；未设置时继承 FormItem 的 content-align，独立使用默认阅读起点 start  | `'left' \| 'center' \| 'right'`                               | `-`                      |
| `max-tag-count`                         | 标签数量上限，0 不限制                                                                     | `number`                                                      | `0`                      |
| `tag-nowrap`                            | 标签单行显示；长文字省略、删除图标保留，标签行可横向滚动；悬停、聚焦或点按省略正文查看全文 | `boolean`                                                     | `false`                  |
| `popup-container`                       | 选择器、元素、返回元素的函数或 false（原地渲染）                                           | `PopupContainer`                                              | `—`                      |
| `trigger-props`                         | Menu 的 Trigger 属性；展开状态由字段控制                                                   | `TriggerProps`                                                | `—`                      |
| `virtual-list-props`                    | Menu / List 的虚拟列表参数                                                                 | `VirtualListProps`                                            | `—`                      |
| `search-delay`                          | search 事件防抖时长（毫秒）                                                                | `number`                                                      | `500`                    |
| `format-label`                          | 格式化已选标签；VNode 使用 label 插槽                                                      | `function`                                                    | `—`                      |
| `clearable`                             | 允许清除，保留禁用的已选项                                                                 | `boolean`                                                     | `false`                  |
| `options`                               | 树形选项；叶值模式要求叶值唯一，路径模式可区分不同分支                                     | `CascaderOption[]` / `(query, { signal }) => Array / Promise` | `undefined`              |
| `field-names`                           | value、label、disabled、children、isLeaf、tagProps、render 的字段映射                      | `CascaderFieldNames`                                          | `—`                      |
| `path-mode`                             | true 返回完整路径；false 返回选中节点的值                                                  | `boolean`                                                     | `false`                  |
| `check-strictly`                        | 允许选中父节点；多选不关联父子节点                                                         | `boolean`                                                     | `false`                  |
| `filterable`                            | 开启搜索                                                                                   | `boolean`                                                     | `单选 false / 多选 true` |
| case-sensitive                          | 内置本地过滤是否区分大小写，自定义过滤函数优先                                             | boolean                                                       | false                    |
| `filter-option`                         | 接收搜索词和原始节点                                                                       | `(input, option) => boolean`                                  | `—`                      |
| `expand-trigger`                        | Menu / List 的展开交互：click 或 hover                                                     | `string`                                                      | `click`                  |
| `expand-child`                          | 展开到首个子节点                                                                           | `boolean`                                                     | `false`                  |
| `load-more`                             | 异步加载子节点；完成后调用 done(children)，失败调用 done() 以允许重试                      | `(option, done) => void`                                      | `—`                      |
| `fallback-option`                       | 尚未加载的值如何反显                                                                       | `boolean 或 (value) => string`                                | `true`                   |
| `search-option-only-label`              | 搜索结果仅显示节点标签，不显示路径                                                         | `boolean`                                                     | `false`                  |
| `auto-fit-popup-width`                  | Menu 是否与字段等宽                                                                        | `boolean`                                                     | `false`                  |
| `edit-mode`                             | 展示方式                                                                                   | `menu`                                                        | `menu`                   |

### 事件与方法

- `update:modelValue`、`change(value)`：提交时触发，编辑草稿不触发。
- `update:open`、`open-change(open)`：请求改变展开状态。
- `update:inputValue`、`input-value-change(text)`、`search(text)`：搜索状态。
- `focus(event)`、`blur(event)`、`clear(event)`：原生字段事件；只有字段所有者通知 Form。
- 方法：`focus()`、`blur()`。

### 插槽与选项数据

使用 `label({ data })` 自定义已选标签，`selected` 替换整个已选区域。还支持 `prefix`、`suffix`、`clear-icon({ clear })`、`arrow-icon`、`loading-icon`、`search-icon`、`empty`、`option({ data })`。

选项 `label` 是用于搜索的纯文本；自定义选项内容使用 `render` 或 `option` 插槽，自定义反显使用 `format-label` 或 `label` 插槽。以 value 而非 label 识别选项。选项的 `disabled` 禁止选择和删除，`tagProps` 可定制已选标签。

### `<CascaderPanel>` Props

| 参数名                    | 描述                                                                              | 类型                                                                                                                                                               |         默认值          |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: |
| path-mode                 | 绑定值是否为路径                                                                  | `boolean`                                                                                                                                                          |         `false`         |
| multiple                  | 是否为多选状态（多选模式默认开启搜索）                                            | `boolean`                                                                                                                                                          |         `false`         |
| model-value **(v-model)** | 绑定值                                                                            | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` |           `-`           |
| default-value             | 默认值（非受控状态）                                                              | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` | `'' \| undefined \| []` |
| options                   | 级联选择器的选项                                                                  | `CascaderOption[]` / `(query, { signal }) => Array / Promise`                                                                                                      |       `undefined`       |
| expand-trigger            | 展开下一级的触发方式                                                              | `string`                                                                                                                                                           |        `'click'`        |
| check-strictly            | 是否开启严格选择模式                                                              | `boolean`                                                                                                                                                          |         `false`         |
| load-more                 | 数据懒加载函数，传入时开启懒加载功能                                              | `(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`                                                                                 |           `-`           |
| field-names               | 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性 | `CascaderFieldNames`                                                                                                                                               |           `-`           |
| expand-child              | 是否展开子菜单                                                                    | `boolean`                                                                                                                                                          |         `false`         |

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
import type { CascaderProps } from "@cedar-design/ui";
```

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

字段编辑统一使用 edit-mode：Cedar 支持 direct/click/dblclick，Maple 支持 direct/popup；不保留 menu/list/picker 这些旧编辑枚举。弹层复用原选项索引、搜索、异步加载与虚拟列表算法。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### 单选对勾样式变量

| 变量                            | 默认值                              |
| ------------------------------- | ----------------------------------- |
| `--c-cascader-item-check-color` | `var(--c-sys-color-action-primary)` |
| `--c-cascader-item-check-size`  | `var(--c-sys-font-size-md)`         |

### 内置搜索字段配置

`searchFields` / `search-fields` 是只读 `('label' | 'value')[]`，默认 `['label']`；多字段为 OR 匹配，大小写默认不敏感。配置 `['value', 'label']` 可同时搜索编码和名称，fieldNames 将语义字段映射到业务字段；空数组对非空查询不匹配任何项。value 采用字符串比较，不做对象深层搜索，对象值或拼音等复杂规则仍用自定义回调。自定义回调优先并自行决定大小写；远程结果使用原有关闭本地过滤协议。Cascader 保留路径语义，会检查路径各节点的配置字段。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

候选属性 `options` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

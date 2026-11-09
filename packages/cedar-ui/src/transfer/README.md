---
permalink: /components/transfer/
---

# Transfer

两栏布局的多选组件。勾选左侧选项后会即时加入右侧，右侧选项可以直接移除。

`disabled` 和 `readonly` 缺省时继承 FormItem / Form；显式 false 可覆盖对应状态。两种状态都阻止迁移、排序、重命名和自定义标题的清空操作。只读时异步选项仍可加载供查看。目标列表从空变为非空后，启用的拖拽排序会随列表创建。

列表项使用各自的复选框或操作按钮，不额外增加无操作的列表行焦点。图标清空和目标操作菜单使用带本地化名称的原生按钮。

在 FormItem 中，表单错误描述关联到穿梭框组，不会重复附加到每个内部选项；调用方传入的 `role` 和 `aria-describedby` 会保留。

目标值不在当前 data 中时，右侧仍显示目标项的 label；未提供 label 时显示 value。数据更新本身不会改变模型。缺失项无法从当前 data 推断 disabled 或 required；需要这些限制时，应确保相应选项仍在 data 中。

## 基础示例

### 基础用法

数据穿梭框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 搜索与数据结构

### 搜索

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                        | 作用                       | 相关示例                     |
| --------------------------- | -------------------------- | ---------------------------- |
| `data`                      | 穿梭框的数据               | 搜索、分组与拖拽、树型穿梭框 |
| `source-filterable`         | 是否显示源列表搜索框       | 搜索、分组与拖拽             |
| `default-value`             | 非受控状态下的右侧完整状态 | 搜索、树型穿梭框             |
| `source-filter-placeholder` | 源列表搜索框占位文本       | 搜索、分组与拖拽             |
| `target-filterable`         | 是否显示目标列表搜索框     | 搜索                         |
| `target-filter-placeholder` | 目标列表搜索框占位文本     | 搜索                         |

<!-- demo-config-notes:end -->

通过 `source-filterable`、`target-filterable` 分别开启两侧搜索，通过 `filter` 自定义过滤逻辑；也可使用 `show-search` 同时开启两侧搜索。

目标列表筛选后拖拽，只调整可见项在完整目标序列中的位置；隐藏的必选项、暂不在候选数据中的已选项及其自定义元数据都会保留。

<demo src="./__demos__/search.vue"></demo>

### 分组与拖拽

选项通过 `group` 分组、`tip` 展示说明。设置 `target-draggable` 后可以拖拽调整右侧顺序；设置
`target-operation="menu"` 后，右侧菜单支持重命名、左右冻结、取消冻结和删除，并可通过
`target-actions` 追加自定义弹窗操作。默认的 `remove` 模式仍显示删除图标。

<demo src="./__demos__/grouped.vue"></demo>

右侧状态由一个有序对象数组完整表达：

```ts
const value = ref([
  { value: "id", label: "编号", fixed: "left" },
  { value: "name", label: "名称" },
]);
```

### 树型穿梭框

通过穿梭框自定义接口可以实现树型穿梭框。

<demo src="./__demos__/tree.vue"></demo>

## 内容定制

### 自定义选项渲染

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                       | 相关示例                     |
| --------------- | -------------------------- | ---------------------------- |
| `data`          | 穿梭框的数据               | 自定义选项渲染、自定义标题栏 |
| `default-value` | 非受控状态下的右侧完整状态 | 自定义选项渲染、自定义标题栏 |

<!-- demo-config-notes:end -->

通过 `item` 插槽自定义选项的渲染内容。

<demo src="./__demos__/custom.vue"></demo>

### 自定义标题栏

通过 `source-title` ,`target-title` 插槽自定义标题栏的渲染内容

<demo src="./__demos__/custom-header.vue"></demo>

## 大数据

### 大数据

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                        | 作用                 | 相关示例 |
| --------------------------- | -------------------- | -------- |
| `data`                      | 穿梭框的数据         | 大数据   |
| `virtual-scroll`            | 是否启用虚拟滚动     | 大数据   |
| `source-filterable`         | 是否显示源列表搜索框 | 大数据   |
| `source-filter-placeholder` | 源列表搜索框占位文本 | 大数据   |

<!-- demo-config-notes:end -->

通过 `virtual-scroll` 开启虚拟滚动，可流畅处理大量选项。

<demo src="./__demos__/large-data.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Transfer Props

| 参数名                    | 描述                             | 类型                                                        |         默认值         |
| ------------------------- | -------------------------------- | ----------------------------------------------------------- | :--------------------: |
| data                      | 穿梭框的数据                     | `TransferItem[]` / `(query, { signal }) => Array / Promise` |      `undefined`       |
| model-value **(v-model)** | 右侧有序完整状态                 | `TransferTargetItem[] \| null`                                      |          `-`           |
| default-value             | 非受控状态下的右侧完整状态       | `TransferTargetItem[]`                                      |          `[]`          |
| disabled                  | 是否禁用；缺省继承表单           | `boolean`                                                   |      `undefined`       |
| readonly                  | 是否只读；缺省继承表单           | `boolean`                                                   |      `undefined`       |
| virtual-scroll            | 是否启用虚拟滚动                 | `boolean`                                                   |        `false`         |
| target-draggable          | 是否允许拖拽调整右侧顺序         | `boolean`                                                   |        `false`         |
| target-operation          | 右侧操作显示为删除图标或操作菜单 | `'remove' \| 'menu'`                                        |       `'remove'`       |
| clear-text                | 右侧清空按钮文本                 | `string`                                                    |         `清空`         |
| target-actions            | 追加到右侧菜单的自定义操作       | `TransferTargetAction[]`                                    |          `[]`          |
| source-filterable         | 是否显示源列表搜索框             | `boolean`                                                   |        `false`         |
| target-filterable         | 是否显示目标列表搜索框           | `boolean`                                                   |        `false`         |
| show-search               | 是否同时显示两侧搜索框           | `boolean`                                                   |        `false`         |
| filter                    | 自定义过滤函数                   | `TransferFilter`                                            |   标签忽略大小写匹配   |
| source-filter-placeholder | 源列表搜索框占位文本             | `string`                                                    |          `-`           |
| target-filter-placeholder | 目标列表搜索框占位文本           | `string`                                                    |          `-`           |
| show-selected             | 是否在源列表保留已选项           | `boolean`                                                   |         `true`         |
| source-title              | 源列表标题                       | `string`                                                    |          `-`           |
| target-title              | 目标列表标题                     | `string`                                                    |          `-`           |
| show-select-all           | 是否展示全选勾选框               | `boolean`                                                   |         `true`         |
| title                     | 源列表和目标列表标题             | `string[]`                                                  | `['全选', '已选']` |
| source-search-props       | Cedar Search 的源搜索框配置      | `object`                                                    |          `-`           |
| target-search-props       | Cedar Search 的目标搜索框配置    | `object`                                                    |          `-`           |

### Transfer Events

| 事件名        | 描述                 | 参数                                          |
| ------------- | -------------------- | --------------------------------------------- |
| load-error | 异步选项加载失败 | error: `unknown` |
| update:modelValue | 更新右侧状态 | value: `TransferTargetItem[]` |
| change        | 右侧状态改变时触发   | value: `TransferTargetItem[]`                 |
| search        | 用户搜索时触发       | value: `string`<br>type: `'target'\|'source'` |
| rename        | 重命名确认时触发     | value: `TransferValue`, label: `string`       |
| target-action | 点击自定义操作时触发 | key: `string`, item: `TransferItem`           |

### Transfer Slots

| 插槽名         |       描述       | 参数                                                                                                                                                                                                  | 版本   |
| -------------- | :--------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| source         |      源面板      | data: `TransferItem[]`<br>selectedKeys: `TransferValue[]`<br>onSelect: `(value: TransferValue[]) => void`                                                                                                           | 2.39.0 |
| source-title   |    源标题插槽    | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| target         |     目标面板     | data: `TransferItem[]`<br>selectedKeys: `TransferValue[]`<br>onSelect: `(value: TransferValue[]) => void`                                                                                                           | 2.39.0 |
| target-title   |   目标标题插槽   | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| read | 自定义纯阅读内容 | `{ value, text }` | |
| item           |       选项       | value: `TransferValue`<br>label: `string`<br>item: `TransferItem`                                                                                                                                     |        |

### TransferItem Props

| 参数名   | 描述                         | 类型                           | 默认值  |
| -------- | ---------------------------- | ------------------------------ | :-----: |
| value    | 选项的值                     | `string \| number`             |   `-`   |
| label    | 选项的标签                   | `string`                       |   `-`   |
| disabled | 是否禁用                     | `boolean`                      | `false` |
| group    | 源列表分组标题               | `string`                       |   `-`   |
| tip      | 选项提示内容                 | `string \| (() => VNodeChild)` |   `-`   |
| required | 是否为必选项，必选项不可删除 | `boolean`                      | `false` |

## Types

组件导出以下类型定义

```ts
import type {
  TransferFilter,
  TransferFixed,
  TransferInstance,
  TransferItem,
  TransferTargetAction,
  TransferTargetItem,
  TransferTargetOperation,
  TransferValue,
} from "@cedar-design/ui";
```

### 编辑与确认

通过 `edit-mode` 配置编辑方式；未指定时依次继承 FormItem、Form，默认 `direct`。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

候选属性 `data` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

## 阅读方向与键盘交互

Transfer 通过候选列表复选框直接维护已选值。候选区位于阅读起点、已选区位于阅读结束侧；RTL 下候选在右、已选在左。标题、搜索、清空与操作按钮间距和拼接圆角随方向调整。

切换方向不会修改 `modelValue`、已选项顺序、搜索条件或冻结状态。列表内上下拖动的顺序语义保持不变。移除按钮可使用键盘操作，必选项和禁用项不会被移除。冻结的 `left/right` 值保持现有业务分组含义，不随阅读方向交换。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-transfer-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-transfer-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-transfer-border-width` | `var(--c-border-width-1)` | `border`, `margin-inline-start` |
| `--c-transfer-checkbox-padding-left` | `var(--c-spacing-3)` | `padding-inline-start` |
| `--c-transfer-clear-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-transfer-draggable-list-padding-y` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-footer-height` | `var(--c-size-10)` | `height` |
| `--c-transfer-footer-padding-horizontal` | `var(--c-spacing-4)` | `inset-inline-end`, `padding` |
| `--c-transfer-group-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-transfer-group-title-height` | `var(--c-size-9)` | `height` |
| `--c-transfer-group-title-line-height` | `var(--c-size-7)` | `line-height` |
| `--c-transfer-group-title-padding-top` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-header-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-transfer-header-count-margin-right` | `var(--c-spacing-1)` | `margin-inline-end` |
| `--c-transfer-header-flex-basis` | `var(--c-size-11)` | `flex` |
| `--c-transfer-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-transfer-header-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-transfer-header-selected-count-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-transfer-header-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-header-title-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-transfer-header-unit-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-transfer-header-unit-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-transfer-height` | `400px` | `height` |
| `--c-transfer-icon-bg` | `var(--c-color-fill-3)` | `background-color` |
| `--c-transfer-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-transfer-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-transfer-item-bg` | `transparent` | `background-color` |
| `--c-transfer-item-bg-disabled` | `transparent` | `background-color` |
| `--c-transfer-item-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-transfer-item-drag-handle-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-transfer-item-draggable-bg-blink` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-transfer-item-draggable-bg-dragging` | `var(--c-color-fill-1)` | `background-color` |
| `--c-transfer-item-draggable-gap-bg` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-transfer-item-draggable-gap-height` | `var(--c-spacing-1)` | `border-radius`, `bottom`, `height`, `top` |
| `--c-transfer-item-draggable-text-color-dragging` | `var(--c-color-text-4)` | `color` |
| `--c-transfer-item-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-transfer-item-height` | `var(--c-size-9)` | `height`, `line-height` |
| `--c-transfer-item-padding-horizontal` | `var(--c-spacing-5)` | `padding` |
| `--c-transfer-item-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-item-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-transfer-item-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-item-tip-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-transfer-operation-buttons-gap` | `var(--c-spacing-6)` | `margin-top` |
| `--c-transfer-operation-menu-button-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-transfer-operation-menu-button-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-transfer-operation-menu-button-padding-y` | `7px` | `padding` |
| `--c-transfer-operation-menu-min-width` | `140px` | `min-width` |
| `--c-transfer-operation-menu-padding` | `var(--c-spacing-2)` | `padding` |
| `--c-transfer-operation-padding-horizontal` | `var(--c-spacing-8)` | `padding` |
| `--c-transfer-operation-words-button-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-transfer-pagination-input-width` | `var(--c-size-6)` | `width` |
| `--c-transfer-pagination-separator-gap` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-search-padding-bottom` | `var(--c-spacing-2)` | `padding-block` |
| `--c-transfer-search-padding-left` | `var(--c-spacing-6)` | `padding-inline` |
| `--c-transfer-search-padding-right` | `var(--c-spacing-6)` | `padding-inline` |
| `--c-transfer-search-padding-top` | `var(--c-spacing-4)` | `padding-block` |
| `--c-transfer-title-height` | `var(--c-size-10)` | `height`, `line-height` |
| `--c-transfer-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `animation-timing-function` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-transfer-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

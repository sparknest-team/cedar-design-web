---
permalink: /components/filter-form/
---

# FilterForm

列表页筛选项。FilterForm **不内置**输入组件，通过 `fields[].component` 直接传入组件（也可使用可选的 `field-map` 注册表），避免无用依赖进包。

持久化（记住筛选）由业务侧自行处理：组件只通过 `v-model` 同步值，不读写 storage。

## 基础示例

### 基础用法

在 `fields` 中直接传入组件并配置字段。宽屏会自动多列展示，超出时可展开/收起。

筛选容器使用主题表面色（亮色为白色、暗色随主题适配）、轻描边与20px内边距，不再使用输入控件的浅填充背景。操作区按按钮实际宽度自适应预留列数，展开/收起与操作按钮始终保持一行，并与字段控件顶边对齐。收起时操作区位于首行右侧；展开后字段使用完整列布局，操作区位于最后一行右侧，末行空间不足时另起一行靠右。容器或按钮宽度变化时自动重新计算预留空间。单列/双列折叠默认保留一行字段和独立操作行，避免只剩按钮。展开/收起为原生按钮，支持Tab聚焦、Enter/空格操作并提供aria-expanded。行间距默认16px，可由grid-props.rowGap覆盖。

The filter uses the theme surface with a subtle border and 20px inset, rather than an input-fill background. Actions reserve columns according to their actual width, with the expand/collapse control and action buttons kept on one line. Collapsed actions sit at the right of the first row. Expanded fields use the full column layout, with actions at the right of the last row, or on a new row when there is insufficient space. Resizing the container or changing button widths recalculates the reservation. One- and two-column collapse retain a row of fields above the actions by default. Expand/collapse is a native keyboard-accessible button with aria-expanded. The default 16px row gap can be overridden through grid-props.rowGap.

<demo src="./__demos__/basic.vue"></demo>

```ts
import { Input, Select, type FilterFormField } from '@cedar-design/ui-vue'

const fields: FilterFormField[] = [
  { field: 'keyword', label: '关键词', component: Input },
  {
    field: 'status',
    label: '状态',
    component: Select,
    props: { options: [{ label: '启用', value: 'enabled' }] },
  },
]
```

所有字段组件统一使用 `modelValue` / `update:modelValue` 同步值。自定义组件也应遵循该协议；其他协议可通过包装组件适配。值同步与 FilterForm 的防抖 `change` 通知独立，`autoEmitChange: false` 时值仍会即时同步。

## 内容与展示

### 可选组件注册表

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `fields` | 筛选项 schema | 可选组件注册表 |
| `field-map` | 可选字段组件注册表 | 可选组件注册表 |
| `collapsible` | 是否启用展开/收起 | 可选组件注册表 |
<!-- demo-config-notes:end -->

需要复用组件默认属性或使用后端 JSON schema 时，可通过 `fieldMap` 注册组件，字段的 `component` 填写注册表 key。注册表支持直接传组件或 `{ component, defaultProps }`，字段 `props` 覆盖注册表默认属性。未注册的字符串 key 不渲染。

<demo src="./__demos__/registered-fields.vue"></demo>

## 异步与动态数据

### 异步 options

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `fields` | 筛选项 schema | 异步 options |
| `collapsible` | 是否启用展开/收起 | 异步 options |
<!-- demo-config-notes:end -->

选项统一通过字段 `props.options` 传入。使用 `computed` 根据响应式选项构造 `fields`，接口返回后即可更新选项。关闭折叠时适合筛选项较少的场景。

<demo src="./__demos__/async-options.vue"></demo>

## API

### 主值与默认值

使用普通 `v-model`。`modelValue` 表示筛选字段对象；`defaultValue` 仅在创建时初始化非受控值，后续修改不会重置当前状态。显式绑定值优先，初始化不发出 `update:modelValue`。

输入后先更新内部镜像，再通知父级。父级未接收更新时，界面仍保留本次输入；后续不同的外部模型会替换镜像。`collapsed` 同样先更新内部折叠状态再通知父级，并接受后续外部变化。需要业务拒绝输入时，应显式回写新的模型对象。

### FilterForm Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value **(v-model)** | 表单值；未传入时使用 default-value | `Record<string, unknown>` | `undefined` |
| default-value | 仅创建时读取的初始值 | `Record<string, unknown>` | `{}` |
| fields | 筛选项 schema | `FilterFormField[]` | `[]` |
| field-map | 可选字段组件注册表 | `FilterFormFieldMap` | `{}` |
| rules | 透传 Form 校验规则 | object | - |
| collapsed **(v-model)** | 是否折叠多余项 | boolean | `true` |
| collapsible | 是否启用展开/收起 | boolean | `true` |
| cols | 响应式列数 | number \| object | `{ xs:1, sm:2, md:3, lg:3, xl:4, xxl:5 }` |
| grid-props | 透传 Grid 属性，优先于容器给出的同名配置 | `Record<string, unknown>` | - |
| change-debounce | change 防抖毫秒；0 立即通知，非有限数或负数回退 500 | number | `500` |

### FilterFormFieldRegistration Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:model-value | 输入时即时同步值快照 | `(value: Record<string, unknown>) => void` |
| update:collapsed | 本地展开/收起通知 | `(collapsed: boolean) => void` |
| change | 输入防抖、回车即时通知；autoEmitChange=false 时由失焦或回车通知 | `(value: Record<string, unknown>, field: string) => void` |

事件仅作通知，不收集 Promise，也不驱动加载状态。

### FilterFormFieldRegistration Slots

| 插槽名 | 说明 |
| --- | --- |
| actions | 操作区（搜索 / 重置等），与展开收起同一行；没有作用域参数；collapsible=false 时仍可使用 |

### FilterFormFieldRegistration Instance Properties

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| formRef | `FormInstance \| undefined` | 挂载后的内部 Form 实例，可调用 validate、clearValidate、resetFields 等 Form 方法 |

`formRef` 是实例属性，不是方法。内部 Form 的 `resetFields` 恢复它记录的初始值，只影响内部模型，不发出 FilterForm 的 `update:modelValue` 或 `change`。整体重置筛选条件时，业务应替换绑定模型；例如：

```ts
const makeInitialModel = () => ({ keyword: '', createdAt: new Date() })
const model = ref(makeInitialModel())
const resetFilters = () => { model.value = makeInitialModel() }
```

在 `actions` 中使用 `type="button"` 的搜索或重置按钮，并在业务处理函数中操作模型、执行查询。容器没有额外的 reset/search 方法或任务执行入口。

## Types

### FilterFormField

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | Vue 组件，或 `fieldMap` 的 key | `string \| Component` | - |
| field | 表单字段路径 | string | - |
| label | 标签 | string | - |
| visible | 是否渲染 | boolean | `true` |
| autoEmitChange | 输入过程是否触发 change | boolean | `true` |
| props | 透传给字段组件 | object | - |
| gridItemProps | GridItem 属性 | object | - |
| formItemProps | FormItem 属性 | object | - |

### FilterFormFieldRegistration

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 字段组件 | Component | - |
| defaultProps | 默认 props | object | - |

字段属性按注册表 `defaultProps`、字段 `props`、容器管理的 `modelValue` 顺序合并，后者优先。`gridItemProps` 直接透传 GridItem；`formItemProps` 可覆盖 FormItem 的 `field` 和 `label`，但不会改变模型写入使用的 schema `field` 路径。`grid-props` 也可覆盖 `cols`、`collapsed` 等同名 Grid 配置，配置时应避免与容器状态冲突。

```ts
import type {
  FilterFormProps,
  FilterFormInstance,
  FilterFormEmits,
  FilterFormSlots,
  FilterFormExpose,
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from '@cedar-design/ui-vue'
```

Grid 列间距通过 `grid-props.colGap`（数字 px）控制；没有同名 CSS 覆盖入口，以确保 Grid 的数值测量与实际间距一致。

changeDebounce 改变时按新延迟重排待发送快照，0为立即通知。回车先取消待发送任务再通知当前值；外部重置或不同模型替换会取消旧快照，但正常接受 update:modelValue 的相同值回传不会取消 change。KeepAlive 停用与卸载取消待发送任务；重新激活后接受新输入。

筛选模型使用与 Form 一致的数据快照复制策略。Date、普通对象和数组会独立复制；Map、Set、BigInt 和循环引用保留数据形态，不把日期转换成字符串或把集合变成空对象。事件接收方修改普通对象或 Date 快照，不会改动父模型或后续内部快照；Map 键等标识语义沿用现有 Form 策略。函数、DOM、WeakMap/WeakSet、Promise 和带私有状态的实例不属于可深隔离的筛选数据模型，不承诺复制其内部状态。

field 支持与 FormItem 一致的点号及方括号路径。写入时自动创建缺失的中间对象，保留已有兄弟字段；需要数组型中间容器时，在 default-value 或 model-value 中预建数组。已有中间值须为对象或数组，不用输入操作覆盖不匹配的标量结构。模型同步及 change 的本地镜像、防抖和回传确认语义保持原有合同。

## CSS Variables

多列布局的操作区对齐可在 FilterForm 根节点覆盖 `--c-filter-form-action-offset`；单列 stacked 布局不增加顶部偏移。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-filter-form-action-offset` | `calc(1em * var(--c-form-line-height) + var(--c-form-vertical-label-margin-bottom))` | `padding-top` |
| `--c-filter-form-actions-gap` | `var(--c-sys-space-5)` | `gap` |
| `--c-filter-form-background-color` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-filter-form-border-color` | `var(--c-sys-color-border-subtle)` | `border` |
| `--c-filter-form-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-filter-form-border-width` | `1px` | `border` |
| `--c-filter-form-collapse-color` | `var(--c-color-text-2)` | `color` |
| `--c-filter-form-collapse-gap` | `4px` | `gap` |
| `--c-filter-form-collapse-hover-color` | `var(--c-sys-color-content-brand)` | `color`, `outline` |
| `--c-filter-form-focus-offset` | `3px` | `outline-offset` |
| `--c-filter-form-focus-width` | `2px` | `outline` |
| `--c-filter-form-item-margin-bottom` | `0px` | `margin-bottom` |
| `--c-filter-form-padding` | `var(--c-sys-space-7)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-filter-form-actions-gap: var(--c-sys-space-5);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

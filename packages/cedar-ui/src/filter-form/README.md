---
permalink: /components/filter-form/
---

# FilterForm

列表页筛选项。FilterForm **不内置**输入组件，通过 `fields[].component` 直接传入组件（也可使用可选的 `field-map` 注册表），避免无用依赖进包。

持久化（记住筛选）由业务侧自行处理：组件只通过 `v-model` 同步值，不读写 storage。

## 基础用法

在 `fields` 中直接传入组件并配置字段。宽屏会自动多列展示，超出时可展开/收起。

筛选容器使用主题表面色（亮色为白色、暗色随主题适配）、轻描边与20px内边距，不再使用输入控件的浅填充背景。操作区预留两列并与字段控件顶边对齐；单列时按可用列数收敛。单列/双列折叠默认保留一行字段和独立操作行，避免只剩按钮。展开/收起为原生按钮，支持Tab聚焦、Enter/空格操作并提供aria-expanded。行间距默认16px，可由grid-props.rowGap覆盖。

The filter uses the theme surface with a subtle border and 20px inset, rather than an input-fill background. Actions align with the fields and reserve two columns, clamped to the available column count. One- and two-column collapse retain a row of fields above the actions by default. Expand/collapse is a native keyboard-accessible button with aria-expanded. The default 16px row gap can be overridden through grid-props.rowGap.

<demo src="./__demos__/basic.vue"></demo>

```ts
import { Input, Select, type FilterFormField } from '@cedarjs/ui'

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

## 可选组件注册表

需要复用组件默认属性或使用后端 JSON schema 时，可通过 `fieldMap` 注册组件，字段的 `component` 填写注册表 key。注册表支持直接传组件或 `{ component, defaultProps }`，字段 `props` 覆盖注册表默认属性。未注册的字符串 key 不渲染。

<demo src="./__demos__/registered-fields.vue"></demo>

## 异步 options

选项统一通过字段 `props.options` 传入。使用 `computed` 根据响应式选项构造 `fields`，接口返回后即可更新选项。关闭折叠时适合筛选项较少的场景。

<demo src="./__demos__/async-options.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### FilterForm Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value **(v-model)** | 表单值 | `Record<string, unknown>` | `{}` |
| fields | 筛选项 schema | `FilterFormField[]` | `[]` |
| field-map | 可选字段组件注册表 | `FilterFormFieldMap` | `{}` |
| rules | 透传 Form 校验规则 | object | - |
| collapsed **(v-model)** | 是否折叠多余项 | boolean | `true` |
| collapsible | 是否启用展开/收起 | boolean | `true` |
| cols | 响应式列数 | number \| object | `{ xs:1, sm:2, md:3, lg:3, xl:4, xxl:5 }` |
| grid-props | Grid 其余属性 | object | - |
| change-debounce | change 防抖毫秒 | number | `500` |

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

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| update:model-value | v-model | `(value) => void` |
| update:collapsed | 折叠状态变化 | `(collapsed) => void` |
| change | 字段值变化（防抖） | `(value, field) => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| actions | 操作区（搜索 / 重置等），与展开收起同一行 |

### Methods

| 方法名 | 说明 |
| --- | --- |
| formRef | 内部 Form 实例 |

## 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--c-filter-form-border-radius` | `var(--c-border-radius-md)` |
| `--c-filter-form-background-color` | `var(--c-sys-color-surface-default)` |
| `--c-filter-form-padding` | `var(--c-sys-space-7)`（20px） |
| `--c-filter-form-border-color` | `var(--c-sys-color-border-subtle)` |
| `--c-filter-form-border-width` | `1px` |
| `--c-filter-form-action-offset` | `calc(1em * var(--c-form-line-height) + var(--c-form-vertical-label-margin-bottom))` |
| `--c-filter-form-item-margin-bottom` | `0px`（行距由Grid负责） |
| `--c-filter-form-actions-gap` | `var(--c-sys-space-5)`（12px） |
| `--c-filter-form-collapse-gap` | `4px` |
| `--c-filter-form-collapse-color` | `var(--c-color-text-2)` |
| `--c-filter-form-collapse-hover-color` | `var(--c-sys-color-content-brand)` |
| `--c-filter-form-focus-width` | `2px` |
| `--c-filter-form-focus-offset` | `3px` |

2026-10-16 消费核验：真实 Less 编译与挂载 DOM 确认上述 13 项分别进入容器、FormItem、操作区和折叠按钮规则；静态样式入口同时导入 Form 样式。多列操作项的 `padding-top` 消费 action-offset，单列 stacked 状态覆盖为 `0`。根级派生别名不会保证随局部 Form 依赖覆盖重新计算，需要调整操作区对齐时直接在实际 FilterForm 根覆盖 `--c-filter-form-action-offset`。

## 类型

```ts
import type {
  FilterFormProps,
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from '@cedarjs/ui'
```

Grid 列间距通过 `grid-props.colGap`（数字 px）控制；没有同名 CSS 覆盖入口，以确保 Grid 的数值测量与实际间距一致。

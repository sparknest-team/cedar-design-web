---
permalink: /components/filter-form/
---

# FilterForm

列表页筛选项。FilterForm **不内置**输入组件，通过 `field-map` 显式注册，避免无用依赖进包。

持久化（记住筛选）由业务侧自行处理：组件只通过 `v-model` 同步值，不读写 storage。

## 基础用法

先注册字段组件，再配置 `fields` schema。宽屏会自动多列展示，超出时可展开/收起。

<demo src="./__demos__/basic.vue"></demo>

```ts
import {
  Input,
  Select,
  type FilterFormFieldMap,
} from '@cedarjs/ui'

const fieldMap: FilterFormFieldMap = {
  select: {
    component: Select,
    optionsFromMap: true,
  },
  input: {
    component: Input,
    valueEvent: 'update:modelValue',
  },
}
```

## 异步 options

`optionsFromMap: true` 的字段从 `optionsMap[field]` 取 options，可异步更新。关闭折叠时适合筛选项较少的场景。

<demo src="./__demos__/options-map.vue"></demo>

## API

### FilterForm Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value **(v-model)** | 表单值 | `Record<string, unknown>` | `{}` |
| fields | 筛选项 schema | `FilterFormField[]` | `[]` |
| field-map | 字段组件注册表 | `FilterFormFieldMap` | `{}` |
| options-map | options 字典，供 `optionsFromMap` 使用 | `Record<string, unknown>` | `{}` |
| rules | 透传 Form 校验规则 | object | - |
| collapsed **(v-model)** | 是否折叠多余项 | boolean | `true` |
| collapsible | 是否启用展开/收起 | boolean | `true` |
| cols | 响应式列数 | number \| object | `{ xs:1, sm:2, md:3, lg:3, xl:4, xxl:5 }` |
| grid-props | Grid 其余属性 | object | - |
| change-debounce | change 防抖毫秒 | number | `500` |

### FilterFormField

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | `fieldMap` 的 key，或 Vue 组件 | `string \| Component` | - |
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
| valueEvent | 值同步事件 | `'change' \| 'update:modelValue'` | `change` |
| optionsFromMap | 未传 options 时从 `optionsMap[field]` 取 | boolean | `false` |
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
| `--c-filter-form-border-radius` | `@radius-md` |
| `--c-filter-form-background-color` | `@color-fill-1` |
| `--c-filter-form-item-margin-bottom` | `16px` |
| `--c-filter-form-actions-gap` | `16px` |
| `--c-filter-form-collapse-gap` | `4px` |
| `--c-filter-form-collapse-color` | `@color-text-2` |

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

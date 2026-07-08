---
permalink: /components/layout-form/
---

# LayoutForm

自适应表单组件，适用于列表的筛选。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### LayoutForm Props

| 属性          | 说明                     | 类型    | 默认值 |
| ------------- | ------------------------ | ------- | ------ |
| componentTree | 参数类型                 | object  | -      |
| value         | 表单值                   | object  | -      |
| noBottomSpace | 表单底部是否有间距       | boolean | false  |
| emptyText     | 表单值为空的默认显示文案 | string  | '-'    |
| showEmptyText | 是否显示默认的空值       | boolean | false  |
| rules         | 表单校验规则             | object  | false  |
| store         | 表单可选项映射           | object  | false  |
| compMapping   | 自定义组件映射           | object  | false  |

### componentTree Props

#### componentName 引入示例

```
import { ComponentEnum } from '@cedar/ui'

ComponentEnum.CASCADER

```

| 属性          | 说明                                                                                                                                                                                | 类型            | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------ |
| componentName | 动态组件名字，通过ComponentEnum引入。包括 PEOPLE、RESOURCE_SUGGEST、CASCADER、COLOR_PICKER、IMAGE_UPLOAD、FILE_UPLOAD、INPUT、INPUT_NUMBER、DATEPICKER、SELECT、SWITCH、RADIO_GROUP | object          | -      |
| props         | 动态组件属性                                                                                                                                                                        | object          | -      |
| children      | 动态子组件                                                                                                                                                                          | componentTree[] | -      |

### componentTree Form Props

| 属性          | 说明                                                         | 类型   | 默认值 |
| ------------- | ------------------------------------------------------------ | ------ | ------ |
| maxVisibleRow | 最大可见行数                                                 | object | -      |
| layoutCol     | 每列个数                                                     | object | -      |
| layoutColArr  | 响应式的每列个数，比如：[2, 3, 6]，对应尺寸[768, 1440, 1980] | object | -      |
| labelPosition | 表单label的位置                                              | object | -      |
| labelWidth    | 表单label的宽度                                              | object | -      |

### LayoutForm Slots

| 插槽名            | 说明           |
| ----------------- | -------------- |
| default           | 自定义默认内容 |
| formOperatorGroup | 自定义默认内容 |
| formOperatorGroup | 自定义默认内容 |

### LayoutForm Events

| 事件名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| change | 表单值变化后触发的事件 |      |

### LayoutForm Methods

| 方法名  | 说明                                                                   | 参数 |
| ------- | ---------------------------------------------------------------------- | ---- |
| getForm | 获取到内部表单组件引用对象，通过这个对象可以调用原生的方法，不建议用。 |      |

### LayoutForm Slots

| 插槽名            | 说明           |
| ----------------- | -------------- |
| default           | 自定义默认内容 |
| formOperatorGroup | 自定义默认内容 |
| formOperatorGroup | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { LayoutFormProps } from '@cedar/ui'
```

---
permalink: /components/filter-form/
---

# FilterForm

用于列表的筛选项。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 手动控制

如果需要点击搜索后再保存到表单里面，需要设置autoRemember为false。
<demo src="./__demos__/manual-control.vue"></demo>

## 组件配置

FilterForm的其它属性和事件透传LayoutForm。
FilterForm目前不支持children嵌套children。

### FilterForm Props

| 属性                   | 说明                                                                          | 类型                     | 默认值                                                      |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| model **(v-model)**    | 表单的值，默认会同步更改。                                                    | any                      | -                                                           |
| components             | 所有可以配置的组件                                                            | IComponent[]             | -                                                           |
| collapsed              | 默认是否收起表单项                                                            | boolean                  | true                                                        |
| cols                   | 响应式布局                                                                    | object                   | &lbrace; xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 &rbrace; |
| gridProps              | Grid组件的属性，优先级最高。                                                  | object                   | -                                                           |
| store                  | `select`、`cascader`的options选项                                             | object                   | -                                                           |
| defaultConfig          | 所有字段的全局配置                                                            | config                   | -                                                           |
| fieldConfig            | 字段配置，单个字段的配置会覆盖全局配置                                        | <[prop: string]: config> | -                                                           |
| showRememberSelections | 是否显示`记住我的选择`这个选项                                                | boolean                  | -                                                           |
| rememberUserKey        | 全局缓存的key，需要确保全局唯一，如果showRememberSelections 为 true，则必传。 | string                   | -                                                           |
| autoRemember           | 如果数据变化会自动触发缓存记忆，否则需要手动调用方法进行控制。                | boolean                  | true                                                        |

#### IComponent Props

| 属性          | 说明                                                                                    | 类型                            | 默认值 |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| visible       | 是否可见                                                                                | boolean                         | true   |
| name          | 组件名字`select`、`people-select`、`input`、`date-picker`、`range-picker`、`cascader`。 | string                          | -      |
| props         | 组件属性。autoEmitChange仅在输入类组件生效。                                            | {autoEmitChange: boolean} & any | -      |
| gridItemProps | GridItem组件的属性，优先级最高。                                                        | any                             | -      |
| formItemProps | FormItem组件属性，优先级最高。                                                          | any                             | -      |

#### config Props

| 属性                 | 说明                                                                       | 类型    | 默认值 |
| -------------------- | -------------------------------------------------------------------------- | ------- | ------ |
| remember             | 是否记忆                                                                   | boolean | true   |
| removeIfNotInOptions | 仅针对select组件，如果在options可选项中不存在，则删除这个记忆的value。     | boolean | true   |
| required             | 仅针对select组件，是否必选，如果是则会在options里面取第一个选项中的value。 | boolean | false  |

#### fieldConfig Props

<[prop: string]: config>

| 属性 | 说明         | 类型   | 默认值 |
| ---- | ------------ | ------ | ------ |
| prop | 组件的属性名 | string | -      |

### FilterForm Events

| 事件名 | 说明       | 参数                                 |
| ------ | ---------- | ------------------------------------ |
| change | change事件 | `(value: any, prop: string) => void` |

### FilterForm Slots

| 插槽名 | 说明                                       |
| ------ | ------------------------------------------ |
| suffix | 表单最后一项的内容，一般放重置和搜索按钮。 |

### Methods

| 方法名          | 描述                                                                    | 参数 | 返回值 |
| --------------- | ----------------------------------------------------------------------- | ---- | ------ |
| saveStorageData | 手动存储当前表单值到storage，如果重置也需要记忆的时候需要手动调用一下。 | -    | -      |
| loadStorageData | 加载storage的值到表单                                                   | -    | -      |

### Global Methods

| 方法名         | 描述                                        | 参数                                 | 返回值                           |
| -------------- | ------------------------------------------- | ------------------------------------ | -------------------------------- |
| getStorageData | 获取storage的数据，根据自己的需求进行处理。 | (storageKey: string) 当前表单的key。 | 返回当前key所对应的storage的值。 |

## 类型定义

组件导出以下类型定义

```ts
import type { FilterFormProps } from '@cedar/ui'
```

---
permalink: /components/search/
---

# Search

搜索组件，支持基础搜索、按钮搜索、字段搜索和受控的最近搜索记录。组件内部不持久化搜索历史；开发者可以根据 `search` 事件返回的 `recentSearches` 自行缓存到本地、服务端或状态管理中，再通过 `recent-searches` 回传给组件。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 带下拉字段选择

<demo src="./__demos__/with-fields.vue"></demo>

### 本地缓存搜索历史

<demo src="./__demos__/local-storage.vue"></demo>

### 加载中

<demo src="./__demos__/loading.vue"></demo>

## API

### `<Search>` Props

| 参数名                         | 描述                                   | 类型                                   |   默认值    |
| ------------------------------ | -------------------------------------- | -------------------------------------- | :---------: |
| model-value **(v-model)**      | 绑定值                                 | `string`                               |     `-`     |
| default-value                  | 默认值（非受控状态）                   | `string`                               |     `-`     |
| search-button                  | 是否为后置按钮模式                     | `boolean`                              |   `false`   |
| loading                        | 是否为加载中状态                       | `boolean`                              |   `false`   |
| disabled                       | 是否禁用                               | `boolean`                              |   `false`   |
| variant                        | 输入框风格                             | `'filled' \| 'outlined' \| 'standard'`               | `'filled'` |
| size                           | 输入框大小                             | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |   `'md'`    |
| button-text                    | 搜索按钮的文字，使用后会替换原本的图标 | `string`                               |     `-`     |
| button-props                   | 搜索按钮的属性                         | `ButtonProps`                          |     `-`     |
| recent-searches                | 最近搜索记录                           | `string[]`                             |    `[]`     |
| fields                         | 搜索字段可选项                         | `SelectOptionData[]`                   |    `[]`     |
| default-field                  | 默认搜索字段                           | `string`                               |     `-`     |
| model-field **(v-model)**      | 搜索字段                               | `string`                               |     `-`     |
| model                          | 搜索对象模型                           | `Record<string, any>`                  |     `-`     |
| select-style                   | 字段选择器样式                         | `StyleValue`                           |     `-`     |
| max-search-history-count       | 最近搜索记录最大数量                   | `number`                               |     `5`     |
| clearable                      | 是否允许清空输入框                     | `boolean`                              |   `false`   |

### `<Search>` Events

| 事件名              | 描述                               | 参数                               |
| ------------------- | ---------------------------------- | ---------------------------------- |
| search              | 回车、点击搜索按钮或选择历史时触发 | data: `SearchResult`<br>ev: `Event` |
| change              | 输入值变化或搜索字段变化时触发     | value: `string`<br>ev?: `Event`    |
| update:model-value  | 绑定值更新时触发                   | value: `string`                    |
| update:model-field  | 搜索字段更新时触发                 | value: `string`                    |

### SearchResult

| 属性           | 说明                   | 类型                 | 默认值 |
| -------------- | ---------------------- | -------------------- | ------ |
| modelField     | 搜索字段               | `string`             | -      |
| modelValue     | 搜索关键词             | `string`             | -      |
| model          | 表单对象               | `Record<string, any>` | -      |
| recentSearches | 最近搜索记录           | `string[]`           | `[]`   |

## 类型定义

组件导出以下类型定义

```ts
import type { SearchProps, SearchField, SearchResult } from '@cedarjs/ui'
```

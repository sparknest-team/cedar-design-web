---
permalink: /components/search/
---

# Search

搜索组件用于输入关键词并提交查询，支持按钮搜索、字段搜索和受控搜索历史。Cedar 与 Maple 第一版共享相同的核心属性、事件顺序和 `SearchResult` 结构；组件本身不持久化历史。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 输入、提交与清空

<demo src="./__demos__/interaction.vue"></demo>

### 带下拉字段选择

<demo src="./__demos__/with-fields.vue"></demo>

### 自定义插槽

<demo src="./__demos__/slots.vue"></demo>

### 本地缓存搜索历史

<demo src="./__demos__/local-storage.vue"></demo>

### 加载中

<demo src="./__demos__/loading.vue"></demo>

## API

### `<Search>` Props

| 参数名                    | 描述                           | 类型                                   |    默认值    |
| ------------------------- | ------------------------------ | -------------------------------------- | :----------: |
| model-value **(v-model)** | 搜索关键词                     | `string`                               |     `-`      |
| default-value             | 默认关键词（非受控状态）       | `string`                               |     `''`     |
| model-field **(v-model)** | 当前搜索字段                   | `string`                               |     `-`      |
| default-field             | 默认搜索字段（非受控状态）     | `string`                               |     `-`      |
| model                     | 字段搜索模式下按字段写入的对象 | `Record<string, unknown>`              |     `-`      |
| fields                    | 搜索字段可选项                 | `SearchField[]`                        |     `[]`     |
| select-style              | 字段选择器样式                 | `StyleValue`                           |     `-`      |
| recent-searches           | 受控的最近搜索记录             | `string[]`                             |     `[]`     |
| max-search-history-count  | 生成下一份历史时保留的最大数量 | `number`                               |     `5`      |
| search-button             | 是否显示搜索按钮               | `boolean`                              |   `false`    |
| button-text               | 搜索按钮文字                   | `string`                               |     `-`      |
| button-props              | 搜索按钮属性                   | `ButtonProps`                          |     `-`      |
| loading                   | 是否加载中；加载时禁止提交     | `boolean`                              |   `false`    |
| clearable                 | 是否允许清空输入框             | `boolean`                              |   `false`    |
| readonly                  | 是否只读                       | `boolean`                              |   `false`    |
| disabled                  | 是否禁用                       | `boolean`                              |   `false`    |
| variant                   | 输入框风格                     | `'filled' \| 'outlined' \| 'standard'` | `'outlined'` |
| size                      | 输入框大小                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |    `'md'`    |
| placeholder               | 占位文字                       | `string`                               |     `-`      |

其余原生输入属性会透传给内部 Input。

### `<Search>` Events

| 事件名             | 描述                                     | 参数                                |
| ------------------ | ---------------------------------------- | ----------------------------------- |
| update:model-value | 关键词更新时触发                         | value: `string`                     |
| update:model-field | 搜索字段更新时触发                       | field: `string`                     |
| update:model       | 字段表单更新时触发                       | model: `Record<string, unknown>`    |
| input              | 输入期间触发                             | value: `string`<br>ev: `Event`      |
| change             | 失焦、Enter 提交或切换字段时触发         | value: `string`<br>ev: `Event`      |
| clear              | 清空时触发                               | ev: `Event`                         |
| search             | 点击图标/按钮、按 Enter 或选择历史时触发 | data: `SearchResult`<br>ev: `Event` |
| focus              | 聚焦时触发                               | ev: `FocusEvent`                    |
| blur               | 失焦时触发                               | ev: `FocusEvent`                    |

`clear` 只更新空值并触发自身事件，不额外触发 `input`、`change` 或 `search`。提交搜索不会主动让输入框失焦。

### `<Search>` Slots

| 插槽名         | 描述                               | 参数                |
| -------------- | ---------------------------------- | ------------------- |
| prefix         | 输入框前缀；提供后替换默认搜索图标 | `-`                 |
| suffix         | 输入框后缀                         | `-`                 |
| clear-icon     | 清空图标                           | `clear: () => void` |
| button-default | 搜索按钮内容                       | `-`                 |
| button-icon    | 搜索按钮图标                       | `-`                 |

### `<Search>` Methods

| 方法名 | 描述         |
| ------ | ------------ |
| focus  | 聚焦输入框   |
| blur   | 使输入框失焦 |

### SearchField

| 属性        | 说明                                         | 类型     |
| ----------- | -------------------------------------------- | -------- |
| value       | 字段值                                       | `string` |
| label       | 字段文案                                     | `string` |
| placeholder | 字段占位文字，优先于 Search 的 `placeholder` | `string` |

### SearchResult

| 属性           | 说明                                            | 类型                                   |
| -------------- | ----------------------------------------------- | -------------------------------------- |
| modelField     | 搜索字段                                        | `string \| undefined`                  |
| modelValue     | 原始搜索关键词                                  | `string`                               |
| model          | 字段表单对象                                    | `Record<string, unknown> \| undefined` |
| recentSearches | 下一份搜索历史；关键词会 trim、去重、前置并限长 | `string[]`                             |

## 类型定义

```ts
import type { SearchProps, SearchField, SearchResult } from "@cedarjs/ui";
```

---
permalink: /components/search/
---

# Search

搜索组件（用于列表页等场景）

### 案例

#### 基础用法

<br />

<demo src="./__demos__/basic.vue"></demo>

<br />

#### 带下拉字段选择

<br />

<demo src="./__demos__/with-fields.vue"></demo>

<br /><br />

### API

#### Search Props

| 属性                | 说明                                                                  | 类型                               | 默认值   |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------- | -------- |
| defaultField        | 搜索字段的key                                                         | string                             |
| model **(v-model)** | 表单数据对象，组件内部触发change事件后，会自动修改model相关属性的值。 | object                             |
| searchText          | 搜索字段的value，支持v-model:searchText (老的名字是searchText还兼容)  | string                             |
| searchField         | 搜索字段的key                                                         | string                             |
| fields              | 搜索字段可选项（默认选中第一个）                                      | Array<[SearchField](#searchfield)> | []       |
| placeholder         | 搜索框占位文案（优先级低于 SearchField 内的占位文案）                 | string                             | '请输入' |
| selectStyle         | 传入fields后生效，对search组件中的select增加style属性                 | object                             | -        |

#### Search Events

| 事件名 | 说明                           | 参数                                         |
| ------ | ------------------------------ | -------------------------------------------- |
| search | 回车或者点击搜索按钮触发       | (obj: [SearchResult](#searchresult)) => void |
| change | 当搜索的key或者value变化时触发 | (obj: [SearchResult](#searchresult)) => void |

#### SearchField

| 属性        | 说明     | 类型   | 默认值 |
| ----------- | -------- | ------ | ------ |
| value       | 搜索字段 | string | -      |
| label       | 字段文案 | string | -      |
| placeholder | 占位文案 | string | -      |

#### SearchResult

| 属性        | 说明       | 类型   | 默认值 |
| ----------- | ---------- | ------ | ------ |
| searchField | 搜索字段   | string | -      |
| searchText  | 搜索关键词 | string | -      |
| model       | 表单对象   | any    | -      |

#### 类型定义

组件导出以下类型定义

```ts
import type { SearchProps, SearchField, SearchResult } from '@cedar/ui'
```

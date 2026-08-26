---
permalink: /components/people-select/
---

# PeopleSelect

人员选择组件。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### PeopleSelect Props

其它属性参照Select组件。

| 属性       | 说明                                   | 类型    | 默认值 |
| ---------- | -------------------------------------- | ------- | ------ |
| fetch      | 需要主动传入发请求的fetch              | any     | -      |
| modelValue | 绑定值                                 | string  | -      |
| is-label   | 是否是阅读模式                         | boolean | -      |
| url-type   | 选人地址的url类型，默认有三种oss、ares | string  | ares   |

### PeopleSelect Events

| 事件名 | 说明               | 参数                    |
| ------ | ------------------ | ----------------------- |
| change | 选人时候触发的事件 | `(val: string) => void` |
| clear  | 点击清除触发的事件 | -                       |

### PeopleSelect Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { PeopleSelectProps } from '@cedarjs/ui'
```

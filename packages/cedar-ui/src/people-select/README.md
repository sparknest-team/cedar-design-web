---
permalink: /components/people-select/
---

# PeopleSelect

人员选择组件。

## 基础用法

本例使用本地异步模拟接口，不需要 token，也不请求真实人员服务。初始 `demo.chen` 不在首批候选中，由详情接口按 ID 反显；可搜索姓名或 ID、选择、清除，并观察阅读模式同步。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### PeopleSelect Props

其它属性参照Select组件。

| 属性       | 说明                                   | 类型    | 默认值 |
| ---------- | -------------------------------------- | ------- | ------ |
| fetch      | 需要主动传入发请求的fetch              | any     | -      |
| model-value | 绑定值                                 | string  | -      |
| is-label   | 是否是阅读模式                         | boolean | -      |
| url-type   | 选人地址的url类型，默认有三种oss、ares | string  | ares   |

`disabled`、`readonly` 支持字段显式设置及 Form / FormItem 继承。弹层确认期间不可编辑；校验失败保留草稿，表单重置关闭弹层并丢弃未完成提交。

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

### Form 字段展示与确认

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。


搜索输入变化时立即移除旧候选，防抖与请求期间不能通过 Enter 选择旧结果；只采纳最后一次搜索响应。ID 反显不进入候选列表，关闭面板或重置后，迟到响应不会恢复旧列表。校验失败保留所选草稿，异步确认期间锁定字段及取消操作，重置可中止本次编辑。

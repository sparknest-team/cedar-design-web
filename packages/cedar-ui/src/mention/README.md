---
permalink: /components/mention/
---

# Mention

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 基础示例

### 基础用法

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

<demo src="./__demos__/basic.vue"></demo>

## 自定义与插槽

### 自定义触发字符

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置     | 作用                 | 相关示例       |
| -------- | -------------------- | -------------- |
| `data`   | 用于自动补全的数据   | 自定义触发字符 |
| `prefix` | 触发自动补全的关键字 | 自定义触发字符 |

<!-- demo-config-notes:end -->

指定 `prefix` 来自定义触发字符。默认为 `@`，可以自定义为任意字符。

<demo src="./__demos__/prefix.vue"></demo>

## 生命周期与边界

### 镜像重定位生命周期

<demo src="./__demos__/mirror-lifecycle.vue"></demo>

样式从当前 textarea 所属窗口读取，旧观察器不能跨停用／激活提交；几何及样式读取返回后再次核对，防止重入卸载。停用／卸载的保留输入、弹层事件和 focus／blur 命令无效；禁用时不接受输入或 focus，活动实例仍允许 blur。公开方法签名、颜色和 CSS 变量不变。Maple 无对应 Mention 运行时，不新增移动端副本。

## 加载与等待

### 受控加载

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 业务显式控制的加载状态 | `boolean` | `false` |


通过 loading 显式展示等待；普通事件返回值不参与加载。before-* 守卫按其契约管理内部等待状态。

<demo src="./__demos__/loading.vue"></demo>

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### `<mention>` Props

| 参数名                    | 描述                 | 类型                                                                                                       |   默认值    | 版本   |
| ------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- | :---------: | :----- |
| model-value **(v-model)** | 绑定值               | `string`                                                                                                   |     `-`     |        |
| default-value             | 默认值（非受控状态） | `string`                                                                                                   |    `''`     |        |
| data                      | 用于自动补全的数据   | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined` |        |
| prefix                    | 触发自动补全的关键字 | `string \| string[]`                                                                                       |    `'@'`    |        |
| split                     | 选中项的前后分隔符   | `string`                                                                                                   |    `' '`    |        |
| type                      | 输入框或文本域       | `'input' \| 'textarea'`                                                                                    |  `'input'`  |        |
| disabled                  | 是否禁用             | `boolean`                                                                                                  |   `false`   |        |
| clearable                 | 是否允许清空输入框   | `boolean`                                                                                                  |   `false`   | 2.23.0 |

### `<mention>` Events

| 事件名 | 描述                                        | 参数                                                          | 版本   |
| ------ | ------------------------------------------- | ------------------------------------------------------------- | :----- |
| change | 值发生改变时触发                            | value: `string`                                               |        |
| search | 动态搜索时触发，2.47.0 版本增加 prefix 参数 | value: `string`<br>prefix: `string`                           |        |
| select | 选择下拉选项时触发                          | value: `string \| number \| Record<string, any> \| undefined` |        |
| clear  | 用户点击清除按钮时触发                      | -                                                             | 2.23.0 |
| focus  | 文本框获取焦点时触发                        | ev: `FocusEvent`                                              | 2.42.0 |
| blur   | 文本框失去焦点时触发                        | ev: `FocusEvent`                                              | 2.42.0 |

### `<mention>` Methods

| 方法名 | 描述             | 参数 | 返回值 | 版本   |
| ------ | ---------------- | ---- | ------ | :----- |
| focus  | 使输入框获取焦点 | -    | -      | 2.24.0 |
| blur   | 使输入框失去焦点 | -    | -      | 2.24.0 |

### `<mention>` Slots

| 插槽名 |   描述   | 参数               | 版本   |
| ------ | :------: | ------------------ | :----- |
| option | 选项内容 | data: `OptionInfo` | 2.13.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { MentionInstance } from "@cedar-design/ui";
```

Mention 复用 Input／Textarea 的排版和间距，测量镜像复制原生输入框计算样式。自定义请覆盖对应输入组件变量；不再提供无效的 mention-font-size、mention-line-height 或 mention-padding-*。

### Form 字段展示与确认

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

候选属性 `data` 支持数组或 `(query, { signal }) => 数组/Promise`。加载、取消、过期结果隔离由组件内部处理，失败触发 load-error。单选/多选分组初始化以空字符串查询，搜索型字段在查询变化时调用；树形字段根数据与原有 load-more 子节点懒加载独立。

input 与 textarea 都显示手动 loading 和当前显式 data 加载函数的等待。等待显示不会隐式禁用编辑；search 通知返回 Promise 不启动任务。旧数据请求不会清理新请求的指示器，load-error 保留原始错误。

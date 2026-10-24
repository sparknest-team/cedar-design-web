---
permalink: /components/mention/
---

# Mention

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 案例

### 基础用法

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

<demo src="./__demos__/basic.vue"></demo>

### 自定义触发字符

指定 `prefix` 来自定义触发字符。默认为 `@`，可以自定义为任意字符。

<demo src="./__demos__/prefix.vue"></demo>

### 镜像重定位生命周期

<demo src="./__demos__/mirror-lifecycle.vue"></demo>

样式从当前 textarea 所属窗口读取，旧观察器不能跨停用／激活提交；几何及样式读取返回后再次核对，防止重入卸载。停用／卸载的保留输入、弹层事件和 focus／blur 命令无效；禁用时不接受输入或 focus，活动实例仍允许 blur。公开方法签名、颜色和 CSS 变量不变。Maple 无对应 Mention 运行时，不新增移动端副本。

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<mention>` Props

| 参数名                    | 描述                 | 类型                                                            |  默认值   | 版本   |
| ------------------------- | -------------------- | --------------------------------------------------------------- | :-------: | :----- |
| model-value **(v-model)** | 绑定值               | `string`                                                        |    `-`    |        |
| default-value             | 默认值（非受控状态） | `string`                                                        |   `''`    |        |
| data                      | 用于自动补全的数据   | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]` |   `[]`    |        |
| prefix                    | 触发自动补全的关键字 | `string \| string[]`                                            |   `'@'`   |        |
| split                     | 选中项的前后分隔符   | `string`                                                        |   `' '`   |        |
| type                      | 输入框或文本域       | `'input' \| 'textarea'`                                         | `'input'` |        |
| disabled                  | 是否禁用             | `boolean`                                                       |  `false`  |        |
| clearable               | 是否允许清空输入框   | `boolean`                                                       |  `false`  | 2.23.0 |

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
import type { MentionInstance } from '@cedar-design/ui'
```

Mention 复用 Input／Textarea 的排版和间距，测量镜像复制原生输入框计算样式。自定义请覆盖对应输入组件变量；不再提供无效的 mention-font-size、mention-line-height 或 mention-padding-*。

### Form 字段展示与确认

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。

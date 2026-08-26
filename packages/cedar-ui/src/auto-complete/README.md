---
permalink: /components/auto-complete/
---

# AutoComplete

输入框的自动补全功能。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 尺寸

可调整尺寸大小。

<demo src="./__demos__/size.vue"></demo>

### 区分大小写

使用`strict`属性来指明在匹配时严格区分大小写。

<demo src="./__demos__/strict.vue"></demo>

### 弹出框的页脚

自定义弹出框的页脚

<demo src="./__demos__/footer.vue"></demo>

## API

### `<AutoComplete>` Props

| 参数名                    | 描述                                       | 类型                                                            | 默认值  |
| ------------------------- | ------------------------------------------ | --------------------------------------------------------------- | :-----: |
| model-value **(v-model)** | 绑定值                                     | `string`                                                        |   `-`   |
| default-value             | 默认值（非受控模式）                       | `string`                                                        |  `''`   |
| disabled                  | 是否禁用                                   | `boolean`                                                       | `false` |
| data                      | 用于自动提示的数据                         | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]` |  `[]`   |
| popup-container           | 弹出框的挂载容器                           | `string \| HTMLElement \| null \| undefined`                    |   `-`   |
| strict                    | 是否为严格校验模式                         | `boolean`                                                       | `false` |
| filter-option             | 自定义选项过滤方法                         | `FilterOption`                                                  | `true`  |
| trigger-props             | trigger 组件属性                           | `TriggerProps`                                                  |   `-`   |
| clearable               | 是否允许清空输入框                         | `boolean`                                                       | `false` |
| virtual-list-props        | 传递虚拟列表属性，传入此参数以开启虚拟滚动 | `VirtualListProps`                                              |  `'-'`  |

### `<AutoComplete>` Events

| 事件名                | 描述                   | 参数            |
| --------------------- | ---------------------- | --------------- |
| change                | 绑定值发生改变时触发   | value: `string` |
| search                | 用户搜索时触发         | value: `string` |
| select                | 选择选项时触发         | value: `string`, ev: `Event` |
| clear                 | 用户点击清除按钮时触发 | ev: `Event`     |
| dropdown-scroll       | 下拉框滚动时触发       | ev: `Event`     |
| dropdown-reach-bottom | 下拉框滚动到底部时触发 | ev: `Event`     |

### `<AutoComplete>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<AutoComplete>` Slots

| 插槽名 |     描述     | 参数               |
| ------ | :----------: | ------------------ |
| option |   选项内容   | data: `OptionInfo` |
| footer | 弹出框的页脚 | -                  |

## 类型定义

组件导出以下类型定义

```ts
import type { AutoCompleteProps } from '@cedarjs/ui'
```

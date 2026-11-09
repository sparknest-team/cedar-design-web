---
permalink: /components/overflow-list/
---

# OverflowList

## 基础示例

### 基础用法

折叠列表的基本使用方法。

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 折叠方向

通过 `from` 属性可以设置折叠的方向。

<demo src="./__demos__/from.vue"></demo>

## API

### OverflowList Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 有限非负数，向下取整并限制到项目总数；达到总数时全部保留，即使超出容器。非法值回退为 0。 | `number` | `0` |
| margin | 项目之间额外的逻辑间距，单位 px；保留项目自有 margin。有限非负数，非法值回退为 8。 | `number` | `8` |
| from | 折叠数据序列的起点或终点，不随 RTL 改变数据顺序。非法值回退为 end。 | `'start' \| 'end'` | `'end'` |

### OverflowList Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| change | 隐藏数量改变时通知；首次测量和重新测量可能触发。返回 Promise 不会等待。 | value: `number` |

### OverflowList Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 待测量的项目；每项需要一个可测量的元素根节点和稳定、唯一的 key。 | - |
| overflow | 折叠提示内容；number 为隐藏数量，默认显示 +number 标签。 | number: `number` |

### 测量与生命周期

容器需提供受约束的可用宽度。容器、可见项目大小和 min、margin、from 更新会重新测量；相同数量的项目替换也会按身份失效缓存。

隐藏项目会卸载，重新测量时可能暂时重新挂载。请把需要保留的输入或业务状态放在外部；这不是虚拟列表。无法观测已卸载项目的内部变化，内容身份改变时请更新 key。

服务端先输出全部项目，客户端取得布局后折叠。直接文本不计为项目；多根组件无法可靠测量时保留全部项目并在开发环境提示。

建议折叠提示保持稳定宽度；依赖 number 改变宽度的提示可能需要多轮测量和多次 change 通知。插槽只提供提示内容，不会自动创建弹出菜单。

两种方向都使用逻辑间距，不在外侧额外留白。项目自有 margin 会与间距相加。组件没有自有公开实例方法。

## Types

```ts
import type { OverflowListProps, OverflowListInstance } from '@cedar-design/ui'
```
## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `tag` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->

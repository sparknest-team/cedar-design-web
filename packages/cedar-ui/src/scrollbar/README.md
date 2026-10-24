---
permalink: /components/scrollbar/
---

# Scrollbar

## 案例

### 基础用法

滚动条组件基本用法。scrollbar 的默认插槽需要唯一的子元素。

<demo src="./__demos__/basic.vue"></demo>

### 滚动条类型

设置 `type` 属性改变滚动条类型，`track` 类型会显示滚动条轨道。

<demo src="./__demos__/type.vue"></demo>

### Thumb drag lifecycle / 滑块拖动生命周期

方向、max、thumbSize、ratio的有效值变化取消当前手势；仅替换等值data对象不取消连续拖动。最终偏移仍由父级新测量／setOffset结算。几何读取与响应式写入后重新核对会话，防止同步卸载后绑定或通知。停用／卸载保留按下／轨道点击／setOffset入口无效且不preventDefault；非左键不启动／跳转。当前setOffset夹取、拖动期间忽略外部setOffset和轨道一thumb-size步进保持。没有Pointer／touch拖动协议迁移或原生滚动回滚承诺。

<demo src="./__demos__/thumb-lifecycle.vue"></demo>

### Scrollbar consumer lifecycle / 滚动条消费者生命周期

scrollTo(0,0)／单轴0是合法坐标，不用真值判断；恢复零位置也同步thumb，不保留上次偏移。水平测量使用水平比例（旧代码误用了垂直比例）。零／无效视口用有限、非负thumb数据，不显示该零尺寸轴；正常最小thumb20px与track15px布局策略不变。禁用／隐藏轴的旧thumb命令无效，但禁用条不等于禁止内容或公开原生滚动。对象选项直接透传、不模拟JS动画；公开方法签名／样式变量不变。

<demo src="./__demos__/lifecycle.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<scrollbar>` Props

| 参数名      | 描述       | 类型                    |  默认值   |
| ----------- | ---------- | ----------------------- | :-------: |
| type        | 类型       | `'track' \| 'embed'`    | `'embed'` |
| outer-class | 外层的类名 | `string\|object\|array` |    `-`    |
| outer-style | 外层的样式 | `StyleValue`            |    `-`    |

### `<scrollbar>` Events

| 事件名 | 描述       | 参数 |
| ------ | ---------- | ---- |
| scroll | 滚动时触发 | -    |

### `<scrollbar>` Methods

| 方法名     | 描述     | 参数                                                             | 返回值 | 版本   |
| ---------- | -------- | ---------------------------------------------------------------- | ------ | :----- |
| scrollTo   | 滚动     | options: `number \| {left?: number;top?: number}`<br>y: `number` | -      |        |
| scrollTop  | 纵向滚动 | top: `number`                                                    | -      | 2.40.0 |
| scrollLeft | 横向滚动 | left: `number`                                                   | -      | 2.40.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { ScrollbarBoxInstance } from '@cedar-design/ui'
```

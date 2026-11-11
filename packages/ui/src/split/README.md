---
permalink: /components/split/
---

# Split

将面板分割成两部分。

## 基础示例

### 基础用法

将一个面板分割成两个可以调整宽度或高度的两部分。用`orientation`控制分割方向。

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 面板分割嵌套

面板分割可以嵌套使用。

<demo src="./__demos__/nested.vue"></demo>

## 尺寸与边界

`size/default-size/min/max` 接受有限非负数字、数字字符串、`px` 或 `%` 字符串。无单位值在 0–1 时表示比例，大于 1 时表示像素；`50%` 与 `0.5` 表示相同比例，`1px` 明确表示一个像素。不支持 `rem`、`calc()`、负值或非有限数；开发环境通过 Vue 属性校验提示，运行时非法 size/default-size 回退为 0.5、min 回退为 0、max 回退为 100%。

尺寸按当前排列轴的容器长度计算，并限制在容器内；min 大于 max 时以 min 为准，但仍不超过容器。比例尺寸随容器变化，像素尺寸在容器允许时保持原值。默认 6px 手柄由两个面板各承担一半，极限尺寸会裁掉该补偿，避免挤出容器。禁用时移除手柄及其全部补偿，保留两个面板和其中的输入草稿。

面板、ARIA 和拖拽/键盘共用有效尺寸。边界或容器变化使尺寸越界时，会请求一次 `update:size`；受控父组件拒绝该请求时，组件仍按有效边界显示，后续交互从该有效尺寸继续计算。合法范围内的受控调节仍由父组件决定是否接纳。更新值为比例数字或 px 字符串，与输入采用的单位类别一致；普通通知事件不等待 Promise。

## API

### Split Props

| 参数名             | 描述                                                              | 类型                         |     默认值     |
| ------------------ | ----------------------------------------------------------------- | ---------------------------- | :------------: |
| aria-label | 分隔手柄的可访问名称；空白时使用当前语言默认名称 | `string` | 当前语言 |
| component          | 分割框的 html 标签                                                | `string`                     |    `'div'`     |
| orientation          | 两个面板的排列轴向，默认 horizontal 表示左右面板；此时分割手柄自身为竖直 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size **(v-model)** | 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px     | `number\|string`             |      `-`       |
| default-size       | 默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px | `number\|string`             |     `0.5`      |
| min                | 最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px       | `number\|string`             |      `-`       |
| max                | 最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px       | `number\|string`             |      `-`       |
| disabled           | 是否禁用                                                          | `boolean`                    |    `false`     |

### Split Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| update:size | 拖拽、键盘或有效边界修正请求；用于 v-model:size | `size: number\|string` |
| move-start | 接受拖拽后开始通知；容器没有可测尺寸时不触发 | `event: MouseEvent` |
| moving | 有效拖拽移动通知 | `event: MouseEvent` |
| move-end | 释放或取消后的结束通知；同一次拖拽只通知一次 | `event: MouseEvent` |

指针拖拽参数可以是继承 MouseEvent 的 PointerEvent。没有原生终止事件时，结束参数使用按下事件。键盘只发 update:size，普通事件不收集或等待监听器返回的 Promise。

### Split Slots

| 插槽名              |       描述       | 参数 |
| ------------------- | :--------------: | ---- |
| first               | 第一个面板的内容 | -    |
| resize-trigger      |   伸缩杆的内容   | -    |
| resize-trigger-icon |   伸缩杆的图标   | -    |
| second              | 第二个面板的内容 | -    |

## Types

组件导出以下类型定义

```ts
import type { SplitInstance, SplitProps } from '@cedar-design/ui-vue'
import type { SplitProps as SubSplitProps } from '@cedar-design/ui-vue/split'
```

`--c-split-trigger-size-icon-wrapper`（默认6px）控制分隔手柄粗细：竖直手柄为宽度，水平手柄为高度；不改变沿面板方向的100%长度。

## 阅读方向与交互

Split 继承最近的原生 `dir`，横向第一个面板位于阅读起点。`size/defaultSize/min/max` 始终描述第一个面板，RTL 不会将尺寸变成 `1-size`，数字比例与 px 字符串保持原有单位。

横向 RTL 拖动时向左增大第一个面板；纵向仍向下增大。分隔条可聚焦，左右键按屏幕方向移动，纵向使用上下键，步长 10px，Shift 为 50px；Home/End 到达最小/最大边界。鼠标、触摸指针共用同一尺寸计算。切换方向、朝向、禁用或卸载会取消进行中的拖动并恢复原来的光标。合法尺寸在方向切换时保持原值；若新轴的容器或边界使其越界，则请求更新为有效尺寸。

## 拖动与取消

已开始的鼠标或指针拖动，在正常释放、取消、配置变化、KeepAlive 停用或卸载时，都只产生一次结束通知；先释放监听和光标，再通知。ResizeBox 使用 moving-start/moving-end，Split 使用 move-start/move-end，保留各自事件名称。没有原生终止鼠标事件时，结束参数使用该次按下事件。键盘离散调节只发值更新，不制造拖动开始或结束事件。结束表示手势停止，不回滚已应用的尺寸，也不等待监听器返回的 Promise。

## 手柄名称与实例

默认手柄名称由现有全局语言或 ConfigProvider 提供。使用 `aria-label` 为业务中的面板命名，例如 `aria-label="调整导航面板宽度"`；该名称应用到可聚焦的分隔手柄。自定义 resize-trigger 或 resize-trigger-icon 插槽保留组件提供的角色、范围、名称和键盘入口。

四个具名插槽均无作用域参数，组件不消费 default 插槽。SplitInstance 提供标准 Vue 实例类型，没有额外的 resize 等命令方法；使用属性和 v-model:size 驱动尺寸。SplitProps 包含真实属性及模型、拖动监听参数，根入口和子入口类型一致。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-split-trigger-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-split-trigger-font-size-icon` | `12px` | `font-size`, `margin` |
| `--c-split-trigger-icon-color` | `var(--c-color-text-1)` | `color` |
| `--c-split-trigger-size-icon-wrapper` | `6px` | `height`, `width` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-split-trigger-font-size-icon: 12px;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

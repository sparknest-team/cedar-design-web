---
permalink: /components/scrollbar/
---

# Scrollbar

## 基础示例

### 基础用法

滚动条组件基本用法。scrollbar 的默认插槽需要唯一的子元素。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 滚动条类型

设置 `type` 属性改变滚动条类型，`track` 类型会显示滚动条轨道。

<demo src="./__demos__/type.vue"></demo>

### 视口与轨道

原生属性、style 和 tabindex 等应用到内层滚动视口；outer-style/outer-class 应用到外层容器。外层可以比内层更宽，轨道仍沿内层视口定位并按同一长度计算滑块比例，不延伸到外层空白。track 模式在视口外预留轨道空间，embed 模式覆盖视口边缘；双轴交角和动态轴切换会重新测量，保留内容节点与原生滚动位置。轨道粗细读取现有 --c-scrollbar-track-size 的实际 CSS 尺寸，主题变化后重新计算。

```vue
<c-scrollbar
  outer-style="width: 100%"
  style="width: 300px; max-width: 100%; height: 200px; overflow: auto"
  tabindex="0"
  role="region"
  aria-label="可滚动示例"
>
  <div style="width: 900px; height: 600px">Content</div>
</c-scrollbar>
```

## 生命周期与边界

### Thumb drag lifecycle / 滑块拖动生命周期

拖动期间改变方向或滑块尺寸会结束当前拖动；只替换内容相同的 data 对象不会中断。setOffset 将偏移限制在有效范围内，拖动期间调用不会覆盖正在进行的拖动。非鼠标主键不启动操作，轨道点击按一个滑块长度步进。

<demo src="./__demos__/thumb-lifecycle.vue"></demo>

### Scrollbar consumer lifecycle / 滚动条消费者生命周期

scrollTo(0,0)／单轴0是合法坐标，不用真值判断；恢复零位置也同步thumb，不保留上次偏移。水平滚动按横向可滚动范围计算。零／无效视口用有限、非负thumb数据，不显示该零尺寸轴；正常最小thumb20px与track15px布局策略不变。禁用／隐藏轴的旧thumb命令无效，但禁用条不等于禁止内容或公开原生滚动。对象选项直接透传、不模拟JS动画；公开方法签名／样式变量不变。

<demo src="./__demos__/lifecycle.vue"></demo>

## API

### Scrollbar Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 轨道显示方式 | `'track' \| 'embed'` | `'embed'` |
| outer-class | 外层类名，支持字符串、布尔类名对象及数组 | `ClassName` | `undefined` |
| outer-style | Vue 样式值，包括 CSS 字符串、对象、数组和条件 false | `StyleValue` | `undefined` |

三个属性均可省略。hide、disable-horizontal、disable-vertical 是内部组合开关，不属于公开 ScrollbarProps。隐藏装饰轴不禁止原生内容滚动或公开滚动方法。

### Scrollbar Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| scroll | 内层视口原生滚动通知，保留原始 Event；不等待监听器 Promise | `event: Event` |

### Scrollbar Slots

| 插槽名 | 描述 | 参数 |
| --- | --- | --- |
| default | 滚动内容；提供一个根元素供内容尺寸观察 | — |

### Scrollbar Methods

| 方法名 | 描述 | 参数 | 返回值 |
| --- | --- | --- | --- |
| scrollTo | 支持坐标或原生选项；省略数字坐标时按 0 处理 | `options?: number \| ScrollToOptions, y?: number` | `void` |
| scrollTop | 设置原生纵向位置，0 有效 | `top: number` | `void` |
| scrollLeft | 设置原生横向位置，0 和原生 RTL 负值有效 | `left: number` | `void` |

对象选项透传原生 Element.scrollTo，可使用 left、top 和 behavior。动画及取消遵循浏览器规则，组件不增加 JS 动画或完成 Promise。停用或卸载后，保留的实例命令不执行滚动。

## Types

```ts
import Scrollbar from '@cedar-design/ui/scrollbar'
import type { ScrollbarProps, ScrollbarInstance } from '@cedar-design/ui'
import type { ScrollbarProps as SubScrollbarProps } from '@cedar-design/ui/scrollbar'
const options: ScrollbarProps = {
  outerClass: ['messages', { active: true }],
  outerStyle: [{ maxWidth: '100%' }, false],
  onScroll: (event: Event) => console.info(event.target),
}
```

### 焦点与阅读方向

id、dir、tabindex、role、aria-label 和普通 class/style 传到内层视口。需要键盘滚动时为视口提供 tabindex=0 和可读名称，聚焦后使用浏览器原生方向键或翻页键。交互内容保留各自的焦点和按键行为。

横向公开坐标采用浏览器的原生 scrollLeft，不转换为统一正数。RTL 中 Chromium 可出现负值；将原生坐标传给 scrollLeft/scrollTo 即可，视觉滑块与原生坐标同步。不要把滑块内部偏移当作公开滚动坐标。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-scrollbar-thumb-bar-bg-color` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-scrollbar-thumb-bar-bg-color-hover` | `var(--c-sys-color-border-strong)` | `background-color` |
| `--c-scrollbar-thumb-bar-border-radius` | `6px` | `border-radius` |
| `--c-scrollbar-thumb-bar-size` | `9px` | `height`, `margin`, `width` |
| `--c-scrollbar-track-bg-color` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-scrollbar-track-border-color` | `var(--c-sys-color-border-subtle)` | `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-scrollbar-track-border-size` | `1px` | `border-bottom`, `border-left`, `border-right`, `border-top`, `margin`, `right` |
| `--c-scrollbar-track-size` | `15px` | `height`, `margin`, `width` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-scrollbar-thumb-bar-bg-color: var(--c-sys-color-border-default);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

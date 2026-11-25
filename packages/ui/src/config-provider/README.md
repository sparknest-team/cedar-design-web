---
permalink: /components/config-provider/
---

# ConfigProvider

为子组件提供语言、尺寸、方向及公共内容配置；默认只影响子树。Maple 将语言与样式分别交给 LocaleProvider、ThemeProvider，不提供同名 ConfigProvider。

## 基础示例

### 基础用法

通过 Provider 为子组件设置统一尺寸，点击按钮在 sm / lg 之间切换；内部 Input 和 Button 无需重复声明 size。

<demo src="./__demos__/basic.vue"></demo>

## 公共内容

### 空状态与加载指示

`empty`、`loading` 由支持配置的后代组件消费，不会直接显示在 Provider 中。以下空的内层 Provider 继承公共内容；组件自己的内容或 icon 插槽优先。empty 的 component 是消费方提供的名称，不保证等于公开组件名。

<demo src="./__demos__/content-overrides.vue"></demo>

主题统一交给 [ThemeProvider](/components/theme-provider/)；ConfigProvider 只负责语言、尺寸、方向与公共内容。

## API

### ConfigProvider Props

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| prefix-cls | 省略继承父配置，根回退 c；自定义前缀需要对应构建样式 | `string` | — |
| locale | 完整语言包；省略继承父配置，整条链未指定时使用全局语言 | `CedarLang` | — |
| size | 后代默认尺寸；省略继承父配置，组件自己的 size 优先 | `ComponentSize` (`xs` / `sm` / `md` / `lg` / `xl`) | — |
| global | setup 时选择应用级注入；不是动态开关，需用于与应用同寿命的根配置 | `boolean` | `false` |
| update-at-scroll | 省略继承父配置，根回退 false；仅由支持该配置的弹层消费 | `boolean` | — |
| scroll-to-close | 省略继承父配置，根回退 false；不会主动关闭所有弹层 | `boolean` | — |
| dir | 阅读方向；省略时继承来源作用域。物理 left/right 方位保持原意。 | `ReadingDirection` (`ltr` / `rtl`) | — |

### ConfigProvider Events

无声明事件。原生监听器可透传到承载方向的 div，不代表组件声明了 click 事件，也不会收集监听器返回的 Promise。无公开业务实例方法。

### ConfigProvider Slots

| 插槽名 | 说明 | 参数 |
| ------- | ---- | ---- |
| default | 子树内容 | — |
| empty | 支持该配置的后代组件的空状态内容 | `{ component: string }` |
| loading | Loading 消费的公共指示节点；本地 icon 优先 | — |

嵌套时，省略的 prefix-cls、locale、size、update-at-scroll、scroll-to-close 继承最近父配置，显式 false 保留覆盖能力；dir 沿阅读方向作用域继承。locale 仍为完整语言包，不深度混合部分包。尺寸、语言和滚动偏好随配置更新；prefix-cls 建议在初始化时固定，切换前缀需要匹配样式并重建子树。

empty、loading 按插槽分别继承，支持运行时添加、移除和回退；default 子树只属于当前 Provider，不继承父内容。Select、Cascader 和 TreeSelect 在渲染时读取当前空状态，保留完整节点数组，组件本地 empty 插槽优先。theme 仍只由显式设置的 Provider 接管文档主题，空嵌套不会新增主题所有者。

global 只在 setup 时选择注入位置，不能运行时切换；其他配置字段在挂载期间保持响应式。global=true 为应用级安装式写入，不随 Provider 卸载自动恢复，也不会使已完成注入的外部组件自动切换。请用于与应用同寿命的根配置；局部或条件内容使用默认的 global=false。这里没有多个全局提供者的自动回收优先级。

## Types

组件导出以下类型定义

```ts
import type { ConfigProviderProps, ConfigProviderInstance, ConfigProviderSlots } from '@cedar-design/ui-vue'
```

组件子入口也提供上述类型，以及 configProviderProps。内部注入上下文不是公开配置方法。


## 阅读方向

使用 `<c-config-provider dir="rtl">` 设置局部 RTL；省略 dir 时继承父级，可嵌套 `dir="ltr"` 切回 LTR。普通原生 DOM dir 容器同样有效。Provider 使用 display: contents 的 div 承载方向，不增加布局盒子；请放在允许 div 的 HTML 上下文中。它不会修改整个 document。发布前将原 rtl 布尔配置统一收敛为 dir；明确表示物理左右的方位 API 保持原意。
## CSS Variables

原生 `dir="auto"` 或 `<bdi>` 容器中的控件会跟随浏览器计算的文本方向。输入框作为弹层参考元素时，键入文字会更新弹层方向。脚本直接修改 `input.value` 或 `textarea.value` 时，共享定时器会在后续检查中同步方向。封闭 ShadowRoot 的内部插槽设置了方向时，请在传入插槽的元素上同步设置原生 `dir`。

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->

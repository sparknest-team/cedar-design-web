---
permalink: /components/layout/
---

# Layout

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 基础示例

### 基本用法

典型的页面布局

<demo src="./__demos__/basic.vue"></demo>

## 布局与排列

### 固定头尾与独立滚动

设置容器高度，对内容区域开启 `scrollable`。`scrollTo` 支持坐标和原生滚动选项。

<demo src="./__demos__/scroll.vue"></demo>

### 侧栏位置与折叠模式

`placement` 自动调整侧栏位置和箭头方向。`width` 模式改变内容可用宽度，`transform` 模式保留内容宽度。零宽度折叠时仍保留展开按钮，内部内容不可聚焦。

<demo src="./__demos__/sider-options.vue"></demo>

## 内容与展示

### 可伸缩侧边栏

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：resize-directions。

<demo src="./__demos__/resize.vue"></demo>

### 侧栏折叠

通过 `v-model:collapsed` 控制折叠，也可以使用 `default-collapsed` 设置非受控初始状态。

<demo src="./__demos__/collapse.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容继承阅读方向。Sider 的 placement=left/right 保持物理侧，折叠和 ResizeBox 的物理手柄语义不反转；标题与内容本身可使用局部 dir。

局部亮暗主题统一由外层 `<c-theme-provider theme="dark">` 设置；本组件不再提供 theme 属性。嵌套区域可显式设置 theme="light"，库内弹层跟随所属 Provider。

## API

### Layout Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollable | 自身原生滚动；需约束高度 | `boolean` | `false` |
| has-sider | 强制横向侧栏布局；可用于 SSR，挂载后也自动识别 Sider | `boolean` | `false` |

### LayoutHeader Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 显示底边框 | `boolean` | `false` |

### LayoutContent Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollable | 内容区自身原生滚动；需约束高度 | `boolean` | `false` |

### LayoutFooter Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 显示顶边框 | `boolean` | `false` |

### LayoutSider Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 显示与内容相邻的边框 | `boolean` | `false` |
| placement | 物理侧栏位置；RTL 不交换 left/right | `'left' \| 'right'` | `'left'` |
| collapse-mode | width 改可用宽度，transform 保留展开内容宽度并平移裁切 | `'width' \| 'transform'` | `'width'` |
| collapsed | 提供时受控，等待父级回写 | `boolean` | `undefined` |
| default-collapsed | 非受控初始折叠状态 | `boolean` | `false` |
| collapsible | 显示默认折叠触发器，不禁止外部或响应式折叠 | `boolean` | `false` |
| width | 展开基准宽度；有限非负像素数或非空 CSS 宽度字符串 | `number \| string` | `200` |
| collapsed-width | 折叠宽度；有限非负数，0 保留恢复入口 | `number` | `48` |
| reverse-arrow | 反转默认箭头；right 位置也自动反转 | `boolean` | `false` |
| breakpoint | 挂载后按窄屏状态请求折叠，动态配置立即重算 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `undefined` |
| resize-directions | 用 ResizeBox 替换默认 div；物理边数组，折叠时移除手柄 | `ResizeBoxDirection[]`<br>`ResizeBoxDirection: 'left' \| 'right' \| 'bottom' \| 'top'` | `undefined` |
| hide-trigger | 隐藏默认触发器，调用方提供恢复入口 | `boolean` | `false` |

### LayoutSider Events

| 组件 | 事件 | 参数与含义 |
| --- | --- | --- |
| Layout / LayoutContent / LayoutSider | scroll | 原生 Event，滚动时通知 |
| LayoutSider | update:collapsed | boolean，折叠状态更新请求 |
| LayoutSider | collapse | boolean 与 'clickTrigger' / 'responsive'，请求来源 |
| LayoutSider | breakpoint | boolean，当前环境是否位于折叠侧，独立于受控状态 |

### LayoutSider Slots

| 组件 | 插槽 | 参数与含义 |
| --- | --- | --- |
| Layout / LayoutHeader / LayoutContent / LayoutFooter / LayoutSider | default | 无参数的布局内容 |
| LayoutSider | trigger | 作用域 { collapsed: boolean }；位于原生按钮内部，不嵌套另一个按钮 |

### LayoutSider Methods

Layout、LayoutContent、LayoutSider 提供 scrollTo(options: ScrollToOptions) 与 scrollTo(x: number, y: number)；Header/Footer 无专用实例方法。

## Types

组件导出以下类型定义

```ts
import type { LayoutProps } from '@cedar-design/ui-vue'
```

### 新增布局能力

| 组件 | 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| Content | scrollable | boolean | false | 自身作为原生滚动容器 |
| Header / Footer / Sider | bordered | boolean | false | 显示与内容相邻的边框 |
| Sider | placement | 'left' / 'right' | 'left' | 侧栏所在方向，自动处理箭头；reverse-arrow 仍兼容 |
| Sider | collapse-mode | 'width' / 'transform' | 'width' | 折叠时改变内容宽度或移动内容 |

Layout、Content、Sider 均提供 `scroll` 事件（参数为原生 Event）及 `scrollTo(options: ScrollToOptions)` / `scrollTo(x: number, y: number)` 方法。Sider 默认在内部内容节点滚动。`width` 支持数字像素或 CSS 长度字符串；百分比宽度与 transform 模式组合不推荐，建议用 px/rem 等确定长度。

折叠按钮使用原生 button，支持 Tab、Enter 和空格；`collapsed-width="0"` 时隐藏区域设为 inert，展开入口保留在侧栏边缘。自定义 trigger 插槽应使用展示内容，避免嵌套按钮。

## 侧栏响应式

breakpoint 在挂载后订阅视口，SSR 保留 collapsed 或 default-collapsed 的初始状态。动态修改断点会立即按当前视口重算；移除断点停止自动响应并保留当前折叠状态。xs 在视口不大于 575px 时请求折叠，其他断点在低于相应最小宽度时请求折叠，方向统一为窄屏折叠。

初次订阅及断点配置变更时，breakpoint 通知当前窄屏状态；后续匹配状态改变时继续通知，独立于当前 collapsed。仅当目标折叠状态不同于当前状态时，才请求 update:collapsed 和 collapse(..., responsive)。受控模式等待父级回写，父级拒绝请求时仍会收到环境变化通知。通知事件不等待监听器返回的 Promise。

## 可伸缩侧栏的宽度归属

提供 resize-directions 时，Sider 统一管理当前宽度：展开时保留最近一次调整后的宽度，折叠时使用 collapsed-width 并移除伸缩手柄，重新展开恢复最近的展开宽度。折叠/展开保留内容节点和输入状态，collapsed-width=0 仍可通过内容区之外的恢复按钮展开。width 的值真正变化时会清除临时调整，改用新的数字或 CSS 长度；受控 collapsed 仍等待父级回写。transform 模式的内容宽度和位移同步采用最近的展开宽度。

开发环境使用 Vue 属性校验诊断枚举、非有限/负宽度及重复/未知伸缩边；运行时忽略无效方向并去重，无效 width/collapsed-width 回退 200/48，无效主题/位置回退 light/left，无效断点不订阅。默认触发器名称读取 locale.layout.expandSider/collapseSider，支持全局 useLocale 和 ConfigProvider.locale。公开 Props 从真实组件提取，包含严格的事件监听参数，resizeDirections 采用 ResizeBoxDirection[]。

```ts
import type { LayoutProps, SiderProps } from '@cedar-design/ui-vue'
const layout: LayoutProps = { onScroll: (event) => event.preventDefault() }
const sider: SiderProps = { resizeDirections: ['right'], onCollapse: (collapsed, reason) => console.log(collapsed, reason) }
```

## CSS Variables

侧栏文字、背景和折叠按钮随当前主题变化。名称带 `light` 的变量在亮色和暗色主题中均可覆盖。通过 `--c-layout-sider-light-box-shadow` 定制侧栏阴影，设为 `none` 可关闭阴影；边框由 `bordered` 和 `--c-layout-border-color` 独立控制。

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-layout-border-color` | `var(--c-color-border-2)` | `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-layout-focus-color` | `var(--c-sys-color-content-brand)` | `outline` |
| `--c-layout-font-color` | `var(--c-color-text-1)` | `color` |
| `--c-layout-sider-background-light` | `var(--c-color-bg-2)` | `background` |
| `--c-layout-sider-light-box-shadow` | `0 2px 5px 0 rgba(0, 0, 0, 0.08)` | `box-shadow` |
| `--c-layout-trigger-height` | `var(--c-size-12)` | `height`, `padding-bottom`, `width` |
| `--c-layout-trigger-light-border-color` | `var(--c-color-bg-5)` | `border-top` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-layout-border-color: var(--c-color-border-2);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

---
permalink: /components/tabs/
---

# Tabs 标签页

导航与内容使用同一套 API，PC 和移动端通过主题变量保留视觉密度差异。

## 案例

### 最简单用法

最简单的写法只需要在 `Tabs` 中声明带 `title` 的 `TabPane`，导航与内容会自动生成。

<demo src="./__demos__/basic.vue"></demo>

### 仅导航

只需要标签导航时，无需编写内容组件；直接在 `TabsNavs` 中声明 `TabNav` 即可。

<demo src="./__demos__/nav-content.vue"></demo>

### 完整组合

需要分别控制导航和内容时，可以组合使用 `TabsNavs`、`TabNav`、`TabsItems` 和 `TabItem`。

<demo src="./__demos__/same-source.vue"></demo>

### 外观变体与尺寸

通过 `variant`、`size` 和 `orientation` 切换标签页的外观、尺寸与排列方向。

<demo src="./__demos__/type.vue"></demo>

### 方向与指示器位置

通过 `orientation` 设置横向或纵向布局，使用 `indicator-position` 调整指示器所在方向；还可以交换
`TabsNavs` 与 `TabsItems` 的声明顺序，将导航放在内容的另一侧。

<demo src="./__demos__/position.vue"></demo>

### 动态增删标签

编辑模式支持增加和关闭标签，标签数据仍由使用者维护。

<demo src="./__demos__/editable.vue"></demo>

### 图标标签

通过 `icon` 插槽为标签添加图标，配合 `item-vertical` 可以让图标与文字纵向排列。

<demo src="./__demos__/icon-tabs.vue"></demo>

### 按需挂载内容

开启 `lazy-load` 后，面板会在第一次激活时挂载，适合初始化成本较高的内容。

<demo src="./__demos__/lazy-load.vue"></demo>

### 导航附加内容

使用 `TabsNavs` 的 `prefix`、`suffix` 和 `add-icon` 插槽扩展导航区域。

<demo src="./__demos__/suffix.vue"></demo>

### 切换触发方式

`trigger` 支持点击或悬浮切换；触摸设备始终使用点击操作。

<demo src="./__demos__/trigger.vue"></demo>

### 自定义内容间距

通过 `item-style` 调整面板内容间距，也可以直接为 `TabsNavs` 设置导航区域样式。

<demo src="./__demos__/no-padding.vue"></demo>

### 外观组合

适用于同级内容之间的切换。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### Tabs Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| active | `string / number` | `undefined` | 当前选中 key；提供时受控 |
| default-active | `string / number` | `undefined` | 非受控初值，省略选首个可用项 |
| variant | `line / card / outline / plain / capsule / enclosed` | `line` | 视觉变体 |
| size | `xs / sm / md / lg / xl` | `全局值或 md` | 尺寸 |
| orientation | `horizontal / vertical` | `horizontal` | 导航方向 |
| indicator-position | `normal / reverse` | `normal` | 指示器在内容侧或相反侧 |
| editable | `boolean` | `false` | 允许关闭标签 |
| show-add-button | `boolean` | `false` | 编辑模式显示新增按钮 |
| auto-switch | `boolean` | `false` | 新增后切换最后一个可用标签 |
| lazy-load | `boolean` | `false` | 首次激活挂载 |
| destroy-on-hide | `boolean` | `false` | 隐藏即卸载内容 |
| justify | `boolean` | `false` | 水平方向撑满容器高度 |
| animation | `boolean` | `false` | 内容淡入动画 |
| item-class | `string / object / array` | `undefined` | 每页内容内层类名，合并内置类名 |
| item-style | `StyleValue` | `undefined` | 每页内容内层样式，支持字符串、对象和数组 |
| item-wrapper-class | `string / object / array` | `undefined` | 每页内容外层容器类名，合并内置类名 |
| item-wrapper-style | `StyleValue` | `undefined` | 每页内容外层容器样式，支持字符串、对象和数组 |
| tab-class | `string / object / array` | `undefined` | 导航标签外层（含标题与关闭按钮）类名，合并内置类名 |
| tab-style | `StyleValue` | `undefined` | 导航标签外层（含标题与关闭按钮）样式，支持字符串、对象和数组 |
| hide-content | `boolean` | `false` | 隐藏内容区域 |
| trigger | `click / hover` | `click` | 鼠标触发方式，触摸始终点击 |
| scroll-position | `start / end / center / auto / number` | `auto` | 选中标签滚动位置，数字为起点偏移 |
| scroll-buttons | `boolean / auto` | `auto` | 溢出时显示箭头，auto 在触摸设备隐藏 |
| activation-mode | `automatic / manual` | `automatic` | 方向键是否立即选中 |
| swipeable | `boolean` | `false` | 内容横向触摸切换；不循环 |

### Tabs Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| update:active | key: string / number | 请求更新选中值 |
| change | key: string / number | 选择不同可用项时通知；受控模式仍由父级更新 active |
| tab-click | key, event: Event | 点击可用项，重复点击仍触发；hover/方向键/滑动不触发 |
| add | event: Event | 请求增加标签；由使用者修改数据 |
| delete | key, event: Event | 请求删除标签；由使用者修改数据 |

### TabPane Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | undefined | 导航标题 |
| disabled | boolean | false | 禁止选择和关闭 |
| closable | boolean | true | editable 模式显示关闭按钮 |
| item-vertical | boolean | false | 图标文字垂直布局 |
| lazy-load | boolean | undefined | 继承 Tabs，显式 false 可覆盖 |
| destroy-on-hide | boolean | undefined | 继承 Tabs，显式 false 可覆盖 |

### TabNav Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | undefined | 标题 |
| disabled | boolean | false | 禁止选择和关闭 |
| closable | boolean | true | editable 模式显示关闭按钮 |
| item-vertical | boolean | false | 图标文字垂直布局 |

TabNav 与 TabItem 使用同一个 Vue `key`，必须为字符串或数字，在同组内唯一。不要省略 key；不要混用 `1` 与 `'1'`。

### TabItem Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| lazy-load | boolean | undefined | 继承 Tabs，显式 false 可覆盖 |
| destroy-on-hide | boolean | undefined | 继承 Tabs，显式 false 可覆盖 |

未激活的 panel 始终带 hidden，内部状态是否保留由上述属性决定。destroy-on-hide 优先于 lazy-load；active 内容始终挂载。TabsNavs 和 TabsItems 没有业务 Props。

### Slots

| 组件 | 插槽 | 说明 |
| --- | --- | --- |
| Tabs | default | TabPane 列表；或高级组合所需的 TabsNavs 与 TabsItems |
| TabPane | default / title | 面板内容 / 自定义导航标题 |
| TabsNavs | default | TabNav 列表 |
| TabsNavs | prefix / suffix / add-icon | 导航前后附加区、新增图标 |
| TabNav | title / default / icon | title 插槽或默认插槽为自定义标题；icon 为图标 |
| TabsItems | default | TabItem 列表 |
| TabItem | default | 面板内容 |

### Expose

`TabsNavs.resize(): void` 重新测量溢出并将选中标签滚入可见区域。尺寸变化有 ResizeObserver 自动监听。

### 键盘与方向

方向键跳过禁用项并循环；Home/End 到首尾；可编辑标签按 Delete 请求关闭。horizontal 使用左右键，vertical 使用上下键。manual 模式只移动焦点，Enter/Space 通过原生 button 激活。使用 `dir="rtl"` 支持从右向左布局。TabsNavs 可传 `aria-label` 为导航命名。

### 类型

导出 TabsKey、TabsVariant、TabsTrigger、TabsIndicatorPosition、TabsScrollPosition、TabsActivationMode，以及六组件对应的 Props / Instance / 运行时 props / `_XxxComponent`。同一 props 定义用于两端。

## 自定义内部样式

<demo src="./__demos__/custom-style.vue"></demo>

六个样式属性统一配置在 Tabs 上，对所有对应项生效。自定义类名与内置类名合并；内联样式可覆盖默认间距。`item-wrapper-*` 对应 role="tabpanel" 外层，`item-*` 对应实际内容内层，`tab-*` 对应导航标签外层。

内容间距使用 `item-style`，导航整体间距可通过 TabsNavs 的 `style` 或 CSS token 调整。

## 样式变量

相同 token 后缀在两端意义一致，只有默认值不同。完整对比见 Cedar Tabs comparison.md。

| 变量 | 默认值 |
| --- | --- |
| `--c-tabs-background` | `var(--c-sys-color-surface-default)` |
| `--c-tabs-title-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tabs-title-text-color-active` | `var(--c-sys-color-content-brand)` |
| `--c-tabs-title-text-color-disabled` | `var(--c-sys-color-content-disabled)` |
| `--c-tabs-muted-background` | `var(--c-sys-color-surface-muted)` |
| `--c-tabs-border-color` | `var(--c-sys-color-border-default)` |
| `--c-tabs-hover-background` | `var(--c-sys-color-state-hover)` |
| `--c-tabs-nav-gap` | `var(--c-sys-space-2)` |
| `--c-tabs-tab-gap` | `var(--c-sys-space-2)` |
| `--c-tabs-header-padding` | `var(--c-sys-space-5)` |
| `--c-tabs-control-height` | `var(--c-sys-control-height-xs)` |
| `--c-tabs-touch-target` | `var(--c-sys-control-touch-target)` |
| `--c-tabs-border-width` | `1px` |
| `--c-tabs-focus-width` | `2px` |
| `--c-tabs-focus-offset` | `-3px` |
| `--c-tabs-radius` | `var(--c-sys-radius-md)` |
| `--c-tabs-icon-gap` | `var(--c-sys-space-3)` |
| `--c-tabs-content-padding` | `var(--c-sys-space-6)` |
| `--c-tabs-indicator-size` | `2px` |
| `--c-tabs-indicator-radius` | `1px` |
| `--c-tabs-animation-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-tabs-active-font-weight` | `var(--c-sys-font-weight-semibold)` |
| `--c-tabs-group-padding` | `var(--c-sys-space-2)` |
| `--c-tabs-capsule-radius` | `var(--c-sys-radius-pill)` |
| `--c-tabs-active-shadow` | `0 1px 3px rgba(0, 0, 0, 0.12)` |
| `--c-tabs-size-xs-tab-height` | `var(--c-sys-control-height-xs)` |
| `--c-tabs-size-xs-tab-padding` | `var(--c-sys-space-2) var(--c-sys-space-4)` |
| `--c-tabs-size-xs-tab-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tabs-size-sm-tab-height` | `var(--c-sys-control-height-sm)` |
| `--c-tabs-size-sm-tab-padding` | `var(--c-sys-space-3) var(--c-sys-space-5)` |
| `--c-tabs-size-sm-tab-font-size` | `var(--c-sys-font-size-sm)` |
| `--c-tabs-size-md-tab-height` | `var(--c-sys-control-height-md)` |
| `--c-tabs-size-md-tab-padding` | `var(--c-sys-space-4) var(--c-sys-space-6)` |
| `--c-tabs-size-md-tab-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tabs-size-lg-tab-height` | `var(--c-sys-control-height-lg)` |
| `--c-tabs-size-lg-tab-padding` | `10px var(--c-sys-space-7)` |
| `--c-tabs-size-lg-tab-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-tabs-size-xl-tab-height` | `var(--c-sys-control-height-xl)` |
| `--c-tabs-size-xl-tab-padding` | `var(--c-sys-space-5) var(--c-sys-space-8)` |
| `--c-tabs-size-xl-tab-font-size` | `var(--c-sys-font-size-xl)` |

[全面对比与设计依据](./comparison.md)

## 独立同源与公开类型

两端独立维护 Tabs、TabPane、TabsNavs、TabNav、TabsItems、TabItem 六件套，不跨库引用运行时，也不使用通用平台配置。size 的 xs/sm/md/lg/xl 五档均已实现。Cedar 继承 ConfigProvider 的 size/rtl；Maple 默认 md，支持 setPropsDefaults、显式 size 与 DOM dir。面板通过原生 hidden 显隐，InfiniteScroll 直接观察可见性，不再依赖旧面板注册。

公开类型包括 TabsEmits、TabsSlots、TabPaneSlots、TabsNavsSlots、TabNavSlots、TabsItemsSlots、TabItemSlots、TabsNavsExpose。自有实例方法仅 TabsNavs.resize()；其余成员没有自有命令式方法或通知事件，选择及编辑事件归属 Tabs。

# 对齐基础工具及 Trigger 状态/节点契约

总体计划：`design-ui/refactors/foundation-alignment/plan.md`。当前实施范围是首批基础契约；不宣称 Trigger 定位/样式/完整 API 或所有上层组件已同源。

- useVModel：显式 emit 默认收到 `update:key`；无 emit 的回调模式仍为 `onUpdate:key`；显式 eventName 优先；保留 passive 模式。
- useEventListener：ref/getter 动态切换保存真实绑定目标；KeepAlive 停用解绑、激活恢复；清理幂等，SSR 返回可调用清理函数。
- useClickOutside：使用 composedPath 识别 Shadow DOM 内点击。
- Trigger：两端使用独立复制的 state/reference 实现，open 是严格受控状态，defaultOpen 仅初始化非受控状态；更新请求按 update:open → open-change 顺序派发，实际状态变化才产生生命周期。外部值更新不回声。延迟请求在反向请求、外部状态改变、禁用和卸载时取消。
- 节点解析支持 HTML/SVG、组件/Fragment 根节点，不覆盖调用者 ref。事件直接绑定解析后的 DOM，换节点/卸载解绑。
- Maple Trigger 和 Tooltip 新增 defaultOpen；Tooltip 的 open 缺省由 false 改 undefined，Popover 同步传递 defaultOpen。Maple Reference/getReference 类型扩展至 SVGElement。

兼容性：原来以 `open=true` 初始化后依靠内部关闭的 Maple 调用者，改为 `defaultOpen=true` 或通过 v-model 接受状态请求。已修改对应交互测试，未用更新快照掩盖受控行为变化。Menu/Select/Cascader 的 v-model 调用方式保留。

## 扩展实施：Trigger、弹层、滚动锁与包入口

统一底层 Trigger 默认 hover、100 ms enter/leave、再次点击可关闭，包装组件显式保留平台原默认；新增共同枚举、事件控制器、外部目标解析和公开方法。外部关闭统一 click，加入顶层事件快照、嵌套 Teleport 和 Escape 焦点恢复。

引入独立复制的元素锁计数，接入已有 useOverflow/useLock 和全部静态调用方，保留平台过渡结束释放时机。删除无消费者的旧内部 context 与锁函数。

组件子路径作为独立构建入口，保证公开 props 的 re-export 不被根入口优化裁剪。新增配对行为用例、直接引用门禁、ESM/CJS 构建回归和真浏览器基础验证。详细默认值迁移与剩余阶段见 design-ui/refactors/foundation-alignment/migration.md。

## 渲染基础第三批

两端独立复制 popup/render/render-props/arrow。共同 DOM 为定位层、动画层、内容层及装饰箭头。Trigger 统一 unmountOnClose=true，离场结束后卸载；false 保留内容状态。Maple Menu/MenuChildren/Select/Cascader 显式 false，Tooltip/Popover 包装层默认 false 并允许按需配置。Maple 新增 showArrow/contentClass/contentStyle/arrowClass/arrowStyle/duration，Cedar 新增 popupClass。过渡取消不派发完成事件，默认打开支持 appear 完成通知。Maple Popover 外观类迁移到内容层，popupClass/popupStyle 仍控制定位层。公开文档、调用清单、样式入口和回归同步修改。

## Menu 核心第四批

两端独立复制 menu/selection 与 menu/keyboard；选项状态脱离 Select provider，原生视觉组件继续独立适配。Cedar 新增 options/fieldNames/multiple 及公开 MenuOptionData/MenuFieldNames；保留插槽、分组、MenuSubmenu 与旧内部 context 兼容入口。Maple 删除无消费者的旧 Menu provider 文件，并保留 options、事件参数、菜单方法和外观。

选择严格受控，更新事件先于 select；多选分支联动完整选项树，跳过禁用子树，保留异步暂缺选项。键盘按面板导航，Escape 只关闭一层；Trigger 新增 focusReference 复用焦点恢复抑制，避免 focus 菜单关闭后重开。调用方、样式依赖、文档、公开类型与构建回归同步验收。

## Tooltip/Popover 主体第五批

两端组件主体独立复制，视觉和默认值由各端 platform/props 适配；通过共同 trigger/wrapper 转发完整 Trigger 字段，删除 Cedar 包装层的状态与生命周期镜像。两端公开完整方法和事件，Maple Tooltip 明确转发 open-change，Maple Popover 增加 title/content，Tooltip 补齐背景颜色与小尺寸别名。保留各端 trigger/placement/延迟/箭头/缓存默认。

Cedar Tooltip 样式类位于实际 role=tooltip 内容元素；Maple Popover 增加 title/body 内层，CSS 直接子元素依赖需调整。公开文档、类型、调用方和快照同步验收，复制门禁涵盖 SFC 与配对测试。

## 连续收尾

Menu 引入共同 render 组合，保留原生视觉适配；新增独立 modal-focus/popup-transition、option-data/tree-data、async-request/field-path/input-composition、picker-data、resize-observer/responsive-observe。迁移实际组件及包内引用，支持严格的过期校验保护、IME 一次提交、模态栈焦点、触屏 containment、视口尺寸变化和 KeepAlive 清理。原有 Vue use 包入口保留；旧 Vue 的 useId 改为 mounted 分配，Vue 3.5 使用原生 hydration ID。

端侧定位引擎、复杂选择与日期面板、规则引擎和配置上下文保留适配，不以同名文件强行替换。范围判定、消费方、验证边界见 design-ui/refactors/foundation-alignment/closure.md。


## Menu 主体同源（2026-09-08）

根组件、Option、Group、Submenu、Panel 的 SFC 主体，以及 props、类型、context、level、options 递归、selection、keyboard、render 均为两端独立副本。只读门禁归一化包名、工具路径与原生文件名，检查真实主体内容；未引入共享运行时或代码生成。

`platform.ts` 仅承载原生 Trigger 参数映射、默认值与外观：Cedar Scrollbar/Empty/Checkbox/IconRight，Maple Ripple/HoverOverlay/MaybeVNode/Checkbox。选择、开关、焦点、键盘与兄弟分支管理不放在平台适配器中。递归组件直接导入，避免发布分包中的中转导出循环。

- 两端公开 `Menu.Submenu` / `MenuSubmenu`，支持 `default/content/icon/suffix/footer` 插槽及 `open/defaultOpen/trigger/placement/disabled`；Option/Group/Submenu props 和实例类型均导出。
- 根组件共同提供 `open/close/resize/setReference`、状态更新请求和生命周期事件。保留 Cedar 旧 context；Search、AutoComplete、Breadcrumb、表格与 SplitButton 原调用 API 无需替换。
- `unmountOnClose` 作为共同属性，保留 Cedar 默认 true、Maple 默认 false；子菜单触发方式保留 Cedar click、Maple hover；closeOnClickReference 保留 Cedar true、Maple false。Maple 定位 strategy 仍由其原生 Popper 适配器提供。
- 每层上下文同时管理 options 和插槽创建的子菜单，统一兄弟关闭、父级关闭、ArrowRight/ArrowLeft 与 Escape 焦点恢复。
- 函数标签接收原始选项与选中态；无 label/value 的插槽项回退到文本；Boolean label 显式保留 undefined 默认值；空格键在 keyup 选择一次。
- 新增四对组件契约与四项真实浏览器场景；SplitButton 方法测试改为观察 script-setup 的实际 exposed API。Cedar 原 Menu 单测补卸载清理，NavMenu 单测独立设置和恢复 matchMedia mock，避免全库测试依赖执行顺序。


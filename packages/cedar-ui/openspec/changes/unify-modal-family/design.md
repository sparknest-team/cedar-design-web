# Design

## 1. 分层与目标

| 层级 | 组件 / 模块 | 同源目标 | 不强制相同的内容 |
| --- | --- | --- | --- |
| L0 基础能力 | popup container、popup layer、scroll lock、modal focus、popup transition | 独立复制的实现与测试同源，所有模态消费者实际接入 | 目录名、命名空间、本地主题入口 |
| L1 背景层 | Overlay | Props、主体、事件、过渡、测试完整同源 | `c-` / `mp-` 前缀和 token 值 |
| L2 模态表面 | Cedar Drawer / Maple Popup | 公共状态机与控制器逻辑同源 | Drawer 标题/页脚/尺寸；Popup 安全区/移动转场 |
| L3 业务模态 | Dialog | Props、types、主体控制逻辑、命令式管理器、契约测试同源 | 结构样式 token 值、触控/hover 细节 |
| L4 轻反馈 | Message | 队列、计时器、更新与命令式 API 同源 | PC 多列宽度、移动居中/安全区和外观 |

“基础层完成”必须同时满足源码同源、组件已消费和行为测试通过。仅有相同工具文件而消费者仍使用旧 hook，不得标记完成。

## 2. L0：唯一模态基础链

两端分别保留本地文件，不建立共享包：

- `popup-container`：解析 `PopupContainer = string | HTMLElement | false`，SSR 阶段不访问 DOM；selector 在挂载后解析，容器变化时重新绑定。
- `popup-layer`：按 `Document` 隔离注册表，以 z-index、组件树深度和注册顺序确定最上层；同一次原生事件最多由一个最上层接收者处理。
- `scroll-lock`：引用计数、恢复原 inline style/priority、可选滚动条占位、KeepAlive 和换容器清理。
- `modal-focus`：保存/恢复焦点、初始聚焦、Tab 循环与移动端触摸滚动 containment；只服务真正的模态表面，Message 默认不捕获焦点。
- `popup-transition`：统一 `open/opened/close/closed` 时序、离场保留和取消过渡，不把 Transition stub 当作离场完成。

Overlay、Drawer、Popup、Dialog 禁止继续直接使用旧 `usePopupManager/useOverflow/useStack/useZIndex/useLock` 组合。旧入口只有在其余未迁移组件仍需要时才作为本地转接保留；本批消费者全部直接使用 L0。完成迁移后根据全库引用决定删除旧入口，不制造双套真源。

## 3. 共同状态与生命周期协议

模态组件统一受控/非受控规则：

- `open?: boolean` 是受控值；`defaultOpen = false` 只在 `open === undefined` 时生效；
- 所有关闭入口只发出 `update:open(false)`，受控组件不得私自长期修改显示状态；
- `unmountOnClose` 决定离场完成后是否卸载，离场期间 DOM、层级和滚动锁仍归当前实例所有；
- 生命周期固定为 `open -> opened -> close -> closed`，分别对应进入开始、进入完成、离开开始、离开完成；重复请求不得重复发出；
- 背景、ESC、关闭按钮、路由和命令式关闭先归一为内部 `ModalCloseRequest`，再由具体组件决定是否更新状态或触发业务拦截；
- 背景点击必须校验 pointer down/up 都发生在当前背景层，拖动或从内容区释放不得误关；ESC 只交给最上层实例；
- `popupContainer=false` 禁用 Teleport，但不改变层级、焦点和锁滚动语义。

内部关闭请求类型为：

```ts
type ModalCloseReason = 'overlay' | 'escape' | 'close-button' | 'route' | 'programmatic'

interface ModalCloseRequest {
  reason: ModalCloseReason
  event?: Event
}
```

该类型首先用于内部控制器和测试，不额外增加含义重叠的公共 `reason-change` 事件。公开的 `click-overlay`、`key-escape` 继续携带原始事件；`close` 始终是生命周期事件，不再兼任关闭请求。

## 4. Overlay

最终公共契约为：`open/defaultOpen`、`overlayClosable`、`lockScroll`、`unmountOnClose`、`escToClose`、`popupContainer`、`zIndex`；事件为 `update:open`、`open/opened/close/closed`、`click`、`key-escape`。

Overlay 不管理焦点，也不声明 `role=dialog`；它只提供背景层、容器、层级、滚动锁与关闭请求。两端统一为同一种 SFC 结构和同一套 Props/测试，删除 Cedar 与 Maple 现有 hook 组合差异。公开 `zIndex` 优先于本地自动层级，但仍注册到 popup layer 参与最上层判断。

## 5. Drawer / Popup：异名对应但不伪造相同结构

两者共同的“模态表面协议”为：

- `open/defaultOpen`；
- `placement`，公共值为 `top | right | bottom | left`；Maple 删除 `position`，`center` 只作为 Popup 的明确扩展值；
- `overlay/overlayClass/overlayStyle/overlayClosable`；
- `lockScroll/unmountOnClose/escToClose/popupContainer/zIndex`，其中 `unmountOnClose` 默认 `false`，保留关闭后的表单和滚动状态；
- `open/opened/close/closed/click-overlay/key-escape/update:open`；
- `role=dialog`、`aria-modal`、可聚焦根节点、焦点进入/循环/恢复；
- 同源的 `modal-surface.ts`，负责状态、层级、关闭请求、焦点、锁滚动和过渡时序。

Maple Popup 增加 `defaultOpen`、`unmountOnClose`，将 `position` 直接迁移为 `placement`；`defaultStyle` 改为语义更直接的 `unstyled = false`，`safeArea/safeAreaTop` 改为 `safeAreaInsetBottom/safeAreaInsetTop`。删除含义含混的 `overlayTransition`，统一使用与 Drawer / Dialog 一致的 `overlayAnimationName`。`route-change` 不再作为模态生命周期事件；如仍需要路由关闭，使用显式 `closeOnRouteChange`，关闭原因归一为 `route`。

Cedar Drawer 增加公开 `lockScroll`、`zIndex`、`drawerClass` 和 `key-escape`，并消费共同控制器；`cancelText` 直接统一为与 Dialog 一致的 `cancelButtonText`。Drawer 独有标题、header/footer、确认/取消按钮、`width/height`、`drawerClass/drawerStyle/bodyClass/bodyStyle`；Popup 独有 `safeAreaInsetTop/safeAreaInsetBottom/unstyled/transition`。这些属于呈现层，不塞进平台配置文件，也不为了“同源”给另一端增加无意义 Props。

Drawer 的 `beforeConfirm/beforeCancel` 收敛为与 Dialog 一致的 `beforeClose(action, done, refs)` 控制型 Prop；`DrawerAction = confirm | cancel | close`。命令式 `Drawer.open` 保留并与 Dialog 共用管理器形状 `{ close, update }`。Popup 作为低层容器不新增无内容模型的静态 `open`，因此 Drawer / Popup 最终分类为“逻辑同源”，不能标记完整同源。

## 6. Dialog

以现有 `design-ui/standards/dialog.md` 为公开契约真源。本批不重新发明另一套 Dialog API，重点是让实现兑现已冻结的契约：

- Props、类型、事件、Slots、Expose、默认值和函数式 API 两端一致；
- `DialogAction = confirm | cancel | close`，背景、ESC、关闭按钮和命令式关闭都映射为 `close`，具体来源保留在内部 `ModalCloseRequest` 及专用事件中；
- `beforeClose(action, done, refs)` 只允许一次完成；处理期间相同 action 去重，异常不自动关闭并进入可测试的错误路径；
- 两端组件主体消费各自本地的同源 modal surface 控制器，不再由 Maple 套 Popup、Cedar 自己维护另一套状态机而产生时序差异；
- 命令式管理器统一 `open/confirm/alert/info/success/warning/error/close/setDefaultOptions/resetDefaultOptions`，返回 `Promise<DialogAction | void> & { close, update }`；每库独立创建宿主、队列和 app context，不共享实例；
- SSR 调用不访问 DOM；宿主在最后一个实例离场后销毁；update 不可替换回调或造成 Promise 多次 resolve。

Dialog 的模板与逻辑在能够自然一致时复制同源；图标 import、前缀和 token 值直接在各自文件修改。若最终 DOM 因移动布局确有显著差异，则主体拆成同源 controller + 各端 view，并据实标记“逻辑同源”，不得增加 `platform.ts` 掩盖差异。

## 7. Message

Message 不是 Dialog：默认不锁滚动、不捕获焦点、不参与 `aria-modal`。最终统一为可调用服务：

```ts
Message(configOrContent)
Message.info(...)
Message.success(...)
Message.warning(...)
Message.error(...)   // 映射 status='danger'
Message.loading(...) // 默认 duration=0
Message.clear(position?)
Message.setDefaultOptions(options)
Message.resetDefaultOptions()
```

`Message.normal` 删除，普通消息直接调用 `Message(...)`，其 `status='default'`。公共状态只使用 `info | success | warning | danger | loading | default`；方法名 `error` 是便捷动作，不把主题枚举重新改回 `error`。位置统一为 `top | center | bottom`，Cedar 补齐 center。

公共配置包括 `id`、`content`、`status`、`position`、`icon`、`action`、`contentClass`、`duration`、`showIcon`、`closable`、`closeButtonAriaLabel`、`resetOnHover`、`popupContainer`、`onClose/onClosed`。Maple 的 `vertical/elevation/loading*` 与 `forbidClick/lockScroll` 保留为移动呈现扩展；Cedar 不为源码比较添加空实现。

队列、宿主、计时器和更新规则完整同源：

- 相同 `id` 更新原实例，不创建重复 DOM；更新 content/status 后按最终 duration 重置计时；
- duration `0` 永不自动关闭；hover 暂停后按剩余时间恢复，不能重算完整时长；
- `close()`、自动关闭、关闭按钮和 `clear()` 进入同一幂等关闭管线；`onClose` 在请求移除时一次，`onClosed` 在离场结束时一次；
- 每个 Document、容器和 position 的队列相互隔离；最后一条离场后销毁宿主；
- `_update` 等内部字段不得出现在公共 Props/类型；
- 根节点使用 `role=alert` 或适当 live region，关闭按钮有可配置标签。

## 8. 样式、Demo 与同源门禁

- 结构样式与 token 分离，主样式只消费 `--c-*` / `--mp-*` token；相同 token 后缀表达相同语义。
- Overlay 结构样式完整同源；Drawer / Popup、Message 只比较共同结构片段和 token 契约；Dialog 根据最终主体结构决定完整或逻辑门禁。
- Demo 必须分别覆盖受控/非受控、嵌套最上层、容器切换、ESC、背景拖动、异步拦截、命令式 update/close、多个 Message 位置与 id 更新。
- Vue Teleport 测试挂载真实 target，并在每个用例卸载 wrapper、移除 target 和宿主；不得仅断言 wrapper 内 HTML。
- 所有 document 监听器、计时器、MutationObserver、临时宿主在 deactivate/unmount 和最后离场后清理。

## 9. 完成判定

按层逐级完成，上一层没有迁移和配对测试不得开始把下一层标记完成。每一层需通过双端目标单测、类型检查、lint、SSR import、`build:lib`、`build:doc` 和同源/契约门禁，并同步 API 文档、Demo、Web Types、resolver 样式映射、`component-reuse.json`、两端菜单与路线状态。

本计划完成时的预期分类：Overlay“已同源”；Drawer / Popup“逻辑同源”；Dialog 以实际主体结果判定“已同源”或“逻辑同源”；Message 的队列和命令式 API 同源，若视图存在端侧扩展则整体保持“逻辑同源”。

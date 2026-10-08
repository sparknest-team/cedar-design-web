# Tasks

## 阶段 0：冻结契约与基线

- [ ] 记录 Overlay、Drawer / Popup、Dialog、Message 的当前 Props、事件、Slots、Expose、命令式 API 和调用方
- [ ] 为层级、锁滚动、焦点、过渡取消、Teleport、KeepAlive 和 SSR 建立双端失败基线
- [ ] 把 `design-ui/standards/dialog.md` 与本设计中的公共类型、默认值和生命周期交叉校准

## 阶段 1：基础消费者与 Overlay

- [x] 规范化并配对验证 popup-container、popup-layer、scroll-lock、modal-focus、popup-transition
- [x] 将 Overlay 改为完整同源主体、Props、结构样式与测试
- [x] 将 Overlay 从旧 popup/lock hook 迁移到唯一 L0 基础链
- [x] 完成 Overlay Demo、文档、类型导出、resolver 和 token

## 阶段 2：Drawer / Popup

- [x] 新增两端独立复制的 `modal-surface.ts`，统一开关、关闭请求、层级、焦点、锁滚动和生命周期
- [x] Maple Popup 迁移 `position -> placement`、`defaultStyle -> unstyled` 和 safe-area 命名，补齐 defaultOpen/unmountOnClose，收口路由关闭和内部转场参数
- [x] Cedar Drawer 补齐 lockScroll/zIndex/drawerClass/key-escape，迁移 `cancelText -> cancelButtonText` 和共同控制器
- [x] Drawer 将 beforeConfirm/beforeCancel 收敛为 beforeClose(action, done, refs)，迁移命令式调用方
- [x] 保留并记录 Drawer 呈现扩展与 Popup 移动扩展，增加共同契约门禁
- [x] 完成双端 Demo、文档、类型导出、resolver 和 token 核查

## 阶段 3：Dialog

- [x] 配对 Props/types/events/slots/expose 和所有默认值
- [x] 两端消费 modal surface 控制器，统一关闭竞态和异步 beforeClose
- [x] 统一命令式宿主管理器、Promise、update/close、默认配置和 app context
- [x] 验证嵌套、拖动、fullscreen、受控模式、SSR、Teleport 与焦点恢复
- [x] 根据最终 DOM 如实建立完整同源或 controller 契约门禁
- [x] 完成双端 Demo、文档、Web Types、resolver 和 token

## 阶段 4：Message

- [ ] 冻结可调用 Message 服务和公共配置；删除 Message.normal 与公开内部字段
- [ ] 统一 status/position、id 更新、队列隔离、计时暂停恢复与幂等关闭
- [ ] 统一宿主创建销毁、离场回调、SSR 和 app context
- [ ] 保留移动呈现扩展，不让 Message 默认进入模态焦点链
- [ ] 完成双端 Demo、文档、类型导出、按需样式 resolver 和无障碍测试

## 阶段 5：全链验收

- [ ] 运行双端目标单测、类型、lint、SSR import、build:lib 和 build:doc
- [ ] 浏览器验证嵌套弹层、多个容器、路由、触屏滚动、焦点循环和过渡取消
- [ ] 更新同源门禁、API 清单、调研真源、路线、两端菜单与完成证据
- [ ] 按实际源码边界更新 Overlay、Drawer / Popup、Dialog、Message 的分类，不提前升级状态

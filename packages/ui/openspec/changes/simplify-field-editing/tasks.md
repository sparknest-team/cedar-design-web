# 验收

- [x] 同步两端 Form/FormItem/字段 API、文档和示例，删除旧入口。
- [x] 覆盖默认 inline、继承与显式 false、readPretty、单击/双击、草稿取消与确认。
- [x] 验证异步搜索/确认、校验失败保留草稿、disabled/readonly、重置关闭。
- [x] 运行类型、同源、lint 与相关测试；浏览器验证两端 Form 示例。

验证记录：Cedar 348 项、Maple 291 项相关测试通过；Cedar 后续弹层层级与日期操作区变更再通过 110 项回归。两端类型、Maple 全仓 lint、六项相关同源检查通过。全量 1407 个 demo SFC 检查通过；浏览器验证结果保存在 design-ui/audits/evidence/field-editing-2026-10-21。

## 2026-10-22 原位编辑补充

- [x] 点击外部或 Tab 离开先保存；切换字段等待保存成功，单文档只允许一个原位编辑器。
- [x] Enter 保存、Esc 取消；多行 Ctrl/Cmd+Enter、输入法组合输入和原生候选菜单按各自语义处理。
- [x] 校验失败保留草稿并收起候选菜单，避免遮挡错误；异步确认去重并阻止切换。
- [x] 重置中止等待中的保存和切换，业务异步工作忽略 AbortSignal 时也立即释放编辑权。
- [x] Form 示例与文档同步；浏览器验证外部点击、字段切换、候选校验失败/修正、Enter/Esc、多行、双击、异步确认与重置。证据：design-ui/audits/evidence/field-editing-2026-10-22。

## 原生面板与编辑提示补充

- [x] Select、Cascader、Date/DateRange、Time/TimeRange 面板点击归属回归。
- [x] 内层 Enter 选值、面板关闭后的 Enter 保存；Esc 仅关闭最上层面板，后续 Esc 取消，恢复焦点不滚动。
- [x] 悬浮/聚焦显示编辑图标及本地化点击/双击提示，图标直接编辑，disabled/readonly/readPretty 不提供编辑动作。
- [x] 在 Form 实际 demo 浏览器验证，证据保存在 design-ui/audits/evidence/field-editing-nested-2026-10-22。

## AutoComplete / TreeSelect / PeopleSelect 补充

- [x] 三类组件继承统一图标、面板点击归属、Enter 选择/保存、Esc 关闭/取消协议，在 Form 中覆盖 click/dblclick、disabled/readonly/readPretty。
- [x] TreeSelect 复用树现有选择、勾选、展开和加载动作，补齐可见节点键盘导航，跳过禁用节点，支持自定义字段与 0 键值，搜索激活直接匹配项。
- [x] 新增 16 项优先级与树键盘回归；完整相关套件 406 项通过，后续搜索/导航修正通过 53 项回归。
- [x] 浏览器验证三类字段原生列表、选值草稿、Enter/Esc 和图标；证据位于 design-ui/audits/evidence/option-field-priority-2026-10-22。

# 统一 Cedar / Maple 状态所有权

> 前置条件更新（2026-10-29）：先评审 [清空输出与空值识别契约](./empty-value-audit.md)，本提案的默认空值及所有权建议暂不直接实施。

状态：设计提案，尚未实施。审计日期：2026-10-28。

## 问题

已有共同规范规定 `modelValue !== undefined` 表示受控，但组件实现仍存在三类冲突：Maple 的本地代理状态可绕过父级拒绝；部分字段用 `undefined` 清空，使清空与释放控制含义重叠；Maple Popup 的 `beforeClose` 路径可把内部可见状态提升为最终状态，并拦截父级外部关闭。受控切换、草稿与过渡也缺少统一边界。

## 决策

所有对外模型采用相同的所有权规则：已定义 prop 决定最终状态，内部交互只提出更新请求；默认值只用于初始化；`undefined` 保留为未受控标识，默认清空使用组件领域内的已定义空值，保留值域允许的显式 emptyValue 工厂与父级归一化。草稿、手势和动画分层管理，不获得最终状态所有权。异步守卫拦截内部请求，不否决外部权威值。

保留主值 `modelValue/defaultValue`、开合 `open/defaultOpen` 及其他已有具名模型，不新增 `controlled`、`uncontrolled` 或 `mode` 公共开关。

## 范围

两端基础状态工具、字段/选择/数值/弹层/组合组件的最终状态契约；优先修复明确冲突的 Maple ActionSheet、NumberKeyboard、FloatingPanel、Popup，以及两端清空、模式切换与原生控件恢复行为。

官方说明调研及 emptyValue 冲突分析见 [research.md](./research.md)。完整设计、取舍、迁移顺序和验收矩阵见 [design.md](./design.md)；可执行工作项见 [tasks.md](./tasks.md)；规范增量见 [state-ownership/spec.md](./specs/state-ownership/spec.md)。Maple 引用本提案，不重复定义语义。

## 版本与交付边界

当前工作区 [版本与兼容性规范](../../../../../../design-ui/standards/release-and-compatibility.md) 记录两端已发布 1.0.0；部分 AGENTS 仍留有发布前收敛说明。设计按已发布 API 的兼容要求执行：不把所有行为差异直接当作 patch 修复；改变默认清空值、代理受控行为、守卫语义和公共方法返回含义，默认纳入下一 major，之前提供 minor 迁移说明及替代用法。实际排期前核对发布包契约。

本次只交付设计和现状说明修正，不修改运行时、发布版本或把目标设计写成已实现行为。

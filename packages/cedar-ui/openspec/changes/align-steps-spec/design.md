## Context

`Steps` 是两端都已存在的流程导航组件。PC（Cedar）能力更完整；移动（Maple）API 更精简，但命名和基数与已对齐的 `Pagination` 不一致。本次按 Alert 样板做 API 对齐和必要实现规范化。

约束：
- cedar 是 PC 端 source of truth；移动端跟随对齐。
- 不做向后兼容别名（`active` 等直接 BREAKING）。
- 不把 PC 的 `arrow` / `dot` / `navigation` 硬搬到移动端。
- 不改视觉 token 数值，仅 API / 行为对齐。

## Goals / Non-Goals

**Goals**
- 两端共享同一份 `current`（1-based）/ `status` / `changeable` / Step 内容 API。
- 命名与 `Pagination` 一致：`current` / `defaultCurrent`。
- PC 补齐 `props.ts` 与类型导出；移动去掉非统一的三态 icon / 颜色 props。

**Non-Goals**
- 不为旧 API 加 alias / 兼容期。
- 不重做视觉设计。
- 不强制 Cedar Steps 立刻改成完整 BEM + `createNamespace` 样式结构（保留现有 `c-steps-*` class，避免大范围样式回归）。

## Decisions

### D1：进度 prop 用 `current`，1-based
- **结论**：两端统一 `current` / `defaultCurrent`（默认 `1`），步骤序号从 1 起。
- **理由**：与 `Pagination` 一致；`Tabs.active` 是 key 选中语义，不适用。用户明确认可 1-based。
- **影响**：Maple `active`（0-based）BREAKING。

### D2：状态模型用 `status` 枚举，不用三态 icon props
- **结论**：父级 `status` 控制当前步；子项可覆盖；状态推导 `step < current → finish` / `=== → status` / `> → wait`。
- **理由**：与 Cedar / Arco / Element Plus 一致；自定义图标统一走 `#icon`。
- **影响**：Maple 移除 `activeIcon` / `currentIcon` / `inactiveIcon` 及 namespace。

### D3：点击切换由 `changeable` 门控，事件为 `onChange`
- **结论**：默认不可点切步；`changeable=true` 时点击更新 `current` 并 `call(onChange, step, ev)` + `onUpdate:current`。
- **理由**：对齐 Cedar；避免移动端误触。listener prop 与 Alert / Pagination 一致。
- **影响**：Maple `click-step` 移除。

### D4：颜色走 CSS 变量，不暴露 `activeColor` / `inactiveColor`
- **结论**：移动端删除这两个 prop；用 StyleProvider / `--mp-step-*` 定制。
- **理由**：与 Alert 对齐后的 token 驱动思路一致，减少 prop 膨胀。

### D5：PC 独有能力不强制下沉
- **结论**：`type` / `labelPlacement` / `small` / `showLine` / `#node` 仅 Cedar。
- **理由**：移动端布局与视觉不需要箭头/导航模式；共享核足够覆盖主流程。

### D6：实现规范
- PC：抽出 `props.ts`；`onChange` / `onUpdate:current` listener prop；`index.ts` 导出齐 `StepsProps` / `StepProps` / `StepStatus` / `StepsType` / `stepsProps` / `stepProps`。
- 移动：同步 props / provide / docs / example / types / 测试。

## Risks / Trade-offs

- **[Risk] Maple 调用方大量使用 `active`（0-based）与三态 icon** → Mitigation：CHANGELOG 显著标注 BREAKING；迁移示例 `active=0` → `current=1`。
- **[Risk] PC 改 listener prop 后 TSX 写法变化** → Mitigation：模板 `@change` 仍可用；文档注明 `onChange`。

## Migration Plan

1. cedar 落地 props 抽取、listener、demo 修复、类型导出。
2. maple 按同一契约改 props / 组件 / 文档 / 测试。
3. 两端 CHANGELOG + `component-spec` 附录补充 Steps 案例。

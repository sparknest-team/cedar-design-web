## 1. Cedar (PC) — steps 规范化

- [ ] 1.1 新建 `src/steps/props.ts`：导出 `stepsProps` / `stepProps` / `StepsProps` / `StepProps`，复用 `types.ts` 的 `StepsType` / `StepStatus`；含 `onChange` / `onUpdate:current` listener prop；中文 JSDoc。
- [ ] 1.2 改 `steps.vue`：使用 `stepsProps`；点击时 `call(props.onChange, …)` / `call(props['onUpdate:current'], …)`，移除 emits `change`。
- [ ] 1.3 改 `step.vue`：使用 `stepProps`。
- [ ] 1.4 改 `index.ts`：导出齐 `StepsProps` / `StepProps` / `StepStatus` / `StepsType` / `stepsProps` / `stepProps` / `StepsInstance` / `StepsStepInstance` / `Step` / `_StepsComponent`。
- [ ] 1.5 修 `__demos__/vertical.vue`（`direction="vertical"`）与 `__demos__/changeable.vue`（`setCurrent` 参数遮蔽）。
- [ ] 1.6 更新 `README.md` API 表与类型导出说明。
- [ ] 1.7 更新 `src/index.ts` 类型导出；补强 `__tests__/steps.test.tsx`（current / changeable / status）。
- [ ] 1.8 运行 vitest `src/steps` 通过。

## 2. Maple (Mobile) — steps 同步对齐

- [ ] 2.1 改 `steps/props.ts`：`active` → `current` / `defaultCurrent`；新增 `status` / `changeable` / `onChange` / `onUpdate:current`；移除 `activeColor` / `inactiveColor` / `onClickStep`。
- [ ] 2.2 改 `step/props.ts`：改为 `title` / `description` / `status` / `disabled`；移除三态 icon props。
- [ ] 2.3 改 `provide.ts` / `Steps.vue` / `Step.vue`：1-based 状态推导、changeable 门控、`#icon` / `#description`、默认 finish 勾选。
- [ ] 2.4 更新 types（`steps.d.ts` / `step.d.ts`）、docs（zh-CN / en-US）、example、step docs。
- [ ] 2.5 重写 `__tests__/index.spec.js` 覆盖 current / changeable / status / direction。
- [ ] 2.6 运行 vitest steps 通过。

## 3. 收尾与文档

- [ ] 3.1 cedar / maple CHANGELOG 标注 BREAKING。
- [ ] 3.2 两端 `docs/practices/component-spec.md` 附录追加 Steps 对齐案例。

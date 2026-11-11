## Why

`Steps` 在 Cedar Design Web (PC) 与 Maple Design Mobile 两端 API 不一致：进度 prop（PC `current` 1-based vs 移动 `active` 0-based）、点击交互（PC `changeable` + `change` vs 移动始终可点 `click-step`）、状态模型（PC `status` 枚举 vs 移动三态 icon props）、子项 API（PC `title`/`description`/`disabled` vs 移动仅 default 插槽）均存在分歧。

公共 API 应以 PC 为准，并与已对齐的 `Pagination`（`current` / `defaultCurrent`、1-based）语义一致；`Tabs` 的 `active` 是按 key 选中，语义不同，不作为 Steps 命名参考。

## What Changes

- **BREAKING（移动）**：`active`（0-based）→ `current`（1-based）+ `defaultCurrent`（默认 `1`）+ `v-model:current`。
- **BREAKING（移动）**：移除 `activeColor` / `inactiveColor`，颜色走 `--mp-step-*` CSS 变量。
- **BREAKING（移动）**：移除 `activeIcon` / `currentIcon` / `inactiveIcon` 及 `*-namespace`，改用 `#icon` 插槽 + 默认 finish 勾选 / 序号。
- **BREAKING（移动）**：`click-step` → `change`（listener prop `onChange`），仅在 `changeable=true` 时点击切换并发出事件。
- 移动端补齐共享核：`status`、`changeable`、`title` / `description` / `disabled`、`#description`。
- PC 端抽出 `props.ts`，事件改为 `onChange` / `onUpdate:current` listener prop；补齐类型导出；修 `vertical` / `changeable` demo bug。
- PC 独有能力保留：`type` / `labelPlacement` / `small` / `showLine` / `#node`（移动不实现）。

## Capabilities

### New Capabilities

- `steps`：提供 PC 与移动端共用的 `Steps` / `Step` 契约（`current` 1-based、`direction`、`status`、`changeable`、`onChange`，以及 Step 的 `title` / `description` / `status` / `disabled` 与 `#icon` / `#description`）。

### Modified Capabilities

（无 —— `openspec/specs/` 当前无 steps 基线。）

## Impact

- **代码**：
  - cedar-design-web：`src/steps/{steps.vue,step.vue,index.ts,props.ts,README.md,__demos__,__tests__}`。
  - maple-design-mobile：`packages/ui/src/steps/**`、`packages/ui/src/step/**`、types、docs、example、测试。
- **API**：移动端上述 BREAKING；PC 端 emits `change` 改为 listener prop（模板 `@change` 仍可用）。
- **文档**：两端 props 表、demo、CHANGELOG、`component-spec` 附录同步。
- **依赖**：无新增三方依赖。

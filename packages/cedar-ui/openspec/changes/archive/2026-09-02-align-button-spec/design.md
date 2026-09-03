## Context

`Button` 在两端都是用得最多的基础组件，但历史上各自演进：

- **Cedar (PC)** 采用现代双维度模型 `status × variant`，与 `_utils/constant.ts` 的 `Status` 枚举对齐，`variant` 覆盖 `default / text / outline / tonal` 四态。
- **Maple (移动)** 仍然是早期 Vant/Arco 风格 `type` 单维度 + 布尔 `text` / `outline` 切换，没有 `tonal`，size 枚举也是 `mini/small/normal/large`。

`Alert` 已按 PC 优先策略对齐完成（参见 `openspec/changes/align-alert-spec`），`Button` 是下一个对齐目标。本设计文档说明 BREAKING 重命名的取舍与迁移策略。

## Goals / Non-Goals

**Goals:**

- 把移动端 `Button` 的公开 API 完全对齐 PC：`status / variant / size / htmlType` 四个核心 prop 的命名与枚举集合一致。
- 两端共享同一套类型导出名（`ButtonVariant` / `ButtonProps` / `ButtonGroupProps`），便于上层业务跨端复用。
- 顺手修掉 PC 端 `outline` 变体 hover 时被写死成 `red` 的调试遗留代码（已在本会话修复）。
- 修复 PC 端 `--c-button-status-default-*` token 缺失（如确实存在），避免 `status="default"` 走到非预期 fallback。

**Non-Goals:**

- 不调整两端的视觉样式细节（颜色 / 间距 / radius），仅做 API + 必要 token 补齐。
- 不引入新的 variant 或 status 取值（只做命名拉齐）。
- 不提供旧 prop 名的 alias 兼容层 —— 走纯 BREAKING，由迁移指南覆盖。
- 不改 PC 端，PC 端已基本符合目标 API；只补齐 token 与导出。
- 不动 `_components/` 下的内部按钮（如 `_close-button`）。

## Decisions

### 1. 以 PC 为基线，而非以移动为基线

**为什么**：`AGENTS.md` 明文 "公共 API 以 PC 为准、两端同步"。PC 的 `status × variant` 模型本身更扩展性强，已经能表达移动端所有用法。

**取舍**：移动端调用方需要迁移；但与其在 PC 加 alias 妥协两端，不如让移动端一次性升级到现代 API。

### 2. `type` → `status` 而不是保留 `type`

**为什么**：`type` 在 HTML 元素 / Vue 编译期都有特殊含义（`<button type>`、TS `type X = ...`），且与 PC `htmlType` 易混淆。`status` 是状态色系的语义命名，两端 `Alert` / `Tag` / `Message` 都已使用同一套 `Status` 枚举。

**取舍**：BREAKING 命名变更，但语义更清晰，与组件库内其他组件统一。

### 3. 布尔 `text` / `outline` → 枚举 `variant`

**为什么**：布尔组合 (`text` xor `outline`) 表达力不足，无法新增 `tonal`，且当两个布尔同时为 `true` 时行为未定义。枚举单值天然互斥。

**取舍**：BREAKING；旧 `text` / `outline` 直接移除，迁移即 `text → variant="text"`、`outline → variant="outline"`。

### 4. size `mini/small/normal/large` → `xs/sm/md/lg`

**为什么**：与 PC 一致，且这套缩写是组件库（`_utils/constant.ts`）的 `Size` 标准枚举。

**取舍**：BREAKING；提供迁移表，`mini→xs`、`small→sm`、`normal→md`、`large→lg`。

### 5. `nativeType` → `htmlType`

**为什么**：与 PC `htmlType` 命名拉齐，`html-` 前缀更准确表达"原生 HTML 属性透传"，避免与 `nativeOn` 等 Vue 2 概念混淆。

### 6. 不引入 alias / 兼容层

**为什么**：组件库还在 0.x 主版本，两端早期用户可控；alias 会让 props 表与 IDE 提示混乱，且增加维护负担。

**取舍**：在 `CHANGELOG.md` 与 `docs/zh-CN.md` 顶部加迁移表；调用方一次性 codemod 即可。

### 7. `ripple` / `focusable` 端差异保留

**为什么**：移动端默认开 `ripple` / `focusable=true` 是触控反馈惯例；PC 默认关是为了少干预桌面键盘聚焦行为。这是合理的端差异，不强行统一。

**取舍**：在文档表格中显式标注两端默认值。

## Risks / Trade-offs

- [移动端调用方面破坏面广] → 提供 codemod 草案（在 `tasks.md` 列出）+ `CHANGELOG.md` BREAKING 段落清单。
- [PC `--c-button-status-default-*` 补齐可能与现有视觉有出入] → 先 grep 现有视觉是否依赖 fallback；如有依赖，token 值取 fallback 真实生效色（设计 token `--c-color-text-1` / `--c-color-fill-2`）。
- [测试快照大批失效] → 计划在 tasks 末尾统一 `vitest -u` 一次刷快照，并 diff review。
- [icon name 体系两端差异] → 本次不动 icon 命名，两端各自保留默认 icon 映射。

## Migration Plan

### 移动端调用方迁移表

| 旧                                | 新                                              |
| --------------------------------- | ----------------------------------------------- |
| `<MpButton type="primary">`       | `<MpButton status="primary">`                   |
| `<MpButton type="default">`       | `<MpButton status="default">`（默认值，可省略） |
| `<MpButton text>`                 | `<MpButton variant="text">`                     |
| `<MpButton outline>`              | `<MpButton variant="outline">`                  |
| `<MpButton size="mini">`          | `<MpButton size="xs">`                          |
| `<MpButton size="small">`         | `<MpButton size="sm">`                          |
| `<MpButton size="normal">`        | `<MpButton size="md">`（默认值，可省略）        |
| `<MpButton size="large">`         | `<MpButton size="lg">`                          |
| `<MpButton native-type="submit">` | `<MpButton html-type="submit">`                 |

### Rollback

若上线后发现广泛业务回归，回滚到当前 commit 即可（API 改动是纯重命名 + 枚举改名，无运行时副作用）。

## Open Questions

- 移动端是否需要补 `component: 'button' | 'a'`？PC 已有，移动端调用方可能用 `<router-link>` 包裹。倾向：补齐，与 PC 一致。
- `loadingRadius` / `loadingSize` / `loadingColor` 是否两端都暴露？目前移动有、PC 没有。倾向：保留移动端，PC 暂不加；spec 不强制。

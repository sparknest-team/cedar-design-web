## Context

`Alert` 是两端组件库都已存在的基础消息提示组件，但 PC（cedar）和移动（maple）的 API 与实现差异较大（详见 proposal）。两端历史实现都早于现行 SFC 规范，存在 Options-style `defineComponent`、字符串拼接 class、缺少 props 拆分等问题。本次同时承担三项工作：API 对齐、实现规范化、作为后续两端组件对齐工作的样板。

约束：
- cedar 是 PC 端 source of truth；移动端跟随对齐。
- 两端的 namespace / 工具函数已就位（`createNamespace`、`classes`、`n('--xxx')`），实现风格直接套用规范文档。
- 不引入新的三方依赖；不破坏现有 token 命名规则（PC `--c-alert-*`、移动 `--mp-alert-*`）。

## Goals / Non-Goals

**Goals**
- 两端 `Alert` 暴露同一份 props / events / slots 契约（命名、默认值、语义）。
- 两端实现都符合 [`docs/practices/component-spec.md`](../../../docs/practices/component-spec.md)：`<script setup>` + `createNamespace().name` + `props.ts` 抽取 + `classes()` 组装 + token 拆分。
- 提供 OpenSpec 样板，让后续 ~50 对组件的对齐工作可以套用。

**Non-Goals**
- 不引入 deprecated alias / 兼容期：旧 API 直接 BREAKING（cedar 还未稳定发版，简化迁移）。
- 不重做视觉设计 / 不调整 token 数值，仅做 API + 实现层重构。
- 不处理 `Message` / `Notification`（它们用独立的 `MessageType` 含 `error`，与 `Alert` 解耦）。
- 不做国际化 JSDoc（保留中文 JSDoc 即可，不再写 `@en`）。

## Decisions

### D1：`type` 枚举对齐 `Status`，使用 `danger` 而非 `error`
- **结论**：两端统一为 `'info' | 'success' | 'warning' | 'danger' | 'default'`。
- **理由**：`Alert` 在视觉/语义上属于"状态展示"，与 `Button` / `Tag` 的 status 色系一致；`error` 仅用于"瞬时消息"语义（`Message` / `Notification` 的 `MessageType`）。两类语义独立演进，避免混用。
- **替代方案**：保留 `error` + `danger` 互为别名 → 否决，制造永久歧义。
- **影响**：PC 端 `error` → `danger`（BREAKING）；移动端不变。

### D2：`type="default"` 替代 PC 旧 `normal`
- **结论**：两端引入 `default`，PC `normal` 移除。
- **理由**：`default` 是组件库通用"无强语义"取值（与 `Button` `variant="default"` 一致）；`normal` 是历史孤词。
- **影响**：PC BREAKING；移动新增。

### D3：拼写规范化 `closable`（不是 `closeable`）
- **结论**：统一 `closable: boolean`，默认 `false`。
- **理由**：`closable` 是英文拼写规范；与 PC 现有保持一致，移动改名。

### D4：关闭事件用 listener prop（`onClose`），不再用 emits
- **结论**：两端统一 `onClose?: (e: Event) => void` + `onAfterClose?: () => void`。
- **理由**：组件库其它组件已统一用 `defineListenerProp` 模式（cedar `_utils/components` 也提供等价工具）；listener prop 在 TSX 调用方有更好的类型推导。
- **影响**：PC 由 `emits: { close, afterClose }` 改为 props 上的 `onClose` / `onAfterClose`，模板内调用 `call(props.onClose, e)`。Vue 模板使用方 `@close` 仍可工作（Vue 自动把 `onXxx` prop 与 `@xxx` 监听器双向兼容）。

### D5：Slot 命名 —— `close-icon`、补 `action`
- **结论**：关闭区 slot 统一名为 `close-icon`（删除 PC 旧 `close-element`）；保留 `default` / `title` / `icon` / `action`。
- **理由**：`close-icon` 与 `icon` slot 命名同源，更易记忆；`action` 补到移动端。

### D6：移动端补齐 `banner` / `center` / `showIcon`，PC 端补齐 `variant` / `color` / `elevation`
- **`showIcon`**：默认 `true`，统一 PC 当前行为。`type='default'` 且未提供 `icon` slot 时不渲染 icon 容器。
- **`banner`**：去边框、去圆角，用于通栏告示。
- **`center`**：内容居中（含 icon）。
- **`variant`**：`'tonal' | 'outlined' | 'standard'`（移动现有），PC 通过新 token 实现：
  - `tonal`：浅色背景 + 同色文字（移动现行默认观感）。
  - `outlined`：透明背景 + 边框 + 同色文字。
  - `standard`：当前 PC 默认观感（浅色背景 + 边框）。
- **`color`**：覆盖背景色（`background-color` 内联），用于自定义品牌色。
- **`elevation`**：`boolean | string | number`，对接两端各自的 `elevation` 工具（PC 若无则借用 `style/theme` 的 shadow token）。

### D7：实现规范
- 两端 SFC 全部 `<script setup lang="ts">`。
- `defineOptions({ name: createNamespace('alert').name })` 内联，禁止解构变量。
- `props.ts` 集中定义 `alertProps` + `AlertProps` + `AlertType` + `AlertVariant`。
- 模板根元素 `classes(n(), n('$--box' / 移动等价), n(\`--\${type}\`), n(\`--\${variant}\`), [banner, n('--banner')], [center, n('--center')], …)`。
- PC 样式拆 `style/index.less`（只读 var）+ `style/token.less`（声明 `--c-alert-*`，`@import '../../style/theme/index.less'`）。
- 移动样式 `alert.less` 顶部 `:root { --mp-alert-*: ... }`，主体只读 var。
- `index.ts` 必须导出：`default`、`AlertInstance`、`AlertProps`、`AlertType`、`AlertVariant`、`alertProps`、`_AlertComponent`。

### D8：测试基线
- PC `__tests__/alert.test.tsx`：mount 快照 + 五种 type + closable 触发 onClose + showIcon=false + banner/center class。
- 移动 `__tests__/alert.spec.js`：mount 快照 + 三种 variant + 五种 type + closable 触发。

## Risks / Trade-offs

- **[Risk] 调用方 PC `type="error"` / `type="normal"` / `closeable` 等旧 API 在升级后报 type 错或行为不正确** → Mitigation：CHANGELOG 显著标注 BREAKING；提供 codemod 思路（sed `error → danger`、`normal → default`）。
- **[Risk] `variant` 三种取值的视觉规范未与设计师对齐** → Mitigation：先实现移动现有 `tonal/outlined/standard` 的 token 方案，PC 沿用相同语义；后续设计 review 再调整 token 数值。
- **[Risk] `color` + `variant` 同时存在时优先级歧义** → Mitigation：`color` 仅覆盖 background-color，不影响边框 / 文字色，避免与 variant 互相打架；spec 中明确写出。
- **[Risk] PC 由 emits 切到 listener prop，使用 `<CAlert @close="...">` 的写法兼容性** → Mitigation：Vue 3 的 `onXxx` prop 与 `@xxx` 监听器在模板侧自动互通，回归测试覆盖即可；TSX 写法需调用方改为 `onClose={...}`。

## Migration Plan

按 cedar 优先实施：

1. cedar 落地新 API + 新实现 + 测试 + 文档。
2. 移动端按相同 spec 落地（`closeable→closable`、补 `default` / `banner` / `center` / `showIcon` / `onAfterClose` / `action` slot / `close-icon` slot 命名）。
3. 两端发布 CHANGELOG，标注 BREAKING：
   - PC: `type="error"` → `"danger"`；`type="normal"` → `"default"`；slot `close-element` → `close-icon`；emits `close` 改 listener prop（模板 `@close` 仍可用）。
   - 移动: `closeable` → `closable`；新增 `default` 类型；其余补齐项。
4. 在 [docs/practices/component-spec.md](../../../docs/practices/component-spec.md) 末尾追加"Alert 对齐案例"短章节，作为后续组件对齐参考。

无需回滚预案（变更范围限定在 alert 组件，影响面可控）。

## Open Questions

- 暂无 —— D1/D2/D3 关键决策已确认（用户明确：状态用 `danger`，消息用 `error`；BREAKING 一刀切）。

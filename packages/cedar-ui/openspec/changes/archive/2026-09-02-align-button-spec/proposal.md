## Why

`Button` 组件在 Cedar Design Web (PC) 与 Maple Design Mobile 两端 API 严重分歧：PC 使用 `status + variant` 双维度（`Status` 枚举 + `default|text|outline|tonal`），移动端仍是旧风格 `type` 单维度（`default|primary|info|success|warning|danger`）+ 布尔 `text` / `outline`，且没有 `tonal` 变体；尺寸枚举 PC 是 `xs|sm|md|lg`，移动端是 `mini|small|normal|large`；原生属性 PC 叫 `htmlType`、移动端叫 `nativeType`。两端无法共享类型也无法共享文档。

按 `AGENTS.md` "公共 API 以 PC 为准、两端同步" 的约定，移动端需做一次 BREAKING 对齐，把 `Button` 拉齐到统一的双维度模型，作为 `Alert` 之后的第二个对齐样板。

## What Changes

- **BREAKING**（移动端）：`type` 重命名为 `status`，取值同 PC `Status` 枚举：`primary | success | warning | danger | info | secondary | contrast | default`。
- **BREAKING**（移动端）：布尔 `text` / `outline` 移除，统一为 `variant: 'default' | 'text' | 'outline' | 'tonal'`，与 PC 一致。
- **BREAKING**（移动端）：`size` 枚举重命名 `mini → xs`、`small → sm`、`normal → md`、`large → lg`。
- **BREAKING**（移动端）：`nativeType` 重命名为 `htmlType`，与 PC 一致。
- 移动端补齐：`component: 'button' | 'a'`、`stacked`、`loadingType`（PC 已有）。
- 两端 `ButtonGroup` 同步对齐 `status / variant / size` 的命名与默认值。
- 两端实现复核现行规范：
  - 统一 `<script setup lang="ts">` + `createNamespace('button').name` 内联注册。
  - 父子继承的布尔 prop（`disabled` / `stacked`）默认值 `default: undefined`。
  - 模板根元素 `classes(n(), …)` 组装，禁止字符串拼接。
- PC 端 `src/button/style/index.less` 内残留的调试代码 `border-color: red` 已修复（此次顺手修），后续 token 体系补齐 `--c-button-status-default-*`（如有缺）。
- 两端 `index.ts` 补齐导出：`buttonProps` / `buttonGroupProps` / `ButtonProps` / `ButtonGroupProps` / `ButtonVariant` / `ButtonInstance` / `_ButtonComponent`。
- 两端 `README.md` / `docs/zh-CN.md` 与 demo 全量刷新；`Status` / `Variant` / `Size` 的语义表与 `Alert` 共用。

## Capabilities

### New Capabilities

- `button`: 提供 PC 与移动端共用的 `Button` 组件契约，定义 `status`（`primary | success | warning | danger | info | secondary | contrast | default`）、`variant`（`default | text | outline | tonal`）、`size`（`xs | sm | md | lg`）、`htmlType`、`component`、`block` / `round` / `disabled` / `loading` / `autoLoading` / `iconContainer` / `ripple` / `focusable` / `autofocus` / `color` / `textColor` / `elevation` / `stacked` / `loadingType` 等 props，以及 `ButtonGroup` 对子按钮的 `status / variant / size / disabled / stacked / vertical / elevation / color / textColor` 继承语义。

### Modified Capabilities

（无 —— `openspec/specs/` 仅含 `alert`，本次新增 `button`。）

## Impact

- **代码**：
  - cedar-design-web：`src/button/{button.vue,button-group.vue,props.ts,provide.ts,index.ts,style/{index.less,token.less}}` 局部调整（主体已对齐，主要补齐导出与 token）；demos / 测试 / `README.md` 顺势刷新。
  - maple-design-mobile：`packages/maple-ui/src/button/{Button.vue|tsx,ButtonGroup.*,props.ts,index.ts,button.less,docs/zh-CN.md,example/index.vue,__tests__/button.spec.js}` 全量改造。
- **API**：移动端 `type`、`text`、`outline`、`size` 枚举值、`nativeType` 均为 BREAKING；旧调用方需要迁移。
- **文档**：两端 `README.md` / `docs/zh-CN.md` 的 props 表、demo、迁移指引全部刷新。
- **依赖**：无新增三方依赖。

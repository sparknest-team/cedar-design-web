## Why

`Alert` 组件在 Cedar Design Web (PC) 与 Maple Design Mobile 两端 API 不一致：枚举值（PC `error` vs 移动 `danger`）、关闭 prop 拼写（`closable` vs `closeable`）、缺失语义（PC 缺 `variant`/`color`/`elevation`；移动缺 `banner`/`center`/`showIcon`/`afterClose`）、slot 名（`close-element` vs `close-icon`）等都存在分歧。两端同时实现也都未对齐组件库现行规范（Options-style `defineComponent`、字符串拼接 class、PC 缺 `props.ts` / `style/token.less` 拆分）。

需要把 `Alert` 拉齐为单一权威 API，并按现行规范重写，作为后续两端组件 API 对齐工作的首个样板。

## What Changes

- **BREAKING**：移动端 `closeable` 重命名为 `closable`（拼写规范化，无别名兼容）。
- **BREAKING**：PC 端 `type="normal"` 重命名为 `type="default"`，并同步到移动端。
- **BREAKING**：PC 端 `type="error"` 重命名为 `type="danger"`，与移动端以及 `_utils/constant.ts` 的 `Status` 枚举保持一致。
- 统一 `type` 取值为 `info | success | warning | danger | default`（状态色系语义，与 `Button` / `Tag` 对齐；`Message` / `Notification` 仍使用独立的 `MessageType` 含 `error`）。
- 移动端补齐：`banner`、`center`、`showIcon`（默认 `true`）、`onAfterClose`、`action` slot、关闭过渡动画。
- PC 端补齐：`variant`（`tonal | outlined | standard`，默认 `standard`）、`color`、`elevation`、`message` prop。
- 统一关闭区域 slot 名为 `close-icon`（**BREAKING**：PC 旧 `close-element` slot 移除）。
- 统一关闭事件签名为 `onClose(e: Event)`（PC 由 emits 改为 listener prop 形式）。
- 两端实现重写：
  - 切换到 `<script setup lang="ts">`。
  - 使用 `createNamespace('alert').name` 内联注册。
  - 抽取 `props.ts` 集中定义 props 与类型。
  - 模板根元素一律 `classes(n(), …)` 组装，禁止字符串拼接。
- PC 样式拆分为 `style/token.less`（`--c-alert-*` 变量集中声明）+ `style/index.less`（只读 `var(...)`）。
- PC `index.ts` 补齐导出：`alertProps`、`AlertProps`、`AlertType`、`AlertVariant`、`_AlertComponent`。

## Capabilities

### New Capabilities

- `alert`: 提供 PC 与移动端共用的 `Alert` 组件契约，定义 `type`（`info | success | warning | danger | default`）、`variant`、`closable`、`banner`、`center`、`showIcon`、`color`、`elevation`、`title`、`message`、`onClose`、`onAfterClose` 等 props/事件，以及 `default`、`title`、`icon`、`action`、`close-icon` slot 的语义。

### Modified Capabilities

（无 —— `openspec/specs/` 当前为空，本次为首个 spec。）

## Impact

- **代码**：
  - cedar-design-web：`src/alert/{alert.vue,index.ts,props.ts,style/{index.less,token.less}}` 全量重写；demos / 测试 / `README.md` 同步更新。
  - maple-design-mobile：`packages/ui/src/alert/{Alert.vue,props.ts,index.ts,alert.less,docs/zh-CN.md,example/index.vue,__tests__/alert.spec.js}` 同步对齐。
- **API**：`closeable`、`type="normal"`、`type="error"`、`close-element` slot 为 BREAKING；旧调用方需迁移。
- **文档**：两端 `README.md` / `docs/zh-CN.md` 的 props 表、slot 表、demo 全部刷新；`docs/practices/component-spec.md` 补充"两端 Alert 对齐"作为参考案例。
- **依赖**：无新增三方依赖。

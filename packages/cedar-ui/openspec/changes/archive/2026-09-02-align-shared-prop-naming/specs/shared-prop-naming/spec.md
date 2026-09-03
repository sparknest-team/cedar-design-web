## ADDED Requirements

### Requirement: Overlay open state uses `open`

浮层、下拉、模态、抽屉的受控开合 MUST 使用 `open`；非受控默认 MUST 使用 `defaultOpen`；v-model 事件 MUST 为 `update:open`。

MUST NOT 在浮层开合语义上使用 `show`、`visible` 或 `popupVisible`。

Badge 内容显隐的 `show`、Tag 关闭过程的 `visible` 不在本要求范围内。

#### Scenario: Dialog controlled open

- **WHEN** 调用方使用 `<CDialog v-model:open="x" />` 或 `<MpDialog v-model:open="x" />`
- **THEN** 组件开合状态与 `x` 同步，且不再接受 `v-model:show` / `v-model:visible`

### Requirement: Mount target uses `popupContainer`

Portal 挂载目标 MUST 命名为 `popupContainer`，类型为选择器字符串、`HTMLElement` 或等价「不挂载/禁用」哨兵值。

MUST NOT 使用公开 prop 名 `teleport`。

#### Scenario: Custom container

- **WHEN** 传入 `popupContainer="#app"` 或 DOM 节点
- **THEN** 浮层内容挂载到该容器

### Requirement: Mask naming

遮罩相关公开 API MUST 使用：`mask`、`maskClass`（或与实现一致的 class 命名）、`maskStyle`、`maskClosable`、`escToClose`。

MUST NOT 使用 `overlay`、`closeOnClickOverlay`、`closeOnKeyEscape` 作为公开遮罩 API。

#### Scenario: Dialog mask closable

- **WHEN** 传入 `mask-closable` / `maskClosable`
- **THEN** 点击遮罩可关闭，且公开 API 不再出现 `closeOnClickOverlay`

### Requirement: Form values use `modelValue`

可作为表单字段的控件（含 Upload）MUST 使用 `modelValue` + `update:modelValue` 作为主值通道，并提供 `change` / `onChange` 变更通知。

Upload MUST NOT 使用 `fileList` / `update:fileList` 作为公开 v-model。

#### Scenario: Upload in a form

- **WHEN** `<CUpload v-model="files" @change="onChange" />`
- **THEN** `files` 为文件列表；变更时触发 `change`/`onChange`

### Requirement: Date disable polarity

日期限制回调 MUST 命名为 `disabledDate`，且返回 `true` 表示该日期**不可选/禁用**。

MUST NOT 使用 `allowedDates`（true=可选）作为公开 API。

#### Scenario: Disable weekends

- **WHEN** `disabledDate` 在周末返回 `true`
- **THEN** 周末日期不可选

### Requirement: Interceptor props use `before*` prefix

拦截变更的 prop MUST 使用 `beforeChange`、`beforeClose`、`beforeRemove` 等形式。

MUST NOT 使用 `onBeforeChange` 等 `onBefore*` 作为拦截器 prop 名（`on*` 保留给事件监听形态）。

#### Scenario: Dialog beforeClose

- **WHEN** 传入 `beforeClose` 且返回 `false` / rejected Promise
- **THEN** 关闭被拦截；公开 props 不出现 `onBeforeClose`

### Requirement: No compatibility aliases

被替换的旧公开 prop / 事件名 MUST 直接删除，MUST NOT 保留 alias 或 shim。

#### Scenario: Breaking rename without alias

- **WHEN** 旧名（如 `show`、`teleport`、`fileList`）被新名替换
- **THEN** 旧名不再出现在公开 props / 事件 / 导出中，也不提供 alias
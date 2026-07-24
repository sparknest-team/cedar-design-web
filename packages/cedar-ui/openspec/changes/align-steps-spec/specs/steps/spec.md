## ADDED Requirements

### Requirement: Steps 进度由 current 控制（1-based）

`Steps` SHALL 使用 `current`（受控）与 `defaultCurrent`（非受控，默认 `1`）表示当前步骤。步骤序号从 **1** 起计。SHALL 支持 `v-model:current`（listener prop `onUpdate:current`）。

#### Scenario: 默认非受控从第 1 步开始

- **WHEN** 未传 `current`，且未传 `defaultCurrent`
- **THEN** 当前步骤为 `1`，第 1 个子项为当前步

#### Scenario: 受控 current

- **WHEN** 传 `:current="2"`
- **THEN** 第 2 个子项为当前步；第 1 步为 finish，第 3 步及之后为 wait

#### Scenario: v-model:current 更新

- **WHEN** `changeable=true` 且用户点击第 3 步
- **THEN** 调用 `onUpdate:current(3)` 与 `onChange(3, ev)`

### Requirement: 方向 direction

`Steps` 的 `direction` prop SHALL 接受 `'horizontal' | 'vertical'`，默认 `'horizontal'`。

#### Scenario: 垂直方向

- **WHEN** `direction="vertical"`
- **THEN** 步骤条按垂直方向布局

### Requirement: 当前步 status

`Steps` 的 `status` prop SHALL 接受 `'wait' | 'process' | 'finish' | 'error'`，默认 `'process'`，仅作用于 **当前步**（`step === current`）。子项自身的 `status` 优先覆盖自动推导。

#### Scenario: 状态自动推导

- **WHEN** `current=2` 且父级 `status` 未覆盖
- **THEN** 第 1 步 `finish`，第 2 步 `process`，第 3 步 `wait`

#### Scenario: 当前步 error

- **WHEN** `current=2` 且 `status="error"`
- **THEN** 第 2 步状态为 `error`

#### Scenario: 子项 status 覆盖

- **WHEN** 某 `Step` 显式传 `status="error"`
- **THEN** 该步状态为 `error`，不受父级自动推导影响

### Requirement: changeable 点击切换

当 `changeable` 为 `false`（默认）时，点击步骤 SHALL NOT 更新 `current`，也 SHALL NOT 触发 `onChange`。当 `changeable` 为 `true` 且步骤未 `disabled` 时，点击 SHALL 更新内部/受控 `current` 并触发 `onChange(step, ev)`。

#### Scenario: 默认不可切换

- **WHEN** 未传 `changeable`，用户点击某步
- **THEN** 不调用 `onChange`，`current` 不变

#### Scenario: changeable 点击切换

- **WHEN** `changeable=true`，用户点击第 2 步
- **THEN** 调用 `onChange(2, ev)` 与 `onUpdate:current(2)`

#### Scenario: disabled 步骤不可点

- **WHEN** `changeable=true` 且该 `Step` `disabled`
- **THEN** 点击不触发切换与 `onChange`

### Requirement: Step 内容 API

`Step` SHALL 支持 `title`、`description`、`status`、`disabled`。默认插槽优先于 `title`；`#description` 插槽优先于 `description` prop；`#icon` 插槽接收 `{ step, status }` 用于自定义节点图标。

#### Scenario: title 与默认插槽

- **WHEN** 同时传 `title="A"` 与默认插槽 `B`
- **THEN** 渲染默认插槽内容 `B`

#### Scenario: icon 插槽

- **WHEN** 提供 `#icon`
- **THEN** 图标区渲染插槽内容，不渲染默认序号/勾选图标

### Requirement: PC 独有能力（仅 Cedar）

Cedar `Steps` MAY 额外提供 `type`（`default | arrow | dot | navigation`）、`labelPlacement`、`small`、`showLine`、`#node` 插槽。Maple SHALL NOT 要求实现这些 API。

#### Scenario: Maple 不暴露 type

- **WHEN** 查阅 Maple Steps props
- **THEN** 不包含 `type` / `labelPlacement` / `small` / `showLine`

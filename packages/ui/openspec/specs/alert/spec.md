# alert Specification

## Purpose
TBD - created by archiving change align-alert-spec. Update Purpose after archive.
## Requirements
### Requirement: Alert 渲染基础结构

`Alert` 组件 SHALL 渲染一个 `role="alert"` 的根容器，按出现顺序包含可选的 `icon` 槽、内容区（`title` + `default` slot 或 `message` prop）、可选 `action` 槽、可选 `close-icon` 槽。

#### Scenario: 仅渲染默认内容

- **WHEN** 使用方写 `<Alert>提示文本</Alert>`，未传任何 prop
- **THEN** 渲染根元素带 `role="alert"`，类型默认 `info`，`variant` 默认 `standard`，显示 info 图标与默认 slot 内容
- **AND** 不渲染关闭按钮（`closable` 默认 `false`）
- **AND** 不渲染标题区（`title` 未提供）

#### Scenario: 同时提供 message prop 和 default slot 时 slot 优先

- **WHEN** 使用方同时传 `message="A"` 和默认 slot 内容 `B`
- **THEN** 渲染默认 slot 内容 `B`，不渲染 `message`

### Requirement: type 枚举与配色

`Alert` 的 `type` prop SHALL 接受 `'info' | 'success' | 'warning' | 'danger' | 'default'` 五个取值，默认 `'info'`。每个取值对应一组颜色 token 与默认图标（`default` 类型不渲染默认图标）。

#### Scenario: 五种 type 各自渲染对应 modifier 类

- **WHEN** `type` 分别为 `info` / `success` / `warning` / `danger` / `default`
- **THEN** 根元素分别带 `c-alert--info` / `c-alert--success` / `c-alert--warning` / `c-alert--danger` / `c-alert--default`（PC 端；移动端前缀为 `mp-alert--`）

#### Scenario: type='default' 不渲染默认图标

- **WHEN** `type='default'` 且使用方未提供 `icon` slot
- **THEN** 不渲染 icon 容器
- **WHEN** `type='default'` 且使用方提供了 `icon` slot
- **THEN** 渲染 icon 容器并展示 slot 内容

### Requirement: variant 三态外观

`Alert` 的 `variant` prop SHALL 接受 `'tonal' | 'outlined' | 'standard'`，默认 `'standard'`。三种取值在外观上分别表现为：浅色填充 / 透明描边 / 浅色填充加描边。

#### Scenario: variant 切换 modifier 类

- **WHEN** `variant` 分别为 `tonal` / `outlined` / `standard`
- **THEN** 根元素分别带 `--tonal` / `--outlined` / `--standard` modifier 类

### Requirement: closable 与关闭事件

当 `closable` 为 `true` 时，`Alert` SHALL 渲染关闭按钮（默认图标可由 `close-icon` slot 覆盖）。点击关闭按钮 SHALL 触发组件淡出过渡，先发出 `onClose(e)`，过渡结束后发出 `onAfterClose()`，最终从 DOM 中移除 / 隐藏。

#### Scenario: 默认不可关闭

- **WHEN** 未传 `closable`
- **THEN** 不渲染关闭按钮，不能被点击关闭

#### Scenario: 点击关闭依次触发 onClose / onAfterClose

- **WHEN** `closable=true`，用户点击关闭按钮
- **THEN** 立即调用 `onClose(e)`（`e` 为原始 `MouseEvent`）
- **AND** 触发淡出/折叠过渡
- **AND** 过渡结束后调用 `onAfterClose()`，根元素从 DOM 移除（或 `v-if=false` 等价行为）

#### Scenario: close-icon slot 覆盖默认关闭图标

- **WHEN** 使用方提供 `close-icon` slot
- **THEN** 关闭按钮内渲染 slot 内容，不渲染默认图标

### Requirement: showIcon 控制图标显示

`Alert` 的 `showIcon` prop SHALL 默认为 `true`。值为 `false` 时不渲染 icon 容器（即使有默认图标）；值为 `true` 时按 type 渲染默认图标，可由 `icon` slot 覆盖。

#### Scenario: showIcon=false 隐藏图标

- **WHEN** `showIcon=false`
- **THEN** 不渲染 icon 容器

#### Scenario: icon slot 覆盖默认图标

- **WHEN** `showIcon=true` 且使用方提供 `icon` slot
- **THEN** icon 容器内渲染 slot 内容，不渲染默认图标

### Requirement: title 与内容布局

当 `title` prop 或 `title` slot 任一非空时，`Alert` SHALL 在内容区顶部渲染标题，否则不渲染标题节点。`title` slot 优先于 `title` prop。

#### Scenario: 仅 title prop

- **WHEN** 传 `title="标题"`
- **THEN** 渲染 `.c-alert__title` 节点（移动端 `.mp-alert__title`），文本为 `"标题"`

#### Scenario: title slot 覆盖 prop

- **WHEN** 同时传 `title="A"` 和 `title` slot 内容 `B`
- **THEN** 渲染 slot 内容 `B`

### Requirement: banner 与 center 修饰

`Alert` SHALL 支持 `banner: boolean`（默认 `false`，true 时去除边框与圆角，用于通栏告示）与 `center: boolean`（默认 `false`，true 时内容水平居中）。

#### Scenario: banner=true 切换 modifier

- **WHEN** `banner=true`
- **THEN** 根元素带 `--banner` modifier 类

#### Scenario: center=true 切换 modifier

- **WHEN** `center=true`
- **THEN** 根元素带 `--center` modifier 类

### Requirement: color 覆盖背景

`Alert` SHALL 接受 `color?: string`，提供时通过内联 `background-color` 覆盖默认背景。`color` 不影响边框、文字、图标的颜色。

#### Scenario: 自定义背景色

- **WHEN** 传 `color="#ff0000"`
- **THEN** 根元素 `style` 包含 `background-color: #ff0000`

### Requirement: elevation 投影层级

`Alert` SHALL 接受 `elevation?: boolean | string | number`，默认 `false`。提供有效值时根元素加上对应阴影 modifier / 内联样式（参考 PC `style/theme` 与移动端现行 `formatElevation` 工具）。

#### Scenario: elevation=2

- **WHEN** 传 `elevation={2}`
- **THEN** 根元素带 elevation level 2 对应的 class（具体类名由两端 elevation 工具决定）

### Requirement: 实现规范一致性

`Alert` 组件 SHALL 遵循组件库现行规范：

- 使用 `<script setup lang="ts">`。
- 通过 `createNamespace('alert').name` 内联到 `defineOptions` 进行注册（禁止写死 `'CAlert'` / `'MpAlert'`）。
- props 抽到 `props.ts`，导出 `alertProps`（运行时对象）+ `AlertProps`（类型）+ `AlertType` + `AlertVariant`。
- 根元素 class 通过 `classes(...)` 组装，禁止字符串拼接。
- `index.ts` 导出：`default`（带 install）、`AlertInstance`、`AlertProps`、`AlertType`、`AlertVariant`、`alertProps`、`_AlertComponent`。
- CSS 自定义属性以 `--c-alert-*`（PC）/ `--mp-alert-*`（移动）为前缀，集中声明在 token 文件 / `:root`，主样式只读 `var(...)`。

#### Scenario: index.ts 导出齐全

- **WHEN** 检查任一端 `alert/index.ts`
- **THEN** 同时存在 `default` 导出、`AlertInstance` 类型导出、`AlertProps` 类型导出、`AlertType` 类型导出、`AlertVariant` 类型导出、`alertProps` 运行时导出、`_AlertComponent` 别名导出

#### Scenario: 不写死注册名

- **WHEN** 检查任一端 `alert.vue` / `Alert.vue`
- **THEN** 不存在 `defineOptions({ name: 'CAlert' })` / `defineOptions({ name: 'MpAlert' })` / `defineOptions({ name: 'Alert' })` 这类硬编码
- **AND** 存在 `defineOptions({ name: createNamespace('alert').name })`


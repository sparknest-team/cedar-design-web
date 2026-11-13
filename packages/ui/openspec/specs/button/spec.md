# button Specification

## Purpose
TBD - created by archiving change align-button-spec. Update Purpose after archive.
## Requirements
### Requirement: Button 渲染基础结构

`Button` 组件 SHALL 渲染由 `component` prop 指定的根标签（`'button' | 'a'`，默认 `'button'`）。结构按出现顺序为：可选 `icon` 槽、内容区（`default` slot 或自定义内容）、可选 `loading` 时的 loading 指示器、可选 `underlay` / `border` / `overlay` 等装饰层。

#### Scenario: 默认渲染 native button

- **WHEN** 使用方写 `<Button>提交</Button>`，未传任何 prop
- **THEN** 渲染 `<button type="button">` 根元素，`status` 默认 `default`，`variant` 默认 `outline`，`size` 默认 `md`
- **AND** 不渲染 loading 节点（`loading` 默认 `false`）
- **AND** 不附带 `disabled` 属性（`disabled` 默认 `undefined`，由父 group 决定）

#### Scenario: component='a' 渲染 anchor

- **WHEN** 传 `component="a"`
- **THEN** 渲染 `<a>` 根元素，不带 `type` 属性

### Requirement: status 枚举

`Button` 的 `status` prop SHALL 接受 `_utils/constant.ts` 导出的 `Status` 联合类型：`'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'contrast' | 'default'`。两端取值与默认行为保持一致。

#### Scenario: 各 status 渲染对应 modifier

- **WHEN** `status` 取 `Status` 任一值
- **THEN** 根元素带 `c-button--status-<value>` modifier 类（移动端为 `mp-button--status-<value>`）

#### Scenario: 移动端 type 已被移除

- **WHEN** 检查移动端 `props.ts`
- **THEN** 不存在名为 `type` 的 prop（已重命名为 `status`）

### Requirement: variant 枚举

`Button` 的 `variant` prop SHALL 接受 `'default' | 'text' | 'outline' | 'tonal'`。布尔形式 `text` / `outline` 在移动端被移除。

#### Scenario: variant 切换 modifier

- **WHEN** `variant` 分别为 `default` / `text` / `outline` / `tonal`
- **THEN** 根元素分别带 `--variant-default` / `--variant-text` / `--variant-outline` / `--variant-tonal` modifier 类

#### Scenario: 移动端布尔 variant 已被移除

- **WHEN** 检查移动端 `props.ts`
- **THEN** 不存在 `text: Boolean` / `outline: Boolean` 这两个 prop

### Requirement: size 枚举

`Button` 的 `size` prop SHALL 接受 `'xs' | 'sm' | 'md' | 'lg'`，默认 `md`。两端使用同一套枚举名。

#### Scenario: size 切换 modifier

- **WHEN** `size` 分别为 `xs` / `sm` / `md` / `lg`
- **THEN** 根元素分别带 `--size-xs` / `--size-sm` / `--size-md` / `--size-lg` modifier 类

#### Scenario: 移动端旧枚举已被移除

- **WHEN** 检查移动端 `props.ts`
- **THEN** `size` 取值集合不包含 `mini` / `small` / `normal` / `large`

### Requirement: 原生属性命名

`Button` SHALL 通过 `htmlType: 'button' | 'submit' | 'reset'`（默认 `'button'`）控制 `<button>` 根元素的原生 `type` 属性。两端命名统一，移动端旧 `nativeType` 被移除。

#### Scenario: htmlType 透传到原生 type

- **WHEN** 传 `htmlType="submit"` 且 `component="button"`
- **THEN** 渲染的 `<button>` 元素带 `type="submit"`

#### Scenario: 移动端 nativeType 已被移除

- **WHEN** 检查移动端 `props.ts`
- **THEN** 不存在 `nativeType` 这个 prop

### Requirement: 通用布尔修饰

`Button` SHALL 支持以下布尔 prop（默认值如下）：

- `block: boolean = false` —— 占满父容器宽度
- `round: boolean = false` —— 渲染胶囊形圆角
- `disabled: boolean | undefined = undefined` —— 禁用态，未显式设置时由父 group 决定
- `loading: boolean = false` —— loading 态，期间禁用点击
- `autoLoading: boolean = false` —— 异步 onClick 自动管理 loading
- `ripple: boolean` —— 是否显示水波纹，PC 默认 `false`，移动默认 `true`（端差异保留）
- `focusable: boolean` —— 是否可聚焦，PC 默认 `false`，移动默认 `true`（端差异保留）
- `autofocus: boolean = false` —— 挂载后自动聚焦
- `stacked: boolean | undefined = undefined` —— 堆叠态（图标在文字上方）

#### Scenario: 各布尔 prop 切换对应 modifier

- **WHEN** `block` / `round` / `loading` / `disabled` / `stacked` 任一为 `true`

#### Scenario: 父子 disabled 兜底

- **WHEN** 子 `Button` 未传 `disabled`，父 `ButtonGroup` 传 `disabled={true}`
- **THEN** 子按钮表现为禁用态（带 `--disabled` modifier）
- **WHEN** 子 `Button` 传 `disabled={false}`
- **THEN** 即使父 group `disabled={true}`，子按钮仍非禁用

### Requirement: 自定义颜色

`Button` SHALL 接受 `color?: string` 与 `textColor?: string`，二者通过内联 style 直接覆盖背景色与文字色，不影响其他 status / variant token。

#### Scenario: color 与 textColor 透传

- **WHEN** 传 `color="#f00"` `textColor="#fff"`
- **THEN** 根元素 `style` 包含 `background-color: #f00; color: #fff`

### Requirement: elevation 投影

`Button` SHALL 接受 `elevation?: boolean | number`，默认 `true`。值为 `true` 使用默认层级、`false` 关闭、`0..24` 数字指定层级。

#### Scenario: elevation=false 关闭投影

- **WHEN** 传 `elevation={false}`
- **THEN** 根元素不带任何 elevation modifier，且无投影内联样式

### Requirement: loading 状态与 autoLoading

`loading=true` 时 `Button` SHALL 渲染 `loadingType` 指定的 loading 指示器（默认 `'default'`），同时阻止 `onClick` 事件触发。`autoLoading=true` 时若 `onClick` 返回 `Promise`，组件 SHALL 在 Promise 完成（resolve / reject）前自动维持 loading 态，完成后自动复位。

#### Scenario: loading 阻止点击

- **WHEN** `loading=true` 且用户点击按钮
- **THEN** 不触发 `onClick`

#### Scenario: autoLoading 包裹 Promise

- **WHEN** `autoLoading=true` 且 `onClick` 返回 `Promise`
- **THEN** 点击瞬间 `loading` 自动置 `true`
- **AND** Promise settle 后 `loading` 自动恢复

### Requirement: ButtonGroup 继承

`ButtonGroup` SHALL 通过 `provide` 向子 `Button` 暴露 `status` / `variant` / `size` / `disabled` / `stacked` / `vertical` / `elevation` / `color` / `textColor`。子按钮读取 group 配置时 MUST 使用 `??` 兜底语义（`props.size ?? group.size.value`）。

#### Scenario: size 继承

- **WHEN** `<ButtonGroup size="lg"><Button /></ButtonGroup>`
- **THEN** 子 `Button` 渲染为 `--size-lg`

#### Scenario: 子覆盖父

- **WHEN** `<ButtonGroup size="lg"><Button size="sm" /></ButtonGroup>`
- **THEN** 子 `Button` 渲染为 `--size-sm`

#### Scenario: vertical 切换排列

- **WHEN** `<ButtonGroup vertical />`
- **THEN** group 根元素带 `--vertical` modifier

### Requirement: 实现规范一致性

`Button` 组件 SHALL 遵循组件库现行规范：

- 使用 `<script setup lang="ts">`。
- 通过 `createNamespace('button').name` 内联到 `defineOptions` 进行注册（禁止写死 `'CButton'` / `'MpButton'`）。
- props 抽到 `props.ts`，导出 `buttonProps` / `buttonGroupProps`（运行时对象）+ `ButtonProps` / `ButtonGroupProps`（类型）+ `ButtonVariant` 等枚举类型。
- 根元素 class 通过 `classes(...)` 组装，禁止字符串拼接。
- `index.ts` 导出：`default`（带 install）、`ButtonGroup` 命名导出、`ButtonInstance` / `ButtonGroupInstance` 类型、`ButtonProps` / `ButtonGroupProps` 类型、`ButtonVariant` 类型、`buttonProps` / `buttonGroupProps` 运行时导出、`_ButtonComponent` 别名导出。
- CSS 自定义属性以 `--c-button-*`（PC）/ `--mp-button-*`（移动）为前缀，集中声明在 token 文件 / `:root`，主样式只读 `var(...)`，且必须为所有 `status` 取值（含 `default`）声明对应 token，避免 `var(...)` 在 `status="default"` 时回退到意外色值。
- 父子通信使用 `computed(() => props.x)`，禁止 `toRefs(props)`。

#### Scenario: index.ts 导出齐全

- **WHEN** 检查任一端 `button/index.ts`
- **THEN** 同时存在 `default` 导出、`ButtonGroup` 命名导出、`ButtonInstance` / `ButtonGroupInstance` 类型导出、`ButtonProps` / `ButtonGroupProps` 类型导出、`ButtonVariant` 类型导出、`buttonProps` / `buttonGroupProps` 运行时导出、`_ButtonComponent` 别名导出

#### Scenario: 不写死注册名

- **WHEN** 检查任一端 `button.vue` / `Button.vue` 与 `button-group.vue` / `ButtonGroup.vue`
- **THEN** 不存在 `defineOptions({ name: 'CButton' })` / `defineOptions({ name: 'MpButton' })` / `defineOptions({ name: 'Button' })` 这类硬编码
- **AND** 存在 `defineOptions({ name: createNamespace('button').name })` 与 `defineOptions({ name: createNamespace('button-group').name })`

#### Scenario: token 覆盖所有 status

- **WHEN** 检查 PC `src/button/style/token.less`
- **THEN** 对每个 `Status` 取值（含 `default`）都声明 `--c-button-status-<status>-text-color` / `--c-button-status-<status>-bg-color` 等关键 token


## Why

Cedar 与 Maple 的 Input 在值模型、输入类型、长度限制、校验边界、插槽、原生属性透传和无障碍行为上存在差异。两端需要建立一份公共 Input 契约，同时保留移动端的浮动 placeholder 能力和桌面端的非浮动输入表现。

## What Changes

- **BREAKING**：两端 `variant` 默认值统一为 `outlined`。
- **BREAKING**：两端 `clearable` 默认值统一为 `false`。
- 两端统一支持受控 `modelValue` 与非受控 `defaultValue`。
- 两端统一支持 `text`、`password`、`number`、`tel`、`email` 五种输入类型。
- 统一 `maxLength`、`showWordLimit`、`wordLength`、`wordSlice` 和 `errorOnly` 语义。
- Form/FormItem 持有校验规则；Input 通过标准事件参与校验，并保留视觉错误覆盖能力。
- 统一 `prefix`、`suffix`、`clear-icon` 插槽。
- 核心受控属性优先于 `inputAttrs`，并补齐键盘清除及关键 ARIA 行为。
- `change` 采用提交语义：失焦或 Enter 时按值去重触发；`clear` 传递交互事件，不重复触发 `input/change`。

## Impact

- Cedar：`packages/cedar-ui/src/input/**`、Input OpenSpec、文档、demo 和测试。
- Maple：`packages/maple-ui/src/input/**`、文档、example 和测试。
- 不合并 textarea；textarea 仍作为后续独立组件议题。

## ADDED Requirements

### Requirement: 跨端公共 API 一致

Cedar 与 Maple Dialog SHALL 暴露 `design-ui/standards/dialog.md` 定义的相同 Props、Events、Slots、实例方法及函数式方法。

#### Scenario: 背景层事件统一

- **WHEN** 用户点击 Dialog 背景层
- **THEN** 两端都发出 `click-overlay` 并携带原始事件
- **AND** 不存在 `click-overlay` 公共事件

#### Scenario: 异步关闭提交 action

- **WHEN** `beforeClose` 异步执行
- **THEN** 调用 `done()` 前不关闭、不发送最终 action、不 resolve Promise
- **AND** 调用 `done()` 后按 `action event -> update:open -> close -> closed` 提交

#### Scenario: 函数式方法一致

- **WHEN** 检查两端 `Dialog`
- **THEN** 都提供 `open/confirm/alert/info/success/warning/error/close/setDefaultOptions/resetDefaultOptions`
- **AND** 打开方法接受配置对象或字符串
- **AND** 返回 Promise 与 `close/update` 句柄

## ADDED Requirements

### Requirement: 视口约束与正文滚动
两端 Dialog SHALL 通过 dialog-max-height token 将普通及简洁面板限制为 90dvh，不支持动态视口单位时回退 90vh。标题与操作区 SHALL 保持可见且不收缩，只有正文滚动，包括自定义 footer 场景。

#### Scenario: 长内容
- **WHEN** 正文高度超出面板可用空间
- **THEN** 正文独立滚动，标题和按钮保持可见，面板不超出视口

#### Scenario: 短内容与覆盖
- **WHEN** 内容较短或覆盖最大高度 token/dialogStyle
- **THEN** 短内容自然撑开，覆盖值生效

#### Scenario: 顶部偏移与全屏
- **WHEN** 使用 Cedar 默认非居中模式
- **THEN** 默认 top 不超过 5dvh（回退 5vh），显式 top 仍优先
- **WHEN** 使用 fullscreen
- **THEN** 解除普通面板高度上限并填满动态视口（100vh 回退）

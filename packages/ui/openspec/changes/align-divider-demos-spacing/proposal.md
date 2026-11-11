# Divider 语义化间距 API 与示例对齐

## Why
旧的双轴尺寸命名无法准确表达随分割线方向变化的间距语义，且两端文档与 demo 不一致。

## What Changes
- 使用 inset 控制沿线两端缩进，使用 spacing 控制线外间距；默认分别为 undefined 和 md。
- 两者支持 xs/sm/md/lg/xl、px 数值、CSS 长度、单元素数组和 [start,end]；沿线方向随 orientation 切换，行内起止遵循 RTL。
- 删除旧间距 props，不保留 deprecated alias、双写或运行时兼容分支。
- 同步迁移两端实现、类型、调用方、demo、调试配置、文档、样式 modifier、主题 token 与 token 契约。
- 竖直自定义 maxHeight 由 inset 决定；spacing 不影响线条长度。

## Design
通过 inset / spacing 表达沿线与线外间距，不再要求调用方推理坐标轴。保持两端预设、默认值、布局及平台密度，保留桌面 16px 与移动 8px 的文字留白。

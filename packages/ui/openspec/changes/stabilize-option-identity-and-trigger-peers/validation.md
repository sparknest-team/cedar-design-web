# 验证记录

- Cedar 扩展回归 46 个文件 / 231 项通过：Trigger、Menu、Tree、TreeSelect、Select、Cascader、Popover、Tooltip、SelectedOptions。新增原始 trigger demo 与停用同级触发器回归补跑通过（2 文件 / 3 项，包含重跑的同级 reference 用例）。
- Maple 扩展回归 45 个文件 / 257 项通过：Trigger、Menu、Select、Cascader、Popover、Tooltip、FloatingPanel、SelectedOptions。新增 demo / 停用触发器与更新后的 FloatingPanel 消费者补跑 3 文件 / 6 项通过。
- 双端类型检查通过。Cedar 受影响源文件、demo 和测试 lint 通过；Maple 全库 lint:check 通过。
- 基础同源门禁：68 个运行时配对通过，包含 Menu selection 与 Trigger interaction。
- 全量 demo 规范检查：550 个 review SFC/API 配置、2859 个 demo SFC、1871 段文档示例与共享面板通过。
- Maple docs:check：1473 个 demo SFC，0 failures。
- Tree 普通与虚拟列表重排、数字 0 身份；Menu 数字 0 / 字符串 0 / false 的重排实例与焦点；公开 active 的叶子选中 / 分支后代选中语义；真实触发 demo 先点击、再 hover、再点击；停用组件不接收额外 outside 事件，均有回归。
- 代码没有新增 Tree 公开 key 别名；Table 未修改；FloatingPanel 保留 height-change 通知，主值恢复普通 modelValue/defaultValue。

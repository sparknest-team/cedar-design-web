# 验证记录

- Cedar 受影响测试范围累计 209 项通过；包含 Tree / TreeSelect、Carousel、Image、Upload、字段适配与 Scheduler Tree 调用方。广泛回归后修正消费者断言，独立复跑 Scheduler 3 项通过。最终 Image / Tree / TreeSelect / 公共序号回归 79 项通过，包含受控 open 只提议一次。
- Maple 受影响范围累计 315 项通过；包含 Carousel、Image、Upload、FloatingPanel、FAB。广泛回归后独立复跑 FloatingPanel 12 项通过。最终 Image / FloatingPanel / 公共序号回归 132 项通过。
- 两端最终 typecheck 通过。Cedar 受影响源文件 / demo / 测试 ESLint 通过；Maple 全库 lint:check 通过。
- Maple docs:check：1473 demo SFC，0 failures。
- Carousel core：12 对；Image copied components：12 对；Upload core：20 对；基础运行时：68 对，同源门禁通过。门禁范围遵循各自清单，不代表整库所有目录同源。
- 后续补齐 Cedar / Maple Icon catalog 与 Ripple 演示宿主后，全量 review-demos-check 通过：550 个 review SFC/API 配置、2859 个 demo SFC、1871 段文档示例及共享面板。图标目录使用各自库的 Button；Ripple 指令演示宿主保留 role=button/tabindex=0，避免在 Button 根元素重复绑定指令。
- 本轮 Table 源码与 rowKey 接口未修改；Maple 没有 Tree，不新增组件。FAB 保留 visible / open，仅检查其现有回归。

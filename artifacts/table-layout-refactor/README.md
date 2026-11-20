# Table 布局提取基线

- `before/after`：最初捕获的原实现与内核提取实现，成功比较。
- `release-before/release-after`：在最新并行修复上下文中，固定 UI 的声明编译器，仅替换布局算法得到的原实现与提取实现；用于持续复跑。
- `original-layout`：由最初 before 的 SHA-256 验证的原始源码，作为差分 oracle 与隔离移植参照，不能从新实现自动再生成。

每份生产捕获包含 `report.json`（工具、源码、依赖图、字节数）、`runtime.json`（ESM/CJS API、SSR HTML）、`declarations.json`（既有 Table 发布声明及指纹）。`before/after/tests.json` 保存相应 Table 用例清单；后续测试结果见实施记录。

消费样例 full、basicProps 和 frozenProps 都使用原完整 Table 入口及其必要样式，Vue 和 @vue/shared external。basicProps/frozenProps 不代表尚未实施的轻量入口，不能从其名称推导按需裁剪已完成。

复跑入口为根目录 `pnpm check:table-layout`。详细范围、并行改动隔离与后续工作见 [实施记录](../../packages/ui/openspec/changes/refactor-table-capability-boundaries/implementation.md)。

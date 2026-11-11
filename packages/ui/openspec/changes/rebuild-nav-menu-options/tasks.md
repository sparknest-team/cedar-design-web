- [x] Implement options tree, selection/expansion, recursive private renderer and public props/types.
- [x] Remove legacy public children/registration and migrate exports/resolver/demos.
- [x] Retain horizontal overflow, collapsed navigation and local Trigger reuse.
- [x] Cover controlled rejection, keyboard, custom content, zero keys, dynamic options and SSR in tests.
- [x] Verify actual browser layout, full tests, declarations, public build and resolver.
- [x] Complete migration documentation and verification record.

## 独立一级入口扩展

- [x] 新增 NavMenu.Item 独立 options / 选择 / 高亮与标签策略
- [x] 自定义面板插槽、普通下拉 / 通栏 / 全高布局，复用 Trigger
- [x] 更新导出、全局注册、resolver、文档及 demo
- [x] 完成新入口回归与构建验证（全库 715、导航 27、浏览器 10、resolver 20、构建/类型/SSR）

- [x] 同一 NavMenu 独立入口面板互斥，覆盖横向/纵向键盘切换与普通入口点击；纵向筛选 demo 使用 popup-layout="full-height" 展示全高面板

- [x] 移除 updateLabel；选中值默认驱动标题，label 插槽支持固定和手动标题；迁移示例并补充三种标题策略 demo

- [x] 标题策略聚合为单个菜单；新增具名 Item 与根级 activeItem/defaultActiveItem，实现受控/非受控互斥高亮并保留各面板内部值；分别补充统一激活与独立激活 demo

- [x] 具名 Item 仅在选择叶子节点或调用自定义面板 select 后激活；打开面板不提前激活，无面板入口自身作为叶子处理

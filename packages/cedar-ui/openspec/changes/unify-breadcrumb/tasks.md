# Tasks

- [x] 统一主体、Props、上下文、类型与关键样式，保留本地平台入口
- [x] 双端配对测试及 SSR 验证：Cedar Breadcrumb 13 项，Maple 19 项；Cedar PageHeader 回归 7 项
- [x] 双端 Less 编译通过；全量源码一致性检查 124 对通过
- [x] 更新 API 文档、兼容性说明与同源分类/菜单

整库 vue-tsc 未通过：Cedar 默认配置存在 TS2209，指定 rootDir 后仍有示例 __VLS 重复声明和其他既有错误；Maple 存在 card/form/input-number 示例错误。本次主体文件未报告类型错误。未执行真实浏览器视觉验收。

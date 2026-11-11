# 验证记录

- Scheduler Vitest：30 文件，207 项测试通过；更新一处新增条件选择器的空渲染注释快照。
- Scheduler 独立 vue-tsc 检查通过；全库 vue-tsc 在修正 DropdownMenu 缺失导入与必填属性字面量后通过。
- 最新库构建通过；既有 visible-days/core 互相导入产生 Rollup 提示，纯核心发布产物 Node 导入和组合筛选/分配 smoke 检查通过。
- package:check：0 errors、0 warnings；共享规范：0 errors、2 条既有 Col/Row 行为测试警告。
- 浏览器验证：北站+小林匹配 2/5；两站+小陈匹配 3/5；按人展示后数据不变；详情可分别显示站、人，删除一人保存后站点保留，重新加入人员成功。示例已恢复。
- 远程维度参数、目录回显、受控筛选、未解析 ID 保留、隐藏事件容量校验和跨维度拖动保护均有回归测试。
- 附带修复 src/dropdown-menu/options.ts 的 createNamespace 导入和 branch-props.ts 两处 required 字面量类型，解除页面与声明构建阻塞。
- 并行构建产物稳定后，生成类型 API contracts 全部通过。

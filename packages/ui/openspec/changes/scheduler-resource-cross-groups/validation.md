# Validation

- Scheduler 完整回归：32 files / 214 tests passed。随后新增折叠和时长调整测试，相关 2 files / 9 tests passed（总用例现为 216）。
- vue-tsc 声明源检查通过。
- cedar-cli 编译通过；保留既有 visible-days 分块循环警告。
- 发布后的 es/scheduler/core 在 Node 中独立导入和交叉行运算 smoke 通过。
- 共享规范检查：0 errors / 2 既有 Col、Row 行为测试 warnings。
- 浏览器 localhost:9992：站→人、人→站切换，默认 5/5；新建表单自动选中北站与小林，保存后 6/6，撤销恢复 5/5；北站+小林筛选 2/5，清空恢复。无浏览器 error，已恢复默认分组与筛选。
- tsc 生成声明 API 契约检查通过；package check：0 errors / 0 warnings。

边界：组合行不虚拟化；传入资源目录先筛选再组合。共享任务拖动影响整条任务，不能表达不同站各自独立的人员分配关系。未满足完整资源维度的事件通过单维度/议程视图查看。

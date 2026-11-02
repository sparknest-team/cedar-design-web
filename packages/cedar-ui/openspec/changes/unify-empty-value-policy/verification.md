# 验证记录

日期：2026-10-29。仅记录实际执行结果；本轮不做受控行为迁移或发布产物重建。

## 测试

- Cedar：8 个受影响测试文件、90 项通过，覆盖空值策略、nullable clear、reactive fallback、搜索所有权、数字内核、日期时间字段、TreeSelect 清空和 Form 字段展示。
- Maple：6 个对应测试文件、72 项通过；日期手输、时间手输、时间字段公开契约另 3 文件、27 项通过。
- 数字与日期时间策略动态更新后补跑：Cedar empty-policy 36 项、Maple 30 项通过。新增测试覆盖哨兵不回写、合法空字符串、0/false、策略继承、required、自定义校验原值、各字段阅读模式和 TreeSelect 工厂一次求值。
- 既有 empty-value.spec.ts 回归两端各 41 项通过；默认清空解析未被替换。
- Cedar 旧 Vitest 在退出时打印 close timeout；额外设置 CHOKIDAR_USEPOLLING=1 后最终复跑 36 项通过，进程退出码为 0。未屏蔽断言或改变构建模式。

## 类型与源码边界

- 两端根目录 pnpm typecheck 通过（库声明/源码与 P1 API 配置）。
- 对本轮修改前快照逐一比较：48 个既有源码文件的 modelValue 与 undefined 比较、VNode modelValue/model-value presence 谓词未改变。共享模型代理和 open 所有权逻辑未重写。
- pnpm check:cross-platform 完整通过，包括 Input、字段展示、Select/Cascader、日期、时间、Form 内核等既有同源检查。
- 两端 git diff --check 通过。

## 文档

- 初版 4 篇指南的 12 段 Vue 示例已编译通过。后续按功能分组改为引用组件内单一 SFC，当前 20 份中英文场景与 4 个手机入口均编译通过。
- 两篇 Maple 页面经实际 Markdown 插件转换后的模板编译通过。
- 人读清单与 JSON 清单同步，45 个目录记录各自识别、清空输出、手动删除和校验，并附组合子项/纯面板/排除范围。
- 未运行完整生产文档站构建或浏览器三引擎发布验收；本轮未发布。

## 静态检查

- Cedar 根目录 pnpm lint 通过，包括 API naming（0 errors）。
- Maple 根目录 pnpm lint:check 通过，包括 API naming（0 errors）。

后续文档分组、示例交互与全量门禁边界见 `design-ui/audits/empty-policy-demo-grouping-2026-10-29.md`。

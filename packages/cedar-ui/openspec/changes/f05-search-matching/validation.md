# 验证记录

- Cedar 25 文件 180 项通过：`/private/tmp/cedar-f05-regression.log`。
- Maple 20 文件 148 项通过：`/private/tmp/maple-f05-regression.log`。
- 两端 root typecheck 通过：`cedar-f05-types.log`、`maple-f05-types.log`。
- Cedar lint、Maple lint:check 通过；末次 Maple lint 日志 `/private/tmp/maple-f05-lint-final.log`。
- AutoComplete/selection-field/selection-presentations 同源通过（7/25/43 对），Maple 1481 Demo SFC 无失败，5 个变更 Cedar Demo 编译无失败。
- Cedar spec:check 95 components / 0 errors / 0 warnings。
- 真实浏览器 value/label 两种输入均找到 Apple，控制台 error 为空；截图见审计目录 f05-value-label-preview.png。
- 两端发布声明生成与 tsconfig.p1-published-api.json 公开入口类型消费通过：`cedar-f05-declarations.log`、`maple-f05-declarations.log`、`cedar-f05-published-types.log`、`maple-f05-published-types.log`（均位于 /private/tmp）。
- 两端 git diff --check 通过。

未执行全库 production 构建或发布；F06 未改。

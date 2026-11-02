# 验证记录（2026-10-25）

## 通过

- Cedar 分批回归：主回归 28 文件/220 项（PeopleSelect、共享 composable、AutoComplete、Select、Search、Cascader 与字段候选/草稿）；另跑 Form option-field-transactions 36 项；最后增加缓存上限用例，两端 composable 各 16 项全部通过。合并去重共 Cedar 257 项、Maple 199 项。本记录不表示全库测试全部执行。
- Maple 主回归 25 文件/198 项；新增最后一项缓存边界后，两个异步契约文件共 21 项再次通过。
- Cedar 最终 PeopleSelect 3 文件/9 项重跑通过；静态与异步 Demo、readonly options、search 单次转发、loading、字符串清空、defaultValue、禁用/只读、readPretty/click 反显均覆盖。
- 两端 root typecheck 通过；两端 use 包 ESM/CJS/DTS 构建通过。两端 use/tsconfig.contracts.json 的公开入口消费类型用例通过；两端包入口在 Node ESM 与 CJS 环境可导入，不依赖浏览器全局。
- Cedar 声明生成及 tsconfig.p1-published-api.json 公开类型消费通过；没有重签已知全库 typecheck:contracts 的其他遗留失败。
- Cedar pnpm lint、Maple pnpm lint:check 通过；两端 git diff --check 通过。
- Maple docs:check：1479 个 Demo SFC，0 failures；5 个变更 Cedar Demo 均通过 SFC parse/compileScript/compileTemplate。
- Maple check:selection-field（25 source pairs）和 check:auto-complete（7 source/test pairs）通过。两端新增 useAsyncData.ts 字节一致。
- Cedar spec:check：95 components，0 errors / 0 warnings。
- 真实浏览器：本地 PeopleSelect 页面加载静态 options 与异步初始化 Demo；输入“吴”仅出现“吴甲明”，选中后 ID 为 wujiaming，控制台 error 为空。截图：cedar-api-audit-2026-10-24/people-select-options-preview.png。

## 回归日志

`/private/tmp/cedar-options-regression.log`、`maple-options-regression.log`、`cedar-options-form-tests.log`、`cedar-options-targeted-final.log`、`maple-options-targeted-final.log`、`cedar-options-people-final.log`、`cedar-options-types-final.log`、`maple-options-types-final.log`、`cedar-options-use-build-final.log`、`maple-options-use-build-final.log`、`cedar-options-declarations.log`、`cedar-options-published-types.log`、`cedar-options-lint.log`、`maple-options-lint-verified.log`、`maple-options-docs.log`、`maple-options-parity.log`、`cedar-options-spec.log`。

## 范围

无全库 production 文档构建、无发布。PeopleSelect 的 fetch/urlType 删除与 label 语义收敛已通过 major changeset 和迁移文档明确标记；其他组件数组属性、节点懒加载、Scheduler 资源查询/补全及 Upload 进度协议未改。后续 strict、守卫协议统一、泛型关联与其他改造仍须逐项确认。

# P1 修复与验证记录（2026-10-25）

对应审计报告 F01—F04。本次只修复这四项；工作区其他任务的修改保留，未提交、推送或发布。

## 实现与兼容性

| 问题 | Cedar | Maple | 兼容性决策 |
| --- | --- | --- | --- |
| F01 Table 分页配置 | 导出 TablePaginationConfig，total 可选；未传时从有效数据推导 | Table 为基础表格，无内置 pagination API，核对并回归原有 Table | 原 PaginationProps 对象仍可传入；独立 Pagination.total 继续必填 |
| F02 Switch 状态继承 | 字段 > FormItem > Form；支持直接嵌入 Form | 同步实现 | disabled/readonly 省略与显式 false 可区分；表单外仍表现为 false；修正继承行为，父状态变化使异步 beforeChange 失效 |
| F03 PeopleSelect 数据源 | 缺请求器时正常结束；新增外部 fetch 函数，搜索和反显统一使用此函数，支持取消和迟到结果保护 | 无 PeopleSelect，不新增组件 | 保留 fetch/urlType、Ares/OSS/详情 URL、参数和旧响应映射；新属性可选 |
| F04 Select 清空值 | 补齐 undefined 类型，新增可选 valueOnClear | 同步实现和导出 | 省略时完全保留 1.x 空字符串选项规则；多选返回数组并保留禁用已选项；单选覆盖同样不能清除禁用项 |

PeopleSelect 新源返回只读选项数组也可使用，组件映射时不修改调用方对象；函数形式不会请求旧适配器的内置地址。业务源收到 AbortSignal，是否真正停止网络取决于调用方；即使忽略取消，旧响应也不能覆盖较新的结果。

Select 的 change / update:modelValue 类型现在如实包含原来运行时已可能出现的 undefined。严格类型的消费方如果此前排除了 undefined，需要增加空值处理；此次没有把默认清空结果统一替换成新哨兵值。Switch 的继承修正会使过去错误忽略父级 readonly 的用法被正确阻止，显式 false 可以覆盖。

两端均增加 minor changeset，不自动修改版本、不删除旧属性。发布前仍须执行完整发布门禁。

## 自动验证

两端新增 53 项运行时回归（Switch 各 8、Select 各 11、Cedar PeopleSelect 13、Cedar Table 2），另补公共类型的正反例。新类型用例已接入根 typecheck 和既有 typecheck:contracts 清单。

| 检查 | 结果 |
| --- | --- |
| Cedar：vitest run src/switch src/select src/people-select src/table --threads=false | 30 个测试文件，160/160 通过，包含 TableColumnManager 路径匹配的回归 |
| Maple：vitest run src/switch src/select src/table --config ../cli/lib/node/config/vitest.config.js | 17 个测试文件，117/117 通过 |
| 两端根 pnpm typecheck（包含 tsconfig.p1-api.json） | 通过；最终源码 P1 类型用例另行复验通过 |
| Cedar：vue-tsc -p tsconfig.unified-build.json；Maple：vue-tsc -p tsconfig.declaration.json | 声明生成通过 |
| 两端：tsc -p tsconfig.p1-published-api.json | 本次 P1 用例消费生成后的声明，通过 |
| Cedar 根 pnpm lint；Maple 根 pnpm lint:check | 通过；最后修改的 Maple Select 文件额外 lint 通过 |
| Maple pnpm check:selection-field | 25 对独立源码和样式边界通过 |
| Cedar pnpm spec:check | 95 个组件，0 错误、0 警告 |
| Maple pnpm docs:check | 1474 个 Demo SFC，0 失败 |
| 两端 git diff --check | 通过 |

PeopleSelect 的旧快照原先取样于加载中，本次改为等待异步完成，并断言缺请求器时 loading 为 false；快照由 loading 图标变为正常展开图标。没有放宽测试断言或忽略失败。

## 范围外检查结果

全量 pnpm typecheck:contracts 仍未全部通过，不能视为完整发布验证通过：

- Cedar：type-tests/aligned-api.ts:48 使用 NavMenuItemProps.active，生成类型未提供该属性。
- Maple：type-tests/date-panel-api.ts 使用 exchangeTime、DateTimePickerOptions、timePickerProps、calendar/calendarClock 展示枚举，与当前生成声明不一致，并有一处未使用的 @ts-expect-error。

这些错误不在本次 Table/Switch/PeopleSelect/Select 范围；保留原断言，未通过跳过或弱化检查处理。本次 P1 的独立生成声明用例已全部通过。

没有执行完整全库测试、发布包 JS 构建、SSR/按需导入/生产浏览器验收，也没有执行 npm 发布。本记录仅声明以上实际完成的检查。

## 2026-10-25 后续修正

按用户反馈将尚未发布的 requestPeople/resolvePeople 方案收敛为单一外部 fetch 函数，参数支持 query/ids/signal；示例与类型一并迁移。旧对象形式仅保留发布兼容分支，隔离到 legacy-api.ts。以上原轮次验证结果不自动代表本轮已复验；本轮结果另行记录。

本轮复验：PeopleSelect 4 个测试文件、15/15 通过；根 typecheck、lint、声明生成与 P1 生成声明消费契约均通过；3 个 PeopleSelect Demo SFC 编译通过；spec:check 95 个组件无错误；git diff --check 通过。未追加 Maple 组件改动，Maple 无 PeopleSelect。未执行提交、推送、JS 生产构建或发布。

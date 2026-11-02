# P2 本轮验证记录（2026-10-25）

## 实施边界

- 已实施：TreeSelect allowSearch→filterable 无别名迁移，retainInputValue 独立；两端 Steps 类型对比；Search/Scheduler 示例整理；F15 版本注记、展示模式和 AutoComplete/Select 命名类型入口。
- 未实施：PeopleSelect 下一版统一签名、全库数据加载器/异步关闭协议、泛型、透传裁剪、虚拟列表公开配置、生命周期重命名与样式扩展新 API。本轮已给出调研方案。
- TreeSelect 删除旧入口为用户明确要求，Cedar changeset 为 major；Maple 没有 TreeSelect，新公开类型为 minor。
- 未提交、推送、发布；保留工作区其它任务修改。旧 Tree 键/标题测试数据迁至现有 value/label 契约，未放宽断言；Search 两个测试文件改用各自的卸载清理，避免旧 Vitest 中重复 enableAutoUnmount 冲突。

## 实际结果

| 检查 | 结果 |
| --- | --- |
| Cedar：Steps、TreeSelect、AutoComplete、Select、Search、Scheduler 首例与字段交互测试 | 26 个文件，188/188 通过 |
| Maple：Steps、AutoComplete、Select、Search | 23 个文件，167/167 通过 |
| Steps 新选择器改为库内 Select 后额外复验 | 两端各 1/1 通过；Cedar 浏览器真实选择也通过 |
| 两端根 typecheck | 通过，包含新增 p2-api 正反例；Cedar 明确拒绝旧 allowSearch |
| 两端声明生成 | 通过 |
| 两端 tsc -p tsconfig.p1-published-api.json | 本次 P1/P2 生成声明消费用例通过 |
| Cedar pnpm lint；Maple pnpm lint:check | 通过；Maple 现有 SafeArea 浏览器测试的六处纯格式错误已修正 |
| Cedar pnpm spec:check | 95 个组件，0 错误、0 警告 |
| Maple pnpm docs:check | 1477 个 Demo SFC，0 失败 |
| Cedar 本轮 9 个修改/新增 Demo SFC 编译 | 通过 |
| Maple check:auto-complete | 7 对源码/测试与两份 Less 通过 |
| Maple check:selection-field | 25 对源码、四份 Less 与宿主边界通过 |
| 两端 git diff --check | 通过 |

## 开发页面抽查

使用 Cedar VuePress 开发服务 127.0.0.1:9991；初次在沙箱中启动受本地监听权限限制，改为获准的本机监听后正常启动。

- Steps：真实打开 Current step 选择器，点击候选 3；default、arrow、dot、navigation 的活动项均为“完成”。已保存 steps-types-preview.png。
- Search：首例输入“项目 Alpha”，按 Enter 后状态为“已提交：项目 Alpha”。已保存 search-basic-preview.png；核对按钮、状态、加载、字段、历史、插槽与功能调试顺序。
- Scheduler：核对基础→资源→日历等章节顺序，基础示例先展示；浏览器抽查未记录 console error。单测验证首例无资源/请求器依赖并能接受 v-model 更新。

预览图与调研报告保存在 workspace 的 cedar-api-audit-2026-10-24 目录。本轮不是完整生产构建/全组件浏览器验收，也没有签收此前其它任务的生产产物。

此前全量 typecheck:contracts 存在 NavMenu/日期面板用例与声明不一致；本轮只运行新增 P1/P2 的独立生成声明配置，没有宣称旧全量契约门禁已全部恢复。

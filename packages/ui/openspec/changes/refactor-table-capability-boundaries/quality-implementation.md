# Quality 与三引擎回归记录

日期：2026-11-20。

## 验证对象与结果

本轮完成冻结候选的完整 quality 各门禁，以及 Chromium、Firefox、WebKit 的全组件生产回归。候选目录为 `/private/tmp/cedar-quality-frozen-4_u_kjcl/cedar-design-web`。最初冻结时源码和生产输入与工作区一致；后续修复同步写入工作区及候选，浏览器验收始终使用同一份生产源码和构建。

`pnpm quality` 完整执行后，前 22 项门禁通过，在浏览器兼容门禁发现测试定位与等待问题，命令退出 1。修复后完整执行 `DOCS_BROWSER_CONCURRENCY=1 pnpm check:compatibility`，三个引擎均退出 0。完整 Chromium profile 执行与 `check:docs-components` 相同的全部组件测试，并增加原生能力检查。最终按相同生产输入分阶段汇集 23 项门禁的通过证据；本记录不将最初的整条命令记为退出 0。

- 全量组件单测：1,143 个文件、6,976 个测试通过；文档单测 21 个文件、53 个测试通过。
- 构建、规范、lint、类型、方向、CLI、resolver、文档流水线、生产文档、包内容、真实 ESM/CJS/UMD 消费检查通过。
- Vue 3.2.47 源码兼容/声明降级检查通过；Vue 3.3.13、3.4.38、3.5.45 的发布包消费、SSR、DOM、hydration 与声明检查通过。Vue 3.0/3.1 未在本轮认证。
- Table 的 19 项契约/差分检查、两种模块格式各 13 个 summary/virtual SSR 场景、公开声明和导出对比通过。

## 三引擎生产回归

每个引擎覆盖全部 100 个文档组件、明暗主题、全部登记的源码面板、7 篇指南的两种主题，以及外部请求永久挂起的 4 个场景。每个引擎 239 项检查通过，无失败、跳过或取消。单并发仅控制独立浏览器上下文的调度，覆盖、组件断言和每项总时限保持不变。

| 引擎 | 实测版本 | 组件主题场景 | 指南场景 | 断网场景 | Table 专项 |
| --- | --- | --- | --- | --- | --- |
| chromium | 151.0.7922.34 | 200 / 200 | 14 / 14 | 4 / 4 | 明暗主题均通过 |
| firefox | 153.0 | 200 / 200 | 14 / 14 | 4 / 4 | 明暗主题均通过 |
| webkit | 26.5 | 200 / 200 | 14 / 14 | 4 / 4 | 明暗主题均通过 |

Table 专项验证 Core 原生命名与键盘横滚、物理冻结偏移、分组吸顶、auto/fixed 切换、分页 summary、虚拟头/体/汇总滚动同步、方向切换和数据替换后的实例保留。三个引擎的源码、生产输入和首页构建哈希一致，最终浏览器工具六个源文件哈希也与启动前一致。

## 本轮修复

本轮未修改 Table 的生产实现；新增双语组合演示和真实浏览器断言，修复以下文档、测试与工具问题：

- 主题契约的旧记录与 Cedar / Maple 已有样式不一致：按现有源码校正 metadata，保留组件样式默认值。
- 补齐演示分组与生成的 CSS 变量说明，登记 Maple Section，规范其画廊格式。
- 将 47 条已有英文译文登记到生成字典，修正通用参数表头的翻译；保留 API 成员、类型和默认值。
- 多选 Cascader 的旧断言改为检查真实 `menuitemcheckbox` 及选中状态，Cedar / Maple 定向测试通过。
- 弹层检查通过当前控件既有的 `aria-controls` 找到所属弹层；源码和演示区在实际滚动/几何稳定后执行真实指针动作。
- 静态服务在计时前读取固定生产快照，避免本地磁盘争用成为 UI 超时。保持源码内容、高亮、展开/收起、资源错误和完整 `load` 检查；断网原有 5 秒预算、1.2 秒图片延迟和外部永久挂起条件保持不变。普通页面导航与 5 秒控件等待分别设定，总测试时限不变。

浏览器工具测试 26 项通过，最终滚动与快照检查通过；Firefox 的自动补全、级联、选择聚焦复验 14 项通过。这些定向结果不替代全组件矩阵。ARIA 验证使用现有语义节点、名称和状态归属；既有 props、类型、API 条目及无障碍行为全部保留，没有按名称批量迁移。

## 兼容与体积

前后构建共享同一份依赖源码，原始 Table 参照及 1% 预算未更新。相对该不可变参照，完整入口 JS gzip 为 122,080 → 123,263 字节（+0.97%），CSS gzip 保持 30,943 字节。Core 为 13,462 字节 JS gzip / 5,681 字节 CSS gzip，Core 和可选状态/客户端计算的六个消费图与字节均保持不变。

文档修复后再次核对 1,507 个生产上下文文件及 Table 生产代码，均与本轮成对测量输入一致。公开声明、ESM/CJS 导出、SSR 标记和回调轨迹对比通过。

## 真机与后续并发改动

原生浏览器 12 个版本目标与手机 Table 11 项场景分别记录为 **pending**，没有实际设备验收。它们绑定候选发布包 JS/CSS 哈希 `219e0a19974e07e9b8c48f1cbae9340982737397d9b479aca26f3aa871c8e435`；归档包内 2,917 个 JS/CSS 文件已核对一致。真实版本验收前需刷新官方版本锁并补充设备、系统、测试人、时间及截图/视频证据。

本次结果仅覆盖归档候选。验证期间工作区又有 15 个依赖生产输入文件变化，另有 `table/table.tsx` 的后续分页 Teleport 改动：增加表内 template 锚点及 disabled Teleport。上述改动保持原样，未纳入本次候选验收，需在并发工作定稿后另行回归。完整差异清单和工作区指纹见验证 JSON。

## 可复查证据

- [完整验证索引](../../../../../artifacts/table-quality-validation/verification.json)、[23 项门禁及分阶段退出状态](../../../../../artifacts/table-quality-validation/quality-command.json)。
- [三引擎矩阵](../../../../../artifacts/table-quality-validation/production-browser/compatibility-matrix.json)、各引擎 coverage/navigation/capabilities 与日志。
- [成对兼容与体积对比](../../../../../artifacts/table-quality-validation/table-pair/comparison.json)、原始失败报告、最终通过日志及证据 SHA-256 清单。
- [Table 与测试工具源码快照](../../../../../artifacts/table-quality-validation/table-source-and-harness.manifest.json)、[四个候选发布包](../../../../../artifacts/table-quality-validation/release/manifest.json)。源码快照范围为 Table、演示/测试、质量与浏览器工具；发布包保留完整测试运行时代码。
- [原生浏览器待验收](../../../../../artifacts/table-quality-validation/native-acceptance.pending.json)、[手机 Table 真机待验收](../../../../../artifacts/table-quality-validation/table-physical-device.pending.json)。旧的全局原生验收文件保持原样。本轮未发布。

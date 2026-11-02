# 受控说明调研与 emptyValue 冲突分析

> 后续专项：本页主要是说明方式与入门示例调研。关于 emptyValue 是否合理、emptyValues 的实际消费者和内部 undefined 判断分类，以 [empty-value 专项核对](./empty-value-audit.md) 为进一步分析；不再仅凭父级归一化推定库内契约已经完整。

调研日期：2026-10-29。状态：文档调研完成，运行时统一尚未实施。外部材料只采用官方文档；当前实现的具体结论另按本地源码核实。

## 1. 文档来源与借鉴范围

| 官方来源                                                                                                                      | 本轮借鉴                                                     | 不应直接移植的规则                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [Naive UI：受控/非受控](https://www.naiveui.com/zh-CN/docs/controlled-uncontrolled)                                           | 简洁说明 undefined 与控制模式                                | 不能据此断言我们所有组件均严格受控                                                    |
| [Reka UI：Controlled State](https://www.reka-ui.com/docs/guides/controlled-state)                                             | 显式处理函数、v-model、defaultValue 并列，再列常见错误       | 只传值并非一律写错；可能有意固定状态。布尔示例应按 Vue 绑定方式传真正 boolean         |
| [React：Input](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)             | 用实际输入后是否恢复原值解释最终所有权                       | React 原生文本输入的 null/undefined 限制不等于我们 Input 的 null 支持                 |
| [Radix：Dialog 异步提交](https://www.radix-ui.com/primitives/docs/components/dialog#close-after-asynchronous-form-submission) | 以保存完成后由父级关闭说明业务用途                           | 不能直接照搬 React 的 open/onOpenChange 命名或假定声明式更新请求已经关闭弹层          |
| [Element Plus：Select Empty Values](https://element-plus.org/en-US/component/select.html#empty-values)                        | 空字符串作为合法选项，分开解释空值识别和清空输出             | empty-values 与 value-on-clear 是两个 API；不是我们单个 emptyValue 自动具备的两种能力 |
| [Vue：组件 v-model](https://vuejs.org/guide/components/v-model.html)                                                          | 用 prop+事件赋值解释 v-model；提示默认值可能与父级初值不同步 | v-model 语法不承诺每个第三方组件的最终状态策略                                        |

Naive UI 页面网页读取失败，已读取工作区同名官方文档源码 `naive-ui/demo/pages/docs/controlled-uncontrolled/zhCN/index.md`。其余上述页面本轮已通过网页读取。Element Plus 空值工具另对照当前本地 `element-plus/packages/hooks/use-empty-values/index.ts`，区分网上文档说明和工作区代码行为。

本轮不把任何一家称作所有细节上的标准答案：Reka 的组织适合入门，React 的操作反馈适合解释，Radix 的场景适合说明用途，Element Plus 的空值例子适合澄清 API 分工。

## 2. 三个概念需要分开

1. 所有权：谁决定最终 modelValue，当前多数控件以 external !== undefined 判定。
2. 动作输出：清空操作提出的候选值，由 emptyValue/fallback 决定。
3. 空值识别：该值怎样显示、是否对应合法选项、是否满足必填校验，由组件和表单业务规则决定。

EMPTY 字符串可以成为清空输出，但仍显示 EMPTY。0 可以成为某数值的清空输出，但不因此等于“缺失”；0 也可能是合法业务值。Select 的空字符串可以是“全部”选项，不能同时无条件作为“未选择”。这些现象都说明 emptyValue 不是空值判定器。

我们不因为 Element Plus 有两个 API 就立即新增 emptyValues。先把现有职责讲清，若需要自定义识别集合，再连同模型值域、选项匹配、显示和必填校验单独设计。

## 3. 当前源码证据

以下路径均以 Cedar 的 src 为例；Maple 对应独立实现另按相应路径核对。现有测试文件能证明预期用例存在，是否当前通过须看本轮验证结果，不能把源码中的 expect 当作通过记录。

### 共享 empty-value 工具

Cedar `src/_utils/empty-value.ts`，Maple `src/utils/empty-value.ts`：

- configured === undefined 时选择组件提供的 fallback。
- 工厂函数的返回值原样使用，显式 undefined 不被第二次合并为 fallback。
- null、0、false 等不会被 truthy 条件丢弃。
- 数组结果复制外层数组；不声称执行任意业务对象深拷贝。
- 通用类型允许什么与具体组件实例化的 T 有关，不能把支持 undefined 的数值工厂强塞给只支持 string/null 的 Input。

### Input

`src/input/use-input-value.ts`：clearValue 调用 resolveEmptyValue(props, '')；null 显示为空文字。普通 updateValue 仍按规范化后的文字更新，删空得到空字符串，不经过 clearValue 的空值覆盖。

### InputNumber

`src/input-number/use-number-value.ts`：clear 调用 resolveEmptyValue(props, undefined)；受控判定为 modelValue !== undefined。普通 edit/commit 路径可由空 raw 文本得到 undefined，不必经过 clear。modelEvent=input 时空候选可以更早发出。

因此 emptyValue=null 只能约束明确经过该配置的路径；不能代替统一的父级候选处理器，也不能声称自动把所有手动删空变成 null。

### Select

`src/select/use-select-controller.ts`：单选从零个 valueKeys 计算候选时，没有空字符串选项通常得到 ''，有空字符串选项则得到 undefined。clearSelection 再经 resolveEmptyValue。存在受保护的禁用选中项时按保留项计算 fallback，不用 emptyValue 强行全部清掉。

这解释了“选项一改，默认清空候选可能变化”的现状，也说明显式 null 如何区分合法空字符串选项与未选择。

### 既有行为测试入口

Maple `src/input/__tests__/empty-value.spec.ts` 已包含显式 null、Input 手动删空仍发 ''、Select 工厂返回 undefined、自定义非空输出和禁用选项保留等场景。文档示例针对这些实现路径编写；组件回归可能因工作区其他源码错误而受阻，验证结果应单独记录。

## 4. 冲突成立需要哪些条件？

必须同时满足：组件以 modelValue !== undefined 判断所有权、某条动作路径提出 undefined、父级把该值原样回传为 modelValue。

```text
清空候选 undefined
  → 父级原样赋值 undefined → 外部 prop 未定义 → 非受控
  → 父级转换成 null       → 外部 prop 已定义 → 仍受控（组件须支持 null）
  → 父级忽略、保持 A      → 外部 prop 仍为 A → 仍受控
```

不绑定模型时，undefined 只是内部空状态候选；父级只观察事件时，没有发生从父级交出控制。只运行工厂、只发事件、或 TypeScript 声明 ref<number|null>，也都不会自动改变外部值或完成归一化。

直接配置 :empty-value=undefined 与工厂返回 undefined 不等价：前者是“未配置覆盖，采用 fallback”，后者是明确的 undefined 候选。Vue 的 null 字符串和 :null 绑定也必须分别讲解。

## 5. 对上一版设计的修正

上一版把显式 undefined 工厂统一视作非法，建议类型排除且运行时取消。这个限制过强：

- 当前 API 已明确支持若干 undefined 工厂，且具备既有行为用例。
- 父级可以接收后归一化，组件提前取消会剥夺这一能力。
- 业务可能有意释放控制；只要契约明确，不能把所有这种使用一律视为错误。

修订为：标准/默认清空值采用已定义的领域空值；保留类型允许的显式工厂输出；父级决定接受、拒绝或转换；文档明确直接回写 undefined 的控制切换后果。若下一 major 的接管策略保留最近权威值，显式释放控制也不保证显示清空，应继续推荐定义明确的标准空值或父级归一化。

我们仍需要迁移 InputNumber/日期/时间等默认 undefined 路径，并审计键盘删除、面板确认及 reset；保留显式自定义能力不意味着默认值冲突可以不处理。

## 6. 当前可用的使用建议

- 文本先用明确的空字符串或允许的 null 初始化父级。
- 可空数值使用 number|null，显式处理 `(next: number|null|undefined) => quantity.value = next ?? null`，覆盖收到的所有更新来源。
- 不写 next || null，避免丢掉有效的 0。
- 空字符串是合法单选选项时，用支持的 null 表示未选择；多选按数组领域处理。
- 后端要求省略字段，在序列化层转换，不把后端缺失字段格式强加给 UI 所有权。
- 需要筛选时拆开 model-value 和 update；v-model 再加返回 false 的监听器不能取消自动赋值。

## 7. 文档交付准则

两端中英文指南均包含 10 个可独立阅读的完整 Vue 示例：非受控默认值与重挂载、受控接受、受控拒绝、条件接受、Input null 清空、InputNumber undefined 模式变化、父级归一化、合法空字符串选项、独立开合模型和表单 reset/序列化。

每种关键行为同时给“操作 → 候选 → 父级值 → 最终显示/所有权”的表或过程说明。所有代码保留相应库前缀，输入形态显式设 direct；引入的只是示例中需要的 Vue API，组件注册/样式以前置的快速开始为准。

现状、例外和目标分节。当前代理组件、Popup.beforeClose 例外、InputNumber 的非 clear 空路径必须保留，不能为了文档整齐而假装已经统一。完整代码语法/Markdown 编译与实际组件交互分开验收，不把编译通过宣称为浏览器行为通过。

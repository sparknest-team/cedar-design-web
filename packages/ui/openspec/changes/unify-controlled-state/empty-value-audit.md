# emptyValue / valueOnClear / emptyValues 专项核对

日期：2026-10-29。状态：源码调查与候选设计；不修改组件 API，不继续重整受控指南。先解决空值的输入、输出与消费规则，再评审所有权。

## 1. 结论

- 我们的 emptyValue 在职责上就是 Element Plus 的 valueOnClear：决定清空动作提出的值。这个能力合理，应该保留。
- emptyValues 是有价值的另一个能力：判断当前模型值是否应被组件当成没有值。现在没有等价的统一识别契约，空值判断分散在消费者中。
- 两者应该分工，不应该通过自动把 emptyValue 加入空值集合而强行绑定；清空也可能被业务配置为“恢复默认项/0/某个日期”。
- emptyValue 工具支持 null/0/false，不代表所有显示、计算、面板和确认路径都已经支持同样的值。用户关于内部 undefined 判断的担心成立，但需要按用途审计。
- 上一轮建议的父级归一化是现有版本的兼容办法，不应成为组件库最终设计依赖每个业务重复实现的前提。
- 先定义各组件族的空值识别与清空提交契约，再决定 undefined 的所有权含义；不能只凭 Naive UI 的说明反推整个空值体系。

## 2. Element Plus 实际怎样实现

官方说明：[Config Provider 空值配置](https://element-plus.org/en-US/component/config-provider.html#empty-values-configurations)、[Select 空值示例](https://element-plus.org/en-US/component/select.html#empty-values)。源码以当前工作区为准，并与官方 [use-empty-values](https://github.com/element-plus/element-plus/blob/dev/packages/hooks/use-empty-values/index.ts) 对照。

### 2.1 通用 hook 的职责

[element-plus/packages/hooks/use-empty-values/index.ts](../../../../../../element-plus/packages/hooks/use-empty-values/index.ts) 返回三个入口：emptyValues、valueOnClear、isEmptyValue。

| 项目                  | 当前源码行为                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| emptyValues 的优先级  | 实例配置 > ConfigProvider 配置 > 默认集合                                                      |
| 默认集合              | 空字符串、undefined、null                                                                      |
| valueOnClear 的优先级 | 实例函数/已定义值 > 全局函数/已定义值 > 调用方提供的默认值 > undefined                         |
| 日期/时间等调用方     | 可以向 hook 提供 null 默认值，因此不能说所有组件默认清空都是 undefined                         |
| 直接传 undefined      | 仍表示没有实例覆盖，会继续取全局/组件默认                                                      |
| 函数返回 undefined    | 明确取函数结果，不再回退全局值                                                                 |
| 普通值识别            | 使用 includes，0/false 不在默认集合，NaN 仅在显式列入时才被视为空                              |
| 数组值识别            | 对配置候选逐个用 lodash isEqual 比较；不是两个新数组直接用引用 includes                        |
| 清空值不属于空值集合  | 提供开发诊断，但 hook 不强制转换或拒绝该输出                                                   |
| 函数求值时机          | valueOnClear 是 computed，首次消费时求值并缓存，依赖失效才重算；不是每点一次清空必调用一次工厂 |

启动时一致性检查就会读取 valueOnClear，因此工厂不能假定只有清空点击才会执行。源码的 Props validator 也可能在开发校验中调用函数；不要依赖调用次数产生业务副作用。

### 2.2 必须看消费者，不能只看 hook

[element-plus/packages/components/select/src/useSelect.ts](../../../../../../element-plus/packages/components/select/src/useSelect.ts)：单值 hasModelValue 使用 isEmptyValue 的结果，进一步参与清空按钮、占位符等显示逻辑。多值模型则直接按数组长度判断。清空时，单选使用 valueOnClear；多选构造新数组并保留不能清除的禁用项，再派发模型更新及 change/clear。

[element-plus/packages/components/select-v2/src/useSelect.ts](../../../../../../element-plus/packages/components/select-v2/src/useSelect.ts)：同样存在 isEmptyValue、单选清空返回值与多选数组路径，具体判断分支与 Select 并不完全相同。

[element-plus/packages/components/time-picker/src/common/picker.vue](../../../../../../element-plus/packages/components/time-picker/src/common/picker.vue)：调用 useEmptyValues(props, null)。除了清空按钮，手动输入成为空文字/空范围时，也有进入 valueOnClear 的提交路径。这比只改清空按钮完整；不据此宣称所有日期子面板路径已经穷尽。

[element-plus/packages/components/color-picker/src/color-picker.vue](../../../../../../element-plus/packages/components/color-picker/src/color-picker.vue)：清空使用 valueOnClear，部分颜色确认路径也调用 isEmptyValue 选择输出。各组件接入程度不同，不能把 hook 的能力当成每个组件已使用的全部能力。

### 2.3 同名 valueOnClear，InputNumber 是独立契约

[element-plus/packages/components/input-number/src/input-number.vue](../../../../../../element-plus/packages/components/input-number/src/input-number.vue) 和 [element-plus/packages/components/input-number/src/input-number.ts](../../../../../../element-plus/packages/components/input-number/src/input-number.ts) 并不使用通用 useEmptyValues 管理该属性。

- 该属性接受数字、null，以及 min/max 两个边界指令。
- 默认值是 null。
- 解析空文字时选择配置值；min/max 指令再解析到边界数值，并继续走该数值控件的精度、步长及边界计算。
- 不是通用的任意空值集合，也不是所有组件都接受同样的工厂或类型。

这说明合理的统一应统一职责与接口边界，而不是强迫文本、数值、集合、日期使用同一段空值转换算法。

## 3. emptyValues 的实际用途

### 场景 A：空字符串本身是“全部”选项

模型为空字符串可以表示已选择“全部”；null 表示没有选择。Element Plus 的配置是：

```vue
<el-select
  v-model="selected"
  :empty-values="[null, undefined]"
  :value-on-clear="null"
  clearable
>
  <el-option label="全部" value="" />
  <el-option label="仅启用" value="enabled" />
</el-select>
```

这里移除空字符串的空值身份，才能让它按有效选项参与显示及清空按钮逻辑；清空返回 null 又保证清空后的值确实被识别为空。两个配置分别解决读和写的问题。

我们当前 Select 已有识别空字符串选项的局部处理，不能简单说它完全不支持该场景。缺点是默认清空结果会根据当前选项表是否含空字符串而变；没有显式的空值契约，容易与其他组件、包装层和后续异步选项状态产生差异。

### 场景 B：历史接口把 -1 当作未选择

选择类组件如果支持一个明确的原始值空集合，可把 -1 与 null/undefined 一起识别为空；清空也输出 -1。这样初始化、外部回填、清空后的模型都能保持同一含义，而不必在每处手写转换。

不能只改变输出：若仍按有效选项或原始文本渲染 -1，清空后会显示 -1，清空按钮也可能仍然可用。反过来，只配置识别集合而清空继续输出集合以外的值，也可能清不干净。

### 场景 C：清空实际表示恢复 0/某个默认选项

当前我们允许这类输出，既有示例/回归也包含自定义非空值。它可能是合理的业务重置，不等于该值从此应该被全组件当空值。

例如数值 0 原本是合法数量；不能因为 emptyValue=0，就自动使所有 0 的显示、计算和校验都变成无值。空值识别集合必须独立于清空输出。

## 4. 我们当前支持到了哪一层

[cedar-design-web/packages/ui/src/_utils/empty-value.ts](../../../src/_utils/empty-value.ts)、[maple-design-mobile/packages/ui/src/utils/empty-value.ts](../../../../../../maple-design-mobile/packages/ui/src/utils/empty-value.ts)：只解析清空输出，省略/直接 undefined 采用 fallback，工厂返回值原样保留，数组复制外层。没有负责识别任意模型是否为空，也没有全局空值配置解析。

这与 Element Plus 通用 hook 的 valueOnClear 部分职责相当，但以下细节不同：

- 我们目前由各组件传自己的 fallback，缺少同一套实例/全局/组件默认层级。
- 我们在 resolver 被调用时执行工厂，而非 computed 缓存；因此必须在一次清空事务里只解析一次，并复用结果。
- 我们允许的业务输出更宽，不能直接把 Element Plus 的非成员诊断变成强制禁止非空结果。
- 数组 clear 结果通常会被复制，但业务对象并不自动深拷贝，也不能因此推断集合内部所有值都合法。

### 4.1 有些 null/undefined 已经正确兼容

[cedar-design-web/packages/ui/src/input-number/number-value.ts](../../../src/input-number/number-value.ts) 的格式化使用 nullish 判断，null/undefined 显示空文字；0 继续按数值处理。[cedar-design-web/packages/ui/src/input/use-input-value.ts](../../../src/input/use-input-value.ts) 也专门支持 null 的空显示。

因此，“好多 undefined 判断”不等于“改成 null 一定全面失效”。必须看每个判断用途和上游是否已归一化。

### 4.2 内部默认空表示仍不一致

[cedar-design-web/packages/ui/src/select/use-select-controller.ts](../../../src/select/use-select-controller.ts) 单选零项时，默认候选随空字符串选项存在与否在空字符串/undefined 间变化；选择归一化又按数组、字符串、布尔和数值区分。单靠增加 emptyValue 并未建立统一的输入识别层。

[cedar-design-web/packages/ui/src/_components/field-presentation/with-field-presentation.ts](../../../src/_components/field-presentation/with-field-presentation.ts) 的通用阅读格式化硬编码 null/undefined/空字符串为空。若将来允许某值在选择器中是有效选项或在 emptyValues 中是自定义空标记，阅读态也必须使用适配后的 label/空值语义，不能只更新编辑器。

### 4.3 清空按钮与键盘删空不共用同一出口

[cedar-design-web/packages/ui/src/input-number/use-number-value.ts](../../../src/input-number/use-number-value.ts)：clear 使用 resolveEmptyValue(props, undefined)，手动删空的 commit 则从 raw 空字符串直接得到 undefined；legal 计算也有独立的内部无数值表示。Input 的点击清空与手动删光也分别可以输出 null 与空字符串。

这需要定义明确范围：emptyValue 是仅控制图标点击，还是控制“用户提交空值”的出口？本次建议后者，但保留未提交的 IME/数字中间文本独立，不能每次编辑到空白就强制回填默认值。

### 4.4 Cedar TreeSelect 的同次清空重复解析风险

[cedar-design-web/packages/ui/src/tree-select/TreeSelect.vue](../../../src/tree-select/TreeSelect.vue) 的 setSelectedValues 清空路径先解析 emptyValue 更新本地集合，随后 nextTick 分支再次解析用来发事件。若工厂有变化，两次结果可能不同。

这是已核实的源码路径风险；本轮未作完整组件/浏览器复现，不把它报告成已修复或全部场景必现的错误。推荐后续一次清空只解析一次，并在有效事务内让存储、显示及事件共用同一结果；上游禁用项保留等分支仍需测试。

Maple 当前源码未发现对应 TreeSelect 组件，本条只登记 Cedar，不虚构跨端同名覆盖。

## 5. undefined 判断必须分类，不能全局替换

| 判断用途           | 源码例子                                             | emptyValues 应否替代                                         |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| 外部模型所有权     | InputNumber modelValue !== undefined                 | 否。空但已定义的值也可以由父级控制；该规则留到所有权阶段评审 |
| 配置是否覆盖       | emptyValue === undefined、precision 未设置           | 否。它表示缺省，不是字段业务空值                             |
| 真正的模型空值识别 | selected 值是否存在、显示占位符、清空按钮是否可用    | 适合接入组件族策略，但须追溯上游归一化                       |
| 数值解析结果       | 未完成的符号、小数点、非法数字得到 undefined         | 否。需区分中间态/非法值/提交空值，不能按业务空集合直接合并   |
| 计算的内部无值表示 | clampNumber 对 null/undefined/非有限数返回 undefined | 不直接替换；在领域边界做识别与输出适配                       |
| 原生属性省略       | aria-valuenow、placeholder 的 undefined              | 否。这是 DOM 属性约定                                        |
| 异步/缓存缺省      | pendingValue、queuedCommit、句柄未设置               | 否。这是内部生命周期状态                                     |
| 容器空集合         | 多选数组长度为 0、范围端点为空                       | 按领域规则处理，不对数组简单套用标量成员判定                 |

批量把 undefined 改成 null、把所有 if 改成 isEmptyValue、或把空值集合用来判断受控都会产生新的错误。

## 6. 建议的库内设计边界（待评审）

### 6.1 保留清空输出，并设计显式输入识别

概念上采用三个入口，不直接写成已实现 API：

```ts
// 接口职责示意；每个组件族的值域和默认规则仍需定义。
resolveClearValue(); // 一次清空提交要提出什么
isEmptyModelValue(value); // 传入/内部最终模型是否算空
hasModelValue(value); // 容器与标量按组件族组合，供 UI 消费
```

内部尽量让编辑态、阅读态、占位符和清空按钮消费同一策略。选项身份、日期合法性、数值边界、禁用项保留仍是各自领域规则，不能塞进一个通用 isEmpty。

公共职责建议为 valueOnClear + emptyValues；现有 emptyValue 的职责不用删除。若最终统一命名为 valueOnClear，应按已发布版本政策迁移。当前不直接改名、不新增同义参数、不实现 emptyValues 后又让 singular/plural 混用。

### 6.2 先明确哪些组件需要 emptyValues

| 组件族                                                       | 建议                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 单值 Select / Cascader / TreeSelect 等选择类                 | 优先支持，可处理合法空字符串和历史哨兵；分别审计现有能力与端侧范围                                   |
| 多选 / 文件列表 / 展开集合                                   | 空容器按长度；不要把数组某个成员为空误判为整个集合为空，保留受保护项规则                             |
| Input / Textarea                                             | 空文字是原生显示事实；清空输出配置有用，但任意空值集合不应把普通文字当成不显示的值                   |
| InputNumber                                                  | 需要数值领域协议，至少核对空提交、0、min/max、步进、精度及父级回填；不先承诺任意 0/-1 都可作为空哨兵 |
| Date / Time / Range                                          | 先区分无值、非法值和部分草稿，再定义输入适配；不能把非法日期静默变成未选择                           |
| Switch / Radio 单项、Pagination / Steps 等有既定状态域的组件 | 不为 API 整齐而统一添加可任意配置的空值集合                                                          |

对象值的比较、Date、NaN、负零、数组空容器都要明确定义。首期标量识别可以沿用 includes 的 SameValueZero 语义，不强行通用深比较任意业务对象；集合路径按领域处理。0/false 不应默认算空，只有组件支持且业务明确配置时才采用相应空标记。

### 6.3 输出与识别保持可解释的一致

若意图是真正“清为空”，清空输出应被识别为空；若意图是恢复 0/默认选项，则允许输出非空值，但显示和后续操作应按普通值处理，不自动把它加入 emptyValues。

Element Plus 会诊断 value-on-clear 不在 empty-values。我们应借鉴它对不一致的关注，但现有自定义非空重置值已经是业务能力，不能不加区分地拒绝。是否提供开发诊断以及触发条件应在具体组件方案中明确，不新增仅为消除诊断的模式开关。

### 6.4 所有用户空提交走明确出口

推荐流程：

```text
原生输入/面板候选
→ 区分编辑中间态与最终空提交
→ 识别该组件域的空状态
→ 对一次空提交解析一次清空输出
→ 领域校验/已有守卫/禁用与保护规则
→ 发更新请求并交给原有所有者
→ 使用相同输入识别策略重新读取回传值
```

最终空提交包括图标点击、手动删除后的确认/失焦、面板清除和相应公开 clear 方法。Form reset 是外部赋值，不应伪造用户 clear/change；它需要使用同样可被识别的模型值，但不应为读取模型而执行清空工厂。初始化也不能触发工厂执行产生的业务副作用。

工厂约定建议为无副作用，并在本库每次有效清空提交只解析一次；不照搬 Element Plus computed 缓存时机。数组结果按类型复制容器，避免实例之间共享可变数组。

### 6.5 Form 校验不是 UI 识别集合的自动附属品

如果 -1 被某选择器视为空，普通 required 或外部 schema 未必同样认为它为空。必须明确与 FormItem 的交互或提供对应校验示例，不能只加 emptyValues 就宣称任意校验框架同步生效。

不自动把 UI 空集合规则注入所有 Zod/业务 schema，也不把显示为空当成业务上合法。若需要统一必填识别，单独定义受支持的 Form 集成协议。

## 7. 默认值与所有权暂不提前定案

上版“标准空值都使用已定义值”的建议是一个所有权方案下的候选，不是已经批准的最终空值规范。应先列出每个组件族现有输入值域、默认输出、工厂覆盖、手动删空和外部回填，再选稳定的兼容策略。

选择类长期应避免默认清空结果随异步选项表变化；可能的下一 major 方案是稳定的标准清空值配合显式 emptyValues，但本轮不把所有组件统一改为 null，也不以传输格式决定 UI 值域。

emptyValues 即使包含 undefined，也不解决“undefined 是否表示未受控”；排除 undefined 也不会自动让当前组件把它视为受控值。这是之后必须单独决定的所有权规则，不要把两者合并。

## 8. 本轮验证及下一步

- 阅读 Element Plus 通用 hook、Select/SelectV2、数值、日期/时间与颜色消费者，核对两端 resolver 及代表性组件路径。
- 使用实际源码转译、真实 Vue computed/reactivity 与 lodash equality，对 hook 配置优先级、空值识别、诊断、computed 缓存和两端 resolver 做了 42 项逻辑探针，全部通过。注入环境与 utils 导出使用适配器，未冒充完整 ConfigProvider/组件/浏览器测试。
- 未修改组件运行时、公共 Props、默认值或用户受控指南；本轮只记录调查并为旧设计增加前置评审标记。

后续先完成“组件族 → 接受的空输入 → 清空输出 → 显示/占位/清空按钮 → 数值/日期计算 → 事件 → Form”的契约表，再实现统一空值策略和行为测试。该表稳定后，才重新整理受控/非受控规则与指南。

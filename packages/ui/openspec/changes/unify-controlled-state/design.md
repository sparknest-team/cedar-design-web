# Cedar / Maple 受控与非受控设计

> 2026-10-29 前置评审：本方案的空值默认值和所有权部分暂不作为可直接实施的定案。先完成 [empty-value 专项核对](./empty-value-audit.md)，明确 value-on-clear 输出与 empty-values 输入识别、组件族的内部无值表示及所有空提交路径，再继续整理受控/非受控。当前用户指南保持现状，不在本轮再次改写。

状态：待实施的设计提案。初稿：2026-10-28；文档调研及 emptyValue 修订：2026-10-29。本文的“目标”不是当前版本保证；现状以两端受控指南为准。

## 1. 推荐方案及依据

统一最终状态所有权，允许不同平台保留草稿、手势和动画实现。采用与 Naive UI 类似的 `prop !== undefined` 判定；不把 Vue 的 `v-model` 语法本身视作严格受控的保证。

Vue 官方将组件 `v-model` 展开为 prop 与更新事件；prop 遵循单向数据流。这为父级持有状态提供机制，但“是否拥有本地代理”“如何处理默认值和 undefined”仍需组件库自行制定契约。[组件 v-model](https://vuejs.org/guide/components/v-model.html)、[单向数据流](https://vuejs.org/guide/components/props.html#one-way-data-flow)。Naive UI 的受控说明也使用 undefined 作为未受控标识；其对应源码文档在当前工作区 `naive-ui/demo/pages/docs/controlled-uncontrolled/zhCN/index.md`。

| 决策                       | 推荐理由                                                    | 付出的代价                                                |
| -------------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| 定义过的 prop 决定最终状态 | 父级拒绝、权限校验、表单回滚可以可靠工作；同名 API 跨端同义 | 业务必须回写希望接受的更新                                |
| `undefined` 只表达未受控   | 与已有公共表单契约及多数实现一致，无需新模式属性            | 默认清空发 undefined 的路径要迁移；显式工厂保留并说明后果 |
| 默认值仅初始化             | 避免清空后复活初始值；初始化不会污染表单或触发保存          | 重置需要显式操作，不靠改 defaultValue                     |
| 草稿/手势与最终值分离      | 保留输入法、中间文本、确认编辑和移动跟手体验                | 组件需实现明确的提交/取消/恢复边界                        |
| 守卫只处理内部请求         | 父级强制关闭、权限撤销、路由离开和表单重置始终有效          | 外部更新不再自动调用 beforeClose/beforeCommit             |
| 模式切换继承最近的权威值   | 释放控制时不复活被父级拒绝的候选值                          | 需要保存最近外部值的快照                                  |

该方案同时服从已有 [公共表单契约](../../../../../../design-ui/standards/form-controls.md)、[事件规范](../../../../../../design-ui/standards/events-and-models.md) 和 [跨端约定](../../../../../../design-ui/standards/cross-platform-contract.md)。状态语义一致不等于两端共享运行时实例；源码继续按仓库约定独立维护并校验一致性。

## 2. 已核实的现状与修复范围

以下是源码核实样本，不宣称已经穷尽全组件状态。实施第一步必须建立完整清单。

| 范围                                             | 已核实行为                                                                         | 处理                                                                 |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 两端 Input、Switch、Slider                       | 已定义模型为最终值；Switch/Slider 仅非受控时更新内部最终值                         | 保留所有权原则；补模式切换和浏览器原生恢复测试                       |
| 两端 Collapse                                    | `modelValue ?? innerExpandedNames`，null 会回退                                    | 统一 undefined 判定；非法 null 不应使组件进入非受控；标准空值仍为 [] |
| 两端 useVModel                                   | 默认 passive 代理，写内部 ref 后 watch 派发；null 与 undefined 都回退默认值        | 保留既有公共工具行为，但不再作为新组件最终状态的所有权工具           |
| Maple ActionSheet                                | open 使用默认代理，选项点击可以本地关闭                                            | 改用统一所有权；更新请求不代表已关闭                                 |
| Maple NumberKeyboard                             | open、modelValue 分别使用默认代理                                                  | 两个模型分别受控；拒绝输入时保持最终字符串                           |
| Maple FloatingPanel                              | anchor 是代理，visibleHeight 保存手势高度                                          | 保留拖动预览，提交停靠高度后从权威模型恢复                           |
| Maple Popup                                      | beforeClose 存在时，以 visible 代替外部 open；外部 false 也可能触发守卫并回弹 true | 守卫从最终状态读取路径移除；外部关闭不补发反向更新                   |
| 两端 InputNumber、日期/时间等字段                | 已有 undefined 空值及 emptyValue 工厂路径                                          | 把清空/释放控制分开；逐个迁移模型、事件类型和默认空值                |
| 两端 useFieldValue / useFieldOpen                | 存在内部回写/快照行为；useFieldValue 有可选 controlled 判定                        | 审计真实调用方；不能只修改工具后便认定所有组件已统一                 |
| 两端 Dialog/Drawer、Upload、Form/Group、Table 等 | 已有自己的事务、队列、继承与具名状态                                               | 用共同契约逐项验证，不机械替换完整控制器                             |

证据入口：两端 `packages/*-use/src/useVModel.ts`；两端 `packages/*-ui/src/input/use-input-value.ts`、Input 主组件、`switch/Switch.vue`、`slider/Slider.vue`、Collapse 主组件、`input-number/use-number-value.ts`、`_components/picker-field/use-field-{value,open}.ts`；Maple 的 `action-sheet/ActionSheet.vue`、`number-keyboard/NumberKeyboard.vue`、`floating-panel/FloatingPanel.vue`、`popup/Popup.vue`、`utils/modal-surface.ts`。不以文档命名或历史测试通过记录代替当前实现审计。

## 3. 每个状态的基本契约

对每个公开的可写模型分别定义 `external`、`local`、`effective`：

```ts
isControlled = external !== undefined;
effective = isControlled ? external : local;
```

它是语义公式，不是可复制的完整 Vue 实现。

内部合法操作产生候选 next：非受控时保存 next；受控时不修改 effective、不保存未被采纳的候选作为回退值。随后发出一次对应的 `update:xxx(next)`；本地更新在派发前完成，派发后的同步回调可能已重置或替换外部状态，不能再回写旧候选。父级保持原值意味着拒绝；父级回传另一合法值意味着修正，以父级回传值为准。没有监听器也不改变所有权。

watch 外部值只同步读取、恢复视图、取消旧事务；不能重新发 update/change。初始化、修改默认值、改变控制模式也不发业务更新事件。相同值是否为无效操作，由组件领域相等规则在提交前判断；基础工具不做全库深比较，也不借 watch 自动派发。

`modelValue`、`open`、`inputValue`、`pageSize`、`expandedValues` 等分别判断。Form/Group 中由真正持有该状态的层级决定最终值；嵌套控件不能从 Provider 值再复制一份自主管理。

布尔模型 prop 必须 `default: undefined`，而非隐式 Boolean 缺省 false。数值模型不能因 `0` 而回退；不过页码等是否允许 0 仍由该组件值域决定。

## 4. 默认值与控制模式切换

- 首次非受控：读取 defaultValue/defaultOpen；缺省时使用组件本来的初始行为，例如合法页码 1。默认值不必在所有组件强行统一成 null。
- 首次受控：外部值优先；defaultValue 不能参与显示、清空或后续回退。
- 非受控 → 受控：立即采用外部值，废弃本轮草稿/候选，取消过期异步提交。
- 受控 → 非受控：从最近一次外部权威值的快照接管。例：父级保持 A，组件提出 B 被忽略，父级后来传 undefined，应接管 A，不能显示 B 或旧 defaultValue。
- 同一 tick 内 A → B → undefined 也应接管 B；不能依赖默认异步 watch 合并而丢失最后外部值。需要同步捕捉外部更新及一致的生命周期测试。
- “最近外部值”指组件实际观测到的 prop 值；父级在一次渲染前把 B 改回 undefined、B 从未传到组件时，组件无法也不应推断 B。
- 对数组/Date 保存由组件负责的快照；copy-on-write，禁止原地改父级数组、Date 或对象。只克隆本组件拥有的可变结构，不通用深克隆选项对象、File、函数或带身份含义的业务对象。

不锁定挂载时控制模式，不新增 public controlled 标记。切换是定义明确的接管，不是重置；业务重置使用父级赋值、既有 reset API 或 remount。

## 5. 清空：空值属于数据模型

`undefined` 是所有权标识；目标版本不再用它作为可清空模型的默认/标准用户更新值。显式 emptyValue 工厂仍可在该组件现有值域允许时返回 undefined，最终是否释放控制取决于父级回写。null 是已定义值，但仅在组件值域允许时才是合法空值。禁止用 `?? defaultValue` 实现最终模型读取。

| 模型类型                                       | 目标标准空值/关闭值                 | 原因                                                     |
| ---------------------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| Input、Textarea、Search、NumberKeyboard 字符串 | `''`                                | 自然的空文本，无需让表单类型统一可空                     |
| InputNumber、可清空单选、Date、Time            | `null`                              | 0、false、空字符串可能是合法选项/数值；“无值”需独立表达  |
| 多选、展开集合、勾选集合、文件列表             | `[]`                                | 空集合仍属于原模型类型                                   |
| DateRange、TimeRange 的整个范围                | `null`                              | 与完整范围及编辑中的部分端点区分；不为形式统一改成空集合 |
| open/show 等布尔状态                           | `false`                             | 关闭仍是一个确定状态                                     |
| Switch                                         | 配置的 uncheckedValue（默认 false） | 关闭取值遵循该组件业务模型                               |
| 页码、步骤、停靠高度等有边界数值               | 无通用“清空”；使用合法领域值        | 不能随意赋 null、0 或 undefined 来伪装重置               |

范围的部分端点是否允许提交继续服从原组件业务协议；本变更不借清空设计统一收窄所有范围为 tuple。旧 [] 空范围等输入/事件差异在迁移表中逐项说明。

`emptyValue` 保留现有的“清空动作输出”职责，按具体组件值域支持直接值或工厂，不把它扩展为全库的空值识别列表。省略或直接传 undefined 使用组件 fallback；显式工厂返回 undefined 表示确实提出 undefined 候选。已有允许该工厂的组件不因本方案一律删除这个能力，也不擅自取消请求或转换业务值。

关键时序是：工厂输出 → 组件提出候选 → 父级接受/拒绝/转换 → external 值决定所有权。父级可以把 undefined 候选归一化为 null，既兼容旧输出又保持受控；直接回传 undefined 则明确释放控制。按第 4 节目标接管策略，释放控制也不等于清空显示，因此默认清空及持续受控表单应选用已定义空值。

需要同时审计清空按钮、键盘删空、面板清空、Form reset。当前 Input 点击清空可发 null，而手动删除发空字符串；当前 InputNumber 的 clear 经 resolveEmptyValue，手动删空提交则直接计算 undefined。不能只给按钮配置 emptyValue=null 就声称所有空输入都将变为 null。目标标准路径应一致地产生该领域空值，显式覆盖继续按配置发出；迁移期间在父级边界归一化最稳妥。

`emptyValue='EMPTY'`、数字 0 等非空输出是自定义清空结果，并不自动定义“此值是空”或“应显示占位符”。以后若要支持空值识别集合，必须单独设计相关模型/选项/校验语义，不能直接把 Element Plus 的 empty-values 当成现有 emptyValue 的同义 API。

后端要求缺失字段时，在表单提交的序列化层将 null 转为省略字段，不让传输格式决定交互控件的所有权。Form 初始化和 reset 同样使用组件标准空值；不要把受控字段 reset 为 undefined。

这会改变已发布默认清空值和部分类型，是 major 迁移项；现有版本不能提前按此目标撰写使用说明。

现有 `openspec/changes/time-selection-events/specs/time/spec.md` 明确约定 TimeRange 清空发 undefined；本提案在下一 major 有意替代该空值要求，select/change 的其他载荷和顺序不随之重做。不能在归档时同时保留两条互相冲突的空范围规范。

## 6. 草稿、跟手、原生 DOM 与动画

最终值、编辑草稿、视图过渡是不同层级的状态，允许短暂不同，但不能互相冒充。

- Input/IME：组合输入与格式化中的原始文本可暂存；提交后父级不接受，应在 Vue 更新结算后恢复到权威模型对应的文字，并正确维护光标、组合状态。InputNumber 的 `-`、`1.` 等中间文本不直接成为最终业务数值。
- 弹层确认：面板编辑只改 draft；确认先校验/守卫，再提出更新；取消不提交。父级传入新模型时取消旧事务并以外部值恢复，不能让旧确认覆盖新值。
- 确认提出更新后不等待“猜测父级接受”；按既有确认行为结束草稿会话并请求关闭。值与 open 独立，受控 open 未回写时弹层保持打开，但不得继续把已提交候选展示为最终值；从权威模型重建可用草稿。不能用 settled 锁永久卡住仍然打开的编辑器。
- FloatingPanel：移动过程显示 dragHeight；touchend 计算合法 anchor 并发出请求；父级不回写时动画回到当前权威 anchor，父级修正为 C 时停到 C。停用、取消手势和外部替换均清理旧拖动事务。
- Radio/Checkbox/Switch：真实 DOM checked、ARIA 与最终模型一致；不能仅修复 CSS。Radio 还要恢复原生互斥导致的同组旧选项变化。
- Popup/Drawer：leaving/shouldRender 保留退场 DOM，不改变 open 模型；动画结束前暂留 DOM 不等于仍拥有打开状态。

普通值请求可以在 Vue 一轮更新结算后恢复；不能用任意定时器或“等待一个网络延迟”的本地乐观代理。业务如果需要乐观提交，应由父级主动回写候选并负责失败回滚。

## 7. 异步守卫、事件与副作用

内部交互或受保护方法：候选 → 校验/已有守卫 → 允许后发更新请求。守卫拒绝/失败不改最终状态。异步期间使用现有 pending、AbortSignal 和请求代次；组件卸载/停用、外部权威值替换、控制模式变化或相关操作条件变化，使旧结果失效。

外部 prop 是结果，不是请求：父级设置 open=false 直接生效，不调用 beforeClose，不补发 update:open(true)。需要“询问是否离开”的业务应先在父级路由/操作流程中询问，再赋值。不能让组件否决权限撤销或应用销毁。

包装组件只保留一处操作守卫。ActionSheet 关闭、NumberKeyboard 关闭等都经过其已公开的关闭约定；基础 Popup 不能再重复执行同一业务守卫。Expose 的 requestClose / close 按各自已有语义逐个审计，不能统一改名或默认改成强制关闭；即便跳过守卫，受控组件的方法也只能提出状态请求。

事件区分：

| 事件           | 含义                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| update:xxx     | 提交给所有者的候选状态，不证明父级已采纳                                                |
| input/select   | 组件原来定义的输入/草稿选择，保持既有参数和时机                                         |
| change         | 合法的用户值提交通知；受控时与更新请求配套，不承诺父级已接受。外部赋值不自动再发 change |
| confirm/cancel | 按已有动作协议，在相应守卫允许后发动作通知；动作本身不保证关闭                          |
| open/close     | effective open 真正变化时的生命周期通知                                                 |
| opened/closed  | 对应的有效过渡结束，不能因仅提出关闭请求而提前发出                                      |

保留组件族既有事件顺序：文本 input → update，确认后的语义变化 change；选择提交 update → change；Dialog 的已存在 action → 更新请求顺序不因本轮设计重排。不得全库套用一个事件列表。clear、click-overlay 等原始动作通知继续遵循各自契约，不因“最终值没有变化”一概删除。

异步守卫通过只代表请求被允许；不能承诺父级已采纳。若现有方法的 boolean/Promise 声称已关闭，必须在迁移表明确修改或保留含义，不能悄悄返回含义不同的 true。函数式 Dialog 的外层控制器是拥有者，可回写其创建的实例；其 Promise 仍按既有动作契约完成，不能从声明式子组件的请求推导生命周期已结束。

Upload 等有真实副作用的组件，业务任务启动必须遵守其已定义的接受协议。父级拒绝加入文件时不能因为发出候选就启动上传；已接受文件的进度、取消及资源回收仍由上传控制器负责。基础状态工具不接管队列、网络或表单校验。

## 8. 实现边界

两端 use 包各自增加一致的 `useControllableState`，作为小型所有权原语，采用显式 value getter、初始化 getter、快照函数及 onUpdate。返回只读 effective、只读 isControlled 和 request(next): void。两端 use 包各自导出同名原语，新导出可独立作为 minor 增量；UI 组件不因此新增模式开关。

原语只负责读取优先级、一次初始化、接管快照和请求派发；不负责领域空值、深比较、异步守卫、草稿、动画、表单继承或事件 change。request 不返回“已接受”布尔值，避免把 emit 与父级确认混为一谈。

```ts
// 边界示意，不是已实现 API；请求类型服从组件既有值域。
// 不能因为候选为 undefined 就提前取消；父级可以归一化该候选。
const state = useControllableState({
  value: () => props.open,
  initial: () => props.defaultOpen,
  snapshot: (value) => value,
  onUpdate: (next) => emit("update:open", next),
});
// UI 使用 state.value；内部操作通过校验/守卫后 state.request(next)。
```

useVModel 是已导出的公共工具，本次不直接翻转 passive 默认值、不移除旧参数、不改成兼容分支混杂的新实现。旧工具保留其代理语义并明确文档定位。新组件的最终状态不再使用该代理；选择会话、浮层、数字编辑器可围绕新原语保留自己的控制器。

复杂组件以公开行为是否符合契约为准，不要求把所有状态重写成同一种代码。数组/对象所有权采用显式复制策略；只读 computed 不是深只读，组件代码仍不得原地修改外部对象。两端源码、类型和行为检查同时覆盖新原语。

## 9. 迁移顺序与版本

1. 建清单：逐个列公开状态名、默认值、控制判定、标准空值、事件顺序、草稿/守卫/副作用、默认行为以及发布包证据；包含根组件、纯面板、包装层、Provider、Table 嵌套状态和函数式 API。
2. 新原语及契约用例：完成后在小范围验证，保持现有发布产物不被开发检查覆盖。
3. 下一 major 分支先处理 ActionSheet / NumberKeyboard / FloatingPanel / Popup、Collapse 和模式切换；复杂字段和 Upload 控制器只迁移所有权边界。
4. 同一 major 中同步日期/时间/数值/单选等的默认空值、Emits、类型、Form 初始化/reset 和序列化示例。审计所有默认空输入路径，保留值域允许的显式 emptyValue 工厂；文档分别说明原样接受和父级归一化的后果。
5. minor 阶段提供迁移说明和可用的父级绑定写法；变更默认行为在下一 major 发布，并带 changesets。当前版本指南只描述当前事实。
6. 实现完成后归档规范增量，更新 design-ui 的公共标准与两端 component-spec 链接、用户指南、中英文 Demo/LLM 文档生成产物及一致性门禁。未验收组件不标已完成。

按当前 release-and-compatibility.md 的“已发布”状态采取保守版本策略；AGENTS 的发布前段落冲突应在实际发布前单独修正。不能因为工作区大范围未提交修改就假定没有外部使用者。

## 10. 最低验收矩阵

| 场景                                  | 必须观察到的结果                                                         |
| ------------------------------------- | ------------------------------------------------------------------------ |
| 不传 prop、只传默认值                 | 内部可变；初始化无 update/change；改默认值不重置                         |
| 同传默认值和合法 prop（含空值）       | prop 优先；清空后不复活默认值                                            |
| prop 有值、无监听器                   | 最终值保持；一次合法操作最多一次更新请求                                 |
| 父级忽略请求                          | DOM/ARIA/最终值保持权威值；不伪造生命周期完成                            |
| 父级回写或修正候选                    | 以回传值为准，watch 不重复发事件                                         |
| false、0、空字符串、空数组、合法 null | 按值域判断，不能用 truthy/nullish 误判所有权                             |
| 标准清空后再次输入/选择               | 默认已定义空值保持受控，父级可继续拒绝；不复活 defaultValue              |
| 显式工厂返回 undefined                | 请求如实派发；父级归一化为 null 则保持受控，原样接受则按释放控制契约接管 |
| 键盘删空 / 面板清空 / Form reset      | 不能因未经过 clear 按钮而遗漏标准空值与归一化验证                        |
| 多个具名模型                          | 分别接受/拒绝，互不抢占所有权                                            |
| A 提议 B 被拒绝，后来释放控制         | 接管 A，不出现 B 或初始种子                                              |
| 组件已观测同 tick A→B→undefined       | 接管 B，无 update/change                                                 |
| 两个非受控实例共享默认数组/Date       | 操作一方不污染另一方或父级数据；业务对象身份不被深克隆破坏               |
| 异步待定时外部更新/卸载/停用          | 旧任务无迟到提交、事件或错误回滚；新任务可继续                           |
| Popup 外部 false 且 beforeClose 拒绝  | 外部关闭生效；不调用该守卫，不反向发 true                                |
| Popup 内部关闭且父级忽略请求          | 仍打开，无 close/closed；允许后续交互                                    |
| FloatingPanel 受控拖动被拒绝/修正     | 拖动跟手；松手后回到权威 anchor                                          |
| 弹层提交但父级拒绝值或开合更新        | 值与 open 独立，草稿不冒充最终值，编辑器不永久 settled                   |
| RadioGroup 原生互斥、文本 IME         | 浏览器真实 DOM 与模型恢复一致，保留合理光标/组合行为                     |
| Upload 父级拒绝新增文件               | 不启动网络任务，不泄漏对象 URL 或替换资源                                |
| SSR / hydration / KeepAlive           | 初始显示一致，无初始化事件；停用事务不在重启时自动提交                   |

原语测试覆盖边界；组件测试验证真实交互和事件；原生 checked、IME、焦点和过渡需真实浏览器验证，不能把 JSDOM 模拟当成原生验收。两端一致性检查覆盖核心和组件族，不仅比较导出名。

本次为文档设计，没有运行时实现或新增功能测试通过的声明；上一轮现状测试及其失败记录不视为本方案已验收。

## 11. 不采用的备选方案

文档对照、官方链接、已核实的 emptyValue 路径及写作准则见 [research.md](./research.md)。

- **继续默认本地代理，再 watch 双向同步**：父级保持同一个值时 watch 不触发，无法识别拒绝；容易产生双发、回弹和副作用提前执行。仅适合明确的草稿/代理工具。
- **只把 useVModel 改为 passive:false**：失去非受控状态存储，undefined/null 回退仍含糊，而且翻转已发布工具行为；无法解决草稿、清空和异步边界。
- **按有无 update 监听器判断**：只监听但不绑定也会被误判；只绑定值却不监听也应受控。函数监听器不是状态所有权证据。
- **按 vnode 是否出现 prop 判断显式 undefined 仍受控**：能容纳旧 undefined 空值，但改变已有公共契约；spread/动态属性删除、默认注入与底层 VNode 检测更复杂。两端多数实现及 shared 标准已有 undefined 判定，迁移收益不抵这次额外的模式成本。
- **增加受控模式 prop**：产生“有值但指定非受控”“无值却指定受控”的组合，需要继续规定冲突优先级；常见业务无需此能力。
- **所有组件统一 null 或 []**：文本、集合、单值、固定范围和边界数值的空语义不同；统一的是所有权，不是强行统一数据类型。
- **在子组件内等待父级 ACK 或缓存乐观最终值**：Vue 更新事件没有通用 ACK；延时无法区分拒绝和异步接受。需要该体验时由父级明确拥有乐观值和回滚。

- **一律禁止 emptyValue 工厂返回 undefined**：会切断已有明确支持的自定义输出，也阻止父级先接收再归一化；推荐让默认路径使用已定义空值，并如实说明显式覆盖和控制切换的后果。

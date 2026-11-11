# Cedar / Maple 逐组件空值清单

日期：2026-10-29。按组件目录逐项核对，子项/别名另列；不是把所有 modelValue 都视作可清空字段。清空列记录保留的现有返回与路径，未把它们改成统一 null。

K：两库 Form 引擎保持各自原始规则；显式 emptyValues 接入内置 required，自定义回调/Zod/其他约束继续收到原值，模型不被改写。新增识别/阅读范围见下方说明。

## Cedar：25 个相关目录

| 组件目录                                            | 空值判断/模型                                 | 清空返回与入口                                                                | 手动删空                                           | 校验行为                                                    |
| --------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| [auto-complete](../../../src/auto-complete)         | 文本；候选值转字符串                          | 转发 Input 清空，默认 ''                                                      | 文本删光 ''，不等于选择候选                        | 候选/搜索过滤；K                                            |
| [cascader](../../../src/cascader)                   | nullish/空容器；路径与多选分开                | 单选 ''；多选剩余项数组，支持覆盖                                             | 查询删空不清除路径；标签移除走选择路径             | 节点禁用、路径/叶子规则、确认；K                            |
| [checkbox](../../../src/checkbox)                   | false 是有效状态；数组 [] 为空集合            | 直接取消为 false/剩余数组；弹层 Checkbox 默认 false，Group 默认 []，可覆盖    | 无手动文字删除入口                                 | min/max、禁用/只读、异步切换；K                             |
| [color](../../../src/color)                         | 颜色文本与颜色合法性分开                      | 弹层默认 undefined（有 defaultValue 时恢复该值）；颜色面板无通用 clear        | 手输经颜色解析                                     | 颜色解析和已有面板约束；K                                   |
| [date](../../../src/date)                           | 无值与非法日期分开；支持多选                  | 单值默认 undefined；多选 []；覆盖由 DatePanel/Field 解析                      | 手动文本先解析，未通过不提交；不自动套按钮覆盖     | 格式、日期/时间禁用、边界、选择事务；K                      |
| [date-range](../../../src/date-range)               | 整个空范围、部分端点分开                      | 默认 []，支持覆盖；保护端点可阻止清空                                         | 手动端点解析及锁定端点保留；非法不提交             | 端点/范围/禁用部分/反序规则；K                              |
| [form](../../../src/form)                           | 字段路径的原始值，不把占位文字写入 model      | reset 恢复捕获初值，不伪造用户 clear                                          | 由字段控件负责                                     | Cedar b-validate；Maple 函数/Zod；本轮只接入内置 required   |
| [input](../../../src/input)                         | nullish/空字符串；自定义标记作显示投影        | 按钮默认 ''，支持 emptyValue                                                  | 手动删光仍 ''                                      | 原生输入 + beforeCommit；K                                  |
| [input-number](../../../src/input-number)           | nullish/显式数值标记；0 默认有效              | 按钮默认 undefined，支持覆盖                                                  | 删光提交仍可能 undefined，modelEvent 决定时机      | 解析中间态、finite、min/max/step/precision、beforeCommit；K |
| [input-tag](../../../src/input-tag)                 | 标签数组；查询文字不是模型                    | 直接/弹层清空默认 []；弹层支持覆盖                                            | 删查询不等于删标签；Backspace/关闭标签另走数组提交 | 重复、创建、数量/disabled；K                                |
| [mention](../../../src/mention)                     | 文本与候选提及分开                            | 转发 Input/Textarea，默认 ''                                                  | 手动删光 ''                                        | 候选匹配不等于必填；K                                       |
| [people-select](../../../src/people-select)         | 单个人员字符串；label/缓存/远程 fallback      | 单选清空默认 ''；支持 null/覆盖                                               | 选择器查询文本不直接清除已选人员                   | 人员值/label 与动作分离；K                                  |
| [radio](../../../src/radio)                         | null 未选；false/0 可以是选项标识             | 直接选择切换；弹层默认 null（可受 defaultValue 影响），可覆盖                 | 无手动文字删除入口                                 | 选项、原生互斥、只读及导航；K                               |
| [rate](../../../src/rate)                           | 有限评分；0 是合法数值                        | 重复激活当前评分且 clearable 时默认 0，可覆盖                                 | 无文本删空；键盘按评分规则                         | max/half/step、只读/禁用；K                                 |
| [search](../../../src/search)                       | 文本与搜索字段模型分开                        | 转发 Input 清空，默认 ''                                                      | 删光 ''；搜索另发事件                              | 搜索动作不等于 Form 校验；K                                 |
| [select](../../../src/select)                       | nullish/数组；合法空字符串保留                | 单选无空字符串选项通常 ''，有该选项 undefined；多选 [] 并保留保护项；支持覆盖 | 删除搜索文字与删除已选项分开；末项按该路径计算     | 禁用项、limit、选项存在性、beforeCommit；K                  |
| [slider](../../../src/slider)                       | 数值或数值范围；0 不默认为空                  | 直接拖动非 clear；弹层标量默认 0，当前值为数组时 []，可覆盖                   | 无文本删空入口                                     | min/max/step、range/disabled；K                             |
| [switch](../../../src/switch)                       | checkedValue/uncheckedValue；false 不默认为空 | 直接关闭/弹层清空默认 uncheckedValue（默认 false）；支持覆盖                  | 无手动文字删除入口                                 | beforeChange、pending、禁用/只读；K                         |
| [textarea](../../../src/textarea)                   | nullish/空字符串，与 Input 共用文本适配       | 按钮默认 ''，支持覆盖                                                         | 手动删光仍 ''                                      | IME/长度/自动高度与 beforeCommit；K                         |
| [time](../../../src/time)                           | 无值、格式非法与草稿分开                      | 字段默认 undefined，支持覆盖                                                  | 手动字符串走时间提交解析，不自动等同清空图标       | 时分秒、min/max、禁用候选、确认事务；K                      |
| [time-range](../../../src/time-range)               | 整个空范围与部分草稿分开                      | 字段默认 undefined，支持覆盖；不改 []/undefined 历史调用方差异                | 手输端点按范围事务提交                             | 范围顺序、次日及禁用时间；K                                 |
| [transfer](../../../src/transfer)                   | 目标集合 []，节点禁用独立                     | 直接清空/移除产生剩余数组并保护禁用项；弹层默认 []，可覆盖                    | 搜索文字独立于目标列表                             | 目标身份、禁用、过滤；K                                     |
| [tree-select](../../../src/tree-select)             | 默认 nullish/空字符串过滤；显式策略可覆盖标量 | 单选默认 undefined；多选数组；显式覆盖只求值一次                              | 搜索文本独立；移除项走树选择                       | checkable/strict/leaf/禁用及保护节点；K                     |
| [upload](../../../src/upload)                       | 文件列表 []；null 在展示边界适配              | 直接移除输出剩余列表；弹层默认 []，可覆盖；状态清理非模型全清                 | 无手动文字删除入口                                 | beforeUpload/remove、文件限制、队列和异步所有权；K          |
| [verification-code](../../../src/verification-code) | 过滤后的字符串与长度                          | 直接无清空图标；弹层默认 ''（可受 defaultValue 影响），可覆盖                 | 逐格删除/粘贴过滤，最终字符串可为空                | 长度、字符过滤、输入完成，不代替 Form required；K           |

## Maple：20 个相关目录

| 组件目录                                                                                           | 空值判断/模型                                 | 清空返回与入口                                                                | 手动删空                                       | 校验行为                                                    |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| [auto-complete](../../../../../../maple-design-mobile/packages/ui/src/auto-complete)         | 文本；候选值转字符串                          | 转发 Input 清空，默认 ''                                                      | 文本删光 ''，不等于选择候选                    | 候选/搜索过滤；K                                            |
| [cascader](../../../../../../maple-design-mobile/packages/ui/src/cascader)                   | nullish/空容器；路径与多选分开                | 单选 ''；多选剩余项数组，支持覆盖                                             | 查询删空不清除路径；标签移除走选择路径         | 节点禁用、路径/叶子规则、确认；K                            |
| [checkbox](../../../../../../maple-design-mobile/packages/ui/src/checkbox)                   | false 是有效状态；数组 [] 为空集合            | 直接取消为 false/剩余数组；弹层 Checkbox 默认 false，Group 默认 []，可覆盖    | 无手动文字删除入口                             | min/max、禁用/只读、异步切换；K                             |
| [date](../../../../../../maple-design-mobile/packages/ui/src/date)                           | 无值与非法日期分开；支持多选                  | 单值默认 undefined；多选 []；覆盖由 DatePanel/Field 解析                      | 手动文本先解析，未通过不提交；不自动套按钮覆盖 | 格式、日期/时间禁用、边界、选择事务；K                      |
| [date-range](../../../../../../maple-design-mobile/packages/ui/src/date-range)               | 整个空范围、部分端点分开                      | 默认 []，支持覆盖；保护端点可阻止清空                                         | 手动端点解析及锁定端点保留；非法不提交         | 端点/范围/禁用部分/反序规则；K                              |
| [form](../../../../../../maple-design-mobile/packages/ui/src/form)                           | 字段路径的原始值，不把占位文字写入 model      | reset 恢复捕获初值，不伪造用户 clear                                          | 由字段控件负责                                 | Cedar b-validate；Maple 函数/Zod；本轮只接入内置 required   |
| [input](../../../../../../maple-design-mobile/packages/ui/src/input)                         | nullish/空字符串；自定义标记作显示投影        | 按钮默认 ''，支持 emptyValue                                                  | 手动删光仍 ''                                  | 原生输入 + beforeCommit；K                                  |
| [input-number](../../../../../../maple-design-mobile/packages/ui/src/input-number)           | nullish/显式数值标记；0 默认有效              | 按钮默认 undefined，支持覆盖                                                  | 删光提交仍可能 undefined，modelEvent 决定时机  | 解析中间态、finite、min/max/step/precision、beforeCommit；K |
| [people-select](../../../../../../maple-design-mobile/packages/ui/src/people-select)         | 单个人员字符串；label/缓存/远程 fallback      | 单选清空默认 ''；支持 null/覆盖                                               | 选择器查询文本不直接清除已选人员               | 人员值/label 与动作分离；K                                  |
| [radio](../../../../../../maple-design-mobile/packages/ui/src/radio)                         | null 未选；false/0 可以是选项标识             | 直接选择切换；弹层默认 null（可受 defaultValue 影响），可覆盖                 | 无手动文字删除入口                             | 选项、原生互斥、只读及导航；K                               |
| [rate](../../../../../../maple-design-mobile/packages/ui/src/rate)                           | 有限评分；0 是合法数值                        | 重复激活当前评分且 clearable 时默认 0，可覆盖                                 | 无文本删空；键盘按评分规则                     | max/half/step、只读/禁用；K                                 |
| [search](../../../../../../maple-design-mobile/packages/ui/src/search)                       | 文本与搜索字段模型分开                        | 转发 Input 清空，默认 ''                                                      | 删光 ''；搜索另发事件                          | 搜索动作不等于 Form 校验；K                                 |
| [select](../../../../../../maple-design-mobile/packages/ui/src/select)                       | nullish/数组；合法空字符串保留                | 单选无空字符串选项通常 ''，有该选项 undefined；多选 [] 并保留保护项；支持覆盖 | 删除搜索文字与删除已选项分开；末项按该路径计算 | 禁用项、limit、选项存在性、beforeCommit；K                  |
| [slider](../../../../../../maple-design-mobile/packages/ui/src/slider)                       | 数值或数值范围；0 不默认为空                  | 直接拖动非 clear；弹层标量默认 0，当前值为数组时 []，可覆盖                   | 无文本删空入口                                 | min/max/step、range/disabled；K                             |
| [switch](../../../../../../maple-design-mobile/packages/ui/src/switch)                       | checkedValue/uncheckedValue；false 不默认为空 | 直接关闭/弹层清空默认 uncheckedValue（默认 false）；支持覆盖                  | 无手动文字删除入口                             | beforeChange、pending、禁用/只读；K                         |
| [textarea](../../../../../../maple-design-mobile/packages/ui/src/textarea)                   | nullish/空字符串，与 Input 共用文本适配       | 按钮默认 ''，支持覆盖                                                         | 手动删光仍 ''                                  | IME/长度/自动高度与 beforeCommit；K                         |
| [time](../../../../../../maple-design-mobile/packages/ui/src/time)                           | 无值、格式非法与草稿分开                      | 字段默认 undefined，支持覆盖                                                  | 手动字符串走时间提交解析，不自动等同清空图标   | 时分秒、min/max、禁用候选、确认事务；K                      |
| [time-range](../../../../../../maple-design-mobile/packages/ui/src/time-range)               | 整个空范围与部分草稿分开                      | 字段默认 undefined，支持覆盖；不改 []/undefined 历史调用方差异                | 手输端点按范围事务提交                         | 范围顺序、次日及禁用时间；K                                 |
| [upload](../../../../../../maple-design-mobile/packages/ui/src/upload)                       | 文件列表 []；null 在展示边界适配              | 直接移除输出剩余列表；弹层默认 []，可覆盖；状态清理非模型全清                 | 无手动文字删除入口                             | beforeUpload/remove、文件限制、队列和异步所有权；K          |
| [verification-code](../../../../../../maple-design-mobile/packages/ui/src/verification-code) | 过滤后的字符串与长度                          | 直接无清空图标；弹层默认 ''（可受 defaultValue 影响），可覆盖                 | 逐格删除/粘贴过滤，最终字符串可为空            | 长度、字符过滤、输入完成，不代替 Form required；K           |

## 子项、纯面板与特殊入口

| 范围                                                                            | 空值/清空/手动删除                                     | 校验与新增能力                                                                  |
| ------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 两端 InputPassword                                                              | 沿用 Input 文本模型、清空和删空                        | 沿用 Input；本轮未改密码可见性                                                  |
| 两端 CheckboxGroup                                                              | 空数组是空选中集合；取消最后项仍按组的限制执行         | 共用字段策略作阅读/required，不改 min/max 或 checked                            |
| 两端 RadioGroup                                                                 | null 表示未选，false/0 可作为合法选项；无通用手删入口  | 共用阅读/required，不将点击当前项改成清空                                       |
| 两端 FormItem                                                                   | 取字段原值；reset 不从 emptyText 取值                  | 识别主字段策略并管理内置 required；字段 > Item > Form 继承                      |
| 两端 DatePicker / DateRangePicker                                               | 纯面板沿用日期选择/清空/确认规则，范围与多选不同       | 不新增 readPretty/emptyText；不是表单字段展示包装                               |
| 两端 TimePicker / TimeRangePicker                                               | 纯时间面板沿用候选和确认规则                           | 不新增阅读占位，不把无可选时间当模型清空                                        |
| Cedar ColorPicker                                                               | 颜色面板使用自身表示和确认输出                         | 不机械套空值集合；Color 字段包装另有阅读策略                                    |
| Maple NumberKeyboard                                                            | 初始默认文本、逐键删除最终可为 ''；open 与文本分别代理 | 本轮不改变代理或键盘输入协议，不新增阅读占位                                    |
| Maple Picker / PickerGroup                                                      | 选项数组/列值、确认/取消，不提供通用文字删空           | 保留列合法性与级联行为；不新增 readPretty                                       |
| Tree / Table 选择状态                                                           | selected/checked 等集合有自己的归一化与保护规则        | 本轮不把节点/行模型变成字段 emptyValue；Table 空数据/空单元格非同一个 emptyText |
| Tabs / Steps / Pagination / Carousel / Menu / Calendar / Tag / FloatingPanel 等 | 导航、序号、尺寸或固定状态域                           | 列为排除范围；不为 API 整齐添加可任意清空的业务值                               |

## 新能力接入范围

- 所有上述字段目录（Form 为配置提供者）声明 emptyValues、emptyText；字段 > FormItem > Form。Cedar 与 Maple 的组件数量不同，不能虚构 Maple TreeSelect/Transfer/Mention 等覆盖。
- Input/派生文本、Select、Cascader、Cedar TreeSelect、数值及日期时间字段接入输入/视图识别。日期时间只对显式配置投影，不改变非法输入或默认初始化。
- Switch、Radio/Checkbox、Rate、Slider、Upload 等固定/集合域消费阅读与 required 策略，不改变 checked、范围、文件传输或默认清空协议。
- emptyText 默认 '-'，显式空字符串有效；read 插槽优先；未识别为空但显示标签为空的合法值，不会被 truthy 回退吞掉。
- 手动删空是否经过 emptyValue 仍按表中既有路径；本轮不借新增识别能力修改已发布的清空返回值和输入事件时机。后续如统一出口需独立变更和测试。

## 共享弹层 clear 的准确含义

上表的“弹层清空”是共享字段包装内的草稿操作：清空按钮先更新草稿，确认后按既有提交事务更新模型；取消不提交该草稿。它不一定与直接编辑模式的原生 clear 按钮具有相同输出或触发时机。

未配置 emptyValue 时，现有 fallback 按以下顺序计算（本轮保留）：

1. 组件声明 uncheckedValue 时返回 uncheckedValue。
2. 否则 defaultValue 是 boolean 时返回 false。
3. 否则当前模型是数组时返回新空数组 []。
4. 否则返回 defaultValue。

因此 defaultValue 被业务设置成非空值时，某些共享弹层的“清空”实际会恢复这个值；Checkbox 单项即使当前以数组使用，默认 boolean 初值也可能先命中 false 分支。空值识别列表不会修正或重写这些历史规则。需要指定确定输出时配置 emptyValue；如将来统一这些默认出口，应单独评估兼容性，不能把本轮新增 emptyValues 当成默认输出变更。

显式配置只覆盖既有清空路径，不自动覆盖手动删空、删除最后标签、关闭 Switch、Form reset 等不同动作。

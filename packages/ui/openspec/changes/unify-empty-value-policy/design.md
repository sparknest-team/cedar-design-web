# 空值策略设计

## 规则与理由

1. emptyValue 决定清空输出，保留直接值/工厂和原有 fallback。不把它自动加入 emptyValues，允许清空表示恢复 0/默认选项。
2. emptyValues 决定输入/展示的空值身份，实例 > FormItem > Form > 领域默认。标量使用 includes 的 SameValueZero；对象值按引用，不做任意深拷贝/深比较。空数组固定为空，非空数组不会因成员是 null 而整体算空。
3. 字符串字段默认识别 undefined/null/空字符串；Select 默认仅 nullish，以保留合法空字符串选项。数值默认 nullish，0/false 不默认为空。显式配置可增减标量标记。
4. emptyText 只负责 readPretty 空内容，缺省 '-'，实例 > FormItem > Form；显式空字符串有效。原生输入 placeholder 与编辑入口占位保持各自含义。自定义 read 插槽始终优先；有效值的空标签不会被文本 truthy 判断自动替换。
5. 输入值识别不改变所有权：原有 modelValue!==undefined、VNode prop presence、useVModel/passive 和 open 控制路径不重写。配置变化不 emit 模型更新、不自动清空、不求值 emptyValue 工厂。
6. 共享包装让字段配置到达内层输入；原生 Input/Select 自行注册策略。FormItem 的内置 required 使用当前主字段策略；自定义回调和 Zod 仍接收原值，不把 UI 空标记偷偷转换为 null。其他 min/enum/schema 规则仍由业务定义，不保证自动跳过。
7. 数值输入只将显式空标记投影为空显示/步进起点，日期时间只将显式配置的空值投影给字段视图与草稿初始化；模型原值不改写。非法日期、半成品数字、范围端点禁用仍有各自领域判断。
8. Cedar TreeSelect 清空工厂在一个动作内只求值一次，供内部更新和事件复用；受保护节点和默认输出不另行改造。

## 覆盖范围

逐组件审计覆盖两库所有声明字段展示/emptyValue 的目录，并补充 InputPassword、CheckboxGroup、RadioGroup、FormItem、纯日期时间面板及 Maple 键盘/Picker。导航模型、弹层 open 等不应机械获得空集合接口，单独列为排除范围。

字段层 emptyValues/emptyText 可继承 Form/Item。原生文本、Select、Cascader、Cedar TreeSelect、InputNumber 和日期时间字段有对应输入/视图适配；固定状态域（Switch、Radio/Checkbox、Slider、Rate）及 Upload 的识别用于阅读和内置必填，不改变选中、范围或传输算法。纯面板不提供 readPretty.emptyText。

## 与 Element Plus 的关系

借鉴 useEmptyValues 的“输出/识别分离”和显式配置覆盖，而非复制它的所有细节。我们保留已有 emptyValue 名称，暂不新增同义 valueOnClear；共享策略通过 Form/Item 继承，不声称接入 ConfigProvider。工厂求值仍在有效清空动作，不用 computed 缓存清空结果。

默认 clear 输出、手动删除与按钮路径的历史差异逐项保留在清单，避免在新增识别能力时悄悄破坏事件契约。统一所有空提交出口、全局 ConfigProvider 以及受控模式另立变更。

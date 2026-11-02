---
permalink: /showcase/strengths/
title: 核心特点
pageInfo: false
---

# 核心特点

Cedar 的特点既体现在单个组件，也体现在跨组件的约定和业务流程中。这里整理了 23 个有现有示例支撑的展示点，覆盖 体系级特点、场景组合能力、交互与数据特点、业务组件特点、工程保障。

## 演示时先讲什么

- **跨组件一致性**：一起切换输入、选择和日期字段的尺寸、变体，观察一组字段如何遵循共同约定。
- **阅读与编辑闭环**：修改、取消、确认及拒绝后重试，核对临时输入与已保存数据。
- **业务数据接入**：从 ID 回显、搜索候选到人员操作，展示字段如何连接业务模型与服务。
- **复杂业务组合**：操作列管理、上传准备与排期事务，观察保存、失败恢复和自定义接入。

以下属于本库的设计取向、已实现能力和工程保障。是否比某个参考库更省配置或体验更好，需要在逐组件页中按同一业务任务验证。

## 体系级特点

### 桌面与移动沿用同一套公共约定

公共尺寸、变体、值绑定与主题语言对齐，端侧密度和操作形态分别适配。

演示方法：使用同一巡检任务：Cedar 在字段附近操作；Maple 的选择与日期时间进入 Popup。先取消，再确认，对照已提交模型。

[打开对应示例](/components/form/#桌面与移动的同场景展示) · 相关组件：[Button 按钮](/components/button/)、[Input 输入框](/components/input/)、[Select 下拉框](/components/select/)、[Form 表单](/components/form/)

### 主题从品牌延伸到组件与局部覆盖

品牌、语义颜色与组件变量分层，亮暗模式和局部覆盖可以组合使用。

演示方法：切换品牌和亮暗，再比较默认按钮与局部覆盖按钮，随后打开字段弹层。

[打开对应示例](/themes/) · 相关组件：[ConfigProvider 全局配置](/components/config-provider/)、[StyleProvider](/components/style-provider/)、[Button 按钮](/components/button/)、[FieldDecorator 字段外壳](/components/field-decorator/)

### 跨控件保持字段外观与几何一致

Input、Select、日期时间字段通过共同外壳组织尺寸、变体、前后缀和清除区域。

演示方法：一次切换尺寸与变体，对照普通、有值、多选长标签和日期范围字段。

[打开对应示例](/components/field-decorator/#表单控件尺寸对照) · 相关组件：[FieldDecorator 字段外壳](/components/field-decorator/)、[Input 输入框](/components/input/)、[Textarea 文本域](/components/textarea/)、[Select 下拉框](/components/select/)、[Cascader 级联选择](/components/cascader/)、[Date 日期字段](/components/date/)、[Time 时间字段](/components/time/)、[Button 按钮](/components/button/)

### 同一字段承接阅读与编辑

Form、FormItem 与字段可继承阅读展示和编辑方式，字段可以覆盖父级配置。

演示方法：切换阅读态、直接编辑和确认后提交，再查看单项覆盖。

[打开对应示例](/components/form/#字段展示与确认提交) · 相关组件：[Form 表单](/components/form/)、[Input 输入框](/components/input/)、[Textarea 文本域](/components/textarea/)、[InputNumber 数字输入框](/components/input-number/)、[Select 下拉框](/components/select/)、[PeopleSelect 人员选择](/components/people-select/)、[Date 日期字段](/components/date/)、[Time 时间字段](/components/time/)、[Upload 上传](/components/upload/)

### 日期时间字段和独立面板分别使用

带触发器的字段与可嵌入的面板分层，单值、范围和提交规则按公开契约接入。

演示方法：对照带输入框的字段与内嵌面板，检查手输、取消和确认后的值。

[打开对应示例](/components/date/#字段视口与快捷项事件) · 相关组件：[Date 日期字段](/components/date/)、[DateRange 日期范围字段](/components/date-range/)、[Time 时间字段](/components/time/)、[TimeRange 时间范围字段](/components/time-range/)、[DatePicker 日期面板](/components/date-picker/)、[TimePicker 时间面板](/components/time-picker/)

## 场景组合能力

### 筛选、行操作和统计来自同一份业务数据

条件查询、状态变更、空结果与统计联动，桌面表格与移动表格使用同一任务场景。

演示方法：查询运营部 → 完成任务 → 按状态过滤 → 空结果 → 清空筛选并恢复任务。

[打开对应示例](/components/table/#任务筛选与数据联动) · 相关组件：[Table 表格](/components/table/)、[Input 输入框](/components/input/)、[Select 下拉框](/components/select/)

业务流程示例使用本地数据与模拟保存，不代表组件内置业务后端。

### 从字段校验走到确认、失败与恢复

把 Form 校验、预览和保存状态组合为业务流程，失败保留草稿，提交记录独立保存。

演示方法：空值校验 → 填入数据 → 返回修改 → 模拟失败 → 重试成功 → 查看提交记录。

[打开对应示例](/components/form/#巡检任务完整流程) · 相关组件：[Form 表单](/components/form/)、[Input 输入框](/components/input/)、[Select 下拉框](/components/select/)

业务流程示例使用本地数据与模拟保存，不代表组件内置业务后端。

## 交互与数据特点

### 编辑过程具有草稿、确认和失败恢复语义

编辑过程区分临时输入与已保存值，确认失败时可以保留内容供用户修正。

演示方法：修改后取消，再模拟拒绝确认并重试；观察最终模型和仍在编辑的内容。

[打开对应示例](/components/form/#禁用、只读与异步确认) · 相关组件：[Form 表单](/components/form/)、[Input 输入框](/components/input/)、[Select 下拉框](/components/select/)、[Date 日期字段](/components/date/)、[Time 时间字段](/components/time/)

Cedar 的 click/dblclick 原位编辑还包含字段切换与面板键盘优先级；Maple 按自身弹层交互演示。

### 候选高亮、搜索词、草稿与业务值分开

打开或搜索候选时不应意外提交表单，选择和确认按字段展示方式更新模型。

演示方法：先打开、搜索和移动候选，再选择与确认，对照更新次数与真实事件。

[打开对应示例](/components/select/#候选高亮与表单数据流) · 相关组件：[Select 下拉框](/components/select/)、[AutoComplete 自动补全](/components/auto-complete/)、[PeopleSelect 人员选择](/components/people-select/)、[Cascader 级联选择](/components/cascader/)、[TreeSelect 树选择](/components/tree-select/)、[Form 表单](/components/form/)

### 远程搜索与已选 ID 回显分工

候选获取和已选内容解析分别接入业务服务，处理异步状态与过期结果。

演示方法：从仅有 ID 的模型开始，展示名称回显，再连续切换搜索词。

[打开对应示例](/components/people-select/#完整业务示例) · 相关组件：[Select 下拉框](/components/select/)、[PeopleSelect 人员选择](/components/people-select/)、[AutoComplete 自动补全](/components/auto-complete/)、[TreeSelect 树选择](/components/tree-select/)

### 数值显示格式与业务数字分离

formatter / parser 处理展示与解析，精度、步长及边界共同约束最终数值。

演示方法：输入带格式的值，再尝试小数步长和边界，观察模型中保存的数字。

[打开对应示例](/components/input-number/#小步长与范围边界) · 相关组件：[InputNumber 数字输入框](/components/input-number/)、[Form 表单](/components/form/)

模型仍为 JavaScript number；不将十进制计算等同于任意精度的大数存储。

### 上传准备与取消竞争有明确处理

异步准备、取消、重试和迟到请求句柄之间隔离失效结果，文件替换后重新检查限制。

演示方法：等待准备时取消并重新提交，再放行旧结果，核对有效请求与文件状态。

[打开对应示例](/components/upload/#上传前准备与取消竞争) · 相关组件：[Upload 上传](/components/upload/)

### 浮层开合、异步关闭和焦点按职责处理

弹层的展示控制、异步确认及焦点恢复与业务保存逻辑配合，嵌套时按当前层操作。

演示方法：在弹层内打开字段面板，尝试 Esc 和拒绝关闭，再核对焦点返回。

[打开对应示例](/components/dialog/#高级属性) · 相关组件：[Dialog 对话框](/components/dialog/)、[Drawer 抽屉](/components/drawer/)、[Popover 气泡卡片](/components/popover/)、[Trigger 浮层触发](/components/trigger/)

## 业务组件特点

### 人员字段可以连接业务操作

人员显示与选择复用统一字段行为；头像与操作区由业务提供，不绑定聊天 SDK。

演示方法：同一人员 ID 在编辑字段和阅读字段中联动，并触发示例业务操作。

[打开对应示例](/components/people-select/#完整业务示例) · 相关组件：[PeopleSelect 人员选择](/components/people-select/)、[Form 表单](/components/form/)

### 表格列管理是独立可组合能力

列显隐、重命名、顺序、冻结及宽度通过结构化状态回写；业务决定持久化位置。

演示方法：修改列后取消，再确认；恢复保存配置并核对必选列与冻结顺序。

[打开对应示例](/components/table-column-manager/#与-table-组合-分组与持久化) · 相关组件：[Table 表格](/components/table/)、[TableColumnManager 表格列管理](/components/table-column-manager/)

### 表格配置能关联实际业务行类型

表格列配置与业务数据类型相连，配合虚拟列表、编辑和列管理扩展点使用。

演示方法：展开关联业务类型的示例源码，再对照相应表格配置。

[打开对应示例](/components/table/#关联业务行与列类型) · 相关组件：[Table 表格](/components/table/)

### 文件读取、准备、请求和展示可分别接入

不配置上传接口时可以只读取文件；请求、进度和自定义展示按业务需要组合。

演示方法：先选择本地文件，再展示手动提交、外部进度与独立 hook。

[打开对应示例](/components/upload/#手动队列和可取消请求) · 相关组件：[Upload 上传](/components/upload/)

### 排期包含资源、容量和可用时间

人员、设备、会议室复用资源模型，关联占用量、工作时间、维护与容量规则。

演示方法：调整资源容量，再将日程拖入冲突时段，观察拒绝与修正后的提交。

[打开对应示例](/components/scheduler/#资源并发容量) · 相关组件：[Scheduler 日程调度](/components/scheduler/)

### 排期支持批量事务与撤销重做

批量变更以最终状态校验，可结合异步保存、版本保护和撤销重做形成完整流程。

演示方法：交换两条排期或批量调整，先模拟失败，再修正重试并撤销。

[打开对应示例](/components/scheduler/#原子事务交换) · 相关组件：[Scheduler 日程调度](/components/scheduler/)

### 排期可表达依赖、里程碑和资源负载

依赖关系、零时长里程碑、时间线缩放和负载统计补充常规日历展示。

演示方法：缩放资源时间线，查看依赖与里程碑，再检查资源负载。

[打开对应示例](/components/scheduler/#依赖、里程碑与时间线缩放) · 相关组件：[Scheduler 日程调度](/components/scheduler/)

依赖校验不会自动重排其他任务；负载统计基于已加载数据。

### 排期可通过适配器连接外部日历语义

高级适配器提供 RRULE、时区转换、ICS 导入导出与打印；轻量核心继续独立使用。

演示方法：展示指定时区的重复规则，再查看日历交换示例与导出内容。

[打开对应示例](/components/scheduler/#rrule、时区与夏令时) · 相关组件：[Scheduler 日程调度](/components/scheduler/)

组件网格仍使用运行环境本地时间；模拟协同提供方不是已接入真实服务。

## 工程保障

### 部分稳定逻辑可以脱离默认界面复用

useUploader、列管理 hook 与 Scheduler 纯核心为自定义界面和业务适配提供入口。

演示方法：展开 hook 示例，识别业务模型、请求服务和默认展示之间的边界。

[打开对应示例](/components/upload/#上传前准备与取消竞争) · 相关组件：[Upload 上传](/components/upload/)、[TableColumnManager 表格列管理](/components/table-column-manager/)、[Scheduler 日程调度](/components/scheduler/)

### 复杂交互明确考虑停用、卸载与过期任务

对选择请求、计时、拖动和滚动等异步过程提供生命周期示例与相应检查。

演示方法：启动操作后改变状态或停用实例，再恢复并重新操作，观察旧任务是否干扰。

[打开对应示例](/components/select/#交互调度生命周期) · 相关组件：[Select 下拉框](/components/select/)、[Search 搜索框](/components/search/)、[Upload 上传](/components/upload/)、[Countdown 倒计时](/components/countdown/)、[Scrollbar 滚动条](/components/scrollbar/)

## 继续逐项比较

在[逐组件对照](/showcase/components/)中查看其他组件库的相似示例、文档依据与待核验增量；每个特点的运行示例仍保存在对应组件目录中。

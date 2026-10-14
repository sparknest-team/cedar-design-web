# 日期字段手输展示链路

Maple Date/DateRange 的 inputEditable 已公开且默认 true，但本地 DateFieldContent 没有向 PickerField 转发 editable/commit，点击原生输入还会直接打开 Popup。

公共 DateField 所有者统一可编辑条件：inputEditable 不为 false、format 非函数且非 multiple；先 Cedar 后独立复制 Maple。Maple 本地展示采用已有 Time 手输交互：输入点击只编辑，日历按钮/外壳/ArrowDown 打开面板，先处理草稿；Enter/blur 提交、IME/只读/禁用/非法值/受控拒绝遵守现有 PickerField 和 Date 所有者规则。默认开启是修复已声明的 API，不引入兼容开关。

移动端日历按钮和 Popup 留在本地 presentation，样式仅添加明确移动扩展 token；不引入共享运行时或 platform。单值/范围增加真实 DOM 测试，两端 Demo/文档、调研菜单和 major changeset 同步。

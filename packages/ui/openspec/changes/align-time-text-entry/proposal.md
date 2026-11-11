# Time / TimeRange 手输收口

Maple 增加 inputEditable，默认 false；Cedar 保持 true。两端依赖各自复制的 PickerField 和 time commit/controller，不添加共享运行时、兼容别名或第二套值状态。

移动端 editable 输入不自动弹出模态面板；图标按钮或 ArrowDown 打开原有 clock/picker。Enter/失焦提交，Escape 撤销；受控拒绝、禁用/只读、格式、范围及 IME 使用共同规则。保留端侧展示差异，文档说明默认值区别。

不修改 Form 布局、日期面板或未配对组件。

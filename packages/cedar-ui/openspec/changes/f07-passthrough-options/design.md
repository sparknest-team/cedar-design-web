# 兼容设计

1. 所有既有 Props 定义与渲染逻辑不变。不把原 PropType 换成窄类型，不新增过滤或警告。
2. 各组件导出 AutoCompleteTriggerOptions / SelectTriggerOptions / CascaderTriggerOptions / DatePopupOptions / DateRangePopupOptions；Cedar 另外导出 TreeSelectTriggerOptions / TreeSelectTreeOptions。根入口和组件入口都可导入。
3. 专用类型用 Omit + owned?:never，拒绝预声明变量中的托管字段；保留允许的现有 Trigger 字段类型，不引入宽 string 索引。Date Popup 额外拒绝 on* 监听和两端固定的交互/偏移/销毁字段，作为共同安全子集。
4. AutoComplete 展开由内部输入/焦点和 shouldOpen 管理，没有顶层 open/defaultOpen/update:open；Select/Cascader 有顶层展开模型。TreeSelect popupContainer 无嵌套回退。其他所列宿主顶层容器明确传入时优先，否则原有嵌套回退保持。
5. Select/Cascader 嵌套 unmountOnClose 等原覆盖优先级保留。TreeSelect 顶层数据/模式/搜索与 Panel 选择集合优先。Date/DateRange 保持原 datePresentationOptions 过滤，固定偏移4；Maple 固定 unmountOnClose=true。Cedar 的旧透传销毁能力不会被新推荐子集改变。
6. Time 系列已有专用类型，本轮不收窄；注明 popupOffset 和 Maple unmountOnClose 的既有展示层覆盖。ColorPicker/Table 旧嵌套状态覆盖另行确认，不自动修改。
7. 兼容代价：未采用新类型的旧宽 Prop 仍可编译托管字段，不宣称已在所有调用入口禁止。新 demo 使用新类型，真实运行测试与发布声明消费者用例共同验收。

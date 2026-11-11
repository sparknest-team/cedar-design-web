# Tree 数据与媒体序号统一

Tree / TreeSelect 默认数据字段为 value/label/children，字段映射及选择、勾选、半选、展开集合采用 Values 命名。Table 不变。
Carousel 与 ImagePreviewGroup 的 modelValue/defaultValue、方法及通知事件公开序号从 1 开始；内部数组下标从 0 开始。指示器插槽分别公开 slideNumber/imageNumber。
Maple FloatingPanel 使用 modelValue/defaultValue/update:modelValue，FAB 保留 visible/open。同步两端运行时、类型、调用方、示例、文档和回归测试；删除旧 API，不添加兼容别名。

# 主值与非受控初始值统一

按用户确定的 API，两端 Tabs、Collapse、Pagination、Steps 使用 modelValue/update:modelValue 与 defaultValue，移除旧 active/activeNames/current 及其默认值接口，不保留别名。内部 active/current、作用域插槽状态和 aria 属性保持其原本含义。同步消费者、文档、示例、类型和测试。

Input 增加可操作的默认值数据流示例，展示受控空字符串优先、默认值仅初始化、修改默认值不重置、重新挂载重新读取与无初始化回写。Checkbox 保持布尔/数组两种既有模型，选项 value 标识不变。

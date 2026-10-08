# Choice Control

- modelValue !== undefined 为受控，拒绝提议不能改变显示或污染非受控缓存；defaultValue 只初始化一次。
- Checkbox 的布尔模型始终发 boolean，数组模型按 value 增删且不修改父级数组。false、0、空字符串是不同的选项标识。
- Radio 值 null 为未选中，value 默认为 true；重复选中不发变化，不支持点击取消。清空由父级写 null。
- indeterminate 是 Checkbox 的展示属性，不改变值模型，不发送 update:indeterminate；业务方根据选择集合计算。
- 普通选择/命令调用只发一次 update:modelValue、change(value, event?)，FormItem 仅由独立控件或 Group 边界通知。
- Checkbox.toggle(checked?: boolean)、Radio.select()、focus(options?)、blur() 两端同义；禁用禁止选择和 focus，只读允许 focus、不改变值。
- Group 与独立控件使用同一选择控制器，Group 限制不可绕过。外部同步、挂载和卸载不能反向 emit。
- 本批不统一渲染主体、样式、完整组键盘和选项映射；保持待适配。

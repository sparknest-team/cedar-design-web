# 独立 Checkbox / Radio 值契约

接续分组状态收口，将独立控件状态控制器先在 Cedar 实现，再复制到 Maple。现有渲染外观不在本批替换，不能标记整组件同源。

Checkbox 接受 boolean 或选中值数组；value 只作为数组/Group 的选项身份。Radio 接受 string/number/boolean/null，null 表示空选项。统一 defaultValue；移除 defaultChecked。半选为纯展示属性，不自动更新 indeterminate。选择通知为 update:modelValue → change(value, event?) → FormItem。方法为 Checkbox.toggle(checked?)、Radio.select() 和两端 focus/blur。不保留旧别名。

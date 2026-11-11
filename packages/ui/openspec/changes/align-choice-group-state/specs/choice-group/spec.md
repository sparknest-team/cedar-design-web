# Choice Group

- modelValue !== undefined 为受控；defaultValue 仅初始化各实例的非受控值，不随 defaultValue 后续变化重置。
- 值变化按 update:modelValue → change(value, event?) → FormItem onChange 顺序，只由 Group 发出一次。外部值、选项载入、子项挂载/卸载不得反向 emit。
- disabled / readonly 缺省 undefined，继承 FormItem / Form；显式 false 可覆盖表单。子项不得绕过 Group 的禁用、只读、max。
- max 限制新增，达到上限后仍能取消；外部超限值不自动裁剪。
- Maple checkAll / inverseAll 仅编辑已载入可编辑子项，保留禁用/只读及未载入的已选值，并按候选顺序补齐至 max；无变化不通知，受控时返回提议但不擅自回写。
- 单选重复选择不重复发 change；false、0、空字符串按实际值比较。
- 本批独立使用 API、选项类型、外观、完整键盘规范仍为后续范围，不标记整组件同源。

## Requirements

- 两端 Props、事件、主体行为一致。size/gap 接受 number|string CSS 长度，不接受 ComponentSize 档位。
- modelValue !== undefined 才是受控，外部更新不发事件；defaultValue 只初始化非受控值。
- count 使用正有限数向下取整；非法值回退 5；评分归一到范围与 0.5/1 步长。grading 固定五级。
- readonly 可聚焦但不可修改，不标记 aria-disabled；disabled 移出焦点序列。两端继承 FormItem 状态。
- 箭头按步长修改，Home/End 到边界，边界不清空/不重复发事件；clearable 仅重复点击当前分数清空。不处理子控件或修饰键事件。
- aria-label 支持业务命名；暴露 focus/blur；状态和 aria-valuenow 使用归一值。
- CSS 读取实际渲染的 active/half/error/disabled 状态，支持可见焦点与 reduced-motion。必要平台 Token 默认值可独立维护。

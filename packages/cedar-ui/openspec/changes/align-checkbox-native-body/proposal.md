# Checkbox 原生主体同源

## 目标

以 Cedar 的原生 checkbox 为基准，补齐 Maple 的实例颜色、图标尺寸、波纹与图标插槽，然后独立复制到 Maple。两端不共用运行时实例。

## 变更

- Checkbox 和 CheckboxGroup 使用一致的 script setup 主体、原生输入、BEM 及局部事件；Maple 移除 div 模拟勾选和旧 provider。
- 增加两端 name、aria-label；Maple 补齐 uninject-group-context 与 checkbox 插槽，Cedar 补齐图标/波纹能力及 click 事件。
- 合并选项、批量方法、max、表单继承与 SSR 行为。图标尺寸/间距仅保留平台 token 默认值差异。

## 非目标

不改变选择值模型，不共享两库运行时，不保留旧 DOM class 别名，不改 Radio。


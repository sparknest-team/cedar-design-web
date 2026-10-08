# InputNumber 主体同源

将两端数字输入收口为独立复制的 FieldDecorator + 原生 input 主体、数值控制器、Props、样式和测试。沿用各库 useInputForm/useFieldLocale，无平台配置层或共享运行时。

## 变更

统一 disabled/readonly/error/size 继承；增加 variant/hint；公开 Props 使用 ExtractPublicPropTypes；五档尺寸齐全。Decimal 运算采用实例隔离的相同配置。清空遵循 input → update:modelValue → change → clear；外部同步不发用户事件。鼠标、触控和键盘步进遵守同一禁用/只读门控。

## 非目标

不在本批改造 Checkbox / Radio，不改变 Form 引擎、Input 或 FieldDecorator 的全局交互协议。

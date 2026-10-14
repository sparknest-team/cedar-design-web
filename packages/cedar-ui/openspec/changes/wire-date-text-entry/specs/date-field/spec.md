## MODIFIED Requirements

### Requirement: 公共可编辑条件
DateField 的 controlProps.editable 为 inputEditable!==false、format 非函数且非 multiple。两端独立复制该逻辑。禁用/只读状态继续通过 PickerField 原生属性拦截，不以可编辑条件替代状态校验。

#### Scenario: 没有逆解析协议
- WHEN format 为函数或使用 multiple
- THEN 原生输入保持 readonly，通过选择面板修改，不从拼接文本推测模型。

### Requirement: 移动手输与面板触发分离
Maple 输入点击不打开 Popup，保留键盘输入；日历按钮明确打开面板。非编辑模式保留点击字段打开面板。ArrowDown 先提交有效文本再打开，Enter/失焦复用现有提交，不重复通知。按钮遵守 disabled/readonly。

#### Scenario: 受控拒绝
- WHEN 输入有效日期并 Enter，父级未回写模型
- THEN 仅提出一次 update:modelValue/change 并恢复原输入显示，后续 blur 不重复提交。

#### Scenario: 范围和组合输入
- WHEN 手输反序范围、非法日期或 IME 组合中 Enter
- THEN 不提交；允许的端点继续保留 disabledParts，不绕过统一校验。

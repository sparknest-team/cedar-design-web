## ADDED Requirements

### Requirement: Independent source copies
Cedar and Maple SHALL maintain independent copies of the InputNumber view, props, value controller, decimal arithmetic and component styles. Only local imports, registration and prefixes differ.

### Requirement: Value contract
The component SHALL use modelValue !== undefined to identify controlled values, and defaultValue only for initial uncontrolled state. A focused text draft MAY differ from the model during editing. Committing SHALL emit a proposed number, then restore the authoritative controlled value when the parent rejects it. Parent updates SHALL NOT emit input/change or trigger validation.

#### Scenario: Submit and clear
- WHEN valid text is edited THEN input is emitted before an input-mode model update.
- WHEN Enter, blur or a step commits a changed value THEN update:modelValue precedes change, without duplicate Enter/blur commits.
- WHEN clearing THEN input(undefined, '', event), update:modelValue(undefined), change(undefined, event), clear(event) are emitted in order. After the parent has processed the update, a rejected controlled clear restores the authoritative model.

### Requirement: Form and field integration
The component SHALL consume the existing local useInputForm and useFieldLocale interfaces. InputNumber alone notifies FormItem once for each semantic event. disabled/readonly/error/size inherit unless explicitly set; variant and hint inherit InputGroup. FieldDecorator owns visual, hint and clear affordances. Numeric input supports IME and native input attributes.

### Requirement: InputNumber interaction
All 5 ComponentSize values and outline/filled/standard variants SHALL work. Disabled/readonly SHALL prevent mutation via input, clear, arrows and pointers. Long press SHALL stop on pointer release/cancel, leave, blur, deactivation, scope disposal and state changes. Buttons SHALL have localized accessible names and type=button.

### Requirement: Numeric range
Decimal arithmetic SHALL avoid binary step accumulation and round half away from zero. Exponents in step SHALL count toward precision. Precision is 0–100. Range wins over rounding; native non-finite models and invalid drafts SHALL never emit NaN/Infinity. Complete numeric trailing-dot drafts commit as numbers; lone signs/dots revert without mutating the value.

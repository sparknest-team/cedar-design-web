# Input 与 Textarea

## Requirements

Both libraries SHALL independently copy input and textarea bodies and preserve Group/Form inheritance, five sizes, variants, hint/line/colors, composition, trim-on-commit, word limits, controlled proposals and accessible native attributes.

Input SHALL emit input before update:modelValue. Clearing SHALL emit clear, input, update:modelValue and change once in that order, and a later blur SHALL not repeat change. Rejected controlled proposals SHALL restore native values including email controls without selection APIs. External values SHALL not emit semantic change.

Textarea SHALL share the local Input value/attribute/form mechanisms, use FieldDecorator for clearing and hints, keep Enter as newline, and expose focus/blur/select. Auto-size SHALL observe resizing after mount and release observers/listeners on deactivation and unmount. Server rendering SHALL not require browser globals.

PC clear visibility and mobile persistent clear visibility remain local FieldDecorator CSS. Textarea default resize is true on Cedar, false on Maple, declared in local defaults.


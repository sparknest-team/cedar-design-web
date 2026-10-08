## Why
AutoComplete still duplicates Maple DropdownMenu and focus handling after Select/Cascader were aligned.
## Changes
Use Cedar as the baseline and independently copy the public props, component, styles and tests to Maple. Reuse each library's local Input, Trigger and Select foundations. Add hint/line/colors/enterkeyhint to Cedar before copying; align form inheritance, grouped options, strict mapped filtering, length-limited selection and native Tab behavior.
shouldOpen controls opening only; filterOption filters candidates. No picker/list presentation is added to a free-text autocomplete.
## Non-goals
No cross-library runtime, platform configuration, compatibility aliases, or Date/Time changes.

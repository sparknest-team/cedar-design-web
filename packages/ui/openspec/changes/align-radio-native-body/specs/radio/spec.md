# Radio
## Requirements
- Both libraries SHALL expose the same value/state/appearance/inputAttrs/name/ariaLabel Props and default/checked-icon/unchecked-icon/radio slots.
- Native input SHALL own checked, disabled, readonly/error ARIA and keyboard focus; inputAttrs MUST NOT override managed type, checked, disabled or roving tabindex.
- Group restrictions SHALL not be bypassed by child false values. Group name and variant SHALL inherit. Explicit component/Form state semantics remain unchanged.
- Controlled rejection SHALL restore native checked state; readonly SHALL focus without mutation. Click, update:modelValue and change SHALL not duplicate.
- Group and standalone SFCs, context, styles and tests SHALL be independently copied, with only local imports, filenames and prefixes changed. Form integration/default token values MAY differ in local files.
- Component style entries SHALL explicitly import Ripple style; runtime SHALL remain SSR-importable.

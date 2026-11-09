# Form error descriptions

Visible errors receive a stable per-item id. Text, numeric, selection, temporal, choice, switch, slider and rate controls append the id to existing aria-describedby values; clearing errors removes only the library-owned reference. Choice groups describe the group without duplicating its error on every option, while separately nested fields keep their own errors. Slider thumb descriptions retain both caller references and the matching tooltip. Nested no-style items inherit the parent error and readPretty does not reference hidden errors. Other controls and custom fields retain their existing behavior.

VerificationCode associates the error with its group instead of repeating it on every digit. Upload associates it with the default trigger or the group around an interactive custom trigger, without taking keyboard ownership from that trigger.

Transfer associates the error with its group and does not repeat it on its internal search or selection controls. A caller-supplied role and descriptions remain intact.

ColorPicker associates errors with the inline panel or built-in trigger. Custom trigger content remains caller-owned and needs its own accessible description.

Custom controls can use the public `useFormErrorDescription` hook to merge and remove the FormItem error reference while retaining caller-provided descriptions. The control author binds the result to the actual interactive element.

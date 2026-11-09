import { h } from 'vue'
import type { FieldPresentationAdapter } from '../_components/field-presentation/with-field-presentation'
import ColorPicker from '../color-picker'

export const colorFieldAdapter: FieldPresentationAdapter = {
  editor: ({ props, value, update, slots, disabled, readonly }) =>
    h(
      ColorPicker,
      {
        ...props.colorPickerProps,
        ...props,
        modelValue: value,
        defaultValue: undefined,
        hideTrigger: true,
        disabled: disabled || readonly,
        'onUpdate:modelValue': update,
      },
      slots,
    ),
}

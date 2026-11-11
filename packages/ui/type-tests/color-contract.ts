import type { ColorProps } from '../src/color'

const valid: ColorProps = { emptyValue: '', colorPickerProps: { triggerProps: { popupContainer: false }, format: 'rgb' } }
void valid
// @ts-expect-error Color empty values must use its string model type.
const invalidEmpty: ColorProps = { emptyValue: 42 }
// @ts-expect-error Picker formats are restricted to its public union.
const invalidPicker: ColorProps = { colorPickerProps: { format: 'hsl' } }
void [invalidEmpty, invalidPicker]

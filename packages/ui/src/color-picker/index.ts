import { withInstall } from '../_utils/global-config'
import _ColorPicker from './color-picker'
import { colorPickerProps } from './props'

const ColorPicker: import('../_utils/global-config').ComponentWithInstall<typeof _ColorPicker> = withInstall(_ColorPicker, Object.assign(_ColorPicker, {
}), { components: [_ColorPicker] })

export type { RGB, HSV, Color, ColorPickerSlots, ColorPickerTriggerSlotProps } from './types'
export type ColorPickerInstance = InstanceType<typeof _ColorPicker>
export type { ColorPickerProps } from './props'
export { ColorPicker, colorPickerProps }
export const _ColorPickerComponent: typeof ColorPicker = ColorPicker

export default ColorPicker

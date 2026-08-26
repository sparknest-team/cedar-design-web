import { withInstall } from '../_utils/global-config'
import _ColorPicker from './color-picker'
import { colorPickerProps } from './props'

const ColorPicker = withInstall(_ColorPicker, Object.assign(_ColorPicker, {
}), { components: [_ColorPicker] })

export type { RGB, HSV, Color } from './types'
export type ColorPickerInstance = InstanceType<typeof _ColorPicker>
export type { ColorPickerProps } from './props'
export { ColorPicker, colorPickerProps }
export const _ColorPickerComponent = ColorPicker

export default ColorPicker

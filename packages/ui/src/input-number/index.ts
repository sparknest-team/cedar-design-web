import { withInstall } from '../_utils/global-config'
import _InputNumber from './presentation'
import { inputNumberProps } from './props'

const InputNumber: import('../_utils/global-config').ComponentWithInstall<typeof _InputNumber> = withInstall(_InputNumber, Object.assign(_InputNumber, {}), {
  components: [_InputNumber],
})

export type InputNumberInstance = InstanceType<typeof _InputNumber>
export { InputNumber, inputNumberProps }
export type {
  InputNumberMode,
  InputNumberSize,
  InputNumberVariant,
  InputNumberFormatter,
  InputNumberModelEvent,
  InputNumberParser,
  InputNumberProps,
} from './props'
export const _InputNumberComponent: typeof InputNumber = InputNumber

export default InputNumber

export type { InputNumberEmits, InputNumberSlots, InputNumberExpose } from './types'

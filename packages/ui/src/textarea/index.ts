import { withInstall } from '../_utils/global-config'
import _Textarea from './presentation'
import { textareaProps } from './props'

const Textarea: import('../_utils/global-config').ComponentWithInstall<typeof _Textarea> = withInstall(_Textarea, Object.assign(_Textarea, {}), { components: [_Textarea] })

export type TextareaInstance = InstanceType<typeof _Textarea>
export { textareaProps }
export type {
  TextareaAutoSize,
  TextareaProps,
  TextareaVariant,
  TextareaMaxLength,
  WordLength,
  WordSlice,
} from './props'
export const _TextareaComponent: typeof Textarea = Textarea
export { Textarea }

export default Textarea

export type { TextareaEmits, TextareaSlots, TextareaExpose } from './types'

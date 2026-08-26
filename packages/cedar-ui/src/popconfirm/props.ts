import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { ButtonProps } from '../button'
import type { MessageType, TriggerPosition } from '../_utils/constant'
import { MESSAGE_TYPES, TRIGGER_POSITIONS } from '../_utils/constant'
import type { ClassName } from '../_utils/types'

export type PopconfirmBeforeOk = (done: (closed?: boolean) => void) => void | boolean | Promise<void | boolean>

export const popconfirmProps = {
  content: String,
  placement: { type: String as PropType<TriggerPosition>, default: 'top', validator: (value: TriggerPosition) => TRIGGER_POSITIONS.includes(value) },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  type: { type: String as PropType<MessageType>, default: 'info', validator: (value: MessageType) => MESSAGE_TYPES.includes(value) },
  okText: String,
  cancelText: String,
  okLoading: Boolean,
  okButtonProps: Object as PropType<ButtonProps>,
  cancelButtonProps: Object as PropType<ButtonProps>,
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: [String, Object] as PropType<string | HTMLElement>,
  beforeOk: Function as PropType<PopconfirmBeforeOk>,
  beforeCancel: Function as PropType<() => boolean>,
} 

export type PopconfirmProps = Partial<ExtractPropTypes<typeof popconfirmProps>>

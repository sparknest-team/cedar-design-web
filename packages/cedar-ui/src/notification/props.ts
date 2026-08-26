import type { ExtractPropTypes, PropType } from 'vue'
import type { MessageType } from '../_utils/constant'
import { MESSAGE_TYPES } from '../_utils/constant'

export const notificationProps = {
  type: { type: String as PropType<MessageType>, default: 'info', validator: (value: MessageType) => MESSAGE_TYPES.includes(value) },
  showIcon: { type: Boolean, default: true },
  closable: Boolean,
  duration: { type: Number, default: 3000, validator: (value: number) => value >= 0 },
  resetOnUpdate: Boolean,
  closeButtonAriaLabel: { type: String, default: 'Close notification' },
} 

export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>

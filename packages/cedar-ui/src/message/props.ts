import type { ExtractPropTypes, PropType } from 'vue'
import type { MessageType } from '../_utils/constant'
import { MESSAGE_TYPES } from '../_utils/constant'

export const messageTypes = [...MESSAGE_TYPES, 'loading', 'normal'] as const
export type MessageStatus = (typeof messageTypes)[number]

export const messageProps = {
  type: { type: String as PropType<MessageStatus>, default: 'info', validator: (value: MessageStatus) => messageTypes.includes(value) },
  closable: Boolean,
  showIcon: { type: Boolean, default: true },
  duration: { type: Number, default: 3000, validator: (value: number) => value >= 0 },
  resetOnUpdate: Boolean,
  resetOnHover: Boolean,
  closeButtonAriaLabel: { type: String, default: 'Close message' },
} 

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>
export type { MessageType }

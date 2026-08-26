import { AppContext, CSSProperties, Ref, StyleValue } from 'vue'
import { ButtonProps } from '../button'
import { RenderContent } from '../_utils/types'

export type DialogAction = 'confirm' | 'cancel' | 'close'
export type DialogType = 'info' | 'success' | 'warning' | 'error'

export interface DialogBeforeCloseRefs {
  confirmButtonLoading: Ref<boolean>
  cancelButtonLoading: Ref<boolean>
  confirmButtonDisabled: Ref<boolean>
  cancelButtonDisabled: Ref<boolean>
}

export interface DialogConfig {
  open?: boolean
  title?: RenderContent
  message?: RenderContent
  content?: RenderContent
  footer?: boolean | RenderContent
  type?: DialogType
  simple?: boolean
  closable?: boolean
  confirmButton?: boolean
  cancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  confirmButtonLoading?: boolean
  cancelButtonLoading?: boolean
  confirmButtonDisabled?: boolean
  cancelButtonDisabled?: boolean
  mask?: boolean
  maskClass?: string
  maskStyle?: CSSProperties
  lockScroll?: boolean
  maskClosable?: boolean
  escToClose?: boolean
  popupContainer?: string | HTMLElement | false
  alignCenter?: boolean
  draggable?: boolean
  fullscreen?: boolean
  onConfirm?: (e?: Event) => void
  onCancel?: (e?: Event) => void
  beforeClose?: (action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickMask?: () => void
  onKeyEscape?: () => void
  width?: number | string
  top?: number | string
  titleAlign?: 'start' | 'center'
  dialogClass?: string | any[]
  dialogStyle?: CSSProperties
  maskAnimationName?: string
  dialogAnimationName?: string
  hideTitle?: boolean
  bodyClass?: string | any[]
  bodyStyle?: StyleValue
  unmountOnClose?: boolean
  zIndex?: number
}

export type DialogUpdateConfig = Omit<
  DialogConfig,
  | 'title'
  | 'message'
  | 'content'
  | 'footer'
  | 'onConfirm'
  | 'onCancel'
  | 'beforeClose'
  | 'onOpen'
  | 'onOpened'
  | 'onClose'
  | 'onClosed'
  | 'onClickMask'
  | 'onKeyEscape'
>

export interface DialogReturn {
  close: () => void
  update: (config: DialogUpdateConfig) => void
}

export interface DialogMethod {
  open: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  confirm: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  alert: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  info: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  success: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  warning: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
  error: (config: DialogConfig, appContext?: AppContext) => DialogReturn & Promise<DialogAction | void>
}

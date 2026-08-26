import type { CSSProperties, ExtractPropTypes, PropType, StyleValue } from 'vue'
import type { ButtonProps } from '../button'
import type { DialogAction, DialogBeforeCloseRefs, DialogType } from './types'

export const dialogProps = {
    open: {
      type: Boolean,
      default: undefined,
    },
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
    },
    top: {
      type: [Number, String],
    },
    mask: {
      type: Boolean,
      default: true,
    },
    maskClass: String,
    maskStyle: {
      type: Object as PropType<CSSProperties>,
    },
    title: String,
    message: String,
    type: {
      type: String as PropType<DialogType>,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    titleAlign: {
      type: String as PropType<'start' | 'center'>,
      default: 'center',
    },
    alignCenter: {
      type: Boolean,
      default: true,
    },
    unmountOnClose: Boolean,
    maskClosable: {
      type: Boolean,
      default: true,
    },
    escToClose: {
      type: Boolean,
      default: true,
    },
    confirmButton: {
      type: Boolean,
      default: true,
    },
    cancelButton: {
      type: Boolean,
      default: true,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    confirmButtonText: String,
    cancelButtonText: String,
    confirmButtonLoading: {
      type: Boolean,
      default: false,
    },
    cancelButtonLoading: {
      type: Boolean,
      default: false,
    },
    confirmButtonDisabled: {
      type: Boolean,
      default: false,
    },
    cancelButtonDisabled: {
      type: Boolean,
      default: false,
    },
    confirmButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    cancelButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    popupContainer: {
      type: [String, Object, Boolean] as PropType<string | HTMLElement | false>,
      default: 'body',
    },
    dialogClass: {
      type: [String, Array] as PropType<string | any[]>,
    },
    dialogStyle: {
      type: Object as PropType<CSSProperties>,
    },
    beforeClose: {
      type: Function as PropType<(action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void>,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    maskAnimationName: {
      type: String,
      default: (props: Record<string, any>) => {
        if (props.fullscreen) {
          return 'fade-in-standard'
        }
        return 'fade-modal'
      },
    },
    dialogAnimationName: {
      type: String,
      default: (props: Record<string, any>) => {
        if (props.fullscreen) {
          return 'zoom-in'
        }
        return 'zoom-modal'
      },
    },
    bodyClass: {
      type: [String, Array] as PropType<string | any[]>,
    },
    bodyStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    ariaLabel: String,
    closeButtonAriaLabel: {
      type: String,
      default: 'Close dialog',
    },
    zIndex: Number,
} 

export type DialogProps = Partial<ExtractPropTypes<typeof dialogProps>>

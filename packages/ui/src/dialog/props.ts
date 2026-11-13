import type { CompatibleStyleValue as StyleValue } from '../_utils/style-value'
import { readingDirectionProp } from '../_utils/direction'
import type { DialogBeforeClose } from "./types";
import { popupContainerProp } from "../_utils/popup-container";
import type {
  CSSProperties,
  ExtractPropTypes,
  PropType,
} from "vue";
import type { ButtonProps } from "../button";
import type { DialogAction, DialogType } from "./types";

export const dialogProps = {
  /** 阅读方向，省略时继承来源作用域；函数式调用可显式指定。 */
  dir: readingDirectionProp,
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
  overlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: String,
  overlayStyle: {
    type: Object as PropType<CSSProperties>,
  },
  title: String,
  message: String,
  messageAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left",
  },
  type: {
    type: String as PropType<DialogType>,
  },
  simple: {
    type: Boolean,
    default: false,
  },
  titleAlign: {
    type: String as PropType<"start" | "center">,
    default: "center",
  },
  alignCenter: {
    type: Boolean,
    default: true,
  },
  unmountOnClose: Boolean,
  overlayClosable: {
    type: Boolean,
    default: true,
  },
  escToClose: {
    type: Boolean,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  closeOnRouteChange: {
    type: Boolean,
    default: false,
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
  popupContainer: popupContainerProp,
  dialogClass: {
    type: [String, Array] as PropType<string | any[]>,
  },
  dialogStyle: {
    type: Object as PropType<CSSProperties>,
  },
  beforeClose: { type: Function as PropType<DialogBeforeClose> },
  draggable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  overlayAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      if (props.fullscreen) {
        return "fade-in-standard";
      }
      return "fade-modal";
    },
  },
  dialogAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      if (props.fullscreen) {
        return "zoom-in";
      }
      return "zoom-modal";
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
    default: "Close dialog",
  },
  zIndex: Number,
};

export type DialogProps = import("../_utils/public-props").CompatiblePublicProps<
  typeof dialogProps
>;

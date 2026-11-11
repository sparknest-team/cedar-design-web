import type { ReadingDirection } from '../_utils/direction'
import type {
  BeforeHookDone,
  BeforeHookResult,
} from "../_hooks/use-action-guard";
import type {
  AppContext,
  CSSProperties,
  StyleValue,
  VNode,
  VNodeChild,
} from "vue";
import type { ButtonProps } from "../button";

export type DialogBeforeClose = (
  payload: { action: DialogAction },
  done: BeforeHookDone,
  context: { signal: AbortSignal; event?: Event },
) => BeforeHookResult;

export type DialogAction = "confirm" | "cancel" | "close";
export type DialogType = "info" | "success" | "warning" | "error";
export type DialogMessageAlign = "left" | "center" | "right";
export type DialogTitleAlign = "start" | "center";
export type DialogRenderContent =
  string | number | VNode | VNode[] | (() => VNodeChild);


export interface DialogConfig {
  /** 阅读方向；省略时使用调用上下文或文档方向。 */
  dir?: ReadingDirection
  onGuardError?: (error: unknown, action: DialogAction) => void;

  open?: boolean;
  defaultOpen?: boolean;
  title?: DialogRenderContent;
  message?: DialogRenderContent;
  messageAlign?: DialogMessageAlign;
  content?: DialogRenderContent;
  footer?: boolean | DialogRenderContent;
  type?: DialogType;
  simple?: boolean;
  closable?: boolean;
  confirmButton?: boolean;
  cancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  confirmButtonLoading?: boolean;
  cancelButtonLoading?: boolean;
  confirmButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  overlay?: boolean;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  lockScroll?: boolean;
  closeOnRouteChange?: boolean;
  overlayClosable?: boolean;
  escToClose?: boolean;
  popupContainer?: string | HTMLElement | false;
  alignCenter?: boolean;
  draggable?: boolean;
  fullscreen?: boolean;
  onConfirm?: (e?: Event) => void;
  onCancel?: (e?: Event) => void;
  beforeClose?: DialogBeforeClose;
  onOpen?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
  onClickOverlay?: (event?: Event) => void;
  onKeyEscape?: (event?: KeyboardEvent) => void;
  width?: number | string;
  top?: number | string;
  titleAlign?: DialogTitleAlign;
  dialogClass?: string | any[];
  dialogStyle?: CSSProperties;
  overlayAnimationName?: string;
  dialogAnimationName?: string;
  hideTitle?: boolean;
  bodyClass?: string | any[];
  bodyStyle?: StyleValue;
  unmountOnClose?: boolean;
  ariaLabel?: string;
  closeButtonAriaLabel?: string;
  zIndex?: number;
}

export type DialogUpdateConfig = Omit<
  DialogConfig,
  | "title"
  | "message"
  | "footer"
  | "onConfirm"
  | "onCancel"
  | "beforeClose"
  | "onGuardError"
  | "onOpen"
  | "onOpened"
  | "onClose"
  | "onClosed"
  | "onClickOverlay"
  | "onKeyEscape"
> & { title?: string; message?: string };

export interface DialogReturn {
  close: () => void;
  update: (config: DialogUpdateConfig) => void;
}

export interface DialogMethod {
  open: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  confirm: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  alert: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  info: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  success: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  warning: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
  error: (
    config?: DialogConfig | string,
    appContext?: AppContext,
  ) => DialogReturn & Promise<DialogAction | void>;
}

export interface DialogService extends DialogMethod {
  close: () => void;
  setDefaultOptions: (options: DialogConfig) => void;
  resetDefaultOptions: () => void;
}

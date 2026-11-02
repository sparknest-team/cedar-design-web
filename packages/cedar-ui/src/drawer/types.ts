import type {
  BeforeHookDone,
  BeforeHookResult,
} from "../_hooks/use-action-guard";
import type { AppContext, CSSProperties, StyleValue } from "vue";
import type { RenderContent } from "../_utils/types";
import type { ButtonProps } from "../button";
import type { DrawerPlacement } from "./props";

export type DrawerBeforeClose = (
  payload: { action: DrawerAction },
  done: BeforeHookDone,
  context: { signal: AbortSignal; event?: Event },
) => BeforeHookResult;

export type DrawerAction = "confirm" | "cancel" | "close";


export interface DrawerConfig {
  onGuardError?: (error: unknown, action: DrawerAction) => void;

  placement?: DrawerPlacement;
  title?: RenderContent;
  content: RenderContent;
  overlay?: boolean;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  overlayClosable?: boolean;
  overlayAnimationName?: string;
  closable?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonLoading?: boolean;
  cancelButtonLoading?: boolean;
  confirmButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  width?: number | string;
  height?: number | string;
  popupContainer?: string | HTMLElement | false;
  drawerClass?: string | any[];
  drawerStyle?: CSSProperties;
  bodyClass?: string | any[];
  bodyStyle?: StyleValue;
  onConfirm?: (event?: Event) => void;
  onCancel?: (event?: Event) => void;
  onClickOverlay?: (event?: Event) => void;
  onKeyEscape?: (event?: KeyboardEvent) => void;
  beforeClose?: DrawerBeforeClose;
  onOpen?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
  escToClose?: boolean;
  lockScroll?: boolean;
  closeOnRouteChange?: boolean;
  header?: boolean | RenderContent;
  footer?: boolean | RenderContent;
  cancelButton?: boolean;
  unmountOnClose?: boolean;
  ariaLabel?: string;
  closeButtonAriaLabel?: string;
  zIndex?: number;
}

export type DrawerUpdateConfig = Omit<
  DrawerConfig,
  | "title"
  | "content"
  | "onConfirm"
  | "onCancel"
  | "onClickOverlay"
  | "onKeyEscape"
  | "beforeClose"
  | "onGuardError"
  | "onOpen"
  | "onOpened"
  | "onClose"
  | "onClosed"
  | "header"
  | "footer"
>;

export interface DrawerReturn {
  close: () => void;
  update: (config: DrawerUpdateConfig) => void;
}

export interface DrawerMethod {
  open: (config: DrawerConfig, appContext?: AppContext) => DrawerReturn;
}

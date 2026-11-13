import { triggerPlacements, type TriggerPlacement } from '../trigger/contract';
import type {
  BeforeHookDone,
  BeforeHookResult,
} from "../_hooks/use-action-guard";
import { popupContainerProp } from "../_utils/popup-container";
import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import type { ButtonProps } from "../button";
import type { MessageType } from "../_utils/constant";
import { MESSAGE_TYPES } from "../_utils/constant";
import type { ClassName } from "../_utils/types";

export type PopconfirmBeforeConfirm = (
 payload: { action: 'confirm' }, done: BeforeHookDone,
 context: { signal: AbortSignal; event?: Event },
) => BeforeHookResult;
export type PopconfirmBeforeCancel = (
 payload: { action: 'cancel' }, done: BeforeHookDone,
 context: { signal: AbortSignal; event?: Event },
) => BeforeHookResult;

export const popconfirmProps = {
  content: String,
  /** 浮层相对触发元素的首选方位，默认 top；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 */
  placement: {
    type: String as PropType<TriggerPlacement>,
    default: "top",
    validator: (value: TriggerPlacement) => triggerPlacements.includes(value),
  },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  type: {
    type: String as PropType<MessageType>,
    default: "info",
    validator: (value: MessageType) => MESSAGE_TYPES.includes(value),
  },
  confirmButtonText: String,
  cancelText: String,
  confirmButtonLoading: Boolean,
  confirmButtonProps: Object as PropType<ButtonProps>,
  cancelButtonProps: Object as PropType<ButtonProps>,
  contentClass: [String, Array, Object] as PropType<ClassName>,
  contentStyle: Object as PropType<CSSProperties>,
  arrowClass: [String, Array, Object] as PropType<ClassName>,
  arrowStyle: Object as PropType<CSSProperties>,
  popupContainer: popupContainerProp,
  beforeConfirm: Function as PropType<PopconfirmBeforeConfirm>,
  beforeCancel: Function as PropType<PopconfirmBeforeCancel>,
};

export type PopconfirmProps = import('../_utils/public-props').CompatiblePublicProps<
  typeof popconfirmProps
>;

import { popupContainerProp } from '../_utils/popup-container'
import type { ExtractPropTypes, PropType } from "vue";

export const overlayProps = {
  /** 是否显示背景层 */
  open: { type: Boolean, default: undefined },
  /** 非受控模式下是否默认显示 */
  defaultOpen: { type: Boolean, default: false },
  /** 点击背景区域是否关闭 */
  overlayClosable: { type: Boolean, default: true },
  /** 是否锁定挂载容器滚动 */
  lockScroll: { type: Boolean, default: true },
  /** 关闭后是否卸载内容 */
  unmountOnClose: { type: Boolean, default: true },
  /** 是否支持 Escape 键关闭 */
  escToClose: { type: Boolean, default: true },
  /** Portal 挂载位置，false 表示不使用 Teleport */
  popupContainer: popupContainerProp,
  /** 自定义层级 */
  zIndex: Number,
};

export type OverlayProps = import("vue").ExtractPublicPropTypes<typeof overlayProps>;

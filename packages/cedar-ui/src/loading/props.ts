import type { ExtractPropTypes, PropType } from "vue";
import type { ComponentSize } from "../_utils/constant";

export type LoadingType = "circle" | "wave" | "cube" | "rect" | "disappear";
export type LoadingSize = ComponentSize | number;

export const loadingProps = {
  /**
   * 加载动画类型
   */
  type: {
    type: String as PropType<LoadingType>,
    default: "circle",
  },
  /**
   * 加载指示器尺寸；数字表示 px
   */
  size: {
    type: [String, Number] as PropType<LoadingSize | number>,
    default: "md",
  },
  /**
   * circle 类型的半径
   */
  radius: [String, Number],
  /**
   * 加载指示器颜色
   */
  color: String,
  /**
   * 是否为加载中状态（仅在包裹内容时生效）
   */
  loading: Boolean,
  /**
   * 是否使用点状加载动画
   */
  dot: Boolean,
  /**
   * 提示文案
   */
  tip: String,
  /**
   * 是否隐藏加载指示器
   */
  hideIcon: Boolean,
};

export type LoadingProps = import("vue").ExtractPublicPropTypes<typeof loadingProps>;

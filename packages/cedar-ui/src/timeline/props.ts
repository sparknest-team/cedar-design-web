import {
  defineComponent,
  PropType,
  provide,
  reactive,
  computed,
  toRefs,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import type { ModeType, LabelPositionType } from "./types";
import { timelineInjectionKey } from "./context";
import Item from "./Item.vue";
import { Orientation } from "../_utils/constant";
import { useChildrenComponents } from "../_hooks/use-children-components";

export const timelineProps = {
  /**
   * @zh 是否倒序
   * @en Whether reverse order
   */
  reverse: {
    type: Boolean,
  },
  /**
   * @zh 时间轴方向
   * @en Timeline orientation
   * @values 'horizontal', 'vertical'
   */
  orientation: {
    type: String as PropType<Orientation>,
    default: "vertical",
  },
  /**
   * @zh 时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。
   * @en The display mode of Timeline
   * @values 'left','right','top','bottom','alternate'
   */
  mode: {
    type: String as PropType<ModeType>,
    default: "left",
  },
  /**
   * @zh 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。
   * @en Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content
   */
  pending: {
    type: [Boolean, String],
  },
  /**
   * @zh 设置标签文本的位置
   * @en Position of label text
   * @values 'relative', 'same'
   */
  labelPosition: {
    type: String as PropType<LabelPositionType>,
    default: "same",
  },
};

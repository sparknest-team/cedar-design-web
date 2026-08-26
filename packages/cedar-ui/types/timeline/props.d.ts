import { PropType } from 'vue';
import type { ModeType, LabelPositionType } from './types';
import { Direction } from '../_utils/constant';
export declare const timelineProps: {
    /**
     * @zh 是否倒序
     * @en Whether reverse order
     */
    reverse: {
        type: BooleanConstructor;
    };
    /**
     * @zh 时间轴方向
     * @en Timeline direction
     * @values 'horizontal', 'vertical'
     */
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    /**
     * @zh 时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。
     * @en The display mode of Timeline
     * @values 'left','right','top','bottom','alternate'
     */
    mode: {
        type: PropType<ModeType>;
        default: string;
    };
    /**
     * @zh 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。
     * @en Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content
     */
    pending: {
        type: (StringConstructor | BooleanConstructor)[];
    };
    /**
     * @zh 设置标签文本的位置
     * @en Position of label text
     * @values 'relative', 'same'
     */
    labelPosition: {
        type: PropType<LabelPositionType>;
        default: string;
    };
};

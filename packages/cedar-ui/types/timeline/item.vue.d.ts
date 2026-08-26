import { PropType } from 'vue';
import { DotType, LineType, PositionType } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 节点颜色
     * @en Dot color
     */
    dotColor: {
        type: StringConstructor;
    };
    /**
     * @zh 节点类型：空心圆/实心圆
     * @en Dot type
     * @values 'hollow', 'solid'
     */
    dotType: {
        type: PropType<DotType>;
        default: string;
    };
    /**
     * @zh 时间轴类型：实线/虚线/点状线
     * @en Line type
     * @values 'solid', 'dashed', 'dotted'
     */
    lineType: {
        type: PropType<LineType>;
        default: string;
    };
    /**
     * @zh 时间轴颜色
     * @en Line Color
     */
    lineColor: {
        type: StringConstructor;
    };
    /**
     * @zh 标签文本
     * @en Label text
     */
    label: {
        type: StringConstructor;
    };
    /**
     * @zh Item 位置
     * @en Item position
     */
    position: {
        type: PropType<PositionType>;
    };
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean | "horizontal" | "vertical" | import("./types").LabelPositionType | undefined;
    })[]>;
    dotLineCls: import("vue").ComputedRef<string[]>;
    dotTypeCls: import("vue").ComputedRef<string[]>;
    prefixCls: string;
    computedDotLineStyle: import("vue").ComputedRef<{
        borderColor?: string | undefined;
    }>;
    computedDotStyle: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    labelPosition: import("vue").ComputedRef<import("./types").LabelPositionType>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 节点颜色
     * @en Dot color
     */
    dotColor: {
        type: StringConstructor;
    };
    /**
     * @zh 节点类型：空心圆/实心圆
     * @en Dot type
     * @values 'hollow', 'solid'
     */
    dotType: {
        type: PropType<DotType>;
        default: string;
    };
    /**
     * @zh 时间轴类型：实线/虚线/点状线
     * @en Line type
     * @values 'solid', 'dashed', 'dotted'
     */
    lineType: {
        type: PropType<LineType>;
        default: string;
    };
    /**
     * @zh 时间轴颜色
     * @en Line Color
     */
    lineColor: {
        type: StringConstructor;
    };
    /**
     * @zh 标签文本
     * @en Label text
     */
    label: {
        type: StringConstructor;
    };
    /**
     * @zh Item 位置
     * @en Item position
     */
    position: {
        type: PropType<PositionType>;
    };
}>> & Readonly<{}>, {
    dotType: DotType;
    lineType: LineType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

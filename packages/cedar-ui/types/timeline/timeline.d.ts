import { PropType } from 'vue';
import type { ModeType, LabelPositionType } from './types';
import { Direction } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    reverse: {
        type: BooleanConstructor;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    mode: {
        type: PropType<ModeType>;
        default: string;
    };
    pending: {
        type: (StringConstructor | BooleanConstructor)[];
    };
    labelPosition: {
        type: PropType<LabelPositionType>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    reverse: {
        type: BooleanConstructor;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    mode: {
        type: PropType<ModeType>;
        default: string;
    };
    pending: {
        type: (StringConstructor | BooleanConstructor)[];
    };
    labelPosition: {
        type: PropType<LabelPositionType>;
        default: string;
    };
}>> & Readonly<{}>, {
    reverse: boolean;
    mode: ModeType;
    direction: "horizontal" | "vertical";
    labelPosition: LabelPositionType;
}, {}, {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: PropType<import("./types").PositionType>;
        };
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | LabelPositionType | undefined;
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
        labelPosition: import("vue").ComputedRef<LabelPositionType>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: PropType<import("./types").DotType>;
            default: string;
        };
        lineType: {
            type: PropType<import("./types").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: PropType<import("./types").PositionType>;
        };
    }>> & Readonly<{}>, {
        dotType: import("./types").DotType;
        lineType: import("./types").LineType;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Spin: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
        };
        loading: BooleanConstructor;
        dot: BooleanConstructor;
        tip: StringConstructor;
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        dot: boolean;
        loading: boolean;
        hideIcon: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

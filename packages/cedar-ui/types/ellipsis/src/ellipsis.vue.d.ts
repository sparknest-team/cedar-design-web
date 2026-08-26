import { type CSSProperties, type PropType } from 'vue';
import { tooltipProps as _tooltipProps } from '../../tooltip';
import { type ExtractPublicPropTypes } from '../../_utils/components';
declare var __VLS_5: {}, __VLS_7: {}, __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    'tooltip-content'?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    expand: BooleanConstructor;
    expandTrigger: PropType<import("./props").EllipsisExpandTrigger>;
    lineClamp: (StringConstructor | NumberConstructor)[];
    tooltip: {
        type: PropType<ExtractPublicPropTypes<typeof _tooltipProps> | boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:expand": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    expand: BooleanConstructor;
    expandTrigger: PropType<import("./props").EllipsisExpandTrigger>;
    lineClamp: (StringConstructor | NumberConstructor)[];
    tooltip: {
        type: PropType<ExtractPublicPropTypes<typeof _tooltipProps> | boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
}>, {
    tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: BooleanConstructor;
        content: StringConstructor;
        placement: {
            type: PropType<import("../..").TriggerPosition>;
            default: string;
            validator: (value: import("../..").TriggerPosition) => boolean;
        };
        xs: BooleanConstructor;
        backgroundColor: StringConstructor;
        contentClass: PropType<import("../../_utils/types").ClassName>;
        contentStyle: PropType<CSSProperties>;
        arrowClass: PropType<import("../../_utils/types").ClassName>;
        arrowStyle: PropType<CSSProperties>;
        popupContainer: PropType<string | HTMLElement>;
    }>>;
    expand: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

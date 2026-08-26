import { PropType } from 'vue';
import type { TabData, TabVariant, ScrollPosition } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tabs: {
        type: PropType<TabData[]>;
        required: true;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<TabVariant>;
        required: true;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    activeIndex: {
        type: NumberConstructor;
        required: true;
    };
    indicatorPosition: {
        type: PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: true;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: true;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollPosition: {
        type: PropType<ScrollPosition>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete" | "add")[], "click" | "delete" | "add", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: PropType<TabData[]>;
        required: true;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<TabVariant>;
        required: true;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    activeIndex: {
        type: NumberConstructor;
        required: true;
    };
    indicatorPosition: {
        type: PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: true;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        required: true;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollPosition: {
        type: PropType<ScrollPosition>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}>, {
    vertical: boolean;
    indicatorPosition: "reverse" | "normal";
    editable: boolean;
    showAddButton: boolean;
    headerPadding: boolean;
    scrollPosition: ScrollPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

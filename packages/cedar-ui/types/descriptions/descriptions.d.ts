import type { CSSProperties } from 'vue';
import { DescData } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<DescData[]>;
        default: () => never[];
    };
    column: {
        type: import("vue").PropType<number | import("..").ResponsiveValue>;
        default: number;
        validator: (value: number | import("..").ResponsiveValue) => boolean;
    };
    title: StringConstructor;
    layout: {
        type: import("vue").PropType<import("./types").DescLayout>;
        default: string;
        validator: (value: import("./types").DescLayout) => boolean;
    };
    align: {
        type: import("vue").PropType<import("./props").DescriptionsAlign>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    bordered: BooleanConstructor;
    labelStyle: import("vue").PropType<CSSProperties>;
    valueStyle: import("vue").PropType<CSSProperties>;
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
        validator: (value: string) => boolean;
    };
    ariaLabel: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<DescData[]>;
        default: () => never[];
    };
    column: {
        type: import("vue").PropType<number | import("..").ResponsiveValue>;
        default: number;
        validator: (value: number | import("..").ResponsiveValue) => boolean;
    };
    title: StringConstructor;
    layout: {
        type: import("vue").PropType<import("./types").DescLayout>;
        default: string;
        validator: (value: import("./types").DescLayout) => boolean;
    };
    align: {
        type: import("vue").PropType<import("./props").DescriptionsAlign>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    bordered: BooleanConstructor;
    labelStyle: import("vue").PropType<CSSProperties>;
    valueStyle: import("vue").PropType<CSSProperties>;
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
        validator: (value: string) => boolean;
    };
    ariaLabel: StringConstructor;
}>> & Readonly<{}>, {
    data: DescData[];
    column: number | import("..").ResponsiveValue;
    layout: import("./types").DescLayout;
    tableLayout: "fixed" | "auto";
    align: import("./props").DescriptionsAlign;
    bordered: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import _Descriptions from './descriptions';
import _DescriptionsItem from './descriptions-item.vue';
import { descriptionsItemProps, descriptionsProps } from './props';
declare const Descriptions: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").DescData[]>;
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
        labelStyle: import("vue").PropType<import("vue").CSSProperties>;
        valueStyle: import("vue").PropType<import("vue").CSSProperties>;
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
            validator: (value: string) => boolean;
        };
        ariaLabel: StringConstructor;
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        data: import("./types").DescData[];
        column: number | import("..").ResponsiveValue;
        layout: import("./types").DescLayout;
        tableLayout: "fixed" | "auto";
        align: import("./props").DescriptionsAlign;
        bordered: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").DescData[]>;
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
        labelStyle: import("vue").PropType<import("vue").CSSProperties>;
        valueStyle: import("vue").PropType<import("vue").CSSProperties>;
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
            validator: (value: string) => boolean;
        };
        ariaLabel: StringConstructor;
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        data: import("./types").DescData[];
        column: number | import("..").ResponsiveValue;
        layout: import("./types").DescLayout;
        tableLayout: "fixed" | "auto";
        align: import("./props").DescriptionsAlign;
        bordered: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./types").DescData[]>;
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
    labelStyle: import("vue").PropType<import("vue").CSSProperties>;
    valueStyle: import("vue").PropType<import("vue").CSSProperties>;
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
        validator: (value: string) => boolean;
    };
    ariaLabel: StringConstructor;
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: import("./types").DescData[];
    column: number | import("..").ResponsiveValue;
    layout: import("./types").DescLayout;
    tableLayout: "fixed" | "auto";
    align: import("./props").DescriptionsAlign;
    bordered: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    DescriptionsItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        label: StringConstructor;
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        label: StringConstructor;
    }>> & Readonly<{}>, {
        span: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type DescriptionsInstance = InstanceType<typeof _Descriptions>;
export type DescriptionsItemInstance = InstanceType<typeof _DescriptionsItem>;
export type { DescriptionsAlign, DescriptionsItemProps, DescriptionsProps } from './props';
export type { DescData } from './types';
export { Descriptions, descriptionsItemProps, descriptionsProps };
export declare const _DescriptionsComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").DescData[]>;
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
        labelStyle: import("vue").PropType<import("vue").CSSProperties>;
        valueStyle: import("vue").PropType<import("vue").CSSProperties>;
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
            validator: (value: string) => boolean;
        };
        ariaLabel: StringConstructor;
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        data: import("./types").DescData[];
        column: number | import("..").ResponsiveValue;
        layout: import("./types").DescLayout;
        tableLayout: "fixed" | "auto";
        align: import("./props").DescriptionsAlign;
        bordered: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").DescData[]>;
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
        labelStyle: import("vue").PropType<import("vue").CSSProperties>;
        valueStyle: import("vue").PropType<import("vue").CSSProperties>;
        tableLayout: {
            type: import("vue").PropType<"auto" | "fixed">;
            default: string;
            validator: (value: string) => boolean;
        };
        ariaLabel: StringConstructor;
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        data: import("./types").DescData[];
        column: number | import("..").ResponsiveValue;
        layout: import("./types").DescLayout;
        tableLayout: "fixed" | "auto";
        align: import("./props").DescriptionsAlign;
        bordered: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./types").DescData[]>;
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
    labelStyle: import("vue").PropType<import("vue").CSSProperties>;
    valueStyle: import("vue").PropType<import("vue").CSSProperties>;
    tableLayout: {
        type: import("vue").PropType<"auto" | "fixed">;
        default: string;
        validator: (value: string) => boolean;
    };
    ariaLabel: StringConstructor;
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: import("./types").DescData[];
    column: number | import("..").ResponsiveValue;
    layout: import("./types").DescLayout;
    tableLayout: "fixed" | "auto";
    align: import("./props").DescriptionsAlign;
    bordered: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    DescriptionsItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        label: StringConstructor;
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        label: StringConstructor;
    }>> & Readonly<{}>, {
        span: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { _DescriptionsItem as DescriptionsItem };
export default Descriptions;

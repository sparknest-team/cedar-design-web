declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<import("./props").CardVariant>;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: import("vue").PropType<import("./props").CardSize>;
    titleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    title: StringConstructor;
    subtitle: StringConstructor;
    description: StringConstructor;
    topDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./props").CardDirection>;
        default: string;
    };
    elevation: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<import("./props").CardVariant>;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: import("vue").PropType<import("./props").CardSize>;
    titleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    title: StringConstructor;
    subtitle: StringConstructor;
    description: StringConstructor;
    topDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./props").CardDirection>;
        default: string;
    };
    elevation: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}>> & Readonly<{}>, {
    variant: "default" | "tonal" | "outlined";
    elevation: string | number | boolean;
    direction: "column" | "row" | "row-reverse";
    loading: boolean;
    hoverable: boolean;
    titleStyle: import("vue").CSSProperties;
    topDivider: boolean;
    bottomDivider: boolean;
}, {}, {
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

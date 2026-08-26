declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: import("vue").PropType<import("../locale/types").CedarLang>;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: import("vue").PropType<import("./props").CedarTheme>;
        validator: (value: import("./props").CedarTheme) => boolean;
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: import("vue").PropType<import("../locale/types").CedarLang>;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: import("vue").PropType<import("./props").CedarTheme>;
        validator: (value: import("./props").CedarTheme) => boolean;
    };
}>> & Readonly<{}>, {
    prefixCls: string;
    global: boolean;
    updateAtScroll: boolean;
    scrollToClose: boolean;
    exchangeTime: boolean;
    rtl: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

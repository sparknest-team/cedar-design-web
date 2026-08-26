import _ConfigProvider from './config-provider.vue';
import { configProviderProps, cedarThemes } from './props';
declare const ConfigProvider: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        prefixCls: string;
        global: boolean;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        exchangeTime: boolean;
        rtl: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        prefixCls: string;
        global: boolean;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        exchangeTime: boolean;
        rtl: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    prefixCls: string;
    global: boolean;
    updateAtScroll: boolean;
    scrollToClose: boolean;
    exchangeTime: boolean;
    rtl: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>;
export type { ConfigProviderProps, CedarTheme } from './props';
export { ConfigProvider, configProviderProps, cedarThemes };
export declare const _ConfigProviderComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        prefixCls: string;
        global: boolean;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        exchangeTime: boolean;
        rtl: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        prefixCls: string;
        global: boolean;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        exchangeTime: boolean;
        rtl: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    prefixCls: string;
    global: boolean;
    updateAtScroll: boolean;
    scrollToClose: boolean;
    exchangeTime: boolean;
    rtl: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default ConfigProvider;

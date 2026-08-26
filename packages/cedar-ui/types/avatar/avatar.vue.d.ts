import { CSSProperties } from 'vue';
import type { AvatarTriggerType } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./types").AvatarShape>;
        default: string;
        validator: (value: unknown) => value is import("./types").AvatarShape;
    };
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    size: NumberConstructor;
    autoFixFontSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerType: {
        type: import("vue").PropType<AvatarTriggerType>;
        default: string;
        validator: (value: unknown) => value is AvatarTriggerType;
    };
    triggerIconStyle: import("vue").PropType<CSSProperties>;
    objectFit: {
        type: import("vue").PropType<import("./types").ObjectFit>;
        validator: (value: unknown) => value is import("./types").ObjectFit;
    };
}>, {
    prefixCls: string;
    rtl: import("vue").ComputedRef<boolean>;
    itemRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    cls: import("vue").ComputedRef<string[]>;
    outerStyle: import("vue").ComputedRef<CSSProperties>;
    wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    wrapperCls: import("vue").ComputedRef<string>;
    computedTriggerIconStyle: CSSProperties;
    isImage: import("vue").Ref<boolean, boolean>;
    shouldLoad: import("vue").Ref<boolean, boolean>;
    isLoaded: import("vue").Ref<boolean, boolean>;
    hasError: import("vue").Ref<boolean, boolean>;
    onClick: (e: MouseEvent) => void;
    handleResize: () => void;
    handleImgLoad: () => void;
    handleImgError: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 点击回调
     * @en Callback when clicked
     * @param {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true;
    /**
     * @zh 图片加载错误
     * @en image load error
     */
    error: () => true;
    /**
     * @zh 图片加载成功
     * @en image load success
     */
    load: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./types").AvatarShape>;
        default: string;
        validator: (value: unknown) => value is import("./types").AvatarShape;
    };
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    size: NumberConstructor;
    autoFixFontSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerType: {
        type: import("vue").PropType<AvatarTriggerType>;
        default: string;
        validator: (value: unknown) => value is AvatarTriggerType;
    };
    triggerIconStyle: import("vue").PropType<CSSProperties>;
    objectFit: {
        type: import("vue").PropType<import("./types").ObjectFit>;
        validator: (value: unknown) => value is import("./types").ObjectFit;
    };
}>> & Readonly<{
    onError?: (() => any) | undefined;
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onLoad?: (() => any) | undefined;
}>, {
    alt: string;
    shape: import("./types").AvatarShape;
    autoFixFontSize: boolean;
    triggerType: AvatarTriggerType;
}, {}, {
    ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        watchOnUpdated: BooleanConstructor;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        watchOnUpdated: BooleanConstructor;
    }>> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {
        watchOnUpdated: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconImageClose: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    IconLoading: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

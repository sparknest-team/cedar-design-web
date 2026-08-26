import _Affix from './affix.vue';
import { affixProps } from './props';
declare const Affix: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("./props").AffixTarget>;
        targetContainer: import("vue").PropType<import("./props").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (fixed: boolean) => true;
    }, import("vue").PublicProps, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }, true, {}, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("./props").AffixTarget>;
        targetContainer: import("vue").PropType<import("./props").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: NumberConstructor;
    target: import("vue").PropType<import("./props").AffixTarget>;
    targetContainer: import("vue").PropType<import("./props").AffixTarget>;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    cssMode: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((fixed: boolean) => any) | undefined;
}>, {
    wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isFixed: import("vue").Ref<boolean, boolean>;
    disabled: import("vue").Ref<boolean, boolean>;
    cssMode: import("vue").Ref<boolean, boolean>;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
    contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
    stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
    updatePositionThrottle: {
        (...args: any[]): void;
        cancel(): void;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (fixed: boolean) => true;
}, string, {
    offsetTop: number;
    zIndex: number;
    disabled: boolean;
    cssMode: boolean;
}, {}, string, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type AffixInstance = InstanceType<typeof _Affix>;
export type { AffixProps, AffixTarget } from './props';
export { Affix, affixProps };
export declare const _AffixComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("./props").AffixTarget>;
        targetContainer: import("vue").PropType<import("./props").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (fixed: boolean) => true;
    }, import("vue").PublicProps, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }, true, {}, {}, {
        ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        offsetTop: {
            type: NumberConstructor;
            default: number;
        };
        offsetBottom: NumberConstructor;
        target: import("vue").PropType<import("./props").AffixTarget>;
        targetContainer: import("vue").PropType<import("./props").AffixTarget>;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        disabled: BooleanConstructor;
        cssMode: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((fixed: boolean) => any) | undefined;
    }>, {
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean, boolean>;
        disabled: import("vue").Ref<boolean, boolean>;
        cssMode: import("vue").Ref<boolean, boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }, {}, {}, {}, {
        offsetTop: number;
        zIndex: number;
        disabled: boolean;
        cssMode: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: NumberConstructor;
    target: import("vue").PropType<import("./props").AffixTarget>;
    targetContainer: import("vue").PropType<import("./props").AffixTarget>;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    cssMode: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((fixed: boolean) => any) | undefined;
}>, {
    wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isFixed: import("vue").Ref<boolean, boolean>;
    disabled: import("vue").Ref<boolean, boolean>;
    cssMode: import("vue").Ref<boolean, boolean>;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    placeholderStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
    contentStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
    stickyStyles: import("vue").ComputedRef<import("vue").CSSProperties>;
    updatePositionThrottle: {
        (...args: any[]): void;
        cancel(): void;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (fixed: boolean) => true;
}, string, {
    offsetTop: number;
    zIndex: number;
    disabled: boolean;
    cssMode: boolean;
}, {}, string, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Affix;

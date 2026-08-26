import _Anchor from './anchor.vue';
import _AnchorLink from './anchor-link.vue';
import { anchorProps } from './props';
declare const Anchor: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        boundary: {
            type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
            default: string;
            validator: (value: any) => boolean;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        showBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollContainer: {
            type: import("vue").PropType<string | HTMLElement | Window>;
        };
        changeHash: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((hash: string) => any) | undefined;
        onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (hash: string | undefined, preHash: string) => true;
        change: (hash: string) => true;
    }, import("vue").PublicProps, {
        boundary: number | "center" | "end" | "start" | "nearest";
        showLine: boolean;
        showBackground: boolean;
        changeHash: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        boundary: {
            type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
            default: string;
            validator: (value: any) => boolean;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        showBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollContainer: {
            type: import("vue").PropType<string | HTMLElement | Window>;
        };
        changeHash: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((hash: string) => any) | undefined;
        onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    }, {}, {}, {}, {
        boundary: number | "center" | "end" | "start" | "nearest";
        showLine: boolean;
        showBackground: boolean;
        changeHash: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    boundary: {
        type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
        default: string;
        validator: (value: any) => boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: import("vue").PropType<string | HTMLElement | Window>;
    };
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((hash: string) => any) | undefined;
    onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    cls: import("vue").ComputedRef<any[]>;
    anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (hash: string | undefined, preHash: string) => true;
    change: (hash: string) => true;
}, string, {
    boundary: number | "center" | "end" | "start" | "nearest";
    showLine: boolean;
    showBackground: boolean;
    changeHash: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Link: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        href: StringConstructor;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        linkRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        handleClick: (e: MouseEvent) => void | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        href: StringConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type AnchorInstance = InstanceType<typeof _Anchor>;
export type AnchorLinkInstance = InstanceType<typeof _AnchorLink>;
export { _AnchorLink as AnchorLink };
export declare const _AnchorComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        boundary: {
            type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
            default: string;
            validator: (value: any) => boolean;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        showBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollContainer: {
            type: import("vue").PropType<string | HTMLElement | Window>;
        };
        changeHash: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((hash: string) => any) | undefined;
        onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (hash: string | undefined, preHash: string) => true;
        change: (hash: string) => true;
    }, import("vue").PublicProps, {
        boundary: number | "center" | "end" | "start" | "nearest";
        showLine: boolean;
        showBackground: boolean;
        changeHash: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        boundary: {
            type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
            default: string;
            validator: (value: any) => boolean;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        showBackground: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollContainer: {
            type: import("vue").PropType<string | HTMLElement | Window>;
        };
        changeHash: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((hash: string) => any) | undefined;
        onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    }, {}, {}, {}, {
        boundary: number | "center" | "end" | "start" | "nearest";
        showLine: boolean;
        showBackground: boolean;
        changeHash: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    boundary: {
        type: import("vue").PropType<("center" | "end" | "start" | "nearest") | number>;
        default: string;
        validator: (value: any) => boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: import("vue").PropType<string | HTMLElement | Window>;
    };
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((hash: string) => any) | undefined;
    onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    cls: import("vue").ComputedRef<any[]>;
    anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (hash: string | undefined, preHash: string) => true;
    change: (hash: string) => true;
}, string, {
    boundary: number | "center" | "end" | "start" | "nearest";
    showLine: boolean;
    showBackground: boolean;
    changeHash: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Link: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        href: StringConstructor;
    }>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
        cls: import("vue").ComputedRef<any[]>;
        linkRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        handleClick: (e: MouseEvent) => void | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        href: StringConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Anchor };
export { anchorProps };
export default Anchor;

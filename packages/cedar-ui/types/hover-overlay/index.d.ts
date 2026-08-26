import _HoverOverlay from './HoverOverlay.vue';
import { hoverOverlayProps } from './props';
declare const HoverOverlay: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        hovering: BooleanConstructor;
        focusing: BooleanConstructor;
    }>> & Readonly<{}>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        hovering: boolean;
        focusing: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        hovering: BooleanConstructor;
        focusing: BooleanConstructor;
    }>> & Readonly<{}>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
    }, {}, {}, {}, {
        hovering: boolean;
        focusing: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    hovering: BooleanConstructor;
    focusing: BooleanConstructor;
}>> & Readonly<{}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    hovering: boolean;
    focusing: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export declare function useHoverOverlay(): {
    hovering: import("vue").Ref<boolean, boolean>;
    handleHovering: (value: boolean) => void;
};
export type HoverOverlayInstance = InstanceType<typeof _HoverOverlay>;
export type { HoverOverlayProps } from './props';
export { hoverOverlayProps };
export { HoverOverlay };
export declare const _HoverOverlayComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        hovering: BooleanConstructor;
        focusing: BooleanConstructor;
    }>> & Readonly<{}>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        hovering: boolean;
        focusing: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        hovering: BooleanConstructor;
        focusing: BooleanConstructor;
    }>> & Readonly<{}>, {
        n: (suffix?: string) => string;
        classes: typeof import("rattail").classes;
    }, {}, {}, {}, {
        hovering: boolean;
        focusing: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    hovering: BooleanConstructor;
    focusing: BooleanConstructor;
}>> & Readonly<{}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    hovering: boolean;
    focusing: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default HoverOverlay;

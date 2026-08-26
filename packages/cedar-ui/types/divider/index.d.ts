import _Divider from './divider.vue';
import { dividerProps } from './props';
declare const Divider: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        sizeX: {
            type: import("vue").PropType<number | string | Array<number | string>>;
        };
        sizeY: {
            type: import("vue").PropType<number | string | Array<number | string>>;
            default: () => string;
        };
        orientation: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: () => string;
        };
        textAlign: {
            type: import("vue").PropType<"start" | "center" | "end">;
            default: string;
        };
        description: StringConstructor;
        type: {
            type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
            default: () => string;
        };
        hairline: BooleanConstructor;
        thickness: NumberConstructor;
        color: StringConstructor;
        opacity: NumberConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: "dashed" | "dotted" | "double" | "solid";
        textAlign: "center" | "end" | "start";
        sizeY: string | number | (string | number)[];
        orientation: "horizontal" | "vertical";
        hairline: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        sizeX: {
            type: import("vue").PropType<number | string | Array<number | string>>;
        };
        sizeY: {
            type: import("vue").PropType<number | string | Array<number | string>>;
            default: () => string;
        };
        orientation: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: () => string;
        };
        textAlign: {
            type: import("vue").PropType<"start" | "center" | "end">;
            default: string;
        };
        description: StringConstructor;
        type: {
            type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
            default: () => string;
        };
        hairline: BooleanConstructor;
        thickness: NumberConstructor;
        color: StringConstructor;
        opacity: NumberConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: "dashed" | "dotted" | "double" | "solid";
        textAlign: "center" | "end" | "start";
        sizeY: string | number | (string | number)[];
        orientation: "horizontal" | "vertical";
        hairline: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    sizeX: {
        type: import("vue").PropType<number | string | Array<number | string>>;
    };
    sizeY: {
        type: import("vue").PropType<number | string | Array<number | string>>;
        default: () => string;
    };
    orientation: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: () => string;
    };
    textAlign: {
        type: import("vue").PropType<"start" | "center" | "end">;
        default: string;
    };
    description: StringConstructor;
    type: {
        type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
        default: () => string;
    };
    hairline: BooleanConstructor;
    thickness: NumberConstructor;
    color: StringConstructor;
    opacity: NumberConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "dashed" | "dotted" | "double" | "solid";
    textAlign: "center" | "end" | "start";
    sizeY: string | number | (string | number)[];
    orientation: "horizontal" | "vertical";
    hairline: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export type DividerInstance = InstanceType<typeof _Divider>;
export type { DividerProps } from './props';
export { dividerProps };
export { Divider };
export declare const _DividerComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        sizeX: {
            type: import("vue").PropType<number | string | Array<number | string>>;
        };
        sizeY: {
            type: import("vue").PropType<number | string | Array<number | string>>;
            default: () => string;
        };
        orientation: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: () => string;
        };
        textAlign: {
            type: import("vue").PropType<"start" | "center" | "end">;
            default: string;
        };
        description: StringConstructor;
        type: {
            type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
            default: () => string;
        };
        hairline: BooleanConstructor;
        thickness: NumberConstructor;
        color: StringConstructor;
        opacity: NumberConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: "dashed" | "dotted" | "double" | "solid";
        textAlign: "center" | "end" | "start";
        sizeY: string | number | (string | number)[];
        orientation: "horizontal" | "vertical";
        hairline: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        sizeX: {
            type: import("vue").PropType<number | string | Array<number | string>>;
        };
        sizeY: {
            type: import("vue").PropType<number | string | Array<number | string>>;
            default: () => string;
        };
        orientation: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: () => string;
        };
        textAlign: {
            type: import("vue").PropType<"start" | "center" | "end">;
            default: string;
        };
        description: StringConstructor;
        type: {
            type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
            default: () => string;
        };
        hairline: BooleanConstructor;
        thickness: NumberConstructor;
        color: StringConstructor;
        opacity: NumberConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: "dashed" | "dotted" | "double" | "solid";
        textAlign: "center" | "end" | "start";
        sizeY: string | number | (string | number)[];
        orientation: "horizontal" | "vertical";
        hairline: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    sizeX: {
        type: import("vue").PropType<number | string | Array<number | string>>;
    };
    sizeY: {
        type: import("vue").PropType<number | string | Array<number | string>>;
        default: () => string;
    };
    orientation: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: () => string;
    };
    textAlign: {
        type: import("vue").PropType<"start" | "center" | "end">;
        default: string;
    };
    description: StringConstructor;
    type: {
        type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
        default: () => string;
    };
    hairline: BooleanConstructor;
    thickness: NumberConstructor;
    color: StringConstructor;
    opacity: NumberConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "dashed" | "dotted" | "double" | "solid";
    textAlign: "center" | "end" | "start";
    sizeY: string | number | (string | number)[];
    orientation: "horizontal" | "vertical";
    hairline: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
})>;
export default Divider;

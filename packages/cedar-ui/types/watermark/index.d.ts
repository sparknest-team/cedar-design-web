import _Watermark from './watermark';
import { watermarkProps } from './props';
declare const Watermark: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: import("vue").PropType<string | string[]>;
        };
        image: {
            type: StringConstructor;
        };
        width: {
            type: NumberConstructor;
        };
        height: {
            type: NumberConstructor;
        };
        gap: {
            type: import("vue").PropType<[number, number]>;
            default: () => number[];
        };
        offset: {
            type: import("vue").PropType<[number, number]>;
        };
        rotate: {
            type: NumberConstructor;
            default: number;
        };
        font: {
            type: import("vue").PropType<import("./types").WatermarkFont>;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        alpha: {
            type: NumberConstructor;
            default: number;
        };
        antiTamper: {
            type: BooleanConstructor;
            default: boolean;
        };
        grayscale: {
            type: BooleanConstructor;
            default: boolean;
        };
        repeat: {
            type: BooleanConstructor;
            default: boolean;
        };
        staggered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        repeat: boolean;
        zIndex: number;
        alpha: number;
        rotate: number;
        gap: [number, number];
        antiTamper: boolean;
        grayscale: boolean;
        staggered: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: import("vue").PropType<string | string[]>;
        };
        image: {
            type: StringConstructor;
        };
        width: {
            type: NumberConstructor;
        };
        height: {
            type: NumberConstructor;
        };
        gap: {
            type: import("vue").PropType<[number, number]>;
            default: () => number[];
        };
        offset: {
            type: import("vue").PropType<[number, number]>;
        };
        rotate: {
            type: NumberConstructor;
            default: number;
        };
        font: {
            type: import("vue").PropType<import("./types").WatermarkFont>;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        alpha: {
            type: NumberConstructor;
            default: number;
        };
        antiTamper: {
            type: BooleanConstructor;
            default: boolean;
        };
        grayscale: {
            type: BooleanConstructor;
            default: boolean;
        };
        repeat: {
            type: BooleanConstructor;
            default: boolean;
        };
        staggered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        repeat: boolean;
        zIndex: number;
        alpha: number;
        rotate: number;
        gap: [number, number];
        antiTamper: boolean;
        grayscale: boolean;
        staggered: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: import("vue").PropType<string | string[]>;
    };
    image: {
        type: StringConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    gap: {
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    font: {
        type: import("vue").PropType<import("./types").WatermarkFont>;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    alpha: {
        type: NumberConstructor;
        default: number;
    };
    antiTamper: {
        type: BooleanConstructor;
        default: boolean;
    };
    grayscale: {
        type: BooleanConstructor;
        default: boolean;
    };
    repeat: {
        type: BooleanConstructor;
        default: boolean;
    };
    staggered: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    repeat: boolean;
    zIndex: number;
    alpha: number;
    rotate: number;
    gap: [number, number];
    antiTamper: boolean;
    grayscale: boolean;
    staggered: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type WatermarkInstance = InstanceType<typeof _Watermark>;
export declare const _WatermarkComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: import("vue").PropType<string | string[]>;
        };
        image: {
            type: StringConstructor;
        };
        width: {
            type: NumberConstructor;
        };
        height: {
            type: NumberConstructor;
        };
        gap: {
            type: import("vue").PropType<[number, number]>;
            default: () => number[];
        };
        offset: {
            type: import("vue").PropType<[number, number]>;
        };
        rotate: {
            type: NumberConstructor;
            default: number;
        };
        font: {
            type: import("vue").PropType<import("./types").WatermarkFont>;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        alpha: {
            type: NumberConstructor;
            default: number;
        };
        antiTamper: {
            type: BooleanConstructor;
            default: boolean;
        };
        grayscale: {
            type: BooleanConstructor;
            default: boolean;
        };
        repeat: {
            type: BooleanConstructor;
            default: boolean;
        };
        staggered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        repeat: boolean;
        zIndex: number;
        alpha: number;
        rotate: number;
        gap: [number, number];
        antiTamper: boolean;
        grayscale: boolean;
        staggered: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: import("vue").PropType<string | string[]>;
        };
        image: {
            type: StringConstructor;
        };
        width: {
            type: NumberConstructor;
        };
        height: {
            type: NumberConstructor;
        };
        gap: {
            type: import("vue").PropType<[number, number]>;
            default: () => number[];
        };
        offset: {
            type: import("vue").PropType<[number, number]>;
        };
        rotate: {
            type: NumberConstructor;
            default: number;
        };
        font: {
            type: import("vue").PropType<import("./types").WatermarkFont>;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        alpha: {
            type: NumberConstructor;
            default: number;
        };
        antiTamper: {
            type: BooleanConstructor;
            default: boolean;
        };
        grayscale: {
            type: BooleanConstructor;
            default: boolean;
        };
        repeat: {
            type: BooleanConstructor;
            default: boolean;
        };
        staggered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        repeat: boolean;
        zIndex: number;
        alpha: number;
        rotate: number;
        gap: [number, number];
        antiTamper: boolean;
        grayscale: boolean;
        staggered: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: import("vue").PropType<string | string[]>;
    };
    image: {
        type: StringConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    gap: {
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    font: {
        type: import("vue").PropType<import("./types").WatermarkFont>;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    alpha: {
        type: NumberConstructor;
        default: number;
    };
    antiTamper: {
        type: BooleanConstructor;
        default: boolean;
    };
    grayscale: {
        type: BooleanConstructor;
        default: boolean;
    };
    repeat: {
        type: BooleanConstructor;
        default: boolean;
    };
    staggered: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    repeat: boolean;
    zIndex: number;
    alpha: number;
    rotate: number;
    gap: [number, number];
    antiTamper: boolean;
    grayscale: boolean;
    staggered: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Watermark };
export { watermarkProps };
export default Watermark;

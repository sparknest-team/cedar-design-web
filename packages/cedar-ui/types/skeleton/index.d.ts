import _Skeleton from './skeleton.vue';
import _SkeletonLine from './line.vue';
import _SkeletonShape from './shape.vue';
import { skeletonLineProps, skeletonProps, skeletonShapeProps } from './props';
declare const Skeleton: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        animation: boolean;
        loading: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        animation: boolean;
        loading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    animation: boolean;
    loading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Line: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            default: number;
        };
        widths: {
            type: import("vue").PropType<Array<number | string>>;
            default: () => never[];
        };
        lineHeight: {
            type: NumberConstructor;
            default: number;
        };
        lineSpacing: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        prefixCls: string;
        lines: import("vue").CSSProperties[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            default: number;
        };
        widths: {
            type: import("vue").PropType<Array<number | string>>;
            default: () => never[];
        };
        lineHeight: {
            type: NumberConstructor;
            default: number;
        };
        lineSpacing: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        lineHeight: number;
        rows: number;
        widths: (string | number)[];
        lineSpacing: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Shape: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        shape: {
            type: import("vue").PropType<import("./props").SkeletonShapeType>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeType;
        };
        size: {
            type: import("vue").PropType<import("./props").SkeletonShapeSize>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
        };
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        shape: {
            type: import("vue").PropType<import("./props").SkeletonShapeType>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeType;
        };
        size: {
            type: import("vue").PropType<import("./props").SkeletonShapeSize>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
        };
    }>> & Readonly<{}>, {
        size: "sm" | "md" | "lg";
        shape: "square" | "circle";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type SkeletonInstance = InstanceType<typeof _Skeleton>;
export type SkeletonLineInstance = InstanceType<typeof _SkeletonLine>;
export type SkeletonShapeInstance = InstanceType<typeof _SkeletonShape>;
export { skeletonLineProps, skeletonProps, skeletonShapeProps };
export type { SkeletonLineProps, SkeletonProps, SkeletonShapeProps, SkeletonShapeSize, SkeletonShapeType, } from './props';
export { Skeleton };
export { _SkeletonLine as SkeletonLine, _SkeletonShape as SkeletonShape };
export declare const _SkeletonComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        animation: boolean;
        loading: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        animation: boolean;
        loading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    animation: boolean;
    loading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Line: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            default: number;
        };
        widths: {
            type: import("vue").PropType<Array<number | string>>;
            default: () => never[];
        };
        lineHeight: {
            type: NumberConstructor;
            default: number;
        };
        lineSpacing: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        prefixCls: string;
        lines: import("vue").CSSProperties[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            default: number;
        };
        widths: {
            type: import("vue").PropType<Array<number | string>>;
            default: () => never[];
        };
        lineHeight: {
            type: NumberConstructor;
            default: number;
        };
        lineSpacing: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        lineHeight: number;
        rows: number;
        widths: (string | number)[];
        lineSpacing: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Shape: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        shape: {
            type: import("vue").PropType<import("./props").SkeletonShapeType>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeType;
        };
        size: {
            type: import("vue").PropType<import("./props").SkeletonShapeSize>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
        };
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        shape: {
            type: import("vue").PropType<import("./props").SkeletonShapeType>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeType;
        };
        size: {
            type: import("vue").PropType<import("./props").SkeletonShapeSize>;
            default: string;
            validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
        };
    }>> & Readonly<{}>, {
        size: "sm" | "md" | "lg";
        shape: "square" | "circle";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export default Skeleton;

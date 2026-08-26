import { PropType } from 'vue';
import { SemanticStatus } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    percent: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "md" | "lg">;
        default: string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: (ObjectConstructor | StringConstructor)[];
        default: undefined;
    };
    trackColor: StringConstructor;
    formatText: {
        type: FunctionConstructor;
        default: undefined;
    };
    type: {
        type: PropType<SemanticStatus>;
    };
    showText: BooleanConstructor;
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classes: typeof import("rattail").classes;
    n: (suffix?: string) => string;
    style: import("vue").ComputedRef<{
        width: string | number;
        height: string;
        backgroundColor: string | undefined;
    }>;
    barStyle: import("vue").ComputedRef<{
        width: string;
    } | {
        backgroundImage: string;
        backgroundColor?: undefined;
        width: string;
    } | {
        backgroundColor: string;
        backgroundImage?: undefined;
        width: string;
    }>;
    text: import("vue").ComputedRef<string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    percent: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "md" | "lg">;
        default: string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: (ObjectConstructor | StringConstructor)[];
        default: undefined;
    };
    trackColor: StringConstructor;
    formatText: {
        type: FunctionConstructor;
        default: undefined;
    };
    type: {
        type: PropType<SemanticStatus>;
    };
    showText: BooleanConstructor;
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    width: string | number;
    color: string | Record<string, any>;
    animation: boolean;
    strokeWidth: number;
    indeterminate: boolean;
    showText: boolean;
    percent: number;
    formatText: Function;
}, {}, {
    IconExclamationCircleFill: {
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

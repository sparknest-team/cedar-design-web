import _Ellipsis from './src/ellipsis.vue';
import { ellipsisProps } from './src/props';
declare const Ellipsis: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        expand: BooleanConstructor;
        expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
        lineClamp: (StringConstructor | NumberConstructor)[];
        tooltip: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>>>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:expand": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>>;
        expand: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        expand: BooleanConstructor;
        expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
        lineClamp: (StringConstructor | NumberConstructor)[];
        tooltip: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>>>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>>;
        expand: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    expand: BooleanConstructor;
    expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
    lineClamp: (StringConstructor | NumberConstructor)[];
    tooltip: {
        type: import("vue").PropType<import("../_utils/components").ExtractPublicPropTypes<typeof import("..").tooltipProps> | boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:expand": (...args: any[]) => void;
}, string, {
    tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: BooleanConstructor;
        content: StringConstructor;
        placement: {
            type: import("vue").PropType<import("..").TriggerPosition>;
            default: string;
            validator: (value: import("..").TriggerPosition) => boolean;
        };
        xs: BooleanConstructor;
        backgroundColor: StringConstructor;
        contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
        arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
        popupContainer: import("vue").PropType<string | HTMLElement>;
    }>>;
    expand: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        'tooltip-content'?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export type EllipsisInstance = InstanceType<typeof _Ellipsis>;
export type { EllipsisProps, EllipsisExpandTrigger } from './src/props';
export { ellipsisProps };
export { Ellipsis };
export declare const _EllipsisComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        expand: BooleanConstructor;
        expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
        lineClamp: (StringConstructor | NumberConstructor)[];
        tooltip: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>>>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:expand": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>>;
        expand: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        expand: BooleanConstructor;
        expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
        lineClamp: (StringConstructor | NumberConstructor)[];
        tooltip: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>>>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: BooleanConstructor;
            content: StringConstructor;
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
            contentStyle: import("vue").PropType<import("vue").CSSProperties>;
            arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
            arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
            popupContainer: import("vue").PropType<string | HTMLElement>;
        }>>;
        expand: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    expand: BooleanConstructor;
    expandTrigger: import("vue").PropType<import(".").EllipsisExpandTrigger>;
    lineClamp: (StringConstructor | NumberConstructor)[];
    tooltip: {
        type: import("vue").PropType<import("../_utils/components").ExtractPublicPropTypes<typeof import("..").tooltipProps> | boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:expand": (...args: any[]) => void;
}, string, {
    tooltip: boolean | Partial<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: BooleanConstructor;
        content: StringConstructor;
        placement: {
            type: import("vue").PropType<import("..").TriggerPosition>;
            default: string;
            validator: (value: import("..").TriggerPosition) => boolean;
        };
        xs: BooleanConstructor;
        backgroundColor: StringConstructor;
        contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
        contentStyle: import("vue").PropType<import("vue").CSSProperties>;
        arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
        arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
        popupContainer: import("vue").PropType<string | HTMLElement>;
    }>>;
    expand: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        'tooltip-content'?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
})>;
export default Ellipsis;

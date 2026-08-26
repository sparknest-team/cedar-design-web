import _Statistic from './statistic.vue';
import _Countdown from './countdown.vue';
import { statisticProps } from './props';
declare const Statistic: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: import("vue").PropType<number | Date>;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        extra: StringConstructor;
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        separator: StringConstructor;
        showGroupSeparator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        valueFrom: {
            type: NumberConstructor;
            default: undefined;
        };
        placeholder: {
            type: StringConstructor;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        showPlaceholder: import("vue").ComputedRef<boolean>;
        formatValue: import("vue").ComputedRef<{
            isNumber: boolean;
            integer: string;
            decimal: string;
            value?: undefined;
        } | {
            isNumber: boolean;
            value: string | Date | undefined;
            integer?: undefined;
            decimal?: undefined;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        start: boolean;
        animation: boolean;
        animationDuration: number;
        format: string;
        precision: number;
        showGroupSeparator: boolean;
        valueFrom: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: import("vue").PropType<number | Date>;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        extra: StringConstructor;
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        separator: StringConstructor;
        showGroupSeparator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        valueFrom: {
            type: NumberConstructor;
            default: undefined;
        };
        placeholder: {
            type: StringConstructor;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        showPlaceholder: import("vue").ComputedRef<boolean>;
        formatValue: import("vue").ComputedRef<{
            isNumber: boolean;
            integer: string;
            decimal: string;
            value?: undefined;
        } | {
            isNumber: boolean;
            value: string | Date | undefined;
            integer?: undefined;
            decimal?: undefined;
        }>;
    }, {}, {}, {}, {
        start: boolean;
        animation: boolean;
        animationDuration: number;
        format: string;
        precision: number;
        showGroupSeparator: boolean;
        valueFrom: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    value: {
        type: import("vue").PropType<number | Date>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    extra: StringConstructor;
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    separator: StringConstructor;
    showGroupSeparator: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    valueFrom: {
        type: NumberConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
    };
    valueStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
}>> & Readonly<{}>, {
    prefixCls: string;
    showPlaceholder: import("vue").ComputedRef<boolean>;
    formatValue: import("vue").ComputedRef<{
        isNumber: boolean;
        integer: string;
        decimal: string;
        value?: undefined;
    } | {
        isNumber: boolean;
        value: string | Date | undefined;
        integer?: undefined;
        decimal?: undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    start: boolean;
    animation: boolean;
    animationDuration: number;
    format: string;
    precision: number;
    showGroupSeparator: boolean;
    valueFrom: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Countdown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: NumberConstructor;
            default: () => number;
        };
        now: {
            type: NumberConstructor;
            default: () => number;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>, {
        prefixCls: string;
        displayValue: import("vue").Ref<string, string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: NumberConstructor;
            default: () => number;
        };
        now: {
            type: NumberConstructor;
            default: () => number;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {
        value: number;
        start: boolean;
        format: string;
        now: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type StatisticInstance = InstanceType<typeof _Statistic>;
export type CountdownInstance = InstanceType<typeof _Countdown>;
export { _Countdown as Countdown };
export declare const _StatisticComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: import("vue").PropType<number | Date>;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        extra: StringConstructor;
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        separator: StringConstructor;
        showGroupSeparator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        valueFrom: {
            type: NumberConstructor;
            default: undefined;
        };
        placeholder: {
            type: StringConstructor;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        showPlaceholder: import("vue").ComputedRef<boolean>;
        formatValue: import("vue").ComputedRef<{
            isNumber: boolean;
            integer: string;
            decimal: string;
            value?: undefined;
        } | {
            isNumber: boolean;
            value: string | Date | undefined;
            integer?: undefined;
            decimal?: undefined;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        start: boolean;
        animation: boolean;
        animationDuration: number;
        format: string;
        precision: number;
        showGroupSeparator: boolean;
        valueFrom: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: import("vue").PropType<number | Date>;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        extra: StringConstructor;
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        separator: StringConstructor;
        showGroupSeparator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        valueFrom: {
            type: NumberConstructor;
            default: undefined;
        };
        placeholder: {
            type: StringConstructor;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{}>, {
        prefixCls: string;
        showPlaceholder: import("vue").ComputedRef<boolean>;
        formatValue: import("vue").ComputedRef<{
            isNumber: boolean;
            integer: string;
            decimal: string;
            value?: undefined;
        } | {
            isNumber: boolean;
            value: string | Date | undefined;
            integer?: undefined;
            decimal?: undefined;
        }>;
    }, {}, {}, {}, {
        start: boolean;
        animation: boolean;
        animationDuration: number;
        format: string;
        precision: number;
        showGroupSeparator: boolean;
        valueFrom: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    value: {
        type: import("vue").PropType<number | Date>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    extra: StringConstructor;
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    separator: StringConstructor;
    showGroupSeparator: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    valueFrom: {
        type: NumberConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
    };
    valueStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
}>> & Readonly<{}>, {
    prefixCls: string;
    showPlaceholder: import("vue").ComputedRef<boolean>;
    formatValue: import("vue").ComputedRef<{
        isNumber: boolean;
        integer: string;
        decimal: string;
        value?: undefined;
    } | {
        isNumber: boolean;
        value: string | Date | undefined;
        integer?: undefined;
        decimal?: undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    start: boolean;
    animation: boolean;
    animationDuration: number;
    format: string;
    precision: number;
    showGroupSeparator: boolean;
    valueFrom: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Countdown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: NumberConstructor;
            default: () => number;
        };
        now: {
            type: NumberConstructor;
            default: () => number;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>, {
        prefixCls: string;
        displayValue: import("vue").Ref<string, string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        value: {
            type: NumberConstructor;
            default: () => number;
        };
        now: {
            type: NumberConstructor;
            default: () => number;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {
        value: number;
        start: boolean;
        format: string;
        now: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Statistic };
export { statisticProps };
export default Statistic;

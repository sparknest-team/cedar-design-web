import _Calendar from './calendar';
import { calendarProps } from './props';
declare const Calendar: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: DateConstructor;
            default: undefined;
        };
        defaultValue: {
            type: DateConstructor;
        };
        mode: {
            type: import("vue").PropType<"month" | "year">;
        };
        defaultMode: {
            type: import("vue").PropType<"month" | "year">;
            default: string;
        };
        modes: {
            type: import("vue").PropType<("month" | "year")[]>;
            default: () => string[];
        };
        allowSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        panel: {
            type: BooleanConstructor;
            default: boolean;
        };
        panelWidth: {
            type: NumberConstructor;
        };
        panelTodayBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<0 | 1>;
            default: number;
        };
        isWeek: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((date: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
        onPanelChange?: ((date: Date) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (date: Date) => true;
        change: (date: Date) => true;
        panelChange: (date: Date) => true;
    }, import("vue").PublicProps, {
        modelValue: Date;
        dayStartOfWeek: 0 | 1;
        isWeek: boolean;
        panel: boolean;
        modes: ("month" | "year")[];
        defaultMode: "month" | "year";
        allowSelect: boolean;
        panelTodayBtn: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: DateConstructor;
            default: undefined;
        };
        defaultValue: {
            type: DateConstructor;
        };
        mode: {
            type: import("vue").PropType<"month" | "year">;
        };
        defaultMode: {
            type: import("vue").PropType<"month" | "year">;
            default: string;
        };
        modes: {
            type: import("vue").PropType<("month" | "year")[]>;
            default: () => string[];
        };
        allowSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        panel: {
            type: BooleanConstructor;
            default: boolean;
        };
        panelWidth: {
            type: NumberConstructor;
        };
        panelTodayBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<0 | 1>;
            default: number;
        };
        isWeek: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((date: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
        onPanelChange?: ((date: Date) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        modelValue: Date;
        dayStartOfWeek: 0 | 1;
        isWeek: boolean;
        panel: boolean;
        modes: ("month" | "year")[];
        defaultMode: "month" | "year";
        allowSelect: boolean;
        panelTodayBtn: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: DateConstructor;
        default: undefined;
    };
    defaultValue: {
        type: DateConstructor;
    };
    mode: {
        type: import("vue").PropType<"month" | "year">;
    };
    defaultMode: {
        type: import("vue").PropType<"month" | "year">;
        default: string;
    };
    modes: {
        type: import("vue").PropType<("month" | "year")[]>;
        default: () => string[];
    };
    allowSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    panelWidth: {
        type: NumberConstructor;
    };
    panelTodayBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    isWeek: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((date: Date) => any) | undefined;
    "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
    onPanelChange?: ((date: Date) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (date: Date) => true;
    change: (date: Date) => true;
    panelChange: (date: Date) => true;
}, string, {
    modelValue: Date;
    dayStartOfWeek: 0 | 1;
    isWeek: boolean;
    panel: boolean;
    modes: ("month" | "year")[];
    defaultMode: "month" | "year";
    allowSelect: boolean;
    panelTodayBtn: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type CalendarInstance = InstanceType<typeof _Calendar>;
export declare const _CalendarComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: DateConstructor;
            default: undefined;
        };
        defaultValue: {
            type: DateConstructor;
        };
        mode: {
            type: import("vue").PropType<"month" | "year">;
        };
        defaultMode: {
            type: import("vue").PropType<"month" | "year">;
            default: string;
        };
        modes: {
            type: import("vue").PropType<("month" | "year")[]>;
            default: () => string[];
        };
        allowSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        panel: {
            type: BooleanConstructor;
            default: boolean;
        };
        panelWidth: {
            type: NumberConstructor;
        };
        panelTodayBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<0 | 1>;
            default: number;
        };
        isWeek: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((date: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
        onPanelChange?: ((date: Date) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (date: Date) => true;
        change: (date: Date) => true;
        panelChange: (date: Date) => true;
    }, import("vue").PublicProps, {
        modelValue: Date;
        dayStartOfWeek: 0 | 1;
        isWeek: boolean;
        panel: boolean;
        modes: ("month" | "year")[];
        defaultMode: "month" | "year";
        allowSelect: boolean;
        panelTodayBtn: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: DateConstructor;
            default: undefined;
        };
        defaultValue: {
            type: DateConstructor;
        };
        mode: {
            type: import("vue").PropType<"month" | "year">;
        };
        defaultMode: {
            type: import("vue").PropType<"month" | "year">;
            default: string;
        };
        modes: {
            type: import("vue").PropType<("month" | "year")[]>;
            default: () => string[];
        };
        allowSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        panel: {
            type: BooleanConstructor;
            default: boolean;
        };
        panelWidth: {
            type: NumberConstructor;
        };
        panelTodayBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<0 | 1>;
            default: number;
        };
        isWeek: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((date: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
        onPanelChange?: ((date: Date) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        modelValue: Date;
        dayStartOfWeek: 0 | 1;
        isWeek: boolean;
        panel: boolean;
        modes: ("month" | "year")[];
        defaultMode: "month" | "year";
        allowSelect: boolean;
        panelTodayBtn: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: DateConstructor;
        default: undefined;
    };
    defaultValue: {
        type: DateConstructor;
    };
    mode: {
        type: import("vue").PropType<"month" | "year">;
    };
    defaultMode: {
        type: import("vue").PropType<"month" | "year">;
        default: string;
    };
    modes: {
        type: import("vue").PropType<("month" | "year")[]>;
        default: () => string[];
    };
    allowSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    panelWidth: {
        type: NumberConstructor;
    };
    panelTodayBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    isWeek: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((date: Date) => any) | undefined;
    "onUpdate:modelValue"?: ((date: Date) => any) | undefined;
    onPanelChange?: ((date: Date) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (date: Date) => true;
    change: (date: Date) => true;
    panelChange: (date: Date) => true;
}, string, {
    modelValue: Date;
    dayStartOfWeek: 0 | 1;
    isWeek: boolean;
    panel: boolean;
    modes: ("month" | "year")[];
    defaultMode: "month" | "year";
    allowSelect: boolean;
    panelTodayBtn: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Calendar };
export { calendarProps };
export default Calendar;

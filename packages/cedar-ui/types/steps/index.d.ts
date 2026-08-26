import _Steps from './steps.vue';
import _StepsStep from './step.vue';
import { stepsProps, stepProps } from './props';
declare const Steps: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./types").StepsType>;
            default: import("./types").StepsType;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        labelPlacement: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        current: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
            default: import("./types").StepStatus;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((_step: number, _event: Event) => any) | undefined;
        "onUpdate:current"?: ((_step: number) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (_step: number, _event: Event) => true;
        'update:current': (_step: number) => true;
    }, import("vue").PublicProps, {
        type: "default" | "dot" | "navigation" | "arrow";
        small: boolean;
        showLine: boolean;
        status: "error" | "wait" | "finish" | "process";
        direction: "horizontal" | "vertical";
        current: number;
        defaultCurrent: number;
        labelPlacement: "horizontal" | "vertical";
        changeable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./types").StepsType>;
            default: import("./types").StepsType;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        labelPlacement: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        current: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
            default: import("./types").StepStatus;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((_step: number, _event: Event) => any) | undefined;
        "onUpdate:current"?: ((_step: number) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        type: "default" | "dot" | "navigation" | "arrow";
        small: boolean;
        showLine: boolean;
        status: "error" | "wait" | "finish" | "process";
        direction: "horizontal" | "vertical";
        current: number;
        defaultCurrent: number;
        labelPlacement: "horizontal" | "vertical";
        changeable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").StepsType>;
        default: import("./types").StepsType;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    labelPlacement: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: import("vue").PropType<import("./types").StepStatus>;
        default: import("./types").StepStatus;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((_step: number, _event: Event) => any) | undefined;
    "onUpdate:current"?: ((_step: number) => any) | undefined;
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_step: number, _event: Event) => true;
    'update:current': (_step: number) => true;
}, string, {
    type: "default" | "dot" | "navigation" | "arrow";
    small: boolean;
    showLine: boolean;
    status: "error" | "wait" | "finish" | "process";
    direction: "horizontal" | "vertical";
    current: number;
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Step: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        description: StringConstructor;
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        prefixCls: string;
        iconCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        showTail: import("vue").ComputedRef<boolean | undefined>;
        stepNumber: import("vue").ComputedRef<number>;
        computedStatus: import("vue").ComputedRef<"error" | "wait" | "finish" | "process">;
        type: import("vue").ComputedRef<"default" | "dot" | "navigation" | "arrow">;
        title: import("vue").Ref<string | undefined, string | undefined>;
        description: import("vue").Ref<string | undefined, string | undefined>;
        handleClick: (ev: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        description: StringConstructor;
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
    }, {}, {
        IconCheck: {
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
        IconClose: {
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
}>;
export type StepsInstance = InstanceType<typeof _Steps>;
export type StepsStepInstance = InstanceType<typeof _StepsStep>;
export type { StepsProps, StepProps, StepStatus, StepsType, StepData } from './props';
export { stepsProps, stepProps };
export { _StepsStep as Step };
export declare const _StepsComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./types").StepsType>;
            default: import("./types").StepsType;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        labelPlacement: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        current: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
            default: import("./types").StepStatus;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((_step: number, _event: Event) => any) | undefined;
        "onUpdate:current"?: ((_step: number) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (_step: number, _event: Event) => true;
        'update:current': (_step: number) => true;
    }, import("vue").PublicProps, {
        type: "default" | "dot" | "navigation" | "arrow";
        small: boolean;
        showLine: boolean;
        status: "error" | "wait" | "finish" | "process";
        direction: "horizontal" | "vertical";
        current: number;
        defaultCurrent: number;
        labelPlacement: "horizontal" | "vertical";
        changeable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./types").StepsType>;
            default: import("./types").StepsType;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        labelPlacement: {
            type: import("vue").PropType<import("..").Direction>;
            default: import("..").Direction;
        };
        current: {
            type: NumberConstructor;
            default: undefined;
        };
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
            default: import("./types").StepStatus;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((_step: number, _event: Event) => any) | undefined;
        "onUpdate:current"?: ((_step: number) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        type: "default" | "dot" | "navigation" | "arrow";
        small: boolean;
        showLine: boolean;
        status: "error" | "wait" | "finish" | "process";
        direction: "horizontal" | "vertical";
        current: number;
        defaultCurrent: number;
        labelPlacement: "horizontal" | "vertical";
        changeable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").StepsType>;
        default: import("./types").StepsType;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    labelPlacement: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: import("vue").PropType<import("./types").StepStatus>;
        default: import("./types").StepStatus;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((_step: number, _event: Event) => any) | undefined;
    "onUpdate:current"?: ((_step: number) => any) | undefined;
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_step: number, _event: Event) => true;
    'update:current': (_step: number) => true;
}, string, {
    type: "default" | "dot" | "navigation" | "arrow";
    small: boolean;
    showLine: boolean;
    status: "error" | "wait" | "finish" | "process";
    direction: "horizontal" | "vertical";
    current: number;
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Step: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        description: StringConstructor;
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        prefixCls: string;
        iconCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        showTail: import("vue").ComputedRef<boolean | undefined>;
        stepNumber: import("vue").ComputedRef<number>;
        computedStatus: import("vue").ComputedRef<"error" | "wait" | "finish" | "process">;
        type: import("vue").ComputedRef<"default" | "dot" | "navigation" | "arrow">;
        title: import("vue").Ref<string | undefined, string | undefined>;
        description: import("vue").Ref<string | undefined, string | undefined>;
        handleClick: (ev: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        description: StringConstructor;
        status: {
            type: import("vue").PropType<import("./types").StepStatus>;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
    }, {}, {
        IconCheck: {
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
        IconClose: {
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
}>;
export { Steps };
export default Steps;

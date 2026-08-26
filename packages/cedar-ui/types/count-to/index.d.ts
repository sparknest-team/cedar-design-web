import _CountTo from './count-to.vue';
import { countToProps } from './props';
declare const CountTo: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        duration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        autoStart: {
            type: BooleanConstructor;
            default: boolean;
        };
        timingFunction: {
            type: import("vue").PropType<(v: number) => number>;
        };
    }>> & Readonly<{
        onEnd?: (() => any) | undefined;
    }>, {
        start: () => void;
        pause: () => void;
        reset: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        end: () => any;
    }, import("vue").PublicProps, {
        duration: string | number;
        from: string | number;
        to: string | number;
        precision: string | number;
        autoStart: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        duration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        autoStart: {
            type: BooleanConstructor;
            default: boolean;
        };
        timingFunction: {
            type: import("vue").PropType<(v: number) => number>;
        };
    }>> & Readonly<{
        onEnd?: (() => any) | undefined;
    }>, {
        start: () => void;
        pause: () => void;
        reset: () => void;
    }, {}, {}, {}, {
        duration: string | number;
        from: string | number;
        to: string | number;
        precision: string | number;
        autoStart: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    timingFunction: {
        type: import("vue").PropType<(v: number) => number>;
    };
}>> & Readonly<{
    onEnd?: (() => any) | undefined;
}>, {
    start: () => void;
    pause: () => void;
    reset: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    end: () => any;
}, string, {
    duration: string | number;
    from: string | number;
    to: string | number;
    precision: string | number;
    autoStart: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            value: number;
        }) => any;
    };
})>;
export type CountToInstance = InstanceType<typeof _CountTo>;
export type { CountToProps } from './props';
export { countToProps };
export { CountTo };
export declare const _CountToComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        duration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        autoStart: {
            type: BooleanConstructor;
            default: boolean;
        };
        timingFunction: {
            type: import("vue").PropType<(v: number) => number>;
        };
    }>> & Readonly<{
        onEnd?: (() => any) | undefined;
    }>, {
        start: () => void;
        pause: () => void;
        reset: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        end: () => any;
    }, import("vue").PublicProps, {
        duration: string | number;
        from: string | number;
        to: string | number;
        precision: string | number;
        autoStart: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        duration: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        precision: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        autoStart: {
            type: BooleanConstructor;
            default: boolean;
        };
        timingFunction: {
            type: import("vue").PropType<(v: number) => number>;
        };
    }>> & Readonly<{
        onEnd?: (() => any) | undefined;
    }>, {
        start: () => void;
        pause: () => void;
        reset: () => void;
    }, {}, {}, {}, {
        duration: string | number;
        from: string | number;
        to: string | number;
        precision: string | number;
        autoStart: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    timingFunction: {
        type: import("vue").PropType<(v: number) => number>;
    };
}>> & Readonly<{
    onEnd?: (() => any) | undefined;
}>, {
    start: () => void;
    pause: () => void;
    reset: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    end: () => any;
}, string, {
    duration: string | number;
    from: string | number;
    to: string | number;
    precision: string | number;
    autoStart: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            value: number;
        }) => any;
    };
})>;
export default CountTo;

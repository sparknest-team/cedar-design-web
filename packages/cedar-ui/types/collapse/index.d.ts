import _Collapse from './collapse.vue';
import _CollapseItem from './collapse-item';
import { collapseItemProps, collapseProps } from './props';
declare const Collapse: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        activeNames: import("vue").PropType<import("./props").CollapseName[]>;
        defaultActiveNames: {
            type: import("vue").PropType<import("./props").CollapseName[]>;
            default: () => never[];
        };
        accordion: BooleanConstructor;
        showExpandIcon: BooleanConstructor;
        expandIconPosition: {
            type: import("vue").PropType<import("./props").ExpandIconPosition>;
            default: string;
            validator: (value: import("./props").ExpandIconPosition) => boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        divider: {
            type: BooleanConstructor;
            default: boolean;
        };
        offset: BooleanConstructor;
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
        "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:activeNames': (activeNames: (string | number)[]) => true;
        change: (activeNames: (string | number)[], ev: Event) => true;
    }, import("vue").PublicProps, {
        offset: boolean;
        bordered: boolean;
        divider: boolean;
        defaultActiveNames: import("./props").CollapseName[];
        accordion: boolean;
        showExpandIcon: boolean;
        expandIconPosition: "left" | "right";
        destroyOnHide: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        activeNames: import("vue").PropType<import("./props").CollapseName[]>;
        defaultActiveNames: {
            type: import("vue").PropType<import("./props").CollapseName[]>;
            default: () => never[];
        };
        accordion: BooleanConstructor;
        showExpandIcon: BooleanConstructor;
        expandIconPosition: {
            type: import("vue").PropType<import("./props").ExpandIconPosition>;
            default: string;
            validator: (value: import("./props").ExpandIconPosition) => boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        divider: {
            type: BooleanConstructor;
            default: boolean;
        };
        offset: BooleanConstructor;
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
        "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        offset: boolean;
        bordered: boolean;
        divider: boolean;
        defaultActiveNames: import("./props").CollapseName[];
        accordion: boolean;
        showExpandIcon: boolean;
        expandIconPosition: "left" | "right";
        destroyOnHide: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    activeNames: import("vue").PropType<import("./props").CollapseName[]>;
    defaultActiveNames: {
        type: import("vue").PropType<import("./props").CollapseName[]>;
        default: () => never[];
    };
    accordion: BooleanConstructor;
    showExpandIcon: BooleanConstructor;
    expandIconPosition: {
        type: import("vue").PropType<import("./props").ExpandIconPosition>;
        default: string;
        validator: (value: import("./props").ExpandIconPosition) => boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: BooleanConstructor;
    destroyOnHide: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
    "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:activeNames': (activeNames: (string | number)[]) => true;
    change: (activeNames: (string | number)[], ev: Event) => true;
}, string, {
    offset: boolean;
    bordered: boolean;
    divider: boolean;
    defaultActiveNames: import("./props").CollapseName[];
    accordion: boolean;
    showExpandIcon: boolean;
    expandIconPosition: "left" | "right";
    destroyOnHide: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<import("./props").CollapseName>;
            required: boolean;
        };
        title: StringConstructor;
        disabled: BooleanConstructor;
        showExpandIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: BooleanConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<import("./props").CollapseName>;
            required: boolean;
        };
        title: StringConstructor;
        disabled: BooleanConstructor;
        showExpandIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{}>, {
        disabled: boolean;
        showExpandIcon: boolean;
        destroyOnHide: boolean;
    }, {}, {
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconCaretRight: {
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
        IconCaretLeft: {
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
export type CollapseInstance = InstanceType<typeof _Collapse>;
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>;
export type { CollapseToggleAllOptions } from './types';
export type { CollapseItemProps, CollapseName, CollapseProps, ExpandIconPosition } from './props';
export { Collapse, collapseItemProps, collapseProps };
export declare const _CollapseComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        activeNames: import("vue").PropType<import("./props").CollapseName[]>;
        defaultActiveNames: {
            type: import("vue").PropType<import("./props").CollapseName[]>;
            default: () => never[];
        };
        accordion: BooleanConstructor;
        showExpandIcon: BooleanConstructor;
        expandIconPosition: {
            type: import("vue").PropType<import("./props").ExpandIconPosition>;
            default: string;
            validator: (value: import("./props").ExpandIconPosition) => boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        divider: {
            type: BooleanConstructor;
            default: boolean;
        };
        offset: BooleanConstructor;
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
        "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:activeNames': (activeNames: (string | number)[]) => true;
        change: (activeNames: (string | number)[], ev: Event) => true;
    }, import("vue").PublicProps, {
        offset: boolean;
        bordered: boolean;
        divider: boolean;
        defaultActiveNames: import("./props").CollapseName[];
        accordion: boolean;
        showExpandIcon: boolean;
        expandIconPosition: "left" | "right";
        destroyOnHide: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        activeNames: import("vue").PropType<import("./props").CollapseName[]>;
        defaultActiveNames: {
            type: import("vue").PropType<import("./props").CollapseName[]>;
            default: () => never[];
        };
        accordion: BooleanConstructor;
        showExpandIcon: BooleanConstructor;
        expandIconPosition: {
            type: import("vue").PropType<import("./props").ExpandIconPosition>;
            default: string;
            validator: (value: import("./props").ExpandIconPosition) => boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        divider: {
            type: BooleanConstructor;
            default: boolean;
        };
        offset: BooleanConstructor;
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{
        onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
        "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }, {}, {}, {}, {
        offset: boolean;
        bordered: boolean;
        divider: boolean;
        defaultActiveNames: import("./props").CollapseName[];
        accordion: boolean;
        showExpandIcon: boolean;
        expandIconPosition: "left" | "right";
        destroyOnHide: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    activeNames: import("vue").PropType<import("./props").CollapseName[]>;
    defaultActiveNames: {
        type: import("vue").PropType<import("./props").CollapseName[]>;
        default: () => never[];
    };
    accordion: BooleanConstructor;
    showExpandIcon: BooleanConstructor;
    expandIconPosition: {
        type: import("vue").PropType<import("./props").ExpandIconPosition>;
        default: string;
        validator: (value: import("./props").ExpandIconPosition) => boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: BooleanConstructor;
    destroyOnHide: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
    "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:activeNames': (activeNames: (string | number)[]) => true;
    change: (activeNames: (string | number)[], ev: Event) => true;
}, string, {
    offset: boolean;
    bordered: boolean;
    divider: boolean;
    defaultActiveNames: import("./props").CollapseName[];
    accordion: boolean;
    showExpandIcon: boolean;
    expandIconPosition: "left" | "right";
    destroyOnHide: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<import("./props").CollapseName>;
            required: boolean;
        };
        title: StringConstructor;
        disabled: BooleanConstructor;
        showExpandIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: BooleanConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<import("./props").CollapseName>;
            required: boolean;
        };
        title: StringConstructor;
        disabled: BooleanConstructor;
        showExpandIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: BooleanConstructor;
    }>> & Readonly<{}>, {
        disabled: boolean;
        showExpandIcon: boolean;
        destroyOnHide: boolean;
    }, {}, {
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconCaretRight: {
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
        IconCaretLeft: {
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
export { _CollapseItem as CollapseItem };
export default Collapse;

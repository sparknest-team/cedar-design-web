import _Tabs from './tabs';
import _TabNav from './tab-nav.vue';
import _TabItem from './tab-item.vue';
import _TabsNavs from './tabs-navs.vue';
import _TabsItems from './tabs-items.vue';
import { tabsProps } from './props';
declare const Tabs: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        defaultActive: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            default: string;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        justify: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideContent: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").TabTriggerEvent>;
            default: string;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>> & Readonly<{
        onDelete?: ((key: string | number, ev: Event) => any) | undefined;
        onAdd?: ((ev: Event) => any) | undefined;
        onChange?: ((key: string | number) => any) | undefined;
        "onUpdate:active"?: ((key: string | number) => any) | undefined;
        onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:active': (key: string | number) => true;
        change: (key: string | number) => true;
        tabClick: (key: string | number, ev: Event) => true;
        add: (ev: Event) => true;
        delete: (key: string | number, ev: Event) => true;
    }, import("vue").PublicProps, {
        vertical: boolean;
        justify: boolean;
        active: string | number;
        variant: import("./types").TabVariant;
        animation: boolean;
        trigger: import("./types").TabTriggerEvent;
        indicatorPosition: "reverse" | "normal";
        destroyOnHide: boolean;
        editable: boolean;
        defaultActive: string | number;
        showAddButton: boolean;
        lazyLoad: boolean;
        headerPadding: boolean;
        autoSwitch: boolean;
        hideContent: boolean;
        scrollPosition: import("./types").ScrollPosition;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        defaultActive: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            default: string;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        justify: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideContent: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").TabTriggerEvent>;
            default: string;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>> & Readonly<{
        onDelete?: ((key: string | number, ev: Event) => any) | undefined;
        onAdd?: ((ev: Event) => any) | undefined;
        onChange?: ((key: string | number) => any) | undefined;
        "onUpdate:active"?: ((key: string | number) => any) | undefined;
        onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        vertical: boolean;
        justify: boolean;
        active: string | number;
        variant: import("./types").TabVariant;
        animation: boolean;
        trigger: import("./types").TabTriggerEvent;
        indicatorPosition: "reverse" | "normal";
        destroyOnHide: boolean;
        editable: boolean;
        defaultActive: string | number;
        showAddButton: boolean;
        lazyLoad: boolean;
        headerPadding: boolean;
        autoSwitch: boolean;
        hideContent: boolean;
        scrollPosition: import("./types").ScrollPosition;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultActive: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicatorPosition: {
        type: import("vue").PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    variant: {
        type: import("vue").PropType<import("./types").TabVariant>;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    justify: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./types").TabTriggerEvent>;
        default: string;
    };
    scrollPosition: {
        type: import("vue").PropType<import("./types").ScrollPosition>;
        default: string;
    };
}>> & Readonly<{
    onDelete?: ((key: string | number, ev: Event) => any) | undefined;
    onAdd?: ((ev: Event) => any) | undefined;
    onChange?: ((key: string | number) => any) | undefined;
    "onUpdate:active"?: ((key: string | number) => any) | undefined;
    onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:active': (key: string | number) => true;
    change: (key: string | number) => true;
    tabClick: (key: string | number, ev: Event) => true;
    add: (ev: Event) => true;
    delete: (key: string | number, ev: Event) => true;
}, string, {
    vertical: boolean;
    justify: boolean;
    active: string | number;
    variant: import("./types").TabVariant;
    animation: boolean;
    trigger: import("./types").TabTriggerEvent;
    indicatorPosition: "reverse" | "normal";
    destroyOnHide: boolean;
    editable: boolean;
    defaultActive: string | number;
    showAddButton: boolean;
    lazyLoad: boolean;
    headerPadding: boolean;
    autoSwitch: boolean;
    hideContent: boolean;
    scrollPosition: import("./types").ScrollPosition;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    TabNav: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        closable: boolean;
        disabled: boolean;
        itemVertical: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        active: import("vue").ComputedRef<boolean>;
        itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        mounted: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        destroyOnHide: boolean;
        lazyLoad: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabsNavs: import("vue").DefineComponent<{}, {
        tabs: import("vue").ComputedRef<import("./types").TabData[]>;
        activeKey: import("vue").ComputedRef<string | number>;
        activeIndex: import("vue").ComputedRef<number>;
        vertical: import("vue").ComputedRef<boolean>;
        indicatorPosition: import("vue").ComputedRef<"reverse" | "normal">;
        size: import("vue").ComputedRef<string>;
        variant: import("vue").ComputedRef<import("./types").TabVariant>;
        editable: import("vue").ComputedRef<boolean>;
        animation: import("vue").ComputedRef<boolean>;
        showAddButton: import("vue").ComputedRef<boolean>;
        headerPadding: import("vue").ComputedRef<boolean>;
        scrollPosition: import("vue").ComputedRef<import("./types").ScrollPosition>;
        navCtx: import("./context").TabsNavContext;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        TabsNav: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tabs: {
                type: import("vue").PropType<import("./types").TabData[]>;
                required: true;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            variant: {
                type: import("vue").PropType<import("./types").TabVariant>;
                required: true;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            activeIndex: {
                type: NumberConstructor;
                required: true;
            };
            indicatorPosition: {
                type: import("vue").PropType<"normal" | "reverse">;
                default: string;
            };
            size: {
                type: StringConstructor;
                required: true;
            };
            showAddButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                required: true;
            };
            headerPadding: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollPosition: {
                type: import("vue").PropType<import("./types").ScrollPosition>;
                default: string;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete" | "add")[], "click" | "delete" | "add", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tabs: {
                type: import("vue").PropType<import("./types").TabData[]>;
                required: true;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            variant: {
                type: import("vue").PropType<import("./types").TabVariant>;
                required: true;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            activeIndex: {
                type: NumberConstructor;
                required: true;
            };
            indicatorPosition: {
                type: import("vue").PropType<"normal" | "reverse">;
                default: string;
            };
            size: {
                type: StringConstructor;
                required: true;
            };
            showAddButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                required: true;
            };
            headerPadding: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollPosition: {
                type: import("vue").PropType<import("./types").ScrollPosition>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onDelete?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
        }>, {
            vertical: boolean;
            indicatorPosition: "reverse" | "normal";
            editable: boolean;
            showAddButton: boolean;
            headerPadding: boolean;
            scrollPosition: import("./types").ScrollPosition;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabsItems: import("vue").DefineComponent<{}, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type TabsInstance = InstanceType<typeof _Tabs>;
export type TabNavInstance = InstanceType<typeof _TabNav>;
export type TabItemInstance = InstanceType<typeof _TabItem>;
export { _TabNav as TabNav, _TabItem as TabItem, _TabsNavs as TabsNavs, _TabsItems as TabsItems };
export declare const _TabsComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        defaultActive: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            default: string;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        justify: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideContent: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").TabTriggerEvent>;
            default: string;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>> & Readonly<{
        onDelete?: ((key: string | number, ev: Event) => any) | undefined;
        onAdd?: ((ev: Event) => any) | undefined;
        onChange?: ((key: string | number) => any) | undefined;
        "onUpdate:active"?: ((key: string | number) => any) | undefined;
        onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:active': (key: string | number) => true;
        change: (key: string | number) => true;
        tabClick: (key: string | number, ev: Event) => true;
        add: (ev: Event) => true;
        delete: (key: string | number, ev: Event) => true;
    }, import("vue").PublicProps, {
        vertical: boolean;
        justify: boolean;
        active: string | number;
        variant: import("./types").TabVariant;
        animation: boolean;
        trigger: import("./types").TabTriggerEvent;
        indicatorPosition: "reverse" | "normal";
        destroyOnHide: boolean;
        editable: boolean;
        defaultActive: string | number;
        showAddButton: boolean;
        lazyLoad: boolean;
        headerPadding: boolean;
        autoSwitch: boolean;
        hideContent: boolean;
        scrollPosition: import("./types").ScrollPosition;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        defaultActive: {
            type: (StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            default: string;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        justify: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideContent: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").TabTriggerEvent>;
            default: string;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>> & Readonly<{
        onDelete?: ((key: string | number, ev: Event) => any) | undefined;
        onAdd?: ((ev: Event) => any) | undefined;
        onChange?: ((key: string | number) => any) | undefined;
        "onUpdate:active"?: ((key: string | number) => any) | undefined;
        onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        vertical: boolean;
        justify: boolean;
        active: string | number;
        variant: import("./types").TabVariant;
        animation: boolean;
        trigger: import("./types").TabTriggerEvent;
        indicatorPosition: "reverse" | "normal";
        destroyOnHide: boolean;
        editable: boolean;
        defaultActive: string | number;
        showAddButton: boolean;
        lazyLoad: boolean;
        headerPadding: boolean;
        autoSwitch: boolean;
        hideContent: boolean;
        scrollPosition: import("./types").ScrollPosition;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultActive: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicatorPosition: {
        type: import("vue").PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    variant: {
        type: import("vue").PropType<import("./types").TabVariant>;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    justify: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./types").TabTriggerEvent>;
        default: string;
    };
    scrollPosition: {
        type: import("vue").PropType<import("./types").ScrollPosition>;
        default: string;
    };
}>> & Readonly<{
    onDelete?: ((key: string | number, ev: Event) => any) | undefined;
    onAdd?: ((ev: Event) => any) | undefined;
    onChange?: ((key: string | number) => any) | undefined;
    "onUpdate:active"?: ((key: string | number) => any) | undefined;
    onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:active': (key: string | number) => true;
    change: (key: string | number) => true;
    tabClick: (key: string | number, ev: Event) => true;
    add: (ev: Event) => true;
    delete: (key: string | number, ev: Event) => true;
}, string, {
    vertical: boolean;
    justify: boolean;
    active: string | number;
    variant: import("./types").TabVariant;
    animation: boolean;
    trigger: import("./types").TabTriggerEvent;
    indicatorPosition: "reverse" | "normal";
    destroyOnHide: boolean;
    editable: boolean;
    defaultActive: string | number;
    showAddButton: boolean;
    lazyLoad: boolean;
    headerPadding: boolean;
    autoSwitch: boolean;
    hideContent: boolean;
    scrollPosition: import("./types").ScrollPosition;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    TabNav: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        itemVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        closable: boolean;
        disabled: boolean;
        itemVertical: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
        active: import("vue").ComputedRef<boolean>;
        itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        mounted: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        lazyLoad: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnHide: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        destroyOnHide: boolean;
        lazyLoad: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabsNavs: import("vue").DefineComponent<{}, {
        tabs: import("vue").ComputedRef<import("./types").TabData[]>;
        activeKey: import("vue").ComputedRef<string | number>;
        activeIndex: import("vue").ComputedRef<number>;
        vertical: import("vue").ComputedRef<boolean>;
        indicatorPosition: import("vue").ComputedRef<"reverse" | "normal">;
        size: import("vue").ComputedRef<string>;
        variant: import("vue").ComputedRef<import("./types").TabVariant>;
        editable: import("vue").ComputedRef<boolean>;
        animation: import("vue").ComputedRef<boolean>;
        showAddButton: import("vue").ComputedRef<boolean>;
        headerPadding: import("vue").ComputedRef<boolean>;
        scrollPosition: import("vue").ComputedRef<import("./types").ScrollPosition>;
        navCtx: import("./context").TabsNavContext;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        TabsNav: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tabs: {
                type: import("vue").PropType<import("./types").TabData[]>;
                required: true;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            variant: {
                type: import("vue").PropType<import("./types").TabVariant>;
                required: true;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            activeIndex: {
                type: NumberConstructor;
                required: true;
            };
            indicatorPosition: {
                type: import("vue").PropType<"normal" | "reverse">;
                default: string;
            };
            size: {
                type: StringConstructor;
                required: true;
            };
            showAddButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                required: true;
            };
            headerPadding: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollPosition: {
                type: import("vue").PropType<import("./types").ScrollPosition>;
                default: string;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete" | "add")[], "click" | "delete" | "add", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            tabs: {
                type: import("vue").PropType<import("./types").TabData[]>;
                required: true;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            variant: {
                type: import("vue").PropType<import("./types").TabVariant>;
                required: true;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            activeIndex: {
                type: NumberConstructor;
                required: true;
            };
            indicatorPosition: {
                type: import("vue").PropType<"normal" | "reverse">;
                default: string;
            };
            size: {
                type: StringConstructor;
                required: true;
            };
            showAddButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                required: true;
            };
            headerPadding: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollPosition: {
                type: import("vue").PropType<import("./types").ScrollPosition>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onDelete?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
        }>, {
            vertical: boolean;
            indicatorPosition: "reverse" | "normal";
            editable: boolean;
            showAddButton: boolean;
            headerPadding: boolean;
            scrollPosition: import("./types").ScrollPosition;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TabsItems: import("vue").DefineComponent<{}, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Tabs };
export { tabsProps };
export default Tabs;

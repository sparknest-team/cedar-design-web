import _NavMenu from './menu';
import _NavMenuItem from './item';
import _NavMenuItemGroup from './item-group.vue';
import _NavMenuSubMenu from './sub-menu';
import { navMenuProps } from './props';
declare const NavMenu: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        theme: {
            type: import("vue").PropType<"light" | "dark">;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "horizontal" | "vertical" | "pop" | "popButton";
    }, true, {}, {}, {
        BaseMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            style: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            theme: {
                type: import("vue").PropType<"light" | "dark">;
                default: string;
            };
            mode: {
                type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
                default: string;
            };
            levelIndent: {
                type: NumberConstructor;
            };
            autoOpen: {
                type: BooleanConstructor;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsedWidth: {
                type: NumberConstructor;
            };
            accordion: {
                type: BooleanConstructor;
            };
            autoScrollIntoView: {
                type: BooleanConstructor;
            };
            showCollapseButton: {
                type: BooleanConstructor;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            openKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultOpenKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            scrollConfig: {
                type: import("vue").PropType<{
                    [key: string]: any;
                }>;
            };
            triggerProps: {
                type: import("vue").PropType<import("..").TriggerProps>;
            };
            tooltipProps: {
                type: ObjectConstructor;
            };
            autoOpenSelected: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
            prefixCls: {
                type: StringConstructor;
            };
            inTrigger: {
                type: BooleanConstructor;
            };
            siderCollapsed: {
                type: BooleanConstructor;
            };
            isRoot: {
                type: BooleanConstructor;
            };
        }>, {
            computedPrefixCls: import("vue").ComputedRef<string>;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            computedStyle: import("vue").ComputedRef<(string | false | import("vue").StyleValue[] | Omit<import("vue").CSSProperties, "width"> | {
                width: string | number | undefined;
            } | null | undefined)[]>;
            computedCollapsed: import("vue").ComputedRef<boolean>;
            computedHasCollapseButton: import("vue").ComputedRef<boolean>;
            onCollapseBtnClick: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click")[], "collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            style: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            theme: {
                type: import("vue").PropType<"light" | "dark">;
                default: string;
            };
            mode: {
                type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
                default: string;
            };
            levelIndent: {
                type: NumberConstructor;
            };
            autoOpen: {
                type: BooleanConstructor;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsedWidth: {
                type: NumberConstructor;
            };
            accordion: {
                type: BooleanConstructor;
            };
            autoScrollIntoView: {
                type: BooleanConstructor;
            };
            showCollapseButton: {
                type: BooleanConstructor;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            openKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultOpenKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            scrollConfig: {
                type: import("vue").PropType<{
                    [key: string]: any;
                }>;
            };
            triggerProps: {
                type: import("vue").PropType<import("..").TriggerProps>;
            };
            tooltipProps: {
                type: ObjectConstructor;
            };
            autoOpenSelected: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
            prefixCls: {
                type: StringConstructor;
            };
            inTrigger: {
                type: BooleanConstructor;
            };
            siderCollapsed: {
                type: BooleanConstructor;
            };
            isRoot: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onCollapse?: ((...args: any[]) => any) | undefined;
            "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
            "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
            "onMenu-item-click"?: ((...args: any[]) => any) | undefined;
            "onSub-menu-click"?: ((...args: any[]) => any) | undefined;
        }>, {
            theme: "light" | "dark";
            mode: "horizontal" | "vertical" | "pop" | "popButton";
            popupMaxHeight: number | boolean;
            accordion: boolean;
            collapsed: boolean;
            defaultCollapsed: boolean;
            autoScrollIntoView: boolean;
            inTrigger: boolean;
            siderCollapsed: boolean;
            isRoot: boolean;
            autoOpen: boolean;
            showCollapseButton: boolean;
            defaultSelectedKeys: string[];
            defaultOpenKeys: string[];
            autoOpenSelected: boolean;
        }, {}, {
            IconMenuFold: {
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
            IconMenuUnfold: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        theme: {
            type: import("vue").PropType<"light" | "dark">;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        mode: "horizontal" | "vertical" | "pop" | "popButton";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<"light" | "dark">;
    };
    mode: {
        type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "horizontal" | "vertical" | "pop" | "popButton";
}, {}, string, {}, {
    BaseMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        theme: {
            type: import("vue").PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
        levelIndent: {
            type: NumberConstructor;
        };
        autoOpen: {
            type: BooleanConstructor;
        };
        collapsed: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
        };
        collapsedWidth: {
            type: NumberConstructor;
        };
        accordion: {
            type: BooleanConstructor;
        };
        autoScrollIntoView: {
            type: BooleanConstructor;
        };
        showCollapseButton: {
            type: BooleanConstructor;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultOpenKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: import("vue").PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        prefixCls: {
            type: StringConstructor;
        };
        inTrigger: {
            type: BooleanConstructor;
        };
        siderCollapsed: {
            type: BooleanConstructor;
        };
        isRoot: {
            type: BooleanConstructor;
        };
    }>, {
        computedPrefixCls: import("vue").ComputedRef<string>;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        computedStyle: import("vue").ComputedRef<(string | false | import("vue").StyleValue[] | Omit<import("vue").CSSProperties, "width"> | {
            width: string | number | undefined;
        } | null | undefined)[]>;
        computedCollapsed: import("vue").ComputedRef<boolean>;
        computedHasCollapseButton: import("vue").ComputedRef<boolean>;
        onCollapseBtnClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click")[], "collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        theme: {
            type: import("vue").PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
        levelIndent: {
            type: NumberConstructor;
        };
        autoOpen: {
            type: BooleanConstructor;
        };
        collapsed: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
        };
        collapsedWidth: {
            type: NumberConstructor;
        };
        accordion: {
            type: BooleanConstructor;
        };
        autoScrollIntoView: {
            type: BooleanConstructor;
        };
        showCollapseButton: {
            type: BooleanConstructor;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultOpenKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: import("vue").PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        prefixCls: {
            type: StringConstructor;
        };
        inTrigger: {
            type: BooleanConstructor;
        };
        siderCollapsed: {
            type: BooleanConstructor;
        };
        isRoot: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onCollapse?: ((...args: any[]) => any) | undefined;
        "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
        "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
        "onMenu-item-click"?: ((...args: any[]) => any) | undefined;
        "onSub-menu-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        theme: "light" | "dark";
        mode: "horizontal" | "vertical" | "pop" | "popButton";
        popupMaxHeight: number | boolean;
        accordion: boolean;
        collapsed: boolean;
        defaultCollapsed: boolean;
        autoScrollIntoView: boolean;
        inTrigger: boolean;
        siderCollapsed: boolean;
        isRoot: boolean;
        autoOpen: boolean;
        showCollapseButton: boolean;
        defaultSelectedKeys: string[];
        defaultOpenKeys: string[];
        autoOpenSelected: boolean;
    }, {}, {
        IconMenuFold: {
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
        IconMenuUnfold: {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        menuContext: Partial<Readonly<Pick<import("./types").InternalNavMenuProps, "theme" | "mode" | "triggerProps" | "popupMaxHeight" | "levelIndent" | "autoScrollIntoView" | "scrollConfig" | "inTrigger" | "tooltipProps"> & {
            selectedKeys: string[];
            openKeys: string[];
            prefixCls: string;
            collapsed: boolean;
            expandIconDown?: () => import("vue").VNodeTypes;
            expandIconRight?: () => import("vue").VNodeTypes;
            onSubMenuClick?: (key: string, level: number) => void;
            onMenuItemClick?: (key: string) => void;
        }>>;
        level: import("vue").ComputedRef<number>;
        isSelected: import("vue").ComputedRef<boolean>;
        refItemElement: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        onClick(e: MouseEvent): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ItemGroup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
    }>, {
        prefixCls: import("vue").ComputedRef<string | undefined>;
        classNames: import("vue").ComputedRef<string[]>;
        level: import("vue").ComputedRef<number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {
        MenuIndent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            level: {
                type: NumberConstructor;
                default: number;
            };
        }>, {
            prefixCls: string;
            levelIndent: import("vue").Ref<number | undefined, number | undefined>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            level: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{}>, {
            level: number;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SubMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        selectable: {
            type: BooleanConstructor;
        };
        popup: {
            type: import("vue").PropType<boolean | ((level: number) => boolean)>;
            default: boolean;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: undefined;
        };
    }>, {
        subMenuKeys: import("vue").ComputedRef<string[]>;
        menuItemKeys: import("vue").ComputedRef<string[]>;
        isChildrenSelected: import("vue").ComputedRef<boolean>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
            };
            selectable: {
                type: BooleanConstructor;
            };
            popup: {
                type: import("vue").PropType<boolean | ((level: number) => boolean)>;
                default: boolean;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: undefined;
            };
        }>> & Readonly<{}> & {}>;
        attrs: import("vue").Attrs;
        computedKey: import("vue").ComputedRef<string>;
        computedPopup: import("vue").ComputedRef<boolean>;
        expandIconDown: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
        expandIconRight: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        selectable: {
            type: BooleanConstructor;
        };
        popup: {
            type: import("vue").PropType<boolean | ((level: number) => boolean)>;
            default: boolean;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: undefined;
        };
    }>> & Readonly<{}>, {
        popup: boolean | ((level: number) => boolean);
        popupMaxHeight: number | boolean;
        selectable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type NavMenuInstance = InstanceType<typeof _NavMenu>;
export type NavMenuItemInstance = InstanceType<typeof _NavMenuItem>;
export type NavMenuItemGroupInstance = InstanceType<typeof _NavMenuItemGroup>;
export type NavMenuSubMenuInstance = InstanceType<typeof _NavMenuSubMenu>;
export type { NavMenuProps } from './types';
export { _NavMenuItem as NavMenuItem, _NavMenuItemGroup as NavMenuItemGroup, _NavMenuSubMenu as NavMenuSubMenu };
export declare const _NavMenuComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        theme: {
            type: import("vue").PropType<"light" | "dark">;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "horizontal" | "vertical" | "pop" | "popButton";
    }, true, {}, {}, {
        BaseMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            style: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            theme: {
                type: import("vue").PropType<"light" | "dark">;
                default: string;
            };
            mode: {
                type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
                default: string;
            };
            levelIndent: {
                type: NumberConstructor;
            };
            autoOpen: {
                type: BooleanConstructor;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsedWidth: {
                type: NumberConstructor;
            };
            accordion: {
                type: BooleanConstructor;
            };
            autoScrollIntoView: {
                type: BooleanConstructor;
            };
            showCollapseButton: {
                type: BooleanConstructor;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            openKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultOpenKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            scrollConfig: {
                type: import("vue").PropType<{
                    [key: string]: any;
                }>;
            };
            triggerProps: {
                type: import("vue").PropType<import("..").TriggerProps>;
            };
            tooltipProps: {
                type: ObjectConstructor;
            };
            autoOpenSelected: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
            prefixCls: {
                type: StringConstructor;
            };
            inTrigger: {
                type: BooleanConstructor;
            };
            siderCollapsed: {
                type: BooleanConstructor;
            };
            isRoot: {
                type: BooleanConstructor;
            };
        }>, {
            computedPrefixCls: import("vue").ComputedRef<string>;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            computedStyle: import("vue").ComputedRef<(string | false | import("vue").StyleValue[] | Omit<import("vue").CSSProperties, "width"> | {
                width: string | number | undefined;
            } | null | undefined)[]>;
            computedCollapsed: import("vue").ComputedRef<boolean>;
            computedHasCollapseButton: import("vue").ComputedRef<boolean>;
            onCollapseBtnClick: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click")[], "collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            style: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            theme: {
                type: import("vue").PropType<"light" | "dark">;
                default: string;
            };
            mode: {
                type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
                default: string;
            };
            levelIndent: {
                type: NumberConstructor;
            };
            autoOpen: {
                type: BooleanConstructor;
            };
            collapsed: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultCollapsed: {
                type: BooleanConstructor;
            };
            collapsedWidth: {
                type: NumberConstructor;
            };
            accordion: {
                type: BooleanConstructor;
            };
            autoScrollIntoView: {
                type: BooleanConstructor;
            };
            showCollapseButton: {
                type: BooleanConstructor;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            openKeys: {
                type: import("vue").PropType<string[]>;
            };
            defaultOpenKeys: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            scrollConfig: {
                type: import("vue").PropType<{
                    [key: string]: any;
                }>;
            };
            triggerProps: {
                type: import("vue").PropType<import("..").TriggerProps>;
            };
            tooltipProps: {
                type: ObjectConstructor;
            };
            autoOpenSelected: {
                type: BooleanConstructor;
            };
            breakpoint: {
                type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: boolean;
            };
            prefixCls: {
                type: StringConstructor;
            };
            inTrigger: {
                type: BooleanConstructor;
            };
            siderCollapsed: {
                type: BooleanConstructor;
            };
            isRoot: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onCollapse?: ((...args: any[]) => any) | undefined;
            "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
            "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
            "onMenu-item-click"?: ((...args: any[]) => any) | undefined;
            "onSub-menu-click"?: ((...args: any[]) => any) | undefined;
        }>, {
            theme: "light" | "dark";
            mode: "horizontal" | "vertical" | "pop" | "popButton";
            popupMaxHeight: number | boolean;
            accordion: boolean;
            collapsed: boolean;
            defaultCollapsed: boolean;
            autoScrollIntoView: boolean;
            inTrigger: boolean;
            siderCollapsed: boolean;
            isRoot: boolean;
            autoOpen: boolean;
            showCollapseButton: boolean;
            defaultSelectedKeys: string[];
            defaultOpenKeys: string[];
            autoOpenSelected: boolean;
        }, {}, {
            IconMenuFold: {
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
            IconMenuUnfold: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        theme: {
            type: import("vue").PropType<"light" | "dark">;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        mode: "horizontal" | "vertical" | "pop" | "popButton";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<"light" | "dark">;
    };
    mode: {
        type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
}>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "horizontal" | "vertical" | "pop" | "popButton";
}, {}, string, {}, {
    BaseMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        theme: {
            type: import("vue").PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
        levelIndent: {
            type: NumberConstructor;
        };
        autoOpen: {
            type: BooleanConstructor;
        };
        collapsed: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
        };
        collapsedWidth: {
            type: NumberConstructor;
        };
        accordion: {
            type: BooleanConstructor;
        };
        autoScrollIntoView: {
            type: BooleanConstructor;
        };
        showCollapseButton: {
            type: BooleanConstructor;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultOpenKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: import("vue").PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        prefixCls: {
            type: StringConstructor;
        };
        inTrigger: {
            type: BooleanConstructor;
        };
        siderCollapsed: {
            type: BooleanConstructor;
        };
        isRoot: {
            type: BooleanConstructor;
        };
    }>, {
        computedPrefixCls: import("vue").ComputedRef<string>;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        computedStyle: import("vue").ComputedRef<(string | false | import("vue").StyleValue[] | Omit<import("vue").CSSProperties, "width"> | {
            width: string | number | undefined;
        } | null | undefined)[]>;
        computedCollapsed: import("vue").ComputedRef<boolean>;
        computedHasCollapseButton: import("vue").ComputedRef<boolean>;
        onCollapseBtnClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click")[], "collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        theme: {
            type: import("vue").PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: import("vue").PropType<"vertical" | "horizontal" | "pop" | "popButton">;
            default: string;
        };
        levelIndent: {
            type: NumberConstructor;
        };
        autoOpen: {
            type: BooleanConstructor;
        };
        collapsed: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
        };
        collapsedWidth: {
            type: NumberConstructor;
        };
        accordion: {
            type: BooleanConstructor;
        };
        autoScrollIntoView: {
            type: BooleanConstructor;
        };
        showCollapseButton: {
            type: BooleanConstructor;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: import("vue").PropType<string[]>;
        };
        defaultOpenKeys: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: import("vue").PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: boolean;
        };
        prefixCls: {
            type: StringConstructor;
        };
        inTrigger: {
            type: BooleanConstructor;
        };
        siderCollapsed: {
            type: BooleanConstructor;
        };
        isRoot: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onCollapse?: ((...args: any[]) => any) | undefined;
        "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
        "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
        "onMenu-item-click"?: ((...args: any[]) => any) | undefined;
        "onSub-menu-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        theme: "light" | "dark";
        mode: "horizontal" | "vertical" | "pop" | "popButton";
        popupMaxHeight: number | boolean;
        accordion: boolean;
        collapsed: boolean;
        defaultCollapsed: boolean;
        autoScrollIntoView: boolean;
        inTrigger: boolean;
        siderCollapsed: boolean;
        isRoot: boolean;
        autoOpen: boolean;
        showCollapseButton: boolean;
        defaultSelectedKeys: string[];
        defaultOpenKeys: string[];
        autoOpenSelected: boolean;
    }, {}, {
        IconMenuFold: {
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
        IconMenuUnfold: {
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
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        menuContext: Partial<Readonly<Pick<import("./types").InternalNavMenuProps, "theme" | "mode" | "triggerProps" | "popupMaxHeight" | "levelIndent" | "autoScrollIntoView" | "scrollConfig" | "inTrigger" | "tooltipProps"> & {
            selectedKeys: string[];
            openKeys: string[];
            prefixCls: string;
            collapsed: boolean;
            expandIconDown?: () => import("vue").VNodeTypes;
            expandIconRight?: () => import("vue").VNodeTypes;
            onSubMenuClick?: (key: string, level: number) => void;
            onMenuItemClick?: (key: string) => void;
        }>>;
        level: import("vue").ComputedRef<number>;
        isSelected: import("vue").ComputedRef<boolean>;
        refItemElement: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        onClick(e: MouseEvent): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ItemGroup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
    }>, {
        prefixCls: import("vue").ComputedRef<string | undefined>;
        classNames: import("vue").ComputedRef<string[]>;
        level: import("vue").ComputedRef<number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {
        MenuIndent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            level: {
                type: NumberConstructor;
                default: number;
            };
        }>, {
            prefixCls: string;
            levelIndent: import("vue").Ref<number | undefined, number | undefined>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            level: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{}>, {
            level: number;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SubMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        selectable: {
            type: BooleanConstructor;
        };
        popup: {
            type: import("vue").PropType<boolean | ((level: number) => boolean)>;
            default: boolean;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: undefined;
        };
    }>, {
        subMenuKeys: import("vue").ComputedRef<string[]>;
        menuItemKeys: import("vue").ComputedRef<string[]>;
        isChildrenSelected: import("vue").ComputedRef<boolean>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: StringConstructor;
            };
            selectable: {
                type: BooleanConstructor;
            };
            popup: {
                type: import("vue").PropType<boolean | ((level: number) => boolean)>;
                default: boolean;
            };
            popupMaxHeight: {
                type: import("vue").PropType<boolean | number>;
                default: undefined;
            };
        }>> & Readonly<{}> & {}>;
        attrs: import("vue").Attrs;
        computedKey: import("vue").ComputedRef<string>;
        computedPopup: import("vue").ComputedRef<boolean>;
        expandIconDown: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
        expandIconRight: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
        };
        selectable: {
            type: BooleanConstructor;
        };
        popup: {
            type: import("vue").PropType<boolean | ((level: number) => boolean)>;
            default: boolean;
        };
        popupMaxHeight: {
            type: import("vue").PropType<boolean | number>;
            default: undefined;
        };
    }>> & Readonly<{}>, {
        popup: boolean | ((level: number) => boolean);
        popupMaxHeight: number | boolean;
        selectable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { NavMenu };
export { navMenuProps };
export default NavMenu;

import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    theme: {
        type: PropType<"light" | "dark">;
    };
    mode: {
        type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: PropType<"light" | "dark">;
    };
    mode: {
        type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
}>> & Readonly<{}>, {
    mode: "horizontal" | "vertical" | "pop" | "popButton";
}, {}, {
    BaseMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        style: {
            type: PropType<import("vue").StyleValue>;
        };
        theme: {
            type: PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
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
            type: PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: PropType<string[]>;
        };
        defaultOpenKeys: {
            type: PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: PropType<boolean | number>;
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
            type: PropType<import("vue").StyleValue>;
        };
        theme: {
            type: PropType<"light" | "dark">;
            default: string;
        };
        mode: {
            type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
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
            type: PropType<string[]>;
        };
        defaultSelectedKeys: {
            type: PropType<string[]>;
            default: () => never[];
        };
        openKeys: {
            type: PropType<string[]>;
        };
        defaultOpenKeys: {
            type: PropType<string[]>;
            default: () => never[];
        };
        scrollConfig: {
            type: PropType<{
                [key: string]: any;
            }>;
        };
        triggerProps: {
            type: PropType<import("..").TriggerProps>;
        };
        tooltipProps: {
            type: ObjectConstructor;
        };
        autoOpenSelected: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        popupMaxHeight: {
            type: PropType<boolean | number>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

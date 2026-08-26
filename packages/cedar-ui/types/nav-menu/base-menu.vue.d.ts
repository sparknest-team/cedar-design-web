import { CSSProperties, PropType, StyleValue } from 'vue';
import { TriggerProps } from '../trigger';
/**
 * @displayName NavMenu
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    style: {
        type: PropType<StyleValue>;
    };
    /**
     * @zh 菜单的主题
     * @en Menu theme
     */
    theme: {
        type: PropType<"light" | "dark">;
        default: string;
    };
    /**
     * @zh 菜单的模式
     * @en The mode of menu
     */
    mode: {
        type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
    /**
     * @zh 层级之间的缩进量
     * @en Indentation between levels
     */
    levelIndent: {
        type: NumberConstructor;
    };
    /**
     * @zh 默认展开所有多级菜单
     * @en Expand all multi-level menus by default
     */
    autoOpen: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否折叠菜单
     * @en Whether to collapse the menu
     * @vModel
     */
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认是否折叠菜单
     * @en Whether to collapse the menu by default
     */
    defaultCollapsed: {
        type: BooleanConstructor;
    };
    /**
     * @zh 折叠菜单宽度
     * @en Collapse menu width
     */
    collapsedWidth: {
        type: NumberConstructor;
    };
    /**
     * @zh 开启手风琴效果
     * @en Turn on the accordion effect
     */
    accordion: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否自动滚动选中项目到可见区域
     * @en Whether to automatically scroll the selected item to the visible area
     */
    autoScrollIntoView: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否内置折叠按钮
     * @en Whether built-in folding button
     */
    showCollapseButton: {
        type: BooleanConstructor;
    };
    /**
     * @zh 选中的菜单项 key 数组
     * @en The selected menu item key array
     * @vModel
     */
    selectedKeys: {
        type: PropType<string[]>;
    };
    /**
     * @zh 默认选中的菜单项 key 数组
     * @en The key array of the menu items selected by default
     */
    defaultSelectedKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
    /**
     * @zh 展开的子菜单 key 数组
     * @en Expanded submenu key array
     * @vModel
     */
    openKeys: {
        type: PropType<string[]>;
    };
    /**
     * @zh 默认展开的子菜单 key 数组
     * @en The default expanded submenu key array
     */
    defaultOpenKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
    /**
     * @zh 滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数
     * @en Scroll to the configuration items in the visible area and receive all the parameters of [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)
     */
    scrollConfig: {
        type: PropType<{
            [key: string]: any;
        }>;
    };
    /**
     * @zh 弹出模式下可接受所有 `Trigger` 的 `Props`
     * @en Accept all `Props` of `Trigger` in pop-up mode
     */
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    /**
     * @zh 弹出模式下可接受所有 `ToolTip` 的 `Props`
     * @en Accept all `Props` of `ToolTip` in pop-up mode
     */
    tooltipProps: {
        type: ObjectConstructor;
    };
    /**
     * @zh 默认展开选中的菜单
     * @en Expand the selected menus by default
     * @version 2.8.0
     */
    autoOpenSelected: {
        type: BooleanConstructor;
    };
    /**
     * @zh 响应式的断点, 详见[响应式栅格](/vue/component/grid)
     * @en Responsive breakpoints, see [Responsive Grid](/vue/component/grid) for details
     * @version 2.18.0
     */
    breakpoint: {
        type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    };
    /**
     * @zh 弹出框的最大高度
     * @en The maximum height of popover
     * @version 2.23.0
     */
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
    computedStyle: import("vue").ComputedRef<(string | false | StyleValue[] | Omit<CSSProperties, "width"> | {
        width: string | number | undefined;
    } | null | undefined)[]>;
    computedCollapsed: import("vue").ComputedRef<boolean>;
    computedHasCollapseButton: import("vue").ComputedRef<boolean>;
    onCollapseBtnClick: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click")[], "collapse" | "update:collapsed" | "update:selectedKeys" | "update:openKeys" | "menu-item-click" | "sub-menu-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    style: {
        type: PropType<StyleValue>;
    };
    /**
     * @zh 菜单的主题
     * @en Menu theme
     */
    theme: {
        type: PropType<"light" | "dark">;
        default: string;
    };
    /**
     * @zh 菜单的模式
     * @en The mode of menu
     */
    mode: {
        type: PropType<"vertical" | "horizontal" | "pop" | "popButton">;
        default: string;
    };
    /**
     * @zh 层级之间的缩进量
     * @en Indentation between levels
     */
    levelIndent: {
        type: NumberConstructor;
    };
    /**
     * @zh 默认展开所有多级菜单
     * @en Expand all multi-level menus by default
     */
    autoOpen: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否折叠菜单
     * @en Whether to collapse the menu
     * @vModel
     */
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认是否折叠菜单
     * @en Whether to collapse the menu by default
     */
    defaultCollapsed: {
        type: BooleanConstructor;
    };
    /**
     * @zh 折叠菜单宽度
     * @en Collapse menu width
     */
    collapsedWidth: {
        type: NumberConstructor;
    };
    /**
     * @zh 开启手风琴效果
     * @en Turn on the accordion effect
     */
    accordion: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否自动滚动选中项目到可见区域
     * @en Whether to automatically scroll the selected item to the visible area
     */
    autoScrollIntoView: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否内置折叠按钮
     * @en Whether built-in folding button
     */
    showCollapseButton: {
        type: BooleanConstructor;
    };
    /**
     * @zh 选中的菜单项 key 数组
     * @en The selected menu item key array
     * @vModel
     */
    selectedKeys: {
        type: PropType<string[]>;
    };
    /**
     * @zh 默认选中的菜单项 key 数组
     * @en The key array of the menu items selected by default
     */
    defaultSelectedKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
    /**
     * @zh 展开的子菜单 key 数组
     * @en Expanded submenu key array
     * @vModel
     */
    openKeys: {
        type: PropType<string[]>;
    };
    /**
     * @zh 默认展开的子菜单 key 数组
     * @en The default expanded submenu key array
     */
    defaultOpenKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
    /**
     * @zh 滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数
     * @en Scroll to the configuration items in the visible area and receive all the parameters of [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)
     */
    scrollConfig: {
        type: PropType<{
            [key: string]: any;
        }>;
    };
    /**
     * @zh 弹出模式下可接受所有 `Trigger` 的 `Props`
     * @en Accept all `Props` of `Trigger` in pop-up mode
     */
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    /**
     * @zh 弹出模式下可接受所有 `ToolTip` 的 `Props`
     * @en Accept all `Props` of `ToolTip` in pop-up mode
     */
    tooltipProps: {
        type: ObjectConstructor;
    };
    /**
     * @zh 默认展开选中的菜单
     * @en Expand the selected menus by default
     * @version 2.8.0
     */
    autoOpenSelected: {
        type: BooleanConstructor;
    };
    /**
     * @zh 响应式的断点, 详见[响应式栅格](/vue/component/grid)
     * @en Responsive breakpoints, see [Responsive Grid](/vue/component/grid) for details
     * @version 2.18.0
     */
    breakpoint: {
        type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    };
    /**
     * @zh 弹出框的最大高度
     * @en The maximum height of popover
     * @version 2.23.0
     */
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
export default _default;

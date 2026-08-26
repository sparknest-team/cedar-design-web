import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 子菜单的标题
     * @en The title of the submenu
     */
    title: {
        type: StringConstructor;
    };
    /**
     * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
     * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
     */
    selectable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否强制使用弹出模式，`level` 表示当前子菜单的层级
     * @en Whether to force the use of pop-up mode, `level` indicates the level of the current submenu
     */
    popup: {
        type: PropType<boolean | ((level: number) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 弹出框的最大高度
     * @en The maximum height of popover
     * @defaultValue true
     * @version 2.23.0
     */
    popupMaxHeight: {
        type: PropType<boolean | number>;
        default: undefined;
    };
}>, {
    subMenuKeys: import("vue").ComputedRef<string[]>;
    menuItemKeys: import("vue").ComputedRef<string[]>;
    isChildrenSelected: import("vue").ComputedRef<boolean>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        /**
         * @zh 子菜单的标题
         * @en The title of the submenu
         */
        title: {
            type: StringConstructor;
        };
        /**
         * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
         * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
         */
        selectable: {
            type: BooleanConstructor;
        };
        /**
         * @zh 是否强制使用弹出模式，`level` 表示当前子菜单的层级
         * @en Whether to force the use of pop-up mode, `level` indicates the level of the current submenu
         */
        popup: {
            type: PropType<boolean | ((level: number) => boolean)>;
            default: boolean;
        };
        /**
         * @zh 弹出框的最大高度
         * @en The maximum height of popover
         * @defaultValue true
         * @version 2.23.0
         */
        popupMaxHeight: {
            type: PropType<boolean | number>;
            default: undefined;
        };
    }>> & Readonly<{}> & {}>;
    attrs: import("vue").Attrs;
    computedKey: import("vue").ComputedRef<string>;
    computedPopup: import("vue").ComputedRef<boolean>;
    expandIconDown: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
    expandIconRight: import("vue").Ref<(() => import("vue").VNodeTypes) | undefined, (() => import("vue").VNodeTypes) | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 子菜单的标题
     * @en The title of the submenu
     */
    title: {
        type: StringConstructor;
    };
    /**
     * @zh 弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态
     * @en In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select
     */
    selectable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否强制使用弹出模式，`level` 表示当前子菜单的层级
     * @en Whether to force the use of pop-up mode, `level` indicates the level of the current submenu
     */
    popup: {
        type: PropType<boolean | ((level: number) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 弹出框的最大高度
     * @en The maximum height of popover
     * @defaultValue true
     * @version 2.23.0
     */
    popupMaxHeight: {
        type: PropType<boolean | number>;
        default: undefined;
    };
}>> & Readonly<{}>, {
    popup: boolean | ((level: number) => boolean);
    popupMaxHeight: number | boolean;
    selectable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

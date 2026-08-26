declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
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
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

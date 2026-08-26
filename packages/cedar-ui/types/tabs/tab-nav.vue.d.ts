declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项卡的标题
     * @en Title of the tab
     */
    title: StringConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许关闭此选项卡（仅在可编辑模式生效）
     * @en Whether to allow this tab to be closed (only effective in editable mode)
     */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 图标和文字是否垂直排列
     * @en Whether the icon and text are arranged vertically
     */
    itemVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项卡的标题
     * @en Title of the tab
     */
    title: StringConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许关闭此选项卡（仅在可编辑模式生效）
     * @en Whether to allow this tab to be closed (only effective in editable mode)
     */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 图标和文字是否垂直排列
     * @en Whether the icon and text are arranged vertically
     */
    itemVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    closable: boolean;
    disabled: boolean;
    itemVertical: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

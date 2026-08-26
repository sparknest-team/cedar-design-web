declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 菜单组的标题
     * @en The title of the menu group
     */
    title: {
        type: StringConstructor;
    };
}>, {
    prefixCls: import("vue").ComputedRef<string | undefined>;
    classNames: import("vue").ComputedRef<string[]>;
    level: import("vue").ComputedRef<number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 菜单组的标题
     * @en The title of the menu group
     */
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
export default _default;

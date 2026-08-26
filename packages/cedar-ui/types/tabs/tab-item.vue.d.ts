declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 是否在首次展示标签时挂载内容
     * @en Whether to mount the content when the label is first displayed
     */
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在不显示标签时销毁内容
     * @en Whether to destroy the content when the label is not displayed
     */
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
    /**
     * @zh 是否在首次展示标签时挂载内容
     * @en Whether to mount the content when the label is first displayed
     */
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在不显示标签时销毁内容
     * @en Whether to destroy the content when the label is not displayed
     */
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    destroyOnHide: boolean;
    lazyLoad: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

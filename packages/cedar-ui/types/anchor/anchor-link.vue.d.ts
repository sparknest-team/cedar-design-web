declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 锚点链接的文本内容
     * @en The text content of the anchor link
     */
    title: StringConstructor;
    /**
     * @zh 锚点链接的地址
     * @en The address of the anchor link
     */
    href: StringConstructor;
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    cls: import("vue").ComputedRef<any[]>;
    linkRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    handleClick: (e: MouseEvent) => void | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 锚点链接的文本内容
     * @en The text content of the anchor link
     */
    title: StringConstructor;
    /**
     * @zh 锚点链接的地址
     * @en The address of the anchor link
     */
    href: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

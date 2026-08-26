declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    total: {
        type: NumberConstructor;
        required: boolean;
        validator: (value: number) => boolean;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    simple: BooleanConstructor;
    showTotal: BooleanConstructor;
    showMore: BooleanConstructor;
    showJumper: BooleanConstructor;
    showPageSize: BooleanConstructor;
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
        validator: (value: number[]) => boolean;
    };
    pageSizeProps: import("vue").PropType<import("..").SelectProps>;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    baseSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (current: number) => true;
    'update:pageSize': (pageSize: number) => true;
    /**
     * @zh 页码改变时触发
     * @en Triggered when page number changes
     * @param {number} current
     */
    change: (current: number) => true;
    /**
     * @zh 数据条数改变时触发
     * @en Triggered when the number of data items changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    total: {
        type: NumberConstructor;
        required: boolean;
        validator: (value: number) => boolean;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    simple: BooleanConstructor;
    showTotal: BooleanConstructor;
    showMore: BooleanConstructor;
    showJumper: BooleanConstructor;
    showPageSize: BooleanConstructor;
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
        validator: (value: number[]) => boolean;
    };
    pageSizeProps: import("vue").PropType<import("..").SelectProps>;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    baseSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}>, {
    disabled: boolean;
    defaultCurrent: number;
    simple: boolean;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

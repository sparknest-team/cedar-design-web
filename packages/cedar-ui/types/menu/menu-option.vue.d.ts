declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项值
     * @en Value
     */
    value: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 选项显示内容，不传 value 时也作为选项值
     * @en Option label. Used as option value when value is not provided
     */
    label: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: BooleanConstructor;
    uninjectContext: BooleanConstructor;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    liRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    handleClick: (ev: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 点击选项时触发
     * @en Emitted when the option is clicked
     * @param {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项值
     * @en Value
     */
    value: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 选项显示内容，不传 value 时也作为选项值
     * @en Option label. Used as option value when value is not provided
     */
    label: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: BooleanConstructor;
    uninjectContext: BooleanConstructor;
}>> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    active: boolean;
    uninjectContext: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

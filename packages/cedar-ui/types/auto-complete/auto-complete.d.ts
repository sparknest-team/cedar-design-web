import { SelectOptionData } from '../select/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: undefined;
    };
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        validator: (value: string) => boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    options: {
        type: import("vue").PropType<(string | number | SelectOptionData | import("..").SelectOptionGroup)[]>;
        default: () => never[];
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement | null | undefined>;
    };
    strict: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterOption: {
        type: import("vue").PropType<import("..").FilterOption>;
        default: boolean;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     * @version 2.40.0
     */
    focus(): void;
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     * @version 2.40.0
     */
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    /**
     * @zh 绑定值发生改变时触发
     * @en Emitted when the value changes
     * @property {string} value
     */
    change: (value: string) => true;
    /**
     * @zh 用户搜索时触发
     * @en Emitted when the user searches
     * @property {string} value
     */
    search: (value: string) => true;
    /**
     * @zh 选择选项时触发
     * @en Emitted when an option is selected
     * @property {string} value
     */
    select: (value: string, ev: Event) => true;
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @param {Event} ev
     * @version 2.23.0
     */
    clear: (ev: Event) => true;
    /**
     * @zh 下拉菜单发生滚动时触发
     * @en Triggered when the drop-down scrolls
     * @param {Event} ev
     * @version 2.52.0
     */
    dropdownScroll: (ev: Event) => true;
    /**
     * @zh 下拉菜单滚动到底部时触发
     * @en Triggered when the drop-down menu is scrolled to the bottom
     * @param {Event} ev
     * @version 2.52.0
     */
    dropdownReachBottom: (ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: undefined;
    };
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        validator: (value: string) => boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    options: {
        type: import("vue").PropType<(string | number | SelectOptionData | import("..").SelectOptionGroup)[]>;
        default: () => never[];
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement | null | undefined>;
    };
    strict: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterOption: {
        type: import("vue").PropType<import("..").FilterOption>;
        default: boolean;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
}>> & Readonly<{
    onClear?: ((ev: Event) => any) | undefined;
    onSearch?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onSelect?: ((value: string, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onDropdownScroll?: ((ev: Event) => any) | undefined;
    onDropdownReachBottom?: ((ev: Event) => any) | undefined;
}>, {
    disabled: boolean;
    strict: boolean;
    defaultValue: string;
    modelValue: string;
    clearable: boolean;
    options: (string | number | SelectOptionData | import("..").SelectOptionGroup)[];
    filterOption: import("..").FilterOption;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

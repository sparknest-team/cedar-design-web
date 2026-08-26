import { PropType } from 'vue';
import { SelectOptionData, SelectOptionGroup } from '../select/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    prefix: {
        type: PropType<string | string[]>;
        default: string;
    };
    split: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"input" | "textarea">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    inputRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     * @version 2.24.0
     */
    focus(): void;
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     * @version 2.24.0
     */
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => true;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @property {string} value
     */
    change: (value: string) => true;
    /**
     * @zh 动态搜索时触发，2.47.0 版本增加 prefix 参数
     * @en Trigger on dynamic search prefix, version 2.47.0 adds prefix param
     * @property {string} value
     * @property {string} prefix
     */
    search: (value: string, prefix: string) => true;
    /**
     * @zh 选择下拉选项时触发
     * @en Triggered when the drop-down option is selected
     * @property {string | number | Record<string, any> | undefined} value
     */
    select: (value: string | number | Record<string, any> | undefined) => true;
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @version 2.23.0
     */
    clear: (ev: Event) => true;
    /**
     * @zh 文本框获取焦点时触发
     * @en Emitted when the text box gets focus
     * @param {FocusEvent} ev
     * @version 2.42.0
     */
    focus: (ev: FocusEvent) => true;
    /**
     * @zh 文本框失去焦点时触发
     * @en Emitted when the text box loses focus
     * @param {FocusEvent} ev
     * @version 2.42.0
     */
    blur: (ev: FocusEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    prefix: {
        type: PropType<string | string[]>;
        default: string;
    };
    split: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"input" | "textarea">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: Event) => any) | undefined;
    onSearch?: ((value: string, prefix: string) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    type: "input" | "textarea";
    split: string;
    data: (string | number | SelectOptionData | SelectOptionGroup)[];
    disabled: boolean;
    prefix: string | string[];
    defaultValue: string;
    clearable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

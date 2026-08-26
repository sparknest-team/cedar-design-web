import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { InputTagFieldNames, TagData } from './types';
export declare const inputTagProps: {
    baseCls: StringConstructor;
    /**
     * @zh 绑定值
     * @en Value
     * @vModel
     */
    modelValue: {
        type: PropType<(string | number | TagData)[]>;
    };
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     */
    defaultValue: {
        type: PropType<(string | number | TagData)[]>;
        default: () => never[];
    };
    /**
     * @zh 输入框的值
     * @en The value of the input
     * @vModel
     */
    inputValue: StringConstructor;
    /**
     * @zh 输入框的默认值（非受控状态）
     * @en The default value of the input (uncontrolled state)
     */
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 占位符
     * @en Placeholder
     */
    placeholder: StringConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     */
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为只读模式
     * @en Whether it is read-only mode
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许清空
     * @en Whether to allow clear
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 输入框的大小
     * @en The size of the input
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 输入框的变体
     * @en The variant of the input
     * @values 'filled', 'outlined', 'standard'
     * @defaultValue 'filled'
     */
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * @zh 最多展示的标签个数，`0` 表示不限制
     * @en The maximum number of tags displayed, `0` means unlimited
     */
    maxTagCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * @zh 是否保留输入框的内容
     * @en Whether to keep the content of the input box
     */
    retainInputValue: {
        type: PropType<boolean | {
            create?: boolean;
            blur?: boolean;
        }>;
        default: boolean;
    };
    /**
     * @zh 格式化标签内容
     * @en Format tag content
     */
    formatTag: {
        type: PropType<(data: TagData) => string>;
    };
    /**
     * @zh 是否仅创建唯一的值
     * @en Whether to create only unique values
     * @version 2.15.0
     */
    uniqueValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义 `TagData` 中的字段
     * @en Customize fields in `TagData`
     * @version 2.22.0
     */
    fieldNames: {
        type: PropType<InputTagFieldNames>;
    };
    /**
     * @zh 标签内容不换行
     * @en Tag content does not wrap
     * @version 2.56.1
     */
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: BooleanConstructor;
    disabledInput: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
};
export type InputTagProps = Omit<Partial<ExtractPropTypes<typeof inputTagProps>>, 'baseCls' | 'focused' | 'disabledInput' | 'uninjectFormItemContext'>;

import { PropType } from 'vue';
import { Options as ScrollIntoViewOptions } from 'scroll-into-view-if-needed';
import { ComponentSize } from '../_utils/constant';
import { FieldData, FieldRule, ValidatedError } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: boolean;
    };
    layout: {
        type: PropType<import("./props").FormLayout>;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    labelColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    wrapperColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    labelColStyle: ObjectConstructor;
    wrapperColStyle: ObjectConstructor;
    labelAlign: {
        type: PropType<import("./props").FormLabelAlign>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    rules: {
        type: PropType<Record<string, FieldRule | FieldRule[]>>;
    };
    autoLabelWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    scrollToFirstError: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
    handleSubmit: (e: Event) => void;
    innerValidate: (callback?: (errors: undefined | Record<string, ValidatedError>) => void) => Promise<undefined | Record<string, ValidatedError>>;
    innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, ValidatedError>) => void) => Promise<Record<string, ValidatedError> | undefined>;
    innerResetFields: (field?: string | string[]) => void;
    innerClearValidate: (field?: string | string[]) => void;
    innerSetFields: (data: Record<string, FieldData>) => void;
    innerScrollToField: (field: string, options?: ScrollIntoViewOptions) => void;
}, {}, {}, {
    /**
     * @zh 校验全部表单数据
     * @en Verify all form data
     * @public
     * @param {(errors: undefined | Record<string, ValidatedError>) => void} callback
     * @returns {Promise<undefined | Record<string, ValidatedError>>}
     */
    validate(callback?: (errors: undefined | Record<string, ValidatedError>) => void): Promise<undefined | Record<string, ValidatedError>>;
    /**
     * @zh 校验部分表单数据
     * @en Validate part of the form data
     * @public
     * @param {string | string[]} field
     * @param {(errors: undefined | Record<string, ValidatedError>) => void} callback
     * @returns {Promise<undefined | Record<string, ValidatedError>>}
     */
    validateField(field: string | string[], callback?: (errors: undefined | Record<string, ValidatedError>) => void): Promise<undefined | Record<string, ValidatedError>>;
    /**
     * @zh 重置表单数据
     * @en Reset form data
     * @public
     * @param {string | string[]} field
     */
    resetFields(field?: string | string[]): void;
    /**
     * @zh 清除校验状态
     * @en Clear verification status
     * @public
     * @param {string | string[]} field
     */
    clearValidate(field?: string | string[]): void;
    /**
     * @zh 设置表单项的值和状态
     * @en Set the value and status of the form item
     * @param {Record<string, FieldData>} data
     * @public
     */
    setFields(data: Record<string, FieldData>): void;
    /**
     * @zh 滚动到指定表单项
     * @en Scroll to the specified form item
     * @param {string} field
     * @public
     * @version 2.51.0
     */
    scrollToField(field: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 表单提交时触发
     * @en Triggered when the form is submitted
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}} data
     * @param {Event} ev
     */
    submit: (data: {
        values: Record<string, any>;
        errors: Record<string, ValidatedError> | undefined;
    }, ev: Event) => true;
    /**
     * @zh 验证成功时触发
     * @en Triggered when verification is successful
     * @param {Record<string, any>} values
     * @param {Event} ev
     */
    submitSuccess: (values: Record<string, any>, ev: Event) => true;
    /**
     * @zh 验证失败时触发
     * @en Triggered when verification failed
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError>}} data
     * @param {Event} ev
     */
    submitFailed: (data: {
        values: Record<string, any>;
        errors: Record<string, ValidatedError>;
    }, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: boolean;
    };
    layout: {
        type: PropType<import("./props").FormLayout>;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    labelColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    wrapperColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    labelColStyle: ObjectConstructor;
    wrapperColStyle: ObjectConstructor;
    labelAlign: {
        type: PropType<import("./props").FormLabelAlign>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    rules: {
        type: PropType<Record<string, FieldRule | FieldRule[]>>;
    };
    autoLabelWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    scrollToFirstError: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSubmit?: ((data: {
        values: Record<string, any>;
        errors: Record<string, ValidatedError> | undefined;
    }, ev: Event) => any) | undefined;
    onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
    onSubmitFailed?: ((data: {
        values: Record<string, any>;
        errors: Record<string, ValidatedError>;
    }, ev: Event) => any) | undefined;
}>, {
    disabled: boolean;
    layout: "horizontal" | "vertical" | "inline";
    labelColProps: Record<string, any>;
    wrapperColProps: Record<string, any>;
    labelAlign: "left" | "right";
    autoLabelWidth: boolean;
    scrollToFirstError: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

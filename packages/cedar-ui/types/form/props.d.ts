import type { PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FieldRule } from './types';
export declare const FORM_LAYOUTS: readonly ["horizontal", "vertical", "inline"];
export type FormLayout = (typeof FORM_LAYOUTS)[number];
export declare const FORM_LABEL_ALIGNS: readonly ["left", "right"];
export type FormLabelAlign = (typeof FORM_LABEL_ALIGNS)[number];
export declare const formProps: {
    /**
     * @zh 表单数据对象
     * @en Form data object
     */
    model: {
        type: ObjectConstructor;
        required: boolean;
    };
    /**
     * @zh 表单的布局方式，包括水平、垂直、多列
     * @en The layout of the form, including horizontal, vertical, and multi-column
     * @values 'horizontal', 'vertical', 'inline'
     */
    layout: {
        type: PropType<FormLayout>;
        default: string;
    };
    /**
     * @zh 表单控件的尺寸
     * @en The size of the form
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
        type: PropType<ComponentSize>;
    };
    /**
     * @zh 标签元素布局选项。参数同 `<col>` 组件一致
     * @en Label element layout options. The parameters are the same as the `<col>` component
     */
    labelColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    /**
     * @zh 表单控件布局选项。参数同 `<col>` 组件一致
     * @en Form control layout options. The parameters are the same as the `<col>` component
     */
    wrapperColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    labelColStyle: ObjectConstructor;
    wrapperColStyle: ObjectConstructor;
    /**
     * @zh 标签的对齐方向
     * @en Alignment direction of the label
     * @values 'left', 'right'
     */
    labelAlign: {
        type: PropType<FormLabelAlign>;
        default: string;
    };
    /**
     * @zh 是否禁用表单
     * @en Whether to disable the form
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 表单项校验规则
     * @en Form item validation rules
     */
    rules: {
        type: PropType<Record<string, FieldRule | FieldRule[]>>;
    };
    /**
     * @zh 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。
     * @en Whether to enable automatic label width, it only takes effect under `layout="horizontal"`.
     * @version 2.13.0
     */
    autoLabelWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 表单 `id` 属性和表单控件 `id` 前缀
     * @en Form `id` attribute and form control `id` prefix
     */
    id: {
        type: StringConstructor;
    };
    /**
     * @zh 验证失败后滚动到第一个错误字段
     * @en Scroll to the first error field after verification fails
     * @version 2.51.0
     */
    scrollToFirstError: {
        type: BooleanConstructor;
        default: boolean;
    };
};

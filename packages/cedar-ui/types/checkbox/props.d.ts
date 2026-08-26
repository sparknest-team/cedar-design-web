import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../_utils/constant';
import type { CheckboxOption } from './types';
export type CheckboxValue = string | number | boolean;
export declare const checkboxProps: {
    modelValue: {
        type: PropType<boolean | CheckboxValue[]>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: PropType<CheckboxValue>;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxGroupProps: {
    modelValue: {
        type: PropType<CheckboxValue[]>;
        default: undefined;
    };
    defaultValue: {
        type: PropType<CheckboxValue[]>;
        default: () => never[];
    };
    max: NumberConstructor;
    options: PropType<Array<CheckboxValue | CheckboxOption>>;
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

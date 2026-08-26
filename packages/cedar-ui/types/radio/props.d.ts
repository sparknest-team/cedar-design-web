import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, Direction } from '../_utils/constant';
import type { RadioVariant } from './context';
import type { RadioOption } from './types';
export type RadioValue = string | number | boolean;
export declare const radioProps: {
    modelValue: {
        type: PropType<RadioValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: PropType<RadioValue>;
        default: boolean;
    };
    variant: {
        type: PropType<RadioVariant>;
        default: string;
        validator: (value: unknown) => value is RadioVariant;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    uninjectGroupContext: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const radioGroupProps: {
    modelValue: {
        type: PropType<RadioValue>;
        default: undefined;
    };
    defaultValue: {
        type: PropType<RadioValue>;
        default: string;
    };
    variant: {
        type: PropType<RadioVariant>;
        default: string;
        validator: (value: unknown) => value is RadioVariant;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    options: PropType<Array<RadioValue | RadioOption>>;
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
export declare const switchVariants: readonly ["circle", "round", "line"];
export type SwitchVariant = (typeof switchVariants)[number];
export type SwitchValue = string | number | boolean;
export type SwitchBeforeChange = (newValue: SwitchValue) => Promise<boolean | void> | boolean | void;
export declare const switchProps: {
    modelValue: {
        type: PropType<SwitchValue>;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<SwitchVariant>;
        default: string;
        validator: (value: unknown) => value is SwitchVariant;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    checkedValue: {
        type: PropType<SwitchValue>;
        default: boolean;
    };
    uncheckedValue: {
        type: PropType<SwitchValue>;
        default: boolean;
    };
    checkedColor: StringConstructor;
    uncheckedColor: StringConstructor;
    beforeChange: PropType<SwitchBeforeChange>;
    checkedText: StringConstructor;
    uncheckedText: StringConstructor;
};
export type SwitchProps = ExtractPropTypes<typeof switchProps>;

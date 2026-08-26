import type { ExtractPropTypes, PropType } from "vue";
import type { ComponentSize } from "../_utils/constant";
export declare const inputNumberModes: readonly ["embed", "button", "input"];
export declare const inputNumberModelEvents: readonly ["change", "input"];
export type InputNumberMode = (typeof inputNumberModes)[number];
export type InputNumberModelEvent = (typeof inputNumberModelEvents)[number];
export type InputNumberFormatter = (value: string) => string;
export type InputNumberParser = (value: string) => string;
export declare const inputNumberProps: {
    modelValue: NumberConstructor;
    defaultValue: NumberConstructor;
    mode: {
        type: PropType<InputNumberMode>;
        default: string;
        validator: (value: unknown) => value is InputNumberMode;
    };
    precision: {
        type: NumberConstructor;
        validator: (value: unknown) => boolean;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    formatter: PropType<InputNumberFormatter>;
    parser: PropType<InputNumberParser>;
    placeholder: StringConstructor;
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelEvent: {
        type: PropType<InputNumberModelEvent>;
        default: string;
        validator: (value: unknown) => value is InputNumberModelEvent;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAttrs: PropType<Record<string, unknown>>;
};
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;

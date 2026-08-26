import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../_utils/constant';
export type SliderValue = number | [number, number];
export type SliderTooltipFormatter = (value: number) => string | number;
export declare const sliderProps: {
    modelValue: PropType<SliderValue>;
    defaultValue: {
        type: PropType<SliderValue>;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    marks: PropType<Record<number, string>>;
    max: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
        validator: (value: Direction) => boolean;
    };
    disabled: BooleanConstructor;
    showTicks: BooleanConstructor;
    showInput: BooleanConstructor;
    range: BooleanConstructor;
    formatTooltip: PropType<SliderTooltipFormatter>;
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type SliderProps = Partial<ExtractPropTypes<typeof sliderProps>>;

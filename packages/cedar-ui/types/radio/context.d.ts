import type { InjectionKey, Slots } from 'vue';
import type { ComponentSize } from '../_utils/constant';
export declare const RADIO_VARIANTS: readonly ["radio", "button"];
export type RadioVariant = (typeof RADIO_VARIANTS)[number];
export interface RadioGroupContext {
    value: string | number | boolean;
    size: ComponentSize;
    variant: RadioVariant;
    disabled: boolean;
    slots: Slots;
    handleChange: (value: string | number | boolean, e: Event) => void;
}
export declare const radioGroupKey: InjectionKey<RadioGroupContext>;

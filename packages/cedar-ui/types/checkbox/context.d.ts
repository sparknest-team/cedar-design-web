import type { InjectionKey, Slots } from 'vue';
export interface CheckboxGroupContext {
    computedValue: Array<string | number | boolean>;
    disabled: boolean;
    isMaxed: boolean;
    slots: Slots;
    handleChange: (value: Array<string | number | boolean>, e: Event) => void;
}
export declare const checkboxGroupKey: InjectionKey<CheckboxGroupContext>;

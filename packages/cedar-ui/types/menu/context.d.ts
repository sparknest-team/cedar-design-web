import type { InjectionKey, Ref } from 'vue';
import type { MenuValue } from './types';
export interface MenuOptionInfo {
    value: MenuValue;
    label?: string | number;
    disabled?: boolean;
}
export interface MenuContext {
    popupMaxHeight: Ref<boolean | number>;
    modelValue?: Ref<MenuValue>;
    onOptionClick: (value: MenuValue, option: MenuOptionInfo, ev: Event) => void;
}
export declare const menuInjectionKey: InjectionKey<MenuContext>;

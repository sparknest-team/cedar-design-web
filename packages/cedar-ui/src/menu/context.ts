import type { InjectionKey, Ref } from "vue";
import type { MenuValue } from "./types";

export interface MenuContext {
  popupMaxHeight: boolean | number;
  modelValue?: Ref<MenuValue>;
  onOptionClick: (value: MenuValue, ev: Event) => void;
}

export const menuInjectionKey: InjectionKey<MenuContext> = Symbol("CedarMenu");

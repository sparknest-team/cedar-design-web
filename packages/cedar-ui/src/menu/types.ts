import { Slot, Slots } from "vue";
import { TriggerEvent, TriggerPosition } from "../_utils/constant";

export type MenuPosition = "top" | "tl" | "tr" | "bottom" | "bl" | "br";
export type MenuValue = string | number | Record<string, any> | undefined;

export interface MenuProps {
  modelValue?: MenuValue;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerEvent | TriggerEvent[];
  position?: MenuPosition;
  popupContainer?: string | HTMLElement;
  popupMaxHeight?: boolean | number;
  hideOnSelect?: boolean;
  autoFitPopupWidth?: boolean;
}

export interface MenuOptionConfig {
  label?: string | number;
  value: MenuValue;
  disabled?: boolean;

  _props?: Record<string, any>;
  _slots?: Slots;
}

export interface MenuGroupConfig {
  isGroup: true;
  options: MenuOptionData[];
  title?: string;

  _props?: Record<string, any>;
  _slots?: Slots;
}

export interface MenuSubmenuConfig extends MenuOptionConfig {
  isSubmenu: true;
  render: Slot;
  children: MenuOptionData[];
  trigger?: TriggerEvent;
  position?: TriggerPosition;
  footer?: Slot;
}

export type MenuOptionData =
  MenuOptionConfig | MenuGroupConfig | MenuSubmenuConfig;

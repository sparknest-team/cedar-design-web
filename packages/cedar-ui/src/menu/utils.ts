import { Slots, VNode } from "vue";
import {
  getChildrenString,
  isArrayChildren,
  isNamedComponent,
  isSlotsChildren,
  resolveProps,
} from "../_utils/vue-utils";
import { MenuOptionData, MenuGroupConfig, MenuSubmenuConfig } from "./types";
import { isArray, isObject } from "../_utils/is";
import { omit } from "../_utils/omit";

export const isGroup = (option: MenuOptionData): option is MenuGroupConfig => {
  return isObject(option) && "isGroup" in option;
};

export const isSubmenu = (
  option: MenuOptionData,
): option is MenuSubmenuConfig => {
  return isObject(option) && "isSubmenu" in option;
};

export const travelMenuChildren = (children: VNode[]): MenuOptionData[] => {
  const options: MenuOptionData[] = [];

  for (const child of children) {
    if (!child) continue;
    if (isNamedComponent(child, "MenuGroup")) {
      const props = resolveProps(child);
      let slots: Slots | undefined;
      const _options = [];

      if (isSlotsChildren(child, child.children)) {
        slots = child.children;
        if (child.children.default) {
          _options.push(...travelMenuChildren(child.children.default()));
        }
      } else if (isArrayChildren(child, child.children)) {
        _options.push(...travelMenuChildren(child.children));
      }

      options.push({
        _props: omit(props, ["title"]),
        _slots: slots,
        isGroup: true,
        title: props.title,
        options: _options,
      });
    } else if (isNamedComponent(child, "MenuOption")) {
      const props = resolveProps(child);
      let slots: Slots | undefined;
      if (isSlotsChildren(child, child.children)) {
        slots = child.children;
      }

      options.push({
        _props: props,
        _slots: slots,
        label: props.label,
        value:
          props.value ??
          props.label ??
          getChildrenString((child.children as Slots).default?.() ?? []),
        disabled: props.disabled,
      });
    } else if (isNamedComponent(child, "MenuSubmenu")) {
      const props = resolveProps(child);

      options.push({
        _props: omit(props, ["trigger", "position", "triggerProps"]),
        isSubmenu: true,
        value:
          props.value ??
          getChildrenString((child.children as Slots).default?.() ?? []),
        disabled: props.disabled,
        footer: (child.children as Slots).footer,
        render: (child.children as Slots).default,
        trigger: props.trigger,
        position: props.position,
        children: travelMenuChildren(
          (child.children as Slots).content?.() ?? [],
        ),
      });
    } else if (isArrayChildren(child, child.children)) {
      options.push(...travelMenuChildren(child.children));
    } else if (isSlotsChildren(child, child.children)) {
      const _children = child.children.default?.();
      if (_children) {
        options.push(...travelMenuChildren(_children));
      }
    } else if (isArray(child)) {
      options.push(...travelMenuChildren(child));
    }
  }

  return options;
};

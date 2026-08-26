import { StyleValue } from 'vue';
import { Breakpoint } from '../_utils/responsive-observe';
import { Data } from '../_utils/types';
import { TriggerProps } from '../trigger';
export type NavMenuTheme = 'light' | 'dark';
export type NavMenuMode = 'vertical' | 'horizontal' | 'pop' | 'popButton';
export interface NavMenuSubMenuChildDataType {
    key: string;
    children?: NavMenuSubMenuChildDataType[];
}
export type NavMenuPopupMaxHeightType = boolean | number;
export interface NavMenuProps {
    style: StyleValue | undefined;
    theme: NavMenuTheme | undefined;
    mode: NavMenuMode;
    levelIndent: number | undefined;
    autoOpen: boolean;
    collapsed: boolean | undefined;
    defaultCollapsed: boolean;
    collapsedWidth: number | undefined;
    accordion: boolean;
    autoScrollIntoView: boolean;
    showCollapseButton: boolean;
    selectedKeys: string[] | undefined;
    defaultSelectedKeys: string[];
    openKeys: string[] | undefined;
    defaultOpenKeys: string[];
    scrollConfig: {
        [key: string]: any;
    } | undefined;
    triggerProps: TriggerProps | undefined;
    tooltipProps: Data | undefined;
    autoOpenSelected: boolean;
    breakpoint: Breakpoint | undefined;
    popupMaxHeight: NavMenuPopupMaxHeightType;
}
export interface InternalNavMenuProps extends NavMenuProps {
    prefixCls: string | undefined;
    inTrigger: boolean;
    siderCollapsed: boolean;
    isRoot: boolean;
}
export interface NavMenuSubMenuProps {
    key: string | undefined;
    title: string | undefined;
    selectable: boolean;
    popup: boolean | ((level: number) => boolean);
    popupMaxHeight: NavMenuPopupMaxHeightType | undefined;
}
export interface NavMenuItemGroupProps {
    title: string | undefined;
}
export interface NavMenuItemProps {
    key: string | undefined;
    disabled?: boolean;
}
export interface NavMenuSubMenuInlineProps {
    title: string | undefined;
    isChildrenSelected: boolean;
}
export interface NavMenuSubMenuPopProps {
    title: string | undefined;
    selectable: boolean;
    isChildrenSelected: boolean;
    popupMaxHeight: NavMenuPopupMaxHeightType | undefined;
}
export interface NavMenuDataItem {
    key: string;
    children?: NavMenuData;
}
export type NavMenuData = NavMenuDataItem[];

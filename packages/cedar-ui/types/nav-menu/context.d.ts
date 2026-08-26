import { InjectionKey, VNodeTypes } from 'vue';
import { InternalNavMenuProps, NavMenuData } from './types';
export declare const NavMenuInjectionKey: InjectionKey<NavMenuContext>;
export type NavMenuContext = Readonly<Pick<InternalNavMenuProps, 'mode' | 'theme' | 'levelIndent' | 'autoScrollIntoView' | 'scrollConfig' | 'inTrigger' | 'triggerProps' | 'tooltipProps' | 'popupMaxHeight'> & {
    selectedKeys: string[];
    openKeys: string[];
    prefixCls: string;
    collapsed: boolean;
    expandIconDown?: () => VNodeTypes;
    expandIconRight?: () => VNodeTypes;
    onSubMenuClick?: (key: string, level: number) => void;
    onMenuItemClick?: (key: string) => void;
}>;
export declare const LevelInjectionKey: InjectionKey<LevelContext>;
export type LevelContext = Readonly<{
    level: number;
}>;
export type NavMenuMapType = Map<string, string[]>;
export declare const DataCollectorInjectionKey: InjectionKey<DataCollectorContext>;
export type DataCollectorContext = Readonly<{
    collectSubMenu: (key: string, children: NavMenuData, isReport?: boolean) => void;
    removeSubMenu: (key: string) => void;
    collectMenuItem: (key: string) => void;
    removeMenuItem: (keys: string) => void;
    reportMenuData: (data: NavMenuData) => void;
}>;

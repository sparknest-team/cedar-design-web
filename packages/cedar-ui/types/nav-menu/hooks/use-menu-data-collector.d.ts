import { NavMenuData } from '../types';
export declare function useMenuDataCollectorContext(isRoot?: boolean): Readonly<{
    collectSubMenu: (key: string, children: NavMenuData, isReport?: boolean) => void;
    removeSubMenu: (key: string) => void;
    collectMenuItem: (key: string) => void;
    removeMenuItem: (keys: string) => void;
    reportMenuData: (data: NavMenuData) => void;
}> | undefined;
export default function useMenuDataCollector(props: {
    key?: string | undefined;
    type: 'menu' | 'popupMenu' | 'subMenu';
}): {
    menuData: import("vue").Ref<{
        key: string;
        children?: any[] | undefined;
    }[], NavMenuData | {
        key: string;
        children?: any[] | undefined;
    }[]>;
    subMenuKeys: import("vue").ComputedRef<string[]>;
    menuItemKeys: import("vue").ComputedRef<string[]>;
};

import type { ExtractPropTypes, PropType } from 'vue';
import type { BreadcrumbRoute } from './types';
import type { MenuProps } from '../menu';
export declare const breadcrumbProps: {
    /**
     * 最多展示的正常面包屑项数量，不包含 more（0 表示不限制）
     */
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 通过路径数据渲染面包屑
     */
    routes: {
        type: PropType<BreadcrumbRoute[]>;
    };
    /**
     * 分隔符文字
     */
    separator: {
        type: PropType<string | number>;
        default: string;
    };
};
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
export declare const breadcrumbItemProps: {
    /** @internal 由 Breadcrumb 注入的稳定索引 */
    index: NumberConstructor;
    /**
     * 分隔符文字（覆盖父级 `separator`）
     */
    separator: {
        type: PropType<string | number>;
    };
    /**
     * 下拉菜单内容
     */
    droplist: {
        type: PropType<BreadcrumbRoute["children"]>;
    };
    /**
     * 下拉菜单属性
     */
    dropdownProps: {
        type: PropType<MenuProps>;
    };
    /**
     * 跳转链接
     */
    href: StringConstructor;
};
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;

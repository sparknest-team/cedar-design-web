import { VirtualItemKey } from '../interface';
/**
 * 获取有效的scrollTop值
 * Safari的缓动效果会获得负值的scrollTop
 */
export declare function getValidScrollTop(scrollTop: number, scrollRange: number): number;
/**
 * 获取滚动比例
 * 视口已滚动距离 / 总可滚动距离
 */
export declare function getScrollPercentage({ scrollTop, scrollHeight, clientHeight, }: {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
}): number;
/**
 * 根据滚动条当前的滚动百分比，计算出基准元素（滚动位置对应的元素）
 * 在基准元素的上方和下方渲染可见区域的其他元素
 */
export declare function getLocationItem(scrollPtg: number, itemCount: number): {
    index: number;
    offsetPtg: number;
};
/**
 * 计算需要渲染的元素的开始下标、结束下标和用于定位的元素下标
 */
export declare function getRangeIndex(scrollPtg: number, itemCount: number, visibleCount: number): {
    itemIndex: number;
    itemOffsetPtg: number;
    startIndex: number;
    endIndex: number;
};
interface ItemTopConfig {
    itemHeight: number;
    itemOffsetPtg: number;
    scrollTop: number;
    scrollPtg: number;
    clientHeight: number;
}
/**
 * 计算元素相对于视口顶部的偏移量
 */
export declare function getItemRelativeTop({ itemHeight, itemOffsetPtg, scrollPtg, clientHeight, }: Omit<ItemTopConfig, 'scrollTop'>): number;
/**
 * 计算元素相对于整个滚动区域顶部的偏移量
 */
export declare function getItemAbsoluteTop({ scrollTop, ...rest }: ItemTopConfig): number;
interface CompareItemConfig {
    locatedItemRelativeTop: number;
    locatedItemIndex: number;
    compareItemIndex: number;
    getItemKeyByIndex: (index: number) => VirtualItemKey;
    startIndex: number;
    endIndex: number;
    getItemHeightOrDefault: (key: VirtualItemKey) => number;
}
/**
 * 计算某一指定下标的元素相对于视口顶部的偏移量
 */
export declare function getCompareItemRelativeTop({ locatedItemRelativeTop, locatedItemIndex, compareItemIndex, startIndex, endIndex, getItemKeyByIndex, getItemHeightOrDefault, }: CompareItemConfig): number;
export {};

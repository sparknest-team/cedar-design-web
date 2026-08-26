import { PropType } from 'vue';
import { PaginationProps } from '../pagination';
import type { VirtualListProps } from '../_components/virtual-list-v2/interface';
import { ScrollbarProps } from '../scrollbar';
export declare const listProps: {
    /**
     * @zh 列表数据，需要和 `item` 插槽同时使用
     * @en List data, need to be used with `item` slot at the same time
     */
    data: {
        type: PropType<any[]>;
    };
    /**
     * @zh 列表大小
     * @en List size
     */
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    /**
     * @zh 是否显示边框
     * @en Whether to show the border
     */
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否显示分割线
     * @en Whether to show the dividing line
     */
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否显示选中样式
     * @en Whether to display the selected style
     */
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 列表分页配置
     * @en List pagination configuration
     */
    paginationProps: {
        type: PropType<PaginationProps>;
    };
    /**
     * @zh 列表栅格配置
     * @en List grid configuration
     */
    gridProps: {
        type: ObjectConstructor;
    };
    /**
     * @zh 列表的最大高度
     * @en Maximum height of the list
     */
    maxHeight: {
        type: PropType<string | number>;
        default: number;
    };
    /**
     * @zh 触发到达底部的距离阈值
     * @en Trigger the distance threshold to reach the bottom
     */
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass virtual list properties, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    /**
     * @zh 是否开启虚拟滚动条
     * @en Whether to enable virtual scroll bar
     * @version 2.38.0
     */
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
};

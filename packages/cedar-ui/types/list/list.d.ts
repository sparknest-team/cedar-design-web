import { PropType } from 'vue';
import { PaginationProps } from '../pagination';
import type { ScrollIntoViewOptions, VirtualListProps } from '../_components/virtual-list-v2/interface';
import { ScrollbarProps } from '../scrollbar';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<any[]>;
    };
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationProps: {
        type: PropType<PaginationProps>;
    };
    gridProps: {
        type: ObjectConstructor;
    };
    maxHeight: {
        type: PropType<string | number>;
        default: number;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
}>, {
    virtualListRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    /**
     * @zh 虚拟滚动到某个元素
     * @en Virtual scroll to an element
     * @param {{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}} options
     * @public
     */
    scrollIntoView(options: ScrollIntoViewOptions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 列表滚动时触发
     * @en Triggered when the list scrolls
     */
    scroll: () => true;
    /**
     * @zh 当列表到达底部时触发
     * @en Triggered when the list reaches the bottom
     */
    reachBottom: () => true;
    /**
     * @zh 表格分页发生改变时触发
     * @en Triggered when the table pagination changes
     * @param {number} page
     */
    pageChange: (page: number) => true;
    /**
     * @zh 表格每页数据数量发生改变时触发
     * @en Triggered when the number of data per page of the table changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<any[]>;
    };
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationProps: {
        type: PropType<PaginationProps>;
    };
    gridProps: {
        type: ObjectConstructor;
    };
    maxHeight: {
        type: PropType<string | number>;
        default: number;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
}>> & Readonly<{
    onScroll?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    split: boolean;
    scrollbar: boolean | ScrollbarProps;
    maxHeight: string | number;
    loading: boolean;
    bottomOffset: number;
    bordered: boolean;
    hoverable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

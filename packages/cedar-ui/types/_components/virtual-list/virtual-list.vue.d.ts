import { PropType, Ref } from 'vue';
import { ScrollOptions, VirtualListProps, VirtualItemKey } from './interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * 可视区域高度
     */
    height: {
        type: PropType<VirtualListProps["height"]>;
        default: number;
    };
    /**
     * 自动开启虚拟滚动的元素数量阈值，传入 null 表示禁止虚拟滚动
     */
    threshold: {
        type: PropType<VirtualListProps["threshold"]>;
    };
    /**
     * 元素高度是否是固定的
     */
    isStaticItemHeight: {
        type: BooleanConstructor;
    };
    /**
     * 预估的元素高度
     */
    estimatedItemHeight: {
        type: NumberConstructor;
    };
    /**
     * 数据源
     */
    data: {
        type: PropType<VirtualListProps["data"]>;
        default: () => never[];
    };
    /**
     * 元素的 key，或者获取 key 的函数
     */
    itemKey: {
        type: PropType<VirtualListProps["itemKey"]>;
        default: string;
    };
    /**
     * 用于包裹的 HTML 标签
     * @type string
     */
    component: {
        type: PropType<VirtualListProps["component"]>;
        default: string;
    };
    type: StringConstructor;
    outerAttrs: ObjectConstructor;
    innerAttrs: ObjectConstructor;
}>, {
    viewportRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    viewportHeight: Ref<number, number>;
    totalHeight: import("vue").ComputedRef<number>;
    startOffset: Ref<number, number>;
    isVirtual: import("vue").ComputedRef<boolean>;
    renderChildren: () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined)[];
    handleResize: (entry: HTMLElement) => void;
    handleScroll: (e: UIEvent) => void;
    scrollTo: (options: ScrollOptions) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("resize" | "scroll")[], "resize" | "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 可视区域高度
     */
    height: {
        type: PropType<VirtualListProps["height"]>;
        default: number;
    };
    /**
     * 自动开启虚拟滚动的元素数量阈值，传入 null 表示禁止虚拟滚动
     */
    threshold: {
        type: PropType<VirtualListProps["threshold"]>;
    };
    /**
     * 元素高度是否是固定的
     */
    isStaticItemHeight: {
        type: BooleanConstructor;
    };
    /**
     * 预估的元素高度
     */
    estimatedItemHeight: {
        type: NumberConstructor;
    };
    /**
     * 数据源
     */
    data: {
        type: PropType<VirtualListProps["data"]>;
        default: () => never[];
    };
    /**
     * 元素的 key，或者获取 key 的函数
     */
    itemKey: {
        type: PropType<VirtualListProps["itemKey"]>;
        default: string;
    };
    /**
     * 用于包裹的 HTML 标签
     * @type string
     */
    component: {
        type: PropType<VirtualListProps["component"]>;
        default: string;
    };
    type: StringConstructor;
    outerAttrs: ObjectConstructor;
    innerAttrs: ObjectConstructor;
}>> & Readonly<{
    onResize?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
}>, {
    component: keyof HTMLElementTagNameMap | undefined;
    data: unknown[] | undefined;
    height: string | number;
    itemKey: string | ((item: any) => VirtualItemKey) | undefined;
    isStaticItemHeight: boolean;
}, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Filler: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
        };
        offset: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        type: StringConstructor;
        outerAttrs: ObjectConstructor;
        innerAttrs: ObjectConstructor;
    }>, {
        outerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
        };
        offset: {
            type: NumberConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        type: StringConstructor;
        outerAttrs: ObjectConstructor;
        innerAttrs: ObjectConstructor;
    }>> & Readonly<{}>, {
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        renderFunc: {
            type: PropType<import("../render-function").RenderFunc>;
            required: true;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        renderFunc: {
            type: PropType<import("../render-function").RenderFunc>;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import { type PropType, type StyleValue } from 'vue';
import type { ThumbData } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 类型
     * @en Type
     */
    type: {
        type: PropType<"track" | "embed">;
        default: string;
    };
    /**
     * @zh 外层的类名
     * @en Outer class
     */
    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
        type: PropType<StyleValue>;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableHorizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
    style: import("vue").ComputedRef<StyleValue[]>;
    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    horizontalThumbRef: import("vue").Ref<any, any>;
    verticalThumbRef: import("vue").Ref<any, any>;
    horizontalData: import("vue").Ref<ThumbData | undefined, ThumbData | undefined>;
    verticalData: import("vue").Ref<ThumbData | undefined, ThumbData | undefined>;
    isBoth: import("vue").Ref<boolean, boolean>;
    hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
    hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
    handleResize: () => void;
    handleScroll: (ev: Event) => void;
    handleHorizontalScroll: (offset: number) => void;
    handleVerticalScroll: (offset: number) => void;
}, {}, {}, {
    /**
     * @zh 滚动
     * @en scrollTo
     * @public
     * @param {number | {left?: number;top?: number}} options
     * @param {number} y
     */
    scrollTo(options?: number | {
        left?: number;
        top?: number;
    }, y?: number): void;
    /**
     * @zh 纵向滚动
     * @en scroll vertically
     * @public
     * @param {number} top
     * @version 2.40.0
     */
    scrollTop(top: number): void;
    /**
     * @zh 横向滚动
     * @en scroll horizontal
     * @public
     * @param {number} left
     * @version 2.40.0
     */
    scrollLeft(left: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 滚动时触发
     * @en Triggered when scroll
     */
    scroll: (ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 类型
     * @en Type
     */
    type: {
        type: PropType<"track" | "embed">;
        default: string;
    };
    /**
     * @zh 外层的类名
     * @en Outer class
     */
    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
        type: PropType<StyleValue>;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableHorizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onScroll?: ((ev: Event) => any) | undefined;
}>, {
    type: "embed" | "track";
    hide: boolean;
    disableHorizontal: boolean;
    disableVertical: boolean;
}, {}, {
    ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        watchOnUpdated: BooleanConstructor;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        watchOnUpdated: BooleanConstructor;
    }>> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {
        watchOnUpdated: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Thumb: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<ThumbData>;
        };
        direction: {
            type: PropType<import("../..").Direction>;
            default: string;
        };
        alwaysShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        both: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        visible: import("vue").Ref<boolean, boolean>;
        trackRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        thumbRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        prefixCls: string;
        thumbCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        thumbStyle: import("vue").ComputedRef<{
            [x: string]: string;
        }>;
        handleThumbMouseDown: (ev: MouseEvent) => void;
        handleTrackClick: (ev: MouseEvent) => void;
        setOffset: (_offset: number) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<ThumbData>;
        };
        direction: {
            type: PropType<import("../..").Direction>;
            default: string;
        };
        alwaysShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        both: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: ((...args: any[]) => any) | undefined;
    }>, {
        both: boolean;
        direction: "horizontal" | "vertical";
        alwaysShow: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

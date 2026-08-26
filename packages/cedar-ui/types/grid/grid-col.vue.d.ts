import { PropType } from 'vue';
import { FlexType } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 栅格占位格数
     * @en Number of grid space
     */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 栅格左侧的间隔格数，间隔内不可以有栅格
     * @en The number of grids on the left side of the grid. There can be no grids in the grid.
     */
    offset: {
        type: NumberConstructor;
    };
    /**
     * @zh 对元素进行排序
     * @en Sort elements
     */
    order: {
        type: NumberConstructor;
    };
    /**
     * @zh < 576px 响应式栅格
     * @en <576px responsive grid
     */
    xs: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 576px 响应式栅格
     * @en >= 576px responsive grid
     */
    sm: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 768px 响应式栅格
     * @en >= 768px responsive grid
     */
    md: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 992px 响应式栅格
     * @en >= 992px responsive grid
     */
    lg: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 1200px 响应式栅格
     * @en >= 1200px responsive grid
     */
    xl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 1600px 响应式栅格
     * @en >= 1600px responsive grid
     */
    xxl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh 设置 flex 布局属性
     * @en Set flex layout properties
     * @version 2.10.0
     */
    flex: {
        type: PropType<number | string | "initial" | "auto" | "none">;
    };
}>, {
    visible: import("vue").ComputedRef<boolean>;
    classNames: import("vue").ComputedRef<string | {
        [x: string]: number | boolean | undefined;
    }>;
    styles: import("vue").ComputedRef<{
        flex?: FlexType;
        paddingLeft?: string;
        paddingRight?: string;
        paddingTop?: string;
        paddingBottom?: string;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 栅格占位格数
     * @en Number of grid space
     */
    span: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 栅格左侧的间隔格数，间隔内不可以有栅格
     * @en The number of grids on the left side of the grid. There can be no grids in the grid.
     */
    offset: {
        type: NumberConstructor;
    };
    /**
     * @zh 对元素进行排序
     * @en Sort elements
     */
    order: {
        type: NumberConstructor;
    };
    /**
     * @zh < 576px 响应式栅格
     * @en <576px responsive grid
     */
    xs: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 576px 响应式栅格
     * @en >= 576px responsive grid
     */
    sm: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 768px 响应式栅格
     * @en >= 768px responsive grid
     */
    md: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 992px 响应式栅格
     * @en >= 992px responsive grid
     */
    lg: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 1200px 响应式栅格
     * @en >= 1200px responsive grid
     */
    xl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh >= 1600px 响应式栅格
     * @en >= 1600px responsive grid
     */
    xxl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    /**
     * @zh 设置 flex 布局属性
     * @en Set flex layout properties
     * @version 2.10.0
     */
    flex: {
        type: PropType<number | string | "initial" | "auto" | "none">;
    };
}>> & Readonly<{}>, {
    span: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

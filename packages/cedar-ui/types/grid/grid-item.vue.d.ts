import { PropType } from 'vue';
import { ResponsiveValue } from './types';
/**
 * @version 2.15.0
 * @zh 响应式配置从 `2.18.0` 开始支持，具体配置 [ResponsiveValue](#responsivevalue)
 * @en Responsive configuration has been supported since `2.18.0`, the specific configuration [ResponsiveValue](#responsivevalue)
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 跨越的格数
     * @en Number of grids spanned
     */
    span: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 左侧的间隔格数
     * @en Number of grids on the left
     */
    offset: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 是否是后缀元素
     * @en Is it a suffix element
     */
    suffix: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<({
        'margin-left': string;
    } | {
        'margin-left'?: undefined;
    } | {
        'grid-column': string;
        display?: undefined;
    } | {
        display: string;
        'grid-column'?: undefined;
    })[]>;
    domRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    overflow: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 跨越的格数
     * @en Number of grids spanned
     */
    span: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 左侧的间隔格数
     * @en Number of grids on the left
     */
    offset: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 是否是后缀元素
     * @en Is it a suffix element
     */
    suffix: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    span: number | ResponsiveValue;
    suffix: boolean;
    offset: number | ResponsiveValue;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

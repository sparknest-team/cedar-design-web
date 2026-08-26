import { PropType } from 'vue';
import { ResponsiveValue } from './types';
/**
 * @version 2.15.0
 * @zh 响应式配置从 `2.18.0` 开始支持，具体配置 [ResponsiveValue](#responsivevalue)
 * @en Responsive configuration has been supported since `2.18.0`, the specific configuration [ResponsiveValue](#responsivevalue)
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    cols: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    rowGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    colGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        gap: string;
        'grid-template-columns': string;
    }[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    rowGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    colGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    rowGap: number | ResponsiveValue;
    cols: number | ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
    colGap: number | ResponsiveValue;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

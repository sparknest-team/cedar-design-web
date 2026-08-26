import { PropType } from 'vue';
import { ResponsiveValue } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 栅格间隔，单位是`px` 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。
     * @en Grid interval in `px`. Pass in the responsive object like {xs: 4, sm: 6, md: 12}. Pass in the array [horizontal spacing, vertical spacing] to set two directions.
     */
    gutter: {
        type: PropType<number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue]>;
        default: number;
    };
    /**
     * @zh 水平对齐方式 (`justify-content`)
     * @en Horizontal alignment (`justify-content`)
     */
    justify: {
        type: PropType<"start" | "center" | "end" | "space-around" | "space-between">;
        default: string;
    };
    /**
     * @zh 竖直对齐方式 ( `align-items` )
     * @en Vertical alignment (`align-items`)
     */
    align: {
        type: PropType<"start" | "center" | "end" | "stretch">;
        default: string;
    };
    /**
     * @zh 开启这个选项`Row`和`Col`都会被当作div而不会附带任何Grid相关的类和样式
     * @en Enabling this option `Row` and `Col` will be treated as divs without any Grid-related classes and styles
     */
    div: {
        type: BooleanConstructor;
    };
    /**
     * @zh `Col` 是否支持换行
     * @en Whether `Col` can wrap onto multiple lines
     * @version 2.13.0
     */
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean | "center" | "space-around" | "space-between" | "stretch" | "end" | "start";
    }>;
    styles: import("vue").ComputedRef<{
        marginTop?: string;
        marginBottom?: string;
        marginLeft?: string;
        marginRight?: string;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 栅格间隔，单位是`px` 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。
     * @en Grid interval in `px`. Pass in the responsive object like {xs: 4, sm: 6, md: 12}. Pass in the array [horizontal spacing, vertical spacing] to set two directions.
     */
    gutter: {
        type: PropType<number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue]>;
        default: number;
    };
    /**
     * @zh 水平对齐方式 (`justify-content`)
     * @en Horizontal alignment (`justify-content`)
     */
    justify: {
        type: PropType<"start" | "center" | "end" | "space-around" | "space-between">;
        default: string;
    };
    /**
     * @zh 竖直对齐方式 ( `align-items` )
     * @en Vertical alignment (`align-items`)
     */
    align: {
        type: PropType<"start" | "center" | "end" | "stretch">;
        default: string;
    };
    /**
     * @zh 开启这个选项`Row`和`Col`都会被当作div而不会附带任何Grid相关的类和样式
     * @en Enabling this option `Row` and `Col` will be treated as divs without any Grid-related classes and styles
     */
    div: {
        type: BooleanConstructor;
    };
    /**
     * @zh `Col` 是否支持换行
     * @en Whether `Col` can wrap onto multiple lines
     * @version 2.13.0
     */
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    div: boolean;
    wrap: boolean;
    justify: "center" | "space-around" | "space-between" | "end" | "start";
    align: "center" | "stretch" | "end" | "start";
    gutter: number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

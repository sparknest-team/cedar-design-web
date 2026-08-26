import { PropType } from 'vue';
import { DIRECTIONS } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<Array<{
            key: number;
            content: string;
        }>>;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    direction: {
        type: PropType<(typeof DIRECTIONS)[number]>;
        default: string;
    };
}>, {
    prefixCls: string;
    getStyle: (value: number) => import("vue").CSSProperties;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<Array<{
            key: number;
            content: string;
        }>>;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    direction: {
        type: PropType<(typeof DIRECTIONS)[number]>;
        default: string;
    };
}>> & Readonly<{}>, {
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

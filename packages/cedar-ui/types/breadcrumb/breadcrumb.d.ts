import type { BreadcrumbRoute } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    routes: {
        type: import("vue").PropType<BreadcrumbRoute[]>;
    };
    separator: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    routes: {
        type: import("vue").PropType<BreadcrumbRoute[]>;
    };
    separator: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>> & Readonly<{}>, {
    separator: string | number;
    maxCount: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

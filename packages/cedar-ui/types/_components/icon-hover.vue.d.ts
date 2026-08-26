import type { PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classes: typeof import("rattail").classes;
    n: (suffix?: string) => string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    prefix: {
        type: StringConstructor;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

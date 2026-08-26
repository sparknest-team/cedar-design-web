import { PropType } from 'vue';
import { ComponentSize } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import type { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    activeTabRef: {
        type: PropType<HTMLElement>;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
    };
    disabled: BooleanConstructor;
    animation: BooleanConstructor;
}>, {
    getInkStyle: () => void;
    cls: import("vue").ComputedRef<any[]>;
    style: import("vue").ComputedRef<CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    activeTabRef: {
        type: PropType<HTMLElement>;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
    };
    disabled: BooleanConstructor;
    animation: BooleanConstructor;
}>> & Readonly<{}>, {
    disabled: boolean;
    animation: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

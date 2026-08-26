import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
    from: {
        type: PropType<"start" | "end">;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 溢出数量改变时触发
     * @en Triggered when the overflow quantity changes
     * @param {number} value
     */
    change: (value: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
    from: {
        type: PropType<"start" | "end">;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
}>, {
    margin: number;
    from: "end" | "start";
    min: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

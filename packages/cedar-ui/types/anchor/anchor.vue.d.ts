import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    boundary: {
        type: PropType<("center" | "end" | "start" | "nearest") | number>;
        default: string;
        validator: (value: any) => boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: PropType<string | HTMLElement | Window>;
    };
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    n: (suffix?: string) => string;
    classes: typeof import("rattail").classes;
    cls: import("vue").ComputedRef<any[]>;
    anchorRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    lineSliderRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    linkBackgroundRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 用户点击链接时触发
     * @en Triggered when the user clicks on the link
     * @property { string | undefined } hash
     * @property {string} preHash
     */
    select: (hash: string | undefined, preHash: string) => true;
    /**
     * @zh 链接发生改变时触发
     * @en Triggered when the link changes
     * @property {string} hash
     */
    change: (hash: string) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    boundary: {
        type: PropType<("center" | "end" | "start" | "nearest") | number>;
        default: string;
        validator: (value: any) => boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: PropType<string | HTMLElement | Window>;
    };
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((hash: string) => any) | undefined;
    onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
}>, {
    boundary: number | "center" | "end" | "start" | "nearest";
    showLine: boolean;
    showBackground: boolean;
    changeHash: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

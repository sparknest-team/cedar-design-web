import { PropType } from 'vue';
import type { TransferItem } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"source" | "target">;
    };
    data: {
        type: PropType<TransferItem>;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    simple: BooleanConstructor;
    operationMode: {
        type: PropType<"remove" | "menu">;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"source" | "target">;
    };
    data: {
        type: PropType<TransferItem>;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    simple: BooleanConstructor;
    operationMode: {
        type: PropType<"remove" | "menu">;
        default: string;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    clearable: boolean;
    draggable: boolean;
    simple: boolean;
    operationMode: "menu" | "remove";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

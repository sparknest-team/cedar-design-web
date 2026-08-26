import type { PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
/**
 * 表单触发器外壳（与 Maple `FieldDecorator` 同名同职责）。
 * 负责 variant / size / disabled / error / focus、前后缀槽、边框层。
 * 内容由消费者放入 default slot。
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<"div" | "span">;
        default: string;
    };
    variant: {
        type: PropType<FormControlVariant>;
        default: string;
        validator: (value: unknown) => value is FormControlVariant;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: unknown) => value is ComponentSize;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    focused: BooleanConstructor;
    title: StringConstructor;
    onMousedown: PropType<(event: MouseEvent) => void>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<"div" | "span">;
        default: string;
    };
    variant: {
        type: PropType<FormControlVariant>;
        default: string;
        validator: (value: unknown) => value is FormControlVariant;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: unknown) => value is ComponentSize;
    };
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    focused: BooleanConstructor;
    title: StringConstructor;
    onMousedown: PropType<(event: MouseEvent) => void>;
}>> & Readonly<{}>, {
    error: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
    focused: boolean;
    tag: "div" | "span";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    dot: BooleanConstructor;
    max: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    showZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: {
        type: NumberConstructor;
        default: number;
    };
    offsetY: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    content: import("vue").PropType<number | string>;
    textColor: StringConstructor;
    mode: {
        type: import("vue").PropType<import("./props").BadgeMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeMode;
    };
    position: {
        type: import("vue").PropType<import("./props").BadgePosition>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgePosition;
    };
    inlinePosition: {
        type: import("vue").PropType<import("./props").BadgeInlinePosition>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeInlinePosition;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").BadgeVariant>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeVariant;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    dot: BooleanConstructor;
    max: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    showZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: {
        type: NumberConstructor;
        default: number;
    };
    offsetY: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    content: import("vue").PropType<number | string>;
    textColor: StringConstructor;
    mode: {
        type: import("vue").PropType<import("./props").BadgeMode>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeMode;
    };
    position: {
        type: import("vue").PropType<import("./props").BadgePosition>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgePosition;
    };
    inlinePosition: {
        type: import("vue").PropType<import("./props").BadgeInlinePosition>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeInlinePosition;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").BadgeVariant>;
        default: string;
        validator: (value: unknown) => value is import("./props").BadgeVariant;
    };
}>> & Readonly<{}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    mode: "inline" | "floating";
    position: "left" | "right" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
    show: boolean;
    dot: boolean;
    variant: "default" | "outline";
    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
    max: number;
    showZero: boolean;
    offsetX: number;
    offsetY: number;
    inlinePosition: "end" | "start";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

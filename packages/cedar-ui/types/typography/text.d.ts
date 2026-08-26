declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: import("vue").PropType<boolean | {
            color: string;
        }>;
        default: boolean;
    };
    underline: BooleanConstructor;
    delete: BooleanConstructor;
    code: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    editing: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultEditing: BooleanConstructor;
    editText: StringConstructor;
    copyable: BooleanConstructor;
    copyText: StringConstructor;
    copyDelay: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: import("vue").PropType<boolean | import("./types").EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: import("vue").PropType<Record<string, unknown>>;
    copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
}>, {
    component: import("vue").ComputedRef<"div" | "span">;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: import("vue").PropType<boolean | {
            color: string;
        }>;
        default: boolean;
    };
    underline: BooleanConstructor;
    delete: BooleanConstructor;
    code: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    editing: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultEditing: BooleanConstructor;
    editText: StringConstructor;
    copyable: BooleanConstructor;
    copyText: StringConstructor;
    copyDelay: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: import("vue").PropType<boolean | import("./types").EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: import("vue").PropType<Record<string, unknown>>;
    copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{}>, {
    delete: boolean;
    bold: boolean;
    code: boolean;
    mark: boolean | {
        color: string;
    };
    disabled: boolean;
    underline: boolean;
    ellipsis: boolean | import("./types").EllipsisConfig;
    editable: boolean;
    editing: boolean;
    defaultEditing: boolean;
    copyable: boolean;
    copyDelay: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

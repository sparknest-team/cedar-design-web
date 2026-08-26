declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    heading: {
        type: import("vue").PropType<import("./props").TypographyHeadingLevel>;
        default: number;
        validator: (value: unknown) => value is import("./props").TypographyHeadingLevel;
    };
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
    component: import("vue").ComputedRef<keyof HTMLElementTagNameMap>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    heading: {
        type: import("vue").PropType<import("./props").TypographyHeadingLevel>;
        default: number;
        validator: (value: unknown) => value is import("./props").TypographyHeadingLevel;
    };
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
    heading: 1 | 2 | 5 | 3 | 4 | 6;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import _Typography from './typography.vue';
import _TypographyParagraph from './paragraph';
import _TypographyTitle from './title';
import _TypographyText from './text';
import { typographyParagraphProps, typographyProps, typographyTextProps, typographyTitleProps } from './props';
export type { EllipsisConfig } from './types';
declare const Typography: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {
        classNames: string[];
    }, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
    classNames: string[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Paragraph: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        blockquote: BooleanConstructor;
        spacing: {
            type: import("vue").PropType<import("./props").TypographyParagraphSpacing>;
            default: string;
            validator: (value: unknown) => value is import("./props").TypographyParagraphSpacing;
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
        component: import("vue").ComputedRef<"div" | "blockquote">;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        blockquote: BooleanConstructor;
        spacing: {
            type: import("vue").PropType<import("./props").TypographyParagraphSpacing>;
            default: string;
            validator: (value: unknown) => value is import("./props").TypographyParagraphSpacing;
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
        blockquote: boolean;
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
        spacing: "default" | "close";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Title: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    Text: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>;
export type TypographyInstance = InstanceType<typeof _Typography>;
export type TypographyParagraphInstance = InstanceType<typeof _TypographyParagraph>;
export type TypographyTitleInstance = InstanceType<typeof _TypographyTitle>;
export type TypographyTextInstance = InstanceType<typeof _TypographyText>;
export { typographyParagraphProps, typographyProps, typographyTextProps, typographyTitleProps };
export type { TypographyBaseProps, TypographyHeadingLevel, TypographyParagraphProps, TypographyParagraphSpacing, TypographyProps, TypographyTextProps, TypographyTitleProps, } from './props';
export { Typography };
export { _TypographyParagraph as TypographyParagraph, _TypographyTitle as TypographyTitle, _TypographyText as TypographyText, };
export declare const _TypographyComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {
        classNames: string[];
    }, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
    classNames: string[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Paragraph: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        blockquote: BooleanConstructor;
        spacing: {
            type: import("vue").PropType<import("./props").TypographyParagraphSpacing>;
            default: string;
            validator: (value: unknown) => value is import("./props").TypographyParagraphSpacing;
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
        component: import("vue").ComputedRef<"div" | "blockquote">;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        blockquote: BooleanConstructor;
        spacing: {
            type: import("vue").PropType<import("./props").TypographyParagraphSpacing>;
            default: string;
            validator: (value: unknown) => value is import("./props").TypographyParagraphSpacing;
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
        blockquote: boolean;
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
        spacing: "default" | "close";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Title: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    Text: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>;
export default Typography;

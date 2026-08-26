import type { ExtractPropTypes, PropType } from 'vue';
import type { SemanticStatus } from '../_utils/constant';
import type { EllipsisConfig } from './types';
export declare const typographyProps: {};
export declare const typographyBaseProps: {
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: PropType<boolean | {
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
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: PropType<Record<string, unknown>>;
    copyTooltipProps: PropType<Record<string, unknown>>;
};
export declare const typographyBaseInternalProps: {
    component: {
        type: PropType<keyof HTMLElementTagNameMap>;
        required: boolean;
    };
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: PropType<boolean | {
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
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: PropType<Record<string, unknown>>;
    copyTooltipProps: PropType<Record<string, unknown>>;
};
export declare const typographyHeadingLevels: readonly [1, 2, 3, 4, 5, 6];
export declare const typographyParagraphSpacings: readonly ["default", "close"];
export type TypographyHeadingLevel = (typeof typographyHeadingLevels)[number];
export type TypographyParagraphSpacing = (typeof typographyParagraphSpacings)[number];
export declare const typographyTitleProps: {
    heading: {
        type: PropType<TypographyHeadingLevel>;
        default: number;
        validator: (value: unknown) => value is TypographyHeadingLevel;
    };
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: PropType<boolean | {
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
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: PropType<Record<string, unknown>>;
    copyTooltipProps: PropType<Record<string, unknown>>;
};
export declare const typographyTextProps: {
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: PropType<boolean | {
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
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: PropType<Record<string, unknown>>;
    copyTooltipProps: PropType<Record<string, unknown>>;
};
export declare const typographyParagraphProps: {
    blockquote: BooleanConstructor;
    spacing: {
        type: PropType<TypographyParagraphSpacing>;
        default: string;
        validator: (value: unknown) => value is TypographyParagraphSpacing;
    };
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: PropType<boolean | {
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
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: PropType<Record<string, unknown>>;
    copyTooltipProps: PropType<Record<string, unknown>>;
};
export type TypographyProps = ExtractPropTypes<typeof typographyProps>;
export type TypographyBaseProps = ExtractPropTypes<typeof typographyBaseProps>;
export type TypographyTitleProps = ExtractPropTypes<typeof typographyTitleProps>;
export type TypographyTextProps = ExtractPropTypes<typeof typographyTextProps>;
export type TypographyParagraphProps = ExtractPropTypes<typeof typographyParagraphProps>;

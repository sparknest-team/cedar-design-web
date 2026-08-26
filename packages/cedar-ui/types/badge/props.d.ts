import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, SemanticStatus } from '../_utils/constant';
export declare const badgeModes: readonly ["floating", "inline"];
export declare const badgePositions: readonly ["top-right", "top-left", "bottom-right", "bottom-left", "left", "right"];
export declare const badgeInlinePositions: readonly ["start", "end"];
export declare const badgeVariants: readonly ["default", "outline"];
export type BadgeMode = (typeof badgeModes)[number];
export type BadgePosition = (typeof badgePositions)[number];
export type BadgeInlinePosition = (typeof badgeInlinePositions)[number];
export type BadgeVariant = (typeof badgeVariants)[number];
export declare const badgeProps: {
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
    content: PropType<number | string>;
    textColor: StringConstructor;
    mode: {
        type: PropType<BadgeMode>;
        default: string;
        validator: (value: unknown) => value is BadgeMode;
    };
    position: {
        type: PropType<BadgePosition>;
        default: string;
        validator: (value: unknown) => value is BadgePosition;
    };
    inlinePosition: {
        type: PropType<BadgeInlinePosition>;
        default: string;
        validator: (value: unknown) => value is BadgeInlinePosition;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: unknown) => value is ComponentSize;
    };
    status: {
        type: PropType<SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is SemanticStatus;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: string;
        validator: (value: unknown) => value is BadgeVariant;
    };
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

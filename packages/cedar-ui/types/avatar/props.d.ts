import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { PopoverProps } from '../popover';
import type { AvatarShape, AvatarTriggerType, ObjectFit } from './types';
export declare const avatarShapes: readonly ["circle", "square"];
export declare const avatarTriggerTypes: readonly ["button", "mask"];
export declare const avatarObjectFits: readonly ["fill", "contain", "cover", "none", "scale-down"];
export declare const avatarProps: {
    shape: {
        type: PropType<AvatarShape>;
        default: string;
        validator: (value: unknown) => value is AvatarShape;
    };
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    size: NumberConstructor;
    autoFixFontSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerType: {
        type: PropType<AvatarTriggerType>;
        default: string;
        validator: (value: unknown) => value is AvatarTriggerType;
    };
    triggerIconStyle: PropType<CSSProperties>;
    objectFit: {
        type: PropType<ObjectFit>;
        validator: (value: unknown) => value is ObjectFit;
    };
};
export declare const avatarGroupProps: {
    shape: {
        type: PropType<AvatarShape>;
        default: string;
        validator: (value: unknown) => value is AvatarShape;
    };
    size: NumberConstructor;
    autoFixFontSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    zIndexAscend: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxStyle: PropType<CSSProperties>;
    maxPopoverProps: PropType<PopoverProps>;
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

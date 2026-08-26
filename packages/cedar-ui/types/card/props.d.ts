import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
export declare const cardVariants: readonly ["default", "outlined", "tonal"];
export declare const cardSizes: readonly ["sm", "md"];
export declare const cardDirections: readonly ["row", "column", "row-reverse"];
export type CardVariant = (typeof cardVariants)[number];
export type CardSize = (typeof cardSizes)[number];
export type CardDirection = (typeof cardDirections)[number];
export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export declare const cardProps: {
    variant: {
        type: PropType<CardVariant>;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: PropType<CardSize>;
    titleStyle: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    title: StringConstructor;
    subtitle: StringConstructor;
    description: StringConstructor;
    topDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<CardDirection>;
        default: string;
    };
    elevation: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
};
export type CardProps = ExtractPropTypes<typeof cardProps>;

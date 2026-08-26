import type { ExtractPropTypes, PropType } from 'vue';
export declare const skeletonProps: {
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const skeletonLineProps: {
    rows: {
        type: NumberConstructor;
        default: number;
    };
    widths: {
        type: PropType<Array<number | string>>;
        default: () => never[];
    };
    lineHeight: {
        type: NumberConstructor;
        default: number;
    };
    lineSpacing: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const skeletonShapeTypes: readonly ["square", "circle"];
export declare const skeletonShapeSizes: readonly ["sm", "md", "lg"];
export type SkeletonShapeType = (typeof skeletonShapeTypes)[number];
export type SkeletonShapeSize = (typeof skeletonShapeSizes)[number];
export declare const skeletonShapeProps: {
    shape: {
        type: PropType<SkeletonShapeType>;
        default: string;
        validator: (value: unknown) => value is SkeletonShapeType;
    };
    size: {
        type: PropType<SkeletonShapeSize>;
        default: string;
        validator: (value: unknown) => value is SkeletonShapeSize;
    };
};
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
export type SkeletonLineProps = ExtractPropTypes<typeof skeletonLineProps>;
export type SkeletonShapeProps = ExtractPropTypes<typeof skeletonShapeProps>;

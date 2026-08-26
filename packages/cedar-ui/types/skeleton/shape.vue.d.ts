declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./props").SkeletonShapeType>;
        default: string;
        validator: (value: unknown) => value is import("./props").SkeletonShapeType;
    };
    size: {
        type: import("vue").PropType<import("./props").SkeletonShapeSize>;
        default: string;
        validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
    };
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<string[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./props").SkeletonShapeType>;
        default: string;
        validator: (value: unknown) => value is import("./props").SkeletonShapeType;
    };
    size: {
        type: import("vue").PropType<import("./props").SkeletonShapeSize>;
        default: string;
        validator: (value: unknown) => value is import("./props").SkeletonShapeSize;
    };
}>> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    shape: "square" | "circle";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

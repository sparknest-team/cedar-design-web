declare const AvatarGroup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./types").AvatarShape>;
        default: string;
        validator: (value: unknown) => value is import("./types").AvatarShape;
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
    maxStyle: import("vue").PropType<import("vue").CSSProperties>;
    maxPopoverProps: import("vue").PropType<import("..").PopoverProps>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    shape: {
        type: import("vue").PropType<import("./types").AvatarShape>;
        default: string;
        validator: (value: unknown) => value is import("./types").AvatarShape;
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
    maxStyle: import("vue").PropType<import("vue").CSSProperties>;
    maxPopoverProps: import("vue").PropType<import("..").PopoverProps>;
}>> & Readonly<{}>, {
    shape: import("./types").AvatarShape;
    autoFixFontSize: boolean;
    maxCount: number;
    zIndexAscend: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default AvatarGroup;

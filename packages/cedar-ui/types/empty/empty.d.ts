declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    imageSize: {
        type: import("vue").PropType<import("./props").EmptyImageSize>;
        default: string;
    };
    inConfigProvider: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    imageSize: {
        type: import("vue").PropType<import("./props").EmptyImageSize>;
        default: string;
    };
    inConfigProvider: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    alt: string;
    imageSize: import("./props").EmptyImageSize;
    inConfigProvider: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

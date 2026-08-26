import { type SpaceSize } from './props';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<SpaceSize>;
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
    };
    direction: {
        type: import("vue").PropType<import("./props").SpaceDirection>;
        default: string;
    };
    justify: {
        type: import("vue").PropType<import("./props").SpaceJustify>;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("./props").SpaceAlign>;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<SpaceSize>;
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
    };
    direction: {
        type: import("vue").PropType<import("./props").SpaceDirection>;
        default: string;
    };
    justify: {
        type: import("vue").PropType<import("./props").SpaceJustify>;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("./props").SpaceAlign>;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: SpaceSize;
    block: boolean;
    wrap: boolean;
    justify: import("./props").SpaceJustify;
    direction: import("./props").SpaceDirection;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import { type StyleVars } from '../_utils/maple/elements';
import _StyleProvider from './style-provider.vue';
import { styleProviderProps } from './props';
export type { StyleVars };
declare function StyleProviderFn(styleVars: StyleVars | null): void;
declare const StyleProvider: import("../_utils/global-config").CedarComponentWithInstall<typeof StyleProviderFn & {
    Component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        styleVars: {
            type: import("vue").PropType<StyleVars>;
            default: () => {};
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        styleVars: {
            type: import("vue").PropType<StyleVars>;
            default: () => {};
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        tag: string;
        styleVars: StyleVars;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type StyleProviderInstance = InstanceType<typeof _StyleProvider>;
export type { StyleProviderProps } from './props';
export { StyleProvider, styleProviderProps };
export declare const _StyleProviderComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    styleVars: {
        type: import("vue").PropType<StyleVars>;
        default: () => {};
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    styleVars: {
        type: import("vue").PropType<StyleVars>;
        default: () => {};
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    tag: string;
    styleVars: StyleVars;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default StyleProvider;

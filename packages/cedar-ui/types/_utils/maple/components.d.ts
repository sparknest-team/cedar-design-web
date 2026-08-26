import { type Component, type ComponentPublicInstance, type ExtractPropTypes, type Plugin, type PropType, type Ref, type VNode } from 'vue';
import type { ZodSafeParseResult, ZodType } from 'zod';
export type ListenerProp<F> = F | F[];
export interface MountInstance {
    instance: ComponentPublicInstance;
    unmount: () => void;
}
export type ExtractPublicPropTypes<P> = Partial<ExtractPropTypes<P>>;
export declare function pickProps<T, U extends keyof T>(props: T, propsKey: U): T[U];
export declare function pickProps<T, U extends keyof T>(props: T, propsKey: U[]): Pick<T, U>;
export type ComponentWithInstall<T> = T & Plugin;
export declare function withInstall<T = Component>(component: Component, target?: T): ComponentWithInstall<T>;
export declare function withPropsDefaultsSetter(target: any, props: Record<string, any>): void;
export declare function mount(component: Component): MountInstance;
export declare function mountInstance(component: any, props?: Record<string, any>, eventListener?: Record<string, any>): {
    unmountInstance: () => void;
};
export declare function isZodRule(rule: unknown): rule is ZodType;
export declare function isZodResult(result: unknown): result is ZodSafeParseResult<any>;
export declare function useValidation(): {
    errorMessage: Ref<string, string>;
    validate: (ruleOrRules: any | any[], value: any, apis?: any) => Promise<boolean>;
    resetValidation: () => void;
    validateWithTrigger: <T>(validateTrigger: T[], trigger: T, rules: any, value: any, apis?: any) => Promise<void>;
};
export declare function useRouteListener(listener: () => void): void;
export declare function useTeleport(): {
    disabled: Ref<boolean, boolean>;
};
export declare const createNamespace: <C extends string>(name: C) => {
    name: string;
    n: <S extends string | undefined = undefined>(suffix?: S | undefined) => import("rattail").BEM<S, "mp", `mp-${C}`>;
    classes: typeof import("rattail").classes;
};
export declare function defineListenerProp<F>(fallback?: any): {
    type: PropType<F | F[]>;
    default: any;
};
export declare function formatElevation(elevation: number | boolean | string, defaultLevel?: number): string | null;
export declare const MaybeVNode: import("vue").DefineComponent<ExtractPropTypes<{
    is: {
        type: PropType<string | VNode>;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    is: {
        type: PropType<string | VNode>;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    tag: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;

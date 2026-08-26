import _DragContainer from './drag-container';
import { dragContainerProps } from './props';
declare const DragContainer: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dragOptions: {
            type: () => import("./props").DragOptions;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], import("vue").PublicProps, {
        modelValue: unknown[];
        dragOptions: import("./props").DragOptions;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dragOptions: {
            type: () => import("./props").DragOptions;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        modelValue: unknown[];
        dragOptions: import("./props").DragOptions;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dragOptions: {
        type: () => import("./props").DragOptions;
        default: () => {};
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], "click" | "change" | "update:modelValue", {
    modelValue: unknown[];
    dragOptions: import("./props").DragOptions;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type DragContainerInstance = InstanceType<typeof _DragContainer>;
export type { DragContainerProps, DragOptions } from './props';
export { dragContainerProps };
export { DragContainer };
export declare const _DragContainerComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dragOptions: {
            type: () => import("./props").DragOptions;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], import("vue").PublicProps, {
        modelValue: unknown[];
        dragOptions: import("./props").DragOptions;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dragOptions: {
            type: () => import("./props").DragOptions;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        modelValue: unknown[];
        dragOptions: import("./props").DragOptions;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dragOptions: {
        type: () => import("./props").DragOptions;
        default: () => {};
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], "click" | "change" | "update:modelValue", {
    modelValue: unknown[];
    dragOptions: import("./props").DragOptions;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default DragContainer;

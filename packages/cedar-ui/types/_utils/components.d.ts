import { type PropType, type ExtractPropTypes } from 'vue';
export type ExtractPublicPropTypes<P> = Partial<ExtractPropTypes<P>>;
export declare function defineListenerProp<F>(fallback?: any): {
    type: PropType<F | F[]>;
    default: any;
};
export declare const createNamespace: <C extends string>(name: C) => {
    name: string;
    n: <S extends string | undefined = undefined>(suffix?: S | undefined) => import("rattail").BEM<S, "c", `c-${C}`>;
    classes: typeof import("rattail").classes;
};

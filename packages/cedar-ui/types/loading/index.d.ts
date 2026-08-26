import { type Directive } from 'vue';
declare const INSTANCE_KEY: unique symbol;
export interface LoadingOptions {
    text?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    dot?: boolean;
    icon?: string;
    element?: string | HTMLElement;
    fullscreen?: boolean;
}
export interface ElementLoading extends HTMLElement {
    [INSTANCE_KEY]?: {
        instance: any;
        dom: HTMLElement;
        options: LoadingOptions;
    };
}
export declare const vLoading: Directive<ElementLoading, boolean | LoadingOptions>;
export {};

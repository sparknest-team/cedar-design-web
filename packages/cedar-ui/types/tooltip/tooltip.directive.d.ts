import { type Directive } from 'vue';
declare const TOOLTIP_KEY: unique symbol;
type Position = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb' | 'ellipsis';
export interface TooltipOptions {
    content: string;
    placement?: Position;
    [key: string]: any;
}
export interface ElementWithTooltip extends HTMLElement {
    [TOOLTIP_KEY]?: {
        instance: any;
        options: TooltipOptions;
        container: HTMLElement;
    };
}
export declare const vTooltip: Directive;
export {};

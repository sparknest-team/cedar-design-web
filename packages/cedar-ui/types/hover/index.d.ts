import { type Directive, type Plugin } from 'vue';
export type HoverValue = Record<string, any> | ((isHovering: boolean) => void);
export type HoverHTMLElement = HTMLElement & {
    _hover: {
        value: HoverValue;
        hovering: boolean;
        rawStyle: Record<string, any>;
    };
};
declare const Hover: Directive & Plugin;
export declare const _HoverComponent: import("vue").ObjectDirective<any, any, string, any> & import("vue").ObjectPlugin<any[]>;
export { Hover };
export default Hover;

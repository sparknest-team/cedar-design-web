import type { CSSProperties } from 'vue';
import type { TriggerPosition } from '../_utils/constant';
import type { TriggerPopupTranslate } from './types';
export interface ElementRect {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
}
interface ScrollRect {
    top: number;
    bottom: number;
    left: number;
    right: number;
    scrollTop: number;
    scrollBottom: number;
    scrollLeft: number;
    scrollRight: number;
    width: number;
    height: number;
}
export declare const getElementScrollRect: (element: HTMLElement, containerRect: DOMRect) => {
    top: number;
    bottom: number;
    left: number;
    right: number;
    scrollTop: number;
    scrollBottom: number;
    scrollLeft: number;
    scrollRight: number;
    width: number;
    height: number;
};
export declare const getTransformOrigin: (position: TriggerPosition) => string;
export declare const getPopupStyle: (position: TriggerPosition, containerRect: DOMRect, triggerRect: ScrollRect, popupRect: ScrollRect, { offset, translate, customStyle, autoFitPosition, }?: {
    offset?: number;
    translate?: TriggerPopupTranslate;
    customStyle?: CSSProperties;
    autoFitPosition?: boolean;
}) => {
    style: CSSProperties;
    position: TriggerPosition;
};
export declare const getArrowStyle: (position: TriggerPosition, triggerRect: ScrollRect, popupRect: ScrollRect, { customStyle, }: {
    customStyle?: CSSProperties;
}) => CSSProperties;
export declare const isScrollElement: (element: HTMLElement) => boolean;
export declare const getScrollElements: (container: HTMLElement | undefined) => HTMLElement[];
export {};

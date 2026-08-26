export type StyleVars = Record<string, string>;
export declare function getLeft(element: HTMLElement): number;
export declare function getTop(element: HTMLElement): number;
export declare function getTranslateY(el: HTMLElement): number;
export declare function getParentScroller(el: HTMLElement): HTMLElement | Window;
export declare function getAllParentScroller(el: HTMLElement): Array<HTMLElement | Window>;
export declare function getTarget(target: string | HTMLElement, componentName: string): HTMLElement;
export declare function getViewportSize(): {
    vw: number;
    vh: number;
    vMin: number;
    vMax: number;
};
export declare const isRem: (value: unknown) => value is string;
export declare const isEm: (value: unknown) => value is string;
export declare const isPx: (value: unknown) => value is string | number;
export declare const isPercent: (value: unknown) => value is string;
export declare const isVw: (value: unknown) => value is string;
export declare const isVh: (value: unknown) => value is string;
export declare const isVMin: (value: unknown) => value is string;
export declare const isVMax: (value: unknown) => value is string;
export declare const isCalc: (value: unknown) => value is string;
export declare const isVar: (value: unknown) => value is string;
export declare const toPxNum: (value: unknown) => number;
export declare const toSizeUnit: (value: unknown) => string | undefined;
export declare const multiplySizeUnit: (value: unknown, quantity?: number) => string | undefined;
interface ScrollToOptions {
    top?: number;
    left?: number;
    duration?: number;
    animation: (progress: number) => number;
}
export declare function scrollTo(element: HTMLElement | Window, { top, left, duration, animation }: ScrollToOptions): Promise<void>;
export declare function formatStyleVars(styleVars: StyleVars | null): StyleVars;
export declare function padStartFlex(style: string | undefined): string | undefined;
export declare function isDisplayNoneElement(element: HTMLElement): boolean;
export declare function focusChildElementByKey(referenceElement: HTMLElement, parentElement: HTMLElement, key: 'ArrowDown' | 'ArrowUp', beforeFocus?: (activeElement: HTMLElement, nextActiveElement: HTMLElement, isActiveInReferenceElements: boolean) => boolean): void;
export {};

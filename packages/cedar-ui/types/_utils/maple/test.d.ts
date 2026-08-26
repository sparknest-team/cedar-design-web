import { type ComponentPublicInstance } from 'vue';
import { type DOMWrapper, type VueWrapper } from '@vue/test-utils';
export declare const delay: (time: number) => Promise<unknown>;
export declare function getTouch(el: Element | Window, x: number, y: number): {
    identifier: number;
    target: Window | Element;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    radiusX: number;
    radiusY: number;
    rotationAngle: number;
    force: number;
};
export declare function mockDoubleRaf(): {
    mockRestore(): void;
};
export declare function trigger(wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window, eventName: string, x?: number, y?: number, offsetX?: number, offsetY?: number): Promise<void>;
export declare function triggerKeyboard(wrapper: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | Element | Window, eventName: string, eventInitDict?: Record<string, any>): Promise<void>;
export declare function mockOffset({ offsetWidth, offsetHeight, clientWidth, clientHeight, offsetLeft, offsetTop, }?: {
    offsetWidth?: number;
    offsetHeight?: number;
    clientWidth?: number;
    clientHeight?: number;
    offsetLeft?: number;
    offsetTop?: number;
}): void;
export declare function mockImageNaturalSize(naturalWidth: number, naturalHeight: number): void;
export declare function triggerDrag(el: VueWrapper<ComponentPublicInstance<any, any, any>> | DOMWrapper<Element> | HTMLElement, x?: number, y?: number): Promise<void>;
export declare function mockTranslate(): {
    mockRestore(): void;
};
export declare function mockFileReader(url: string): {
    mockRestore(): void;
};
export declare function mockStubs(): {
    mockRestore(): void;
};
export declare function mockConsole(method: keyof Console, fn?: any): {
    mockRestore(): void;
};
export declare function mockScrollTo(): void;
export declare function mockScrollIntoView(): void;
export declare function mockUserAgent(userAgent: string): {
    restore(): void;
};
export declare function mockCanvas(): void;

import type { ImagePreviewProps } from '../types.unified';
type TeleportTarget = string | Element | false | HTMLElement | undefined;
export declare function resolvePreviewImages(source: {
    images?: string[];
    src?: string;
}): string[];
export declare function resolvePreviewOpen(source: {
    open?: boolean;
    defaultOpen?: boolean;
}, localOpen?: boolean): boolean;
export declare function resolvePreviewCurrent(source: {
    current?: number | string;
    defaultCurrent?: number;
}, localCurrent?: number): number;
export declare function resolveClosable(source: {
    closable?: boolean;
}, fallback: boolean): boolean;
export declare function resolveMaskClosable(source: {
    maskClosable?: boolean;
}, fallback: boolean): boolean;
export declare function resolveLoop(source: {
    loop?: boolean;
}, fallback: boolean): boolean;
export declare function resolvePopupContainer(source: {
    popupContainer?: TeleportTarget;
}): TeleportTarget;
export declare function resolveEscToClose(source: {
    escToClose?: boolean;
}, fallback?: boolean): boolean;
export declare function resolveActionsLayout(source: {
    actionsLayout?: string[];
}, fallback?: string[]): string[];
export declare function mergePreviewProps<T extends Partial<ImagePreviewProps>>(platformDefaults: Partial<ImagePreviewProps>, previewProps?: Partial<ImagePreviewProps>, directProps?: Partial<ImagePreviewProps>): T;
export {};

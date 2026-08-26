import type { CSSProperties, ExtractPropTypes, PropType, StyleValue } from 'vue';
import type { ButtonProps } from '../button';
import type { DialogAction, DialogBeforeCloseRefs, DialogType } from './types';
export declare const dialogProps: {
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClass: StringConstructor;
    maskStyle: {
        type: PropType<CSSProperties>;
    };
    title: StringConstructor;
    message: StringConstructor;
    type: {
        type: PropType<DialogType>;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleAlign: {
        type: PropType<"start" | "center">;
        default: string;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    unmountOnClose: BooleanConstructor;
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonText: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmButtonProps: {
        type: PropType<ButtonProps>;
    };
    cancelButtonProps: {
        type: PropType<ButtonProps>;
    };
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: PropType<string | HTMLElement | false>;
        default: string;
    };
    dialogClass: {
        type: PropType<string | any[]>;
    };
    dialogStyle: {
        type: PropType<CSSProperties>;
    };
    beforeClose: {
        type: PropType<(action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void>;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
    };
    dialogAnimationName: {
        type: StringConstructor;
        default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
    };
    bodyClass: {
        type: PropType<string | any[]>;
    };
    bodyStyle: {
        type: PropType<StyleValue>;
    };
    hideTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    zIndex: NumberConstructor;
};
export type DialogProps = Partial<ExtractPropTypes<typeof dialogProps>>;

import type { PropType, CSSProperties } from 'vue';
import type { TriggerEvent, TriggerPosition } from '../_utils/constant';
import { TriggerPopupTranslate } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<TriggerEvent | TriggerEvent[]>;
        default: string;
    };
    placement: {
        type: PropType<TriggerPosition>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOffset: {
        type: NumberConstructor;
        default: number;
    };
    popupTranslate: {
        type: PropType<TriggerPopupTranslate>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupHoverStay: {
        type: BooleanConstructor;
        default: boolean;
    };
    blurToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickOutsideToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    unmountOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    contentStyle: {
        type: PropType<CSSProperties>;
    };
    arrowClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    arrowStyle: {
        type: PropType<CSSProperties>;
    };
    popupStyle: {
        type: PropType<CSSProperties>;
    };
    animationName: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: PropType<number | {
            enter: number;
            leave: number;
        }>;
    };
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    focusDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoFitPopupWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitPopupMinWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFixPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitTransformOrigin: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    openedClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    autoFitPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToCloseDistance: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:open': (visible: boolean) => true;
    /**
     * @zh 弹出框显示状态改变时触发
     * @en Emitted when the status of the popup changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true;
    /**
     * @zh 弹出框显示后（动画结束）触发
     * @en Triggered after the trigger is shown (the animation ends)
     * @version 2.18.0
     */
    show: () => true;
    /**
     * @zh 弹出框隐藏后（动画结束）触发
     * @en Triggered after the popup is hidden (the animation ends)
     * @version 2.18.0
     */
    hide: () => true;
    /**
     * @zh 点击弹出框外部时触发
     * @en Triggered when clicking outside the popup
     */
    clickOutside: (event: Event) => true;
    resize: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<TriggerEvent | TriggerEvent[]>;
        default: string;
    };
    placement: {
        type: PropType<TriggerPosition>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupOffset: {
        type: NumberConstructor;
        default: number;
    };
    popupTranslate: {
        type: PropType<TriggerPopupTranslate>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupHoverStay: {
        type: BooleanConstructor;
        default: boolean;
    };
    blurToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickOutsideToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    unmountOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    contentStyle: {
        type: PropType<CSSProperties>;
    };
    arrowClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    arrowStyle: {
        type: PropType<CSSProperties>;
    };
    popupStyle: {
        type: PropType<CSSProperties>;
    };
    animationName: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: PropType<number | {
            enter: number;
            leave: number;
        }>;
    };
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    focusDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoFitPopupWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitPopupMinWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFixPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFitTransformOrigin: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    openedClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    autoFitPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToCloseDistance: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onResize?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
    onShow?: (() => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
    onClickOutside?: ((event: Event) => any) | undefined;
}>, {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    disabled: boolean;
    open: boolean;
    autoFitPosition: boolean;
    animationName: string;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    defaultOpen: boolean;
    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
    popupOffset: number;
    showArrow: boolean;
    alignPoint: boolean;
    popupHoverStay: boolean;
    blurToClose: boolean;
    clickToClose: boolean;
    clickOutsideToClose: boolean;
    unmountOnClose: boolean;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    focusDelay: number;
    autoFitPopupWidth: boolean;
    autoFitPopupMinWidth: boolean;
    autoFixPosition: boolean;
    autoFitTransformOrigin: boolean;
    hideEmpty: boolean;
    renderToBody: boolean;
    preventFocus: boolean;
    scrollToCloseDistance: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

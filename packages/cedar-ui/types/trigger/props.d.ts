import type { PropType, CSSProperties } from 'vue';
import type { TriggerEvent, TriggerPosition } from '../_utils/constant';
import { TriggerPopupTranslate } from './types';
export declare const triggerProps: {
    /**
     * @zh 弹出框是否可见
     * @en Whether the popup is visible
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click','focus','contextMenu'
     */
    trigger: {
        type: PropType<TriggerEvent | TriggerEvent[]>;
        default: string;
    };
    /**
     * @zh 弹出位置
     * @en Popup placement
     * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
     */
    placement: {
        type: PropType<TriggerPosition>;
        default: string;
    };
    /**
     * @zh 触发器是否禁用
     * @en Whether the trigger is disabled
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 弹出框的偏移量（弹出框距离触发器的偏移距离）
     * @en The offset of the popup (the offset distance of the popup from the trigger)
     */
    popupOffset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 弹出框的移动距离
     * @en The moving distance of the popup
     */
    popupTranslate: {
        type: PropType<TriggerPopupTranslate>;
    };
    /**
     * @zh 弹出框是否显示箭头
     * @en Whether the popup shows an arrow
     */
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 弹出框是否跟随鼠标
     * @en Whether the popup follows the mouse
     */
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在移出触发器，并移入弹出框时保持弹出框显示
     * @en Whether to keep the popup displayed when the trigger is moved out and moved into the popup
     */
    popupHoverStay: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在触发器失去焦点时关闭弹出框
     * @en Whether to close the popup when the trigger loses focus
     */
    blurToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在点击触发器时关闭弹出框
     * @en Whether to close the popup when the trigger is clicked
     */
    clickToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在点击外部区域时关闭弹出框
     * @en Whether to close the popup when clicking on the outer area
     */
    clickOutsideToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在关闭时卸载弹出框节点
     * @en Whether to uninstall the popup node when closing
     */
    unmountOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 弹出框内容的类名
     * @en The class name of the popup content
     */
    contentClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    /**
     * @zh 弹出框内容的样式
     * @en The style of the popup content
     */
    contentStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 弹出框箭头的类名
     * @en The class name of the popup arrow
     */
    arrowClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    /**
     * @zh 弹出框箭头的样式
     * @en The style of the popup arrow
     */
    arrowStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 弹出框的样式
     * @en The style of the popup
     */
    popupStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 弹出动画的name
     * @en The name of the popup animation
     */
    animationName: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 弹出动画的持续时间
     * @en The duration of the popup animation
     */
    duration: {
        type: PropType<number | {
            enter: number;
            leave: number;
        }>;
    };
    /**
     * @zh mouseenter事件延时触发的时间（毫秒）
     * @en Delay trigger time of mouseenter event (ms)
     */
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh mouseleave事件延时触发的时间（毫秒）
     * @en Delay trigger time of mouseleave event (ms)
     */
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh focus事件延时触发的时间（毫秒）
     * @en Delay trigger time of focus event (ms)
     */
    focusDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 是否将弹出框宽度设置为触发器宽度
     * @en Whether to set the width of the popup to the width of the trigger
     */
    autoFitPopupWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否将弹出框的最小宽度设置为触发器宽度
     * @en Whether to set the minimum width of the popup to the trigger width
     */
    autoFitPopupMinWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 当触发器的尺寸发生变化时，是否重新计算弹出框位置
     * @en When the size of the trigger changes, whether to recalculate the position of the popup
     */
    autoFixPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 是否在容器滚动时更新弹出框的位置
     * @us Whether to update the position of the popup when the container is scrolled
     */
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
    /**
     * @zh 是否自动调整弹出框位置，以适应窗口大小
     * @en Whether to automatically adjust the position of the popup to fit the window size
     */
    autoFitPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否挂载在 `body` 元素下
     * @en Whether to mount under the `body` element
     */
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否阻止弹出层中的元素点击时获取焦点
     * @en Whether to prevent elements in the pop-up layer from gaining focus when clicked
     */
    preventFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在滚动时关闭弹出框
     * @en Whether to close the popover when scrolling
     * @version 2.46.0
     */
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 滚动阈值，当滚动距离超过该值时触发关闭
     * @en Scroll threshold, trigger close when the scroll distance exceeds this value
     */
    scrollToCloseDistance: {
        type: NumberConstructor;
        default: number;
    };
};

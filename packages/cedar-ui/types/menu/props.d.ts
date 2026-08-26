import { type PropType } from 'vue';
import { TriggerEvent } from '../_utils/constant';
import { MenuPosition, MenuValue } from './types';
export declare const menuProps: {
    /**
     * @zh 选中的值
     * @en Selected value
     * @vModel
     */
    modelValue: {
        type: PropType<MenuValue>;
    };
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
     * @values 'top','tl','tr','bottom','bl','br'
     */
    placement: {
        type: PropType<MenuPosition>;
        default: string;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 弹出框最大高度
     * @en Maximum height of the popup
     */
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /**
     * @zh 是否在用户选择菜单项后隐藏弹出框
     * @en Whether to hide popup when the user selects a menu item
     */
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
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
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 弹出层是否跟随鼠标
     * @en Whether the popup follows the mouse
     */
    alignPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
};

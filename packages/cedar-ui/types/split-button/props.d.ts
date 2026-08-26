import type { ExtractPropTypes, PropType } from 'vue';
import { type ButtonProps } from '../button';
export declare const splitButtonProps: {
    /** 菜单是否打开 */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /** 菜单默认是否打开 */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否禁用整个分裂按钮 */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 主按钮属性 */
    buttonProps: PropType<Partial<ButtonProps>>;
    /** 菜单触发按钮属性 */
    triggerButtonProps: PropType<Partial<ButtonProps>>;
    /** 按钮组主题色 */
    status: {
        type: PropType<import("..").SemanticStatus>;
        default: string;
    };
    /** 按钮组尺寸 */
    size: {
        type: PropType<import("..").ComponentSize>;
        default: string;
    };
    /** 按钮组变体 */
    variant: {
        type: PropType<import("../button").ButtonVariant>;
        default: string;
    };
    /** 自定义背景色 */
    color: {
        type: StringConstructor;
        default: string;
    };
    /** 自定义文字色 */
    textColor: {
        type: StringConstructor;
        default: string;
    };
    /** 按钮组海拔阴影 */
    elevation: {
        type: PropType<boolean | number>;
        default: boolean;
    };
    /** 主按钮是否自动进入加载状态 */
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 菜单触发方式 */
    trigger: {
        type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
        default: string;
    };
    /** 菜单弹出位置 */
    placement: {
        type: PropType<import("..").MenuPosition>;
        default: string;
    };
    /** 菜单挂载容器 */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /** 菜单最大高度 */
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /** 选择菜单项后是否关闭菜单 */
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type SplitButtonProps = ExtractPropTypes<typeof splitButtonProps>;

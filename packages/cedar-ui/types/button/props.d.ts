import type { ExtractPropTypes, PropType } from 'vue';
import { SemanticStatus, ComponentSize } from '../_utils/constant';
export type ButtonVariant = 'default' | 'text' | 'outline' | 'link' | 'tonal';
export declare const buttonVariants: readonly ["default", "text", "outline", "link", "tonal"];
export declare const buttonHtmlTypes: readonly ["button", "submit", "reset"];
export declare const buttonComponents: readonly ["button", "a"];
export declare const buttonProps: {
    /**
     * 按钮主题色
     */
    status: {
        type: PropType<SemanticStatus>;
        validator: (value: unknown) => value is SemanticStatus;
    };
    /**
     * 变体
     */
    variant: {
        type: PropType<ButtonVariant>;
        validator: (value: unknown) => value is ButtonVariant;
    };
    /**
     * 是否为圆形按钮
     */
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 原生按钮类型： button | submit | reset
     */
    htmlType: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    /**
     * 组件标签
     */
    component: {
        type: PropType<"button" | "a">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    /**
     * 是否为块级元素
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 按钮尺寸
     */
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    /**
     * 是否为加载中状态
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 加载类型
     */
    loadingType: {
        type: PropType<"default" | "fill" | "line">;
        default: string;
    };
    /**
     * 是否自动loading，方便处理异步任务
     */
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否为图标容器
     */
    iconContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否为禁用状态
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * 是否使用水波纹
     */
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否可以被聚焦
     */
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否自动聚焦
     */
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 文字颜色
     */
    textColor: {
        type: StringConstructor;
    };
    /**
     * 背景颜色
     */
    color: {
        type: StringConstructor;
    };
    /**
     * 海拔高度可选值为 true、false 和 0-24 的等级
     */
    elevation: {
        type: PropType<boolean | number>;
        default: boolean;
    };
    /**
     * 是否为堆叠状态
     */
    stacked: {
        type: BooleanConstructor;
        default: undefined;
    };
    onClick: {
        type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
    onTouchstart: {
        type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare const buttonGroupProps: {
    /**
     * 按钮组尺寸
     */
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    /**
     * 按钮组主题色
     */
    status: {
        type: PropType<SemanticStatus>;
        default: string;
    };
    /**
     * 按钮组变体
     */
    variant: {
        type: PropType<ButtonVariant>;
        default: string;
    };
    /**
     * 按钮组背景色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 按钮组文字颜色
     */
    textColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 是否为堆叠状态
     */
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否为禁用
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否为垂直排列
     */
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
   * 海拔高度可选值为 true、false 和 0-24 的等级
   */
    elevation: {
        type: PropType<boolean | number>;
        default: boolean;
    };
};
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;

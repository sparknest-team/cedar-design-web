import type { ExtractPropTypes, PropType } from 'vue';
/**
 * Alert 类型（状态色系，与 `Status` 对齐；瞬时消息类用 `MessageType` 含 `error`）
 */
export type AlertType = 'info' | 'success' | 'warning' | 'danger' | 'default';
/**
 * Alert 视觉变体
 * - tonal：浅色填充
 * - outlined：透明描边
 * - standard：浅色填充 + 描边（默认）
 */
export type AlertVariant = 'tonal' | 'outlined' | 'standard';
export declare const alertProps: {
    /**
     * 警告提示的类型
     */
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    /**
     * 视觉变体
     */
    variant: {
        type: PropType<AlertVariant>;
        default: string;
    };
    /**
     * 警告提示的标题
     */
    title: StringConstructor;
    /**
     * 警告提示的内容；与默认 slot 同时存在时 slot 优先
     */
    message: StringConstructor;
    /**
     * 是否展示图标
     */
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否展示关闭按钮
     */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否作为顶部公告使用（去除边框和圆角）
     */
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 内容是否居中显示
     */
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 自定义背景色，仅覆盖 background-color
     */
    color: StringConstructor;
    /**
     * 投影层级
     */
    elevation: {
        type: PropType<boolean | string | number>;
        default: boolean;
    };
};
export type AlertProps = ExtractPropTypes<typeof alertProps>;

import type { ExtractPropTypes, PropType } from 'vue';
import type { CedarLang } from '../locale/types';
import type { ComponentSize } from '../_utils/constant';
export declare const cedarThemes: readonly ["light", "dark"];
export type CedarTheme = (typeof cedarThemes)[number];
export declare const configProviderProps: {
    /**
     * @zh 组件类名前缀
     * @en Component classname prefix
     */
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 配置语言包
     * @en Configure language pack
     */
    locale: {
        type: PropType<CedarLang>;
    };
    /**
     * @zh 大小
     * @en ComponentSize
     * @version 2.14.0
     */
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 是否全局生效
     * @en Is global effect
     * @version 2.25.0
     */
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在容器滚动时更新弹出框的位置
     * @us Whether to update the position of the popup when the container is scrolled
     * @version 2.25.0
     */
    updateAtScroll: {
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
     * @zh 是否交换时间
     * @en Whether to exchange time
     * @version 2.48.0
     */
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 视图的表现形式是从右开始向左结束
     * @en View starts from the right and ends on the left
     */
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 全局主题：`light` 亮色，`dark` 暗色
     * @en Global theme: `light` or `dark`
     */
    theme: {
        type: PropType<CedarTheme>;
        validator: (value: CedarTheme) => boolean;
    };
};
export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>;

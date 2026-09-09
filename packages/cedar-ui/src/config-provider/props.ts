import type { ExtractPropTypes, PropType } from 'vue'
import type { CedarLang } from '../locale/types'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'

export const cedarThemes = ['light', 'dark'] as const
export type CedarTheme = (typeof cedarThemes)[number]

export const configProviderProps = {
    /**
     * @zh 组件类名前缀
     * @en Component classname prefix
     */
    prefixCls: {
      type: String,
      default: 'c',
    },
    /**
     * @zh 配置语言包
     * @en Configure language pack
     */
    locale: {
      type: Object as PropType<CedarLang>,
    },
    /**
     * @zh 大小
     * @en ComponentSize
     * @version 2.14.0
     */
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    /**
     * @zh 是否全局生效
     * @en Is global effect
     * @version 2.25.0
     */
    global: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在容器滚动时更新弹出框的位置
     * @us Whether to update the position of the popup when the container is scrolled
     * @version 2.25.0
     */
    updateAtScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在滚动时关闭弹出框
     * @en Whether to close the popover when scrolling
     * @version 2.46.0
     */
    scrollToClose: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否交换时间
     * @en Whether to exchange time
     * @version 2.48.0
     */
    exchangeTime: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 视图的表现形式是从右开始向左结束
     * @en View starts from the right and ends on the left
     */
    rtl: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 全局主题：`light` 亮色，`dark` 暗色
     * @en Global theme: `light` or `dark`
     */
    theme: {
      type: String as PropType<CedarTheme>,
      validator: (value: CedarTheme) => cedarThemes.includes(value),
    },
} 

export type ConfigProviderProps = import("vue").ExtractPublicPropTypes<typeof configProviderProps>

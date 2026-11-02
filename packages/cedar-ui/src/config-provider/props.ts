import type { ReadingDirection } from '@cedar-design/use'
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
     */
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    /**
     * @zh 是否全局生效
     * @en Is global effect
     */
    global: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在容器滚动时更新弹出框的位置
     * @us Whether to update the position of the popup when the container is scrolled
     */
    updateAtScroll: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在滚动时关闭弹出框
     * @en Whether to close the popover when scrolling
     */
    scrollToClose: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 阅读方向；未指定时继承父作用域或原生 DOM dir
     * @en Reading direction; inherits the parent scope or native DOM dir when omitted
     */
    dir: { type: String as PropType<ReadingDirection> },
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

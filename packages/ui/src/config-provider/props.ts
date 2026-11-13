import type { ReadingDirection } from '@cedar-design/use-vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { CedarLang } from '../locale/types'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'

export const configProviderProps = {
    /**
     * @zh 组件类名前缀；省略继承父配置，根回退 c，需要匹配构建样式
     * @en Class prefix; inherits the parent when omitted, with c at the root and matching built styles required
     */
    prefixCls: {
      type: String,
      default: undefined,
    },
    /**
     * @zh 完整语言包；省略继承父配置，否则使用当前全局语言
     * @en Complete language pack; inherits the parent when omitted, otherwise uses the current global locale
     */
    locale: {
      type: Object as PropType<CedarLang>,
    },
    /**
     * @zh 后代默认尺寸；省略继承父配置，组件自身 size 优先
     * @en Default descendant size; inherits the parent when omitted, with component size taking precedence
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
     * @zh 容器滚动时更新弹层的位置；省略继承父配置，根回退 false
     * @en Update popups on container scrolling; inherits the parent when omitted and falls back to false at the root
     */
    updateAtScroll: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 滚动时关闭弹层；省略继承父配置，根回退 false
     * @en Close popups on scrolling; inherits the parent when omitted and falls back to false at the root
     */
    scrollToClose: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 阅读方向；未指定时继承父作用域或原生 DOM dir
     * @en Reading direction; inherits the parent scope or native DOM dir when omitted
     */
    dir: { type: String as PropType<ReadingDirection> },

} 

export type ConfigProviderProps = import('../_utils/public-props').CompatiblePublicProps<typeof configProviderProps>

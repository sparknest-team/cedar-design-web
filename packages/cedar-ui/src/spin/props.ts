import { cloneVNode, computed, defineComponent, inject } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import DotLoading from './dot-loading'
import { getFirstComponent } from '../_utils/vue-utils'
import { configProviderInjectionKey } from '../config-provider/context'

export const spinProps = {
    /**
     * @zh 尺寸
     * @en Size
     */
    size: {
      type: Number,
    },
    /**
     * @zh 是否为加载中状态（仅在容器模式下生效）
     * @en Whether it is loading state (Only effective in container mode)
     */
    loading: Boolean,
    /**
     * @zh 是否使用点类型的动画
     * @en Whether to use dot type animation
     */
    dot: Boolean,
    /**
     * @zh 提示内容
     * @en Prompt content
     */
    tip: String,
    /**
     * @zh 是否隐藏图标
     * @en Whether to hide the icon
     */
    hideIcon: {
      type: Boolean,
      default: false,
    },
  } 

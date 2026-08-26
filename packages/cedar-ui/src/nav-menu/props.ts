import { computed, defineComponent, inject, PropType, provide, toRefs } from 'vue'
import { SiderInjectionKey } from '../layout/context'
import { LevelInjectionKey, NavMenuInjectionKey } from './context'
import BaseMenu from './base-menu.vue'
import OverflowWrap from './overflow-wrap'
import { createNamespace } from '../_utils/global-config'

export const navMenuProps = {
    /** 菜单风格 */
    theme: {
      type: String as PropType<'light' | 'dark'>,
    },
    mode: {
      type: String as PropType<'vertical' | 'horizontal' | 'pop' | 'popButton'>,
      default: 'vertical',
    },
  } 

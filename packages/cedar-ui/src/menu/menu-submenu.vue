<template>
  <Trigger
    :open="computedOpen"
    :trigger="trigger"
    :placement="placement"
    :disabled="disabled"
    :popup-offset="4"
    @open-change="handleOpenChange"
  >
    <menu-option v-bind="optionProps" :active="computedOpen" uninject-context>
      <slot />
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template #suffix>
        <slot name="suffix">
          <IconRight />
        </slot>
      </template>
    </menu-option>
    <template #content>
      <menu-panel :class="`${prefixCls}-submenu`">
        <slot name="content" />
        <template v-if="$slots.footer" #footer>
          <slot name="footer" />
        </template>
      </menu-panel>
    </template>
  </Trigger>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { defineComponent, PropType, toRefs } from 'vue'
import Trigger from '../trigger'
import MenuPanel from './menu-panel.vue'
import MenuOption from './menu-option.vue'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
import { getPrefixCls } from '../_utils/global-config'
import { useTrigger } from '../_hooks/use-trigger'

export default defineComponent({
  name: createNamespace("menu-submenu").name,
  components: {
    Trigger,
    MenuPanel,
    MenuOption,
    IconRight,
  },
  props: {
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click'
     * @version 2.10.0
     */
    trigger: {
      type: [String, Array] as PropType<'hover' | 'click' | ('hover' | 'click')[]>,
      default: 'click',
    },
    /**
     * @zh 弹出位置
     * @en Popup placement
     * @values 'rt','lt'
     * @version 2.10.0
     */
    placement: {
      type: String as PropType<'rt' | 'lt'>,
      default: 'rt',
    },
    /**
     * @zh 弹出框是否可见
     * @en Whether the popup is visible
     * @vModel
     */
    open: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 自定义选项属性
     * @en Custom option properties
     * @version 2.29.0
     */
    optionProps: {
      type: Object,
    },
  },
  emits: {
    'update:open': (visible: boolean) => true,
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @property {boolean} visible
     */
    openChange: (visible: boolean) => true,
  },
  /**
   * @zh 子菜单内容
   * @en Submenu content
   * @slot content
   */
  /**
   * @zh 页脚
   * @en Footer
   * @slot footer
   * @version 2.10.0
   */
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   * @version 2.29.0
   */
  setup(props, { emit }) {
    const { defaultOpen, open } = toRefs(props)
    const prefixCls = getPrefixCls('menu')

    const { computedOpen, handleOpenChange } = useTrigger({
      defaultOpen,
      open,
      emit,
    })

    return {
      prefixCls,
      computedOpen,
      handleOpenChange,
    }
  },
})
</script>

<template>
  <Trigger
    :open="computedOpen"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :trigger="trigger"
    :placement="placement"
    :popup-offset="4"
    :popup-container="popupContainer"
    :auto-fit-popup-width="autoFitPopupWidth"
    :disabled="disabled"
    :align-point="alignPoint"
    :opened-class="`${prefixCls}-open`"
    @open-change="handleOpenChange"
  >
    <slot />
    <template #content>
      <MenuPanel>
        <slot name="content" />
        <template v-if="$slots.footer" #footer>
          <slot name="footer" />
        </template>
      </MenuPanel>
    </template>
  </Trigger>
</template>

<script lang="ts">
import { defineComponent, provide, toRefs } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Trigger from '../trigger'
import MenuPanel from './menu-panel.vue'
import { useTrigger } from '../_hooks/use-trigger'
import { menuInjectionKey } from './context'
import { menuProps } from './props'
import { MenuValue } from './types'

export default defineComponent({
  name: createNamespace('menu').name,
  components: {
    Trigger,
    MenuPanel,
  },
  props: menuProps,
  emits: {
    'update:modelValue': (value: MenuValue) => true,
    'update:open': (visible: boolean) => true,
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true,
    /**
     * @zh 用户选择菜单项时触发；受控模式下是否产生选中态取决于 modelValue 是否更新
     * @en Triggered when the user selects a menu item. In controlled mode, whether the selected state changes depends on whether modelValue is updated.
     * @param {string | number | Record<string, any> | undefined } value
     * @param {{ value: any, label?: string | number, disabled?: boolean }} option
     * @param {Event} ev
     */
    select: (value: MenuValue, option: Record<string, any>, ev: Event) => true,
  },
  /**
   * @zh 触发元素
   * @en Trigger
   * @slot default
   */
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  /**
   * @zh 页脚
   * @en Footer
   * @slot footer
   */
  setup(props, { emit }) {
    const { modelValue, defaultOpen, open, popupMaxHeight } = toRefs(props)
    const prefixCls = getPrefixCls('menu')

    const { computedOpen, handleOpenChange } = useTrigger({
      defaultOpen,
      open,
      emit,
    })

    const handleOptionClick = (value: MenuValue, option: Record<string, any>, ev: Event) => {
      emit('update:modelValue', value)
      emit('select', value, option, ev)
      props.hideOnSelect && handleOpenChange(false)
    }

    provide(menuInjectionKey, {
      popupMaxHeight,
      modelValue,
      onOptionClick: handleOptionClick,
    })

    return {
      prefixCls,
      computedOpen,
      handleOpenChange,
    }
  },
})
</script>

<template>
  <div :class="`${prefixCls}-shortcuts`">
    <Button v-if="showNowButton" size="xs" @click="() => onNowClick()">
      {{ datePickerT('datePicker.now') }}
    </Button>
    <Button
      v-for="(item, index) in shortcuts"
      :key="index"
      size="xs"
      @click="() => onItemClick(item)"
      @mouseenter="() => onItemMouseEnter(item)"
      @mouseleave="() => onItemMouseLeave(item)"
    >
      <RenderFunction v-if="isFunction(item.label)" :render-func="item.label" />
      <template v-else>
        {{ item.label }}
      </template>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import RenderFunction from '../../../_components/render-function'
import { createNamespace } from '../../../_utils/global-config'
import { isFunction } from '../../../_utils/is'
import type { WithNativeListeners } from '../../../_utils/native-listener-types'
import ButtonComponent from '../../../button/base'
import useInjectDatePickerTransform from '../hooks/use-inject-datepicker-transform'
import { ShortcutType } from '../types'

const Button = ButtonComponent as WithNativeListeners<typeof ButtonComponent, 'onMouseenter' | 'onMouseleave'>

export interface ShortcutsProps {
  prefixCls: string
  shortcuts: ShortcutType[]
}

export default defineComponent({
  name: createNamespace('date-picker-shortcuts').name,
  components: {
    Button,
    RenderFunction,
  },
  props: {
    prefixCls: {
      type: String,
      required: true,
    },
    shortcuts: {
      type: Array as PropType<ShortcutsProps['shortcuts']>,
      default: () => [],
    },
    showNowButton: {
      type: Boolean,
    },
  },
  emits: ['item-click', 'item-mouse-enter', 'item-mouse-leave', 'now-click'],
  setup(props: ShortcutsProps, { emit }) {
    const datePickerT = useInjectDatePickerTransform()
    return {
      datePickerT,
      onItemClick: (item: ShortcutType) => {
        emit('item-click', item)
      },
      onItemMouseEnter: (item: ShortcutType) => {
        emit('item-mouse-enter', item)
      },
      onItemMouseLeave: (item: ShortcutType) => {
        emit('item-mouse-leave', item)
      },
      onNowClick: () => {
        emit('now-click')
      },
      isFunction,
    }
  },
})
</script>

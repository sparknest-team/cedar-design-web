import { computed, defineComponent, toRefs, type SlotsType } from 'vue'
import type { TypographyContentSlots } from './types'
import { typographyEmits } from './emits'
import Base from './base'
import { createNamespace } from '../_utils/global-config'
import { typographyTextProps } from './props'

const { name } = createNamespace('typography-text')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyTextProps,
  emits: typographyEmits,
  slots: Object as SlotsType<TypographyContentSlots>,
  setup(props, { emit }) {
    const { ellipsis } = toRefs(props)
    const component = computed(() => (ellipsis?.value ? 'div' : 'span'))

    return {
      forwardEvents: {
        'onUpdate:editing': (value: boolean) => emit('update:editing', value),
        'onUpdate:editText': (value: string) => emit('update:editText', value),
        onEditStart: () => emit('edit-start'),
        onEditEnd: () => emit('edit-end'),
        onChange: (value: string) => emit('change', value),
        onCopy: (value: string) => emit('copy', value),
        onEllipsis: (value: boolean) => emit('ellipsis', value),
        onExpand: (value: boolean) => emit('expand', value),
      },
      component,
    }
  },
  render() {
    const { ellipsis, component } = this

    return (
      <Base
        {...this.$attrs}
        {...this.$props}
        component={component}
        {...this.forwardEvents}
        v-slots={this.$slots}
      />
    )
  },
})

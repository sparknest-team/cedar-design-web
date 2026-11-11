import { computed, defineComponent, toRefs, type SlotsType } from 'vue'
import type { TypographyContentSlots } from './types'
import { typographyEmits } from './emits'
import Base from './base'
import { createNamespace } from '../_utils/global-config'
import { typographyTitleProps } from './props'
import { omit } from '../_utils/omit'
const { name, n, classes } = createNamespace('typography-title')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyTitleProps,
  emits: typographyEmits,
  slots: Object as SlotsType<TypographyContentSlots>,
  setup(props, { emit }) {
    const { heading } = toRefs(props)
    const component = computed(() => `h${[1, 2, 3, 4, 5, 6].includes(heading.value) ? heading.value : 1}` as keyof HTMLElementTagNameMap)

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
    const { component } = this
    const { ellipsis } = this
    return (
      <Base
        class={classes([
          (typeof ellipsis === 'object' &&
            ((ellipsis as any).rows === 1 || typeof (ellipsis as any).rows === 'undefined')) ||
            typeof (ellipsis as any)?.rows === 'undefined',
          n('--break-word'),
        ])}
        {...this.$attrs}
        {...omit(this.$props, ['heading'])}
        component={component}
        {...this.forwardEvents}
        v-slots={this.$slots}
      />
    )
  },
})

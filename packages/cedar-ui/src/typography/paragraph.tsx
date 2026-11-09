import { computed, defineComponent, toRefs, type SlotsType } from 'vue'
import type { TypographyContentSlots } from './types'
import { typographyEmits } from './emits'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Base from './base'
import { typographyParagraphProps } from './props'
import { omit } from '../_utils/omit'

const { name } = createNamespace('typography-paragraph')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyParagraphProps,
  emits: typographyEmits,
  slots: Object as SlotsType<TypographyContentSlots>,
  setup(props, { emit }) {
    const { blockquote, spacing } = toRefs(props)
    const prefixCls = getPrefixCls('typography')
    const component = computed(() => (blockquote?.value ? 'blockquote' : 'div'))
    const classNames = computed(() => [
      {
        [`${prefixCls}-spacing-close`]: spacing?.value === 'close',
      },
    ])

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
      classNames,
    }
  },
  render() {
    const { component, classNames } = this
    return (
      <Base
        class={classNames}
        {...this.$attrs}
        {...omit(this.$props, ['blockquote', 'spacing'])}
        component={component}
        {...this.forwardEvents}
        v-slots={this.$slots}
      />
    )
  },
})

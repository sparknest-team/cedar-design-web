import { computed, defineComponent, toRefs } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Base from './base'
import { typographyParagraphProps } from './props'
import { omit } from '../_utils/omit'

const { name } = createNamespace('typography-paragraph')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyParagraphProps,
  setup(props) {
    const { blockquote, spacing } = toRefs(props)
    const prefixCls = getPrefixCls('typography')
    const component = computed(() => (blockquote?.value ? 'blockquote' : 'div'))
    const classNames = computed(() => [
      {
        [`${prefixCls}-spacing-close`]: spacing?.value === 'close',
      },
    ])

    return {
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
        v-slots={this.$slots}
      />
    )
  },
})

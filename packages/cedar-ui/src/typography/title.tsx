import { computed, defineComponent, toRefs } from 'vue'
import Base from './base'
import { createNamespace } from '../_utils/global-config'
import { typographyTitleProps } from './props'
import { omit } from '../_utils/omit'
const { name, n, classes } = createNamespace('typography-title')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyTitleProps,
  setup(props) {
    const { heading } = toRefs(props)
    const component = computed(() => `h${heading?.value}` as keyof HTMLElementTagNameMap)

    return {
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
        v-slots={this.$slots}
      />
    )
  },
})

import { computed, defineComponent, toRefs } from 'vue'
import Base from './base'
import { createNamespace } from '../_utils/global-config'
import { typographyTextProps } from './props'

const { name } = createNamespace('typography-text')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: typographyTextProps,
  setup(props) {
    const { ellipsis } = toRefs(props)
    const component = computed(() => (ellipsis?.value ? 'div' : 'span'))

    return {
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
        v-slots={this.$slots}
      />
    )
  },
})

import { computed, defineComponent, PropType, toRefs } from 'vue'
import Base from './base'
import { createNamespace } from '../_utils/global-config'
const { name, n, classes } = createNamespace('typography-title')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    /**
     * @zh 标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6`
     * @en Heading level, equivalent to `h1` `h2` `h3` `h4` `h5` `h6`
     */
    heading: {
      type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
      default: 1,
    },
  },
  setup(props) {
    const { heading } = toRefs(props)
    const component = computed(() => `h${heading?.value}` as keyof HTMLElementTagNameMap)

    return {
      component,
    }
  },
  render() {
    const { component } = this
    const { ellipsis } = this.$attrs
    return (
      <Base
        class={classes([
          (typeof ellipsis === 'object' &&
            ((ellipsis as any).rows === 1 || typeof (ellipsis as any).rows === 'undefined')) ||
            typeof (ellipsis as any)?.rows === 'undefined',
          n('--break-word'),
        ])}
        {...this.$attrs}
        component={component}
        v-slots={this.$slots}
      />
    )
  },
})

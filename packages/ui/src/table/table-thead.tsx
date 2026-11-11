import { createVNode, defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('thead')

export default defineComponent({
  name,
  setup(_, { slots }) {
    return () => {
      return createVNode(slots.thead?.()[0] ?? 'thead', null, {
        default: slots.default,
      })
    }
  },
})

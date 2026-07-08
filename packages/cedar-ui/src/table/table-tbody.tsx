import { createVNode, defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('tbody')

export default defineComponent({
  name,
  setup(_, { slots }) {
    return () => {
      return createVNode(slots.tbody?.()[0] ?? 'tbody', null, {
        default: slots.default,
      })
    }
  },
})

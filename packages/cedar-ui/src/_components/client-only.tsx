import { defineComponent, onMounted, ref } from 'vue'
import { createNamespace } from '../_utils/global-config'


const { name } = createNamespace('client-only')

export default defineComponent({
  name,
  setup(_, { slots }) {
    const mounted = ref(false)
    onMounted(() => (mounted.value = true))

    return () => {
      if (mounted.value) {
        return slots.default?.()
      }
      return null
    }
  },
})

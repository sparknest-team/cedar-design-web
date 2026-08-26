<script lang="ts">
import { defineComponent, h } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { formatStyleVars } from '../_utils/maple/elements'
import { styleProviderProps } from './props'

const { name, n } = createNamespace('style-provider')

export default defineComponent({
  name,
  props: styleProviderProps,
  setup(props, { slots }) {
    return () =>
      h(
        props.tag,
        {
          class: n(),
          style: formatStyleVars(props.styleVars),
        },
        slots.default?.(),
      )
  },
})
</script>

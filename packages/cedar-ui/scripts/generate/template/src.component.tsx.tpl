import { defineComponent, useAttrs, useSlots } from 'vue'
// import { <%= camelCaseName %>Props } from './props'

export default defineComponent({
  name: '<%= pascalCaseName %>',

  // props: <%= camelCaseName %>Props,

  // emits: ['click'],

  setup() {
    const attrs = useAttrs()
    const slots = useSlots()

    return () => <div {...attrs} v-slots={slots}></div>
  },
})

<template>
  <div :class="classes(n(), n(`--size-${size}`), n(`--variant-${variant}`))">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, provide, reactive, toRefs } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { ComponentSize } from '../_utils/constant'
import { fieldInjectionKey } from './context'

export default defineComponent({
  name: createNamespace('input-group').name,
  props: {
    size: {
      type: String as PropType<ComponentSize>,
      default: 'md',
    },
    variant: {
      type: String as PropType<'filled' | 'outlined' | 'standard'>,
      default: 'filled',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { size, variant, disabled } = toRefs(props)
    const { n, classes } = createNamespace('input-group')
    provide(
      fieldInjectionKey,
      reactive({
        size,
        disabled,
        variant,  
      }),
    )

    return {
      n,
      classes,
    }
  },
})
</script>

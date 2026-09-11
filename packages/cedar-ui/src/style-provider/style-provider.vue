<script setup lang="ts">
import { createNamespace } from '../_utils/global-config'
import { formatStyleVars } from '../_utils/maple/elements'
import { styleProviderProps } from './props'

defineOptions({ name: createNamespace('style-provider').name })
const { n } = createNamespace('style-provider')
const props = defineProps(styleProviderProps)
</script>

<template>
  <component :is="props.tag" :class="n()" :style="formatStyleVars(props.styleVars)">
    <slot />
  </component>
</template>

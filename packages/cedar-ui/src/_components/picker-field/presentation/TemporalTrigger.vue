<template>
  <Trigger v-bind="$attrs" trigger="click" :close-on-click-reference="false"
    :prevent-focus="true" :popup-offset="4" @open-change="$emit('open-change', $event)">
    <slot />
    <template #content><slot name="content" /></template>
  </Trigger>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Trigger from '../../../trigger'
import { createNamespace } from '../../../_utils/global-config'

/** Desktop positioning only; values, focus and transactions stay in the field owner. */
export default defineComponent({
  name: createNamespace('temporal-field-trigger').name,
  inheritAttrs: false,
  components: { Trigger },
  emits: { 'open-change': (value: boolean) => true },
})
</script>


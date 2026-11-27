<template>
  <Trigger
    v-bind="$attrs"
    :popup-class="popupClass"
    :open="open"
    :disabled="disabled"
    :placement="placement"
    trigger="click"
    :close-on-click-reference="false"
    :prevent-focus="true"
    :popup-offset="4"
    @open-change="$emit('open-change', $event)"
  >
    <slot />
    <template #content><slot name="content" /></template>
  </Trigger>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../../../_utils/global-config'
import Trigger, { triggerProps } from '../../../trigger'

/** Desktop positioning only; values, focus and transactions stay in the field owner. */
export default defineComponent({
  name: createNamespace('temporal-field-trigger').name,
  inheritAttrs: false,
  components: { Trigger },
  props: {
    popupClass: triggerProps.popupClass,
    open: triggerProps.open,
    disabled: triggerProps.disabled,
    placement: triggerProps.placement,
  },
  emits: { 'open-change': (value: boolean) => true },
})
</script>

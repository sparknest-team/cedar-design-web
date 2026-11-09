<template>
  <button
    type="button"
    v-bind="$attrs"
    :class="[n(), { [n('--disabled')]: disabled }]"
    :title="name"
    :aria-label="actionLabel()"
    :disabled="disabled"
    data-image-preview-interactive
    @mousedown.prevent
  >
    <span :class="n('content')"><slot /></span>
  </button>
</template>

<script lang="ts">
import type { SlotsType } from 'vue'
import type { ImagePreviewActionSlots } from './api'
import { defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'

const { name, n } = createNamespace('image-preview-toolbar-action')

export default defineComponent({
  name,
  slots: Object as SlotsType<ImagePreviewActionSlots>,
  inheritAttrs: false,
  props: {
    name: String,
    disabled: Boolean,
  },
  setup(props, { attrs }) {
    const actionLabel = () => typeof attrs['aria-label'] === 'string' ? attrs['aria-label'] : props.name
    return { n, actionLabel }
  },
})
</script>

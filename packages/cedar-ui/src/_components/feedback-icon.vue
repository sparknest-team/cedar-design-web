<template>
  <span :class="cls">
    <icon-loading v-if="type === 'validating'" />
    <icon-check-circle-fill v-else-if="type === 'success'" />
    <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
    <icon-close-circle-fill v-else-if="type === 'error'" />
  </span>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent } from 'vue'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { IconCheckCircleFill } from '@cedarjs/icons-vue/icon-check-circle-fill'
import { IconExclamationCircleFill } from '@cedarjs/icons-vue/icon-exclamation-circle-fill'
import { IconCloseCircleFill } from '@cedarjs/icons-vue/icon-close-circle-fill'
import { getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: createNamespace("feedback-icon").name,
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
  },
  props: {
    type: {
      type: String,
    },
  },
  setup(props) {
    const prefixCls = getPrefixCls('feedback-icon')

    const cls = computed(() => [prefixCls, `${prefixCls}-status-${props.type}`])

    return {
      cls,
    }
  },
})
</script>

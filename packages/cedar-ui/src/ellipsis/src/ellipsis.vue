<template>
  <div>
    <Tooltip v-bind="tooltipProps">
      <div
        :class="[
          bem(),
          {
            'cedar-ellipsis--line': !lineClamp,
            'cedar-ellipsis--clamp': lineClamp,
            'cedar-ellipsis--cursor': expandTrigger,
            'cedar-ellipsis--expand': expanding,
          },
        ]"
        cedar-ellipsis-cover
        :style="rootStyles"
        @click="handleClick"
      >
        <span>
          <slot />
        </span>
      </div>

      <template #content>
        <slot name="tooltip-content">
          <span v-if="tooltipProps?.content">{{ tooltipProps?.content }}</span>
          <slot />
        </slot>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type CSSProperties, type PropType } from 'vue'
import Tooltip, { tooltipProps as _tooltipProps } from '../../tooltip'
import { ellipsisProps } from './props'
import { type ExtractPublicPropTypes } from '../../_utils/components'
import { createNamespace } from '../../_utils/create'

defineOptions({
  name: 'Ellipsis',
})

const [name, bem] = createNamespace('ellipsis')

const emit = defineEmits(['update:expand'])

const props = defineProps(ellipsisProps)

// 是否展开
const expanding = ref(props.expand)

watch(
  () => props.expand,
  (value) => {
    expanding.value = value
  }
)

const rootStyles = computed<CSSProperties>(() => (props.lineClamp ? { '-webkit-line-clamp': props.lineClamp } : {}))

const tooltipProps = computed<ExtractPublicPropTypes<typeof _tooltipProps>>(() => {
  if (props.tooltip === false) {
    return {
      popupVisible: false,
    }
  }
  if (props.tooltip === true) {
    return {}
  }
  return { ...props.tooltip }
})

const handleClick = () => {
  if (!props.expandTrigger) {
    return
  }
  expanding.value = !expanding.value
  emit('update:expand', expanding.value)
}
</script>

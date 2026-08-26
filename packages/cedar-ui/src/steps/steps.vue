<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, provide, reactive, ref, toRefs } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { StepData, StepStatus } from './types'
import { stepsInjectionKey } from './context'
import { stepsProps } from './props'

export default defineComponent({
  name: createNamespace("steps").name,
  props: stepsProps,
  emits: {
    change: (_step: number, _event: Event) => true,
    'update:current': (_step: number) => true,
  },
  setup(props, { emit }) {
    const { type, showLine } = toRefs(props)
    const prefixCls = getPrefixCls('steps')
    const _current = ref(props.defaultCurrent)
    const computedCurrent = computed(() => props.current ?? _current.value)

    const direction = computed(() => (['navigation', 'arrow'].includes(props.type) ? 'horizontal' : props.direction))

    const labelPlacement = computed(() => {
      if (props.type === 'dot') {
        return direction.value === 'vertical' ? 'horizontal' : 'vertical'
      }
      if (props.type === 'navigation') {
        return 'horizontal'
      }
      return props.labelPlacement
    })

    const getStatus = (step: number): StepStatus => {
      if (step < computedCurrent.value) {
        return 'finish'
      }
      if (step > computedCurrent.value) {
        return 'wait'
      }
      return props.status
    }

    const handleClick = (step: number, e: Event) => {
      if (!props.changeable) return
      _current.value = step
      emit('update:current', step)
      emit('change', step, e)
    }

    const stepMap = reactive(new Map<number, StepData>())
    const errorSteps = computed(() =>
      Array.from(stepMap.values())
        .filter((item) => item.status === 'error')
        .map((item) => item.step),
    )

    const addItem = (step: number, data: StepData) => {
      stepMap.set(step, data)
    }

    const removeItem = (step: number) => {
      stepMap.delete(step)
    }

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${direction.value}`,
      `${prefixCls}-label-${labelPlacement.value}`,
      `${prefixCls}-mode-${type.value}`,
      {
        [`${prefixCls}-changeable`]: props.changeable,
        [`${prefixCls}-size-small`]: props.small && props.type !== 'dot',
        [`${prefixCls}-show-line`]: showLine.value,
      },
    ])

    provide(
      stepsInjectionKey,
      reactive({
        type,
        direction,
        labelPlacement,
        showLine,
        current: computedCurrent,
        errorSteps,
        getStatus,
        addItem,
        removeItem,
        onClick: handleClick,
        parentCls: prefixCls,
      }),
    )

    return {
      cls,
    }
  },
})
</script>

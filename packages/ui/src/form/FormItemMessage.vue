<template>
  <div v-if="error.length > 0" :id="errorId" data-form-errors>
    <template v-for="item of keyedErrors" :key="item.key">
      <component :is="Transition" name="form-blink" appear>
        <div role="alert" :class="[prefixCls]">
          {{ item.message }}
        </div>
      </component>
    </template>
  </div>
  <component :is="Transition" v-else-if="help || $slots.help" name="form-blink" appear>
    <div :id="errorId" :class="[prefixCls, `${prefixCls}-help`]">
      <slot name="help">
        {{ help }}
      </slot>
    </div>
  </component>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, Transition } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { useFormErrorDescription } from './error-description'

export default defineComponent({
  name: createNamespace("form-item-message").name,
  props: {
    error: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    help: String,
  },
  setup(props) {
    const keyedErrors = computed(() => {
      const occurrences = new Map<string, number>()
      return props.error.map((message) => {
        const occurrence = occurrences.get(message) ?? 0
        occurrences.set(message, occurrence + 1)
        return { key: JSON.stringify([message, occurrence]), message }
      })
    })
    const prefixCls = getPrefixCls('form-item-message')

    return {
      Transition,
      keyedErrors,
      prefixCls,
      errorId: useFormErrorDescription().errorId,
    }
  },
})
</script>

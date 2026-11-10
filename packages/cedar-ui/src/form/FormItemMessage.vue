<template>
  <div v-if="error.length > 0" :id="errorId" data-form-errors>
    <template v-for="item of error" :key="item">
      <component :is="Transition" name="form-blink" appear>
        <div role="alert" :class="[prefixCls]">
          {{ item }}
        </div>
      </component>
    </template>
  </div>
  <component :is="Transition" v-else-if="help || $slots.help" name="form-blink" appear>
    <div :class="[prefixCls, `${prefixCls}-help`]">
      <slot name="help">
        {{ help }}
      </slot>
    </div>
  </component>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { defineComponent, PropType, Transition } from 'vue'
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
  setup() {
    const prefixCls = getPrefixCls('form-item-message')

    return {
      Transition,
      prefixCls,
      errorId: useFormErrorDescription().errorId,
    }
  },
})
</script>

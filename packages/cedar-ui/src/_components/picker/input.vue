<template>
  <FieldDecorator
    :class="classNames"
    :size="mergedSize"
    :disabled="mergedDisabled"
    :error="mergedError"
    :focused="focused"
    :variant="variant"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>

    <div :class="`${prefixCls}-input`">
      <input
        ref="refInput"
        :disabled="mergedDisabled"
        :placeholder="placeholder"
        :class="`${prefixCls}-start-time`"
        :value="displayValue"
        v-bind="readonly ? { readonly: true } : {}"
        @keydown.enter="onPressEnter"
        @input="onChange"
        @blur="onBlur"
      />
    </div>

    <template #suffix>
      <IconHover
        v-if="clearable && !mergedDisabled && displayValue"
        prefix="c-field-decorator"
        :class="`${prefixCls}-clear-icon`"
        @click="onClear"
      >
        <IconClose />
      </IconHover>
      <span :class="`${prefixCls}-suffix-icon`">
        <slot name="suffix-icon" />
      </span>
      <FeedbackIcon v-if="feedback" :type="feedback" />
    </template>
  </FieldDecorator>
</template>

<script lang="ts">
import { createNamespace } from '../../_utils/global-config'
import type { Dayjs } from 'dayjs'
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { getPrefixCls } from '../../_utils/global-config'
import { isDayjs, isFunction } from '../../_utils/is'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import IconHover from '../IconHover.vue'
import { useFormItem } from '../../_hooks/use-form-item'
import { useSize } from '../../_hooks/use-size'
import FeedbackIcon from '../FeedbackIcon.vue'
import FieldDecorator from '../../field-decorator'
import type { FormControlVariant } from '../../_utils/form-control'
import { formControlVariants } from '../../_utils/form-control'

export default defineComponent({
  name: createNamespace('date-input').name,
  components: {
    IconHover,
    IconClose,
    FeedbackIcon,
    FieldDecorator,
  },
  props: {
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    },
    variant: {
      type: String as PropType<FormControlVariant>,
      default: 'filled',
      validator: (value: unknown): value is FormControlVariant =>
        formControlVariants.includes(value as FormControlVariant),
    },
    focused: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    inputValue: {
      type: String,
    },
    value: {
      type: Object as PropType<Dayjs>,
    },
    format: {
      type: [String, Function] as PropType<string | ((value: Dayjs) => string)>,
      required: true,
    },
  },
  emits: ['clear', 'press-enter', 'change', 'blur'],
  setup(props, { emit }) {
    const { error, focused, disabled, size, value, format, inputValue } = toRefs(props)
    const { mergedSize: _mergedSize, mergedDisabled, mergedError, feedback } = useFormItem({
      size,
      disabled,
      error,
    })
    const { mergedSize } = useSize(_mergedSize)

    const prefixCls = getPrefixCls('picker')

    const classNames = computed(() => [prefixCls])

    const displayValue = computed(() => {
      if (inputValue?.value) return inputValue?.value
      if (value?.value && isDayjs(value.value)) {
        return isFunction(format.value) ? format.value(value.value) : value.value.format(format.value)
      }
      return undefined
    })

    const refInput = ref<HTMLInputElement>()

    return {
      feedback,
      prefixCls,
      classNames,
      displayValue,
      mergedDisabled,
      mergedError,
      mergedSize,
      focused,
      refInput,
      onPressEnter() {
        emit('press-enter')
      },
      onChange(e: Event) {
        emit('change', e)
      },
      onClear(e: Event) {
        emit('clear', e)
      },
      onBlur(e: Event) {
        emit('blur', e)
      },
    }
  },
  methods: {
    focus() {
      this.refInput && this.refInput.focus && this.refInput.focus()
    },
    blur() {
      this.refInput && this.refInput.blur && this.refInput.blur()
    },
  },
})
</script>

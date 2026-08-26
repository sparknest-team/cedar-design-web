<template>
  <button
    type="button"
    role="switch"
    :aria-checked="computedCheck"
    :aria-busy="computedLoading || undefined"
    :class="cls"
    :style="buttonStyle"
    :disabled="mergedDisabled || computedLoading"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span :class="`${prefixCls}-handle`">
      <span :class="`${prefixCls}-handle-icon`">
        <icon-loading v-if="computedLoading" />
        <template v-else>
          <slot v-if="computedCheck" name="checked-icon" />
          <slot v-else name="unchecked-icon" />
        </template>
      </span>
    </span>
    <!--  prettier-ignore  -->
    <template
      v-if="
        variant !== 'line' &&
        size !== 'sm' &&
        ($slots.checked || checkedText || $slots.unchecked || uncheckedText)
      "
    >
      <span :class="`${prefixCls}-text-holder`">
        <slot v-if="computedCheck" name="checked">{{ checkedText }}</slot>
        <slot v-else name="unchecked">{{ uncheckedText }}</slot>
      </span>
      <span :class="`${prefixCls}-text`">
        <slot v-if="computedCheck" name="checked">{{ checkedText }}</slot>
        <slot v-else name="unchecked">{{ uncheckedText }}</slot>
      </span>
    </template>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs, watch } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { useFormItem } from '../_hooks/use-form-item'
import { useSize } from '../_hooks/use-size'
import { isFunction, isNull, isUndefined } from '../_utils/is'
import { switchProps } from './props'

export default defineComponent({
  name: createNamespace('switch').name,
  components: {
    IconLoading,
  },
  props: switchProps,
  emits: {
    'update:modelValue': (value: boolean | string | number) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { boolean | string | number } value
     * @param {Event} ev
     */
    change: (value: boolean | string | number, ev: Event) => true,
    /**
     * @zh 组件获得焦点时触发
     * @en Triggered when the component gets focus
     * @property {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 组件失去焦点时触发
     * @en Fired when the component loses focus
     * @property {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
  },
  /**
   * @zh 打开状态时的文案（`type='line'`和`size='sm'`时不生效）
   * @en Copywriting when opened (not effective when `type='line'` and `size='sm'`)
   * @slot checked
   */
  /**
   * @zh 关闭状态时的文案（`type='line'`和`size='sm'`时不生效）
   * @en Copywriting when closed (not effective when `type='line'` and `size='sm'`)
   * @slot unchecked
   */
  /**
   * @zh 打开状态时，按钮上的图标
   * @en The icon on the button when opened
   * @slot checked-icon
   */
  /**
   * @zh 关闭状态时，按钮上的图标
   * @en The icon on the button when closed
   * @slot unchecked-icon
   */
  setup(props, { emit }) {
    const { disabled, size, modelValue } = toRefs(props)
    const prefixCls = getPrefixCls('switch')
    const { mergedSize: configSize } = useSize(size)
    const { mergedDisabled, mergedSize, eventHandlers } = useFormItem({
      disabled,
      size: configSize,
    })

    const _checked = ref(props.defaultChecked ? props.checkedValue : props.uncheckedValue)
    const computedCheck = computed<boolean>(() => (props.modelValue ?? _checked.value) === props.checkedValue)
    const _loading = ref(false)
    const computedLoading = computed(() => _loading.value || props.loading)

    const handleChange = (checked: boolean, ev: Event) => {
      _checked.value = checked ? props.checkedValue : props.uncheckedValue
      emit('update:modelValue', _checked.value)
      emit('change', _checked.value, ev)
      eventHandlers.value?.onChange?.(ev)
    }

    const handleClick = async (ev: Event) => {
      if (computedLoading.value || mergedDisabled.value) {
        return
      }
      const checked = !computedCheck.value
      const checkedValue = checked ? props.checkedValue : props.uncheckedValue
      const shouldChange = props.beforeChange

      if (isFunction(shouldChange)) {
        _loading.value = true
        try {
          const result = await shouldChange(checkedValue)
          if (result ?? true) {
            handleChange(checked, ev)
          }
        } finally {
          _loading.value = false
        }
      } else {
        handleChange(checked, ev)
      }
    }

    const handleFocus = (ev: FocusEvent) => {
      emit('focus', ev)
      eventHandlers.value?.onFocus?.(ev)
    }

    const handleBlur = (ev: FocusEvent) => {
      emit('blur', ev)
      eventHandlers.value?.onBlur?.(ev)
    }

    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = props.uncheckedValue
      }
    })

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}--variant-${props.variant}`,
      {
        [`${prefixCls}-sm`]: mergedSize.value === 'sm' || mergedSize.value === 'xs',
        [`${prefixCls}-checked`]: computedCheck.value,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
        [`${prefixCls}-loading`]: computedLoading.value,
        [`${prefixCls}-custom-color`]: props.variant === 'line' && (props.checkedColor || props.uncheckedColor),
      },
    ])

    const buttonStyle = computed(() => {
      if (computedCheck.value && props.checkedColor) {
        return props.variant === 'line'
          ? { '--c-switch-custom-color': props.checkedColor }
          : { backgroundColor: props.checkedColor }
      }
      if (!computedCheck.value && props.uncheckedColor) {
        return props.variant === 'line'
          ? { '--c-switch-custom-color': props.uncheckedColor }
          : { backgroundColor: props.uncheckedColor }
      }
      return undefined
    })

    return {
      prefixCls,
      cls,
      mergedDisabled,
      buttonStyle,
      computedCheck,
      computedLoading,
      handleClick,
      handleFocus,
      handleBlur,
    }
  },
})
</script>

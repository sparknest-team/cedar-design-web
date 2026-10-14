<template>
  <slot v-if="noStyle" />
  <Row
    v-else
    :class="[
      cls,
      {
        [`${prefixCls}-has-help`]: Boolean($slots.help ?? help),
      },
    ]"
    :wrap="layoutWrap"
    :div="layout !== 'horizontal' || hideLabel"
    v-bind="rowProps"
  >
    <Col v-if="!hideLabel" :class="labelColCls" :style="mergedLabelStyle" v-bind="mergedLabelCol">
      <FormItemLabel
        :measure-width="measureLabel"
        :registry="labelRegistry"
        :required="hideAsterisk ? false : isRequired"
        :show-colon="showColon"
        :asterisk-position="asteriskPosition"
        :component="labelComponent"
        :attrs="labelAttrs"
        :tooltip="tooltip"
      >
        <slot v-if="$slots.label || label" name="label">{{ label }}</slot>
      </FormItemLabel>
    </Col>
    <Col :class="wrapperColCls" :style="mergedWrapperStyle" v-bind="mergedWrapperCol">
      <div :class="`${prefixCls}-content-wrapper`">
        <div
          :class="[
            `${prefixCls}-content`,
            {
              [`${prefixCls}-content-flex`]: contentFlex,
            },
            contentClass,
          ]"
        >
          <slot />
        </div>
      </div>
      <FormItemMessage v-if="isError || $slots.help || help" :error="isError ? finalMessage : []" :help="help">
        <template v-if="$slots.help" #help>
          <slot name="help" />
        </template>
      </FormItemMessage>
      <div v-if="$slots.extra || extra" :class="`${prefixCls}-extra`">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </Col>
  </Row>
</template>

<script lang="ts">
import { resolveFormItemStatus } from './item-decoration'
import { formItemProps } from './item-props'
import { useFormItemLayout } from './use-form-item-layout'
import { createNamespace } from '../_utils/global-config'
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
} from 'vue'
// @ts-ignore
import { createRequestGuard } from '../_utils/async-request'
import { Schema } from 'b-validate'
import { FormContext, formInjectionKey, FormItemInfo, formItemInjectionKey } from './context'
import { FieldData, FieldRule, ValidateStatus, ValidateTrigger, FormItemEventHandler } from './types'
import Row from '../row'
import Col from '../col'
import FormItemLabel from './FormItemLabel.vue'
import FormItemMessage from './FormItemMessage.vue'
import { getPrefixCls } from '../_utils/global-config'
import { getValueByPath, setValueByPath } from '../_utils/get-value-by-path'
import { Data } from '../_utils/types'
import { getFinalValidateMessage, getFinalValidateStatus, getFormElementId } from './utils'
import { useI18n } from '../locale'
import { hasValidateTrigger } from './validate-trigger'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  name: createNamespace('form-item').name,
  components: {
    Row,
    Col,
    FormItemLabel,
    FormItemMessage,
  },
  props: formItemProps,
  /**
   * @zh 标签
   * @en Label
   * @slot label
   */
  /**
   * @zh 帮助信息
   * @en Help message
   * @slot help
   */
  /**
   * @zh 额外内容
   * @en Extra content
   * @slot extra
   */
  setup(props, { slots }) {
    const prefixCls = getPrefixCls('form-item')
    const { field } = toRefs(props)
    const formCtx = inject<Partial<FormContext>>(formInjectionKey, {})
    const resolvedLayout = useFormItemLayout(() => props, () => formCtx)
    const { autoLabelWidth, layout, measureLabel, labelCol: mergedLabelCol,
      labelStyle: mergedLabelStyle, wrapperStyle: mergedWrapperStyle, wrap: layoutWrap } = resolvedLayout
    const { i18nMessage } = useI18n()

    const mergedWrapperCol = computed(() => ({
      ...resolvedLayout.wrapperCol.value,
      ...(field.value ? { id: getFormElementId(formCtx.id, field.value) } : {}),
    }))

    // 记录初始值，用于重置表单
    const initialValue = ref<any>()
    const hasCapturedInitial = ref(false)

    const validateStatus = reactive<Record<string, ValidateStatus | ''>>({})
    const validateMessage = reactive<Record<string, string>>({})
    const finalStatus = computed(() => getFinalValidateStatus(validateStatus))
    const finalMessage = computed(() => getFinalValidateMessage(validateMessage))
    // 用于重置表单时，不触发校验
    const validateDisabled = ref(false)

    const fieldValue = computed(() => getValueByPath(formCtx.model, props.field))

    const computedDisabled = computed(() => Boolean(props.disabled ?? formCtx?.disabled))
    const computedReadonly = computed(() => Boolean(props.readonly ?? formCtx?.readonly))
    const computedValidateStatus = computed(() => resolveFormItemStatus(props.validateStatus, finalStatus.value))
    const isError = computed(() => computedValidateStatus.value === 'error')

    const mergedRules = computed(() => {
      const baseRules = ([] as FieldRule[]).concat(props.rules ?? formCtx?.rules?.[props.field] ?? [])
      const hasRequiredRule = baseRules.some((item) => item.required)

      if (props.required && !hasRequiredRule) {
        return ([{ required: true }] as FieldRule[]).concat(baseRules)
      }
      return baseRules
    })

    const isRequired = computed(() => mergedRules.value.some((item) => item.required))

    const formItemCtx = props.noStyle ? inject(formItemInjectionKey, undefined) : undefined

    const updateValidateState = (
      field: string,
      { status, message }: { status: ValidateStatus | ''; message: string },
    ) => {
      validateStatus[field] = status
      validateMessage[field] = message

      if (props.noStyle) {
        formItemCtx?.updateValidateState(field, { status, message })
      }
    }

    const computedFeedback = computed(() =>
      props.feedback && computedValidateStatus.value ? computedValidateStatus.value : undefined,
    )

    const validation = createRequestGuard()
    const validateField = (): Promise<any> => {
      const isCurrent = validation.begin()
      if (validateDisabled.value) {
        return Promise.resolve()
      }

      const rules = mergedRules.value
      if (!field.value || rules.length === 0) {
        if (finalStatus.value) {
          clearValidate()
        }
        return Promise.resolve()
      }

      const _field = field.value
      const _value = fieldValue.value
      updateValidateState(_field, {
        status: 'validating',
        message: '',
      })

      const schema = new Schema(
        {
          [_field]: rules.map(({ ...rule }) => {
            if (!rule.type && !rule.validator) {
              rule.type = 'string'
            }
            return rule
          }),
        },
        {
          ignoreEmptyString: true,
          validateMessages: i18nMessage.value.form?.validateMessages,
        },
      )

      return new Promise((resolve) => {
        schema.validate({ [_field]: _value }, (err: Data) => {
          const isError = Boolean(err?.[_field])
          if (isCurrent())
            updateValidateState(_field, {
              status: isError ? 'error' : 'success',
              message: err?.[_field].message ?? '',
            })

          const error = isError
            ? {
                label: props.label,
                field: field.value,
                value: err[_field].value,
                type: err[_field].type,
                isRequiredError: Boolean(err[_field].requiredError),
                message: err[_field].message,
              }
            : undefined

          resolve(error)
        })
      })
    }

    let active = true
    const validateWithTrigger = (trigger: ValidateTrigger) => {
      if (!hasValidateTrigger(props.validateTrigger, trigger)) return
      nextTick(() => {
        if (active && hasValidateTrigger(props.validateTrigger, trigger)) validateField()
      })
    }

    const eventHandlers = computed<FormItemEventHandler>(() => ({
      onChange: () => validateWithTrigger('change'),
      onInput: () => validateWithTrigger('input'),
      onFocus: () => validateWithTrigger('focus'),
      onBlur: () => validateWithTrigger('blur'),
      onClear: () => validateWithTrigger('clear'),
    }))

    provide(
      formItemInjectionKey,
      reactive({
        eventHandlers,
        size: computed(() => props.size ?? formCtx.size),
        disabled: computedDisabled,
        readonly: computedReadonly,
        error: isError,
        feedback: computedFeedback,
        hasOuterLabel: computed(() => props.noStyle ? Boolean(formItemCtx?.hasOuterLabel) : !props.hideLabel && Boolean(props.label || slots.label)),
        updateValidateState,
      }),
    )

    const clearValidate = () => {
      validation.invalidate()
      if (field.value) {
        updateValidateState(field.value, {
          status: '',
          message: '',
        })
      }
    }

    const setField = (data: FieldData) => {
      validation.invalidate()
      if (field.value) {
        validateDisabled.value = true
        if ('value' in data && formCtx?.model && field.value) {
          setValueByPath(formCtx.model, field.value, data.value)
        }

        if ('status' in data || 'message' in data) {
          updateValidateState(field.value, {
            status: data.status ?? (data.message ? 'error' : ''),
            message: data.message ?? '',
          })
        }

        nextTick(() => {
          validateDisabled.value = false
        })
      }
    }

    const resetField = () => {
      clearValidate()
      validateDisabled.value = true
      if (formCtx?.model && field.value) {
        setValueByPath(formCtx.model, field.value, cloneDeep(initialValue.value))
      }

      nextTick(() => {
        validateDisabled.value = false
      })
    }

    const formItemInfo: FormItemInfo = reactive({
      field,
      disabled: computedDisabled,
      error: isError,
      validate: validateField,
      clearValidate,
      resetField,
      setField,
    })

    onMounted(() => {
      if (!hasCapturedInitial.value && field.value && formCtx.model) {
        initialValue.value = cloneDeep(getValueByPath(formCtx.model, field.value))
        hasCapturedInitial.value = true
      }
      if (formItemInfo.field) {
        formCtx.addField?.(formItemInfo)
      }
    })

    onBeforeUnmount(() => {
      active = false
      validation.invalidate()
      if (formItemInfo.field) {
        formCtx.removeField?.(formItemInfo)
      }
    })

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${layout.value}`,
      {
        [`${prefixCls}-error`]: isError.value,
        [`${prefixCls}-status-${computedValidateStatus.value}`]: Boolean(computedValidateStatus.value),
      },
      props.rowClass,
    ])

    const labelColCls = computed(() => [
      `${prefixCls}-label-col`,
      {
        [`${prefixCls}-label-col-left`]: resolvedLayout.labelAlign.value === 'left',
        [`${prefixCls}-label-col-flex`]: resolvedLayout.fixedLabel.value,
      },
    ])

    const wrapperColCls = computed(() => [
      `${prefixCls}-wrapper-col`,
      {
        [`${prefixCls}-wrapper-col-flex`]: !mergedWrapperCol.value,
      },
    ])

    return {
      prefixCls,
      labelRegistry: formCtx.setLabelWidth && formCtx.removeLabelWidth ? { setLabelWidth: formCtx.setLabelWidth, removeLabelWidth: formCtx.removeLabelWidth } : undefined,
      cls,
      isRequired,
      isError,
      finalMessage,
      mergedLabelCol,
      mergedWrapperCol,
      labelColCls,
      autoLabelWidth,
      layoutWrap,
      measureLabel,
      layout,
      mergedLabelStyle,
      wrapperColCls,
      mergedWrapperStyle,
    }
  },
})
</script>

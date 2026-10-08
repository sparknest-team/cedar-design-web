<template>
  <form :id="id" ref="formRef" :class="cls" @submit.prevent="handleSubmit" @reset.prevent="handleReset">
    <slot />
  </form>
</template>

<script lang="ts">
import { formProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, provide, reactive, toRefs, ref } from 'vue'
import scrollIntoView, { Options as ScrollIntoViewOptions } from 'scroll-into-view-if-needed'
import { FormItemInfo, formInjectionKey, FormContext } from './context'
import { getPrefixCls } from '../_utils/global-config'
import { ComponentSize } from '../_utils/constant'
import { FieldData, FieldRule, ValidatedError } from './types'
import { useSize } from '../_hooks/use-size'
import { getFormElementId } from './utils'
import { toPxNum } from '../_utils/maple/elements'
import { createFormController, type FormValidateErrors } from './form-controller'

const FORM_LAYOUTS = ['horizontal', 'vertical', 'inline'] as const
type FormLayout = (typeof FORM_LAYOUTS)[number]
const FORM_LABEL_ALIGNS = ['left', 'right'] as const
type FormLabelAlign = (typeof FORM_LABEL_ALIGNS)[number]

export default defineComponent({
  name: createNamespace('form').name,
  props: formProps,
  emits: {
    /**
     * @zh 表单提交时触发
     * @en Triggered when the form is submitted
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}} data
     * @param {Event} ev
     */
    submit: (
      data: {
        values: Record<string, any>
        errors: Record<string, ValidatedError> | undefined
      },
      ev: Event,
    ) => true,
    /**
     * @zh 验证成功时触发
     * @en Triggered when verification is successful
     * @param {Record<string, any>} values
     * @param {Event} ev
     */
    'submit-success': (values: Record<string, any>, ev: Event) => true,
    /**
     * @zh 验证失败时触发
     * @en Triggered when verification failed
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError>}} data
     * @param {Event} ev
     */
    'submit-failed': (
      data: {
        values: Record<string, any>
        errors: Record<string, ValidatedError>
      },
      ev: Event,
    ) => true,
    reset: (ev: Event) => true,
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('form')
    const formRef = ref<HTMLFormElement>()
    const {
      id,
      model,
      layout,
      disabled,
      readonly,
      labelAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      size,
      rules,
    } = toRefs(props)
    const { mergedSize } = useSize(size)

    const autoLabelWidth = computed(() => props.layout === 'horizontal' && props.autoLabelWidth)

    const touchedFields: FormItemInfo[] = []

    const labelWidth = reactive<Record<string, number>>({})
    const maxLabelWidth = computed(() => Math.max(...Object.values(labelWidth)))

    const setLabelWidth = (width: number, uid?: number) => {
      if (uid && labelWidth[uid] !== width) {
        labelWidth[uid] = width
      }
    }

    const removeLabelWidth = (uid?: number) => {
      if (uid) {
        delete labelWidth[uid]
      }
    }

    const scrollToField = (field: string, options?: ScrollIntoViewOptions) => {
      const node = formRef.value || document.body
      const fieldNode = Array.from(node.querySelectorAll('[id]')).find(
        (element) => element.id === getFormElementId(props.id, field),
      )

      if (fieldNode) {
        scrollIntoView(
          fieldNode as HTMLDivElement,
          {
            behavior: 'smooth',
            block: 'nearest',
            scrollMode: 'if-needed',
            ...options,
          } as Parameters<typeof scrollIntoView>[1],
        )
      }
    }

    const scrollToError = (errors: Record<string, ValidatedError>) => {
      if (!props.scrollToError || !formRef.value) return
      // Use rendered order, not object-key/registration order (numeric fields can reorder).
      const fieldById = new Map(Object.keys(errors).map((field) => [getFormElementId(props.id, field), field]))
      const nodes = Array.from(formRef.value.querySelectorAll('[id]')).filter((element) => fieldById.has(element.id))
      const node = props.scrollToError === 'end' ? nodes[nodes.length - 1] : nodes[0]
      if (node) {
        const parsedOffset = toPxNum(props.scrollToErrorOffsetY)
        const offset = Number.isFinite(parsedOffset) ? parsedOffset : 0
        scrollToField(
          fieldById.get(node.id)!,
          offset
            ? {
                block: 'start',
                behavior: (actions) => {
                  actions.forEach(({ el, top, left }) =>
                    el.scrollTo({
                      top: top - offset,
                      left,
                      behavior: 'smooth',
                    }),
                  )
                },
              }
            : undefined,
        )
      }
    }

    const controller = createFormController<ValidatedError, FieldData>({
      onInvalid: scrollToError,
    })
    const fields = controller.fields
    const unregisterFields = new WeakMap<FormItemInfo, () => void>()
    const addField = (formItemInfo: FormItemInfo) => {
      unregisterFields.set(formItemInfo, controller.registerField(formItemInfo))
    }
    const removeField = (formItemInfo: FormItemInfo) => {
      unregisterFields.get(formItemInfo)?.()
      unregisterFields.delete(formItemInfo)
    }
    const validate = (callback?: (errors: FormValidateErrors<ValidatedError>) => void) =>
      controller.validate(undefined, callback)
    const validateField = (field: string | string[], callback?: (errors: FormValidateErrors<ValidatedError>) => void) =>
      controller.validate(field, callback)

    const handleSubmit = (e: Event) => {
      validate().then((errors) => {
        if (errors) {
          emit('submit-failed', { values: model.value ?? {}, errors }, e)
        } else {
          emit('submit-success', model.value ?? {}, e)
        }
        emit('submit', { values: model.value ?? {}, errors }, e)
      })
    }
    const handleReset = (e: Event) => {
      controller.resetFields()
      emit('reset', e)
    }

    provide(
      formInjectionKey,
      reactive({
        id,
        layout,
        disabled,
        readonly,
        labelAlign,
        labelColProps,
        wrapperColProps,
        labelColStyle,
        wrapperColStyle,
        model,
        size: mergedSize,
        rules,
        fields,
        touchedFields,
        addField,
        removeField,
        validateField,
        setLabelWidth,
        removeLabelWidth,
        maxLabelWidth,
        autoLabelWidth,
      }) as FormContext,
    )

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${props.layout}`,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-auto-label-width`]: props.autoLabelWidth,
      },
    ])

    return {
      cls,
      formRef,
      handleSubmit,
      handleReset,
      innerValidate: validate,
      innerValidateField: validateField,
      innerResetFields: controller.resetFields,
      innerClearValidate: controller.clearValidate,
      innerSetFields: controller.setFields,
      innerScrollToField: scrollToField,
    }
  },
  methods: {
    /**
     * @zh 校验全部表单数据
     * @en Verify all form data
     * @public
     * @param {(errors: undefined | Record<string, ValidatedError>) => void} callback
     * @returns {Promise<undefined | Record<string, ValidatedError>>}
     */
    validate(
      callback?: (errors: undefined | Record<string, ValidatedError>) => void,
    ): Promise<undefined | Record<string, ValidatedError>> {
      return this.innerValidate(callback)
    },
    /**
     * @zh 校验部分表单数据
     * @en Validate part of the form data
     * @public
     * @param {string | string[]} field
     * @param {(errors: undefined | Record<string, ValidatedError>) => void} callback
     * @returns {Promise<undefined | Record<string, ValidatedError>>}
     */
    validateField(
      field: string | string[],
      callback?: (errors: undefined | Record<string, ValidatedError>) => void,
    ): Promise<undefined | Record<string, ValidatedError>> {
      return this.innerValidateField(field, callback)
    },
    /**
     * @zh 重置表单数据
     * @en Reset form data
     * @public
     * @param {string | string[]} field
     */
    resetFields(field?: string | string[]) {
      return this.innerResetFields(field)
    },
    /**
     * @zh 清除校验状态
     * @en Clear verification status
     * @public
     * @param {string | string[]} field
     */
    clearValidate(field?: string | string[]) {
      return this.innerClearValidate(field)
    },
    /**
     * @zh 设置表单项的值和状态
     * @en Set the value and status of the form item
     * @param {Record<string, FieldData>} data
     * @public
     */
    setFields(data: Record<string, FieldData>) {
      return this.innerSetFields(data)
    },
    /**
     * @zh 滚动到指定表单项
     * @en Scroll to the specified form item
     * @param {string} field
     * @public
     * @version 2.51.0
     */
    scrollToField(field: string) {
      return this.innerScrollToField(field)
    },
  },
})
</script>

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
    :data-presentation="
      presentationState.resolved.value === 'direct'
        ? undefined
        : presentationState.resolved.value
    "
  >
    <Col
      v-if="!hideLabel"
      :class="labelColCls"
      :style="mergedLabelStyle"
      v-bind="mergedLabelCol"
    >
      <FormItemLabel
        :measure-width="measureLabel"
        :registry="labelRegistry"
        :required="
          !presentationState.readPretty.value && !hideAsterisk && isRequired
        "
        :show-colon="showColon"
        :asterisk-position="asteriskPosition"
        :component="labelComponent"
        :attrs="
          presentationState.readPretty.value
            ? { ...labelAttrs, for: undefined }
            : labelAttrs
        "
        :tooltip="tooltip"
      >
        <slot v-if="$slots.label || label" name="label">{{ label }}</slot>
      </FormItemLabel>
    </Col>
    <Col
      :class="wrapperColCls"
      :style="mergedWrapperStyle"
      v-bind="mergedWrapperCol"
    >
      <div :class="`${prefixCls}-content-wrapper`">
        <div
          :style="contentStyle"
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
      <FormItemMessage
        v-if="isError || $slots.help || help"
        :error="
          !presentationState.readPretty.value && isError ? finalMessage : []
        "
        :help="help"
      >
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
import type { SlotsType } from "vue";
import type { FormItemSlots } from "./types";
import { provideEmptyValues } from "../_utils/empty-value";
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
  watch,
} from "vue";
import { Schema } from "b-validate";
import { cloneDeep } from "lodash-es";
import { provideItemPresentation } from "../_components/field-presentation/context";
// @ts-ignore
import { createRequestGuard } from "../_utils/async-request";
import { getValueByPath, setValueByPath } from "../_utils/get-value-by-path";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { Data } from "../_utils/types";
import Col from "../col";
import { useI18n } from "../locale";
import Row from "../row";
import {
  FormContext,
  formInjectionKey,
  FormItemInfo,
  formItemInjectionKey,
} from "./context";
import FormItemLabel from "./FormItemLabel.vue";
import FormItemMessage from "./FormItemMessage.vue";
import { provideFormErrorDescription } from "./error-description";
import { resolveFormItemStatus } from "./item-decoration";
import { formItemProps } from "./item-props";
import {
  FieldData,
  FieldRule,
  ValidatedError,
  FormItemEventHandler,
  ValidateStatus,
  ValidateTrigger,
} from "./types";
import { useFormItemLayout } from "./use-form-item-layout";
import {
  getFinalValidateMessage,
  getFinalValidateStatus,
  getFormElementId,
} from "./utils";
import { hasValidateTrigger } from "./validate-trigger";

export default defineComponent({
  name: createNamespace("form-item").name,
  components: {
    Row,
    Col,
    FormItemLabel,
    FormItemMessage,
  },
  props: formItemProps,
  slots: Object as SlotsType<FormItemSlots>,
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
    const prefixCls = getPrefixCls("form-item");
    const { field } = toRefs(props);
    const formCtx = inject<Partial<FormContext>>(formInjectionKey, {});
    const resolvedLayout = useFormItemLayout(
      () => props,
      () => formCtx,
    );
    const {
      autoLabelWidth,
      layout,
      measureLabel,
      labelCol: mergedLabelCol,
      labelStyle: mergedLabelStyle,
      wrapperStyle: mergedWrapperStyle,
      wrap: layoutWrap,
    } = resolvedLayout;
    const contentStyle = computed(() => ({
      "--c-form-content-align": resolvedLayout.contentAlign.value,
      "--c-form-content-justify": resolvedLayout.contentJustify.value,
      textAlign: resolvedLayout.contentAlign.value,
      justifyContent: props.contentFlex
        ? resolvedLayout.contentJustify.value
        : undefined,
    }));
    const { i18nMessage } = useI18n();

    const mergedWrapperCol = computed(() => ({
      ...resolvedLayout.wrapperCol.value,
      ...(field.value ? { id: getFormElementId(formCtx.id, field.value) } : {}),
    }));

    // 记录初始值，用于重置表单
    const initialValue = ref<any>();
    const initialValues = new Map<string, any>();
    let fieldMounted = false;
    let fieldVersion = 0;

    const validateStatus = reactive<Record<string, ValidateStatus | "">>({});
    const validateMessage = reactive<Record<string, string>>({});
    const finalStatus = computed(() => getFinalValidateStatus(validateStatus));
    const finalMessage = computed(() =>
      getFinalValidateMessage(validateMessage),
    );
    // 用于重置表单时，不触发校验
    const validateDisabled = ref(false);

    const fieldValue = computed(() =>
      getValueByPath(formCtx.model, props.field),
    );
    const emptyPolicy = provideEmptyValues(props, true);
    const presentationState = provideItemPresentation({
      editMode: () => props.editMode,
      readPretty: () => props.readPretty,
      label: computed(() => props.label),
      field: computed(() => props.field),
      message: computed(() => String(finalMessage.value)),
      validate: async (candidate) =>
        !(await validateField({ value: candidate })),
      resetValidation: () => clearValidate(),
    });

    const computedDisabled = computed(() =>
      Boolean(props.disabled ?? formCtx?.disabled),
    );
    const computedReadonly = computed(() =>
      Boolean(props.readonly ?? formCtx?.readonly),
    );
    const computedValidateStatus = computed(() =>
      resolveFormItemStatus(props.validateStatus, finalStatus.value),
    );
    const isError = computed(() => computedValidateStatus.value === "error");
    provideFormErrorDescription(() => !presentationState.readPretty.value && isError.value && finalMessage.value.length > 0, () => props.noStyle);

    const mergedRules = computed(() => {
      const baseRules = ([] as FieldRule[]).concat(
        props.rules ?? formCtx?.rules?.[props.field] ?? [],
      );
      const hasRequiredRule = baseRules.some((item) => item.required);

      if (props.required && !hasRequiredRule) {
        return ([{ required: true }] as FieldRule[]).concat(baseRules);
      }
      return baseRules;
    });

    watch(
      [() => props.field, mergedRules],
      () => formCtx?.invalidateSubmitInputs?.(),
      { deep: true, flush: 'sync' },
    );

    const isRequired = computed(() =>
      mergedRules.value.some((item) => item.required),
    );

    const formItemCtx = props.noStyle
      ? inject(formItemInjectionKey, undefined)
      : undefined;

    const updateValidateState = (
      field: string,
      { status, message }: { status: ValidateStatus | ""; message: string },
    ) => {
      validateStatus[field] = status;
      validateMessage[field] = message;

      if (props.noStyle) {
        formItemCtx?.updateValidateState(field, { status, message });
      }
    };

    const computedFeedback = computed(() =>
      props.feedback && computedValidateStatus.value
        ? computedValidateStatus.value
        : undefined,
    );

    const validation = createRequestGuard();
    const validateField = (candidate?: { value: unknown }): Promise<ValidatedError | undefined> => {
      const isCurrent = validation.begin();
      if (validateDisabled.value) {
        return Promise.resolve(undefined);
      }

      const rules = mergedRules.value;
      if (!field.value || rules.length === 0) {
        if (finalStatus.value) {
          clearValidate();
        }
        return Promise.resolve(undefined);
      }

      const _field = field.value;
      const _value = candidate ? candidate.value : fieldValue.value;
      const candidateModel = candidate
        ? cloneDeep(formCtx.model ?? {})
        : (formCtx.model ?? {});
      if (candidate && _field)
        setValueByPath(candidateModel, _field, candidate.value);
      const previousMessage = validateMessage[_field] || "";
      updateValidateState(_field, {
        status: "validating",
        message: "",
      });

      // Only built-in required adopts the registered policy. Validators still receive raw values.
      const schemaRules: FieldRule[] = rules.flatMap((rule) => {
        if (!rule.required || !emptyPolicy.hasCustomEmptyValues.value)
          return [rule];
        const message =
          rule.message ??
          String(
            i18nMessage.value.form?.validateMessages?.required ??
              "#{field} is required",
          ).replace("#{field}", props.label || _field);
        return [
          {
            validator: (value, callback) =>
              callback(emptyPolicy.isEmpty(value) ? message : undefined),
          },
          { ...rule, required: false },
        ];
      });
      return new Promise<ValidatedError | undefined>((resolve, reject) => {
        let failed = false;
        const rejectValidation = (error: unknown) => {
          if (failed) return;
          failed = true;
          if (isCurrent())
            updateValidateState(_field, {
              status: previousMessage ? "error" : "",
              message: previousMessage,
            });
          reject(error);
        };
        const schema = new Schema(
          {
            [_field]: schemaRules.map(({ ...rule }) => {
              const validator = rule.validator;
              if (validator)
                rule.validator = (value, callback) => {
                  try {
                    const result = validator(value, callback, {
                      model: candidateModel,
                      field: _field,
                    });
                    if (result && typeof result.then === "function")
                      return Promise.resolve(result).catch(rejectValidation);
                  } catch (error) {
                    rejectValidation(error);
                  }
                };
              if (!rule.type && !rule.validator) rule.type = "string";
              return rule;
            }),
          },
          {
            ignoreEmptyString: !emptyPolicy.hasCustomEmptyValues.value,
            validateMessages: i18nMessage.value.form?.validateMessages,
          },
        );
        try {
          schema.validate({ [_field]: _value }, (err: Data) => {
            if (failed) return;
            const isError = Boolean(err?.[_field]);
            if (isCurrent())
              updateValidateState(_field, {
                status: isError ? "error" : "success",
                message: err?.[_field].message ?? "",
              });
            resolve(isError ? {
              label: props.label || "",
              field: _field,
              value: err[_field].value,
              type: err[_field].type,
              isRequiredError: Boolean(err[_field].requiredError) || (
                emptyPolicy.hasCustomEmptyValues.value &&
                emptyPolicy.isEmpty(_value) && rules.some((rule) => rule.required)
              ),
              message: err[_field].message,
            } : undefined);
          });
        } catch (error) {
          rejectValidation(error);
        }
      });
    };

    let active = true;
    const validateWithTrigger = (trigger: ValidateTrigger) => {
      if (!hasValidateTrigger(props.validateTrigger, trigger)) return;
      const version = fieldVersion;
      nextTick(() => {
        if (active && version === fieldVersion && hasValidateTrigger(props.validateTrigger, trigger))
          validateField();
      });
    };

    const eventHandlers = computed<FormItemEventHandler>(() => ({
      onChange: () => validateWithTrigger("change"),
      onInput: () => validateWithTrigger("input"),
      onFocus: () => validateWithTrigger("focus"),
      onBlur: () => validateWithTrigger("blur"),
      onClear: () => validateWithTrigger("clear"),
    }));

    provide(
      formItemInjectionKey,
      reactive({
        eventHandlers,
        size: computed(() => props.size ?? formCtx.size),
        disabled: computedDisabled,
        readonly: computedReadonly,
        error: isError,
        feedback: computedFeedback,
        hasOuterLabel: computed(() =>
          props.noStyle
            ? Boolean(formItemCtx?.hasOuterLabel)
            : !props.hideLabel && Boolean(props.label || slots.label),
        ),
        updateValidateState,
      }),
    );

    const clearValidate = () => {
      validation.invalidate();
      if (field.value) {
        updateValidateState(field.value, {
          status: "",
          message: "",
        });
      }
    };

    const setField = (data: FieldData) => {
      validation.invalidate();
      if (field.value) {
        validateDisabled.value = true;
        if ("value" in data && formCtx?.model && field.value) {
          setValueByPath(formCtx.model, field.value, data.value);
        }

        if ("status" in data || "message" in data) {
          updateValidateState(field.value, {
            status: data.status ?? (data.message ? "error" : ""),
            message: data.message ?? "",
          });
        }

        nextTick(() => {
          validateDisabled.value = false;
        });
      }
    };

    const resetField = () => {
      presentationState.cancel();
      clearValidate();
      validateDisabled.value = true;
      if (formCtx?.model && field.value) {
        setValueByPath(
          formCtx.model,
          field.value,
          cloneDeep(initialValue.value),
        );
      }

      nextTick(() => {
        validateDisabled.value = false;
      });
    };

    const formItemInfo: FormItemInfo = reactive({
      field,
      disabled: computedDisabled,
      error: isError,
      validate: validateField,
      clearValidate,
      resetField,
      setField,
    });

    function captureInitialValue() {
      const name = field.value;
      if (!name) {
        initialValue.value = undefined;
        return;
      }
      if (!initialValues.has(name) && formCtx?.model) {
        initialValues.set(name, cloneDeep(getValueByPath(formCtx.model, name)));
      }
      initialValue.value = initialValues.get(name);
    }
    let registered = false;
    function registerCurrentField() {
      if (field.value && formCtx.addField) {
        formCtx.addField(formItemInfo);
        registered = true;
      }
    }
    function unregisterCurrentField() {
      if (registered) formCtx.removeField?.(formItemInfo);
      registered = false;
    }
    watch(() => formCtx?.model, captureInitialValue, { flush: 'sync' });
    watch(field, () => {
      if (!fieldMounted) return;
      fieldVersion++;
      unregisterCurrentField();
      presentationState.cancel();
      validation.invalidate();
      validateDisabled.value = false;
      for (const name of Object.keys(validateStatus)) {
        updateValidateState(name, { status: '', message: '' });
        delete validateStatus[name];
        delete validateMessage[name];
      }
      captureInitialValue();
      registerCurrentField();
    }, { flush: 'sync' });
    onMounted(() => {
      fieldMounted = true;
      captureInitialValue();
      registerCurrentField();
    });
    onBeforeUnmount(() => {
      active = false;
      fieldMounted = false;
      validation.invalidate();
      unregisterCurrentField();
    });

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${layout.value}`,
      {
        [`${prefixCls}-error`]: isError.value,
        [`${prefixCls}-status-${computedValidateStatus.value}`]: Boolean(
          computedValidateStatus.value,
        ),
      },
      props.rowClass,
    ]);

    const labelColCls = computed(() => [
      `${prefixCls}-label-col`,
      {
        [`${prefixCls}-label-col-left`]:
          resolvedLayout.labelAlign.value === "left",
        [`${prefixCls}-label-col-flex`]: resolvedLayout.fixedLabel.value,
      },
    ]);

    const wrapperColCls = computed(() => [
      `${prefixCls}-wrapper-col`,
      {
        [`${prefixCls}-wrapper-col-flex`]: !mergedWrapperCol.value,
      },
    ]);

    return {
      presentationState,
      prefixCls,
      contentStyle,
      labelRegistry:
        formCtx.setLabelWidth && formCtx.removeLabelWidth
          ? {
              setLabelWidth: formCtx.setLabelWidth,
              removeLabelWidth: formCtx.removeLabelWidth,
            }
          : undefined,
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
    };
  },
});
</script>

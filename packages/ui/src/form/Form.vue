<template>
  <form
    :id="id"
    ref="formRef"
    :class="cls"
    @submit.prevent="handleSubmit"
    @reset.prevent="handleReset"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import type { SlotsType } from "vue";
import type { FormSlots } from "./types";
import { provideEmptyValues } from "../_utils/empty-value";
import {
  computed,
  defineComponent,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  PropType,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import scrollIntoView, {
  Options as ScrollIntoViewOptions,
} from "scroll-into-view-if-needed";
import { provideFormPresentation } from "../_components/field-presentation/context";
import { useSize } from "../_hooks/use-size";
import { ComponentSize } from "../_utils/constant";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { toPxNum } from "../_utils/maple/elements";
import { FormContext, formInjectionKey, formItemInjectionKey, FormItemInfo } from "./context";
import { provideFormErrorDescriptionBoundary } from "./error-description";
import { isolateFormItemLabel } from "./label-context";
import {
  createFormController,
  type FormFieldController,
  type FormValidateErrors,
} from "./form-controller";
import { formProps } from "./props";
import { FieldData, FieldRule, ValidatedError, FormSubmitError } from "./types";
import { useFormLabelWidths } from "./use-form-label-width";
import { getFormElementId } from "./utils";

const FORM_LAYOUTS = ["horizontal", "vertical", "inline"] as const;
type FormLayout = (typeof FORM_LAYOUTS)[number];

export default defineComponent({
  name: createNamespace("form").name,
  props: formProps,
  slots: Object as SlotsType<FormSlots>,
  emits: {
    /**
     * @zh 表单提交时触发
     * @en Triggered when the form is submitted
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}} data
     * @param {Event} ev
     */
    submit: (
      data: {
        values: Record<string, any>;
        errors: Record<string, ValidatedError> | undefined;
      },
      ev: Event,
    ) => true,
    /**
     * @zh 验证成功时触发
     * @en Triggered when verification is successful
     * @param {Record<string, any>} values
     * @param {Event} ev
     */
    "submit-success": (values: Record<string, any>, ev: Event) => true,
    /**
     * @zh 验证失败时触发
     * @en Triggered when verification failed
     * @param {{values: Record<string, any>; errors: Record<string, ValidatedError>}} data
     * @param {Event} ev
     */
    "submit-failed": (
      data: {
        values: Record<string, any>;
        errors: Record<string, FormSubmitError>;
      },
      ev: Event,
    ) => true,
    reset: (ev: Event) => true,
  },
  setup(props, { emit }) {
    provideEmptyValues(props);
    provideFormErrorDescriptionBoundary();
    isolateFormItemLabel();
    provide(formItemInjectionKey, undefined!);
    const presentationState = provideFormPresentation(
      () => props.editMode,
      () => props.readPretty,
    );
    const prefixCls = getPrefixCls("form");
    const formRef = ref<HTMLFormElement>();
    const {
      id,
      model,
      layout,
      disabled,
      readonly,
      labelAlign,
      contentAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      labelColFlex,
      size,
      rules,
    } = toRefs(props);
    const { mergedSize } = useSize(size);

    const autoLabelWidth = computed(() => props.autoLabelWidth);

    const touchedFields: FormItemInfo[] = [];

    const { maxLabelWidth, setLabelWidth, removeLabelWidth } =
      useFormLabelWidths();

    let scrollMounted = false;
    let scrollActive = true;
    let scrollDisposed = false;
    let scrollEpoch = 0;
    let invalidScrollContext:
      { epoch: number; mode: typeof props.scrollToError } | undefined;
    const canScroll = () =>
      scrollMounted && scrollActive && !scrollDisposed && !!formRef.value;
    const invalidateScroll = () => {
      scrollEpoch++;
    };
    onMounted(() => {
      scrollMounted = true;
    });
    onActivated(() => {
      scrollActive = true;
    });
    onDeactivated(() => {
      scrollActive = false;
      invalidateScroll();
    });
    onBeforeUnmount(() => {
      scrollDisposed = true;
      invalidateScroll();
    });
    watch(() => props.scrollToError, invalidateScroll, { flush: "sync" });

    const scrollToField = (
      field: string,
      options?: ScrollIntoViewOptions,
      offset = 0,
      isEligible = () => true,
    ) => {
      if (!canScroll()) return;
      const epoch = ++scrollEpoch;
      const node = formRef.value!;
      const fieldNode = Array.from(node.querySelectorAll("[id]")).find(
        (element) => element.id === getFormElementId(props.id, field),
      );
      const isCurrent = () =>
        canScroll() &&
        epoch === scrollEpoch &&
        formRef.value === node &&
        !!fieldNode &&
        node.contains(fieldNode) &&
        fieldNode.id === getFormElementId(props.id, field) &&
        isEligible() &&
        canScroll() &&
        epoch === scrollEpoch;
      let pendingActions = true;

      if (fieldNode && isCurrent()) {
        scrollIntoView(
          fieldNode as HTMLDivElement,
          {
            behavior: "smooth",
            block: "nearest",
            scrollMode: "if-needed",
            ...options,
            ...(offset
              ? {
                  behavior: (actions) => {
                    if (!pendingActions) return;
                    pendingActions = false;
                    actions.forEach(({ el, top, left }) => {
                      if (isCurrent())
                        el.scrollTo({
                          top: top - offset,
                          left,
                          behavior: "smooth",
                        });
                    });
                  },
                }
              : {}),
          } as Parameters<typeof scrollIntoView>[1],
        );
      }
    };

    const scrollToError = (
      errors: Record<string, ValidatedError>,
      items: FormFieldController<ValidatedError, FieldData>[],
    ) => {
      const context = invalidScrollContext;
      invalidScrollContext = undefined;
      if (
        !context?.mode ||
        !canScroll() ||
        context.epoch !== scrollEpoch ||
        context.mode !== props.scrollToError
      )
        return;
      // Use rendered order, not object-key/registration order (numeric fields can reorder).
      const fieldById = new Map(
        items
          .filter(
            (item) => errors[item.field] && controller.fields.includes(item),
          )
          .map((item) => [
            getFormElementId(props.id, item.field),
            { item, field: item.field },
          ]),
      );
      const nodes = Array.from(formRef.value!.querySelectorAll("[id]")).filter(
        (element) => fieldById.has(element.id),
      );
      const node = context.mode === "end" ? nodes[nodes.length - 1] : nodes[0];
      if (node && context.epoch === scrollEpoch) {
        const target = fieldById.get(node.id)!;
        const parsedOffset = toPxNum(props.scrollToErrorOffsetY);
        const offset = Number.isFinite(parsedOffset) ? parsedOffset : 0;
        scrollToField(
          target.field,
          offset ? { block: "start" } : undefined,
          offset,
          () =>
            controller.fields.includes(target.item) &&
            target.item.field === target.field,
        );
      }
    };

    const controller = createFormController<ValidatedError, FieldData>({
      onInvalid: scrollToError,
    });
    const validateForScroll = controller.validate;
    controller.validate = (fields, callback) => {
      invalidateScroll();
      const context = { epoch: scrollEpoch, mode: props.scrollToError };
      return validateForScroll(fields, (errors) => {
        callback?.(errors);
        invalidScrollContext = context;
      });
    };
    const fields = controller.fields;
    const unregisterFields = new WeakMap<FormItemInfo, () => void>();
    const addField = (formItemInfo: FormItemInfo) => {
      if (unregisterFields.has(formItemInfo)) return;
      invalidateSubmitInputs();
      unregisterFields.set(
        formItemInfo,
        controller.registerField(formItemInfo),
      );
    };
    const removeField = (formItemInfo: FormItemInfo) => {
      if (unregisterFields.has(formItemInfo)) invalidateSubmitInputs();
      unregisterFields.get(formItemInfo)?.();
      unregisterFields.delete(formItemInfo);
    };
    let submitEpoch = 0;
    let pendingSubmitEpoch: number | undefined;
    const invalidateSubmit = () => {
      submitEpoch++;
      pendingSubmitEpoch = undefined;
    };
    function invalidateSubmitInputs() {
      if (pendingSubmitEpoch === undefined) return;
      invalidateSubmit();
      controller.invalidate();
      invalidateScroll();
    }
    watch(
      [() => props.model, () => props.rules],
      invalidateSubmitInputs,
      { deep: true, flush: 'sync' },
    );
    const validate = (
      callback?: (errors: FormValidateErrors<ValidatedError>) => void,
    ) => {
      invalidateSubmit();
      return controller.validate(undefined, callback);
    };
    const validateField = (
      field: string | string[],
      callback?: (errors: FormValidateErrors<ValidatedError>) => void,
    ) => {
      invalidateSubmit();
      return controller.validate(field, callback);
    };
    onBeforeUnmount(invalidateSubmit);
    onDeactivated(invalidateSubmit);
    const resetFields = (field?: string | string[]) => {
      invalidateSubmit();
      invalidateScroll();
      presentationState.cancel(field);
      controller.resetFields(field);
    };
    const clearValidate = (field?: string | string[]) => {
      invalidateSubmit();
      invalidateScroll();
      controller.clearValidate(field);
    };
    const setFields = (data: Record<string, FieldData>) => {
      invalidateSubmit();
      invalidateScroll();
      controller.setFields(data);
    };
    const handleSubmit = (e: Event) => {
      invalidateSubmitInputs();
      invalidateSubmit();
      if (presentationState.blocked()) {
        emit(
          "submit-failed",
          {
            values: model.value ?? {},
            errors: {
              editing: { field: "editing", message: "请先完成当前字段编辑" },
            } as any,
          },
          e,
        );
        return;
      }
      const epoch = ++submitEpoch;
      pendingSubmitEpoch = epoch;
      return controller.validate().then((errors) => {
        if (epoch !== submitEpoch) return;
        pendingSubmitEpoch = undefined;
        if (errors) {
          emit("submit-failed", { values: model.value ?? {}, errors }, e);
        } else {
          emit("submit-success", model.value ?? {}, e);
        }
        emit("submit", { values: model.value ?? {}, errors }, e);
      }).finally(() => {
        if (pendingSubmitEpoch === epoch) pendingSubmitEpoch = undefined;
      });
    };
    const handleReset = (e: Event) => {
      resetFields();
      emit("reset", e);
    };

    provide(
      formInjectionKey,
      reactive({
        id,
        layout,
        disabled,
        readonly,
        labelAlign,
        contentAlign,
        labelColProps,
        wrapperColProps,
        labelColStyle,
        wrapperColStyle,
        labelColFlex,
        model,
        size: mergedSize,
        rules,
        fields,
        touchedFields,
        addField,
        removeField,
        invalidateSubmitInputs,
        validateField,
        setLabelWidth,
        removeLabelWidth,
        maxLabelWidth,
        autoLabelWidth,
      }) as FormContext,
    );

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${props.layout}`,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-auto-label-width`]: props.autoLabelWidth,
      },
    ]);

    return {
      cls,
      formRef,
      handleSubmit,
      handleReset,
      innerValidate: validate,
      innerValidateField: validateField,
      innerResetFields: resetFields,
      innerClearValidate: clearValidate,
      innerSetFields: setFields,
      innerScrollToField: scrollToField,
    };
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
      return this.innerValidate(callback);
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
      return this.innerValidateField(field, callback);
    },
    /**
     * @zh 重置表单数据
     * @en Reset form data
     * @public
     * @param {string | string[]} field
     */
    resetFields(field?: string | string[]) {
      return this.innerResetFields(field);
    },
    /**
     * @zh 清除校验状态
     * @en Clear verification status
     * @public
     * @param {string | string[]} field
     */
    clearValidate(field?: string | string[]) {
      return this.innerClearValidate(field);
    },
    /**
     * @zh 设置表单项的值和状态
     * @en Set the value and status of the form item
     * @param {Record<string, FieldData>} data
     * @public
     */
    setFields(data: Record<string, FieldData>) {
      return this.innerSetFields(data);
    },
    /**
     * @zh 滚动到指定表单项
     * @en Scroll to the specified form item
     * @param {string} field
     * @public
     */
    scrollToField(field: string) {
      return this.innerScrollToField(field);
    },
  },
});
</script>

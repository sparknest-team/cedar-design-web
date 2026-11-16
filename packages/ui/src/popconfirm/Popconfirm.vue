<template>
  <trigger
    ref="triggerRef"
    :reference-attrs="referenceAttrs"
    :class="prefixCls"
    trigger="click"
    :placement="placement"
    show-arrow
    :open="computedOpen"
    :popup-offset="10"
    :popup-container="popupContainer"
    :content-class="contentCls"
    :content-style="contentStyle"
    :arrow-class="arrowCls"
    :arrow-style="arrowStyle"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    @open-change="handleOpenChange"
  >
    <slot />
    <template #content>
      <div ref="dialogRef" :id="dialogId" role="dialog" tabindex="-1" :aria-label="confirmButtonText || t('popconfirm.confirmButtonText')" :aria-describedby="contentId">
      <div :class="`${prefixCls}-body`" :aria-busy="guardPending || mergedConfirmButtonLoading || cancelButtonProps?.loading || undefined">
        <span :class="`${prefixCls}-icon`">
          <slot name="icon">
            <icon-info-circle-fill v-if="type === 'info'" />
            <icon-check-circle-fill v-else-if="type === 'success'" />
            <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
            <icon-close-circle-fill v-else-if="type === 'error'" />
          </slot>
        </span>
        <span :id="contentId" :class="`${prefixCls}-content`">
          <slot name="content">{{ content }}</slot>
        </span>
      </div>
      <div :class="`${prefixCls}-footer`">
        <Button
          size="xs"
          v-bind="cancelButtonProps"
          :disabled="cancelButtonProps?.disabled || guardPending"
          :loading="Boolean(cancelButtonProps?.loading) || (guardPending && pendingAction === 'cancel')"
          @click="handleCancel"
        >
          {{ cancelText || t("popconfirm.cancelText") }}
        </Button>
        <Button
          variant="text"
          size="xs"
          v-bind="confirmButtonProps"
          :loading="mergedConfirmButtonLoading"
          :disabled="confirmButtonProps?.disabled || guardPending"
          @click="handleConfirm"
        >
          {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
        </Button>
      </div>
      </div>
    </template>
  </trigger>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from "vue"
import { useId } from '../_utils/vue-compat';
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { IconInfoCircleFill } from "@cedar-design/icons-vue/icon-info-circle-fill";
import { IconCheckCircleFill } from "@cedar-design/icons-vue/icon-check-circle-fill";
import { IconExclamationCircleFill } from "@cedar-design/icons-vue/icon-exclamation-circle-fill";
import { IconCloseCircleFill } from "@cedar-design/icons-vue/icon-close-circle-fill";
import Button from "../button";
import Trigger from "../trigger";
import { useI18n } from "../locale";
import { isBoolean, isFunction, isPromise } from "../_utils/is";
import { invokeBeforeHook, useActionGuard } from "../_hooks/use-action-guard";
import { popconfirmProps } from "./props";

export default defineComponent({
  name: createNamespace("popconfirm").name,
  components: {
    Button,
    Trigger,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
  },
  props: popconfirmProps,
  emits: {
    "guard-error": (error: unknown, action: "confirm" | "cancel") => true,
    "update:open": (visible: boolean) => true,
    /**
     * @zh 请求更新气泡确认框的显隐状态时触发；受控父组件可能不接受
     * @en Emitted when a visibility update is requested; a controlled parent may decline it
     * @param {boolean} visible
     */
    "open-change": (visible: boolean) => true,
    /**
     * @zh 点击确认按钮时触发
     * @en Triggered when the confirm button is clicked
     */
    confirm: () => true,
    /**
     * @zh 点击取消按钮时触发
     * @en Triggered when the cancel button is clicked
     */
    cancel: () => true,
  },
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("popconfirm");
    const { t } = useI18n();
    const dialogId = `c-popconfirm-${useId()}`;
    const contentId = `${dialogId}-content`;
    const dialogRef = ref<HTMLElement>();
    const triggerRef = ref<{ getReference: () => HTMLElement | undefined }>();

    const _open = ref(props.defaultOpen);
    const computedOpen = computed(() => props.open ?? _open.value);
    const referenceAttrs = computed(() => ({
      "aria-haspopup": "dialog",
      "aria-expanded": String(computedOpen.value),
      "aria-controls": dialogId,
    }));
    const focusDialog = async () => {
      await nextTick();
      if (computedOpen.value) dialogRef.value?.focus({ preventScroll: true });
    };
    onMounted(() => { if (computedOpen.value) void focusDialog(); });
    watch(computedOpen, (open, previous) => {
      if (open) void focusDialog();
      else if (previous && dialogRef.value?.contains(dialogRef.value.ownerDocument.activeElement)) {
        const reference = triggerRef.value?.getReference();
        if (reference?.isConnected) reference.focus({ preventScroll: true });
      }
    }, { flush: "sync" });
    const guard = useActionGuard();
    const pendingAction = ref<"confirm" | "cancel">();
    const mergedConfirmButtonLoading = computed(
      () =>
        props.confirmButtonLoading || Boolean(props.confirmButtonProps?.loading) ||
        (guard.pending.value && pendingAction.value === "confirm"),
    );

    let operation = 0;
    const retire = () => {
      operation++;
      guard.cancel();
    };
    const close = () => {
      retire();
      _open.value = false;
      emit("update:open", false);
      emit("open-change", false);
    };
    const handleOpenChange = (visible: boolean) => {
      if (!visible) close();
      else {
        _open.value = true;
        emit("update:open", true);
        emit("open-change", true);
      }
    };
    watch(computedOpen, retire, { flush: "sync" });
    watch(
      [
        () => props.beforeConfirm,
        () => props.beforeCancel,
        () => props.confirmButtonProps?.disabled,
        () => props.cancelButtonProps?.disabled,
      ],
      retire,
      { flush: "sync" },
    );
    const requestAction = async (
      action: "confirm" | "cancel",
      event?: Event,
    ) => {
      if (
        !computedOpen.value ||
        guard.pending.value ||
        (action === "confirm"
          ? props.confirmButtonProps?.disabled
          : props.cancelButtonProps?.disabled)
      )
        return;
      const id = ++operation;
      pendingAction.value = action;
      const hook =
        action === "confirm" ? props.beforeConfirm : props.beforeCancel;
      if (!hook) {
        if (action === "confirm") emit("confirm"); else emit("cancel");
        close();
        return;
      }
      const outcome = await guard.run(
        action,
        (_action, context) =>
          hook ? invokeBeforeHook((done) => hook({ action: _action } as never, done, context), context) : true,
        event,
      );
      if (id !== operation || !computedOpen.value) return;
      if (outcome.status === "allowed") {
        if (action === "confirm") emit("confirm");
        else emit("cancel");
        close();
      } else if (outcome.status === "error")
        emit("guard-error", outcome.error, action);
    };
    const handleConfirm = (event?: Event) => requestAction("confirm", event);
    const handleCancel = (event?: Event) => requestAction("cancel", event);

    const contentCls = computed(() => [
      `${prefixCls}-popup-content`,
      props.contentClass,
    ]);

    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass,
    ]);

    return {
      prefixCls,
      triggerRef,
      dialogRef,
      dialogId,
      contentId,
      referenceAttrs,
      guardPending: guard.pending,
      pendingAction,
      contentCls,
      arrowCls,
      computedOpen,
      mergedConfirmButtonLoading,
      handleOpenChange,
      handleConfirm,
      handleCancel,
      t,
    };
  },
});
</script>

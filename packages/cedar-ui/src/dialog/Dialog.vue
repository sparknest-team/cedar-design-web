<template>
  <teleport
    :to="popupContainerTarget"
    :disabled="popupContainer === false || teleportDisabled"
  >
    <div
      v-if="!unmountOnClose || transition.shouldRender.value"
      v-show="mergedOpen || transition.leaving.value"
      ref="dialogRoot"
      :dir="readingDirection"
      :class="`${prefixCls}-container`"
      :style="{ zIndex: mergedZIndex }"
      v-bind="$attrs"
    >
      <transition :name="overlayAnimationName" appear>
        <div
          v-if="overlay"
          v-show="mergedOpen"
          :class="[`${prefixCls}-overlay`, overlayClass]"
          :style="overlayStyle"
          role="presentation"
        />
      </transition>
      <div
        ref="wrapperRef"
        :class="wrapperCls"
        @pointerdown.self="handleOverlayPointerDown"
        @click.self="handleOverlayClick"
      >
        <transition
          :name="dialogAnimationName"
          appear
          @after-enter="opened"
          @after-leave="handleClosed"
        >
          <div
            v-show="mergedOpen"
            ref="dialogRef"
            data-modal-focus-root
            role="dialog"
            :aria-busy="dialog.pending.value || undefined"
            tabindex="-1"
            aria-modal="true"
            :aria-label="ariaLabel || (!$slots.title ? title : undefined)"
            :class="dialogCls"
            :style="mergedDialogStyle"
          >
            <div
              v-if="!hideTitle && ($slots.title || title || closable)"
              :class="`${prefixCls}-header`"
              @pointerdown="drag.handlePointerDown"
            >
              <div
                v-if="$slots.title || title"
                :class="[
                  `${prefixCls}-title`,
                  `${prefixCls}-title-align-${titleAlign}`,
                ]"
              >
                <div v-if="type" :class="`${prefixCls}-title-icon`">
                  <icon-info-circle-fill v-if="type === 'info'" />
                  <icon-check-circle-fill v-if="type === 'success'" />
                  <icon-exclamation-circle-fill v-if="type === 'warning'" />
                  <icon-close-circle-fill v-if="type === 'error'" />
                </div>
                <slot name="title">{{ title }}</slot>
              </div>
              <button
                v-if="closable"
                type="button"
                :aria-label="closeButtonAriaLabel"
                :class="`${prefixCls}-close-btn`"
                @click="handleClose"
              >
                <icon-hover><icon-close /></icon-hover>
              </button>
            </div>
            <div
              :class="[`${prefixCls}-body`, bodyClass]"
              :style="[{ textAlign: messageAlign }, bodyStyle]"
            >
              <PendingFeedback :loading="dialog.pending.value && (dialog.pendingAction.value === 'close' || !showFooter || !!$slots.footer)" /><slot>{{ message }}</slot>
            </div>
            <div v-if="showFooter" :class="`${prefixCls}-footer`">
              <slot
                name="footer"
                :cancel="handleCancel"
                :confirm="handleConfirm"
                :close="handleClose"
              >
                <Button
                  v-if="cancelButton"
                  variant="text"
                  v-bind="cancelButtonProps"
                  :loading="mergedCancelButtonLoading"
                  :disabled="mergedCancelButtonDisabled"
                  @click="handleCancel"
                >
                  {{ cancelButtonText || t("dialog.cancelButtonText") }}
                </Button>
                <Button
                  v-if="confirmButton"
                  variant="text"
                  v-bind="confirmButtonProps"
                  :loading="mergedConfirmButtonLoading"
                  :disabled="mergedConfirmButtonDisabled"
                  @click="handleConfirm"
                >
                  {{ confirmButtonText || t("dialog.confirmButtonText") }}
                </Button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import PendingFeedback from '../_components/pending-feedback/PendingFeedback.vue'
import { useDirection } from '../_utils/direction'
import { computed, ref, toRef, useSlots, type CSSProperties } from "vue";
import { IconCheckCircleFill } from "@cedar-design/icons-vue/icon-check-circle-fill";
import { IconClose } from "@cedar-design/icons-vue/icon-close";
import { IconCloseCircleFill } from "@cedar-design/icons-vue/icon-close-circle-fill";
import { IconExclamationCircleFill } from "@cedar-design/icons-vue/icon-exclamation-circle-fill";
import { IconInfoCircleFill } from "@cedar-design/icons-vue/icon-info-circle-fill";
import IconHover from "../_components/IconHover.vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { isNumber } from "../_utils/is";
import {
  useModalSurface,
  type ModalSurfaceCloseRequest,
} from "../_utils/modal-surface";
import Button from "../button";
import { useI18n } from "../locale";
import { dialogProps } from "./props";
import type { DialogAction } from "./types";
import { useDialog } from "./use-dialog";
import { useDialogDrag } from "./use-dialog-drag";

defineOptions({ name: createNamespace("dialog").name, inheritAttrs: false });

const props = defineProps(dialogProps);
const { dir: readingDirection } = useDirection(undefined, () => props.dir)
const emit = defineEmits<{
  (event: "guard-error", error: unknown, action: DialogAction): void;
  (event: "update:open", value: boolean): void;
  (event: "open" | "opened" | "close" | "closed"): void;
  (event: "confirm" | "cancel", value: Event): void;
  (event: "click-overlay", value: MouseEvent): void;
  (event: "key-escape", value: KeyboardEvent): void;
}>();
const slots = useSlots();
const prefixCls = getPrefixCls("dialog");
const { t } = useI18n();
const dialogRoot = ref<HTMLElement>();
const wrapperRef = ref<HTMLElement>();
const dialogRef = ref<HTMLElement>();

const surface = useModalSurface({
  open: () => props.open,
  defaultOpen: () => props.defaultOpen,
  unmountOnClose: () => props.unmountOnClose,
  lockScroll: () => props.lockScroll,
  overlayClosable: () => props.overlay && props.overlayClosable,
  escToClose: () => props.escToClose,
  closeOnRouteChange: () => props.closeOnRouteChange,
  popupContainer: () => props.popupContainer,
  zIndex: () => props.zIndex,
  root: dialogRoot,
  emit,
  onRequestClose: handleSurfaceClose,
});
const {
  mergedOpen,
  mergedZIndex,
  popupContainerTarget,
  teleportDisabled,
  transition,
  handleOverlayPointerDown,
  handleOverlayClick,
  opened,
  closed,
} = surface;

const dialog = useDialog({
  open: mergedOpen,
  beforeClose: () => props.beforeClose,
  onGuardError: (error, action) => emit("guard-error", error, action),
  confirmButtonLoading: () =>
    props.confirmButtonLoading || Boolean(props.confirmButtonProps?.loading),
  cancelButtonLoading: () =>
    props.cancelButtonLoading || Boolean(props.cancelButtonProps?.loading),
  confirmButtonDisabled: () =>
    props.confirmButtonDisabled || Boolean(props.confirmButtonProps?.disabled),
  cancelButtonDisabled: () =>
    props.cancelButtonDisabled || Boolean(props.cancelButtonProps?.disabled),
  commitOpen: (open) => {
    mergedOpen.value = open;
  },
  emitAction(action: DialogAction, event?: Event) {
    if (action === "confirm") {
      emit("confirm", event ?? new Event("confirm"));
    }
    if (action === "cancel") {
      emit("cancel", event ?? new Event("cancel"));
    }
  },
});
const {
  mergedConfirmButtonLoading,
  mergedCancelButtonLoading,
  mergedConfirmButtonDisabled,
  mergedCancelButtonDisabled,
  requestClose,
  close,
} = dialog;

const draggable = computed(() => props.draggable && !props.fullscreen);
const drag = useDialogDrag({
  enabled: draggable,
  fullscreen: toRef(props, "fullscreen"),
});
const showFooter = computed(
  () =>
    props.footer &&
    (props.confirmButton || props.cancelButton || Boolean(slots.footer)),
);
const wrapperCls = computed(() => [
  `${prefixCls}-wrapper`,
  {
    [`${prefixCls}-wrapper-align-center`]:
      props.alignCenter && !props.fullscreen,
    [`${prefixCls}-wrapper-moved`]: drag.x.value !== 0 || drag.y.value !== 0,
  },
]);
const dialogCls = computed(() => [
  prefixCls,
  props.dialogClass,
  {
    [`${prefixCls}-simple`]: props.simple,
    [`${prefixCls}-draggable`]: draggable.value,
    [`${prefixCls}-fullscreen`]: props.fullscreen,
  },
]);
const mergedDialogStyle = computed<CSSProperties>(() => ({
  ...(props.dialogStyle ?? {}),
  width:
    props.width && !props.fullscreen
      ? isNumber(props.width)
        ? `${props.width}px`
        : props.width
      : undefined,
  top:
    !props.alignCenter && props.top
      ? isNumber(props.top)
        ? `${props.top}px`
        : props.top
      : undefined,
  transform:
    drag.x.value || drag.y.value
      ? `translate(${drag.x.value}px, ${drag.y.value}px)`
      : undefined,
}));

function handleSurfaceClose(request: ModalSurfaceCloseRequest) {
  requestClose("close", request.event);
}
function handleClose(event?: Event) {
  requestClose("close", event);
}
function handleConfirm(event?: Event) {
  requestClose("confirm", event);
}
function handleCancel(event?: Event) {
  requestClose("cancel", event);
}
function handleClosed() {
  if (!mergedOpen.value) {
    drag.reset();
  }
  closed();
}

defineExpose({ close, confirm: handleConfirm, cancel: handleCancel });
</script>

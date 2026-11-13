<template>
  <teleport
    :to="popupContainerTarget"
    :disabled="popupContainer === false || teleportDisabled"
  >
    <div
      v-if="!unmountOnClose || transition.shouldRender.value"
      v-show="mergedOpen || transition.leaving.value"
      ref="drawerRoot"
      :dir="readingDirection"
      :class="`${prefixCls}-container`"
      :style="containerStyle"
      v-bind="mergeProps(themeScope, $attrs)"
    >
      <component :is="Transition" :name="overlayAnimationName" appear>
        <div
          v-if="overlay"
          v-show="mergedOpen"
          :class="[`${prefixCls}-overlay`, overlayClass]"
          :style="overlayStyle"
          role="presentation"
          @pointerdown="handleOverlayPointerDown"
          @click="handleOverlayClick"
        />
      </component>
      <component
        :is="Transition"
        persisted
        :name="`slide-${placement}-drawer`"
        appear
        @after-enter="opened"
        @after-leave="closed"
      >
        <div
          v-show="mergedOpen"
          ref="drawerRef"
          data-modal-focus-root
          tabindex="-1"
          role="dialog"
            :aria-busy="dialog.pending.value || undefined"
          aria-modal="true"
          :aria-label="ariaLabel || (!$slots.title ? title : undefined)"
          :aria-labelledby="titleLabelledby()"
          :class="[prefixCls, drawerClass]"
          :style="panelStyle"
        >
          <div v-if="header" :class="[`${prefixCls}-header`, { [`${prefixCls}-header--divider`]: topDivider }]">
            <slot name="header">
              <div v-if="$slots.title || title" :id="titleLabelledby()" :class="`${prefixCls}-title`">
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
            </slot>
          </div>
          <div :class="[`${prefixCls}-body`, bodyClass]" :style="bodyStyle">
            <PendingFeedback :loading="dialog.pending.value && (dialog.pendingAction.value === 'close' || !footer || !!$slots.footer)" /><slot />
          </div>
          <div v-if="footer" :class="[`${prefixCls}-footer`, { [`${prefixCls}-footer--divider`]: bottomDivider }]">
            <slot
              name="footer"
              :cancel="handleCancel"
              :confirm="handleConfirm"
              :close="handleClose"
            >
              <Button
                v-if="cancelButton"
                v-bind="cancelButtonProps"
                :loading="mergedCancelButtonLoading"
                :disabled="mergedCancelButtonDisabled"
                @click="handleCancel"
              >
                {{ cancelButtonText || t("drawer.cancelText") }}
              </Button>
              <Button
                variant="text"
                v-bind="confirmButtonProps"
                :loading="mergedConfirmButtonLoading"
                :disabled="mergedConfirmButtonDisabled"
                @click="handleConfirm"
              >
                {{ confirmButtonText || t("drawer.confirmButtonText") }}
              </Button>
            </slot>
          </div>
        </div>
      </component>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useThemeScope } from '../theme-provider/context'
import PendingFeedback from '../_components/pending-feedback/PendingFeedback.vue'
import { useDirection } from '../_utils/direction'
import { Transition, computed, mergeProps, ref, useSlots, type CSSProperties } from 'vue';
import { IconClose } from '@cedar-design/icons-vue/icon-close';
import { createNamespace, getPrefixCls } from '../_utils/global-config';
import { isNumber } from '../_utils/is';
import {
  useModalSurface,
  type ModalSurfaceCloseRequest,
} from '../_utils/modal-surface';
import Button from "../button";
import IconHover from "../_components/IconHover.vue";
import { useI18n } from '../locale';
import { useDialog } from '../dialog/use-dialog';
import { drawerProps } from './props';
import type { DrawerAction } from "./types";
import { useDrawerTitleId } from './title-id';


const themeScope = useThemeScope()

defineOptions({
  name: createNamespace("drawer").name,
  inheritAttrs: false,
});

const props = defineProps(drawerProps);
const { dir: readingDirection } = useDirection(undefined, () => props.dir)
const emit = defineEmits<{
  (event: "guard-error", error: unknown, action: DrawerAction): void;
  (event: "update:open", value: boolean): void;
  (event: "open" | "opened" | "close" | "closed"): void;
  (event: "confirm" | "cancel", value: Event): void;
  (event: "click-overlay", value: MouseEvent): void;
  (event: "key-escape", value: KeyboardEvent): void;
}>();

const prefixCls = getPrefixCls("drawer");
const slots = useSlots();
const titleId = useDrawerTitleId(prefixCls);
const titleLabelledby = () => !props.ariaLabel && props.header && !slots.header && slots.title ? titleId : undefined;
const { t } = useI18n();
const drawerRoot = ref<HTMLElement>();
const drawerRef = ref<HTMLElement>();
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
  root: drawerRoot,
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
  confirmButtonLoading: () => props.confirmButtonLoading,
  cancelButtonLoading: () => props.cancelButtonLoading,
  confirmButtonDisabled: () => props.confirmButtonDisabled,
  cancelButtonDisabled: () => props.cancelButtonDisabled,
  commitOpen: (open) => {
    mergedOpen.value = open;
  },
  emitAction: (action, event) => {
    if (action === "confirm") emit("confirm", event ?? new Event("confirm"));
    if (action === "cancel") emit("cancel", event ?? new Event("cancel"));
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

const isFixed = computed(() => {
  if (props.popupContainer === false) {
    return false;
  }
  const target = popupContainerTarget.value;
  return (
    target === "body" ||
    (typeof target !== "string" && target === target.ownerDocument.body)
  );
});
const containerStyle = computed<CSSProperties>(() =>
  isFixed.value
    ? { zIndex: mergedZIndex.value }
    : { zIndex: mergedZIndex.value, position: "absolute" },
);
const panelStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    [props.placement]: 0,
    ...(props.drawerStyle ?? {}),
  };
  if (props.placement === "right" || props.placement === "left") {
    style.width = isNumber(props.width) ? `${props.width}px` : props.width;
  } else {
    style.height = isNumber(props.height) ? `${props.height}px` : props.height;
  }
  return style;
});

function handleSurfaceClose(request: ModalSurfaceCloseRequest) {
  requestClose("close", request.event);
}
function handleConfirm(event?: Event) {
  requestClose("confirm", event);
}
function handleCancel(event?: Event) {
  requestClose("cancel", event);
}
function handleClose(event?: Event) {
  requestClose("close", event);
}

defineExpose({ close, confirm: handleConfirm, cancel: handleCancel });
</script>

<template>
  <client-only>
    <teleport :to="popupContainerTarget" :disabled="popupContainerDisabled">
      <div
        v-if="!unmountOnClose || computedOpen || mounted"
        v-show="computedOpen || mounted"
        :class="`${prefixCls}-container`"
        :style="{ zIndex: mergedZIndex }"
        v-bind="$attrs"
      >
        <transition :name="maskAnimationName" appear>
          <div
            v-if="mask"
            v-show="computedOpen"
            ref="maskRef"
            :class="[`${prefixCls}-mask`, maskClass]"
            :style="maskStyle"
          />
        </transition>
        <div
          ref="wrapperRef"
          :class="wrapperCls"
          @click.self="handleMaskClick"
          @mousedown.self="handleMaskMouseDown"
        >
          <transition
            :name="dialogAnimationName"
            appear
            @after-enter="handleOpened"
            @after-leave="handleClosed"
          >
            <div
              v-show="computedOpen"
              ref="dialogRef"
              role="dialog"
              tabindex="-1"
              aria-modal="true"
              :aria-label="ariaLabel || (!$slots.title ? title : undefined)"
              :class="dialogCls"
              :style="mergedDialogStyle"
              @keydown="handleFocusTrap"
            >
              <div
                v-if="!hideTitle && ($slots.title || title || closable)"
                :class="`${prefixCls}-header`"
                @mousedown="handleMoveDown"
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
                  <icon-hover>
                    <icon-close />
                  </icon-hover>
                </button>
              </div>
              <div
                :class="[`${prefixCls}-body`, bodyClass]"
                :style="[{ textAlign: messageAlign }, bodyStyle]"
              >
                <slot>{{ message }}</slot>
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
                    {{ cancelDisplayText }}
                  </Button>
                  <Button
                    v-if="confirmButton"
                    variant="text"
                    v-bind="confirmButtonProps"
                    :loading="mergedConfirmButtonLoading"
                    :disabled="mergedConfirmButtonDisabled"
                    @click="handleConfirm"
                  >
                    {{ confirmButtonDisplayText }}
                  </Button>
                </slot>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </teleport>
  </client-only>
</template>

<script lang="tsx">
import type { CSSProperties } from "vue";
import {
  defineComponent,
  computed,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  toRefs,
  nextTick,
} from "vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import ClientOnly from "../_components/client-only";
import IconHover from "../_components/icon-hover.vue";
import Button from "../button";
import { IconClose } from "@cedarjs/icons-vue/icon-close";
import { IconInfoCircleFill } from "@cedarjs/icons-vue/icon-info-circle-fill";
import { IconCheckCircleFill } from "@cedarjs/icons-vue/icon-check-circle-fill";
import { IconExclamationCircleFill } from "@cedarjs/icons-vue/icon-exclamation-circle-fill";
import { IconCloseCircleFill } from "@cedarjs/icons-vue/icon-close-circle-fill";
import { useI18n } from "../locale";
import { useOverflow } from "../_hooks/use-overflow";
import { getElement, off, on } from "../_utils/dom";
import usePopupManager from "../_hooks/use-popup-manager";
import { isFunction, isNumber } from "../_utils/is";
import { KEYBOARD_KEY } from "../_utils/keyboard";
import { useDraggable } from "./hooks/use-draggable";
import type { DialogAction, DialogBeforeCloseRefs, DialogType } from "./types";
import { dialogProps } from "./props";

export default defineComponent({
  name: createNamespace("dialog").name,
  components: {
    ClientOnly,
    Button,
    IconHover,
    IconClose,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
  },
  inheritAttrs: false,
  props: dialogProps,
  emits: {
    "update:open": (show: boolean) => true,
    confirm: (e: Event) => true,
    cancel: (e: Event) => true,
    open: () => true,
    opened: () => true,
    close: () => true,
    closed: () => true,
    "click-mask": (e: Event) => true,
    "key-escape": (e: KeyboardEvent) => true,
  },
  setup(props, { emit, slots, expose }) {
    const { fullscreen, alignCenter } = toRefs(props);
    const prefixCls = getPrefixCls("dialog");
    const { t } = useI18n();
    const wrapperRef = ref<HTMLElement>();
    const dialogRef = ref<HTMLElement>();
    let previouslyFocused: HTMLElement | null = null;

    const _open = ref(props.defaultOpen);
    const computedOpen = computed(() => props.open ?? _open.value);
    const _confirmButtonLoading = ref(false);
    const _cancelButtonLoading = ref(false);
    const _confirmButtonDisabled = ref(false);
    const _cancelButtonDisabled = ref(false);
    const mergedConfirmButtonLoading = computed(
      () => props.confirmButtonLoading || _confirmButtonLoading.value,
    );
    const mergedCancelButtonLoading = computed(
      () => props.cancelButtonLoading || _cancelButtonLoading.value,
    );
    const mergedConfirmButtonDisabled = computed(
      () => props.confirmButtonDisabled || _confirmButtonDisabled.value,
    );
    const mergedCancelButtonDisabled = computed(
      () => props.cancelButtonDisabled || _cancelButtonDisabled.value,
    );
    const mergedDraggable = computed(
      () => props.draggable && !props.fullscreen,
    );

    const beforeCloseRefs: DialogBeforeCloseRefs = {
      confirmButtonLoading: _confirmButtonLoading,
      cancelButtonLoading: _cancelButtonLoading,
      confirmButtonDisabled: _confirmButtonDisabled,
      cancelButtonDisabled: _cancelButtonDisabled,
    };

    const popupContainerDisabled = computed(
      () => props.popupContainer === false,
    );
    const popupContainerTarget = computed(() =>
      props.popupContainer === false ? "body" : props.popupContainer || "body",
    );

    const containerRef = ref<HTMLElement>();
    const mounted = ref(computedOpen.value);

    const confirmButtonDisplayText = computed(
      () => props.confirmButtonText || t("dialog.confirmButtonText"),
    );
    const cancelDisplayText = computed(
      () => props.cancelButtonText || t("dialog.cancelButtonText"),
    );

    const showFooter = computed(() => {
      if (!props.footer) {
        return false;
      }

      return props.confirmButton || props.cancelButton || Boolean(slots.footer);
    });

    const { zIndex: managedZIndex, isLastDialog } = usePopupManager("dialog", {
      visible: computedOpen,
    });
    const mergedZIndex = computed(() => props.zIndex ?? managedZIndex.value);

    let globalKeyDownListener = false;

    const handleGlobalKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
        handleKeyEscape(ev);
      }
    };

    const addGlobalKeyDownListener = () => {
      if (!globalKeyDownListener) {
        globalKeyDownListener = true;
        on(document.documentElement, "keydown", handleGlobalKeyDown);
      }
    };

    const removeGlobalKeyDownListener = () => {
      globalKeyDownListener = false;
      off(document.documentElement, "keydown", handleGlobalKeyDown);
    };

    const { position, handleMoveDown } = useDraggable({
      wrapperRef,
      modalRef: dialogRef,
      draggable: mergedDraggable,
      alignCenter,
    });

    const commitClose = (action: DialogAction, e?: Event) => {
      if (_confirmButtonLoading.value) {
        _confirmButtonLoading.value = false;
      }
      if (_cancelButtonLoading.value) {
        _cancelButtonLoading.value = false;
      }
      if (_confirmButtonDisabled.value) {
        _confirmButtonDisabled.value = false;
      }
      if (_cancelButtonDisabled.value) {
        _cancelButtonDisabled.value = false;
      }
      _open.value = false;
      if (action === "confirm") {
        emit("confirm", e ?? new Event("confirm"));
      } else if (action === "cancel") {
        emit("cancel", e ?? new Event("cancel"));
      }
      emit("update:open", false);
    };

    const requestClose = (action: DialogAction, e?: Event) => {
      if (isFunction(props.beforeClose)) {
        let completed = false;
        props.beforeClose(
          action,
          () => {
            if (!completed) {
              completed = true;
              commitClose(action, e);
            }
          },
          beforeCloseRefs,
        );
        return;
      }
      commitClose(action, e);
    };

    const handleConfirm = (e?: Event) => {
      requestClose("confirm", e);
    };

    const handleCancel = (e?: Event) => {
      requestClose("cancel", e);
    };

    const handleClose = (e?: Event) => {
      requestClose("close", e);
    };

    const close = () => {
      commitClose("close");
    };

    const handleKeyEscape = (e: KeyboardEvent) => {
      emit("key-escape", e);

      if (!props.escToClose) {
        return;
      }

      handleClose(e);
    };

    const currentIsMask = ref(false);

    const handleMaskMouseDown = (ev: Event) => {
      if (ev.target === wrapperRef.value) {
        currentIsMask.value = true;
      }
    };

    const handleMaskClick = (e: Event) => {
      emit("click-mask", e);

      if (props.mask && props.maskClosable && currentIsMask.value) {
        handleClose(e);
      }
    };

    const handleOpened = () => {
      if (computedOpen.value) {
        dialogRef.value?.focus();
        emit("opened");
      }
    };

    const restoreFocus = () => {
      previouslyFocused?.focus();
      previouslyFocused = null;
    };

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== KEYBOARD_KEY.TAB || !dialogRef.value) return;

      const focusable = Array.from(
        dialogRef.value.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hidden);

      if (!focusable.length) {
        e.preventDefault();
        dialogRef.value.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const handleClosed = () => {
      if (!computedOpen.value) {
        if (mergedDraggable.value) {
          position.value = undefined;
        }

        mounted.value = false;
        resetOverflow();
        restoreFocus();
        emit("closed");
      }
    };

    const { setOverflowHidden, resetOverflow } = useOverflow(containerRef);

    onMounted(() => {
      containerRef.value = getElement(popupContainerTarget.value);
      if (computedOpen.value) {
        previouslyFocused =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        emit("open");
        if (props.lockScroll) {
          setOverflowHidden();
        }
        addGlobalKeyDownListener();
        nextTick(() => dialogRef.value?.focus());
      }
    });

    onBeforeUnmount(() => {
      resetOverflow();
      removeGlobalKeyDownListener();
      restoreFocus();
    });

    watch(computedOpen, (value: boolean) => {
      if (_open.value !== value) {
        _open.value = value;
      }
      if (value) {
        previouslyFocused =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        emit("open");
        mounted.value = true;
        currentIsMask.value = false;
        if (props.lockScroll) {
          setOverflowHidden();
        }
        addGlobalKeyDownListener();
      } else {
        emit("close");
        removeGlobalKeyDownListener();
      }
    });

    watch(fullscreen, () => {
      if (position.value) {
        position.value = undefined;
      }
    });

    const wrapperCls = computed(() => [
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-wrapper-align-center`]:
          props.alignCenter && !props.fullscreen,
        [`${prefixCls}-wrapper-moved`]: Boolean(position.value),
      },
    ]);

    const dialogCls = computed(() => [
      `${prefixCls}`,
      props.dialogClass,
      {
        [`${prefixCls}-simple`]: props.simple,
        [`${prefixCls}-draggable`]: mergedDraggable.value,
        [`${prefixCls}-fullscreen`]: props.fullscreen,
      },
    ]);

    const mergedDialogStyle = computed(() => {
      const style: CSSProperties = {
        ...(props.dialogStyle ?? {}),
      };
      if (props.width && !props.fullscreen) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      if (!props.alignCenter && props.top) {
        style.top = isNumber(props.top) ? `${props.top}px` : props.top;
      }
      if (position.value) {
        style.transform = `translate(${position.value[0]}px, ${position.value[1]}px)`;
      }

      return style;
    });

    expose({ close, confirm: handleConfirm, cancel: handleCancel });

    return {
      prefixCls,
      mounted,
      computedOpen,
      containerRef,
      wrapperRef,
      mergedDialogStyle,
      confirmButtonDisplayText,
      cancelDisplayText,
      mergedZIndex,
      handleConfirm,
      handleCancel,
      handleClose,
      handleMaskClick,
      handleMaskMouseDown,
      handleOpened,
      handleClosed,
      handleFocusTrap,
      mergedConfirmButtonLoading,
      mergedCancelButtonLoading,
      mergedConfirmButtonDisabled,
      mergedCancelButtonDisabled,
      dialogRef,
      wrapperCls,
      dialogCls,
      popupContainerTarget,
      popupContainerDisabled,
      handleMoveDown,
      showFooter,
    };
  },
});
</script>

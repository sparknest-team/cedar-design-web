<template>
  <client-only>
    <teleport :to="teleportContainer" :disabled="popupContainer === false">
      <div
        v-if="!unmountOnClose || computedOpen || mounted"
        v-show="computedOpen || mounted"
        :class="`${prefixCls}-container`"
        :style="
          isFixed ? { zIndex } : { zIndex: 'inherit', position: 'absolute' }
        "
        v-bind="$attrs"
      >
        <transition :name="overlayAnimationName" appear>
          <div
            v-if="overlay"
            v-show="computedOpen"
            :class="[`${prefixCls}-overlay`, overlayClass]"
            :style="overlayStyle"
            @click="handleOverlay"
          />
        </transition>
        <transition
          :name="`slide-${placement}-drawer`"
          appear
          @after-enter="handleOpen"
          @after-leave="handleClose"
        >
          <div
            v-show="computedOpen"
            ref="drawerRef"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
            :aria-label="ariaLabel || (!$slots.title ? title : undefined)"
            :class="prefixCls"
            :style="style"
          >
            <div v-if="header" :class="`${prefixCls}-header`">
              <slot name="header">
                <div v-if="$slots.title || title" :class="`${prefixCls}-title`">
                  <slot name="title">{{ title }}</slot>
                </div>
                <button
                  v-if="closable"
                  type="button"
                  :aria-label="closeButtonAriaLabel"
                  :class="`${prefixCls}-close-btn`"
                  @click="handleCancel"
                >
                  <icon-hover>
                    <icon-close />
                  </icon-hover>
                </button>
              </slot>
            </div>
            <div :class="[`${prefixCls}-body`, bodyClass]" :style="bodyStyle">
              <slot />
            </div>
            <div v-if="footer" :class="`${prefixCls}-footer`">
              <slot name="footer">
                <Button
                  v-if="cancelButton"
                  v-bind="cancelButtonProps"
                  @click="handleCancel"
                >
                  {{ cancelText || t("drawer.cancelText") }}
                </Button>
                <Button
                  variant="text"
                  :loading="mergedConfirmButtonLoading"
                  v-bind="confirmButtonProps"
                  @click="handleConfirm"
                >
                  {{ confirmButtonText || t("drawer.confirmButtonText") }}
                </Button>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </teleport>
  </client-only>
</template>

<script lang="ts">
import type { CSSProperties } from "vue";
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  onActivated,
  onDeactivated,
  ref,
  toRefs,
  watch,
} from "vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import ClientOnly from "../_components/client-only";
import Button from "../button";
import IconHover from "../_components/icon-hover.vue";
import { IconClose } from "@cedarjs/icons-vue/icon-close";
import { useI18n } from "../locale";
import { useOverflow } from "../_hooks/use-overflow";
import { off, on } from "../_utils/dom";
import { useModalFocus } from "../_utils/modal-focus";
import usePopupManager from "../_hooks/use-popup-manager";
import { isBoolean, isFunction, isNumber, isPromise } from "../_utils/is";
import { KEYBOARD_KEY } from "../_utils/keyboard";
import { useTeleportContainer } from "../_hooks/use-teleport-container";
import { drawerProps } from "./props";

export default defineComponent({
  name: createNamespace("drawer").name,
  components: {
    ClientOnly,
    Button,
    IconHover,
    IconClose,
  },
  inheritAttrs: false,
  props: drawerProps,
  emits: {
    "update:open": (visible: boolean) => true,
    /**
     * @zh 点击确定按钮时触发
     * @en Triggered when the OK button is clicked
     * @property {MouseEvent} ev
     */
    confirm: (e: Event) => true,
    /**
     * @zh 点击取消、关闭按钮时触发
     * @en Triggered when the cancel or close button is clicked
     * @property {MouseEvent | KeyboardEvent} ev
     */
    cancel: (e: Event) => true,
    /**
     * @zh 抽屉打开后（动画结束）触发
     * @en Triggered after the drawer is opened (the animation ends)
     */
    open: () => true,
    /**
     * @zh 抽屉关闭后（动画结束）触发
     * @en Triggered when the drawer is closed (the animation ends)
     */
    close: () => true,
    /**
     * @zh 对话框打开前触发
     * @en Triggered before drawer is opened
     * @version 2.43.0
     */
    opened: () => true,
    /**
     * @zh 对话框关闭前触发
     * @en Triggered before drawer is closed
     * @version 2.43.0
     */
    closed: () => true,
    "click-overlay": (e: Event) => true,
  },
  /**
   * @zh 标题
   * @en Title
   * @slot title
   */
  /**
   * @zh 页脚
   * @en Footer
   * @slot footer
   */
  /**
   * @zh 页眉
   * @en Header
   * @slot header
   * @version 2.33.0
   */
  setup(props, { emit }) {
    const { popupContainer } = toRefs(props);
    const prefixCls = getPrefixCls("drawer");
    const { t } = useI18n();

    const _open = ref(props.defaultOpen);
    const computedOpen = computed(() => props.open ?? _open.value);
    const _confirmButtonLoading = ref(false);
    const mergedConfirmButtonLoading = computed(
      () => props.confirmButtonLoading || _confirmButtonLoading.value,
    );

    const { teleportContainer, containerRef } = useTeleportContainer({
      popupContainer,
      visible: computedOpen,
    });

    const mounted = ref(computedOpen.value);

    let globalKeyDownListener = false;

    const handleGlobalKeyDown = (ev: KeyboardEvent) => {
      if (props.escToClose && ev.key === KEYBOARD_KEY.ESC && isLastDialog(ev)) {
        handleCancel(ev);
      }
    };

    const addGlobalKeyDownListener = () => {
      if (props.escToClose && !globalKeyDownListener) {
        globalKeyDownListener = true;
        on(document.documentElement, "keydown", handleGlobalKeyDown);
      }
    };

    const removeGlobalKeyDownListener = () => {
      if (globalKeyDownListener) {
        globalKeyDownListener = false;
        off(document.documentElement, "keydown", handleGlobalKeyDown);
      }
    };

    const { zIndex, isLastDialog } = usePopupManager("dialog", {
      visible: computedOpen,
    });
    const drawerRef = ref<HTMLElement>();
    const { focus: focusDrawer, restore: restoreFocus } = useModalFocus(
      () => drawerRef.value, () => computedOpen.value, isLastDialog,
    );
    const isFixed = computed(() => {
      return containerRef?.value === document.body;
    });

    // Used to ignore closed Promises
    let promiseNumber = 0;

    const close = () => {
      promiseNumber++;
      if (_confirmButtonLoading.value) {
        _confirmButtonLoading.value = false;
      }
      _open.value = false;
      emit("update:open", false);
    };

    const handleConfirm = async (e: Event) => {
      const currentPromiseNumber = promiseNumber;
      const closed = await new Promise<boolean>(
        // eslint-disable-next-line no-async-promise-executor
        async (resolve) => {
          if (isFunction(props.beforeConfirm)) {
            let result = props.beforeConfirm((closed = true) =>
              resolve(closed),
            );
            if (isPromise(result) || !isBoolean(result)) {
              _confirmButtonLoading.value = true;
            }
            if (isPromise(result)) {
              try {
                // if beforeConfirm is Promise<void> ,set Defaults true
                result = (await result) ?? true;
              } catch (error) {
                result = false;
                throw error;
              }
            }
            if (isBoolean(result)) {
              resolve(result);
            }
          } else {
            resolve(true);
          }
        },
      );

      if (currentPromiseNumber === promiseNumber) {
        if (closed) {
          emit("confirm", e);
          close();
        } else if (_confirmButtonLoading.value) {
          _confirmButtonLoading.value = false;
        }
      }
    };

    const handleCancel = (e: Event) => {
      let result = true;
      if (isFunction(props.beforeCancel)) {
        result = props.beforeCancel() ?? false;
      }
      if (result) {
        emit("cancel", e);
        close();
      }
    };

    const handleOverlay = (e: Event) => {
      if (!isLastDialog(e)) return;
      emit("click-overlay", e);
      if (props.overlayClosable) {
        handleCancel(e);
      }
    };

    const handleOpen = () => {
      if (computedOpen.value) {
        focusDrawer();
        emit("opened");
      }
    };

    const handleClose = () => {
      if (!computedOpen.value) {
        mounted.value = false;
        resetOverflow();
        restoreFocus();
        emit("closed");
      }
    };

    const { setOverflowHidden, resetOverflow } = useOverflow(containerRef);
    onDeactivated(() => { resetOverflow(); removeGlobalKeyDownListener(); });
    onActivated(() => {
      if (computedOpen.value) { setOverflowHidden(); addGlobalKeyDownListener(); }
      else { mounted.value = false; resetOverflow(); }
    });

    onMounted(() => {
      if (computedOpen.value) {
        emit("open");
        mounted.value = true;
        setOverflowHidden();
        addGlobalKeyDownListener();
      }
    });

    onBeforeUnmount(() => {
      resetOverflow();
      removeGlobalKeyDownListener();
    });

    watch(computedOpen, (visible) => {
      if (_open.value !== visible) {
        _open.value = visible;
      }
      if (visible) {
        emit("open");
        mounted.value = true;
        setOverflowHidden();
        addGlobalKeyDownListener();
      } else {
        emit("close");
        removeGlobalKeyDownListener();
      }
    });

    const style = computed(() => {
      const style: CSSProperties = {
        [props.placement]: 0,
        ...(props.drawerStyle ?? {}),
      };
      if (["right", "left"].includes(props.placement)) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      } else {
        style.height = isNumber(props.height)
          ? `${props.height}px`
          : props.height;
      }
      return style;
    });

    return {
      drawerRef,
      prefixCls,
      style,
      t,
      mounted,
      computedOpen,
      mergedConfirmButtonLoading,
      zIndex,
      handleConfirm,
      handleCancel,
      handleOpen,
      handleClose,
      handleOverlay,
      isFixed,
      teleportContainer,
    };
  },
});
</script>

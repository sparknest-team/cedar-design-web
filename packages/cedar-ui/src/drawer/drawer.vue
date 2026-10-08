<template>
  <teleport :to="popupContainerTarget" :disabled="popupContainer === false || teleportDisabled">
    <div
      v-if="!unmountOnClose || transition.shouldRender.value"
      v-show="mergedOpen || transition.leaving.value"
      ref="drawerRoot"
      :class="`${prefixCls}-container`"
      :style="containerStyle"
      v-bind="$attrs"
    >
      <transition :name="overlayAnimationName" appear>
        <div
          v-if="overlay"
          v-show="mergedOpen"
          :class="[`${prefixCls}-overlay`, overlayClass]"
          :style="overlayStyle"
          role="presentation"
          @pointerdown="handleOverlayPointerDown"
          @click="handleOverlayClick"
        />
      </transition>
      <transition :name="`slide-${placement}-drawer`" appear @after-enter="opened" @after-leave="closed">
        <div
          v-show="mergedOpen"
          ref="drawerRef"
          data-modal-focus-root
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          :aria-label="ariaLabel || (!$slots.title ? title : undefined)"
          :class="[prefixCls, drawerClass]"
          :style="panelStyle"
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
                @click="handleClose"
              >
                <icon-hover><icon-close /></icon-hover>
              </button>
            </slot>
          </div>
          <div :class="[`${prefixCls}-body`, bodyClass]" :style="bodyStyle">
            <slot />
          </div>
          <div v-if="footer" :class="`${prefixCls}-footer`">
            <slot name="footer" :cancel="handleCancel" :confirm="handleConfirm" :close="handleClose">
              <Button
                v-if="cancelButton"
                v-bind="cancelButtonProps"
                :loading="mergedCancelButtonLoading"
                :disabled="mergedCancelButtonDisabled"
                @click="handleCancel"
              >
                {{ cancelButtonText || t('drawer.cancelText') }}
              </Button>
              <Button
                variant="text"
                v-bind="confirmButtonProps"
                :loading="mergedConfirmButtonLoading"
                :disabled="mergedConfirmButtonDisabled"
                @click="handleConfirm"
              >
                {{ confirmButtonText || t('drawer.confirmButtonText') }}
              </Button>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, ref, type CSSProperties } from 'vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { isFunction, isNumber } from '../_utils/is'
import { useModalSurface, type ModalSurfaceCloseRequest } from '../_utils/modal-surface'
import Button from '../button'
import IconHover from '../_components/IconHover.vue'
import { useI18n } from '../locale'
import { drawerProps } from './props'
import type { DrawerAction, DrawerBeforeCloseRefs } from './types'

defineOptions({
  name: createNamespace('drawer').name,
  inheritAttrs: false,
})

const props = defineProps(drawerProps)
const emit = defineEmits<{
  (event: 'update:open', value: boolean): void
  (event: 'open' | 'opened' | 'close' | 'closed'): void
  (event: 'confirm' | 'cancel', value: Event): void
  (event: 'click-overlay', value: MouseEvent): void
  (event: 'key-escape', value: KeyboardEvent): void
}>()

const prefixCls = getPrefixCls('drawer')
const { t } = useI18n()
const drawerRoot = ref<HTMLElement>()
const drawerRef = ref<HTMLElement>()
const confirmButtonLoading = ref(false)
const cancelButtonLoading = ref(false)
const confirmButtonDisabled = ref(false)
const cancelButtonDisabled = ref(false)

const beforeCloseRefs: DrawerBeforeCloseRefs = {
  confirmButtonLoading,
  cancelButtonLoading,
  confirmButtonDisabled,
  cancelButtonDisabled,
}
const mergedConfirmButtonLoading = computed(() => props.confirmButtonLoading || confirmButtonLoading.value)
const mergedCancelButtonLoading = computed(() => props.cancelButtonLoading || cancelButtonLoading.value)
const mergedConfirmButtonDisabled = computed(() => props.confirmButtonDisabled || confirmButtonDisabled.value)
const mergedCancelButtonDisabled = computed(() => props.cancelButtonDisabled || cancelButtonDisabled.value)

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
})
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
} = surface

const isFixed = computed(() => {
  if (props.popupContainer === false) {
    return false
  }
  const target = popupContainerTarget.value
  return target === 'body' || (typeof target !== 'string' && target === target.ownerDocument.body)
})
const containerStyle = computed<CSSProperties>(() =>
  isFixed.value
    ? { zIndex: mergedZIndex.value }
    : { zIndex: mergedZIndex.value, position: 'absolute' },
)
const panelStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = { [props.placement]: 0, ...(props.drawerStyle ?? {}) }
  if (props.placement === 'right' || props.placement === 'left') {
    style.width = isNumber(props.width) ? `${props.width}px` : props.width
  } else {
    style.height = isNumber(props.height) ? `${props.height}px` : props.height
  }
  return style
})

function resetTransientState() {
  confirmButtonLoading.value = false
  cancelButtonLoading.value = false
  confirmButtonDisabled.value = false
  cancelButtonDisabled.value = false
}

function commitClose(action: DrawerAction, event?: Event) {
  resetTransientState()
  if (action === 'confirm') {
    emit('confirm', event ?? new Event('confirm'))
  } else if (action === 'cancel') {
    emit('cancel', event ?? new Event('cancel'))
  }
  mergedOpen.value = false
}

function requestClose(action: DrawerAction, event?: Event) {
  if (!isFunction(props.beforeClose)) {
    commitClose(action, event)
    return
  }
  let completed = false
  props.beforeClose(action, () => {
    if (!completed) {
      completed = true
      commitClose(action, event)
    }
  }, beforeCloseRefs)
}

function handleSurfaceClose(request: ModalSurfaceCloseRequest) {
  requestClose('close', request.event)
}
function handleConfirm(event?: Event) {
  requestClose('confirm', event)
}
function handleCancel(event?: Event) {
  requestClose('cancel', event)
}
function handleClose(event?: Event) {
  requestClose('close', event)
}
function close() {
  commitClose('close')
}

defineExpose({ close, confirm: handleConfirm, cancel: handleCancel })
</script>

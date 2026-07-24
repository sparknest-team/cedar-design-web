<template>
  <client-only>
    <teleport :to="teleportTarget" :disabled="teleportDisabled">
      <div
        v-if="!unmountOnClose || computedShow || mounted"
        v-show="computedShow || mounted"
        :class="`${prefixCls}-container`"
        :style="{ zIndex }"
        v-bind="$attrs"
      >
        <transition :name="overlayAnimationName" appear>
          <div
            v-if="overlay"
            v-show="computedShow"
            ref="overlayRef"
            :class="`${prefixCls}-overlay`"
            :style="overlayStyle"
          />
        </transition>
        <div ref="wrapperRef" :class="wrapperCls" @click.self="handleOverlayClick" @mousedown.self="handleOverlayMouseDown">
          <transition :name="dialogAnimationName" appear @after-enter="handleOpened" @after-leave="handleClosed">
            <div v-show="computedShow" ref="dialogRef" :class="dialogCls" :style="mergedDialogStyle">
              <div
                v-if="!hideTitle && ($slots.title || title || closable)"
                :class="`${prefixCls}-header`"
                @mousedown="handleMoveDown"
              >
                <div
                  v-if="$slots.title || title"
                  :class="[`${prefixCls}-title`, `${prefixCls}-title-align-${titleAlign}`]"
                >
                  <div v-if="type" :class="`${prefixCls}-title-icon`">
                    <icon-info-circle-fill v-if="type === 'info'" />
                    <icon-check-circle-fill v-if="type === 'success'" />
                    <icon-exclamation-circle-fill v-if="type === 'warning'" />
                    <icon-close-circle-fill v-if="type === 'error'" />
                  </div>
                  <slot name="title">{{ title }}</slot>
                </div>
                <div
                  v-if="closable"
                  tabindex="-1"
                  role="button"
                  aria-label="Close"
                  :class="`${prefixCls}-close-btn`"
                  @click="handleCancel"
                >
                  <icon-hover>
                    <icon-close />
                  </icon-hover>
                </div>
              </div>
              <div :class="[`${prefixCls}-body`, bodyClass]" :style="bodyStyle">
                <slot>{{ message }}</slot>
              </div>
              <div v-if="showFooter" :class="`${prefixCls}-footer`">
                <slot name="footer" :cancel="handleCancel" :confirm="handleConfirm">
                  <Button
                    v-if="cancelButton"
                    v-bind="cancelButtonProps"
                    :loading="mergedCancelButtonLoading"
                    :disabled="mergedCancelButtonDisabled"
                    @click="handleCancel"
                  >
                    {{ cancelDisplayText }}
                  </Button>
                  <Button
                    type="primary"
                    v-bind="confirmButtonProps"
                    :loading="mergedConfirmButtonLoading"
                    :disabled="mergedConfirmButtonDisabled"
                    @click="handleConfirm"
                  >
                    {{ confirmDisplayText }}
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
import type { CSSProperties, PropType, StyleValue } from 'vue'
import { defineComponent, computed, ref, watch, onMounted, onBeforeUnmount, toRefs } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import ClientOnly from '../_components/client-only'
import IconHover from '../_components/icon-hover.vue'
import Button, { ButtonProps } from '../button'
import IconClose from '../icon/icon-close'
import IconInfoCircleFill from '../icon/icon-info-circle-fill'
import IconCheckCircleFill from '../icon/icon-check-circle-fill'
import IconExclamationCircleFill from '../icon/icon-exclamation-circle-fill'
import IconCloseCircleFill from '../icon/icon-close-circle-fill'
import { useI18n } from '../locale'
import { useOverflow } from '../_hooks/use-overflow'
import { getElement, off, on, contains } from '../_utils/dom'
import usePopupManager from '../_hooks/use-popup-manager'
import { isFunction, isNumber } from '../_utils/is'
import { KEYBOARD_KEY } from '../_utils/keyboard'
import { useDraggable } from './hooks/use-draggable'
import type { DialogAction, DialogBeforeCloseRefs, DialogType } from './types'

export default defineComponent({
  name: 'Dialog',
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
  props: {
    show: {
      type: Boolean,
      default: undefined,
    },
    defaultShow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
    },
    top: {
      type: [Number, String],
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    overlayClass: String,
    overlayStyle: {
      type: Object as PropType<CSSProperties>,
    },
    title: String,
    message: String,
    type: {
      type: String as PropType<DialogType>,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    titleAlign: {
      type: String as PropType<'start' | 'center'>,
      default: 'center',
    },
    alignCenter: {
      type: Boolean,
      default: true,
    },
    unmountOnClose: Boolean,
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    closeOnKeyEscape: {
      type: Boolean,
      default: true,
    },
    confirmButton: {
      type: Boolean,
      default: true,
    },
    cancelButton: {
      type: Boolean,
      default: true,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    confirmButtonText: String,
    cancelButtonText: String,
    confirmButtonLoading: {
      type: Boolean,
      default: false,
    },
    cancelButtonLoading: {
      type: Boolean,
      default: false,
    },
    confirmButtonDisabled: {
      type: Boolean,
      default: false,
    },
    cancelButtonDisabled: {
      type: Boolean,
      default: false,
    },
    confirmButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    cancelButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    teleport: {
      type: [String, Object, Boolean] as PropType<string | HTMLElement | false>,
      default: 'body',
    },
    dialogClass: {
      type: [String, Array] as PropType<string | any[]>,
    },
    dialogStyle: {
      type: Object as PropType<CSSProperties>,
    },
    onBeforeClose: {
      type: Function as PropType<(action: DialogAction, done: () => void, refs: DialogBeforeCloseRefs) => void>,
    },
    onConfirm: {
      type: Function as PropType<(e?: Event) => void>,
    },
    onCancel: {
      type: Function as PropType<(e?: Event) => void>,
    },
    onClickOverlay: {
      type: Function as PropType<() => void>,
    },
    onKeyEscape: {
      type: Function as PropType<() => void>,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    overlayAnimationName: {
      type: String,
      default: (props: Record<string, any>) => {
        if (props.fullscreen) {
          return 'fade-in-standard'
        }
        return 'fade-modal'
      },
    },
    dialogAnimationName: {
      type: String,
      default: (props: Record<string, any>) => {
        if (props.fullscreen) {
          return 'zoom-in'
        }
        return 'zoom-modal'
      },
    },
    bodyClass: {
      type: [String, Array] as PropType<string | any[]>,
    },
    bodyStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    zIndex: Number,
  },
  emits: {
    'update:show': (show: boolean) => true,
    confirm: (e: Event) => true,
    cancel: (e: Event) => true,
    open: () => true,
    opened: () => true,
    close: () => true,
    closed: () => true,
    'click-overlay': () => true,
    'key-escape': () => true,
  },
  setup(props, { emit, slots }) {
    const { fullscreen, alignCenter } = toRefs(props)
    const prefixCls = getPrefixCls('dialog')
    const { t } = useI18n()
    const wrapperRef = ref<HTMLElement>()
    const dialogRef = ref<HTMLElement>()

    const _show = ref(props.defaultShow)
    const computedShow = computed(() => props.show ?? _show.value)
    const _confirmButtonLoading = ref(false)
    const _cancelButtonLoading = ref(false)
    const _confirmButtonDisabled = ref(false)
    const _cancelButtonDisabled = ref(false)
    const mergedConfirmButtonLoading = computed(() => props.confirmButtonLoading || _confirmButtonLoading.value)
    const mergedCancelButtonLoading = computed(() => props.cancelButtonLoading || _cancelButtonLoading.value)
    const mergedConfirmButtonDisabled = computed(() => props.confirmButtonDisabled || _confirmButtonDisabled.value)
    const mergedCancelButtonDisabled = computed(() => props.cancelButtonDisabled || _cancelButtonDisabled.value)
    const mergedDraggable = computed(() => props.draggable && !props.fullscreen)

    const beforeCloseRefs: DialogBeforeCloseRefs = {
      confirmButtonLoading: _confirmButtonLoading,
      cancelButtonLoading: _cancelButtonLoading,
      confirmButtonDisabled: _confirmButtonDisabled,
      cancelButtonDisabled: _cancelButtonDisabled,
    }

    const teleportDisabled = computed(() => props.teleport === false)
    const teleportTarget = computed(() => (props.teleport === false ? 'body' : props.teleport || 'body'))

    const containerRef = ref<HTMLElement>()
    const mounted = ref(computedShow.value)

    const confirmDisplayText = computed(() => props.confirmButtonText || t('dialog.confirmButtonText'))
    const cancelDisplayText = computed(() => props.cancelButtonText || t('dialog.cancelButtonText'))

    const showFooter = computed(() => {
      if (!props.footer) {
        return false
      }

      return props.confirmButton || props.cancelButton || Boolean(slots.footer)
    })

    const { zIndex, isLastDialog } = usePopupManager('dialog', {
      visible: computedShow,
    })

    let globalKeyDownListener = false

    const handleGlobalKeyDown = (ev: KeyboardEvent) => {
      if (props.closeOnKeyEscape && ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
        handleKeyEscape(ev)
      }
    }

    const addGlobalKeyDownListener = () => {
      if (props.closeOnKeyEscape && !globalKeyDownListener) {
        globalKeyDownListener = true
        on(document.documentElement, 'keydown', handleGlobalKeyDown)
      }
    }

    const removeGlobalKeyDownListener = () => {
      globalKeyDownListener = false
      off(document.documentElement, 'keydown', handleGlobalKeyDown)
    }

    const { position, handleMoveDown } = useDraggable({
      wrapperRef,
      modalRef: dialogRef,
      draggable: mergedDraggable,
      alignCenter,
    })

    const close = () => {
      if (_confirmButtonLoading.value) {
        _confirmButtonLoading.value = false
      }
      if (_cancelButtonLoading.value) {
        _cancelButtonLoading.value = false
      }
      if (_confirmButtonDisabled.value) {
        _confirmButtonDisabled.value = false
      }
      if (_cancelButtonDisabled.value) {
        _cancelButtonDisabled.value = false
      }
      _show.value = false
      emit('update:show', false)
    }

    const done = () => {
      close()
    }

    const runBeforeClose = (action: DialogAction, e?: Event) => {
      if (isFunction(props.onBeforeClose)) {
        props.onBeforeClose(action, done, beforeCloseRefs)
        return true
      }

      return false
    }

    const handleConfirm = (e: Event) => {
      if (runBeforeClose('confirm', e)) {
        return
      }

      if (isFunction(props.onConfirm)) {
        props.onConfirm(e)
      }

      emit('confirm', e)
      close()
    }

    const handleCancel = (e: Event) => {
      if (runBeforeClose('cancel', e)) {
        return
      }

      if (isFunction(props.onCancel)) {
        props.onCancel(e)
      }

      emit('cancel', e)
      close()
    }

    const handleKeyEscape = (e: Event) => {
      if (isFunction(props.onKeyEscape)) {
        props.onKeyEscape()
      }

      emit('key-escape')

      if (!props.closeOnKeyEscape) {
        return
      }

      handleCancel(e)
    }

    const currentIsOverlay = ref(false)

    const handleOverlayMouseDown = (ev: Event) => {
      if (ev.target === wrapperRef.value) {
        currentIsOverlay.value = true
      }
    }

    const handleOverlayClick = (e: Event) => {
      if (isFunction(props.onClickOverlay)) {
        props.onClickOverlay()
      }

      emit('click-overlay')

      if (props.overlay && props.closeOnClickOverlay && currentIsOverlay.value) {
        if (runBeforeClose('close', e)) {
          return
        }

        if (isFunction(props.onCancel)) {
          props.onCancel(e)
        }

        emit('cancel', e)
        close()
      }
    }

    const handleOpened = () => {
      if (computedShow.value) {
        if (!contains(wrapperRef.value, document.activeElement) && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
        emit('opened')
      }
    }

    const handleClosed = () => {
      if (!computedShow.value) {
        if (mergedDraggable.value) {
          position.value = undefined
        }

        mounted.value = false
        resetOverflow()
        emit('closed')
      }
    }

    const { setOverflowHidden, resetOverflow } = useOverflow(containerRef)

    onMounted(() => {
      containerRef.value = getElement(teleportTarget.value)
      if (computedShow.value) {
        setOverflowHidden()
        if (props.closeOnKeyEscape) {
          addGlobalKeyDownListener()
        }
      }
    })

    onBeforeUnmount(() => {
      resetOverflow()
      removeGlobalKeyDownListener()
    })

    watch(computedShow, (value: boolean) => {
      if (_show.value !== value) {
        _show.value = value
      }
      if (value) {
        emit('open')
        mounted.value = true
        currentIsOverlay.value = false
        setOverflowHidden()
        addGlobalKeyDownListener()
      } else {
        emit('close')
        removeGlobalKeyDownListener()
      }
    })

    watch(fullscreen, () => {
      if (position.value) {
        position.value = undefined
      }
    })

    const wrapperCls = computed(() => [
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-wrapper-align-center`]: props.alignCenter && !props.fullscreen,
        [`${prefixCls}-wrapper-moved`]: Boolean(position.value),
      },
    ])

    const dialogCls = computed(() => [
      `${prefixCls}`,
      props.dialogClass,
      props.overlayClass,
      {
        [`${prefixCls}-simple`]: props.simple,
        [`${prefixCls}-draggable`]: mergedDraggable.value,
        [`${prefixCls}-fullscreen`]: props.fullscreen,
      },
    ])

    const mergedDialogStyle = computed(() => {
      const style: CSSProperties = {
        ...(props.dialogStyle ?? {}),
      }
      if (props.width && !props.fullscreen) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width
      }
      if (!props.alignCenter && props.top) {
        style.top = isNumber(props.top) ? `${props.top}px` : props.top
      }
      if (position.value) {
        style.transform = `translate(${position.value[0]}px, ${position.value[1]}px)`
      }

      return style
    })

    return {
      prefixCls,
      mounted,
      computedShow,
      containerRef,
      wrapperRef,
      mergedDialogStyle,
      confirmDisplayText,
      cancelDisplayText,
      zIndex,
      handleConfirm,
      handleCancel,
      handleOverlayClick,
      handleOverlayMouseDown,
      handleOpened,
      handleClosed,
      mergedConfirmButtonLoading,
      mergedCancelButtonLoading,
      mergedConfirmButtonDisabled,
      mergedCancelButtonDisabled,
      dialogRef,
      wrapperCls,
      dialogCls,
      teleportTarget,
      teleportDisabled,
      handleMoveDown,
      showFooter,
    }
  },
})
</script>

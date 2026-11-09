<template>
  <div v-if="readPretty" v-bind="$attrs" :class="n('read')" :aria-busy="loading || undefined">
    <slot name="read">{{ (empty ?? !text) ? (emptyText ?? '-') : text }}</slot>
    <PendingFeedback :loading="loading" />
  </div>
  <slot v-else-if="editMode === 'direct'" />
  <template v-else>
    <span ref="anchor" :class="n('anchor')" :style="{ visibility: open ? 'hidden' : undefined }">
      <FieldReference
        v-bind="$attrs"
        :id="open ? undefined : ($attrs.id as string | undefined)"
        ref="reference"
        :edit-mode="editMode"
        :label="label || placeholder"
        :text="text"
        :placeholder="placeholder"
        :open="open"
        :loading="loading || pending"
        :open-trigger-target="openTriggerTarget"
        :disabled="disabled || readonly || pending"
        :aria-hidden="open || undefined"
        :tabindex="open ? -1 : undefined"
        @open="requestOpen"
      />
    </span>
    <Teleport v-if="open && position" :to="target" :disabled="popupContainer === false">
      <div v-bind="themeScope"
        ref="overlay"
        :dir="readingDirection"
        :class="n('overlay')"
        :style="[position, { zIndex }]"
        @keydown.capture="onKeydown"
        role="dialog"
        :aria-label="label || placeholder"
        aria-modal="false"
      >
        <EditorPanel
          ref="panel"
          compact
          :intent="intent"
          :label="label"
          :pending="pending"
          :clearable="clearable"
          @clear="$emit('clear')"
          :disabled="disabled || readonly || confirmDisabled"
          :need-confirm="needConfirm"
          :error="error"
          :count="count"
          :limit="limit"
          @confirm="save(false, $event)"
          @cancel="$emit('cancel')"
          ><slot
        /></EditorPanel>
      </div>
    </Teleport>
  </template>
</template>
<script setup lang="ts">
import { useThemeScope } from '../../theme-provider/context'
import { mergeProps,
  computed,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  watch,
  type CSSProperties,
} from 'vue'
import { useDirection } from '../../_utils/direction'
import { createNamespace } from '../../_utils/global-config'
import { usePopupContainer, type PopupContainer } from '../../_utils/popup-container'
import { usePopupLayer } from '../../_utils/popup-layer'
import { useZIndex } from '../../context/zIndex'
import { provideTriggerInteractionScope } from '../../trigger/interaction'
import PendingFeedback from '../pending-feedback/PendingFeedback.vue'
import type { FieldEditMode } from './context'
import { claimEditing, editingOwner, withEditingTurn } from './editing-owner'
import EditorPanel from './EditorPanel.vue'
import FieldReference from './FieldReference.vue'


const themeScope = useThemeScope()

defineOptions({
  name: createNamespace('field-presentation').name,
  inheritAttrs: false,
})
const props = defineProps<{
  clearable?: boolean
  commit?: (event?: Event) => unknown | Promise<unknown>
  openTriggerTarget?: 'field' | 'icon'
  editMode: FieldEditMode
  empty?: boolean
  emptyText?: string
  readPretty?: boolean
  loading?: boolean
  text?: string
  placeholder?: string
  intent?: 'input' | 'select'
  label?: string
  open?: boolean
  popupContainer?: PopupContainer
  confirmDisabled?: boolean
  pending?: boolean
  disabled?: boolean
  readonly?: boolean
  needConfirm?: boolean
  error?: string
  count?: number
  limit?: number
}>()
const emit = defineEmits<{
  open: [value: boolean]
  confirm: [event?: Event]
  cancel: []
  clear: []
  'editor-ready': []
}>()
const { n } = createNamespace('field-presentation')
const target = usePopupContainer(() => props.popupContainer)
const reference = ref<InstanceType<typeof FieldReference>>()
const anchor = ref<HTMLElement>()
const { dir: readingDirection, isRtl } = useDirection(() => anchor.value)
const panel = ref<InstanceType<typeof EditorPanel>>()
const position = ref<CSSProperties>()
const overlay = ref<HTMLElement>()
let observer: ResizeObserver | undefined
let generation = 0
let disposed = false
const active = ref(true)
const layerActive = () => Boolean(props.open && active.value && !props.readPretty && props.editMode !== 'direct')
const { zIndex } = useZIndex(layerActive, 1)
usePopupLayer(layerActive, zIndex, () => anchor.value?.ownerDocument)
const view = () => anchor.value?.ownerDocument.defaultView
let restoreFocus = true
let releaseOwner: (() => void) | undefined
let saving: Promise<boolean> | undefined
let opening = false
const interaction = provideTriggerInteractionScope(computed(layerActive), (event) => {
  const node = 'composedPath' in event ? (event.target as Node | null) : event
  return Boolean(node && (overlay.value?.contains(node) || anchor.value?.contains(node)))
})
const owner = { save: () => save(true), focus: () => panel.value?.focus() }
async function requestOpen() {
  if (opening || disposed || props.disabled || props.readonly || props.pending) return
  opening = true
  try {
    const document = anchor.value?.ownerDocument ?? (typeof window !== 'undefined' ? window.document : undefined)
    if (!document) return
    await withEditingTurn(document, async () => {
      const previous = editingOwner(document)
      if (previous && previous !== owner && !(await previous.save())) {
        previous.focus()
        return
      }
      if (!disposed && active.value && !props.disabled && !props.readonly && !props.readPretty) {
        releaseOwner = claimEditing(document, owner)
        emit('open', true)
        await nextTick()
      }
    })
  } finally {
    opening = false
  }
}
function save(outside: boolean, event?: Event): Promise<boolean> {
  if (saving) return saving
  if (!props.open) return Promise.resolve(true)
  if (props.pending || props.disabled || props.readonly || props.confirmDisabled) return Promise.resolve(false)
  restoreFocus = !outside
  saving = (async () => {
    try {
      const result = props.commit ? await props.commit(event) : emit('confirm', event)
      await nextTick()
      const saved = result !== false && !props.open
      if (!saved) {
        restoreFocus = true
        if (!disposed && active.value && props.open) {
          panel.value?.focus()
          await nextTick()
          if (!disposed && props.open) interaction.dismissPopups()
        }
      }
      return saved
    } catch {
      restoreFocus = true
      if (!disposed && active.value && props.open) {
        panel.value?.focus()
        await nextTick()
        if (!disposed && props.open) interaction.dismissPopups()
      }
      return false
    } finally {
      saving = undefined
    }
  })()
  return saving
}
function onOutside(event: Event) {
  if (!layerActive() || interaction.contains(event)) return
  void save(true, event)
}
function onKeydown(event: KeyboardEvent) {
  if (event.defaultPrevented || event.isComposing || event.keyCode === 229) return
  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    if (props.pending) return
    if (interaction.hasOpenPopup()) {
      interaction.escapePopup(event)
      const current = generation
      nextTick(async () => {
        if (disposed || current !== generation || !props.open || interaction.hasOpenPopup()) return
        panel.value?.focus()
        await nextTick()
        if (!disposed && current === generation && props.open) interaction.dismissPopups()
      })
      return
    }
    emit('cancel')
    return
  }
  if (event.key !== 'Enter' || interaction.hasOpenPopup()) return
  const target = event.target as HTMLElement
  if (target.closest('button, [role=button], [type=checkbox], [type=radio]')) return
  if (target.closest('textarea, [contenteditable=true]') && !event.ctrlKey && !event.metaKey) return
  event.preventDefault()
  event.stopPropagation()
  void save(false, event)
}
function place() {
  const element = anchor.value
  const win = view()
  if (!props.open || !element || !win) return
  const rect = element.getBoundingClientRect()
  const style = win.getComputedStyle(element)
  const metric = (name: string, fallback: number) =>
    parseFloat(style.getPropertyValue(`--c-field-presentation-${name}`)) || fallback
  const margin = metric('editor-edge-gap', 8)
  const width = Math.min(
    Math.max(rect.width + metric('editor-action-width', 88), metric('min-width', 280)),
    win.innerWidth - margin * 2,
  )
  const height = overlay.value?.getBoundingClientRect().height || rect.height
  const left = Math.max(margin, Math.min(isRtl.value ? rect.right - width : rect.left, win.innerWidth - width - margin))
  position.value = {
    left: `${left}px`,
    top: `${Math.max(margin, Math.min(rect.top, win.innerHeight - height - margin))}px`,
    width: `${width}px`,
  }
}
function cleanup() {
  generation++
  view()?.removeEventListener('resize', place)
  view()?.removeEventListener('scroll', place, true)
  observer?.disconnect()
  observer = undefined
}
watch(
  [() => props.open, active],
  async ([open, isActive], previous) => {
    cleanup()
    const current = generation
    if (!open || !isActive) {
      releaseOwner?.()
      releaseOwner = undefined
    }
    if (open && isActive && !props.readPretty) {
      restoreFocus = true
      await nextTick()
      if (disposed || current !== generation || !props.open) return
      const document = anchor.value?.ownerDocument ?? (typeof window !== 'undefined' ? window.document : undefined)
      if (document) {
        let admitted = false
        await withEditingTurn(document, async () => {
          if (disposed || current !== generation || !props.open) return
          const previousOwner = editingOwner(document)
          if (previousOwner && previousOwner !== owner && !(await previousOwner.save())) {
            emit('open', false)
            previousOwner.focus()
            return
          }
          if (disposed || current !== generation || !props.open) return
          releaseOwner = claimEditing(document, owner)
          admitted = true
        })
        if (!admitted) return
      }
      await nextTick()
      if (disposed || current !== generation || !props.open) return
      place()
      view()?.addEventListener('resize', place, { passive: true })
      view()?.addEventListener('scroll', place, {
        capture: true,
        passive: true,
      })
      const Observer = view()?.ResizeObserver
      if (Observer && anchor.value) {
        observer = new Observer(place)
        observer.observe(anchor.value)
      }
      await nextTick()
      if (!disposed && current === generation && props.open) {
        if (overlay.value) observer?.observe(overlay.value)
        place()
        panel.value?.focus()
        emit('editor-ready')
      }
    } else {
      position.value = undefined
      if (previous?.[0] && isActive) {
        let consumed = false
        nextTick(() => {
          if (consumed) return
          consumed = true
          if (
            restoreFocus &&
            !disposed &&
            active.value &&
            current === generation &&
            !props.open &&
            !props.readPretty &&
            !props.disabled &&
            !props.readonly
          )
            reference.value?.focus()
        })
      }
    }
  },
  { immediate: true, flush: 'post' },
)
function onOwnedKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && layerActive() && interaction.contains(event)) onKeydown(event)
}
let document: Document | undefined
onMounted(() => {
  document = anchor.value?.ownerDocument ?? (typeof window !== 'undefined' ? window.document : undefined)
  document?.addEventListener('click', onOutside, true)
  document?.addEventListener('focusin', onOutside)
  document?.addEventListener('keydown', onOwnedKeydown, true)
  if (props.open) place()
})
onActivated(() => {
  active.value = true
})
onDeactivated(() => {
  active.value = false
  cleanup()
})
onBeforeUnmount(() => {
  disposed = true
  releaseOwner?.()
  document?.removeEventListener('click', onOutside, true)
  document?.removeEventListener('focusin', onOutside)
  document?.removeEventListener('keydown', onOwnedKeydown, true)
  cleanup()
})
defineExpose({
  focus: () => (props.open ? panel.value?.focus() : reference.value?.focus()),
  blur: () => panel.value?.blur(),
})
</script>

import { computed, defineComponent, h, inject, mergeProps, nextTick, onActivated, onBeforeUnmount, onBeforeUpdate, onDeactivated, ref, watch } from 'vue'
import { useId } from '../_utils/vue-compat'
import { createNamespace } from '../_utils/global-config'
import Trigger from '../trigger'
import { useElementResize } from '../_utils/resize-observer'
import NavMenu from './menu'
import NavMenuArrow from './arrow'
import { navMenuKey } from './context'
import { createNavMenuTree } from './tree'
import { navMenuItemProps, type NavMenuItemSlotContext } from './item-props'
import type { NavMenuKey, NavMenuOption, NavMenuContent } from './types'
const { name } = createNamespace('nav-menu-item')
const { n } = createNamespace('nav-menu')
export default defineComponent({
  name, inheritAttrs: false, props: navMenuItemProps,
  emits: {
    'update:modelValue': (_key: NavMenuKey | null) => true,
    'update:open': (_open: boolean) => true,
    select: (_key: NavMenuKey | null, _option: NavMenuOption | undefined, _event?: Event) => true,
    click: (_event: MouseEvent) => true,
  },
  setup(props, { slots, emit, attrs, expose }) {
    const parent = inject(navMenuKey, undefined)
    const itemId = Symbol('NavMenuItem')
    const generatedEntryId = `nav-menu-entry-${useId()}`
    const entryId = () => typeof attrs.id === 'string' && attrs.id ? attrs.id : generatedEntryId
    const panelLabelledBy = () => typeof attrs['aria-labelledby'] === 'string' && attrs['aria-labelledby'].trim() ? attrs['aria-labelledby'] : entryId()
    const localValue = ref(props.defaultValue), localOpen = ref(props.defaultOpen)
    const panel = ref<HTMLElement>()
    const reference = ref<HTMLElement>()
    const suspendedState = ref(false), rendered = ref(false)
    const hasContentSlot = ref(Boolean(slots.content))
    onBeforeUpdate(() => {
      hasContentSlot.value = Boolean(slots.content)
    })
    const hasPopup = () => hasContentSlot.value || props.options.length > 0
    const value = computed(() => props.modelValue !== undefined ? props.modelValue : localValue.value)
    const disabled = computed(() => props.disabled || !!parent?.props.disabled)
    const open = computed(() => !suspendedState.value && !disabled.value && hasPopup() && (props.open ?? localOpen.value))
    const tree = computed(() => createNavMenuTree(props.options, props.fieldNames))
    const selected = computed(() => value.value == null ? undefined : tree.value.byKey.get(value.value))
    const active = computed(() => props.name !== undefined && parent ? parent.activeItem.value === props.name : selected.value?.type === 'item')
    const highlighted = computed(() => props.highlight ?? active.value)
    let suspended = false, disposed = false, bindingGeneration = 0, measurementOperation = 0, focusGeneration = 0
    let focusTask: { kind: 'open' | 'close' } | undefined
    const bindingRevision = ref(0)
    const available = () => !suspended && !disposed
    function cancelFocus() { focusGeneration++; focusTask = undefined }
    watch(open, opened => { if (focusTask && opened !== (focusTask.kind === 'open')) cancelFocus() }, { flush: 'sync' })
    watch(() => [disabled.value, props.options, props.fieldNames, props.placement, props.popupLayout, props.trigger], cancelFocus, { deep: true, flush: 'sync' })
    const top = ref(0)
    const edges = ref({ left: 0, right: 0, viewportWidth: 0 })
    function measure() {
      if (!available() || !open.value) return
      const operation = ++measurementOperation
      const element = reference.value
      const current = () => available() && open.value && operation === measurementOperation && element === reference.value
      const rect = element?.getBoundingClientRect()
      if (!rect || !current()) return
      const bottom = rect.bottom, left = rect.left, right = rect.right, viewportWidth = element?.ownerDocument.defaultView?.innerWidth ?? 0
      if (!current()) return
      top.value = Math.max(0, bottom)
      if (current()) edges.value = { left, right, viewportWidth }
    }
    useElementResize(() => [reference.value], () => { bindingRevision.value; return available() && open.value }, measure)
    const fullHeightPosition = computed(() => {
      if (props.placement.startsWith('right')) {
        const left = Math.max(0, Math.min(edges.value.right, edges.value.viewportWidth))
        return { left: `${left}px`, right: 'auto', minWidth: 0, maxWidth: `calc(100vw - ${left}px)` }
      }
      if (props.placement.startsWith('left')) {
        const right = Math.max(0, edges.value.viewportWidth - edges.value.left)
        return { left: 'auto', right: `${right}px`, minWidth: 0, maxWidth: `calc(100vw - ${right}px)` }
      }
      return { right: 0 }
    })
    let detach: (() => void) | undefined
    function clearBinding() { bindingGeneration++; measurementOperation++; detach?.(); detach = undefined }
    watch([open, reference, bindingRevision], ([opened]) => {
      clearBinding()
      const element = reference.value, win = element?.ownerDocument.defaultView, generation = bindingGeneration
      const current = () => available() && open.value && generation === bindingGeneration && element === reference.value
      if (opened && win && current()) {
        const update = () => { if (current()) measure() }
        measure()
        if (!current()) return
        win.addEventListener('resize', update); win.addEventListener('scroll', update, true)
        detach = () => { win.removeEventListener('resize', update); win.removeEventListener('scroll', update, true) }
      }
    }, { flush: 'post', immediate: true })
    onBeforeUnmount(() => { disposed = true; cancelFocus(); clearBinding() })
    const unregister = parent?.registerItem(itemId, (restoreFocus = false) => {
      if (open.value) { if (restoreFocus) close(); else setOpen(false) }
    }, () => props.name)
    onBeforeUnmount(() => unregister?.())
    function activate() { return available() && (parent?.activateItem(itemId) ?? true) }
    watch(open, value => { if (value) { rendered.value = true; activate() } }, { immediate: true, flush: 'sync' })
    function requestOpen(next: boolean, deactivating = false) {
      if (!available() && !deactivating) return
      if (next && (disabled.value || !hasPopup())) return
      if (next && !activate()) return
      if (!available() && !deactivating) return
      if (next === open.value) return
      if (props.open === undefined) localOpen.value = next
      emit('update:open', next)
    }
    function setOpen(next: boolean) { if (!available()) return; cancelFocus(); requestOpen(next) }
    function queueFocus(kind: 'open' | 'close') {
      if (!available() || disabled.value) return
      cancelFocus()
      const task = { kind }, generation = focusGeneration, element = reference.value
      const document = element?.ownerDocument, origin = document?.activeElement
      const current = () => available() && !disabled.value && generation === focusGeneration && element === reference.value
      focusTask = task
      nextTick(() => {
        if (focusTask !== task || !current()) return
        focusTask = undefined
        if (open.value !== (kind === 'open') || !document) return
        const focused = document.activeElement
        if (focused && focused !== origin && focused !== document.body && focused.isConnected) return
        const target = kind === 'open' ? panel.value?.querySelector<HTMLElement>('[data-nav-item]:not([aria-disabled="true"]),button:not(:disabled),input:not(:disabled),[tabindex="0"]') : element
        if (current()) target?.focus()
      })
    }
    function focusPanel() { queueFocus('open') }
    function close() { if (!available()) return; setOpen(false); queueFocus('close') }
    onDeactivated(() => { suspended = true; cancelFocus(); clearBinding(); requestOpen(false, true); suspendedState.value = true })
    onActivated(() => { if (!disposed && suspended) { suspended = false; suspendedState.value = false; bindingRevision.value++ } })
    function select(key: NavMenuKey | null, event?: Event) {
      const node = key == null ? undefined : tree.value.byKey.get(key)
      if (!available() || disabled.value || node?.disabled || (node && (node.type !== 'item' || node.children.length))) return
      if (props.modelValue === undefined) localValue.value = key
      if (props.name !== undefined) parent?.selectItem(props.name)
      emit('update:modelValue', key); emit('select', key, node?.option, event)
      if (props.hideOnSelect) close()
    }
    const context = (): NavMenuItemSlotContext => ({ modelValue: value.value, selectedOption: selected.value?.option, active: active.value, open: open.value, select, close })
    function renderLabel() {
      const node = selected.value
      const content = (node ? node.option[tree.value.names.label] : props.label) as NavMenuContent
      return typeof content === 'function' ? content({ option: node?.option ?? {}, active: node?.type === 'item', expanded: open.value, level: 0 }) : content
    }
    expose({ close, select, setOpen })
    return () => h('li', { class: n('node'), role: 'none' }, [h(Trigger, {
      trigger: props.trigger ?? 'click', open: open.value, disabled: disabled.value || !hasPopup(), unmountOnClose: props.unmountOnClose,
      placement: props.placement, popupContainer: props.popupContainer ?? parent?.props.popupContainer,
      popupClass: props.popupClass ?? parent?.props.popupClass, popupOffset: 4,
      animationName: props.popupLayout === 'dropdown' ? 'fade-in' : '',
      onOpenChange: setOpen,
    }, { default: () => h('div', mergeProps(attrs, {
      ref: reference, id: slots.content ? entryId() : attrs.id, role: 'menuitem', tabindex: disabled.value ? -1 : 0, 'data-nav-item': '',
      'aria-disabled': disabled.value || undefined, 'aria-expanded': hasPopup() ? open.value : undefined,
      'aria-haspopup': hasPopup() ? (slots.content ? 'dialog' : 'menu') : undefined,
      class: [n('item'), { [n('--active')]: highlighted.value, [n('--disabled')]: disabled.value }],
      onClick: (event: MouseEvent) => {
        if (!available()) return
        if (disabled.value) { event.preventDefault(); return }
        // Opening a panel does not mean that it has produced a valid selection.
        // An entry without a panel is itself a leaf, so clicking it can activate it directly.
        if (!hasPopup() && activate() && props.name !== undefined) parent?.selectItem(props.name)
        emit('click', event)
      },
      onKeydown: (event: KeyboardEvent) => {
        if (!available() || event.defaultPrevented || event.isComposing || event.keyCode === 229 || event.target !== event.currentTarget || disabled.value) return
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); if (hasPopup()) setOpen(!open.value); else reference.value?.click() }
        if (event.key === 'ArrowDown' && hasPopup()) { event.preventDefault(); event.stopPropagation(); setOpen(true); focusPanel() }
      },
    }), slots.default?.(context()) ?? [slots.icon?.(context()), h('span', { class: n('label') }, [slots.label?.(context()) ?? renderLabel()]), hasPopup() ? h(NavMenuArrow, { placement: props.placement, open: open.value }) : null]),
    content: () => rendered.value ? h('div', {
      ref: panel,
      inert: open.value ? undefined : '', 'aria-hidden': open.value ? undefined : 'true',
      role: slots.content ? 'dialog' : undefined, 'aria-labelledby': slots.content ? panelLabelledBy() : undefined,
      class: [n('popup'), n(`--${parent?.props.size ?? 'md'}`), n(`panel--${props.popupLayout}`), { [n('panel--custom')]: !!slots.content }],
      style: [(props.popupLayout === 'full-width' || props.popupLayout === 'full') ? { position: 'fixed', left: 0, right: 0, top: `${top.value}px`, maxHeight: `calc(100dvh - ${top.value}px)`, height: props.popupLayout === 'full' ? `calc(100dvh - ${top.value}px)` : undefined } : props.popupLayout === 'full-height' ? { position: 'fixed', top: 0, bottom: 0, maxHeight: '100dvh', width: 'var(--c-nav-menu-panel-width)', ...fullHeightPosition.value } : {}, props.popupStyle],
      onKeydown: (event: KeyboardEvent) => { if (available() && !disabled.value && !event.defaultPrevented && !event.isComposing && event.keyCode !== 229 && event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close() } },
    }, slots.content?.(context()) ?? [h(NavMenu, {
      options: props.options, fieldNames: props.fieldNames, modelValue: value.value, mode: props.optionsMode,
      size: parent?.props.size,
      popupContainer: props.popupContainer ?? parent?.props.popupContainer,
      onSelect: (key: NavMenuKey, _option: NavMenuOption, event: Event) => select(key, event),
    }, { label: slots['option-label'], icon: slots['option-icon'], extra: slots['option-extra'] })]) : null,
    })])
  },
})

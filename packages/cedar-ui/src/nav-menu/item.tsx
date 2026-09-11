import { computed, defineComponent, h, inject, mergeProps, nextTick, onBeforeUnmount, onDeactivated, ref, watch } from 'vue'
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
    const localValue = ref(props.defaultValue), localOpen = ref(props.defaultOpen)
    const panel = ref<HTMLElement>()
    const reference = ref<HTMLElement>()
    const value = computed(() => props.modelValue !== undefined ? props.modelValue : localValue.value)
    const disabled = computed(() => props.disabled || !!parent?.props.disabled)
    const open = computed(() => !disabled.value && (props.open ?? localOpen.value))
    const active = computed(() => props.name !== undefined && parent ? parent.activeItem.value === props.name : props.active ?? value.value != null)
    const tree = computed(() => createNavMenuTree(props.options, props.fieldNames))
    const selected = computed(() => value.value == null ? undefined : tree.value.byKey.get(value.value))
    const hasPopup = () => !!slots.content || props.options.length > 0
    const top = ref(0)
    const edges = ref({ left: 0, right: 0, viewportWidth: 0 })
    function measure() {
      const element = reference.value
      const rect = element?.getBoundingClientRect()
      if (!rect) return
      top.value = Math.max(0, rect.bottom)
      edges.value = { left: rect.left, right: rect.right, viewportWidth: element?.ownerDocument.defaultView?.innerWidth ?? 0 }
    }
    useElementResize(() => [reference.value], () => open.value, measure)
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
    watch([open, reference], ([opened]) => {
      detach?.(); detach = undefined
      const win = reference.value?.ownerDocument.defaultView
      if (opened && win) {
        measure(); win.addEventListener('resize', measure); win.addEventListener('scroll', measure, true)
        detach = () => { win.removeEventListener('resize', measure); win.removeEventListener('scroll', measure, true) }
      }
    }, { flush: 'post', immediate: true })
    onBeforeUnmount(() => detach?.())
    const unregister = parent?.registerItem(itemId, () => setOpen(false), props.name)
    onBeforeUnmount(() => unregister?.())
    function activate() { parent?.activateItem(itemId) }
    watch(open, value => { if (value) activate() }, { immediate: true, flush: 'sync' })
    function setOpen(next: boolean) {
      if (next && (disabled.value || !hasPopup())) return
      if (next) activate()
      if (next === open.value) return
      if (props.open === undefined) localOpen.value = next
      emit('update:open', next)
    }
    function focusPanel() { nextTick(() => { if (open.value) panel.value?.querySelector<HTMLElement>('[data-nav-item]:not([aria-disabled="true"]),button:not(:disabled),input:not(:disabled),[tabindex="0"]')?.focus() }) }
    function close() { setOpen(false); nextTick(() => { if (!open.value) reference.value?.focus() }) }
    onDeactivated(() => setOpen(false))
    function select(key: NavMenuKey | null, event?: Event) {
      const node = key == null ? undefined : tree.value.byKey.get(key)
      if (disabled.value || node?.disabled || (node && (node.type !== 'item' || node.children.length))) return
      if (props.modelValue === undefined) localValue.value = key
      if (props.name !== undefined) parent?.selectItem(props.name)
      emit('update:modelValue', key); emit('select', key, node?.option, event)
      if (props.hideOnSelect) close()
    }
    const context = (): NavMenuItemSlotContext => ({ modelValue: value.value, selectedOption: selected.value?.option, active: active.value, open: open.value, select, close })
    function renderLabel() {
      const node = selected.value
      const content = (node ? node.option[tree.value.names.label] : props.label) as NavMenuContent
      return typeof content === 'function' ? content({ option: node?.option ?? {}, selected: !!node, active: active.value, expanded: open.value, level: 0 }) : content
    }
    expose({ close, select, setOpen })
    return () => h('li', { class: n('node'), role: 'none' }, [h(Trigger, {
      trigger: props.trigger ?? 'click', open: open.value, disabled: disabled.value || !hasPopup(), unmountOnClose: true,
      placement: props.placement, popupContainer: props.popupContainer ?? parent?.props.popupContainer,
      popupClass: props.popupClass ?? parent?.props.popupClass, popupOffset: 4,
      animationName: props.popupLayout === 'dropdown' ? 'fade-in' : '',
      onOpenChange: setOpen,
    }, { default: () => h('div', mergeProps(attrs, {
      ref: reference, role: 'menuitem', tabindex: disabled.value ? -1 : 0, 'data-nav-item': '',
      'aria-disabled': disabled.value || undefined, 'aria-expanded': hasPopup() ? open.value : undefined,
      'aria-haspopup': hasPopup() ? (slots.content ? 'dialog' : 'menu') : undefined,
      class: [n('item'), { [n('--active')]: active.value, [n('--disabled')]: disabled.value }],
      onClick: (event: MouseEvent) => {
        if (disabled.value) { event.preventDefault(); return }
        activate()
        // Opening a panel does not mean that it has produced a valid selection.
        // An entry without a panel is itself a leaf, so clicking it can activate it directly.
        if (props.name !== undefined && !hasPopup()) parent?.selectItem(props.name)
        emit('click', event)
      },
      onKeydown: (event: KeyboardEvent) => {
        if (event.target !== event.currentTarget || disabled.value) return
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); if (hasPopup()) setOpen(!open.value); else reference.value?.click() }
        if (event.key === 'ArrowDown' && hasPopup()) { event.preventDefault(); event.stopPropagation(); setOpen(true); focusPanel() }
      },
    }), slots.default?.(context()) ?? [slots.icon?.(context()), h('span', { class: n('label') }, [slots.label?.(context()) ?? renderLabel()]), hasPopup() ? h(NavMenuArrow, { placement: props.placement, open: open.value }) : null]),
    content: () => h('div', {
      ref: panel,
      role: slots.content ? 'dialog' : undefined, 'aria-label': typeof props.label === 'string' ? props.label : undefined,
      class: [n('popup'), n(`--${parent?.theme.value ?? 'light'}`), n(`--${parent?.props.size ?? 'md'}`), n(`panel--${props.popupLayout}`)],
      style: [props.popupLayout === 'full-width' ? { position: 'fixed', left: 0, right: 0, top: `${top.value}px`, maxHeight: `calc(100dvh - ${top.value}px)` } : props.popupLayout === 'full-height' ? { position: 'fixed', top: 0, bottom: 0, maxHeight: '100dvh', width: 'var(--c-nav-menu-panel-width)', ...fullHeightPosition.value } : {}, props.popupStyle],
      onKeydown: (event: KeyboardEvent) => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close() } },
    }, slots.content?.(context()) ?? [h(NavMenu, {
      options: props.options, fieldNames: props.fieldNames, modelValue: value.value, mode: props.optionsMode,
      theme: parent?.theme.value as 'light' | 'dark' | undefined, size: parent?.props.size,
      popupContainer: props.popupContainer ?? parent?.props.popupContainer,
      onSelect: (key: NavMenuKey, _option: NavMenuOption, event: Event) => select(key, event),
    }, { label: slots['option-label'], icon: slots['option-icon'], extra: slots['option-extra'] })]),
    })])
  },
})

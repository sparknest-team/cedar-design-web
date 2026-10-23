import { computed, mergeProps, nextTick, defineComponent, h, inject, onActivated, onBeforeUnmount, onDeactivated, ref, watch, type PropType, type VNodeChild } from 'vue'
import Trigger, { type TriggerInstance } from '../trigger'
import Tooltip from '../tooltip'
import NavMenuArrow from './arrow'
import { createNamespace } from '../_utils/global-config'
import { navMenuKey } from './context'
import type { NavMenuNode, NavMenuContent } from './types'
const { n } = createNamespace('nav-menu')
const NavNode = defineComponent({
  name: createNamespace('nav-menu-node').name,
  props: { node: { type: Object as PropType<NavMenuNode>, required: true }, popup: Boolean },
  setup(props) {
    const api = inject(navMenuKey)!
    const trigger = ref<TriggerInstance>()
    const element = ref<HTMLElement>()
    const panel = ref<HTMLElement>()
    const floating = computed(() => props.popup || api.props.mode === 'horizontal' || api.collapsed.value)
    const open = computed(() => api.expanded.value.includes(props.node.key))
    const disabled = computed(() => !!api.props.disabled || props.node.disabled)
    let active = true, disposed = false, focusGeneration = 0
    const available = () => active && !disposed
    const invalidateFocus = () => { focusGeneration++ }
    watch(open, value => { if (!value) invalidateFocus() }, { flush: 'sync' })
    watch(() => [disabled.value, props.node, props.popup, api.props.mode, api.collapsed.value], invalidateFocus, { deep: true, flush: 'sync' })
    onDeactivated(() => { active = false; invalidateFocus() })
    onActivated(() => { if (!disposed) active = true })
    onBeforeUnmount(() => { disposed = true; active = false; invalidateFocus(); api.register(props.node, null) })
    function ownsFocus(document: Document, origin: Element | null) {
      const current = document.activeElement
      return !current || current === origin || current === document.body || !current.isConnected
    }
    const content = (kind: 'label' | 'icon' | 'extra'): VNodeChild => {
      const context = api.context(props.node)
      const value = props.node.option[kind === 'label' ? api.labelField.value : kind] as NavMenuContent
      return api.slots[kind]?.(context) ?? (typeof value === 'function' ? value(context) : value)
    }
    async function enter() {
      if (!available() || disabled.value) return
      const request = ++focusGeneration, reference = element.value
      const document = reference?.ownerDocument, origin = document?.activeElement ?? null
      const current = () => available() && !disabled.value && request === focusGeneration && reference === element.value
      api.expand(props.node, true)
      if (!current()) return
      await nextTick()
      if (!current() || !open.value || !document || !ownsFocus(document, origin)) return
      const first = panel.value?.querySelector<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])')
      if (!current()) return
      invalidateFocus()
      first?.focus()
    }
    function onKeydown(event: KeyboardEvent) {
      const key = event.key
      if (!available() || disabled.value || event.defaultPrevented || event.target !== element.value) return
      if (props.node.children.length && ((floating.value && key === (api.props.mode === 'horizontal' && !props.popup ? 'ArrowDown' : 'ArrowRight')) || (!floating.value && key === 'ArrowRight'))) {
        event.preventDefault(); event.stopPropagation(); void enter()
      } else if (!floating.value && key === 'ArrowLeft' && open.value) {
        event.preventDefault(); event.stopPropagation(); api.expand(props.node, false)
      } else if (key === 'Enter' || key === ' ') {
        event.preventDefault(); event.stopPropagation()
        if (props.node.children.length) { if (floating.value && !open.value) void enter(); else api.expand(props.node, !open.value) }
        else api.select(props.node, event)
      }
    }
    function onPanelKeydown(event: KeyboardEvent) {
      if (!available() || disabled.value || event.defaultPrevented) return
      if (event.key === 'Escape' || event.key === 'ArrowLeft') {
        const reference = element.value, originalTrigger = trigger.value
        const document = reference?.ownerDocument, origin = document?.activeElement ?? null
        event.preventDefault(); event.stopPropagation(); api.expand(props.node, false)
        if (!available() || disabled.value) return
        const request = ++focusGeneration
        nextTick(() => {
          if (!available() || disabled.value || request !== focusGeneration || open.value || reference !== element.value || originalTrigger !== trigger.value || !document || !ownsFocus(document, origin)) return
          invalidateFocus()
          originalTrigger?.focusReference()
        })
        return
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
      const items = Array.from(panel.value?.querySelectorAll<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])') ?? []).filter(el => el.closest('[data-nav-panel]') === panel.value)
      const current = items.indexOf(panel.value?.ownerDocument.activeElement as HTMLElement)
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (current + (event.key === 'ArrowUp' ? -1 : 1) + items.length) % items.length
      event.preventDefault(); event.stopPropagation(); items[index]?.focus()
    }
    return () => {
      const node = props.node
      const children = (popup = floating.value) => node.children.map(child => h(NavNode, { key: child.key, node: child, popup }))
      if (node.type === 'divider') return h('li', { role: 'separator', class: n('divider') })
      if (node.type === 'group') return h('li', { role: 'group', class: n('group') }, [h('div', { class: n('group-label'), hidden: api.collapsed.value && !props.popup }, [content('label')]), h('ul', { role: 'group', class: n('list') }, children(props.popup))])
      const attrs = { ...node.option.props, ...api.props.nodeProps?.(api.context(node)) }
      const label = node.option[api.labelField.value]
      const item = () => h('div', mergeProps(attrs, {
        ref: (el: any) => { element.value = el; api.register(node, el) },
        class: [n('item'), { [n('--selected')]: api.selected.value === node.key, [n('--active')]: api.activePath.value.has(node.key), [n('--disabled')]: disabled.value, [n('--icon-only')]: api.collapsed.value && !props.popup }],
        style: [{ paddingInlineStart: `${floating.value ? api.props.rootIndent : (api.props.rootIndent ?? 12) + node.level * (api.props.indent ?? 24)}px` }],
        role: 'menuitem', 'aria-label': api.collapsed.value && (typeof label === 'string' || typeof label === 'number') ? String(label) : attrs['aria-label'], 'data-nav-item': '', 'data-nav-key': String(node.key),
        tabindex: disabled.value ? -1 : api.focusKey.value === node.key ? 0 : -1,
        'aria-current': api.selected.value === node.key ? 'page' : undefined,
        'aria-disabled': disabled.value || undefined, 'aria-expanded': node.children.length ? open.value : undefined,
        'aria-haspopup': node.children.length && floating.value ? 'menu' : undefined,
        onFocus: () => { if (available() && !disabled.value) api.focusKey.value = node.key }, onKeydown,
        onClick: (event: MouseEvent) => { if (!available()) return; if (disabled.value) { event.preventDefault(); event.stopPropagation(); return }; if (node.children.length) api.expand(node, !open.value); else api.select(node, event) },
      }), [h('span', { class: n('icon') }, [content('icon')]), h('span', { class: n('label') }, [content('label')]), h('span', { class: n('extra') }, [content('extra')]), node.children.length ? h(NavMenuArrow, { open: open.value, inline: !floating.value, placement: api.props.mode === 'horizontal' && !props.popup ? 'bottom-start' : 'right-start' }) : null])
      let reference: VNodeChild
      if (node.children.length && floating.value) {
        reference = h(Trigger, { ref: trigger, trigger: 'hover', open: open.value, disabled: disabled.value, escToClose: false, unmountOnClose: true,
          popupContainer: api.props.popupContainer, popupClass: api.props.popupClass, popupOffset: 4, mouseEnterDelay: 100, mouseLeaveDelay: 100,
          placement: api.props.mode === 'horizontal' && !props.popup ? 'bottom-start' : 'right-start',
          onOpenChange: (value: boolean) => { if (available()) api.expand(node, value) },
        }, { default: item, content: () => h('ul', { ref: panel, role: 'menu', 'data-nav-panel': '', class: [n('popup'), n(`--${api.theme.value}`), n(`--${api.props.size}`)], style: { '--c-nav-menu-icon-size': `${api.props.iconSize}px` }, onKeydown: onPanelKeydown }, children()) })
      } else if (api.collapsed.value && !props.popup && !node.children.length) reference = h(Tooltip, { placement: 'right', disabled: disabled.value, popupContainer: api.props.popupContainer }, { default: item, content: () => content('label') })
      else reference = item()
      return h('li', { role: 'none', class: n('node') }, [reference, node.children.length && !floating.value && open.value ? h('ul', { ref: panel, role: 'group', class: n('list') }, children()) : null])
    }
  },
})
export default NavNode

import { computed, mergeProps, defineComponent, h, inject, nextTick, onActivated, onBeforeUnmount, onDeactivated, provide, ref, watch, type VNodeChild } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { useElementResize } from '../_utils/resize-observer'
import { SiderInjectionKey } from '../layout/context'
import { navMenuProps } from './props'
import { createNavMenuTree } from './tree'
import { navMenuKey, type NavMenuContext } from './context'
import NavNode from './node'
import NavMenuArrow from './arrow'
import type { NavMenuKey, NavMenuNode, NavMenuContent } from './types'
const { name, n, classes } = createNamespace('nav-menu')
export default defineComponent({
  name,
  inheritAttrs: false,
  props: navMenuProps,
  emits: {
    'update:modelValue': (_key: NavMenuKey | null) => true,
    'update:activeItem': (_key: NavMenuKey | null) => true,
    'update:expandedKeys': (_keys: NavMenuKey[]) => true,
    'update:collapsed': (_value: boolean) => true,
    select: (_key: NavMenuKey, _option: import('./types').NavMenuOption, _event: Event) => true,
  },
  setup(props, { emit, slots, attrs, expose }) {
    const sider = inject(SiderInjectionKey, undefined)
    const root = ref<HTMLElement>()
    const measure = ref<HTMLElement>()
    const localValue = ref(props.defaultValue)
    const localActiveItem = ref(props.defaultActiveItem)
    const localExpanded = ref<NavMenuKey[]>([...props.defaultExpandedKeys])
    const localCollapsed = ref(props.defaultCollapsed)
    const selected = computed(() => props.modelValue !== undefined ? props.modelValue : localValue.value)
    const activeItem = computed(() => props.activeItem !== undefined ? props.activeItem : localActiveItem.value)
    const expanded = computed(() => props.expandedKeys !== undefined ? props.expandedKeys : localExpanded.value)
    const collapsed = computed(() => props.mode !== 'horizontal' && (props.collapsed ?? sider?.collapsed ?? localCollapsed.value))
    const theme = computed(() => props.theme ?? sider?.theme ?? 'light')
    const tree = computed(() => createNavMenuTree(props.options, props.fieldNames))
    let scrollGeneration = 0
    let scrollAvailable = true
    let disposed = false
    let renderEpoch = 0
    let focusGeneration = 0
    let measurementOperation = 0
    const available = () => scrollAvailable && !disposed
    const invalidateScroll = () => { scrollGeneration++ }
    function invalidateRender() { renderEpoch++; focusGeneration++; measurementOperation++ }
    function afterRender(callback: () => void) {
      if (!available()) return
      const epoch = renderEpoch
      let consumed = false
      nextTick(() => {
        if (consumed || !available() || epoch !== renderEpoch) return
        consumed = true
        callback()
      })
    }
    watch(() => [props.disabled, props.options, props.fieldNames, props.mode, props.responsive, collapsed.value], invalidateScroll, { deep: true, flush: 'sync' })
    watch(() => [props.disabled, props.options, props.fieldNames, props.mode, props.responsive, props.size, collapsed.value], invalidateRender, { deep: true, flush: 'sync' })
    onDeactivated(() => { scrollAvailable = false; invalidateScroll(); invalidateRender() })
    onActivated(() => {
      if (disposed || scrollAvailable) return
      scrollAvailable = true
      afterRender(resize)
      afterRender(updateRovingFocus)
    })
    onBeforeUnmount(() => {
      disposed = true; scrollAvailable = false; invalidateScroll(); invalidateRender()
      elements.clear(); elementOwners.clear(); itemClosers.clear(); itemNames.clear()
    })
    const itemClosers = new Map<symbol, () => void>()
    const itemNames = new Map<NavMenuKey, symbol>()
    let activationGeneration = 0
    function activateItem(id?: symbol) {
      if (!available()) return false
      const request = ++activationGeneration
      for (const [key, close] of [...itemClosers]) {
        if (!available() || request !== activationGeneration) return false
        if (key !== id && itemClosers.get(key) === close) close()
      }
      return available() && request === activationGeneration
    }
    function setActiveItem(value: NavMenuKey | null) {
      if (!available() || value === activeItem.value) return
      if (props.activeItem === undefined) localActiveItem.value = value
      emit('update:activeItem', value)
    }
    const elements = new Map<NavMenuKey, HTMLElement>()
    const elementOwners = new Map<NavMenuKey, NavMenuNode>()
    const focusKey = ref<NavMenuKey>()
    const visibleCount = ref(Infinity)
    const overflowKey = computed(() => { let key = '__nav_more'; while (tree.value.byKey.has(key)) key += '_'; return key })
    const overflow = computed<NavMenuNode>(() => ({ key: overflowKey.value, option: { label: props.overflowLabel }, children: tree.value.roots.slice(visibleCount.value), level: 0, disabled: false, type: 'item' }))
    const activePath = computed(() => {
      const keys = new Set(tree.value.ancestors(selected.value).map(node => node.key))
      if (overflow.value.children.some(node => node.key === selected.value || keys.has(node.key))) keys.add(overflowKey.value)
      return keys
    })
    // Overflow adds a rendered ancestor without mutating the caller's option tree.
    function renderedAncestors(key: NavMenuKey) {
      const ancestors = tree.value.ancestors(key)
      let rootNode = tree.value.byKey.get(key)
      while (rootNode?.parent) rootNode = rootNode.parent
      if (rootNode && overflow.value.children.some(node => node.key === rootNode.key)) return [overflow.value, ...ancestors]
      return ancestors
    }
    function renderedParent(node: NavMenuNode) {
      if (node.parent) return node.parent.key
      return overflow.value.children.some(child => child.key === node.key) ? overflowKey.value : undefined
    }
    function updateExpanded(keys: NavMenuKey[]) {
      if (keys.length === expanded.value.length && keys.every((key, i) => key === expanded.value[i])) return
      if (props.expandedKeys === undefined) localExpanded.value = keys
      emit('update:expandedKeys', keys)
    }
    function expand(node: NavMenuNode, open: boolean) {
      if (!available() || (open && (props.disabled || node.disabled))) return
      let keys = [...expanded.value]
      if (open) {
        if (!activateItem()) return
        if (props.accordion || props.mode === 'horizontal' || collapsed.value) keys = keys.filter(key => {
          const other = key === overflowKey.value ? overflow.value : tree.value.byKey.get(key)
          if (!other) return false
          // Close sibling branches and their descendants, retaining every ancestor.
          return ![...renderedAncestors(key), other].some(candidate => candidate.key !== node.key && renderedParent(candidate) === renderedParent(node))
        })
        if (!keys.includes(node.key)) keys.push(node.key)
      } else {
        keys = keys.filter(key => key !== node.key && !renderedAncestors(key).some(parent => parent.key === node.key))
      }
      updateExpanded(keys)
    }
    function focus(key: NavMenuKey) {
      if (!available() || props.disabled) return
      focusGeneration++
      elements.get(key)?.focus()
    }
    function ownsFocus(document: Document, origin: Element | null) {
      const current = document.activeElement
      return !current || current === origin || current === document.body || !current.isConnected
    }
    function showOption(key: NavMenuKey | null = selected.value) {
      if (!available()) return
      const path = tree.value.ancestors(key).filter(node => !node.disabled).map(node => node.key)
      let keys = props.accordion ? path : [...new Set([...expanded.value, ...path])]
      if (overflow.value.children.some(node => node.key === key || path.includes(node.key))) keys = [...new Set([...keys, overflowKey.value])]
      updateExpanded(keys)
    }
    async function scrollTo(key: NavMenuKey | null = selected.value) {
      const generation = ++scrollGeneration
      const current = () => scrollAvailable && !disposed && !props.disabled && generation === scrollGeneration
      if (!current()) return
      showOption(key)
      if (!current()) return
      await nextTick()
      if (current() && key != null) elements.get(key)?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
    }
    const api: NavMenuContext = {
      registerItem(id, close, name) {
        if (disposed) return () => undefined
        if (name !== undefined && itemNames.has(name)) throw new Error(`NavMenu.Item duplicate name: ${name}`)
        itemClosers.set(id, close)
        if (name !== undefined) itemNames.set(name, id)
        return () => { itemClosers.delete(id); if (name !== undefined && itemNames.get(name) === id) itemNames.delete(name) }
      },
      activateItem,
      selectItem: setActiveItem,
      props, selected, activeItem, expanded, collapsed, theme, activePath, focusKey, slots, labelField: computed(() => tree.value.names.label),
      context(node) { return { option: node.option, selected: selected.value === node.key, expanded: expanded.value.includes(node.key), active: activePath.value.has(node.key), level: node.level } },
      select(node, event) {
        if (!available() || props.disabled || node.disabled || node.type !== 'item' || node.children.length) return
        const request = ++focusGeneration
        const originalRoot = root.value, document = originalRoot?.ownerDocument
        const origin = document?.activeElement ?? null
        if (!activateItem() || request !== focusGeneration || !available() || props.disabled) return
        if (props.modelValue === undefined) localValue.value = node.key
        emit('update:modelValue', node.key)
        if (!available() || request !== focusGeneration || props.disabled) return
        emit('select', node.key, node.option, event)
        if (!available() || request !== focusGeneration || props.disabled) return
        if (props.mode === 'horizontal' || collapsed.value) {
          updateExpanded([])
          afterRender(() => {
            if (request !== focusGeneration || props.disabled || expanded.value.length || originalRoot !== root.value || !document || !ownsFocus(document, origin)) return
            const ancestor = tree.value.ancestors(node.key)[0]
            focus(overflow.value.children.some(root => root.key === node.key || root.key === ancestor?.key) ? overflowKey.value : ancestor?.key ?? node.key)
          })
        }
      },
      expand, focus,
      register(node, element) {
        if (disposed) return
        if (element) { elements.set(node.key, element); elementOwners.set(node.key, node) }
        else if (elementOwners.get(node.key) === node) { elements.delete(node.key); elementOwners.delete(node.key) }
      },
    }
    provide(navMenuKey, api)
    if (props.defaultExpandAll && props.expandedKeys === undefined) localExpanded.value = [...tree.value.byKey.values()].filter(node => node.type === 'item' && node.children.length).map(node => node.key)
    if (props.autoExpandSelected && props.mode === 'vertical' && !collapsed.value && props.expandedKeys === undefined) localExpanded.value = [...new Set([...localExpanded.value, ...tree.value.ancestors(selected.value).map(node => node.key)])]
    watch([selected, tree], () => {
      let valid = expanded.value.filter(key => key === overflowKey.value || tree.value.byKey.has(key))
      if (props.autoExpandSelected && props.mode === 'vertical' && !collapsed.value) {
        const path = tree.value.ancestors(selected.value).filter(node => !node.disabled).map(node => node.key)
        valid = props.accordion ? path : [...new Set([...valid, ...path])]
      }
      updateExpanded(valid)
    })
    function setVisibleCount(count: number) {
      if (count === visibleCount.value) return
      const originalRoot = root.value, document = originalRoot?.ownerDocument
      const active = document?.activeElement as HTMLElement | null
      const focused = [...elements].find(([, element]) => element === active)?.[0]
      visibleCount.value = count
      const request = ++focusGeneration
      afterRender(() => {
        if (request !== focusGeneration || props.disabled || focused === undefined || !active || active.isConnected || originalRoot !== root.value || !document || !ownsFocus(document, active)) return
        const target = elements.get(focused) ?? elements.get(overflowKey.value) ?? root.value?.querySelector<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])')
        if (request === focusGeneration && available() && originalRoot === root.value && ownsFocus(document, active)) target?.focus()
      })
    }
    function resize() {
      if (!available()) return
      const operation = ++measurementOperation
      const originalRoot = root.value, originalMeasure = measure.value, epoch = renderEpoch
      const current = () => available() && operation === measurementOperation && epoch === renderEpoch && originalRoot === root.value && originalMeasure === measure.value
      if (props.mode !== 'horizontal' || !props.responsive || !!slots.default || !originalRoot || !originalMeasure) { setVisibleCount(Infinity); return }
      const width = originalRoot.clientWidth
      if (!current() || !width) return
      const widths: number[] = []
      for (const element of Array.from(originalMeasure.children)) {
        const value = element.getBoundingClientRect().width
        if (!current()) return
        widths.push(value)
      }
      const more = widths.pop() ?? 0
      const total = widths.reduce((sum, value) => sum + value, 0)
      if (total <= width) { setVisibleCount(Infinity); return }
      let sum = more, count = 0
      for (const value of widths) { if (sum + value > width) break; sum += value; count++ }
      setVisibleCount(count)
    }
    useElementResize(() => [root.value, measure.value, ...Array.from(measure.value?.children ?? [])], () => props.mode === 'horizontal' && props.responsive && !slots.default, resize)
    watch(() => [props.options, props.mode, props.responsive, props.size], () => afterRender(resize), { deep: true })
    const visibleNodes = computed(() => props.mode === 'horizontal' && props.responsive && !slots.default ? tree.value.roots.slice(0, visibleCount.value) : tree.value.roots)
    function updateRovingFocus() {
      const rows = Array.from(root.value?.querySelectorAll<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])') ?? [])
      if (!rows.some(row => row === elements.get(focusKey.value!))) {
        const first = [...elements].find(([, el]) => el === rows[0])
        focusKey.value = first?.[0]
      }
    }
    watch([visibleNodes, expanded, () => props.disabled], () => afterRender(updateRovingFocus), { immediate: true })
    onDeactivated(() => { if (props.mode === 'horizontal' || collapsed.value) updateExpanded([]) })
    function onKeydown(event: KeyboardEvent) {
      if (!available() || event.defaultPrevented || props.disabled || (event.target as HTMLElement)?.closest('input,textarea,[contenteditable="true"]')) return
      const horizontal = props.mode === 'horizontal'
      const next = horizontal ? 'ArrowRight' : 'ArrowDown', previous = horizontal ? 'ArrowLeft' : 'ArrowUp'
      const rows = Array.from(root.value?.querySelectorAll<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])') ?? [])
      const index = rows.indexOf(root.value?.ownerDocument.activeElement as HTMLElement)
      if (index < 0) return
      if (event.key === 'Home' || event.key === 'End' || event.key === next || event.key === previous) {
        event.preventDefault()
        const target = event.key === 'Home' ? 0 : event.key === 'End' ? rows.length - 1 : (index + (event.key === previous ? -1 : 1) + rows.length) % rows.length
        rows[target]?.focus()
      } else if (!horizontal && event.key === 'ArrowLeft') {
        const ancestors = tree.value.ancestors(focusKey.value)
        const parent = ancestors[ancestors.length - 1]
        if (parent?.type === 'item') { event.preventDefault(); expand(parent, false); focus(parent.key) }
      }
    }
    function setCollapsed(value: boolean) { if (!available()) return; if (props.collapsed === undefined && !sider) localCollapsed.value = value; emit('update:collapsed', value) }
    expose({ showOption, scrollTo, resize, setCollapsed, setActiveItem })
    const measureContent = (node: NavMenuNode): VNodeChild => {
      const context = api.context(node)
      const render = (kind: 'label' | 'icon' | 'extra') => { const value = node.option[kind === 'label' ? tree.value.names.label : kind] as NavMenuContent; return slots[kind]?.(context) ?? (typeof value === 'function' ? value(context) : value) }
      return [h('span', { class: n('icon') }, [render('icon')]), h('span', { class: n('label') }, [render('label')]), h('span', { class: n('extra') }, [render('extra')]), node.children.length ? h(NavMenuArrow, { placement: 'bottom-start' }) : null]
    }
    return () => h('nav', mergeProps(attrs, { ref: root, class: classes(n(), n(`--${props.mode}`), n(`--${props.size}`), n(`--${theme.value}`), [!!slots.default, n('--custom-items')], [collapsed.value, n('--collapsed')]),
      style: { '--c-nav-menu-icon-size': `${props.iconSize}px`, ...(collapsed.value ? { width: `${props.collapsedWidth}px` } : {}) }, onKeydown,
    }), [h('ul', { role: props.mode === 'horizontal' ? 'menubar' : 'menu', class: n('list') }, [
      ...(slots.default?.() ?? []),
      ...visibleNodes.value.map(node => h(NavNode, { key: node.key, node })),
      props.mode === 'horizontal' && props.responsive && !slots.default && overflow.value.children.length ? h(NavNode, { key: overflowKey.value, node: overflow.value }) : null,
    ]), props.mode === 'horizontal' && props.responsive && !slots.default ? h('div', { ref: measure, class: n('measure'), 'aria-hidden': 'true', inert: '' }, [
      ...tree.value.roots.map(node => h('div', { key: node.key, class: [n('item'), node.option.props?.class, props.nodeProps?.(api.context(node))?.class], style: [node.option.props?.style, props.nodeProps?.(api.context(node))?.style as any, { paddingInlineStart: `${props.rootIndent}px` }] }, [measureContent(node)])), h('div', { class: n('item') }, [measureContent({ ...overflow.value, children: tree.value.roots })]),
    ]) : null])
  },
})

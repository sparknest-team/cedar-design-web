import { computed, mergeProps, defineComponent, h, inject, nextTick, onDeactivated, provide, ref, watch, type VNodeChild } from 'vue'
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
    const itemClosers = new Map<symbol, () => void>()
    const itemNames = new Map<NavMenuKey, symbol>()
    function activateItem(id?: symbol) { itemClosers.forEach((close, key) => { if (key !== id) close() }) }
    function setActiveItem(value: NavMenuKey | null) {
      if (value === activeItem.value) return
      if (props.activeItem === undefined) localActiveItem.value = value
      emit('update:activeItem', value)
    }
    const elements = new Map<NavMenuKey, HTMLElement>()
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
      if (open && (props.disabled || node.disabled)) return
      let keys = [...expanded.value]
      if (open) {
        activateItem()
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
    function focus(key: NavMenuKey) { elements.get(key)?.focus() }
    function showOption(key: NavMenuKey | null = selected.value) {
      const path = tree.value.ancestors(key).filter(node => !node.disabled).map(node => node.key)
      let keys = props.accordion ? path : [...new Set([...expanded.value, ...path])]
      if (overflow.value.children.some(node => node.key === key || path.includes(node.key))) keys = [...new Set([...keys, overflowKey.value])]
      updateExpanded(keys)
    }
    async function scrollTo(key: NavMenuKey | null = selected.value) {
      showOption(key); await nextTick()
      if (key != null) elements.get(key)?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
    }
    const api: NavMenuContext = {
      registerItem(id, close, name) {
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
        if (props.disabled || node.disabled || node.type !== 'item' || node.children.length) return
        activateItem()
        if (props.modelValue === undefined) localValue.value = node.key
        emit('update:modelValue', node.key); emit('select', node.key, node.option, event)
        if (props.mode === 'horizontal' || collapsed.value) {
          updateExpanded([])
          nextTick(() => {
            if (expanded.value.length) return
            const ancestor = tree.value.ancestors(node.key)[0]
            focus(overflow.value.children.some(root => root.key === node.key || root.key === ancestor?.key) ? overflowKey.value : ancestor?.key ?? node.key)
          })
        }
      },
      expand, focus,
      register(node, element) { if (element) elements.set(node.key, element); else elements.delete(node.key) },
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
      const active = root.value?.ownerDocument.activeElement as HTMLElement | null
      const focused = [...elements].find(([, element]) => element === active)?.[0]
      visibleCount.value = count
      nextTick(() => {
        if (focused === undefined || !active || active.isConnected) return
        const target = elements.get(focused) ?? elements.get(overflowKey.value) ?? root.value?.querySelector<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])')
        target?.focus()
      })
    }
    function resize() {
      if (props.mode !== 'horizontal' || !props.responsive || !!slots.default || !root.value || !measure.value) { setVisibleCount(Infinity); return }
      const width = root.value.clientWidth
      if (!width) return
      const widths = Array.from(measure.value.children).map(el => el.getBoundingClientRect().width)
      const more = widths.pop() ?? 0
      const total = widths.reduce((sum, value) => sum + value, 0)
      if (total <= width) { setVisibleCount(Infinity); return }
      let sum = more, count = 0
      for (const value of widths) { if (sum + value > width) break; sum += value; count++ }
      setVisibleCount(count)
    }
    useElementResize(() => [root.value, measure.value, ...Array.from(measure.value?.children ?? [])], () => props.mode === 'horizontal' && props.responsive && !slots.default, resize)
    watch(() => [props.options, props.mode, props.responsive, props.size], () => nextTick(resize), { deep: true })
    const visibleNodes = computed(() => props.mode === 'horizontal' && props.responsive && !slots.default ? tree.value.roots.slice(0, visibleCount.value) : tree.value.roots)
    watch([visibleNodes, expanded, () => props.disabled], () => nextTick(() => {
      const rows = Array.from(root.value?.querySelectorAll<HTMLElement>('[data-nav-item]:not([aria-disabled="true"])') ?? [])
      if (!rows.some(row => row === elements.get(focusKey.value!))) {
        const first = [...elements].find(([, el]) => el === rows[0])
        focusKey.value = first?.[0]
      }
    }), { immediate: true })
    onDeactivated(() => { if (props.mode === 'horizontal' || collapsed.value) updateExpanded([]) })
    function onKeydown(event: KeyboardEvent) {
      if (event.defaultPrevented || props.disabled || (event.target as HTMLElement)?.closest('input,textarea,[contenteditable="true"]')) return
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
    function setCollapsed(value: boolean) { if (props.collapsed === undefined && !sider) localCollapsed.value = value; emit('update:collapsed', value) }
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

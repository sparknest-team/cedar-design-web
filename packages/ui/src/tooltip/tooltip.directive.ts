import { createApp, defineComponent, h, nextTick, type App, type Directive, type DirectiveBinding } from 'vue'
import type { TriggerPlacement } from '../trigger'
import Tooltip from './Tooltip.vue'
import { isPureTextElement, isTextOverflow } from './utils'

const TOOLTIP_KEY = Symbol('CedarTooltip')
let nextDirectiveId = 0
type TooltipDirectiveArg = TriggerPlacement | 'ellipsis'

export interface TooltipOptions {
  content: string
  placement?: TriggerPlacement
}

interface TooltipState {
  app?: App
  container?: HTMLElement
  value: string | TooltipOptions
  arg?: TooltipDirectiveArg
  enter: () => void
  visible: boolean
  ownsEllipsisClass: boolean
}

interface ElementWithTooltip extends HTMLElement {
  [TOOLTIP_KEY]?: TooltipState
}

const TooltipComponent = defineComponent({
  props: ['options', 'reference', 'onVisibility'],
  setup(props) {
    return () => h(Tooltip, {
      ...props.options,
      reference: props.reference,
      defaultOpen: true,
      'onUpdate:open': props.onVisibility,
    })
  },
})

function resolveOptions(el: ElementWithTooltip, state: TooltipState): TooltipOptions | undefined {
  if (state.arg === 'ellipsis' && isPureTextElement(el) && !isTextOverflow(el)) return undefined
  const value = typeof state.value === 'string' ? { content: state.value } : state.value
  return {
    ...value,
    content: state.arg === 'ellipsis' ? el.textContent ?? '' : value.content,
    placement: state.arg === 'ellipsis' ? 'top' : state.arg ?? value.placement,
  }
}

function close(state: TooltipState) {
  state.app?.unmount()
  state.container?.remove()
  state.app = undefined
  state.container = undefined
}

function open(el: ElementWithTooltip, state: TooltipState) {
  if (state.app) return
  const options = resolveOptions(el, state)
  if (!options?.content) return
  const container = document.createElement('div')
  document.body.append(container)
  state.visible = true
  const app = createApp(TooltipComponent, { options, reference: el, onVisibility: (visible: boolean) => {
    state.visible = visible
    if (!visible) void nextTick(() => {
      if (state.app === app && !state.visible) close(state)
    })
  } })
  app.config.idPrefix = `cedar-tooltip-directive-${nextDirectiveId++}`
  state.container = container
  state.app = app
  app.mount(container)
}

export const vTooltip: Directive<HTMLElement, string | TooltipOptions> = {
  mounted(el, binding: DirectiveBinding<string | TooltipOptions, any, TooltipDirectiveArg>) {
    const target = el as ElementWithTooltip
    const ownsEllipsisClass = binding.arg === 'ellipsis' && !target.classList.contains('text-ellipsis')
    if (ownsEllipsisClass) target.classList.add('text-ellipsis')
    const state: TooltipState = {
      value: binding.value,
      arg: binding.arg,
      enter: () => open(target, state),
      visible: false,
      ownsEllipsisClass,
    }
    target[TOOLTIP_KEY] = state
    target.addEventListener('mouseenter', state.enter)
    target.addEventListener('focusin', state.enter)
  },
  updated(el, binding: DirectiveBinding<string | TooltipOptions, any, TooltipDirectiveArg>) {
    const target = el as ElementWithTooltip
    const state = target[TOOLTIP_KEY]
    if (!state) return
    const active = Boolean(state.app)
    if (binding.arg !== state.arg) {
      if (state.ownsEllipsisClass) target.classList.remove('text-ellipsis')
      state.ownsEllipsisClass = binding.arg === 'ellipsis' && !target.classList.contains('text-ellipsis')
      if (state.ownsEllipsisClass) target.classList.add('text-ellipsis')
    }
    if (binding.arg === 'ellipsis' && !target.classList.contains('text-ellipsis')) {
      target.classList.add('text-ellipsis')
      state.ownsEllipsisClass = true
    }
    state.value = binding.value
    state.arg = binding.arg
    if (active) {
      close(state)
      open(target, state)
    }
  },
  unmounted(el) {
    const target = el as ElementWithTooltip
    const state = target[TOOLTIP_KEY]
    if (!state) return
    target.removeEventListener('mouseenter', state.enter)
    target.removeEventListener('focusin', state.enter)
    close(state)
    if (state.ownsEllipsisClass) target.classList.remove('text-ellipsis')
    delete target[TOOLTIP_KEY]
  },
  getSSRProps(binding) {
    return binding.arg === 'ellipsis' ? { class: 'text-ellipsis' } : {}
  },
}

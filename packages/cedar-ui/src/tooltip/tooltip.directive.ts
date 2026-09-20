import { createApp, defineComponent, h, type App, type Directive, type DirectiveBinding } from 'vue'
import type { TriggerPlacement } from '../trigger'
import Tooltip from './Tooltip.vue'
import { isPureTextElement, isTextOverflow } from './utils'

const TOOLTIP_KEY = Symbol('CedarTooltip')
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
  leave: () => void
}

interface ElementWithTooltip extends HTMLElement {
  [TOOLTIP_KEY]?: TooltipState
}

const TooltipComponent = defineComponent({
  props: ['options', 'reference'],
  setup(props) {
    return () => h(Tooltip, {
      ...props.options,
      reference: props.reference,
      open: true,
      trigger: 'manual',
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
  const app = createApp(TooltipComponent, { options, reference: el })
  state.container = container
  state.app = app
  app.mount(container)
}

export const vTooltip: Directive<HTMLElement, string | TooltipOptions> = {
  mounted(el, binding: DirectiveBinding<string | TooltipOptions, any, TooltipDirectiveArg>) {
    const target = el as ElementWithTooltip
    if (binding.arg === 'ellipsis') target.classList.add('text-ellipsis')
    const state: TooltipState = {
      value: binding.value,
      arg: binding.arg,
      enter: () => open(target, state),
      leave: () => close(state),
    }
    target[TOOLTIP_KEY] = state
    target.addEventListener('mouseenter', state.enter)
    target.addEventListener('mouseleave', state.leave)
    target.addEventListener('focusin', state.enter)
    target.addEventListener('focusout', state.leave)
  },
  updated(el, binding: DirectiveBinding<string | TooltipOptions, any, TooltipDirectiveArg>) {
    const target = el as ElementWithTooltip
    const state = target[TOOLTIP_KEY]
    if (!state) return
    const active = Boolean(state.app)
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
    target.removeEventListener('mouseleave', state.leave)
    target.removeEventListener('focusin', state.enter)
    target.removeEventListener('focusout', state.leave)
    close(state)
    delete target[TOOLTIP_KEY]
  },
  getSSRProps(binding) {
    return binding.arg === 'ellipsis' ? { class: 'text-ellipsis' } : {}
  },
}

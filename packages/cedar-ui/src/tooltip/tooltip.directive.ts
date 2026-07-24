import { type Directive, type DirectiveBinding, createVNode, defineComponent, h, createApp } from 'vue'
import Tooltip from './tooltip.vue'
import { isPureTextElement, isTextOverflow } from './utils'

const TOOLTIP_KEY = Symbol('CedarTooltip')
type Position = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb' | 'ellipsis'

export interface TooltipOptions {
  content: string
  position?: Position

  [key: string]: any
}

export interface ElementWithTooltip extends HTMLElement {
  [TOOLTIP_KEY]?: {
    instance: any
    options: TooltipOptions
    container: HTMLElement
  }
}

const TooltipComponent = defineComponent({
  props: ['options'],
  setup(props) {
    return () =>
      h(
        Tooltip,
        {
          ...props.options,
          popupVisible: true,
        },
        () => h('div', { style: { width: '100%', height: '100%' } }, ''),
      )
  },
})

const createTooltipInstance = (
  el: ElementWithTooltip,
  binding: DirectiveBinding<string | TooltipOptions, any, Position>,
) => {
  const isPureText = isPureTextElement(el)
  const isTextOverflowed = isTextOverflow(el)
  const toolTipArg = binding.arg
  const toolTipPosition = binding.arg === 'ellipsis' ? 'top' : binding.arg
  if (toolTipArg === 'ellipsis' && isPureText && !isTextOverflowed) {
    return
  }
  const content = (toolTipArg === 'ellipsis' ? el.textContent : binding.value) as string
  const options: TooltipOptions = { content: content, position: toolTipPosition }
  const tooltipElement = document.createElement('div')
  const instance = createApp(TooltipComponent, { options })

  tooltipElement.style.position = 'absolute'
  tooltipElement.style.width = el.clientWidth + 'px'
  tooltipElement.style.height = el.clientHeight + 'px'
  tooltipElement.style.zIndex = '-1'
  const style = window.getComputedStyle(el)
  // if (style.position === '' || style.position === 'static') {
  //   tooltipElement.style.marginTop = `-${el.clientHeight}px`
  // }
  tooltipElement.style.top = '0px'
  tooltipElement.style.left = '0px'
  // if (style.position !== 'absolute') {
  //   const top = style.paddingTop.replace('px', '')
  //   const left = style.paddingLeft.replace('px', '')
  //   tooltipElement.style.marginTop = `-${el.clientHeight - parseInt(top, 10)}px`
  //   tooltipElement.style.marginLeft = `-${parseInt(left, 10)}px`
  // }
  el.appendChild(tooltipElement)
  instance.mount(tooltipElement)

  // document.body.appendChild(tooltipElement)

  el[TOOLTIP_KEY] = {
    instance,
    options,
    container: tooltipElement,
  }
}

const updateTooltipOptions = (el: ElementWithTooltip, newOptions: string | TooltipOptions) => {
  const instance = el[TOOLTIP_KEY]
  if (instance) {
    const options = typeof newOptions === 'string' ? { content: newOptions } : newOptions
    Object.assign(instance.options, options)
  }
}

export const vTooltip: Directive = {
  mounted(el, binding?) {
    if (binding.arg === 'ellipsis') {
      el.classList.add('text-ellipsis')
      el.classList.add('relative')
    }
    el.addEventListener('mouseenter', () => {
      if (!el[TOOLTIP_KEY]) {
        createTooltipInstance(el, binding as any)
      }
    })

    el.addEventListener('mouseleave', () => {
      if (el[TOOLTIP_KEY]) {
        el[TOOLTIP_KEY].instance.unmount()
        if (el.contains(el[TOOLTIP_KEY].container)) {
          el.removeChild(el[TOOLTIP_KEY].container)
        }
        el[TOOLTIP_KEY] = undefined
      }
    })
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      updateTooltipOptions(el, binding.value)
    }
  },
  unmounted(el) {
    if (el[TOOLTIP_KEY]) {
      el[TOOLTIP_KEY].instance.unmount()
      if (el.contains(el[TOOLTIP_KEY].container)) {
        el.removeChild(el[TOOLTIP_KEY].container)
      }
      el[TOOLTIP_KEY] = undefined
    }
  },
}

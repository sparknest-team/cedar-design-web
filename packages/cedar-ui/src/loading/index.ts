import { createApp, defineComponent, h, type Directive, type DirectiveBinding } from 'vue'
import Loading from './loading.vue'

const INSTANCE_KEY = Symbol('CedarLoading')

export interface LoadingOptions {
  text?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  dot?: boolean
  icon?: string
  element?: string | HTMLElement
  fullscreen?: boolean
}

export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: any
    dom: HTMLElement
    options: LoadingOptions
  }
}

const LoadingComponent = defineComponent({
  props: ['options'],
  setup(props) {
    return () =>
      h(Loading, {
        ...props.options,
        loading: true,
      })
  },
})

const createInstance = (el: ElementLoading, binding: DirectiveBinding<boolean | LoadingOptions>) => {
  const options: LoadingOptions = typeof binding.value === 'boolean' ? {} : binding.value

  const instance = createApp(LoadingComponent, { options })
  const loadingElement = document.createElement('div')
  loadingElement.className = 'c-loading'
  instance.mount(loadingElement)

  if (options.fullscreen) {
    document.body.classList.add('c-loading-parent--hidden')
    document.body.appendChild(loadingElement)
  } else {
    el.appendChild(loadingElement)
    el.classList.add('c-loading-parent--relative')
  }

  el[INSTANCE_KEY] = {
    instance,
    options,
    dom: loadingElement,
  }
}

const updateOptions = (el: ElementLoading, newOptions: LoadingOptions) => {
  const instance = el[INSTANCE_KEY]
  if (instance) {
    Object.assign(instance.options, newOptions)
  }
}

export const vLoading: Directive<ElementLoading, boolean | LoadingOptions> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY]
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding)
      } else if (binding.value && binding.oldValue) {
        if (typeof binding.value === 'object') {
          updateOptions(el, binding.value)
        }
      } else {
        instance?.instance.unmount()
        if (el.contains(instance?.dom as HTMLElement)) {
          el.removeChild(instance?.dom as HTMLElement)
        }
        el.classList.remove('c-loading-parent--relative')
        document.body.classList.remove('c-loading-parent--hidden')
        el[INSTANCE_KEY] = undefined
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.unmount()
    el.classList.remove('c-loading-parent--relative')
    document.body.classList.remove('c-loading-parent--hidden')
    el[INSTANCE_KEY] = undefined
  },
  getSSRProps() {
    return {}
  },
}

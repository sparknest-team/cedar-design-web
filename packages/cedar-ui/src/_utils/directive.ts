import { h, mergeProps, render, resolveComponent } from 'vue'
import { isObject } from './is'

export function useDirectiveComponent(component, props) {
  const concreteComponent = typeof component === 'string' ? resolveComponent(component) : component
  const hook = mountComponent(concreteComponent, props)
  return {
    mounted: hook,
    updated: hook,
    unmounted(el) {
      render(null, el)
    },
  }
}

function mountComponent(component, props) {
  return function (el, binding) {
    const _props = typeof props === 'function' ? props(el, binding) : props
    const text = binding.value?.text ?? binding.value ?? _props?.text
    const value = isObject(binding.value) ? binding.value : {}

    const children = () => text ?? el.textContent

    const node = h(component, mergeProps(_props, value), children)

    render(node, el)
  }
}

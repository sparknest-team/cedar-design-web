import type { App } from 'vue'
import { ref } from 'vue'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import type { ArcoOptions } from '../_utils/types'
import _HoverOverlay from './HoverOverlay.vue'
import { hoverOverlayProps } from './props'

const HoverOverlay = Object.assign(_HoverOverlay, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _HoverOverlay.name, _HoverOverlay)
  },
})

export function useHoverOverlay() {
  const hovering = ref(false)

  const handleHovering = (value: boolean) => {
    hovering.value = value
  }

  return {
    hovering,
    handleHovering,
  }
}

export type HoverOverlayInstance = InstanceType<typeof _HoverOverlay>
export type { HoverOverlayProps } from './props'

export { hoverOverlayProps }
export { HoverOverlay }

export const _HoverOverlayComponent = HoverOverlay

export default HoverOverlay

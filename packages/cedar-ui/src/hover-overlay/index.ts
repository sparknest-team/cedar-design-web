import { ref } from 'vue'
import { withInstall } from '../_utils/global-config'
import _HoverOverlay from './HoverOverlay.vue'
import { hoverOverlayProps } from './props'

const HoverOverlay = withInstall(_HoverOverlay, Object.assign(_HoverOverlay, {
}), { components: [_HoverOverlay] })

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

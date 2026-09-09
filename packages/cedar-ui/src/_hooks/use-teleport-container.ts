import { onMounted, Ref, ref, watch } from 'vue'
import { getElement } from '../_utils/dom'
import { resolvePopupContainer, type PopupContainer } from '../_utils/popup-container'

export const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = 'body',
  documentContainer,
}: {
  popupContainer: Ref<PopupContainer | undefined>
  visible: Ref<boolean>
  defaultContainer?: string
  documentContainer?: boolean
}) => {
  const teleportContainer = ref<string | HTMLElement>(popupContainer.value || defaultContainer)
  const containerRef = ref<HTMLElement>()

  const getContainer = () => {
    const resolved = resolvePopupContainer(popupContainer.value)
    const element = getElement(resolved)
    const _teleportContainer = resolved
    const _containerElement = element ?? (documentContainer ? document.documentElement : getElement(defaultContainer))
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement
    }
  }

  onMounted(() => getContainer())
  watch(popupContainer, getContainer, { flush: 'post' })

  watch(visible, (visible) => {
    if (teleportContainer.value !== popupContainer.value && visible) {
      getContainer()
    }
  })

  return {
    teleportContainer,
    containerRef,
  }
}

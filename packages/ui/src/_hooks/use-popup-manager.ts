import { computed, onMounted, onBeforeUnmount, onDeactivated, onActivated, readonly, type Ref, ref, watch } from 'vue'
import { usePopupLayer } from '../_utils/popup-layer'

export type PopupType = 'popup' | 'dialog' | 'message'

const POPUP_BASE_Z_INDEX = 1000
const MESSAGE_BASE_Z_INDEX = 5000
const Z_INDEX_STEP = 1

class PopupManager {
  private popupStack = {
    popup: new Set<number>(),
    dialog: new Set<number>(),
    message: new Set<number>(),
  }

  private getNextZIndex = (type: PopupType) => {
    const current =
      type === 'message'
        ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX
        : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX
    return current + Z_INDEX_STEP
  }

  public add = (type: PopupType) => {
    const zIndex = this.getNextZIndex(type)
    this.popupStack[type].add(zIndex)
    if (type === 'dialog') {
      this.popupStack.popup.add(zIndex)
    }
    return zIndex
  }

  public delete = (zIndex: number, type: PopupType) => {
    this.popupStack[type].delete(zIndex)
    if (type === 'dialog') {
      this.popupStack.popup.delete(zIndex)
    }
  }


}

const popupManager = new PopupManager()

export default function usePopupManager(
  type: PopupType,
  {
    visible,
    runOnMounted,
    zIndex: explicitZIndex,
  }: {
    visible?: Ref<boolean>
    runOnMounted?: boolean
    zIndex?: Readonly<Ref<number | undefined>>
  } = {},
) {
  const zIndex = ref(0)
  const active = ref(false)
  const { onStackTop } = usePopupLayer(() => active.value && type !== 'message', computed(() => explicitZIndex?.value ?? zIndex.value))

  const open = () => {
    if (active.value) return
    zIndex.value = popupManager.add(type)
    active.value = true
  }

  const close = () => {
    if (!active.value) return
    active.value = false
    popupManager.delete(zIndex.value, type)
  }

  const isLastDialog = (event?: Event) => type === 'dialog' && onStackTop(event)

  watch(
    () => visible?.value,
    (visible) => {
      if (visible) {
        open()
      } else {
        close()
      }
    },
    {
      immediate: true,
    },
  )

  if (runOnMounted) {
    onMounted(() => {
      open()
    })

  }

  onBeforeUnmount(close)
  onDeactivated(close)
  onActivated(() => { if (visible?.value || runOnMounted) open() })

  return {
    onStackTop,
    zIndex: readonly(zIndex),
    open,
    close,
    isLastDialog,
  }
}

import { ref } from 'vue'

interface ControlBlockParams {
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export const useControlBlock = ({ value, onChange }: ControlBlockParams) => {
  const active = ref(false)
  const blockRef = ref<HTMLDivElement>()
  const handlerRef = ref<HTMLDivElement>()

  const getPercentNumber = (value: number, max: number) => {
    if (max <= 0) return 0
    if (value < 0) return 0
    if (value > max) return 1
    return value / max
  }

  const setCurrentPosition = (ev: MouseEvent) => {
    if (!blockRef.value) return
    const { clientX, clientY } = ev
    // 用 content box（排除 border），与 absolute handler 的 % 定位基准一致
    const rect = blockRef.value.getBoundingClientRect()
    const width = blockRef.value.clientWidth
    const height = blockRef.value.clientHeight
    const newValue: [number, number] = [
      getPercentNumber(clientX - rect.left - blockRef.value.clientLeft, width),
      getPercentNumber(clientY - rect.top - blockRef.value.clientTop, height),
    ]
    if (newValue[0] !== value[0] || newValue[1] !== value[1]) {
      onChange?.(newValue)
    }
  }

  const removeListener = () => {
    active.value = false
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', removeListener)
    window.removeEventListener('contextmenu', removeListener)
  }

  const onMouseDown = (ev: MouseEvent) => {
    // 避免拖拽时选中文本 / 触发失焦
    ev.preventDefault()
    active.value = true
    setCurrentPosition(ev)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', removeListener)
    window.addEventListener('contextmenu', removeListener)
  }

  function onMouseMove(ev: MouseEvent) {
    ev.preventDefault()
    if (ev.buttons > 0) {
      setCurrentPosition(ev)
    } else {
      removeListener()
    }
  }

  return {
    active,
    blockRef,
    handlerRef,
    onMouseDown,
  }
}

import { onActivated, onBeforeUnmount, onDeactivated, ref } from 'vue'

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

  let enabled = true
  let generation = 0
  let binding: { view: Window; move: (event: MouseEvent) => void; end: () => void } | undefined
  const removeListener = () => {
    generation++
    active.value = false
    if (binding) {
      binding.view.removeEventListener('mousemove', binding.move)
      binding.view.removeEventListener('mouseup', binding.end)
      binding.view.removeEventListener('contextmenu', binding.end)
      binding = undefined
    }
  }
  const onMouseDown = (ev: MouseEvent) => {
    const view = blockRef.value?.ownerDocument.defaultView
    if (!enabled || !view || ev.button !== 0) return
    ev.preventDefault()
    removeListener()
    const cycle = generation
    active.value = true
    setCurrentPosition(ev)
    if (!enabled || !active.value || cycle !== generation) return
    const end = () => { if (cycle === generation) removeListener() }
    const move = (event: MouseEvent) => {
      if (!enabled || !active.value || cycle !== generation) return
      event.preventDefault()
      if (event.buttons > 0) setCurrentPosition(event)
      else end()
    }
    binding = { view, move, end }
    view.addEventListener('mousemove', move)
    view.addEventListener('mouseup', end)
    view.addEventListener('contextmenu', end)
  }
  const stop = () => { enabled = false; removeListener() }
  onActivated(() => { enabled = true })
  onDeactivated(stop)
  onBeforeUnmount(stop)

  return {
    active,
    blockRef,
    handlerRef,
    onMouseDown,
  }
}

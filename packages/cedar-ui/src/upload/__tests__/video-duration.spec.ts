import { expect, test, vi } from 'vitest'
import { readVideoDuration } from '../utils/video-duration'

test.each(['metadata', 'error', 'abort', 'timeout'] as const)('video metadata %s releases temporary resources', async (ending) => {
  const createDescriptor = Object.getOwnPropertyDescriptor(URL, 'createObjectURL')
  const revokeDescriptor = Object.getOwnPropertyDescriptor(URL, 'revokeObjectURL')
  const revoke = vi.fn()
  Object.defineProperty(URL, 'createObjectURL', { configurable: true, value: () => 'blob:metadata' })
  Object.defineProperty(URL, 'revokeObjectURL', { configurable: true, value: revoke })
  vi.useFakeTimers()
  const video = document.createElement('video')
  vi.spyOn(video, 'load').mockImplementation(() => {})
  Object.defineProperty(video, 'duration', { value: 65 })
  const original = document.createElement.bind(document)
  const create = vi.spyOn(document, 'createElement').mockImplementation(((tag: string) => tag === 'video' ? video : original(tag)) as typeof document.createElement)
  const controller = new AbortController()
  try {
    const reading = readVideoDuration(new File(['video'], 'clip.webm'), controller.signal)
    if (ending === 'metadata') video.dispatchEvent(new Event('loadedmetadata'))
    if (ending === 'error') video.dispatchEvent(new Event('error'))
    if (ending === 'abort') controller.abort()
    if (ending === 'timeout') vi.advanceTimersByTime(5000)
    expect(await reading).toBe(ending === 'metadata' ? 65 : undefined)
    expect(revoke).toHaveBeenCalledTimes(1)
    expect(revoke).toHaveBeenCalledWith('blob:metadata')
    expect(video.hasAttribute('src')).toBe(false)
  } finally {
    create.mockRestore()
    vi.useRealTimers()
    if (createDescriptor) Object.defineProperty(URL, 'createObjectURL', createDescriptor)
    else Reflect.deleteProperty(URL, 'createObjectURL')
    if (revokeDescriptor) Object.defineProperty(URL, 'revokeObjectURL', revokeDescriptor)
    else Reflect.deleteProperty(URL, 'revokeObjectURL')
  }
})

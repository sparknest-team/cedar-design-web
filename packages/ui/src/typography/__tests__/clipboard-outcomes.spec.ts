import { afterEach, expect, test, vi } from 'vitest'
import { clipboard } from '../../_utils/clipboard'

const clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard')
const execDescriptor = Object.getOwnPropertyDescriptor(document, 'execCommand')
afterEach(() => {
  if (clipboardDescriptor) Object.defineProperty(navigator, 'clipboard', clipboardDescriptor)
  else Reflect.deleteProperty(navigator, 'clipboard')
  if (execDescriptor) Object.defineProperty(document, 'execCommand', execDescriptor)
  else Reflect.deleteProperty(document, 'execCommand')
  vi.restoreAllMocks()
})

test('reports native success and does not use fallback', async () => {
  const writeText = vi.fn().mockResolvedValue(undefined)
  const exec = vi.fn()
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
  Object.defineProperty(document, 'execCommand', { configurable: true, value: exec })
  expect(await clipboard('hello')).toBe(true)
  expect(writeText).toHaveBeenCalledWith('hello')
  expect(exec).not.toHaveBeenCalled()
})

test('reports the actual fallback outcome and removes temporary nodes', async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) } })
  const exec = vi.fn().mockReturnValueOnce(false).mockReturnValueOnce(true).mockImplementationOnce(() => { throw new Error('failed') })
  Object.defineProperty(document, 'execCommand', { configurable: true, value: exec })
  const before = document.body.childElementCount
  expect(await clipboard('first')).toBe(false)
  expect(await clipboard('second')).toBe(true)
  expect(await clipboard('third')).toBe(false)
  expect(document.body.childElementCount).toBe(before)
})

test('does not start a fallback after the request becomes stale', async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
  let reject!: (reason: Error) => void
  const writeText = vi.fn().mockReturnValue(new Promise((_resolve, fail) => { reject = fail }))
  const exec = vi.fn()
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
  Object.defineProperty(document, 'execCommand', { configurable: true, value: exec })
  let current = true
  const pending = clipboard('old', () => current)
  current = false
  reject(new Error('denied'))
  expect(await pending).toBe(false)
  expect(exec).not.toHaveBeenCalled()
})

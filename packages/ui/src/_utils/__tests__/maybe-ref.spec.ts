import { computed, ref, shallowRef } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { resolveMaybeRefOrGetter } from '../maybe-ref'

describe('resolveMaybeRefOrGetter', () => {
  it('returns values, unwraps refs, and calls getters once', () => {
    const getter = vi.fn(() => 7)
    expect(resolveMaybeRefOrGetter(0)).toBe(0)
    expect(resolveMaybeRefOrGetter(null)).toBeNull()
    expect(resolveMaybeRefOrGetter(ref('value'))).toBe('value')
    expect(resolveMaybeRefOrGetter(getter)).toBe(7)
    expect(getter).toHaveBeenCalledTimes(1)
  })

  it('does not call a function stored in a ref', () => {
    const callback = vi.fn(() => 7)
    expect(resolveMaybeRefOrGetter(shallowRef(callback))).toBe(callback)
    expect(callback).not.toHaveBeenCalled()
  })

  it('preserves reactive tracking and forwards getter errors', () => {
    const value = ref(1)
    const derived = computed(() => resolveMaybeRefOrGetter(() => value.value * 2))
    expect(derived.value).toBe(2)
    value.value = 3
    expect(derived.value).toBe(6)
    const error = new Error('getter failed')
    expect(() => resolveMaybeRefOrGetter(() => { throw error })).toThrow(error)
  })
})

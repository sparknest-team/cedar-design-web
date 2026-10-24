import { defineComponent, h, inject, KeepAlive, nextTick, onBeforeUnmount, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import scrollIntoView from 'scroll-into-view-if-needed'
import Form from '../Form.vue'
import { formInjectionKey, type FormItemInfo } from '../context'

vi.mock('scroll-into-view-if-needed', () => ({ default: vi.fn() }))

let owner: ReturnType<typeof mount> | undefined
let container: HTMLElement
const error = { field: 'name', message: 'Required' }
beforeEach(() => {
  vi.mocked(scrollIntoView).mockClear()
  container = document.createElement('div')
  document.body.appendChild(container)
})
afterEach(() => {
  try {
    owner?.unmount()
  } finally {
    container.remove()
    vi.restoreAllMocks()
    owner = undefined
  }
})

function fixture(offset = 0) {
  const visible = ref(true)
  const state = {} as { resolve: (value: typeof error | undefined) => void; unregister: () => void; register: () => void }
  const Field = defineComponent({
    setup() {
      const form = inject(formInjectionKey)!
      const field: FormItemInfo = {
        field: 'name', disabled: false, error: true,
        validate: () => new Promise((resolve) => { state.resolve = resolve }),
        clearValidate() {}, resetField() {}, setField() {},
      }
      form.addField(field)
      state.register = () => form.addField(field)
      state.unregister = () => form.removeField(field)
      onBeforeUnmount(state.unregister)
      return () => h('input', { id: 'name' })
    },
  })
  const Host = defineComponent({
    setup: () => () => h(KeepAlive, null, {
      default: () => visible.value
        ? h(Form, { model: {}, scrollToError: 'start', scrollToErrorOffsetY: offset }, { default: () => h(Field) })
        : null,
    }),
  })
  owner = mount(Host, { attachTo: container })
  return { form: owner.getComponent(Form), state, visible }
}
async function invalid(form: any, state: ReturnType<typeof fixture>['state'], callback?: (...args: any[]) => void) {
  const result = form.vm.validate(callback)
  state.resolve(error)
  expect(await result).toEqual({ name: error })
}

describe('Form scroll request lifecycle', () => {
  it('preserves current validation results and native helper dispatch', async () => {
    const { form, state } = fixture()
    const callback = vi.fn()
    await invalid(form, state, callback)
    expect(callback).toHaveBeenCalledWith({ name: error })
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
  })
  it('does not scroll a successful result', async () => {
    const { form, state } = fixture()
    const result = form.vm.validate()
    state.resolve(undefined)
    expect(await result).toBeUndefined()
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('accepts a current manual command', () => {
    const { form } = fixture()
    form.vm.scrollToField('name')
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
  })
  it('rejects a manual command while suspended', async () => {
    const { form, visible } = fixture()
    visible.value = false
    await nextTick()
    form.vm.scrollToField('name')
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('does not fall back to unrelated body fields after disposal', () => {
    const { form } = fixture()
    const command = form.vm.scrollToField
    owner!.unmount()
    owner = undefined
    container.innerHTML = '<input id="name">'
    command('name')
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('rejects validation started before suspension after activation', async () => {
    const { form, state, visible } = fixture()
    const result = form.vm.validate()
    visible.value = false
    await nextTick()
    visible.value = true
    await nextTick()
    state.resolve(error)
    expect(await result).toEqual({ name: error })
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('rejects an unregistered field even if its input remains', async () => {
    const { form, state } = fixture()
    const result = form.vm.validate()
    state.unregister()
    state.resolve(error)
    expect(await result).toEqual({ name: error })
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('rejects automatic scrolling after the validation callback clears errors', async () => {
    const { form, state } = fixture()
    await invalid(form, state, () => form.vm.clearValidate())
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
  it('preserves a replacement manual command created inside the callback', async () => {
    const { form, state } = fixture()
    await invalid(form, state, () => form.vm.scrollToField('name'))
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
  })
  it('rejects a retained offset action after disposal', async () => {
    const { form, state } = fixture(24)
    await invalid(form, state)
    const options = vi.mocked(scrollIntoView).mock.calls[0][1] as any
    owner!.unmount()
    owner = undefined
    const scrollTo = vi.fn()
    options.behavior([{ el: { scrollTo }, top: 100, left: 10 }])
    expect(scrollTo).not.toHaveBeenCalled()
  })
  it('accepts fresh validation after activation', async () => {
    const { form, state, visible } = fixture()
    visible.value = false
    await nextTick()
    visible.value = true
    await nextTick()
    await invalid(form, state)
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
  })

  it('does not consume a retained offset batch twice', async () => {
    const { form, state } = fixture(24)
    await invalid(form, state)
    const options = vi.mocked(scrollIntoView).mock.calls[0][1] as any
    const scrollTo = vi.fn()
    const actions = [{ el: { scrollTo }, top: 100, left: 10 }]
    options.behavior(actions)
    options.behavior(actions)
    expect(scrollTo).toHaveBeenCalledTimes(1)
  })

  it('does not run a second offset action after the first disposes the owner', async () => {
    const { form, state } = fixture(24)
    await invalid(form, state)
    const options = vi.mocked(scrollIntoView).mock.calls[0][1] as any
    const first = vi.fn(() => { owner!.unmount(); owner = undefined })
    const second = vi.fn()
    options.behavior([{ el: { scrollTo: first }, top: 100, left: 0 }, { el: { scrollTo: second }, top: 100, left: 0 }])
    expect(first).toHaveBeenCalledTimes(1)
    expect(second).not.toHaveBeenCalled()
  })

  it('rejects an offset action after its field unregisters', async () => {
    const { form, state } = fixture(24)
    await invalid(form, state)
    const options = vi.mocked(scrollIntoView).mock.calls[0][1] as any
    state.unregister()
    const scrollTo = vi.fn()
    options.behavior([{ el: { scrollTo }, top: 100, left: 0 }])
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('keeps the original unregister identity after duplicate registration', async () => {
    const { form, state } = fixture()
    state.register()
    state.unregister()
    const result = form.vm.validate()
    state.resolve?.(error)
    expect(await result).toBeUndefined()
    expect(scrollIntoView).not.toHaveBeenCalled()
  })
})

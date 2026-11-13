import { flushPromises, mount } from '@vue/test-utils'
import { h, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import Slider from '../../../slider'
import Input from '../../../input'
import InputNumber from '../../../input-number'
import Select from '../../../select'
import Cascader from '../../../cascader'

test.each(['open', 'closed'] as const)('keeps %s shadow editor open for internal events and closes for a sibling', async (mode) => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  const sibling = document.createElement('button')
  shadow.append(mountPoint, popupTarget, sibling)
  const open = ref(true)
  const changes: boolean[] = []
  const wrapper = mount({
    setup: () => () => h(Slider, {
      modelValue: 20,
      showInput: true,
      editMode: 'click',
      open: open.value,
      popupContainer: popupTarget,
      'onUpdate:open': (value: boolean) => { changes.push(value); open.value = value },
    }),
  }, { attachTo: mountPoint })
  try {
    await flushPromises()
    const input = popupTarget.querySelector('input')!
    expect(input).toBeTruthy()
    input.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await flushPromises()
    expect(changes).toEqual([])
    expect(popupTarget.contains(input)).toBe(true)
    sibling.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([false])
  } finally {
    wrapper.unmount()
    host.remove()
  }
})

test.each(['open', 'closed'] as const)('ignores internal focus and does not deliver deferred outside events after %s root unmount', async (mode) => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  const sibling = document.createElement('button')
  shadow.append(mountPoint, popupTarget, sibling)
  const changes: boolean[] = []
  const wrapper = mount(Slider, {
    attachTo: mountPoint,
    props: {
      modelValue: 20, showInput: true, editMode: 'click', open: true, popupContainer: popupTarget,
      'onUpdate:open': (value: boolean) => changes.push(value),
    },
  })
  try {
    await flushPromises()
    const input = popupTarget.querySelector('input')!
    expect(input).toBeTruthy()
    input.dispatchEvent(new FocusEvent('focusin', { bubbles: true, composed: true }))
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([])
    sibling.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    wrapper.unmount()
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([])
  } finally {
    host.remove()
  }
})


test.each([
  ['Input', Input, { modelValue: 'value' }],
  ['InputNumber', InputNumber, { modelValue: 20 }],
  ['Select', Select, { modelValue: 'a', options: [{ label: 'A', value: 'a' }] }],
  ['Cascader', Cascader, { modelValue: 'a', options: [{ label: 'A', value: 'a' }] }],
] as const)('%s keeps its editor open for a closed-shadow internal click', async (_name, Component, componentProps) => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode: 'closed' })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  shadow.append(mountPoint, popupTarget)
  const changes: boolean[] = []
  const wrapper = mount({
    setup: () => () => h(Component as any, {
      ...componentProps, editMode: 'click', open: true, popupContainer: popupTarget,
      'onUpdate:open': (value: boolean) => changes.push(value),
    }),
  }, { attachTo: mountPoint })
  try {
    await flushPromises()
    const overlay = popupTarget.querySelector('.c-field-presentation__overlay')
    expect(overlay).toBeTruthy()
    overlay!.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([])
    expect(popupTarget.contains(overlay)).toBe(true)
  } finally {
    wrapper.unmount()
    host.remove()
  }
})

test('tracks a popup moved into a closed shadow root', async () => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode: 'closed' })
  const mountPoint = document.createElement('div')
  const popupHost = document.createElement('div')
  document.body.append(popupHost)
  const popupRoot = popupHost.attachShadow({ mode: 'closed' })
  const popupTarget = document.createElement('div')
  shadow.append(mountPoint)
  popupRoot.append(popupTarget)
  const target = ref<HTMLElement>(document.body)
  const changes: boolean[] = []
  const wrapper = mount({ setup: () => () => h(Slider, {
    modelValue: 20, showInput: true, editMode: 'click', open: true, popupContainer: target.value,
    'onUpdate:open': (value: boolean) => changes.push(value),
  }) }, { attachTo: mountPoint })
  try {
    await flushPromises()
    target.value = popupTarget
    await flushPromises()
    const input = popupTarget.querySelector('input')
    expect(input).toBeTruthy()
    input!.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([])
  } finally {
    wrapper.unmount()
    host.remove()
    popupHost.remove()
  }
})

test('does not let an outside event from the previous opening close a reopened editor', async () => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode: 'closed' })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  const sibling = document.createElement('button')
  shadow.append(mountPoint, popupTarget, sibling)
  const changes: boolean[] = []
  const wrapper = mount(Slider, { attachTo: mountPoint, props: {
    modelValue: 20, showInput: true, editMode: 'click', open: true, popupContainer: popupTarget,
    'onUpdate:open': (value: boolean) => changes.push(value),
  } })
  try {
    await flushPromises()
    sibling.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await wrapper.setProps({ open: false })
    await wrapper.setProps({ open: true })
    await new Promise((resolve) => setTimeout(resolve, 0))
    await flushPromises()
    expect(changes).toEqual([])
    expect(popupTarget.querySelector('input')).toBeTruthy()
  } finally {
    wrapper.unmount()
    host.remove()
  }
})

test('does not submit twice when a closed-root outside click also moves focus', async () => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode: 'closed' })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  const sibling = document.createElement('button')
  shadow.append(mountPoint, popupTarget, sibling)
  const changes: boolean[] = []
  const wrapper = mount(Slider, { attachTo: mountPoint, props: {
    modelValue: 20, showInput: true, editMode: 'click', open: true, popupContainer: popupTarget,
    'onUpdate:open': (value: boolean) => changes.push(value),
  } })
  try {
    await flushPromises()
    sibling.dispatchEvent(new FocusEvent('focusin', { bubbles: true, composed: true }))
    sibling.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await new Promise((resolve) => setTimeout(resolve, 20))
    await flushPromises()
    expect(changes).toEqual([false])
  } finally {
    wrapper.unmount()
    host.remove()
  }
})

test('does not deliver a pending outside click after leaving and returning to edit mode', async () => {
  const host = document.createElement('div')
  document.body.append(host)
  const shadow = host.attachShadow({ mode: 'closed' })
  const mountPoint = document.createElement('div')
  const popupTarget = document.createElement('div')
  const sibling = document.createElement('button')
  shadow.append(mountPoint, popupTarget, sibling)
  const changes: boolean[] = []
  const wrapper = mount(Slider, { attachTo: mountPoint, props: {
    modelValue: 20, showInput: true, editMode: 'click', open: true, popupContainer: popupTarget,
    'onUpdate:open': (value: boolean) => changes.push(value),
  } })
  try {
    await flushPromises()
    vi.useFakeTimers()
    sibling.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }))
    await wrapper.setProps({ readPretty: true })
    expect(changes).toEqual([false])
    await wrapper.setProps({ readPretty: false })
    expect(changes).toEqual([false])
    vi.runAllTimers()
    vi.useRealTimers()
    await flushPromises()
    expect(changes).toEqual([false])
  } finally {
    vi.useRealTimers()
    wrapper.unmount()
    host.remove()
  }
})

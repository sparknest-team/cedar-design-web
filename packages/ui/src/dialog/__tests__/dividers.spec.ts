import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { afterEach, expect, test } from 'vitest'
import Service from '..'
import Component from '../Dialog.vue'

const owners: ReturnType<typeof mount>[] = []
const handles: { close: () => void }[] = []
afterEach(async () => {
  owners.splice(0).forEach(owner => owner.unmount())
  const services = handles.splice(0)
  services.forEach(handle => handle.close())
  if (services.length) await new Promise(resolve => setTimeout(resolve, 360))
})

function fixture(props = {}, slots = {}) {
  const owner = mount(Component, {
    global: { stubs: { transition: false } },
    props: { open: true, popupContainer: false, title: 'Title', ...props },
    slots: { default: () => h('input', { 'data-divider-draft': '', value: 'Draft' }), ...slots },
  })
  owners.push(owner)
  return owner
}

test('dividers default off and update independently without remounting content', async () => {
  const owner = fixture()
  const input = owner.get('input').element
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(false)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(false)
  await owner.setProps({ topDivider: true })
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(true)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(false)
  await owner.setProps({ bottomDivider: true, topDivider: false })
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(false)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(true)
  expect(owner.get('input').element).toBe(input)
})

test('custom title and footer slots retain divider controls', () => {
  const owner = fixture({ topDivider: true, bottomDivider: true }, {
    title: () => h('span', 'Custom title'),
    footer: () => h('button', 'Custom footer'),
  })
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(true)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(true)
  expect(owner.text()).toContain('Custom footer')
})

test('hidden header and footer leave no orphan divider', async () => {
  const owner = fixture({ topDivider: true, bottomDivider: true })
  await owner.setProps({ hideTitle: true, footer: false })
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(false)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(false)
})

test('service configuration and updates support both divider flags', async () => {
  const handle = Service.open({ title: 'Service', content: 'Content', topDivider: true, bottomDivider: true })
  handles.push(handle)
  await nextTick()
  await nextTick()
  expect(document.querySelector('.c-dialog-header--divider')).not.toBeNull()
  expect(document.querySelector('.c-dialog-footer--divider')).not.toBeNull()
  handle.update({ topDivider: false, bottomDivider: false })
  await nextTick()
  expect(document.querySelector('.c-dialog-header--divider')).toBeNull()
  expect(document.querySelector('.c-dialog-footer--divider')).toBeNull()
})

test('simple dialogs respect explicit divider opt-in', () => {
  const owner = fixture({ simple: true, topDivider: true, bottomDivider: true })
  expect(owner.find('.c-dialog-header--divider').exists()).toBe(true)
  expect(owner.find('.c-dialog-footer--divider').exists()).toBe(true)
})

import { createSSRApp, h, ref, nextTick } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { mount, flushPromises } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Drawer from '..'
const owners = [], services = []
afterEach(async () => {
  services.splice(0).reverse().forEach(handle => handle.close())
  await flushPromises()
  await new Promise(resolve => setTimeout(resolve, 80))
  owners.splice(0).forEach(w => w.unmount())
})
const namedText = dialog => {
  const id = dialog.getAttribute('aria-labelledby')
  expect(id).toBeTruthy()
  const title = document.getElementById(id)
  expect(title).not.toBeNull()
  return { id, text: title.textContent }
}
test('visible title slot names the dialog and keeps its id on text changes', async () => {
  const title = ref('Account settings')
  const w = mount({ render: () => h(Drawer, { open: true, popupContainer: false }, { title: () => h('strong', title.value) }) }, { attachTo: document.body })
  owners.push(w)
  const dialog = w.get('[role=dialog]').element
  const first = namedText(dialog)
  expect(first.text).toBe('Account settings')
  title.value = 'Profile settings'
  await nextTick()
  expect(namedText(dialog)).toEqual({ id: first.id, text: 'Profile settings' })
})
test('explicit label wins and custom or hidden headers do not create dangling references', () => {
  for (const options of [
    { props: { ariaLabel: 'Explicit settings' }, slots: { title: 'Visible title' } },
    { props: { ariaLabel: 'Custom header' }, slots: { header: '<h2>Custom</h2>', title: 'Unused title' } },
    { props: { header: false }, slots: { title: 'Unused title' } },
  ]) {
    const w = mount(Drawer, { attachTo: document.body, ...options, props: { open: true, popupContainer: false, ...options.props } })
    owners.push(w)
    const dialog = w.get('[role=dialog]')
    expect(dialog.attributes('aria-labelledby')).toBeUndefined()
    expect(dialog.attributes('aria-label')).toBe(options.props.ariaLabel)
  }
})
test('declarative and multiple function-title service roots have unique valid title references', async () => {
  const w = mount(Drawer, { attachTo: document.body, props: { open: true, popupContainer: false }, slots: { title: 'Declarative title' } })
  owners.push(w)
  const context = w.vm.$.appContext
  services.push(Drawer.open({ title: 'First service', content: 'First body' }, context))
  services.push(Drawer.open({ title: () => h('em', 'Second service'), content: 'Second body' }, context))
  await flushPromises()
  const names = Array.from(document.querySelectorAll('[role=dialog]')).map(namedText)
  expect(names.map(x => x.text)).toEqual(['Declarative title', 'First service', 'Second service'])
  expect(new Set(names.map(x => x.id)).size).toBe(3)
})

test('changing the header slot releases and restores the same title reference', async () => {
  const custom = ref(false)
  const w = mount({ render: () => h(Drawer, { open: true, popupContainer: false }, { title: () => h('strong', 'Settings'), ...(custom.value ? { header: () => h('h2', 'Custom header') } : {}) }) }, { attachTo: document.body })
  owners.push(w)
  const dialog = w.get('[role=dialog]').element
  const original = namedText(dialog)
  custom.value = true
  await nextTick()
  expect(dialog.getAttribute('aria-labelledby')).toBeNull()
  expect(document.getElementById(original.id)).toBeNull()
  custom.value = false
  await nextTick()
  expect(namedText(dialog)).toEqual(original)
})

test('declarative title ids remain deterministic across independent server render requests', async () => {
  const render = () => renderToString(createSSRApp({ render: () => h(Drawer, { open: true, popupContainer: false }, { title: () => h('strong', 'Server settings') }) }))
  const first = await render(), second = await render()
  const id = first.match(/aria-labelledby="([^"]+)"/)?.[1]
  expect(id).toBeTruthy()
  expect(first).toContain(`id="${id}"`)
  expect(second).toContain(`aria-labelledby="${id}"`)
  expect(second).toContain(`id="${id}"`)
})

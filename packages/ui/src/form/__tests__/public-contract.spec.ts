import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Form, { FormItem } from '..'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach(w => w.unmount()) })
test('field errors expose actual rich data through aggregate results and callback', async () => {
  const owner = mount(Form, { props: { model: { name: 'invalid' } }, slots: { default: () => h(FormItem, { field: 'name', label: 'Name', validateTrigger: [], rules: [{ validator: (_value: unknown, done: (message?: string) => void) => done('Invalid name') }] }, () => h('span', 'Control')) } })
  owners.push(owner)
  let callback: unknown
  const errors = await owner.vm.validate((result: unknown) => { callback = result })
  expect(errors).toEqual({ name: { field: 'name', label: 'Name', value: 'invalid', type: 'custom', isRequiredError: false, message: 'Invalid name' } })
  expect(callback).toEqual(errors)
})
test('public validation waits for a rule Promise and then reports success without collecting event returns', async () => {
  let finish!: () => void, settled = false
  const rule = { validator: async () => { await new Promise<void>(resolve => { finish = resolve }) } }
  const owner = mount(Form, { props: { model: { name: 'value' } }, slots: { default: () => h(FormItem, { field: 'name', validateTrigger: [], rules: rule }, () => h('span', 'Control')) } })
  owners.push(owner)
  const pending = owner.vm.validate().then((result: unknown) => { settled = true; return result })
  await nextTick(); expect(settled).toBe(false)
  finish(); expect(await pending).toBeUndefined(); expect(settled).toBe(true)
})

test('Cedar object required rules still validate independently of marker visibility', async () => {
  const hidden = ref(false)
  const owner = mount(Form, { props: { model: { name: '' } }, slots: { default: () => h(FormItem, { field: 'name', label: 'Name', hideAsterisk: hidden.value, rules: { required: true }, validateTrigger: [] }) } })
  owners.push(owner)
  expect(owner.find('strong').exists()).toBe(true)
  expect((await owner.vm.validate())?.name.isRequiredError).toBe(true)
  hidden.value = true
  await nextTick()
  expect(owner.find('strong').exists()).toBe(false)
  expect((await owner.vm.validate())?.name.isRequiredError).toBe(true)
})
